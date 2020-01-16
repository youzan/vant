import { Icon } from 'vant';

export default {
  name: 'my-icon',

  props: {
    name: String,
    dot: Boolean
  },

  render() {
    return <Icon name={this.name} dot={this.dot} class="my-icon" />;
  }
};
