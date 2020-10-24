import { h, ref, watch, computed, nextTick, reactive } from 'vue';

// Utils
import { createNamespace, isObject } from '../utils';
import { isMobile } from '../utils/validate/mobile';

// Composition
import { useExpose } from '../composition/use-expose';

// Components
import Area from '../area';
import Cell from '../cell';
import Field from '../field';
import Popup from '../popup';
import Toast from '../toast';
import Button from '../button';
import Dialog from '../dialog';
import Detail from './Detail';
import Switch from '../switch';

const [createComponent, bem, t] = createNamespace('address-edit');

const defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false,
};

function isPostal(value) {
  return /^\d{6}$/.test(value);
}

export default createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    disableArea: Boolean,
    searchResult: Array,
    telMaxlength: [Number, String],
    showSetDefault: Boolean,
    saveButtonText: String,
    areaPlaceholder: String,
    deleteButtonText: String,
    showSearchResult: Boolean,
    showArea: {
      type: Boolean,
      default: true,
    },
    showDetail: {
      type: Boolean,
      default: true,
    },
    detailRows: {
      type: [Number, String],
      default: 1,
    },
    detailMaxlength: {
      type: [Number, String],
      default: 200,
    },
    addressInfo: {
      type: Object,
      default: () => ({ ...defaultData }),
    },
    telValidator: {
      type: Function,
      default: isMobile,
    },
    postalValidator: {
      type: Function,
      default: isPostal,
    },
    areaColumnsPlaceholder: {
      type: Array,
      default: () => [],
    },
  },

  emits: [
    'save',
    'focus',
    'delete',
    'click-area',
    'change-area',
    'change-detail',
    'cancel-delete',
    'select-search',
    'change-default',
  ],

  setup(props, { emit, slots }) {
    const areaRef = ref();

    const state = reactive({
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: '',
        name: '',
        areaCode: '',
        postalCode: '',
        addressDetail: '',
      },
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
        return arr.filter((text) => text).join('/');
      }
      return '';
    });

    // hide bottom field when use search && detail get focused
    const hideBottomFields = computed(() => {
      const { searchResult } = props;
      return searchResult && searchResult.length && state.detailFocused;
    });

    const assignAreaValues = () => {
      if (areaRef.value) {
        const detail = areaRef.value.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        Object.assign(state.data, detail);
      }
    };

    const onFocus = (key) => {
      state.errorInfo[key] = '';
      state.detailFocused = key === 'addressDetail';
      emit('focus', key);
    };

    const getErrorMessage = (key) => {
      const value = String(state.data[key] || '').trim();

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

    const onChangeDetail = (val) => {
      state.data.addressDetail = val;
      emit('change-detail', val);
    };

    const onAreaConfirm = (values) => {
      values = values.filter((value) => !!value);

      if (values.some((value) => !value.code)) {
        Toast(t('areaEmpty'));
        return;
      }

      state.showAreaPopup = false;
      assignAreaValues();
      emit('change-area', values);
    };

    const onDelete = () => {
      Dialog.confirm({
        title: t('confirmDelete'),
      })
        .then(() => {
          emit('delete', state.data);
        })
        .catch(() => {
          emit('cancel-delete', state.data);
        });
    };

    // get values of area component
    const getArea = () => (areaRef.value ? areaRef.value.getValues() : []);

    // set area code to area component
    const setAreaCode = (code) => {
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

    const setAddressDetail = (value) => {
      state.data.addressDetail = value;
    };

    const renderSetDefaultCell = () => {
      if (props.showSetDefault) {
        const slots = {
          'right-icon': () => (
            <Switch
              vModel={state.data.isDefault}
              size="24"
              onChange={(event) => {
                emit('change-default', event);
              }}
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

      return h();
    };

    useExpose({
      getArea,
      setAddressDetail,
    });

    watch(
      () => props.areaList,
      () => {
        setAreaCode(state.data.areaCode);
      }
    );

    watch(
      () => props.addressInfo,
      (value) => {
        state.data = {
          ...defaultData,
          ...value,
        };
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
              vModel={data.name}
              clearable
              label={t('name')}
              placeholder={t('namePlaceholder')}
              errorMessage={errorInfo.name}
              onFocus={() => onFocus('name')}
            />
            <Field
              vModel={data.tel}
              clearable
              type="tel"
              label={t('tel')}
              maxlength={props.telMaxlength}
              placeholder={t('telPlaceholder')}
              errorMessage={errorInfo.tel}
              onFocus={() => onFocus('tel')}
            />
            <Field
              v-show={props.showArea}
              readonly
              label={t('area')}
              clickable={!disableArea}
              rightIcon={!disableArea ? 'arrow' : null}
              modelValue={areaText.value}
              placeholder={props.areaPlaceholder || t('areaPlaceholder')}
              errorMessage={errorInfo.areaCode}
              onFocus={() => onFocus('areaCode')}
              onClick={() => {
                emit('click-area');
                state.showAreaPopup = !disableArea;
              }}
            />
            <Detail
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
              onSelect-search={(event) => {
                emit('select-search', event);
              }}
            />
            {props.showPostal && (
              <Field
                v-show={!hideBottomFields.value}
                vModel={data.postalCode}
                type="tel"
                maxlength="6"
                label={t('postal')}
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
              loading={props.isSaving}
              type="danger"
              text={props.saveButtonText || t('save')}
              onClick={onSave}
            />
            {props.showDelete && (
              <Button
                block
                round
                loading={props.isDeleting}
                text={props.deleteButtonText || t('delete')}
                onClick={onDelete}
              />
            )}
          </div>
          <Popup
            vModel={[state.showAreaPopup, 'show']}
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
