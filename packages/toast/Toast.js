import { use, isDef } from '../utils';
import { PopupMixin } from '../mixins/popup';
import Icon from '../icon';
import Loading from '../loading';

const [sfc, bem] = use('toast');
const STYLE = ['success', 'fail', 'loading'];

export default sfc({
  mixins: [PopupMixin],

  props: {
    className: null,
    loadingType: String,
    forbidClick: Boolean,
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      clickable: false
    };
  },

  mounted() {
    this.toggleClickable();
  },

  destroyed() {
    this.toggleClickable();
  },

  watch: {
    value() {
      this.toggleClickable();
    },

    forbidClick() {
      this.toggleClickable();
    }
  },

  methods: {
    toggleClickable() {
      const clickable = this.value && this.forbidClick;
      if (this.clickable !== clickable) {
        this.clickable = clickable;
        const action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    },

    onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    }
  },

  render(h) {
    const { type, message, loadingType } = this;
    const style = STYLE.indexOf(type) !== -1 ? 'default' : type;

    function Content() {
      switch (style) {
        case 'text':
          return <div>{message}</div>;
        case 'html':
          return <div domPropsInnerHTML={message} />;
      }

      return [
        type === 'loading' ? (
          <Loading color="white" type={loadingType} />
        ) : (
          <Icon class={bem('icon')} name={type} />
        ),
        isDef(message) && <div class={bem('text')}>{message}</div>
      ];
    }

    return (
      <transition name="van-fade" onAfterEnter={this.onAfterEnter}>
        <div vShow={this.value} class={[bem([style, this.position]), this.className]}>
          {Content()}
        </div>
      </transition>
    );
  }
});
