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
  makeArrayProp,
  makeNumericProp,
  createNamespace,
} from '../utils';
import { pickerSharedProps } from '../picker/Picker';
import { formatDataForCascade } from './utils';

// Components
import { Picker } from '../picker';

// Types
import type { AreaList } from './types';

const [name, bem] = createNamespace('area');

const INHERIT_SLOTS = [
  'title',
  'cancel',
  'confirm',
  'toolbar',
  'columns-top',
  'columns-bottom',
] as const;
const INHERIT_PROPS = [
  'title',
  'loading',
  'readonly',
  'optionHeight',
  'swipeDuration',
  'visibleOptionNum',
  'cancelButtonText',
  'confirmButtonText',
] as const;

const areaProps = extend({}, pickerSharedProps, {
  modelValue: String,
  columnsNum: makeNumericProp(3),
  columnsPlaceholder: makeArrayProp<string>(),
  areaList: {
    type: Object as PropType<AreaList>,
    default: () => ({}),
  },
});

export type AreaProps = ExtractPropTypes<typeof areaProps>;

export default defineComponent({
  name,

  props: areaProps,

  emits: ['change', 'confirm', 'cancel', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const codes = ref<string[]>([]);

    const columns = computed(() =>
      formatDataForCascade(
        props.areaList,
        props.columnsNum,
        props.columnsPlaceholder
      )
    );

    const onChange = (...args: unknown[]) => emit('change', ...args);
    const onCancel = (...args: unknown[]) => emit('cancel', ...args);
    const onConfirm = (...args: unknown[]) => emit('confirm', ...args);

    watch(
      codes,
      (newCodes) => {
        const lastCode = newCodes.length ? newCodes[newCodes.length - 1] : '';
        if (lastCode && lastCode !== props.modelValue) {
          emit('update:modelValue', lastCode);
        }
      },
      { deep: true }
    );

    watch(
      () => props.modelValue,
      (newCode) => {
        const lastCode = codes.value.length
          ? codes.value[codes.value.length - 1]
          : '';
        if (newCode && newCode !== lastCode) {
          codes.value = [
            `${newCode.slice(0, 2)}0000`,
            `${newCode.slice(0, 4)}00`,
            newCode,
          ].slice(0, +props.columnsNum);
        }
      },
      { immediate: true }
    );

    return () => (
      <Picker
        v-model={codes.value}
        v-slots={pick(slots, INHERIT_SLOTS)}
        class={bem()}
        columns={columns.value}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, INHERIT_PROPS)}
      />
    );
  },
});
