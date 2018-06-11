<template>
  <div :class="b('pane')" v-show="isSelected">
    <slot v-if="inited" />
    <div v-if="$slots.title" ref="title">
      <slot name="title" />
    </div>
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
    },

    title() {
      this.parent.setLine();
    }
  },

  created() {
    this.findParent('van-tabs');
    this.parent.tabs.push(this);
  },

  mounted() {
    if (this.$slots.title) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },

  destroyed() {
    this.parent.tabs.splice(this.index, 1);
  }
});
</script>
