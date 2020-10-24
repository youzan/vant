import { ref, watch, computed } from 'vue';
import { pickerProps, PICKER_KEY } from './shared';

// Utils
import { unitToPx, preventDefault, createNamespace } from '../utils';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';

// Composition
import { useChildren } from '@vant/use';
import { useExpose } from '../composition/use-expose';

// Components
import Loading from '../loading';
import PickerColumn from './PickerColumn';

const [createComponent, bem, t] = createNamespace('picker');

export default createComponent({
  props: {
    ...pickerProps,
    columns: {
      type: Array,
      default: () => [],
    },
    defaultIndex: {
      type: [Number, String],
      default: 0,
    },
    toolbarPosition: {
      type: String,
      default: 'top',
    },
    valueKey: {
      type: String,
      default: 'text',
    },
  },

  emits: ['confirm', 'cancel', 'change'],

  setup(props, { emit, slots }) {
    const formattedColumns = ref([]);

    const { children, linkChildren } = useChildren(PICKER_KEY);

    linkChildren();

    const itemHeight = computed(() => unitToPx(props.itemHeight));

    const dataType = computed(() => {
      const { columns } = props;
      const firstColumn = columns[0] || {};

      if (firstColumn.children) {
        return 'cascade';
      }
      if (firstColumn.values) {
        return 'object';
      }
      return 'text';
    });

    const formatCascade = () => {
      const formatted = [];

      let cursor = { children: props.columns };

      while (cursor && cursor.children) {
        const defaultIndex = cursor.defaultIndex ?? +props.defaultIndex;

        formatted.push({
          values: cursor.children,
          className: cursor.className,
          defaultIndex,
        });

        cursor = cursor.children[defaultIndex];
      }

      formattedColumns.value = formatted;
    };

    const format = () => {
      const { columns } = props;

      if (dataType.value === 'text') {
        formattedColumns.value = [{ values: columns }];
      } else if (dataType.value === 'cascade') {
        formatCascade();
      } else {
        formattedColumns.value = columns;
      }
    };

    // get indexes of all columns
    const getIndexes = () => children.map((child) => child.state.index);

    // set options of column by index
    const setColumnValues = (index, options) => {
      const column = children[index];
      if (column) {
        column.setOptions(options);
      }
    };

    const onCascadeChange = (columnIndex) => {
      let cursor = { children: props.columns };
      const indexes = getIndexes();

      for (let i = 0; i <= columnIndex; i++) {
        cursor = cursor.children[indexes[i]];
      }

      while (cursor && cursor.children) {
        columnIndex++;
        setColumnValues(columnIndex, cursor.children);
        cursor = cursor.children[cursor.defaultIndex || 0];
      }
    };

    // get column instance by index
    const getColumn = (index) => children[index];

    // get column value by index
    const getColumnValue = (index) => {
      const column = getColumn(index);
      return column && column.getValue();
    };

    // set column value by index
    const setColumnValue = (index, value) => {
      const column = getColumn(index);

      if (column) {
        column.setValue(value);

        if (dataType.value === 'cascade') {
          onCascadeChange(index);
        }
      }
    };

    // get column option index by column index
    const getColumnIndex = (index) => (getColumn(index) || {}).state.index;

    // set column option index by column index
    const setColumnIndex = (columnIndex, optionIndex) => {
      const column = getColumn(columnIndex);

      if (column) {
        column.setIndex(optionIndex);
        if (props.dataType === 'cascade') {
          onCascadeChange(columnIndex);
        }
      }
    };

    // get options of column by index
    const getColumnValues = (index) => (children[index] || {}).state.options;

    // get values of all columns
    const getValues = () => children.map((child) => child.getValue());

    // set values of all columns
    const setValues = (values) => {
      values.forEach((value, index) => {
        setColumnValue(index, value);
      });
    };

    // set indexes of all columns
    const setIndexes = (indexes) => {
      indexes.forEach((optionIndex, columnIndex) => {
        setColumnIndex(columnIndex, optionIndex);
      });
    };

    const emitAction = (event) => {
      if (dataType.value === 'text') {
        emit(event, getColumnValue(0), getColumnIndex(0));
      } else {
        emit(event, getValues(), getIndexes());
      }
    };

    const onChange = (columnIndex) => {
      if (dataType.value === 'cascade') {
        onCascadeChange(columnIndex);
      }

      if (dataType.value === 'text') {
        emit('change', getColumnValue(0), getColumnIndex(0));
      } else {
        emit('change', getValues(), columnIndex);
      }
    };

    const confirm = () => {
      children.forEach((child) => child.stopMomentum());
      emitAction('confirm');
    };

    const cancel = () => {
      emitAction('cancel');
    };

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
        <button type="button" class={bem('cancel')} onClick={cancel}>
          {slots.cancel ? slots.cancel() : text}
        </button>
      );
    };

    const renderConfirm = () => {
      const text = props.confirmButtonText || t('confirm');
      return (
        <button type="button" class={bem('confirm')} onClick={confirm}>
          {slots.confirm ? slots.confirm() : text}
        </button>
      );
    };

    const renderToolbar = () => {
      if (props.showToolbar) {
        return (
          <div class={bem('toolbar')}>
            {slots.default
              ? slots.default()
              : [renderCancel(), renderTitle(), renderConfirm()]}
          </div>
        );
      }
    };

    const renderColumnItems = () =>
      formattedColumns.value.map((item, columnIndex) => (
        <PickerColumn
          v-slots={{ option: slots.option }}
          readonly={props.readonly}
          valueKey={props.valueKey}
          allowHtml={props.allowHtml}
          className={item.className}
          itemHeight={itemHeight.value}
          defaultIndex={item.defaultIndex ?? +props.defaultIndex}
          swipeDuration={props.swipeDuration}
          visibleItemCount={props.visibleItemCount}
          initialOptions={item.values}
          onChange={() => {
            onChange(columnIndex);
          }}
        />
      ));

    const renderColumns = () => {
      const wrapHeight = itemHeight.value * props.visibleItemCount;
      const frameStyle = { height: `${itemHeight.value}px` };
      const columnsStyle = { height: `${wrapHeight}px` };
      const maskStyle = {
        backgroundSize: `100% ${(wrapHeight - itemHeight.value) / 2}px`,
      };

      return (
        <div
          class={bem('columns')}
          style={columnsStyle}
          onTouchmove={preventDefault}
        >
          {renderColumnItems()}
          <div class={bem('mask')} style={maskStyle} />
          <div
            class={[BORDER_UNSET_TOP_BOTTOM, bem('frame')]}
            style={frameStyle}
          />
        </div>
      );
    };

    watch(() => props.columns, format, { immediate: true });

    useExpose({
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
