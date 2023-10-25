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
import { Area, AreaList, AreaInstance } from '../area';
import { Cell } from '../cell';
import { Form } from '../form';
import { Field, FieldRule } from '../field';
import { Popup } from '../popup';
import { showToast } from '../toast';
import { Button } from '../button';
import { Switch } from '../switch';
import AddressEditDetail from './AddressEditDetail';

// Types
import type { AddressEditInfo, AddressEditSearchItem } from './types';
import { PickerConfirmEventParams, PickerOption } from '../picker';
import { AREA_EMPTY_CODE } from '../area/utils';

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
  addressDetail: '',
};

export const addressEditProps = {
  areaList: Object as PropType<AreaList>,
  isSaving: Boolean,
  isDeleting: Boolean,
  validator: Function as PropType<
    (key: string, value: string) => string | undefined
  >,
  showArea: truthProp,
  showDetail: truthProp,
  showDelete: Boolean,
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
};

export type AddressEditProps = ExtractPropTypes<typeof addressEditProps>;

export default defineComponent({
  name,

  props: addressEditProps,

  emits: [
    'save',
    'focus',
    'change',
    'delete',
    'clickArea',
    'changeArea',
    'changeDetail',
    'selectSearch',
    'changeDefault',
  ],

  setup(props, { emit, slots }) {
    const areaRef = ref<AreaInstance>();

    const data = reactive({} as AddressEditInfo);
    const showAreaPopup = ref(false);
    const detailFocused = ref(false);

    const areaListLoaded = computed(
      () => isObject(props.areaList) && Object.keys(props.areaList).length,
    );

    const areaText = computed(() => {
      const { province, city, county, areaCode } = data;
      if (areaCode) {
        const arr = [province, city, county];
        if (province && province === city) {
          arr.splice(1, 1);
        }
        return arr.filter(Boolean).join('/');
      }
      return '';
    });

    // hide bottom field when use search && detail get focused
    const hideBottomFields = computed(
      () => props.searchResult?.length && detailFocused.value,
    );

    const onFocus = (key: string) => {
      detailFocused.value = key === 'addressDetail';
      emit('focus', key);
    };

    const onChange = (key: string, value: string) => {
      emit('change', { key, value });
    };

    const rules = computed<Record<string, FieldRule[]>>(() => {
      const { validator, telValidator } = props;

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
      };
    });

    const onSave = () => emit('save', data);

    const onChangeDetail = (val: string) => {
      data.addressDetail = val;
      emit('changeDetail', val);
    };

    const assignAreaText = (options: PickerOption[]) => {
      data.province = options[0].text as string;
      data.city = options[1].text as string;
      data.county = options[2].text as string;
    };

    const onAreaConfirm = ({
      selectedValues,
      selectedOptions,
    }: PickerConfirmEventParams) => {
      if (selectedValues.some((value) => value === AREA_EMPTY_CODE)) {
        showToast(t('areaEmpty'));
      } else {
        showAreaPopup.value = false;
        assignAreaText(selectedOptions as PickerOption[]);
        emit('changeArea', selectedOptions);
      }
    };

    const onDelete = () => emit('delete', data);

    // set area code to area component
    const setAreaCode = (code?: string) => {
      data.areaCode = code || '';
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
              onChange={(event) => emit('changeDefault', event)}
            />
          ),
        };

        return (
          <Cell
            v-slots={slots}
            v-show={!hideBottomFields.value}
            center
            border={false}
            title={t('defaultAddress')}
            class={bem('default')}
          />
        );
      }
    };

    useExpose({
      setAreaCode,
      setAddressDetail,
    });

    watch(
      () => props.addressInfo,
      (value) => {
        extend(data, DEFAULT_DATA, value);
        nextTick(() => {
          const options = areaRef.value?.getSelectedOptions();
          if (
            options &&
            options.every(
              (option) => option && option.value !== AREA_EMPTY_CODE,
            )
          ) {
            assignAreaText(options as PickerOption[]);
          }
        });
      },
      {
        deep: true,
        immediate: true,
      },
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
              onUpdate:modelValue={(val) => onChange('name', val)}
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
              onUpdate:modelValue={(val) => onChange('tel', val)}
            />
            <Field
              v-show={props.showArea}
              readonly
              label={t('area')}
              is-link={!disableArea}
              modelValue={areaText.value}
              rules={props.showArea ? rules.value.areaCode : undefined}
              placeholder={props.areaPlaceholder || t('area')}
              onFocus={() => onFocus('areaCode')}
              onClick={() => {
                emit('clickArea');
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
              onSelectSearch={(event: Event) => emit('selectSearch', event)}
            />
            {slots.default?.()}
          </div>
          {renderSetDefaultCell()}
          <div v-show={!hideBottomFields.value} class={bem('buttons')}>
            <Button
              block
              round
              type="primary"
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
              v-model={data.areaCode}
              ref={areaRef}
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
