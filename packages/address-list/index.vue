<template>
  <div class="van-address-list">
    <van-radio-group :value="value" @input="$emit('input', $event)" class="van-address-list__group">
      <van-cell-group>
        <van-cell v-for="(item, index) in list" :key="item.id">
          <van-radio :name="item.id" @click="$emit('change', item, index)">
            <div class="van-address-list__name">{{ item.name }}，{{ item.tel }}</div>
            <div class="van-address-list__address">收货地址：{{ item.address }}</div>
          </van-radio>
          <van-icon name="edit" class="van-address-list__edit" @click="$emit('edit', item, index)" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-cell icon="add" class="van-address-list__add van-hairline--top" @click="$emit('add')" :title="addButtonText" isLink />
  </div>
</template>

<script>
import Icon from '../icon';
import Cell from '../cell';
import CellGroup from '../cell-group';
import Radio from '../radio';
import RadioGroup from '../radio-group';

export default {
  name: 'van-address-list',

  components: {
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Radio.name]: Radio,
    [CellGroup.name]: CellGroup,
    [RadioGroup.name]: RadioGroup
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
};
</script>
