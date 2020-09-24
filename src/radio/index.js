import { pick, createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import Checker, { checkerProps } from '../checkbox/Checker';

const [createComponent, bem] = createNamespace('radio');

export default createComponent({
  mixins: [ChildrenMixin('vanRadio')],

  props: checkerProps,

  emits: ['update:modelValue'],

  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.modelValue : this.modelValue;
      },

      set(val) {
        (this.parent || this).$emit('update:modelValue', val);
      },
    },

    checked() {
      return this.currentValue === this.name;
    },
  },

  methods: {
    toggle() {
      this.currentValue = this.name;
    },
  },

  render() {
    return (
      <Checker
        v-slots={pick(this.$slots, ['default', 'icon'])}
        bem={bem}
        role="radio"
        parent={this.parent}
        checked={this.checked}
        onToggle={this.toggle}
        {...this.$props}
      />
    );
  },
});
