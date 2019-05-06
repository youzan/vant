import { use, isDef } from '../utils';
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
    options: Array
  },

  data() {
    return {
      show: false
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
      this.show = isDef(show) ? show : !this.show;
    }
  },

  render(h) {
    const { top, zIndex, activeColor } = this.parent;

    const Options = this.options.map(option => {
      const active = option.value === this.value;
      return (
        <Cell
          clickable
          title={option.text}
          titleStyle={{ color: active ? activeColor : '' }}
          onClick={() => {
            this.show = false;
            this.$emit('input', option.value);
          }}
        >
          {active && <Icon class={bem('icon')} color={activeColor} name="success" />}
        </Cell>
      );
    });

    return (
      <div vShow={this.show} style={{ top: `${top}px`, zIndex }} class={bem()}>
        <Popup
          vModel={this.show}
          position="top"
          duration={0.2}
          class={bem('content')}
          overlayStyle={{ position: 'absolute' }}
        >
          {Options}
          {this.slots('default')}
        </Popup>
      </div>
    );
  }
});
