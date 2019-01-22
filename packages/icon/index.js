import { use } from '../utils';
import Info from '../info';
import isSrc from '../utils/validate/src';

const [sfc] = use('icon');

export default sfc({
  props: {
    name: String,
    size: String,
    color: String,
    info: [String, Number],
    classPrefix: {
      type: String,
      default: 'van-icon'
    }
  },

  computed: {
    isSrc() {
      return isSrc(this.name);
    }
  },

  render(h) {
    return (
      <i
        class={[
          this.classPrefix,
          this.isSrc ? 'van-icon--image' : `${this.classPrefix}-${this.name}`
        ]}
        style={{
          color: this.color,
          fontSize: this.size
        }}
        {...{ on: this.$listeners }}
      >
        {this.$slots.default}
        {this.isSrc && <img src={this.name} />}
        <Info info={this.info} />
      </i>
    );
  }
});
