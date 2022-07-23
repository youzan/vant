// Utils
import { createNamespace } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';
import { pickerProps, DEFAULT_ITEM_HEIGHT } from './shared';
import { unitToPx } from '../utils/format/unit';

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
    itemPxHeight() {
      return this.itemHeight ? unitToPx(this.itemHeight) : DEFAULT_ITEM_HEIGHT;
    },

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
        const { children } = cursor;
        let defaultIndex = cursor.defaultIndex ?? +this.defaultIndex;

        while (children[defaultIndex] && children[defaultIndex].disabled) {
          if (defaultIndex < children.length - 1) {
            defaultIndex++;
          } else {
            defaultIndex = 0;
            break;
          }
        }

        formatted.push({
          values: cursor.children,
          className: cursor.className,
          defaultIndex,
        });

        cursor = children[defaultIndex];
      }

      this.formattedColumns = formatted;
    },

    emit(event) {
      if (this.dataType === 'text') {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        let values = this.getValues();

        // compatible with old version of wrong parameters
        // should be removed in next major version
        // see: https://github.com/vant-ui/vant/issues/5905
        if (this.dataType === 'cascade') {
          values = values.map((item) => item[this.valueKey]);
        }

        this.$emit(event, values, this.getIndexes());
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
        let values = this.getValues();

        // compatible with old version of wrong parameters
        // should be removed in next major version
        // see: https://github.com/vant-ui/vant/issues/5905
        if (this.dataType === 'cascade') {
          values = values.map((item) => item[this.valueKey]);
        }

        this.$emit('change', this, values, columnIndex);
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
        column.setOptions(options);
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

    genCancel() {
      return (
        <button type="button" class={bem('cancel')} onClick={this.cancel}>
          {this.slots('cancel') || this.cancelButtonText || t('cancel')}
        </button>
      );
    },

    genConfirm() {
      return (
        <button type="button" class={bem('confirm')} onClick={this.confirm}>
          {this.slots('confirm') || this.confirmButtonText || t('confirm')}
        </button>
      );
    },

    genToolbar() {
      if (this.showToolbar) {
        return (
          <div class={bem('toolbar')}>
            {this.slots() || [
              this.genCancel(),
              this.genTitle(),
              this.genConfirm(),
            ]}
          </div>
        );
      }
    },

    genColumns() {
      const { itemPxHeight } = this;
      const wrapHeight = itemPxHeight * this.visibleItemCount;

      const frameStyle = { height: `${itemPxHeight}px` };
      const columnsStyle = { height: `${wrapHeight}px` };
      const maskStyle = {
        backgroundSize: `100% ${(wrapHeight - itemPxHeight) / 2}px`,
      };

      return (
        <div
          class={bem('columns')}
          style={columnsStyle}
          onTouchmove={preventDefault}
        >
          {this.genColumnItems()}
          <div class={bem('mask')} style={maskStyle} />
          <div
            class={[BORDER_UNSET_TOP_BOTTOM, bem('frame')]}
            style={frameStyle}
          />
        </div>
      );
    },

    genColumnItems() {
      return this.formattedColumns.map((item, columnIndex) => (
        <PickerColumn
          readonly={this.readonly}
          valueKey={this.valueKey}
          allowHtml={this.allowHtml}
          className={item.className}
          itemHeight={this.itemPxHeight}
          defaultIndex={item.defaultIndex ?? +this.defaultIndex}
          swipeDuration={this.swipeDuration}
          visibleItemCount={this.visibleItemCount}
          initialOptions={item.values}
          scopedSlots={{
            option: this.$scopedSlots.option,
          }}
          onChange={() => {
            this.onChange(columnIndex);
          }}
        />
      ));
    },
  },

  render(h) {
    return (
      <div class={bem()}>
        {this.toolbarPosition === 'top' ? this.genToolbar() : h()}
        {this.loading ? <Loading class={bem('loading')} /> : h()}
        {this.slots('columns-top')}
        {this.genColumns()}
        {this.slots('columns-bottom')}
        {this.toolbarPosition === 'bottom' ? this.genToolbar() : h()}
      </div>
    );
  },
});
