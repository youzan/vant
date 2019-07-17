import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('collapse');

export default createComponent({
  mixins: [ParentMixin('vanCollapse')],

  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    switch(name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter(activeName => activeName !== name);
      }
      this.$emit('change', name);
      this.$emit('input', name);
    }
  },

  render(h) {
    return (
      <div class={[bem(), { 'van-hairline--top-bottom': this.border }]}>
        {this.slots()}
      </div>
    );
  }
});
