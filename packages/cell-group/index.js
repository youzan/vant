import createSfc from '../utils/create-basic';

export default createSfc({
  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  },

  render(h) {
    return (
      <div class={['van-cell-group', { 'van-hairline--top-bottom': this.border }]}>
        {this.$slots.default}
      </div>
    );
  }
});
