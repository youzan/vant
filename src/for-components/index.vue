<template>
  <div class="for-com">
    <div v-for="(item, index) in options" :key="index" class="for-com-frag">
      <van-for-components-item v-for="(item2, index2) in item" :key="index2" :item="item2">
        <template v-slot="item2">
          <slot :item="item2.item"></slot>
        </template>
      </van-for-components-item>
    </div>
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
        default: () => [1,2,3,4,52,3,4,5,4,52,3,4,],
      },
      colnum: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        options: []
      }
    },
    computed: {
      style() {
        const percent = `${100 / this.colnum}%`;
        return {
          flexBasis: percent,
        }
      },
      stylewrap() {
        return {
          'grid-template-columns': `repeat(${this.colnum ? this.colnum : 'auto-fill'}, minmax(300px, 1fr))`
        }
      }
    },
    watch: {
      dataSource: {
        deep: true,
        handler: 'update',
        immediate: true
      },
    },
    methods: {
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
            this.options = this.divide(res.content);
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

<style scoped>
.for-com {
  /* display: flex;
  flex-wrap: wrap; */
  /* display: grid;
  overflow-x: auto; */
}
.for-com-frag {
  display: flex;
  flex-wrap: wrap;
}
</style>
