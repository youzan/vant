import {
  computed,
  defineComponent,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from 'vue';

// Utils
import {
  formatValueRange,
  genOptions,
  pickerInheritKeys,
  sharedProps,
  type TimeFilter,
} from '../date-picker/utils';
import {
  createNamespace,
  extend,
  isSameValue,
  makeNumericProp,
  pick,
} from '../utils';

// Components
import { Picker } from '../picker';

const [name] = createNamespace('time-picker');

export type TimePickerColumnType = 'hour' | 'minute' | 'second';

const validateTime = (val: string) =>
  /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(val);
const fullColumns: TimePickerColumnType[] = ['hour', 'minute', 'second'];

export const timePickerProps = extend({}, sharedProps, {
  minHour: makeNumericProp(0),
  maxHour: makeNumericProp(23),
  minMinute: makeNumericProp(0),
  maxMinute: makeNumericProp(59),
  minSecond: makeNumericProp(0),
  maxSecond: makeNumericProp(59),
  minTime: {
    type: String,
    validator: validateTime,
  },
  maxTime: {
    type: String,
    validator: validateTime,
  },
  columnsType: {
    type: Array as PropType<TimePickerColumnType[]>,
    default: () => ['hour', 'minute'],
  },
  filter: Function as PropType<TimeFilter>,
});

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;

export default defineComponent({
  name,

  props: timePickerProps,

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const currentValues = ref<string[]>(props.modelValue);

    const getValidTime = (time: string) => {
      const timeLimitArr = time.split(':');
      return fullColumns.map((col, i) =>
        props.columnsType.includes(col) ? timeLimitArr[i] : '00',
      );
    };

    const columns = computed(() => {
      let { minHour, maxHour, minMinute, maxMinute, minSecond, maxSecond } =
        props;

      if (props.minTime || props.maxTime) {
        const fullTime: Record<TimePickerColumnType, string | number> = {
          hour: 0,
          minute: 0,
          second: 0,
        };
        props.columnsType.forEach((col, i) => {
          fullTime[col] = currentValues.value[i] ?? 0;
        });
        const { hour, minute } = fullTime;
        if (props.minTime) {
          const [minH, minM, minS] = getValidTime(props.minTime);
          minHour = minH;
          minMinute = +hour <= +minHour ? minM : '00';
          minSecond = +hour <= +minHour && +minute <= +minMinute ? minS : '00';
        }
        if (props.maxTime) {
          const [maxH, maxM, maxS] = getValidTime(props.maxTime);
          maxHour = maxH;
          maxMinute = +hour >= +maxHour ? maxM : '59';
          maxSecond = +hour >= +maxHour && +minute >= +maxMinute ? maxS : '59';
        }
      }

      return props.columnsType.map((type) => {
        const { filter, formatter } = props;
        switch (type) {
          case 'hour':
            return genOptions(
              +minHour,
              +maxHour,
              type,
              formatter,
              filter,
              currentValues.value,
            );
          case 'minute':
            return genOptions(
              +minMinute,
              +maxMinute,
              type,
              formatter,
              filter,
              currentValues.value,
            );
          case 'second':
            return genOptions(
              +minSecond,
              +maxSecond,
              type,
              formatter,
              filter,
              currentValues.value,
            );
          default:
            if (process.env.NODE_ENV !== 'production') {
              throw new Error(
                `[Vant] DatePicker: unsupported columns type: ${type}`,
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
      { immediate: true },
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
