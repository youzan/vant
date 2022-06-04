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
  PickerOption,
  PickerExpose,
  PickerFieldNames,
  PickerObjectColumn,
  PickerToolbarPosition,
} from './types';

const [name, bem, t] = createNamespace('picker');

export const pickerSharedProps = {
  title: String,
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  itemHeight: makeNumericProp(44),
  showToolbar: truthProp,
  swipeDuration: makeNumericProp(1000),
  visibleItemCount: makeNumericProp(6),
  cancelButtonText: String,
  confirmButtonText: String,
};

const pickerProps = extend({}, pickerSharedProps, {
  columns: makeArrayProp<PickerOption | PickerColumn>(),
  // @deprecated
  // should be removed in next major version
  valueKey: String,
  defaultIndex: makeNumericProp(0),
  toolbarPosition: makeStringProp<PickerToolbarPosition>('top'),
  columnsFieldNames: Object as PropType<PickerFieldNames>,
});

export type PickerProps = ExtractPropTypes<typeof pickerProps>;

export default defineComponent({
  name,

  props: pickerProps,

  emits: ['confirm', 'cancel', 'change'],

  setup(props, { emit, slots }) {
    if (process.env.NODE_ENV !== 'production') {
      if (slots.default) {
        console.warn(
          '[Vant] Picker: "default" slot is deprecated, please use "toolbar" slot instead.'
        );
      }
      if (props.valueKey) {
        console.warn(
          '[Vant] Picker: "valueKey" prop is deprecated, please use "columnsFieldNames" prop instead.'
        );
      }
    }

    const hasOptions = ref(false);
    const formattedColumns = ref<PickerObjectColumn[]>([]);

    const columnsFieldNames = computed(() => {
      const { columnsFieldNames } = props;
      return {
        text: columnsFieldNames?.text || props.valueKey || 'text',
        values: columnsFieldNames?.values || 'values',
        children: columnsFieldNames?.children || 'children',
      };
    });

    const { children, linkChildren } = useChildren(PICKER_KEY);

    linkChildren();

    const itemHeight = computed(() => unitToPx(props.itemHeight));

    const dataType = computed(() => {
      const firstColumn = props.columns[0];
      if (typeof firstColumn === 'object') {
        if (columnsFieldNames.value.children in firstColumn) {
          return 'cascade';
        }
        if (columnsFieldNames.value.values in firstColumn) {
          return 'object';
        }
      }
      return 'plain';
    });

    const formatCascade = () => {
      const formatted: PickerObjectColumn[] = [];

      let cursor: PickerObjectColumn = {
        [columnsFieldNames.value.children]: props.columns,
      };

      while (cursor && cursor[columnsFieldNames.value.children]) {
        const children = cursor[columnsFieldNames.value.children];
        let defaultIndex = cursor.defaultIndex ?? +props.defaultIndex;

        while (children[defaultIndex] && children[defaultIndex].disabled) {
          if (defaultIndex < children.length - 1) {
            defaultIndex++;
          } else {
            defaultIndex = 0;
            break;
          }
        }

        formatted.push({
          [columnsFieldNames.value.values]:
            cursor[columnsFieldNames.value.children],
          className: cursor.className,
          defaultIndex,
        });

        cursor = children[defaultIndex];
      }

      formattedColumns.value = formatted;
    };

    const format = () => {
      const { columns } = props;

      if (dataType.value === 'plain') {
        formattedColumns.value = [
          { [columnsFieldNames.value.values]: columns },
        ];
      } else if (dataType.value === 'cascade') {
        formatCascade();
      } else {
        formattedColumns.value = columns as PickerObjectColumn[];
      }

      hasOptions.value =
        formattedColumns.value.some(
          (item) =>
            item[columnsFieldNames.value.values] &&
            item[columnsFieldNames.value.values].length !== 0
        ) || children.some((item) => item.hasOptions);
    };

    // get indexes of all columns
    const getIndexes = () => children.map((child) => child.state.index);

    // set options of column by index
    const setColumnValues = (index: number, options: PickerOption[]) => {
      const column = children[index];
      if (column) {
        column.setOptions(options);
        hasOptions.value = true;
      }
    };

    const onCascadeChange = (columnIndex: number) => {
      let cursor: PickerObjectColumn = {
        [columnsFieldNames.value.children]: props.columns,
      };
      const indexes = getIndexes();

      for (let i = 0; i <= columnIndex; i++) {
        cursor = cursor[columnsFieldNames.value.children][indexes[i]];
      }

      while (cursor && cursor[columnsFieldNames.value.children]) {
        columnIndex++;
        setColumnValues(columnIndex, cursor[columnsFieldNames.value.children]);
        cursor =
          cursor[columnsFieldNames.value.children][cursor.defaultIndex || 0];
      }
    };

    // get column instance by index
    const getChild = (index: number) => children[index];

    // get column value by index
    const getColumnValue = (index: number) => {
      const column = getChild(index);
      if (column) {
        return column.getValue();
      }
    };

    // set column value by index
    const setColumnValue = (index: number, value: string) => {
      const column = getChild(index);
      if (column) {
        column.setValue(value);
        if (dataType.value === 'cascade') {
          onCascadeChange(index);
        }
      }
    };

    // get column option index by column index
    const getColumnIndex = (index: number) => {
      const column = getChild(index);
      if (column) {
        return column.state.index;
      }
    };

    // set column option index by column index
    const setColumnIndex = (columnIndex: number, optionIndex: number) => {
      const column = getChild(columnIndex);
      if (column) {
        column.setIndex(optionIndex);
        if (dataType.value === 'cascade') {
          onCascadeChange(columnIndex);
        }
      }
    };

    // get options of column by index
    const getColumnValues = (index: number) => {
      const column = getChild(index);
      if (column) {
        return column.state.options;
      }
    };

    // get values of all columns
    const getValues = () => children.map((child) => child.getValue());

    // set values of all columns
    const setValues = (values: string[]) => {
      values.forEach((value, index) => {
        setColumnValue(index, value);
      });
    };

    // set indexes of all columns
    const setIndexes = (indexes: number[]) => {
      indexes.forEach((optionIndex, columnIndex) => {
        setColumnIndex(columnIndex, optionIndex);
      });
    };

    const emitAction = (event: 'confirm' | 'cancel') => {
      if (dataType.value === 'plain') {
        emit(event, getColumnValue(0), getColumnIndex(0));
      } else {
        emit(event, getValues(), getIndexes());
      }
    };

    const onChange = (columnIndex: number) => {
      if (dataType.value === 'cascade') {
        onCascadeChange(columnIndex);
      }

      if (dataType.value === 'plain') {
        emit('change', getColumnValue(0), getColumnIndex(0));
      } else {
        emit('change', getValues(), columnIndex);
      }
    };

    const confirm = () => {
      children.forEach((child) => child.stopMomentum());
      emitAction('confirm');
    };

    const cancel = () => emitAction('cancel');

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
        // default slot is deprecated
        // should be removed in next major version
        const slot = slots.toolbar || slots.default;
        return (
          <div class={bem('toolbar')}>
            {slot ? slot() : [renderCancel(), renderTitle(), renderConfirm()]}
          </div>
        );
      }
    };

    const renderColumnItems = () =>
      formattedColumns.value.map((item, columnIndex) => (
        <Column
          v-slots={{ option: slots.option }}
          textKey={columnsFieldNames.value.text}
          readonly={props.readonly}
          allowHtml={props.allowHtml}
          className={item.className}
          itemHeight={itemHeight.value}
          defaultIndex={item.defaultIndex ?? +props.defaultIndex}
          swipeDuration={props.swipeDuration}
          initialOptions={item[columnsFieldNames.value.values]}
          visibleItemCount={props.visibleItemCount}
          onChange={() => onChange(columnIndex)}
        />
      ));

    const renderMask = (wrapHeight: number) => {
      if (hasOptions.value) {
        const frameStyle = { height: `${itemHeight.value}px` };
        const maskStyle = {
          backgroundSize: `100% ${(wrapHeight - itemHeight.value) / 2}px`,
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
      const wrapHeight = itemHeight.value * +props.visibleItemCount;
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

    watch(() => props.columns, format, { immediate: true });

    useExpose<PickerExpose>({
      confirm,
      getValues,
      setValues,
      getIndexes,
      setIndexes,
      getColumnIndex,
      setColumnIndex,
      getColumnValue,
      setColumnValue,
      getColumnValues,
      setColumnValues,
    });

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
