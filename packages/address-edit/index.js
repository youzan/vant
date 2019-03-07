import { use, isObj } from '../utils';
import { isMobile } from '../utils/validate/mobile';
import Area from '../area';
import Field from '../field';
import Popup from '../popup';
import Toast from '../toast';
import Button from '../button';
import Dialog from '../dialog';
import Detail from './Detail';
import SwitchCell from '../switch-cell';

const [sfc, bem, t] = use('address-edit');

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
  isDefault: false
};

export default sfc({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    addressInfo: {
      type: Object,
      default: () => ({ ...defaultData })
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  },

  data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },

  computed: {
    areaListLoaded() {
      return isObj(this.areaList) && Object.keys(this.areaList).length;
    },

    areaText() {
      const { country, province, city, county, areaCode } = this.data;
      if (areaCode) {
        const arr = [country, province, city, county];
        if (province && province === city) {
          arr.splice(1, 1);
        }
        return arr.filter(text => text).join('/');
      }
      return '';
    }
  },

  watch: {
    addressInfo: {
      handler(val) {
        this.data = {
          ...defaultData,
          ...val
        };

        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },

    areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },

    onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },

    onAreaConfirm(values) {
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
      const items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      const isValid = items.every(item => {
        const msg = this.getErrorMessage(item);
        if (msg) {
          this.errorInfo[item] = true;
          Toast(msg);
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
          return value && !/^\d{6}$/.test(value) ? t('postalEmpty') : '';
      }
    },

    onDelete() {
      Dialog.confirm({
        title: t('confirmDelete')
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

    setAddressDetail(value) {
      this.data.addressDetail = value;
    },

    onDetailBlur() {
      // await for click search event
      setTimeout(() => {
        this.detailFocused = false;
      });
    }
  },

  render(h) {
    const { data, errorInfo } = this;
    const onFocus = name => () => this.onFocus(name);

    // hide bottom field when use search && detail get focused
    const hideBottomFields = this.searchResult.length && this.detailFocused;

    return (
      <div class={bem()}>
        <Field
          vModel={data.name}
          clearable
          label={t('name')}
          placeholder={t('namePlaceholder')}
          error={errorInfo.name}
          onFocus={onFocus('name')}
        />
        <Field
          vModel={data.tel}
          clearable
          type="tel"
          label={t('tel')}
          placeholder={t('telPlaceholder')}
          error={errorInfo.tel}
          onFocus={onFocus('tel')}
        />
        <Field
          vShow={this.showArea}
          readonly
          label={t('area')}
          placeholder={t('areaPlaceholder')}
          value={this.areaText}
          onClick={() => {
            this.showAreaPopup = true;
          }}
        />
        <Detail
          vShow={this.showDetail}
          focused={this.detailFocused}
          value={data.addressDetail}
          error={errorInfo.addressDetail}
          detailRows={this.detailRows}
          searchResult={this.searchResult}
          showSearchResult={this.showSearchResult}
          onFocus={onFocus('addressDetail')}
          onBlur={this.onDetailBlur}
          onInput={this.onChangeDetail}
          onSelect-search={event => {
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
            error={errorInfo.postalCode}
            onFocus={onFocus('postalCode')}
          />
        )}
        {this.slots()}
        {this.showSetDefault && (
          <SwitchCell
            vModel={data.isDefault}
            vShow={!hideBottomFields}
            title={t('defaultAddress')}
            onChange={event => {
              this.$emit('change-default', event);
            }}
          />
        )}
        <div vShow={!hideBottomFields} class={bem('buttons')}>
          <Button
            block
            loading={this.isSaving}
            type="danger"
            text={this.saveButtonText || t('save')}
            onClick={this.onSave}
          />
          {this.showDelete && (
            <Button
              block
              loading={this.isDeleting}
              text={this.deleteButtonText || t('delete')}
              onClick={this.onDelete}
            />
          )}
        </div>
        <Popup
          vModel={this.showAreaPopup}
          position="bottom"
          lazyRender={false}
          getContainer="body"
        >
          <Area
            ref="area"
            loading={!this.areaListLoaded}
            value={data.areaCode}
            areaList={this.areaList}
            onConfirm={this.onAreaConfirm}
            onCancel={() => {
              this.showAreaPopup = false;
            }}
          />
        </Popup>
      </div>
    );
  }
});
