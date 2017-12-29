<template>
  <div class="van-contact-list">
    <radio-group :value="value" @input="$emit('input', $event)">
      <cell-group>
        <cell v-for="(item, index) in list" :key="item.id" is-link>
          <radio :name="item.id" @click="$emit('select', item, index)">
            <p class="van-contact-list__text">{{ $t('name') }}：{{ item.name }}</p>
            <p class="van-contact-list__text">{{ $t('tel') }}：{{ item.tel }}</p>
          </radio>
          <icon slot="right-icon" name="edit" class="van-contact-list__edit" @click="$emit('edit', item, index)" />
        </cell>
      </cell-group>
    </radio-group>
    <cell
      icon="add"
      class="van-contact-list__add van-hairline--top"
      @click="$emit('add')"
      :title="addText || $t('addText')"
      is-link
    />
  </div>
</template>

<script>
import Cell from '../cell';
import Radio from '../radio';
import CellGroup from '../cell-group';
import RadioGroup from '../radio-group';
import { create } from '../utils';

export default create({
  name: 'van-contact-list',

  components: {
    Cell,
    Radio,
    CellGroup,
    RadioGroup
  },

  props: {
    value: {},
    addText: String,
    list: {
      type: Array,
      default: () => []
    }
  }
});
</script>
