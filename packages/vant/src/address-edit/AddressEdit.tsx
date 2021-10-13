import {
  ref,
  watch,
  computed,
  nextTick,
  reactive,
  PropType,
  defineComponent,
  ExtractPropTypes,
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
import { Field } from '../field';
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

const props = {
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

export type AddressEditProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

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

    const state = reactive({
      data: {} as AddressEditInfo,
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: '',
        name: '',
        areaCode: '',
        postalCode: '',
        addressDetail: '',
      } as Record<string, string>,
    });

    const areaListLoaded = computed(
      () => isObject(props.areaList) && Object.keys(props.areaList).length
    );

    const areaText = computed(() => {
      const { country, province, city, county, areaCode } = state.data;
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
      () => props.searchResult?.length && state.detailFocused
    );

    const assignAreaValues = () => {
      if (areaRef.value) {
        const detail: Record<string, string> = areaRef.value.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        extend(state.data, detail);
      }
    };

    const onFocus = (key: string) => {
      state.errorInfo[key] = '';
      state.detailFocused = key === 'addressDetail';
      emit('focus', key);
    };

    const getErrorMessage = (key: string) => {
      const value = String((state.data as any)[key] || '').trim();

      if (props.validator) {
        const message = props.validator(key, value);
        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');
        case 'tel':
          return props.telValidator(value) ? '' : t('telInvalid');
        case 'areaCode':
          return value ? '' : t('areaEmpty');
        case 'addressDetail':
          return value ? '' : t('addressEmpty');
        case 'postalCode':
          return value && !props.postalValidator(value) ? t('postalEmpty') : '';
      }
    };

    const onSave = () => {
      const items = ['name', 'tel'];

      if (props.showArea) {
        items.push('areaCode');
      }

      if (props.showDetail) {
        items.push('addressDetail');
      }

      if (props.showPostal) {
        items.push('postalCode');
      }

      const isValid = items.every((item) => {
        const msg = getErrorMessage(item);
        if (msg) {
          state.errorInfo[item] = msg;
        }
        return !msg;
      });

      if (isValid && !props.isSaving) {
        emit('save', state.data);
      }
    };

    const onChangeDetail = (val: string) => {
      state.data.addressDetail = val;
      emit('change-detail', val);
    };

    const onAreaConfirm = (values: AreaColumnOption[]) => {
      values = values.filter(Boolean);

      if (values.some((value) => !value.code)) {
        Toast(t('areaEmpty'));
        return;
      }

      state.showAreaPopup = false;
      assignAreaValues();
      emit('change-area', values);
    };

    const onDelete = () => emit('delete', state.data);

    // get values of area component
    const getArea = () => (areaRef.value ? areaRef.value.getValues() : []);

    // set area code to area component
    const setAreaCode = (code?: string) => {
      state.data.areaCode = code || '';

      if (code) {
        nextTick(assignAreaValues);
      }
    };

    const onDetailBlur = () => {
      // await for click search event
      setTimeout(() => {
        state.detailFocused = false;
      });
    };

    const setAddressDetail = (value: string) => {
      state.data.addressDetail = value;
    };

    const renderSetDefaultCell = () => {
      if (props.showSetDefault) {
        const slots = {
          'right-icon': () => (
            <Switch
              v-model={state.data.isDefault}
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

      return null;
    };

    useExpose({
      getArea,
      setAreaCode,
      setAddressDetail,
    });

    watch(
      () => props.areaList,
      () => setAreaCode(state.data.areaCode)
    );

    watch(
      () => props.addressInfo,
      (value) => {
        state.data = extend({}, DEFAULT_DATA, value);
        setAreaCode(value.areaCode);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    return () => {
      const { data, errorInfo } = state;
      const { disableArea } = props;

      return (
        <div class={bem()}>
          <div class={bem('fields')}>
            <Field
              v-model={data.name}
              clearable
              label={t('name')}
              placeholder={t('name')}
              errorMessage={errorInfo.name}
              onFocus={() => onFocus('name')}
            />
            <Field
              v-model={data.tel}
              clearable
              type="tel"
              label={t('tel')}
              maxlength={props.telMaxlength}
              placeholder={t('tel')}
              errorMessage={errorInfo.tel}
              onFocus={() => onFocus('tel')}
            />
            <Field
              v-show={props.showArea}
              readonly
              label={t('area')}
              is-link={!disableArea}
              modelValue={areaText.value}
              placeholder={props.areaPlaceholder || t('area')}
              errorMessage={errorInfo.areaCode}
              onFocus={() => onFocus('areaCode')}
              onClick={() => {
                emit('click-area');
                state.showAreaPopup = !disableArea;
              }}
            />
            <AddressEditDetail
              show={props.showDetail}
              value={data.addressDetail}
              focused={state.detailFocused}
              detailRows={props.detailRows}
              errorMessage={errorInfo.addressDetail}
              searchResult={props.searchResult}
              detailMaxlength={props.detailMaxlength}
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
                label={t('postal')}
                maxlength="6"
                placeholder={t('postal')}
                errorMessage={errorInfo.postalCode}
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
              onClick={onSave}
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
            v-model:show={state.showAreaPopup}
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
                state.showAreaPopup = false;
              }}
            />
          </Popup>
        </div>
      );
    };
  },
});
