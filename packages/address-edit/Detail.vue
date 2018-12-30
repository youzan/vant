<template>
  <cell :class="b()">
    <field
      v-on="$listeners"
      autosize
      ref="field"
      :rows="detailRows"
      :clearable="!isAndroid"
      type="textarea"
      maxlength="200"
      :value="value"
      :error="error"
      :label="$t('label')"
      :placeholder="$t('placeholder')"
    >
      <div
        v-if="showIcon && isAndroid"
        v-text="$t('complete')"
        slot="icon"
        :class="b('finish')"
        @click="$refs.field.blur()"
      />
    </field>
    <cell
      v-for="express in searchList"
      :key="express.name + express.address"
      :title="express.name"
      :label="express.address"
      icon="location-o"
      clickable
      @click="onSelect(express)"
    />
  </cell>
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
    detailRows: Number,
    searchResult: Array,
    showSearchResult: Boolean
  },

  created() {
    this.isAndroid = isAndroid();
  },

  computed: {
    searchList() {
      if (this.showSearchResult && this.focused) {
        return this.searchResult || [];
      }
      return [];
    },

    showIcon() {
      return this.value && this.focused;
    }
  },

  methods: {
    onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', `${express.address || ''} ${express.name || ''}`.trim());
    }
  }
});
</script>
