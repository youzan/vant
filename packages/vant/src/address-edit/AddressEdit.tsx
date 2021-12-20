import {
  ref,
  watch,
  computed,
  nextTick,
  reactive,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  extend,
  isObject,
  isMobile,
  truthProp,
  numericProp,
  makeArrayProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

// Composables
import { useExpose } from '../composables/use-expose';

// Components
import { Area, AreaList, AreaColumnOption, AreaInstance } from '../area';
import { Cell } from '../cell';
import { Form } from '../form';
import { Field, FieldRule } from '../field';
import { Popup } from '../popup';
import { Toast } from '../toast';
import { Button } from '../button';
import { Switch } from '../switch';
import AddressEditDetail from './AddressEditDetail';

// Types
import type { AddressEditInfo, AddressEditSearchItem } from './types';

const [name, bem, t] = createNamespace('address-edit');

const DEFAULT_DATA: AddressEditInfo = {
  name: '',
  tel: '',
  city: '',
  county: '',
  country: '',
  province: '',
  areaCode: '',
  isDefault: false,
  postalCode: '',
  addressDetail: '',
};

const isPostal = (value: string) => /^\d{6}$/.test(value);

const addressEditProps = {
  areaList: Object as PropType<AreaList>,
  isSaving: Boolean,
  isDeleting: Boolean,
  validator: Function as PropType<
    (key: string, value: string) => string | undefined
  >,
  showArea: truthProp,
  showDetail: truthProp,
  showDelete: Boolean,
  showPostal: Boolean,
  disableArea: Boolean,
  searchResult: Array as PropType<AddressEditSearchItem[]>,
  telMaxlength: numericProp,
  showSetDefault: Boolean,
  saveButtonText: String,
  areaPlaceholder: String,
  deleteButtonText: String,
  showSearchResult: Boolean,
  detailRows: makeNumericProp(1),
  detailMaxlength: makeNumericProp(200),
  areaColumnsPlaceholder: makeArrayProp<string>(),
  addressInfo: {
    type: Object as PropType<Partial<AddressEditInfo>>,
    default: () => extend({}, DEFAULT_DATA),
  },
  telValidator: {
    type: Function as PropType<(val: string) => boolean>,
    default: isMobile,
  },
  postalValidator: {
    type: Function as PropType<(val: string) => boolean>,
    default: isPostal,
  },
};

export type AddressEditProps = ExtractPropTypes<typeof addressEditProps>;

export default defineComponent({
  name,

  props: addressEditProps,

  emits: [
    'save',
    'focus',
    'delete',
    'click-area',
    'change-area',
    'change-detail',
    'select-search',
    'change-default',
  ],

  setup(props, { emit, slots }) {
    const areaRef = ref<AreaInstance>();

    const data = reactive({} as AddressEditInfo);
    const showAreaPopup = ref(false);
    const detailFocused = ref(false);

    const areaListLoaded = computed(
      () => isObject(props.areaList) && Object.keys(props.areaList).length
    );

    const areaText = computed(() => {
      const { country, province, city, county, areaCode } = data;
      if (areaCode) {
        const arr = [country, province, city, county];
        if (province && province === city) {
          arr.splice(1, 1);
        }
        return arr.filter(Boolean).join('/');
      }
      return '';
    });

    // hide bottom field when use search && detail get focused
    const hideBottomFields = computed(
      () => props.searchResult?.length && detailFocused.value
    );

    const assignAreaValues = () => {
      if (areaRef.value) {
        const detail: Record<string, string> = areaRef.value.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        extend(data, detail);
      }
    };

    const onFocus = (key: string) => {
      detailFocused.value = key === 'addressDetail';
      emit('focus', key);
    };

    const rules = computed<Record<string, FieldRule[]>>(() => {
      const { validator, telValidator, postalValidator } = props;

      const makeRule = (name: string, emptyMessage: string): FieldRule => ({
        validator: (value) => {
          if (validator) {
            const message = validator(name, value);
            if (message) {
              return message;
            }
          }
          if (!value) {
            return emptyMessage;
          }
          return true;
        },
      });

      return {
        name: [makeRule('name', t('nameEmpty'))],
        tel: [
          makeRule('tel', t('telInvalid')),
          { validator: telValidator, message: t('telInvalid') },
        ],
        areaCode: [makeRule('areaCode', t('areaEmpty'))],
        addressDetail: [makeRule('addressDetail', t('addressEmpty'))],
        postalCode: [
          makeRule('addressDetail', t('postalEmpty')),
          { validator: postalValidator, message: t('postalEmpty') },
        ],
      };
    });

    const onSave = () => emit('save', data);

    const onChangeDetail = (val: string) => {
      data.addressDetail = val;
      emit('change-detail', val);
    };

    const onAreaConfirm = (values: AreaColumnOption[]) => {
      values = values.filter(Boolean);

      if (values.some((value) => !value.code)) {
        Toast(t('areaEmpty'));
      } else {
        showAreaPopup.value = false;
        assignAreaValues();
        emit('change-area', values);
      }
    };

    const onDelete = () => emit('delete', data);

    // get values of area component
    const getArea = () => areaRef.value?.getValues() || [];

    // set area code to area component
    const setAreaCode = (code?: string) => {
      data.areaCode = code || '';

      if (code) {
        nextTick(assignAreaValues);
      }
    };

    const onDetailBlur = () => {
      // await for click search event
      setTimeout(() => {
        detailFocused.value = false;
      });
    };

    const setAddressDetail = (value: string) => {
      data.addressDetail = value;
    };

    const renderSetDefaultCell = () => {
      if (props.showSetDefault) {
        const slots = {
          'right-icon': () => (
            <Switch
              v-model={data.isDefault}
              size="24"
              onChange={(event) => emit('change-default', event)}
            />
          ),
        };

        return (
          <Cell
            v-slots={slots}
            v-show={!hideBottomFields.value}
            center
            title={t('defaultAddress')}
            class={bem('default')}
          />
        );
      }
    };

    useExpose({
      getArea,
      setAreaCode,
      setAddressDetail,
    });

    watch(
      () => props.areaList,
      () => setAreaCode(data.areaCode)
    );

    watch(
      () => props.addressInfo,
      (value) => {
        extend(data, DEFAULT_DATA, value);
        setAreaCode(value.areaCode);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    return () => {
      const { disableArea } = props;

      return (
        <Form class={bem()} onSubmit={onSave}>
          <div class={bem('fields')}>
            <Field
              v-model={data.name}
              clearable
              label={t('name')}
              rules={rules.value.name}
              placeholder={t('name')}
              onFocus={() => onFocus('name')}
            />
            <Field
              v-model={data.tel}
              clearable
              type="tel"
              label={t('tel')}
              rules={rules.value.tel}
              maxlength={props.telMaxlength}
              placeholder={t('tel')}
              onFocus={() => onFocus('tel')}
            />
            <Field
              v-show={props.showArea}
              readonly
              label={t('area')}
              is-link={!disableArea}
              modelValue={areaText.value}
              rules={rules.value.areaCode}
              placeholder={props.areaPlaceholder || t('area')}
              onFocus={() => onFocus('areaCode')}
              onClick={() => {
                emit('click-area');
                showAreaPopup.value = !disableArea;
              }}
            />
            <AddressEditDetail
              show={props.showDetail}
              rows={props.detailRows}
              rules={rules.value.addressDetail}
              value={data.addressDetail}
              focused={detailFocused.value}
              maxlength={props.detailMaxlength}
              searchResult={props.searchResult}
              showSearchResult={props.showSearchResult}
              onBlur={onDetailBlur}
              onFocus={() => onFocus('addressDetail')}
              onInput={onChangeDetail}
              onSelect-search={(event: Event) => emit('select-search', event)}
            />
            {props.showPostal && (
              <Field
                v-show={!hideBottomFields.value}
                v-model={data.postalCode}
                type="tel"
                rules={rules.value.postalCode}
                label={t('postal')}
                maxlength="6"
                placeholder={t('postal')}
                onFocus={() => onFocus('postalCode')}
              />
            )}
            {slots.default?.()}
          </div>
          {renderSetDefaultCell()}
          <div v-show={!hideBottomFields.value} class={bem('buttons')}>
            <Button
              block
              round
              type="danger"
              text={props.saveButtonText || t('save')}
              class={bem('button')}
              loading={props.isSaving}
              nativeType="submit"
            />
            {props.showDelete && (
              <Button
                block
                round
                class={bem('button')}
                loading={props.isDeleting}
                text={props.deleteButtonText || t('delete')}
                onClick={onDelete}
              />
            )}
          </div>
          <Popup
            v-model:show={showAreaPopup.value}
            round
            teleport="body"
            position="bottom"
            lazyRender={false}
          >
            <Area
              ref={areaRef}
              value={data.areaCode}
              loading={!areaListLoaded.value}
              areaList={props.areaList}
              columnsPlaceholder={props.areaColumnsPlaceholder}
              onConfirm={onAreaConfirm}
              onCancel={() => {
                showAreaPopup.value = false;
              }}
            />
          </Popup>
        </Form>
      );
    };
  },
});
