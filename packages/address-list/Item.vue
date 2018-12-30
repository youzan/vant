<template>
  <cell
    :class="b({ disabled, unswitchable: !switchable })"
    :is-link="!disabled && switchable"
    @click="onSelect"
  >
    <radio :name="data.id">
      <div :class="b('name')">{{ data.name }}，{{ data.tel }}</div>
      <div
        v-text="data.address"
        :class="b('address')"
      />
    </radio>
    <icon
      slot="right-icon"
      name="edit"
      :class="b('edit')"
      @click.stop="$emit('edit')"
    />
  </cell>
</template>

<script>
import Radio from '../radio';
import create from '../utils/create';

export default create({
  name: 'address-item',

  components: {
    Radio
  },

  props: {
    data: Object,
    disabled: Boolean,
    switchable: Boolean
  },

  methods: {
    onSelect() {
      if (this.switchable) {
        this.$emit('select');
      }
    }
  }
});
</script>
