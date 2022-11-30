import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('sidebar');

export default createComponent({
  mixins: [ParentMixin('vanSidebar')],

  // model: {
  //   prop: 'activeKey',
  // },

  props: {
    activeKey: {
      type: [Number, String],
      default: 0,
    },
    value: [Number, String],
    route: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      index: +this.activeKey,
      curvalue: this.value || 0
    };
  },

  watch: {
    value(val) {
      this.curvalue = val;
    },
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
