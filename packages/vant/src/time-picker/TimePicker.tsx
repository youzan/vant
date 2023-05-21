import {
  ref,
  watch,
  computed,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  pick,
  extend,
  createNamespace,
  makeNumericProp,
  isSameValue,
} from '../utils';
import {
  genOptions,
  sharedProps,
  pickerInheritKeys,
  formatValueRange,
} from '../date-picker/utils';

// Components
import { Picker } from '../picker';

const [name] = createNamespace('time-picker');

export type TimePickerColumnType = 'hour' | 'minute' | 'second';

const validatorTime = (val: string) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(val);
const DefaultColumns = ['hour', 'minute'];

export const timePickerProps = extend({}, sharedProps, {
  minHour: makeNumericProp(0),
  maxHour: makeNumericProp(23),
  minMinute: makeNumericProp(0),
  maxMinute: makeNumericProp(59),
  minSecond: makeNumericProp(0),
  maxSecond: makeNumericProp(59),
  minTime: {
    type: String,
    validator: validatorTime,
  },
  maxTime: {
    type: String,
    validator: validatorTime,
  },
  columnsType: {
    type: Array as PropType<TimePickerColumnType[]>,
    default: () => DefaultColumns,
  },
});

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;

export default defineComponent({
  name,

  props: timePickerProps,

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const currentValues = ref<string[]>(props.modelValue);

    const columns = computed(() => {
      // Only default columns support minTime and maxTime
      let { minHour, maxHour, minMinute, maxMinute } = props;
      const currentHour = props.modelValue[0];
      if (isSameValue(props.columnsType, DefaultColumns)) {
        if (props.minTime) {
          const [minH, minM] = props.minTime.split(':');
          minHour = minH;
          minMinute = +currentHour <= +minHour ? minM : '00';
        }
        if (props.maxTime) {
          const [maxH, maxM] = props.maxTime.split(':');
          maxHour = maxH;
          maxMinute = +currentHour >= +maxHour ? maxM : '59';
        }
      }

      return props.columnsType.map((type) => {
        const { filter, formatter } = props;
        switch (type) {
          case 'hour':
            return genOptions(+minHour, +maxHour, type, formatter, filter);
          case 'minute':
            return genOptions(+minMinute, +maxMinute, type, formatter, filter);
          case 'second':
            return genOptions(
              +props.minSecond,
              +props.maxSecond,
              type,
              formatter,
              filter
            );
          default:
            if (process.env.NODE_ENV !== 'production') {
              throw new Error(
                `[Vant] DatePicker: unsupported columns type: ${type}`
              );
            }
            return [];
        }
      });
    });

    watch(currentValues, (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        emit('update:modelValue', newValues);
      }
    });

    watch(
      () => props.modelValue,
      (newValues) => {
        newValues = formatValueRange(newValues, columns.value);
        if (!isSameValue(newValues, currentValues.value)) {
          currentValues.value = newValues;
        }
      },
      { immediate: true }
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
