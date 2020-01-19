// Utils
import { createNamespace } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { deepClone } from '../utils/deep-clone';
import { BORDER_TOP_BOTTOM, BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';
import { pickerProps } from './shared';

// Components
import Loading from '../loading';
import PickerColumn from './PickerColumn';

const [createComponent, bem, t] = createNamespace('picker');

export default createComponent({
  props: {
    ...pickerProps,
    defaultIndex: {
      type: Number,
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
    };
  },

  computed: {
    simple() {
      return this.columns.length && !this.columns[0].values;
    },
  },

  watch: {
    columns: 'setColumns',
  },

  methods: {
    setColumns() {
      const columns = this.simple ? [{ values: this.columns }] : this.columns;
      columns.forEach((column, index) => {
        this.setColumnValues(index, deepClone(column.values));
      });
    },

    emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },

    onChange(columnIndex) {
      if (this.simple) {
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
      column && column.setValue(value);
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
      column && column.setIndex(optionIndex);
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
      if (
        column &&
        JSON.stringify(column.options) !== JSON.stringify(options)
      ) {
        column.options = options;
        column.setIndex(0);
      }
    },

    // @exposed-api
    // get values of all columns
    getValues() {
      return this.children.map(child => child.getValue());
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
      return this.children.map(child => child.currentIndex);
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
      this.children.forEach(child => child.stopMomentum());
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
          <div class={[BORDER_TOP_BOTTOM, bem('toolbar')]}>
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
      const columns = this.simple ? [this.columns] : this.columns;

      return columns.map((item, index) => (
        <PickerColumn
          valueKey={this.valueKey}
          allowHtml={this.allowHtml}
          className={item.className}
          itemHeight={this.itemHeight}
          defaultIndex={item.defaultIndex || this.defaultIndex}
          swipeDuration={this.swipeDuration}
          visibleItemCount={this.visibleItemCount}
          initialOptions={this.simple ? item : item.values}
          onChange={() => {
            this.onChange(index);
          }}
        />
      ));
    },
  },

  render(h) {
    const { itemHeight } = this;
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
