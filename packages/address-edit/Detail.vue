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
      @click-icon="onIconClick"
      @input="$emit('input', $event)"
      @focus="onFocus"
      @blur="onBlur"
    >
      <div slot="icon">
        <span v-if="showIcon && isAndroid" :class="b('finish')">{{ $t('complete') }}</span>
        <icon v-else-if="showIcon" name="clear" />
      </div>
    </field>
    <cell-group :border="false" v-if="showSearchList">
      <cell
        v-for="express in searchResult"
        :key="express.name + express.address"
        :title="express.name"
        :label="express.address"
        icon="location"
        clickable
        @click="onSelect(express)"
      />
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

    onSelect(express) {
      this.$emit('input', `${express.address || ''} ${express.name || ''}`.trim());
      this.$emit('select-search', express);
    },

    isString(str) {
      return typeof str === 'string';
    }
  }
});
</script>
