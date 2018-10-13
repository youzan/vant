<template>
  <cell :class="b({ disabled })" :is-link="!disabled" @click="$emit('select')">
    <radio :name="data.id">
      <div :class="b('name')">{{ data.name }}，{{ data.tel }}</div>
      <div :class="b('address')">{{ data.address }}</div>
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
    disabled: Boolean
  }
});
</script>
