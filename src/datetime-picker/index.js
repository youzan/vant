import { createNamespace } from '../utils';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';

const [createComponent, bem] = createNamespace('datetime-picker');

export default createComponent({
  props: {
    ...TimePicker.props,
    ...DatePicker.props,
  },

  methods: {
    // @exposed-api
    getPicker() {
      return this.$refs.root.getPicker();
    },
  },

  render() {
    const Component = this.type === 'time' ? TimePicker : DatePicker;

    return (
      <Component
        ref="root"
        class={bem()}
        {...{
          props: this.$props,
          on: this.$listeners,
        }}
      />
    );
  },
});
