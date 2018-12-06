<template>
  <div :class="b()">
    <radio-group
      :value="value"
      @input="$emit('input', $event)"
    >
      <cell-group>
        <cell
          v-for="(item, index) in list"
          :key="item.id"
          is-link
        >
          <radio
            :name="item.id"
            @click="$emit('select', item, index)"
          >
            <div :class="b('name')">{{ item.name }}，{{ item.tel }}</div>
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
    <van-button
      square
      size="large"
      type="danger"
      :class="b('add')"
      :text="addText || $t('addText')"
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
    value: null,
    list: Array,
    addText: String
  }
});
</script>
