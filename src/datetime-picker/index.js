import { createNamespace } from '../utils';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';

const [createComponent, bem] = createNamespace('datetime-picker');

export default createComponent({
  props: {
    ...TimePicker.props,
    ...DatePicker.props
  },

  render() {
    const Component = this.type === 'time' ? TimePicker : DatePicker;

    return (
      <Component
        class={bem()}
        {...{
          props: this.$props,
          listeners: this.$listeners
        }}
      />
    );
  }
});
