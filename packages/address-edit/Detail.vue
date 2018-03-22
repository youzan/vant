<template>
  <div ref="root">
    <field
      :label="$t('label')"
      :placeholder="$t('placeholder')"
      maxlength="200"
      type="textarea"
      autosize
      rows="1"
      :value="value"
      :error="isError"
      :on-icon-click="onIconClick"
      @input="$emit('input', $event)"
      @focus="onFocus"
      @blur="onBlur"
    >
      <div slot="icon">
        <span v-if="showIcon && isAndroid" class="van-address-edit-detail__finish-edit">{{ $t('complete') }}</span>
        <icon v-else-if="showIcon" name="clear" />
      </div>
    </field>

    <cell-group class="van-address-edit-detail__suggest-list" v-if="showSearchList">
      <cell
        v-for="express in searchResult"
        :key="express.name + express.address"
        class="van-address-edit-detail__suggest-item"
        clickable
        @click="onSuggestSelect(express)"
      >
        <icon name="location" class="van-address-edit-detail__location" />
        <div class="van-address-edit-detail__item-info">
          <p class="van-address-edit-detail__title" v-if="isString(express.name)">{{ express.name }}</p>
          <p class="van-address-edit-detail__subtitle" v-if="isString(express.address)">{{ express.address }}</p>
        </div>
      </cell>
    </cell-group>
  </div>
</template>

<script>
import create from '../utils/create';
import Field from '../field';
import { isAndroid } from '../utils';

export default create({
  name: 'address-edit-detail',

  components: {
    Field
  },

  props: {
    value: {},
    isError: Boolean,
    searchResult: Array,
    showSearchResult: Boolean
  },

  data() {
    return {
      isAndroid: isAndroid(),
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
    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
      this.$refs.root.scrollIntoView();
    },

    onBlur(e) {
      // wait for click event finished
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
      this.$emit('select-search', express);
    },

    isString(str) {
      return typeof str === 'string';
    }
  }
});
</script>
