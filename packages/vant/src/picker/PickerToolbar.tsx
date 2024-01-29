import { defineComponent } from 'vue';
import { bem, t } from './utils';
import { createNamespace, HAPTICS_FEEDBACK } from '../utils';

const [name] = createNamespace('picker-toolbar');

export const pickerToolbarProps = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String,
};

export const pickerToolbarSlots = ['cancel', 'confirm', 'title', 'toolbar'];

export type PickerToolbarPropKeys = Array<keyof typeof pickerToolbarProps>;

export const pickerToolbarPropKeys = Object.keys(
  pickerToolbarProps,
) as PickerToolbarPropKeys;

export default defineComponent({
  name,

  props: pickerToolbarProps,

  emits: ['confirm', 'cancel'],

  setup(props, { emit, slots }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return <div class={[bem('title'), 'van-ellipsis']}>{props.title}</div>;
      }
    };

    const onCancel = () => emit('cancel');
    const onConfirm = () => emit('confirm');

    const renderCancel = () => {
      const text = props.cancelButtonText ?? t('cancel');

      if (!slots.cancel && !text) {
        return;
      }

      return (
        <button
          type="button"
          class={[bem('cancel'), HAPTICS_FEEDBACK]}
          onClick={onCancel}
        >
          {slots.cancel ? slots.cancel() : text}
        </button>
      );
    };

    const renderConfirm = () => {
      const text = props.confirmButtonText ?? t('confirm');

      if (!slots.confirm && !text) {
        return;
      }

      return (
        <button
          type="button"
          class={[bem('confirm'), HAPTICS_FEEDBACK]}
          onClick={onConfirm}
        >
          {slots.confirm ? slots.confirm() : text}
        </button>
      );
    };

    return () => (
      <div class={bem('toolbar')}>
        {slots.toolbar
          ? slots.toolbar()
          : [renderCancel(), renderTitle(), renderConfirm()]}
      </div>
    );
  },
});
