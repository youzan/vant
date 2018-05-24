<template>
  <div :class="b()">
    <radio-group :value="value" :class="b('group')" @input="$emit('input', $event)">
      <cell-group>
        <cell v-for="(item, index) in list" :key="item.id" is-link>
          <radio :name="item.id" @click="$emit('select', item, index)">
            <div :class="b('name')">{{ item.name }}，{{ item.tel }}</div>
            <div :class="b('address')">{{ $t('address') }}：{{ item.address }}</div>
          </radio>
          <icon
            slot="right-icon"
            name="edit"
            :class="b('edit')"
            @click="$emit('edit', item, index)"
          />
        </cell>
      </cell-group>
    </radio-group>
    <cell
      icon="add"
      is-link
      :class="b('add')"
      class="van-hairline--top"
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
