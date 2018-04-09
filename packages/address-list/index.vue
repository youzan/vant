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
      is-link
      class="van-address-list__add van-hairline--top"
      :title="addButtonText || $t('add')"
      @click="$emit('add')"
    />
  </div>
</template>

<script>
import create from '../utils/create';
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
