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
    this.toggleClickale();
  },

  destroyed() {
    this.toggleClickale();
  },

  watch: {
    value() {
      this.toggleClickale();
    },

    forbidClick() {
      this.toggleClickale();
    }
  },

  methods: {
    toggleClickale() {
      const clickable = this.value && this.forbidClick;
      if (this.clickable !== clickable) {
        this.clickable = clickable;
        const action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
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
      <transition name="van-fade">
        <div vShow={this.value} class={[bem([style, this.position]), this.className]}>
          {Content()}
        </div>
      </transition>
    );
  }
});
