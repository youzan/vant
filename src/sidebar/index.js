import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('sidebar');

export default createComponent({
  mixins: [ParentMixin('vanSidebar')],

  model: {
    prop: 'activeKey',
  },

  props: {
    activeKey: {
      type: [Number, String],
      default: 0,
    },
  },

  data() {
    return {
      index: +this.activeKey,
    };
  },

  watch: {
    activeKey() {
      this.setIndex(+this.activeKey);
    },
  },

  methods: {
    setIndex(index) {
      if (index !== this.index) {
        this.index = index;
        this.$emit('change', index);
      }
    },
  },

  render() {
    return <div class={bem()}>{this.slots()}</div>;
  },
});
