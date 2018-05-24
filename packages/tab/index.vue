<template>
  <div :class="b('pane')" v-show="isSelected">
    <slot v-if="inited" />
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

  data() {
    return {
      inited: false
    };
  },

  computed: {
    index() {
      return this.parent.tabs.indexOf(this);
    },

    isSelected() {
      return this.index === this.parent.curActive;
    }
  },

  watch: {
    'parent.curActive'() {
      this.inited = this.inited || this.isSelected;
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
