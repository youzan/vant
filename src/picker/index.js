// Utils
import { createNamespace, isObject } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';
import { pickerProps } from './shared';

// Components
import Loading from '../loading';
import PickerColumn from './PickerColumn';

const [createComponent, bem, t] = createNamespace('picker');

export default createComponent({
  props: {
    ...pickerProps,
    defaultIndex: {
      type: [Number, String],
      default: 0,
    },
    columns: {
      type: Array,
      default: () => [],
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

  data() {
    return {
      children: [],
      formattedColumns: [],
    };
  },

  computed: {
    dataType() {
      const { columns } = this;
      const firstColumn = columns[0] || {};

      if (firstColumn.children) {
        return 'cascade';
      }

      if (firstColumn.values) {
        return 'object';
      }

      return 'text';
    },
  },

  watch: {
    columns: {
      handler: 'format',
      immediate: true,
    },
  },

  methods: {
    format() {
      const { columns, dataType } = this;

      if (dataType === 'text') {
        this.formattedColumns = [{ values: columns }];
      } else if (dataType === 'cascade') {
        this.formatCascade();
      } else {
        this.formattedColumns = columns;
      }
    },

    formatCascade() {
      const formatted = [];

      let cursor = { children: this.columns };

      while (cursor && cursor.children) {
        const defaultIndex = cursor.defaultIndex || +this.defaultIndex;

        formatted.push({
          values: cursor.children.map((item) => item[this.valueKey]),
          className: cursor.className,
          defaultIndex,
        });

        cursor = cursor.children[defaultIndex];
      }

      this.formattedColumns = formatted;
    },

    emit(event) {
      if (this.dataType === 'text') {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },

    onCascadeChange(columnIndex) {
      let cursor = { children: this.columns };
      const indexes = this.getIndexes();

      for (let i = 0; i <= columnIndex; i++) {
        cursor = cursor.children[indexes[i]];
      }

      while (cursor && cursor.children) {
        columnIndex++;
        this.setColumnValues(columnIndex, cursor.children);
        cursor = cursor.children[cursor.defaultIndex || 0];
      }
    },

    onChange(columnIndex) {
      if (this.dataType === 'cascade') {
        this.onCascadeChange(columnIndex);
      }

      if (this.dataType === 'text') {
        this.$emit(
          'change',
          this,
          this.getColumnValue(0),
          this.getColumnIndex(0)
        );
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },

    // get column instance by index
    getColumn(index) {
      return this.children[index];
    },

    // @exposed-api
    // get column value by index
    getColumnValue(index) {
      const column = this.getColumn(index);
      return column && column.getValue();
    },

    // @exposed-api
    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index);

      if (column) {
        column.setValue(value);

        if (this.dataType === 'cascade') {
          this.onCascadeChange(index);
        }
      }
    },

    // @exposed-api
    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },

    // @exposed-api
    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);

      if (column) {
        column.setIndex(optionIndex);

        if (this.dataType === 'cascade') {
          this.onCascadeChange(columnIndex);
        }
      }
    },

    // @exposed-api
    // get options of column by index
    getColumnValues(index) {
      return (this.children[index] || {}).options;
    },

    // @exposed-api
    // set options of column by index
    setColumnValues(index, options) {
      const column = this.children[index];

      if (column) {
        if (this.dataType === 'cascade') {
          // map should be removed in next major version
          column.setOptions(
            options.map((item) => (isObject(item) ? item[this.valueKey] : item))
          );
        } else {
          column.setOptions(options);
        }
      }
    },

    // @exposed-api
    // get values of all columns
    getValues() {
      return this.children.map((child) => child.getValue());
    },

    // @exposed-api
    // set values of all columns
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },

    // @exposed-api
    // get indexes of all columns
    getIndexes() {
      return this.children.map((child) => child.currentIndex);
    },

    // @exposed-api
    // set indexes of all columns
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      });
    },

    // @exposed-api
    confirm() {
      this.children.forEach((child) => child.stopMomentum());
      this.emit('confirm');
    },

    cancel() {
      this.emit('cancel');
    },

    genTitle() {
      const titleSlot = this.slots('title');

      if (titleSlot) {
        return titleSlot;
      }

      if (this.title) {
        return <div class={['van-ellipsis', bem('title')]}>{this.title}</div>;
      }
    },

    genToolbar() {
      if (this.showToolbar) {
        return (
          <div class={bem('toolbar')}>
            {this.slots() || [
              <button type="button" class={bem('cancel')} onClick={this.cancel}>
                {this.cancelButtonText || t('cancel')}
              </button>,
              this.genTitle(),
              <button
                type="button"
                class={bem('confirm')}
                onClick={this.confirm}
              >
                {this.confirmButtonText || t('confirm')}
              </button>,
            ]}
          </div>
        );
      }
    },

    genColumns() {
      return this.formattedColumns.map((item, columnIndex) => (
        <PickerColumn
          valueKey={this.valueKey}
          allowHtml={this.allowHtml}
          className={item.className}
          itemHeight={this.itemHeight}
          defaultIndex={item.defaultIndex || +this.defaultIndex}
          swipeDuration={this.swipeDuration}
          visibleItemCount={this.visibleItemCount}
          initialOptions={item.values}
          onChange={() => {
            this.onChange(columnIndex);
          }}
        />
      ));
    },
  },

  render(h) {
    const itemHeight = +this.itemHeight;
    const wrapHeight = itemHeight * this.visibleItemCount;

    const frameStyle = {
      height: `${itemHeight}px`,
    };

    const columnsStyle = {
      height: `${wrapHeight}px`,
    };

    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`,
    };

    return (
      <div class={bem()}>
        {this.toolbarPosition === 'top' ? this.genToolbar() : h()}
        {this.loading ? <Loading class={bem('loading')} /> : h()}
        {this.slots('columns-top')}
        <div
          class={bem('columns')}
          style={columnsStyle}
          onTouchmove={preventDefault}
        >
          {this.genColumns()}
          <div class={bem('mask')} style={maskStyle} />
          <div
            class={[BORDER_UNSET_TOP_BOTTOM, bem('frame')]}
            style={frameStyle}
          />
        </div>
        {this.slots('columns-bottom')}
        {this.toolbarPosition === 'bottom' ? this.genToolbar() : h()}
      </div>
    );
  },
});
