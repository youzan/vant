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
import { INHERIT_PROPS, INHERIT_SLOTS, formatDataForCascade } from './utils';

// Composables
import { useExpose } from '../composables/use-expose';

// Components
import { Picker, type PickerInstance } from '../picker';

// Types
import type { AreaList } from './types';
import type { PickerExpose } from '../picker/types';

const [name, bem] = createNamespace('area');

export const areaProps = extend({}, pick(pickerSharedProps, INHERIT_PROPS), {
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
    const picker = ref<PickerInstance>();

    const columns = computed(() => formatDataForCascade(props));
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
      { deep: true },
    );

    watch(
      () => props.modelValue,
      (newCode) => {
        if (newCode) {
          const lastCode = codes.value.length
            ? codes.value[codes.value.length - 1]
            : '';
          if (newCode !== lastCode) {
            codes.value = [
              `${newCode.slice(0, 2)}0000`,
              `${newCode.slice(0, 4)}00`,
              newCode,
            ].slice(0, +props.columnsNum);
          }
        } else {
          codes.value = [];
        }
      },
      { immediate: true },
    );

    useExpose<PickerExpose>({
      confirm: () => picker.value?.confirm(),
      getSelectedOptions: () => picker.value?.getSelectedOptions() || [],
    });

    return () => (
      <Picker
        ref={picker}
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
