<template>
  <div>
    <field
      v-on="$listeners"
      ref="field"
      rows="1"
      autosize
      type="textarea"
      maxlength="200"
      :value="value"
      :error="error"
      :label="$t('label')"
      :placeholder="$t('placeholder')"
      @click-icon="onClickIcon"
    >
      <div slot="icon">
        <span v-if="showIcon && isAndroid" :class="b('finish')">{{ $t('complete') }}</span>
        <icon v-else-if="showIcon" name="clear" />
      </div>
    </field>
    <cell
      v-if="showSearchList"
      v-for="express in searchResult"
      :key="express.name + express.address"
      :title="express.name"
      :label="express.address"
      icon="location"
      clickable
      @click="onSelect(express)"
    />
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
    value: String,
    error: Boolean,
    focused: Boolean,
    searchResult: Array,
    showSearchResult: Boolean
  },

  created() {
    this.isAndroid = isAndroid();
  },

  computed: {
    showSearchList() {
      return this.showSearchResult && this.focused && this.searchResult.length;
    },

    showIcon() {
      return this.value && this.focused;
    }
  },

  methods: {
    onClickIcon() {
      if (this.isAndroid) {
        this.$refs.field.blur();
      } else {
        this.$emit('input', '');
      }
    },

    onSelect(express) {
      this.$emit('input', `${express.address || ''} ${express.name || ''}`.trim());
      this.$emit('select-search', express);
    }
  }
});
</script>
