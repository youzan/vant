import { use } from '../utils';
import { PopupMixin } from '../mixins/popup';
import Icon from '../icon';
import Loading from '../loading';
import Popup from '../popup';

const [sfc, bem] = use('actionsheet');

export default sfc({
  props: {
    ...PopupMixin.props,
    title: String,
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
    onSelect(event, item) {
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
    const { title, cancelText, onCancel } = this;

    const Header = () => (
      <div class={[bem('header'), 'van-hairline--top-bottom']}>
        {title}
        <Icon name="close" class={bem('close')} onClick={onCancel} />
      </div>
    );

    const Option = item => (
      <div
        class={[
          bem('item', { disabled: item.disabled || item.loading }),
          item.className,
          'van-hairline--top'
        ]}
        onClick={event => {
          this.onSelect(event, item);
        }}
      >
        {item.loading ? (
          <Loading class={bem('loading')} size="20px" />
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
      <div class={bem('content')}>{this.slots()}</div>
    );

    return (
      <Popup
        class={bem()}
        value={this.value}
        position="bottom"
        onInput={value => {
          this.$emit('input', value);
        }}
      >
        {title ? Header() : this.actions.map(Option)}
        {Footer}
      </Popup>
    );
  }
});
