<template>
  <div :class="b()">
    <cell-group>
      <field
        v-model="data.name"
        maxlength="15"
        :placeholder="$t('name')"
        :label="$t('receiver')"
        :error="errorInfo.name"
        @focus="onFocus('name')"
      />
      <field
        type="tel"
        :label="$t('tel')"
        :placeholder="$t('telPlaceholder')"
        v-model="data.tel"
        :error="errorInfo.tel"
        @focus="onFocus('tel')"
      />
      <field
        readonly
        :label="$t('area')"
        :placeholder="$t('area')"
        :value="areaText"
        @click="showArea = true"
      />
      <address-edit-detail
        :value="data.address_detail"
        :is-error="errorInfo.address_detail"
        :show-search-result="showSearchResult"
        :search-result="searchResult"
        @focus="onFocus('address_detail')"
        @blur="detailFocused = false"
        @input="onChangeDetail"
        @select-search="$emit('select-search', $event)"
      />
      <field
        v-if="showPostal"
        v-show="!hideBottomFields"
        type="tel"
        :label="$t('postal')"
        :placeholder="$t('postal')"
        v-model="data.postal_code"
        maxlength="6"
        class="van-hairline--top"
        :error="errorInfo.postal_code"
        @focus="onFocus('postal_code')"
      />
      <slot />
      <switch-cell
        v-if="showSetDefault"
        v-show="!hideBottomFields"
        v-model="data.is_default"
        :title="$t('defaultAddress')"
      />
    </cell-group>
    <div v-show="!hideBottomFields" :class="b('buttons')">
      <van-button block :loading="isSaving" @click="onSave" type="primary">
        {{ $t('save') }}
      </van-button>
      <van-button block :loading="isDeleting" @click="onDelete" v-if="isEdit">
        {{ $t('delete') }}
      </van-button>
    </div>
    <popup v-model="showArea" position="bottom" :lazy-render="false" :get-container="getAreaContainer">
      <van-area
        ref="area"
        :loading="!areaListLoaded"
        :value="data.area_code"
        :area-list="areaList"
        @confirm="onAreaConfirm"
        @cancel="showArea = false"
      />
    </popup>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import create from '../utils/create';
import { isObj } from '../utils';
import Field from '../field';
import VanButton from '../button';
import Popup from '../popup';
import Toast from '../toast';
import Dialog from '../dialog';
import VanArea from '../area';
import AddressEditDetail from './Detail';
import SwitchCell from '../switch-cell';
import validateMobile from '../utils/validate/mobile';

const defaultAddress = {
  name: '',
  tel: '',
  province: '',
  city: '',
  county: '',
  area_code: '',
  postal_code: '',
  address_detail: '',
  is_default: false
};

export default create({
  name: 'address-edit',

  components: {
    Field,
    Popup,
    VanArea,
    VanButton,
    SwitchCell,
    AddressEditDetail
  },

  props: {
    isSaving: Boolean,
    isDeleting: Boolean,
    areaList: Object,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    addressInfo: {
      type: Object,
      default: () => ({ ...defaultAddress })
    },
    searchResult: {
      type: Array,
      default: () => []
    },
    telValidator: {
      type: Function,
      default: validateMobile
    }
  },

  data() {
    return {
      showArea: false,
      data: {
        ...defaultAddress,
        ...this.addressInfo
      },
      detailFocused: false,
      errorInfo: {
        name: false,
        tel: false,
        address_detail: false,
        postal_code: false
      }
    };
  },

  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },

    areaListLoaded() {
      return isObj(this.areaList) && Object.keys(this.areaList).length;
    },

    isEdit() {
      return this.showDelete || !!this.data.id;
    },

    areaText() {
      const { province, city, county, area_code } = this.data;
      if (province && city && county && area_code) {
        return `${province} ${city} ${county}`;
      }
      return '';
    }
  },

  watch: {
    addressInfo: {
      handler(val) {
        this.data = {
          ...defaultAddress,
          ...val
        };

        this.setAreaCode(val.area_code);
      },
      deep: true
    },

    areaList() {
      this.setAreaCode(this.data.area_code);
    }
  },

  created() {
    this.setAreaCode(this.data.area_code);
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'address_detail';
      this.$emit('focus', key);
    },

    onChangeDetail(val) {
      this.data.address_detail = val;
      this.$emit('change-detail', val);
    },

    onAreaConfirm(values) {
      this.data.area_code = values[2].code;
      this.assignAreaValues(values);
      this.showArea = false;
      this.$emit('change-area', values);
    },

    assignAreaValues(values) {
      if (values.length >= 3) {
        Object.assign(this.data, {
          province: values[0].name,
          city: values[1].name,
          county: values[2].name
        });
      }
    },

    onSave() {
      const items = [
        'name',
        'tel',
        'area_code',
        'address_detail'
      ];

      if (this.showPostal) {
        items.push('postal_code');
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
      const value = this.data[key].trim();
      const { $t } = this;

      switch (key) {
        case 'name':
          return value ? '' : $t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : $t('telInvalid');
        case 'area_code':
          return value ? '' : $t('areaEmpty');
        case 'address_detail':
          return value ? '' : $t('addressEmpty');
        case 'postal_code':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },

    onDelete() {
      Dialog.confirm({
        title: this.$t('confirmDelete')
      }).then(() => {
        this.$emit('delete', this.data);
      }).catch(() => {
        this.$emit('cancel-delete', this.data);
      });
    },

    // get values of area component
    getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },

    // set area code to area component
    setAreaCode(code) {
      this.data.area_code = code || '';
      this.$nextTick(() => {
        this.$nextTick(() => {
          const { area } = this.$refs;
          if (area) {
            this.assignAreaValues(area.getValues());
          }
        });
      });
    },

    getAreaContainer() {
      return document.body;
    }
  }
});
</script>
