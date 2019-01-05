import create from '../utils/create';
import createBem from '../utils/bem';
import Popup from '../mixins/popup';

const bem = createBem('van-actionsheet');

export default create({
  name: 'actionsheet',

  mixins: [Popup],

  props: {
    title: String,
    value: Boolean,
    actions: Array,
    cancelText: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onSelect(item, event) {
      event.stopPropagation();

      if (!item.disabled && !item.loading) {
        if (item.callback) {
          item.callback(item);
        }

        this.$emit('select', item);
      }
    },

    onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  },

  render(h) {
    if (!this.shouldRender) {
      return;
    }

    const { title, cancelText, onCancel } = this;

    const Header = () => (
      <div class={[bem('header'), 'van-hairline--top-bottom']}>
        {title}
        <icon name="close" onClick={onCancel} />
      </div>
    );

    const Option = item => (
      <div
        class={[
          bem('item', { disabled: item.disabled || item.loading }),
          item.className,
          'van-hairline--top'
        ]}
        onClick={this.onSelect.bind(this, item)}
      >
        {item.loading ? (
          <loading class={bem('loading')} size="20px" />
        ) : (
          [
            <span class={bem('name')}>{item.name}</span>,
            item.subname && <span class={bem('subname')}>{item.subname}</span>
          ]
        )}
      </div>
    );

    const Footer = cancelText ? (
      <div class={bem('cancel')} onClick={onCancel}>
        {cancelText}
      </div>
    ) : (
      <div class={bem('content')}>{this.$slots.default}</div>
    );

    return (
      <transition name="van-slide-up">
        <div v-show={this.value} class={bem({ withtitle: title })}>
          {title ? Header() : this.actions.map(Option)}
          {Footer}
        </div>
      </transition>
    );
  }
});
