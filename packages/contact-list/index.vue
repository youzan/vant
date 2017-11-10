<template>
  <div class="van-contact-list">
    <van-radio-group :value="value" @input="$emit('input', $event)">
      <van-cell-group>
        <van-cell v-for="(item, index) in list" :key="item.id">
          <van-radio :name="item.id" @click="$emit('select', item, index)">
            <p class="van-contact-list__text">联系人：{{ item.name }}</p>
            <p class="van-contact-list__text">联系电话：{{ item.tel }}</p>
          </van-radio>
          <van-icon name="edit" class="van-contact-list__edit" @click="$emit('edit', item, index)" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-cell icon="add" class="van-contact-list__add van-hairline--top" @click="$emit('add')" :title="addText" isLink />
  </div>
</template>

<script>
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';
import CellGroup from '../cell-group';
import RadioGroup from '../radio-group';

export default {
  name: 'van-contact-list',

  components: {
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Radio.name]: Radio,
    [CellGroup.name]: CellGroup,
    [RadioGroup.name]: RadioGroup
  },

  props: {
    value: {},
    addText: {
      type: String,
      default: '新建联系人'
    },
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
