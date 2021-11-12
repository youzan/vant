// Utils
import { createNamespace } from '../utils';
import { on, off } from '../utils/dom/event';

// Mixins
import { PortalMixin } from '../mixins/portal';
import { ChildrenMixin, ParentMixin } from '../mixins/relation';

// Components
import Cell from '../cell';
import Icon from '../icon';
import Popup from '../popup';

const [createComponent, bem] = createNamespace('dropdown-item');

export default createComponent({
  mixins: [PortalMixin({ ref: 'wrapper' }), ChildrenMixin('vanDropdownMenu'), ParentMixin('vanDropdownMenuItem')],

  props: {
    value: null,
    title: {
      type: String,
      default: '标题'
    },
    disabled: Boolean,
    titleClass: String,
    optionsprop: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
    lazyRender: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false,
      bem,
    };
  },

  computed: {
    // options() {
    //   if (this.optionsprop === null || this.optionsprop === undefined) return [];
    //   if(typeof this.optionsprop === 'string') return JSON.parse(this.optionsprop || '[]');
    //   if(typeof this.optionsprop === 'object') return this.optionsprop;
    // },
    displayTitle() {
      if (this.title) {
        return this.title;
      }

      const match = this.options.filter(
        (option) => option.value === this.value
      );
      return match.length ? match[0].text : '';
    },
  },

  watch: {
    showPopup(val) {
      this.togglePopup();
      this.bindScroll(val);
    },
  },

  beforeCreate() {
    const createEmitter = (eventName) => () => this.$emit(eventName);

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },

  methods: {
    // @exposed-api
    toggle(show = !this.showPopup, options = {}) {
      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    },

    bindScroll(bind) {
      const { scroller } = this.parent;
      const action = bind ? on : off;
      action(scroller, 'scroll', this.onScroll, true);
    },

    onScroll() {
      this.parent.updateOffset();
    },

    onClickWrapper(event) {
      // prevent being identified as clicking outside and closed when use get-contaienr
      if (this.getContainer) {
        event.stopPropagation();
      }
    },
    togglePopup() {
      if (this.showPopup) {
        this.$refs.popfordropdown.openModal();
      } else {
        this.$refs.popfordropdown.closeModal();
      }
    },
  },

  render() {
    const {
      zIndex,
      offset,
      overlay,
      duration,
      direction,
      activeColor,
      closeOnClickOverlay,
    } = this.parent;

    const aId = this.$vnode.context.$options._scopeId;


    const Options = this.options.map((option) => {
      const active = option.value === this.value;
      return (
        <Cell
          vusion-scope-id={aId}
          vusion-node-tag="van-cell"
          clickable
          key={option.value}
          icon={option.icon}
          title={option.text}
          class={bem('option', { active })}
          style={{ color: active ? activeColor : '' }}
          novalue={true}
          onClick={() => {
            this.showPopup = false;
            if (option.value !== this.value) {
              this.$emit('input', option.value);
              this.$emit('update:value', option.value);
              this.$emit('change', option.value);
            }
          }}
        >
          {active && (
            <Icon class={bem('icon')} color={activeColor} name="success" />
          )}
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
      <div
      >
        <div
          vShow={this.showWrapper}
          ref="wrapper"
          style={style}
          class={bem([direction])}
          onClick={this.onClickWrapper}
        >
          <Popup
            // vModel={this.showPopup}
            ref="popfordropdown"
            overlay={overlay}
            class={bem('content')}
            position={direction === 'down' ? 'top' : 'bottom'}
            duration={this.transition ? duration : 0}
            lazyRender={this.lazyRender}
            overlayStyle={{ position: 'absolute' }}
            closeOnClickOverlay={closeOnClickOverlay}
            onOpen={this.onOpen}
            onClose={this.onClose}
            onOpened={this.onOpened}
            onClosed={() => {
              this.showWrapper = false;
              this.$emit('closed');
            }}
            onClickOverlay={this.togglePopup}
          >
            {Options}
            {this.slots('default')}
          </Popup>
        </div>
      </div>
    );
  },
});
