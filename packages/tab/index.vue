<template>
  <div :class="b('pane')" v-show="isSelected">
    <keep-alive>
      <slot v-if="isSelected || slotInited" />
    </keep-alive>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../mixins/find-parent';

export default create({
  name: 'tab',

  mixins: [findParent],

  props: {
    title: String,
    disabled: Boolean
  },

  computed: {
    index() {
      return this.parent.tabs.indexOf(this);
    },

    isSelected() {
      return this.index === this.parent.curActive;
    }
  },

  data() {
    return {
      slotInited: false
    };
  },

  updated() {
    if (this.isSelected) {
      this.slotInited = true;
    }
  },

  created() {
    this.findParent('van-tabs');
    this.parent.tabs.push(this);
  },

  destroyed() {
    this.parent.tabs.splice(this.index, 1);
  }
});
</script>
