<template>
  <div :class="b()">
    <slot name="top" />
    <radio-group
      :value="value"
      @input="$emit('input', $event)"
    >
      <cell-group>
        <address-item
          v-for="(item, index) in list"
          :data="item"
          :key="item.id"
          :switchable="switchable"
          @select="$emit('select', item, index)"
          @edit="$emit('edit', item, index)"
        />
      </cell-group>
    </radio-group>
    <div
      v-if="disabledText"
      :class="b('disabled-text')"
    >
      {{ disabledText }}
    </div>
    <cell-group v-if="disabledList.length">
      <address-item
        v-for="(item, index) in disabledList"
        disabled
        :data="item"
        :key="item.id"
        @select="$emit('select-disabled', item, index)"
        @edit="$emit('edit-disabled', item, index)"
      />
    </cell-group>
    <slot />
    <van-button
      square
      size="large"
      type="danger"
      :class="b('add')"
      :text="addButtonText || $t('add')"
      @click="$emit('add')"
    />
  </div>
</template>

<script>
import create from '../utils/create';
import RadioGroup from '../radio-group';
import VanButton from '../button';
import AddressItem from './Item';

export default create({
  name: 'address-list',

  components: {
    RadioGroup,
    VanButton,
    AddressItem
  },

  props: {
    list: Array,
    disabledList: Array,
    disabledText: String,
    addButtonText: String,
    value: [String, Number],
    switchable: {
      type: Boolean,
      default: true
    }
  }
});
</script>
