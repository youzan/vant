import { use } from '../utils';
import { TouchMixin } from '../mixins/touch';
import { ParentMixin } from '../mixins/relation';

const [sfc, bem] = use('index-bar');

export default sfc({
  mixins: [TouchMixin, ParentMixin('vanIndexBar')],

  props: {
    zIndex: {
      type: Number,
      default: 1
    },
    indexList: {
      type: Array,
      default() {
        const indexList = [];
        const charCodeOfA = 'A'.charCodeAt(0);

        for (let i = 0; i < 26; i++) {
          indexList.push(String.fromCharCode(charCodeOfA + i));
        }

        return indexList;
      }
    }
  },

  methods: {
    onClick(event) {
      this.scrollToElement(event.target);
    },

    onTouchStart(event) {
      this.touchStart(event);
    },

    onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        /* istanbul ignore else */
        if (event.cancelable) {
          event.preventDefault();
        }

        const { clientX, clientY } = event.touches[0];
        const target = document.elementFromPoint(clientX, clientY);
        this.scrollToElement(target);
      }
    },

    scrollToElement(element, setActive) {
      if (!element) {
        return;
      }

      const { index } = element.dataset;
      if (!index) {
        return;
      }

      const match = this.children.filter(item => String(item.index) === index);
      if (match[0]) {
        match[0].scrollIntoView();
        this.$emit('select', match[0].index);
      }
    },

    onTouchEnd() {
      this.active = null;
    }
  },

  render(h) {
    return (
      <div class={bem()}>
        <div
          class={bem('sidebar')}
          style={{ zIndex: this.zIndex }}
          onClick={this.onClick}
          onTouchstart={this.onTouchStart}
          onTouchmove={this.onTouchMove}
          onTouchend={this.onTouchEnd}
          onTouchcancel={this.onTouchEnd}
        >
          {this.indexList.map(index => (
            <span class={bem('index')} data-index={index}>
              {index}
            </span>
          ))}
        </div>
        {this.slots('default')}
      </div>
    );
  }
});
