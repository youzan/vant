<template>
  <div ref="root">
    <van-field
      label="详细地址"
      placeholder="如街道、楼层、门牌号等"
      maxlength="200"
      type="textarea"
      autosize
      rows="1"
      :value="value"
      :error="isError"
      :onIconClick="onIconClick"
      @input="$emit('input', $event)"
      @focus="handleFocus"
      @blur="handleBlur"
      >
      <template slot="icon">
        <span v-if="showIcon && isAndroid" class="van-address-edit-detail__finish-edit">完成</span>
        <van-icon v-else-if="showIcon" name="clear"  />
      </template>
    </van-field>

    <van-cell-group class="van-address-edit-detail__suggest-list" v-if="showSearchList">
      <van-cell
        v-for="express in searchResult"
        :key="express.name + express.address"
        class="van-address-edit-detail__suggest-item"
        @click="onSuggestSelect(express)">
        <van-icon name="location" class="van-address-edit-detail__location" />
        <div class="van-address-edit-detail__item-info">
          <p class="van-address-edit-detail__title">{{ express.name }}</p>
          <p class="van-address-edit-detail__subtitle">{{ express.address }}</p>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Icon from '../icon';
import Field from '../field';
import Cell from '../cell';
import CellGroup from '../cell-group';
import UA from 'zan-utils/browser/ua_browser';

export default {
  name: 'van-address-edit-detail',

  components: {
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },

  props: {
    value: {},
    isError: Boolean,
    searchResult: Array,
    showSearchResult: Boolean
  },

  data() {
    return {
      isAndroid: UA.isAndroid(),
      isFocused: false
    };
  },

  computed: {
    showSearchList() {
      return this.showSearchResult && this.isFocused && this.searchResult.length > 0;
    },

    showIcon() {
      return this.value && this.isFocused;
    }
  },

  methods: {
    handleFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
      this.$refs.root.scrollIntoView();
    },

    handleBlur(e) {
      // 等待其他地方点击事件完了以后，再触发
      setTimeout(() => {
        this.isFocused = false;
        this.$emit('blur', e);
      }, 100);
    },

    onIconClick() {
      if (this.isAndroid) {
        this.$refs.root.querySelector('.van-field__control').blur();
      } else {
        this.$emit('input', '');
      }
    },

    onSuggestSelect(express) {
      this.$emit('input', `${express.address || ''} ${express.name || ''}`.trim());
    }
  }
};
</script>
