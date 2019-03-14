import { use } from '../utils';

const [sfc, bem] = use('collapse');

export default sfc({
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      items: []
    };
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
