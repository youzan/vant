// Utils
import { createNamespace, isDef } from '../utils';

const [createComponent, bem] = createNamespace('badge');

export default createComponent({

  props: {
    dot: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 0
    },
    maxCount: {
      type: Number,
      default: 99
    },
    offset: {
      type: Array,
      default: () => []
    },
    showZero: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    offsetStyle() {
      if (Array.isArray(this.offset) && this.offset.length > 0) {
        return {
          top: `${this.offset[0] ?? 0}px`,
          right: `${this.offset[1] ?? 0}px`,
        };
      }
    },
    displayCount() {
      const count = (!isNaN(this.count) && this.count > 0) ? this.count : 0;
      return count > this.maxCount ? `${this.maxCount}+` : count;
    }
  },

  methods: {
    genSup() {
      const supCls = [
        this.dot ? bem('dot') : bem('number'),
        isDef(this.slots('default')) ? bem('position') : bem('standalone'),
      ];

      if (this.dot) {
        return <sup class={supCls} style={this.offsetStyle}></sup>;
      }

      if (this.displayCount === 0 && !this.showZero) {
        return null;
      }

      return <sup class={supCls} style={this.offsetStyle}>{this.displayCount}</sup>;
    },
  },

  render() {
    return (
      <span class={bem()}>
        {this.slots('default')}
        {this.genSup()}
      </span>
    );
  },
});
