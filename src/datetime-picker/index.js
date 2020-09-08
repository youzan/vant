import { ref } from 'vue';
import { createNamespace } from '../utils';
import { usePublicApi } from '../composition/use-public-api';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';

const [createComponent, bem] = createNamespace('datetime-picker');

export default createComponent({
  props: {
    ...TimePicker.props,
    ...DatePicker.props,
  },

  setup(props) {
    const rootRef = ref();

    usePublicApi({
      getPicker: () => rootRef.value && rootRef.value.getPicker(),
    });

    return () => {
      const Component = props.type === 'time' ? TimePicker : DatePicker;
      return <Component ref={rootRef} class={bem()} {...props} />;
    };
  },
});
