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
  extend,
  unitToPx,
  truthProp,
  isSameValue,
  makeArrayProp,
  preventDefault,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  HAPTICS_FEEDBACK,
  BORDER_UNSET_TOP_BOTTOM,
} from '../utils';
import {
  isOptionExist,
  getColumnsType,
  findOptionByValue,
  formatCascadeColumns,
  getFirstEnabledOption,
  assignDefaultFields,
} from './utils';

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
  columns: makeArrayProp<PickerOption | PickerColumn>(),
  modelValue: makeArrayProp<number | string>(),
  toolbarPosition: makeStringProp<PickerToolbarPosition>('top'),
  columnsFieldNames: Object as PropType<PickerFieldNames>,
});

export type PickerProps = ExtractPropTypes<typeof pickerProps>;

export default defineComponent({
  name,

  props: pickerProps,

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const selectedValues = ref(props.modelValue);
    const { children, linkChildren } = useChildren(PICKER_KEY);

    linkChildren();

    const fields = computed(() => assignDefaultFields(props.columnsFieldNames));
    const optionHeight = computed(() => unitToPx(props.optionHeight));
    const columnsType = computed(() =>
      getColumnsType(props.columns, fields.value)
    );

    const currentColumns = computed<PickerColumn[]>(() => {
      const { columns } = props;
      switch (columnsType.value) {
        case 'multiple':
          return columns as PickerColumn[];
        case 'cascade':
          return formatCascadeColumns(columns, fields.value, selectedValues);
        default:
          return [columns];
      }
    });

    const hasOptions = computed(() =>
      currentColumns.value.some((options) => options.length)
    );

    const selectedOptions = computed(() =>
      currentColumns.value.map((options, index) =>
        findOptionByValue(options, selectedValues.value[index], fields.value)
      )
    );

    const setValue = (index: number, value: string | number) => {
      if (selectedValues.value[index] !== value) {
        const newValues = selectedValues.value.slice(0);
        newValues[index] = value;
        selectedValues.value = newValues;
      }
    };

    const onChange = (value: number | string, columnIndex: number) => {
      setValue(columnIndex, value);

      if (columnsType.value === 'cascade') {
        // reset values after cascading
        selectedValues.value.forEach((value, index) => {
          const options = currentColumns.value[index];
          if (!isOptionExist(options, value, fields.value)) {
            setValue(
              index,
              options.length ? options[0][fields.value.value] : undefined
            );
          }
        });
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
          fields={fields.value}
          options={options}
          readonly={props.readonly}
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
      currentColumns,
      (columns) => {
        columns.forEach((options, index) => {
          if (
            options.length &&
            !isOptionExist(options, selectedValues.value[index], fields.value)
          ) {
            setValue(
              index,
              getFirstEnabledOption(options)![fields.value.value]
            );
          }
        });
      },
      { immediate: true }
    );

    watch(
      () => props.modelValue,
      (newValues) => {
        if (!isSameValue(newValues, selectedValues.value)) {
          selectedValues.value = newValues;
        }
      },
      { deep: true }
    );
    watch(
      selectedValues,
      (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          emit('update:modelValue', newValues);
        }
      },
      { immediate: true }
    );

    const getSelectedOptions = () => selectedOptions.value;

    useExpose<PickerExpose>({ confirm, getSelectedOptions });

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
