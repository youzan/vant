<template>
  <div class="van-for-com">
    <template v-if="options.length > 0">
      <template v-if="colnum > 0">
        <div v-for="(item, index) in options" :key="index" class="van-for-com-frag">
          <van-for-components-item
            v-for="(item2, index2) in item"
            :key="index2"
            :item="item2"
            :equal-width="equalWidth"
            :colnum="colnum"
            :index="comIndex(index, index2)">
            <template v-slot="item2">
              <slot :item="item2.item" :index="comIndex(index, index2)"></slot>
            </template>
          </van-for-components-item>
        </div>
      </template>
      <template v-else>
        <div :class="{ 'van-for-com-frag': true, 'nowrap': !wrap }">
            <van-for-components-item
              v-for="(item, index) in options"
              :key="index"
              :item="item"
              :equal-width="equalWidth"
              :colnum="colnum"
              :index="index">
              <template v-slot="item2">
                <slot :item="item2.item" :index="item2.index"></slot>
              </template>
            </van-for-components-item>
        </div>
      </template>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
import { isFunction } from '../utils';
import { formatResult } from '../utils/format/data-source';
import VanForComponentsItem from './item.vue'

import DataSourceMixin from '../mixins/support.datasource'


export default {
    name: 'van-for-components',
    components: {
      VanForComponentsItem,
    },
    mixins: [
      DataSourceMixin,
    ],
    props: {
      dataSource: {
        type: [Array, Object, Function, String],
        default: () => [],
      },
      // FIXME: typo column
      colnum: {
        type: Number,
        default: 5
      },
      equalWidth: {
        type: Boolean,
        default: true,
      },
      wrap: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        // options: []
      }
    },
    computed: {
      // style() {
      //   const percent = `${100 / this.colnum}%`;
      //   return {
      //     flexBasis: percent,
      //   }
      // },
      // stylewrap() {
      //   return {
      //     'grid-template-columns': `repeat(${this.colnum ? this.colnum : 'auto-fill'}, minmax(300px, 1fr))`
      //   }
      // },
      options() {
        return this.divide(this.currentDataSource.data) || [];
      }
    },
    watch: {
      // dataSource: {
      //   deep: true,
      //   handler: 'update',
      //   immediate: true
      // },
    },
    mounted() {
    },
    methods: {
      ifDesigner() {
        return this.$env && this.$env.VUE_APP_DESIGNER;
      },
      divide(arr) {
        if (this.ifDesigner()) {
          arr = Array.from({ length: 10 }, (v, k) => k + 1)
        }

        if (!this.colnum) return [...arr];

        const num = this.colnum;
        const result = [];
        const arre = [...arr];
        while (arre.length > 0) {
          const temp = arre.splice(0, num);
          result.push(temp);
        }
        return result;
      },
      async update() {
        if (isFunction(this.dataSource)) {
          try {
            const res = await this.dataSource({
              page: 1,
              size: 1000
            });
            this.options = this.divide(formatResult(res));
          } catch (error) {
            console.error(error);
          }
        } else {
          this.options = this.divide(formatResult(this.dataSource));
        }

        console.log(this.options);
      },
      comIndex(index1, index2) {
        return index1 * this.colnum + index2;
      },
    }
};
</script>

<style lang="less">
@import './for.less';
.for-com {
}
// .van-for-com-frag {
//   display: flex;
//   overflow-x: auto;
// }
</style>
