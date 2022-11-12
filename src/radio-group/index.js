import { createNamespace , isFunction } from '../utils';
import { FieldMixin } from '../mixins/field';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('radio-group');

export default createComponent({
  mixins: [ParentMixin('vanRadio'), FieldMixin],

  props: {
    dataSource: [Array, Function],
    value: null,
    disabled: Boolean,
    readonly: Boolean,
    direction: String,
    checkedColor: String,
    iconSize: [Number, String],
  },
  data() {
    return {
      datatemp: (this.value) || null,
      options: [],
    }
  },
  watch: {
    value(value) {
      this.datatemp = value;
    },
    datatemp(val) {
      this.$emit('input', (val));
      this.$emit('update:value', (val));
      this.$emit('change', val);
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
        if( value ===undefined || value === null || value === '') return [];
        if(typeof value === 'string') return JSON.parse(value || '[]');
        if(typeof value === 'object') return value;
      } catch (err) {
        return [];
      }
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
      {this.options?.map((item, index) => <div style="position:relative">{this.slots('item', { item,index })}
        {(this.inDesiger && index>0) && <div class="mantle"></div>}
      </div>)}
      {(!this.slots()&& this.options?.length===0 &&this.inDesiger ) && <div style="text-align: center;width:100%">请绑定数据源或插入子节点</div>}
      {this.slots()}
  </div> 
    // if (this.dataSource && this.options?.length >= 0) {
    //   return <div class={bem([this.direction])}>
    //     {/* <van-linear-layout direction="horizontal" layout="inline"> */}
    //     {
    //       this.options.map((item, index) => {
    //         const data = {
    //           // style: optionStyle,
    //           attrs: {
    //             role: 'checkbox-wrapthird',
    //           },
    //           class: [
    //           ],
    //           // on: {
    //           //   click: () => {
    //           //     this.onClickItem(index);
    //           //   },
    //           // },
    //         };
    //         return this.slots('item', {item, index});
    //       })
    //     }
    //        {this.slots()}
    //     {/* </van-linear-layout> */}
    //   </div>
    // }
    // return (
    //   <div class={bem([this.direction])} role="radiogroup">
    //     {!this.slots("default") && <div style="text-align: center;width:100%">请绑定数据源或插入子节点</div>}
    //     {this.slots()}
    //     {/* <van-linear-layout direction="horizontal" layout="inline">
    //       {this.slots()}
    //     </van-linear-layout> */}
    //   </div>
    // );
  },
});
