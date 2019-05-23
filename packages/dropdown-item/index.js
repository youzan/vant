import { use } from '../utils';
import Cell from '../cell';
import Icon from '../icon';
import Popup from '../popup';
import { ChildrenMixin } from '../mixins/relation';

const [sfc, bem] = use('dropdown-item');

export default sfc({
  mixins: [ChildrenMixin('vanDropdownMenu')],

  props: {
    value: null,
    title: String,
    options: Array,
    disabled: Boolean,
    titleClass: String
  },

  data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false
    };
  },

  computed: {
    displayTitle() {
      if (this.title) {
        return this.title;
      }

      const match = this.options.filter(option => option.value === this.value);
      return match.length ? match[0].text : '';
    }
  },

  methods: {
    toggle(show) {
      this.showPopup = !this.showPopup;

      if (this.showPopup) {
        this.showWrapper = true;
      }
    },

    hide(skipTransition) {
      this.showPopup = false;

      if (skipTransition) {
        this.transition = false;
      }
    }
  },

  render(h) {
    const { top, zIndex, overlay, duration, activeColor, closeOnClickOverlay } = this.parent;

    const Options = this.options.map(option => {
      const active = option.value === this.value;
      return (
        <Cell
          clickable
          key={option.value}
          title={option.text}
          titleStyle={{ color: active ? activeColor : '' }}
          onClick={() => {
            this.showPopup = false;

            if (option.value !== this.value) {
              this.$emit('input', option.value);
              this.$emit('change', option.value);
            }
          }}
        >
          {active && <Icon class={bem('icon')} color={activeColor} name="success" />}
        </Cell>
      );
    });

    const emit = eventName => () => this.$emit(eventName);

    return (
      <div vShow={this.showWrapper} style={{ top: `${top}px`, zIndex }} class={bem()}>
        <Popup
          vModel={this.showPopup}
          position="top"
          duration={this.transition ? duration : 0}
          class={bem('content')}
          overlay={overlay}
          closeOnClickOverlay={closeOnClickOverlay}
          overlayStyle={{ position: 'absolute' }}
          onOpen={emit('open')}
          onOpened={emit('opened')}
          onClose={emit('close')}
          onClosed={() => {
            this.transition = true;
            this.showWrapper = false;
            this.$emit('closed');
          }}
        >
          {Options}
          {this.slots('default')}
        </Popup>
      </div>
    );
  }
});
