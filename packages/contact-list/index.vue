<template>
  <div :class="b()">
    <radio-group :value="value" @input="$emit('input', $event)">
      <cell-group>
        <cell v-for="(item, index) in list" :key="item.id" is-link>
          <radio :name="item.id" @click="$emit('select', item, index)">
            <p :class="b('text')">{{ $t('contact') }}：{{ item.name }}</p>
            <p :class="b('text')">{{ $t('tel') }}：{{ item.tel }}</p>
          </radio>
          <icon slot="right-icon" name="edit" :class="b('edit')" @click="$emit('edit', item, index)" />
        </cell>
      </cell-group>
    </radio-group>
    <cell
      icon="add"
      is-link
      :class="b('add')"
      class="van-hairline--top"
      :title="addText || $t('addText')"
      @click="$emit('add')"
    />
  </div>
</template>

<script>
import Radio from '../radio';
import RadioGroup from '../radio-group';
import create from '../utils/create';

export default create({
  name: 'contact-list',

  components: {
    Radio,
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
