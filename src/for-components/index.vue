<template>
  <div class="van-for-com">
    <template v-if="options.length > 0">
      <div v-for="(item, index) in options" :key="index" class="van-for-com-frag">
        <van-for-components-item v-for="(item2, index2) in item" :key="index2" :item="item2" :equalWidth="equalWidth" :colnum="colnum">
          <template v-slot="item2">
            <slot :item="item2.item"></slot>
          </template>
        </van-for-components-item>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
import { isFunction } from '../utils';
import VanForComponentsItem from './item.vue'

export default {
    name: 'van-for-components',
    components: {
      VanForComponentsItem,
    },
    props: {
      dataSource: {
        type: Array,
        default: () => [],
      },
      colnum: {
        type: Number,
        default: 5
      },
      equalWidth: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        options: []
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
      // }
    },
    mounted() {
    },
    watch: {
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
      divide(arr) {
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
      fromValue(value) {
        try {
          if (value === null || value === undefined) return [];
          if(typeof value === 'string') return JSON.parse(value || '[]');
          if(typeof value === 'object') return value;
        } catch (err) {
            return [];
        }
      },
      async update() {
        if (isFunction(this.dataSource)) {
          try {
            const res = await this.dataSource({
              page: 1,
              size: 1000
            });
            console.log(res);
            this.options = this.divide(Array.isArray(res) ? res : res.content);
          } catch (error) {
            console.error(error);
          }
        } else {
          this.options = this.divide(this.fromValue(this.dataSource));
        }
      }
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
