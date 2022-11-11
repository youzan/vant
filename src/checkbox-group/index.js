import { createNamespace , isFunction } from '../utils';
import { FieldMixin } from '../mixins/field';
import { ParentMixin } from '../mixins/relation';

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
  computed: {
    inDesiger() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    }
  },

  methods: {
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
    fromValue(value) {
      try {
        if( value===undefined ||value === null || value === '') return [];
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
      if (this.ifDesigner() && this.dataSource) {
        this.options = this.dataSource.map(item => { item.disabled = true;return item })
      } else if (isFunction(this.dataSource)) {
        try {
          const res = await this.dataSource({
            page: 1,
            size: 1000
          });
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
    return <div class={bem([this.direction])}>
      {this.options?.map((item, index) => <div style="position:relative">{this.slots('item', { item })}
          {(this.inDesiger && index>0) && <div class="mantle"></div>}
      </div>)}
      {(!this.slots()&& this.options?.length===0 &&this.inDesiger ) && <div style="text-align: center;width:100%">请绑定数据源或插入子节点</div>}
      {this.slots()}
    </div>
  }
});
