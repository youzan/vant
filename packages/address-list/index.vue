<template>
  <div class="van-address-list">
    <radio-group :value="value" @input="$emit('input', $event)" class="van-address-list__group">
      <cell-group>
        <cell v-for="(item, index) in list" :key="item.id">
          <radio :name="item.id" @click="$emit('select', item, index)">
            <div class="van-address-list__name">{{ item.name }}，{{ item.tel }}</div>
            <div class="van-address-list__address">收货地址：{{ item.address }}</div>
          </radio>
          <icon name="edit" class="van-address-list__edit" @click="$emit('edit', item, index)" />
        </cell>
      </cell-group>
    </radio-group>
    <cell icon="add" class="van-address-list__add van-hairline--top" @click="$emit('add')" :title="addButtonText" isLink />
  </div>
</template>

<script>
import { create } from '../utils';
import Cell from '../cell';
import CellGroup from '../cell-group';
import Radio from '../radio';
import RadioGroup from '../radio-group';

export default create({
  name: 'van-address-list',

  components: {
    Cell,
    Radio,
    CellGroup,
    RadioGroup
  },

  props: {
    value: [String, Number],
    list: {
      type: Array,
      default: () => []
    },
    addButtonText: {
      type: String,
      default: '新增收货地址'
    }
  }
});
</script>
