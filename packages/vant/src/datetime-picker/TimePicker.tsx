import {
  ref,
  watch,
  computed,
  nextTick,
  onMounted,
  defineComponent,
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
import { times, sharedProps, pickerKeys } from './utils';

// Composables
import { useExpose } from '../composables/use-expose';

// Components
import { Picker, PickerInstance } from '../picker';

const [name] = createNamespace('time-picker');

export default defineComponent({
  name,

  props: extend({}, sharedProps, {
    minHour: makeNumericProp(0),
    maxHour: makeNumericProp(23),
    minMinute: makeNumericProp(0),
    maxMinute: makeNumericProp(59),
    modelValue: String,
  }),

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const formatValue = (value?: string) => {
      const { minHour, maxHour, maxMinute, minMinute } = props;

      if (!value) {
        value = `${padZero(minHour)}:${padZero(minMinute)}`;
      }

      let [hour, minute] = value.split(':');
      hour = padZero(clamp(+hour, +minHour, +maxHour));
      minute = padZero(clamp(+minute, +minMinute, +maxMinute));

      return `${hour}:${minute}`;
    };

    const picker = ref<PickerInstance>();
    const currentDate = ref(formatValue(props.modelValue));

    const ranges = computed(() => [
      {
        type: 'hour',
        range: [+props.minHour, +props.maxHour],
      },
      {
        type: 'minute',
        range: [+props.minMinute, +props.maxMinute],
      },
    ]);

    const originColumns = computed(() =>
      ranges.value.map(({ type, range: rangeArr }) => {
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index) =>
          padZero(rangeArr[0] + index)
        );

        if (props.filter) {
          values = props.filter(type, values);
        }

        return {
          type,
          values,
        };
      })
    );

    const columns = computed(() =>
      originColumns.value.map((column) => ({
        values: column.values.map((value) =>
          props.formatter(column.type, value)
        ),
      }))
    );

    const updateColumnValue = () => {
      const pair = currentDate.value.split(':');
      const values = [
        props.formatter('hour', pair[0]),
        props.formatter('minute', pair[1]),
      ];

      nextTick(() => {
        picker.value?.setValues(values);
      });
    };

    const updateInnerValue = () => {
      const [hourIndex, minuteIndex] = picker.value!.getIndexes();
      const [hourColumn, minuteColumn] = originColumns.value;

      const hour = hourColumn.values[hourIndex] || hourColumn.values[0];
      const minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];

      currentDate.value = formatValue(`${hour}:${minute}`);
      updateColumnValue();
    };

    const onConfirm = () => emit('confirm', currentDate.value);
    const onCancel = () => emit('cancel');

    const onChange = () => {
      updateInnerValue();
      nextTick(() => {
        nextTick(() => emit('change', currentDate.value));
      });
    };

    onMounted(() => {
      updateColumnValue();
      nextTick(updateInnerValue);
    });

    watch(columns, updateColumnValue);

    watch(
      () => [props.filter, props.maxHour, props.minMinute, props.maxMinute],
      updateInnerValue
    );

    watch(
      () => props.minHour,
      () => {
        nextTick(updateInnerValue);
      }
    );

    watch(currentDate, (value) => emit('update:modelValue', value));

    watch(
      () => props.modelValue,
      (value) => {
        value = formatValue(value);

        if (value !== currentDate.value) {
          currentDate.value = value;
          updateColumnValue();
        }
      }
    );

    useExpose({
      getPicker: () => picker.value,
    });

    return () => (
      <Picker
        v-slots={slots}
        ref={picker}
        columns={columns.value}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, pickerKeys)}
      />
    );
  },
});
