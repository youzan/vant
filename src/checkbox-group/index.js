import { createNamespace } from '../utils';
import { FieldMixin } from '../mixins/field';
import { ParentMixin } from '../mixins/relation';
import { isFunction } from '../utils';
const [createComponent, bem] = createNamespace('checkbox-group');

export default createComponent({
  mixins: [ParentMixin('vanCheckbox'), FieldMixin],

  props: {
    dataSource: [Array, Function],
    max: [Number, String],
    min: {
      type: Number,
      default: 0,
    },
    disabled: Boolean,
    direction: String,
    iconSize: [Number, String],
    checkedColor: String,
    value: {
      type: [Array, String],
      default: () => [],
    },
  },
  data() {
    return {
      datatemp: this.fromValue(this.value),
      options: [],
    }
  },
  watch: {
    value(val) {
      this.$emit('change', val);
      this.datatemp = this.fromValue(this.value);
    },
    datatemp(val) {
      this.$emit('input', this.toValue(val));
      this.$emit('update:value', this.toValue(val));
    },
    dataSource: {
      deep: true,
      handler: 'update',
      immediate: true
    },
  },

  methods: {
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
    fromValue(value) {
      try {
        if(value === null || value === '') return [];
        if(typeof value === 'string') return JSON.parse(value || '[]');
        if(typeof value === 'object') return value;
      } catch (err) {
        return [];
      }
    },
    toValue(value) {
      return Array.isArray(value) && value.length === 0 ? '[]' : JSON.stringify(value);
    },
    // @exposed-api
    toggleAll(options = {}) {
      if (typeof options === 'boolean') {
        options = { checked: options };
      }

      const { checked, skipDisabled } = options;

      const children = this.children.filter((item) => {
        if (item.disabled && skipDisabled) {
          return item.checked;
        }
        return checked ?? !item.checked;
      });

      const names = children.map((item) => item.name);
      this.datatemp = names;
    },
    async update() {
      if(this.ifDesigner()) {
        return
      }
      if (isFunction(this.dataSource)) {
        try {
          const res = await this.dataSource({
            page: 1,
            size: 1000
          });
          console.log(res);
          this.options = (res.content);
        } catch (error) {
          console.error(error);
        }
      } else {
        this.options = (this.fromValue(this.dataSource));
      }
    }
  },

  render() {
    if (this.dataSource && this.options?.length >= 0) {
      return <div class={bem([this.direction])}>
        {/* <van-linear-layout direction="horizontal" layout="inline"> */}
        {
          this.options.map((item, index) => {
            const data = {
              // style: optionStyle,
              attrs: {
                role: 'checkbox-wrapthird',
              },
              class: [
              ],
              // on: {
              //   click: () => {
              //     this.onClickItem(index);
              //   },
              // },
            };
            return this.slots('default', {item, index});
          })
        }
        {/* </van-linear-layout> */}
      </div>
    }
    return <div class={bem([this.direction])}>
        {this.slots()}
        {/* <van-linear-layout direction="horizontal" layout="inline">
          {this.slots()}
        </van-linear-layout> */}
      </div>;
  },
});
