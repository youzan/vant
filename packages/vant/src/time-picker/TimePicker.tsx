import {
  ref,
  watch,
  computed,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  pick,
  clamp,
  extend,
  padZero,
  createNamespace,
  makeNumericProp,
} from '../utils';
import {
  times,
  sharedProps,
  pickerInheritKeys,
} from '../datetime-picker/utils';

// Components
import { Picker } from '../picker';

const [name] = createNamespace('time-picker');

const timePickerProps = extend({}, sharedProps, {
  minHour: makeNumericProp(0),
  maxHour: makeNumericProp(23),
  minMinute: makeNumericProp(0),
  maxMinute: makeNumericProp(59),
  modelValue: String,
});

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;

export default defineComponent({
  name,

  props: timePickerProps,

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const formatValues = (value?: string) => {
      const { minHour, maxHour, maxMinute, minMinute } = props;

      if (value) {
        const [hour, minute] = value.split(':');
        return [
          padZero(clamp(+hour, +minHour, +maxHour)),
          padZero(clamp(+minute, +minMinute, +maxMinute)),
        ];
      }

      return [padZero(minHour), padZero(minMinute)];
    };

    const currentValues = ref<string[]>(formatValues(props.modelValue));

    const ranges = computed(() => [
      {
        type: 'hour' as const,
        range: [+props.minHour, +props.maxHour],
      },
      {
        type: 'minute' as const,
        range: [+props.minMinute, +props.maxMinute],
      },
    ]);

    const columns = computed(() =>
      ranges.value.map(({ type, range }) => {
        const options = times(range[1] - range[0] + 1, (index) => {
          const value = padZero(range[0] + index);
          return props.formatter(type, {
            text: value,
            value,
          });
        });

        if (props.filter) {
          return props.filter(type, options);
        }

        return options;
      })
    );

    watch(
      currentValues,
      (values) => {
        const newValue = values.join(':');
        if (newValue !== props.modelValue) {
          emit('update:modelValue', newValue);
        }
      },
      { deep: true, immediate: true }
    );

    watch(
      () => props.modelValue,
      (newValue) => {
        currentValues.value = formatValues(newValue);
      }
    );

    const onChange = (...args: unknown[]) => emit('change', ...args);
    const onCancel = (...args: unknown[]) => emit('cancel', ...args);
    const onConfirm = (...args: unknown[]) => emit('confirm', ...args);

    return () => (
      <Picker
        v-model={currentValues.value}
        v-slots={slots}
        columns={columns.value}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, pickerInheritKeys)}
      />
    );
  },
});
