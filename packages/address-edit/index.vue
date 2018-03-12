<template>
  <div class="van-address-edit">
    <cell-group>
      <field
        maxlength="15"
        :placeholder="$t('placeholder.name')"
        :label="$t('label.name', computedAddressText)"
        v-model="currentInfo.name"
        :error="errorInfo.name"
        @focus="onFocus('name')"
      />
      <field
        type="tel"
        :label="$t('label.tel')"
        :placeholder="$t('placeholder.tel')"
        v-model="currentInfo.tel"
        :error="errorInfo.tel"
        @focus="onFocus('tel')"
      />
      <cell
        clickable
        class="van-address-edit__area"
        :title="$t('areaTitle')"
        @click="showAreaSelect = true"
      >
        <span>{{ currentInfo.province || $t('placeholder.province') }}</span>
        <span>{{ currentInfo.city || $t('placeholder.city') }}</span>
        <span>{{ currentInfo.county || $t('placeholder.county') }}</span>
      </cell>
      <address-edit-detail
        :value="currentInfo.address_detail"
        :is-error="errorInfo.address_detail"
        :show-search-result="showSearchResult"
        :search-result="searchResult"
        @focus="onFocus('address_detail')"
        @blur="onDetailBlur"
        @input="onChangeDetail"
        @select-search="$emit('select-search', $event)"
      />
      <field
        v-if="showPostal"
        v-show="!hideBottomFields"
        type="tel"
        :label="$t('label.postal')"
        :placeholder="$t('placeholder.postal')"
        v-model="currentInfo.postal_code"
        maxlength="6"
        class="van-hairline--top"
        :error="errorInfo.postal_code"
        @focus="onFocus('postal_code')"
      />
      <slot />
      <switch-cell
        v-if="showSetDefault"
        v-show="!hideBottomFields"
        v-model="currentInfo.is_default"
        :title="$t('defaultAddress', computedAddressText)"
      />
    </cell-group>
    <div v-show="!hideBottomFields" class="van-address-edit__buttons">
      <van-button block :loading="isSaving" @click="onSaveAddress" type="primary">
        {{ $t('save') }}
      </van-button>
      <van-button block :loading="isDeleting" @click="onDeleteAddress" v-if="isEdit">
        {{ $t('deleteAddress', computedAddressText) }}
      </van-button>
    </div>
    <popup v-model="showAreaSelect" position="bottom">
      <van-area
        ref="area"
        :loading="!areaListLoaded"
        :value="currentInfo.area_code"
        :area-list="areaList"
        @confirm="onAreaConfirm"
        @cancel="showAreaSelect = false"
      />
    </popup>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import { create } from '../utils';
import Field from '../field';
import Cell from '../cell';
import CellGroup from '../cell-group';
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
  name: 'van-address-edit',

  components: {
    Field,
    Cell,
    CellGroup,
    SwitchCell,
    VanButton,
    Popup,
    VanArea,
    AddressEditDetail
  },

  props: {
    isSaving: Boolean,
    isDeleting: Boolean,
    areaList: Object,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    addressText: String,
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
      showAreaSelect: false,
      currentInfo: {
        ...defaultAddress,
        ...this.addressInfo
      },
      isEdit: !!this.addressInfo.id,
      detailFocused: false,
      errorInfo: {
        name: false,
        tel: false,
        address_detail: false,
        postal_code: false
      }
    };
  },

  watch: {
    addressInfo: {
      handler(val) {
        this.currentInfo = {
          ...defaultAddress,
          ...val
        };
        this.isEdit = !!val.id;

        if (val.area_code) {
          this.setAreaCode(val.area_code);
        }
      },
      deep: true
    },

    areaList() {
      if (this.currentInfo.area_code) {
        this.setAreaCode(this.currentInfo.area_code);
      }
    }
  },

  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },

    computedAddressText() {
      return this.addressText || this.$t('addressText');
    },

    areaListLoaded() {
      return !!Object.keys(this.areaList).length;
    }
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'address_detail';
      this.$emit('focus', key);
    },

    onDetailBlur() {
      this.detailFocused = false;
    },

    onChangeDetail(val) {
      this.currentInfo.address_detail = val;
      this.$emit('change-detail', val);
    },

    onAreaConfirm(values) {
      if (values.length !== 3 || +values[0].code === -1 || +values[1].code === -1 || +values[2].code === -1) {
        return Toast(this.$t('areaWrong'));
      }
      this.assignAreaValues(values);
      this.showAreaSelect = false;
      this.$emit('change-area', values);
    },

    assignAreaValues(values) {
      Object.assign(this.currentInfo, {
        province: values[0].name,
        city: values[1].name,
        county: values[2].name,
        area_code: values[2].code
      });
    },

    onSaveAddress() {
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
        const msg = this.getErrorMessageByKey(item);
        if (msg) {
          this.errorInfo[item] = true;
          Toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.currentInfo);
      }
    },

    getErrorMessageByKey(key) {
      const value = this.currentInfo[key];
      const { $t } = this;

      switch (key) {
        case 'name':
          return value ? value.length <= 15 ? '' : $t('nameOverlimit') : $t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : $t('telWrong');
        case 'area_code':
          return value ? +value !== -1 ? '' : $t('areaWrong') : $t('areaEmpty');
        case 'address_detail':
          return value ? value.length <= 200 ? '' : $t('addressOverlimit') : $t('addressEmpty');
        case 'postal_code':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },

    onDeleteAddress() {
      if (this.isDeleting) {
        return;
      }

      Dialog.confirm({
        message: this.$t('confirmDelete', this.computedAddressText)
      }).then(() => {
        this.$emit('delete', this.currentInfo);
      });
    },

    // get values of area component
    getArea() {
      const { area } = this.$refs;
      return area ? area.getValues() : [];
    },

    // set area code to area component
    setAreaCode(code) {
      this.currentInfo.area_code = code;
      this.$nextTick(() => {
        this.$nextTick(() => {
          const { area } = this.$refs;
          if (area) {
            this.assignAreaValues(area.getValues());
          }
        });
      });
    }
  }
});
</script>
