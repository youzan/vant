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
  isDef,
  extend,
  unitToPx,
  truthProp,
  makeArrayProp,
  preventDefault,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  HAPTICS_FEEDBACK,
  BORDER_UNSET_TOP_BOTTOM,
} from '../utils';

// Composables
import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose';

// Components
import { Loading } from '../loading';
import Column, { PICKER_KEY } from './PickerColumn';

// Types
import type {
  PickerColumn,
  PickerExpose,
  PickerOption,
  PickerFieldNames,
  PickerToolbarPosition,
} from './types';

const [name, bem, t] = createNamespace('picker');

export const pickerSharedProps = {
  title: String,
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: makeNumericProp(44),
  showToolbar: truthProp,
  swipeDuration: makeNumericProp(1000),
  visibleOptionNum: makeNumericProp(6),
  cancelButtonText: String,
  confirmButtonText: String,
};

const pickerProps = extend({}, pickerSharedProps, {
  columns: makeArrayProp<PickerColumn | PickerColumn[]>(),
  modelValue: makeArrayProp<number | string>(),
  defaultIndex: makeNumericProp(0),
  toolbarPosition: makeStringProp<PickerToolbarPosition>('top'),
  columnsFieldNames: Object as PropType<PickerFieldNames>,
});

export type PickerProps = ExtractPropTypes<typeof pickerProps>;

export default defineComponent({
  name,

  props: pickerProps,

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const hasOptions = ref(false);
    const selectedValues = ref(props.modelValue);
    const currentColumns = ref<PickerColumn[]>([]);

    const {
      text: textKey,
      value: valueKey,
      children: childrenKey,
    } = extend(
      {
        text: 'text',
        value: 'value',
        children: 'children',
      },
      props.columnsFieldNames
    );

    const { children, linkChildren } = useChildren(PICKER_KEY);

    linkChildren();

    const optionHeight = computed(() => unitToPx(props.optionHeight));

    const dataType = computed(() => {
      const firstColumn = props.columns[0];
      if (Array.isArray(firstColumn)) {
        return 'multiple';
      }
      if (childrenKey in firstColumn) {
        return 'cascade';
      }
      return 'default';
    });

    const findOption = (options: PickerOption[], value: number | string) =>
      options.find((option) => option[valueKey] === value);

    const formatCascade = () => {
      const formatted: PickerColumn[] = [];

      let cursor: PickerOption | undefined = {
        [childrenKey]: props.columns,
      };
      let columnIndex = 0;

      while (cursor && cursor[childrenKey]) {
        const options: PickerOption[] = cursor[childrenKey];
        const value = selectedValues.value[columnIndex];

        cursor = isDef(value) ? findOption(options, value) : undefined;

        if (!cursor && options.length) {
          const firstValue = options[0][valueKey];
          selectedValues.value[columnIndex] = firstValue;
          cursor = findOption(options, firstValue);
        }

        columnIndex++;
        formatted.push(options);
      }

      return formatted;
    };

    const selectedOptions = computed(() =>
      currentColumns.value.map((options, index) =>
        findOption(options, selectedValues.value[index])
      )
    );

    const onChange = (value: number | string, columnIndex: number) => {
      selectedValues.value[columnIndex] = value;

      if (dataType.value === 'cascade') {
        currentColumns.value = formatCascade();
      }

      emit('change', {
        columnIndex,
        selectedValues: selectedValues.value,
        selectedOptions: selectedOptions.value,
      });
    };

    const confirm = () => {
      children.forEach((child) => child.stopMomentum());
      emit('confirm', {
        selectedValues: selectedValues.value,
        selectedOptions: selectedOptions.value,
      });
    };

    const cancel = () =>
      emit('cancel', {
        selectedValues: selectedValues.value,
        selectedOptions: selectedOptions.value,
      });

    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return <div class={[bem('title'), 'van-ellipsis']}>{props.title}</div>;
      }
    };

    const renderCancel = () => {
      const text = props.cancelButtonText || t('cancel');
      return (
        <button
          type="button"
          class={[bem('cancel'), HAPTICS_FEEDBACK]}
          onClick={cancel}
        >
          {slots.cancel ? slots.cancel() : text}
        </button>
      );
    };

    const renderConfirm = () => {
      const text = props.confirmButtonText || t('confirm');
      return (
        <button
          type="button"
          class={[bem('confirm'), HAPTICS_FEEDBACK]}
          onClick={confirm}
        >
          {slots.confirm ? slots.confirm() : text}
        </button>
      );
    };

    const renderToolbar = () => {
      if (props.showToolbar) {
        return (
          <div class={bem('toolbar')}>
            {slots.toolbar
              ? slots.toolbar()
              : [renderCancel(), renderTitle(), renderConfirm()]}
          </div>
        );
      }
    };

    const renderColumnItems = () =>
      currentColumns.value.map((options, columnIndex) => (
        <Column
          v-slots={{ option: slots.option }}
          value={selectedValues.value[columnIndex]}
          textKey={textKey}
          options={options}
          readonly={props.readonly}
          valueKey={valueKey}
          allowHtml={props.allowHtml}
          optionHeight={optionHeight.value}
          swipeDuration={props.swipeDuration}
          visibleOptionNum={props.visibleOptionNum}
          onChange={(value: number | string) => onChange(value, columnIndex)}
        />
      ));

    const renderMask = (wrapHeight: number) => {
      if (hasOptions.value) {
        const frameStyle = { height: `${optionHeight.value}px` };
        const maskStyle = {
          backgroundSize: `100% ${(wrapHeight - optionHeight.value) / 2}px`,
        };
        return [
          <div class={bem('mask')} style={maskStyle} />,
          <div
            class={[BORDER_UNSET_TOP_BOTTOM, bem('frame')]}
            style={frameStyle}
          />,
        ];
      }
    };

    const renderColumns = () => {
      const wrapHeight = optionHeight.value * +props.visibleOptionNum;
      const columnsStyle = { height: `${wrapHeight}px` };
      return (
        <div
          class={bem('columns')}
          style={columnsStyle}
          onTouchmove={preventDefault}
        >
          {renderColumnItems()}
          {renderMask(wrapHeight)}
        </div>
      );
    };

    watch(
      () => props.columns,
      () => {
        const { columns } = props;

        switch (dataType.value) {
          case 'multiple':
            currentColumns.value = columns;
            break;
          case 'cascade':
            currentColumns.value = formatCascade();
            break;
          default:
            currentColumns.value = [columns];
            break;
        }

        currentColumns.value.forEach((options, index) => {
          if (selectedValues.value[index] === undefined && options.length) {
            selectedValues.value[index] = options[0][valueKey];
          }
        });

        hasOptions.value = currentColumns.value.some(
          (options) => !!options.length
        );
      },
      { immediate: true }
    );

    watch(
      () => props.modelValue,
      (value) => {
        selectedValues.value = value;
      }
    );

    watch(selectedValues, () => {
      if (selectedValues.value !== props.modelValue) {
        emit('update:modelValue', selectedValues.value);
      }
    });

    useExpose<PickerExpose>({ confirm });

    return () => (
      <div class={bem()}>
        {props.toolbarPosition === 'top' ? renderToolbar() : null}
        {props.loading ? <Loading class={bem('loading')} /> : null}
        {slots['columns-top']?.()}
        {renderColumns()}
        {slots['columns-bottom']?.()}
        {props.toolbarPosition === 'bottom' ? renderToolbar() : null}
      </div>
    );
  },
});
