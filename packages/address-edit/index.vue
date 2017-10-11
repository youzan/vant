<template>
  <div class="van-address-edit">
    <van-cell-group>
      <van-field
        maxlength="15"
        placeholder="名字"
        :label="addressText + '人'"
        v-model="currentInfo.name"
        :error="errorInfo.name"
        @focus="onFocus('name')"
      />
      <van-field
        type="tel"
        label="联系电话"
        placeholder="手机或固定电话"
        v-model="currentInfo.tel"
        :error="errorInfo.tel"
        @focus="onFocus('tel')"
      />
      <van-cell class="van-address-edit__area" title="收件地区" @click="showAreaSelect = true">
        <span>{{ currentInfo.province || '选择省' }}</span>
        <span>{{ currentInfo.city || '选择市' }}</span>
        <span>{{ currentInfo.county || '选择区' }}</span>
      </van-cell>
      <van-address-edit-detail
        :value="currentInfo.address_detail"
        :isError="errorInfo.address_detail"
        :showSearchResult="showSearchResult"
        :searchResult="searchResult"
        @focus="onFocus('address_detail')"
        @blur="onDetailBlur"
        @input="onChangeDetail"
      />
      <van-field
        v-if="showPostal"
        v-show="!hideBottomFields"
        type="tel"
        label="邮政编码"
        placeholder="邮政编码(选填)"
        v-model="currentInfo.postal_code"
        maxlength="6"
        class="van-hairline--top"
        :error="errorInfo.postal_code"
        @focus="onFocus('postal_code')">
      </van-field>
      <van-switch-cell 
        v-if="showSetDefault"
        v-show="!hideBottomFields"
        v-model="currentInfo.is_default"
        :title="`设为默认${addressText}地址`"
      />
    </van-cell-group>
    <div v-show="!hideBottomFields" class="van-address-edit__buttons">
      <van-button block :loading="isSaving" @click="onSaveAddress" type="primary">保存</van-button>
      <van-button block :loading="isDeleting" @click="onDeleteAddress" v-if="isEdit">删除{{ addressText }}地址</van-button>
    </div>
    <van-popup v-model="showAreaSelect" position="bottom">
      <van-area
        :value="currentInfo.area_code"
        :areaList="areaList"
        @confirm="onAreaConfirm"
        @cancel="showAreaSelect = false"
      />
    </van-popup>
  </div>
</template>

<script>
import Field from '../field';
import Cell from '../cell';
import CellGroup from '../cell-group';
import Button from '../button';
import Popup from '../popup';
import Toast from '../toast';
import Dialog from '../dialog';
import Area from '../area';
import Detail from './Detail';
import SwitchCell from '../switch-cell';
import validateMobile from '../utils/validate/mobile';

export default {
  name: 'van-address-edit',

  components: {
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [SwitchCell.name]: SwitchCell,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Area.name]: Area,
    [Detail.name]: Detail
  },

  props: {
    isSaving: Boolean,
    isDeleting: Boolean,
    areaList: Object,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    addressText: {
      type: String,
      default: '收货'
    },
    addressInfo: {
      type: Object,
      default: () => ({
        name: '',
        tel: '',
        province: '',
        city: '',
        county: '',
        area_code: '',
        postal_code: '',
        address_detail: '',
        is_default: false
      })
    },
    searchResult: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      showAreaSelect: false,
      currentInfo: this.addressInfo,
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
        this.currentInfo = val;
        this.isEdit = !!val.id;
      },
      deep: true
    }
  },

  computed: {
    // 当地址输入框开启了搜索，并且开始搜索后，隐藏所有地址详情以外的输入框
    hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    }
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'address_detail';
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
        return Toast('请选择正确的收件地区');
      }
      Object.assign(this.currentInfo, {
        province: values[0].name,
        city: values[1].name,
        county: values[2].name,
        'area_code': values[2].code
      });
      this.showAreaSelect = false;
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

      switch (key) {
        case 'name':
          return value ? value.length <= 15 ? '' : '名字过长，请重新输入' : '请填写名字';
        case 'tel':
          return validateMobile(value) ? '' : '请填写正确的手机号码或电话号码';
        case 'area_code':
          return value ? +value !== -1 ? '' : '请选择正确的收件地区' : '请选择收件地区';
        case 'address_detail':
          return value ? value.length <= 200 ? '' : '详细地址不能超过200个字符' : '请填写详细地址';
        case 'postal_code':
          return value && !/^\d{6}$/.test(value) ? '邮政编码格式不正确' : '';
      }
    },

    onDeleteAddress() {
      if (this.isDeleting) {
        return;
      }

      Dialog.confirm({
        message: `确定要删除这个${this.addressText}地址么`
      }).then(() => {
        this.$emit('delete', this.currentInfo);
      });
    }
  }
};
</script>
