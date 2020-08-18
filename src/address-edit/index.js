// Utils
import { createNamespace, isObject } from '../utils';
import { isMobile } from '../utils/validate/mobile';

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
    disableArea: Boolean,
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

  data() {
    return {
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
    };
  },

  computed: {
    areaListLoaded() {
      return isObject(this.areaList) && Object.keys(this.areaList).length;
    },

    areaText() {
      const { country, province, city, county, areaCode } = this.data;
      if (areaCode) {
        const arr = [country, province, city, county];
        if (province && province === city) {
          arr.splice(1, 1);
        }
        return arr.filter((text) => text).join('/');
      }
      return '';
    },

    // hide bottom field when use search && detail get focused
    hideBottomFields() {
      const { searchResult } = this;
      return searchResult && searchResult.length && this.detailFocused;
    },
  },

  watch: {
    addressInfo: {
      handler(val) {
        this.data = {
          ...defaultData,
          ...val,
        };

        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true,
    },

    areaList() {
      this.setAreaCode(this.data.areaCode);
    },
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = '';
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },

    onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },

    onAreaConfirm(values) {
      values = values.filter((value) => !!value);

      if (values.some((value) => !value.code)) {
        Toast(t('areaEmpty'));
        return;
      }

      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },

    assignAreaValues() {
      const { area } = this.$refs;

      if (area) {
        const detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        Object.assign(this.data, detail);
      }
    },

    onSave() {
      const items = ['name', 'tel'];

      if (this.showArea) {
        items.push('areaCode');
      }

      if (this.showDetail) {
        items.push('addressDetail');
      }

      if (this.showPostal) {
        items.push('postalCode');
      }

      const isValid = items.every((item) => {
        const msg = this.getErrorMessage(item);
        if (msg) {
          this.errorInfo[item] = msg;
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },

    getErrorMessage(key) {
      const value = String(this.data[key] || '').trim();

      if (this.validator) {
        const message = this.validator(key, value);
        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');
        case 'areaCode':
          return value ? '' : t('areaEmpty');
        case 'addressDetail':
          return value ? '' : t('addressEmpty');
        case 'postalCode':
          return value && !this.postalValidator(value) ? t('postalEmpty') : '';
      }
    },

    onDelete() {
      Dialog.confirm({
        title: t('confirmDelete'),
      })
        .then(() => {
          this.$emit('delete', this.data);
        })
        .catch(() => {
          this.$emit('cancel-delete', this.data);
        });
    },

    // get values of area component
    getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },

    // set area code to area component
    setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },

    // @exposed-api
    setAddressDetail(value) {
      this.data.addressDetail = value;
    },

    onDetailBlur() {
      // await for click search event
      setTimeout(() => {
        this.detailFocused = false;
      });
    },

    genSetDefaultCell(h) {
      if (this.showSetDefault) {
        const slots = {
          'right-icon': () => (
            <Switch
              vModel={this.data.isDefault}
              size="24"
              onChange={(event) => {
                this.$emit('change-default', event);
              }}
            />
          ),
        };

        return (
          <Cell
            vShow={!this.hideBottomFields}
            center
            title={t('defaultAddress')}
            class={bem('default')}
            scopedSlots={slots}
          />
        );
      }

      return h();
    },
  },

  render(h) {
    const { data, errorInfo, disableArea, hideBottomFields } = this;
    const onFocus = (name) => () => this.onFocus(name);

    return (
      <div class={bem()}>
        <div class={bem('fields')}>
          <Field
            vModel={data.name}
            clearable
            label={t('name')}
            placeholder={t('namePlaceholder')}
            errorMessage={errorInfo.name}
            onFocus={onFocus('name')}
          />
          <Field
            vModel={data.tel}
            clearable
            type="tel"
            label={t('tel')}
            maxlength={this.telMaxlength}
            placeholder={t('telPlaceholder')}
            errorMessage={errorInfo.tel}
            onFocus={onFocus('tel')}
          />
          <Field
            vShow={this.showArea}
            readonly
            clickable={!disableArea}
            label={t('area')}
            placeholder={this.areaPlaceholder || t('areaPlaceholder')}
            errorMessage={errorInfo.areaCode}
            rightIcon={!disableArea ? 'arrow' : null}
            value={this.areaText}
            onFocus={onFocus('areaCode')}
            onClick={() => {
              this.$emit('click-area');
              this.showAreaPopup = !disableArea;
            }}
          />
          <Detail
            vShow={this.showDetail}
            focused={this.detailFocused}
            value={data.addressDetail}
            errorMessage={errorInfo.addressDetail}
            detailRows={this.detailRows}
            detailMaxlength={this.detailMaxlength}
            searchResult={this.searchResult}
            showSearchResult={this.showSearchResult}
            onFocus={onFocus('addressDetail')}
            onBlur={this.onDetailBlur}
            onInput={this.onChangeDetail}
            onSelect-search={(event) => {
              this.$emit('select-search', event);
            }}
          />
          {this.showPostal && (
            <Field
              vShow={!hideBottomFields}
              vModel={data.postalCode}
              type="tel"
              maxlength="6"
              label={t('postal')}
              placeholder={t('postal')}
              errorMessage={errorInfo.postalCode}
              onFocus={onFocus('postalCode')}
            />
          )}
          {this.slots()}
        </div>
        {this.genSetDefaultCell(h)}
        <div vShow={!hideBottomFields} class={bem('buttons')}>
          <Button
            block
            round
            loading={this.isSaving}
            type="danger"
            text={this.saveButtonText || t('save')}
            onClick={this.onSave}
          />
          {this.showDelete && (
            <Button
              block
              round
              loading={this.isDeleting}
              text={this.deleteButtonText || t('delete')}
              onClick={this.onDelete}
            />
          )}
        </div>
        <Popup
          vModel={this.showAreaPopup}
          round
          position="bottom"
          lazyRender={false}
          getContainer="body"
        >
          <Area
            ref="area"
            value={data.areaCode}
            loading={!this.areaListLoaded}
            areaList={this.areaList}
            columnsPlaceholder={this.areaColumnsPlaceholder}
            onConfirm={this.onAreaConfirm}
            onCancel={() => {
              this.showAreaPopup = false;
            }}
          />
        </Popup>
      </div>
    );
  },
});
