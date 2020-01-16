import { Cell } from 'vant';

export default {
  name: 'my-cell',

  props: {
    title: String,
    isLink: Boolean
  },

  render() {
    return <Cell class="my-cell" title={this.title} isLink={this.isLink} />;
  }
};
