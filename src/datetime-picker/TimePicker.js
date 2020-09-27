import { ref, watch, computed, nextTick, onMounted } from 'vue';

// Utils
import { pick, range, padZero, createNamespace } from '../utils';
import { times, sharedProps } from './utils';

// Composition
import { useExpose } from '../composition/use-expose';

// Components
import Picker from '../picker';
import { pickerProps } from '../picker/shared';

const [createComponent] = createNamespace('time-picker');

export default createComponent({
  props: {
    ...sharedProps,
    minHour: {
      type: [Number, String],
      default: 0,
    },
    maxHour: {
      type: [Number, String],
      default: 23,
    },
    minMinute: {
      type: [Number, String],
      default: 0,
    },
    maxMinute: {
      type: [Number, String],
      default: 59,
    },
  },

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit }) {
    const formatValue = (value) => {
      const { minHour, maxHour, maxMinute, minMinute } = props;

      if (!value) {
        value = `${padZero(minHour)}:${padZero(minMinute)}`;
      }

      let [hour, minute] = value.split(':');
      hour = padZero(range(hour, minHour, maxHour));
      minute = padZero(range(minute, minMinute, maxMinute));

      return `${hour}:${minute}`;
    };

    const picker = ref();
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
        picker.value.setValues(values);
      });
    };

    const updateInnerValue = () => {
      const [hourIndex, minuteIndex] = picker.value.getIndexes();
      const [hourColumn, minuteColumn] = originColumns.value;

      const hour = hourColumn.values[hourIndex] || hourColumn.values[0];
      const minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];

      currentDate.value = formatValue(`${hour}:${minute}`);
      updateColumnValue();
    };

    const onConfirm = () => {
      emit('confirm', currentDate.value);
    };

    const onCancel = () => {
      emit('cancel');
    };

    const onChange = () => {
      updateInnerValue();

      nextTick(() => {
        nextTick(() => {
          emit('change', currentDate.value);
        });
      });
    };

    onMounted(() => {
      updateColumnValue();
      nextTick(updateInnerValue);
    });

    watch(columns, updateColumnValue);

    watch(
      [
        () => props.filter,
        () => props.minHour,
        () => props.maxHour,
        () => props.minMinute,
        () => props.maxMinute,
      ],
      updateInnerValue
    );

    watch(currentDate, (value) => {
      emit('update:modelValue', value);
    });

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
        ref={picker}
        columns={columns.value}
        readonly={props.readonly}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, Object.keys(pickerProps))}
      />
    );
  },
});
