<template>
  <div>
    <field
      v-on="$listeners"
      ref="field"
      rows="1"
      autosize
      :clearable="!isAndroid"
      type="textarea"
      maxlength="200"
      :value="value"
      :error="error"
      :label="$t('label')"
      :placeholder="$t('placeholder')"
    >
      <span
        v-if="showIcon && isAndroid"
        slot="icon"
        :class="b('finish')"
        @click="$refs.field.blur()"
      >
        {{ $t('complete') }}
      </span>
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
    onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', `${express.address || ''} ${express.name || ''}`.trim());
    }
  }
});
</script>
