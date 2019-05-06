import { use, isDef } from '../utils';
import Cell from '../cell';
import Icon from '../icon';
import Popup from '../popup';

const [sfc, bem] = use('dropdown-item');

export default sfc({
  props: {
    value: null,
    title: String,
    options: Array
  },

  inject: ['vanDropdownMenu'],

  data() {
    return {
      show: false
    };
  },

  created() {
    const { items } = this.vanDropdownMenu;
    const index = this.vanDropdownMenu.slots().indexOf(this.$vnode);
    items.splice(index === -1 ? items.length : index, 0, this);
  },

  beforeDestroy() {
    this.vanDropdownMenu.items = this.vanDropdownMenu.items.filter(item => item !== this);
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
    const { top, zIndex, activeColor } = this.vanDropdownMenu;

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
