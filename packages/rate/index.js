/* eslint-disable prefer-spread */
import { use } from '../utils';
import Icon from '../icon';

const [sfc, bem] = use('rate');

export default sfc({
  props: {
    value: Number,
    readonly: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 20
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    }
  },

  computed: {
    list() {
      return Array.apply(null, { length: this.count }).map((value, index) => index < this.value);
    }
  },

  methods: {
    onSelect(index) {
      if (!this.disabled && !this.readonly) {
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    },

    onTouchMove(event) {
      if (!document.elementFromPoint) {
        return;
      }

      event.preventDefault();
      const { clientX, clientY } = event.touches[0];
      const target = document.elementFromPoint(clientX, clientY);
      if (target && target.dataset) {
        const { index } = target.dataset;

        /* istanbul ignore else */
        if (index) {
          this.onSelect(+index);
        }
      }
    }
  },

  render(h) {
    return (
      <div class={bem()} onTouchmove={this.onTouchMove}>
        {this.list.map((full, index) => (
          <Icon
            key={index}
            class={bem('item')}
            size={`${this.size}px`}
            data-index={index}
            name={full ? this.icon : this.voidIcon}
            color={this.disabled ? this.disabledColor : full ? this.color : this.voidColor}
            onClick={() => {
              this.onSelect(index);
            }}
          />
        ))}
      </div>
    );
  }
});
