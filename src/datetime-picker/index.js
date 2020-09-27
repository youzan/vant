import { ref } from 'vue';
import { createNamespace } from '../utils';
import { useExpose } from '../composition/use-expose';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';

const [createComponent, bem] = createNamespace('datetime-picker');

export default createComponent({
  props: {
    ...TimePicker.props,
    ...DatePicker.props,
  },

  setup(props, { attrs }) {
    const root = ref();

    useExpose({
      getPicker: () => root.value?.getPicker(),
    });

    return () => {
      const Component = props.type === 'time' ? TimePicker : DatePicker;
      return <Component ref={root} class={bem()} {...{ ...props, ...attrs }} />;
    };
  },
});
