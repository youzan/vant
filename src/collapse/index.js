import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('collapse');

export default createComponent({
  mixins: [ParentMixin('vanCollapse')],

  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    switch(name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter((activeName) => activeName !== name);
      }
      this.$emit('change', name);
      this.$emit('input', name);
    },
  },

  render() {
    return (
      <div class={[bem(), { [BORDER_TOP_BOTTOM]: this.border }]}>
        {this.slots()}
      </div>
    );
  },
});
