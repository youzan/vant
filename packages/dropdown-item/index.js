import { createNamespace } from '../utils';
import Cell from '../cell';
import Icon from '../icon';
import Popup from '../popup';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('dropdown-item');

export default createComponent({
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

  beforeCreate() {
    const createEmitter = eventName => () => this.$emit(eventName);

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },

  render(h) {
    const {
      zIndex,
      offset,
      overlay,
      duration,
      direction,
      activeColor,
      closeOnClickOverlay
    } = this.parent;

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

    const style = { zIndex };
    if (direction === 'down') {
      style.top = `${offset}px`;
    } else {
      style.bottom = `${offset}px`;
    }

    return (
      <div vShow={this.showWrapper} style={style} class={bem([direction])}>
        <Popup
          vModel={this.showPopup}
          overlay={overlay}
          class={bem('content')}
          position={direction === 'down' ? 'top' : 'bottom'}
          duration={this.transition ? duration : 0}
          closeOnClickOverlay={closeOnClickOverlay}
          overlayStyle={{ position: 'absolute' }}
          onOpen={this.onOpen}
          onClose={this.onClose}
          onOpened={this.onOpened}
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
