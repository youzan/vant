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
        v-model="data.tel"
        type="tel"
        :label="$t('tel')"
        :placeholder="$t('telPlaceholder')"
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
        :focused="detailFocused"
        :value="data.address_detail"
        :error="errorInfo.address_detail"
        :search-result="searchResult"
        :show-search-result="showSearchResult"
        @focus="onFocus('address_detail')"
        @blur="detailFocused = false"
        @input="onChangeDetail"
        @select-search="$emit('select-search', $event)"
      />
      <field
        v-if="showPostal"
        v-show="!hideBottomFields"
        v-model="data.postal_code"
        type="tel"
        maxlength="6"
        class="van-hairline--top"
        :label="$t('postal')"
        :placeholder="$t('postal')"
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
        {{ saveButtonText || $t('save') }}
      </van-button>
      <van-button block :loading="isDeleting" @click="onDelete" v-if="isEdit">
        {{ deleteButtonText || $t('delete') }}
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

const defaultData = {
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
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    addressInfo: {
      type: Object,
      default: () => ({ ...defaultData })
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
      data: {},
      showArea: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postal_code: false,
        address_detail: false
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
      return province && city && county && area_code
        ? `${province} ${city} ${county}`
        : '';
    }
  },

  watch: {
    addressInfo: {
      handler(val) {
        this.data = {
          ...defaultData,
          ...val
        };

        this.setAreaCode(val.area_code);
      },
      deep: true,
      immediate: true
    },

    areaList() {
      this.setAreaCode(this.data.area_code);
    }
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
      this.showArea = false;
      this.data.area_code = values[2].code;
      this.assignAreaValues(values);
      this.$emit('change-area', values);
    },

    assignAreaValues(values) {
      Object.assign(this.data, {
        province: values[0].name,
        city: values[1].name,
        county: values[2].name
      });
    },

    onSave() {
      const items = ['name', 'tel', 'area_code', 'address_detail'];

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
