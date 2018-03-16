<template>
  <div class="van-address-list">
    <radio-group :value="value" @input="$emit('input', $event)" class="van-address-list__group">
      <cell-group>
        <cell v-for="(item, index) in list" :key="item.id" is-link>
          <radio :name="item.id" @click="$emit('select', item, index)">
            <div class="van-address-list__name">{{ item.name }}，{{ item.tel }}</div>
            <div class="van-address-list__address">{{ $t('address') }}：{{ item.address }}</div>
          </radio>
          <icon slot="right-icon" name="edit" class="van-address-list__edit" @click="$emit('edit', item, index)" />
        </cell>
      </cell-group>
    </radio-group>
    <cell
      icon="add"
      class="van-address-list__add van-hairline--top"
      @click="$emit('add')"
      :title="addButtonText || $t('add')"
      is-link
    />
  </div>
</template>

<script>
import { create } from '../utils';
import Radio from '../radio';
import RadioGroup from '../radio-group';

export default create({
  name: 'address-list',

  components: {
    Radio,
    RadioGroup
  },

  props: {
    addButtonText: String,
    value: [String, Number],
    list: {
      type: Array,
      default: () => []
    }
  }
});
</script>
