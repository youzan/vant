## Waterfall 瀑布流

### 基础用法

:::demo
```html
<div class="waterfall">
  <div
    v-waterfall-lower="loadMore"
    v-waterfall-upper="loadMoreUpper"
    waterfall-disabled="isWaterfallDisabled"
    waterfall-offset="400"
  >
    <div
      class="waterfall-item"
      v-for="item in list"
      style="text-align: center;"
    >
      {{ item }}
    </div>
    <div v-if="loading" style="text-align: center;">
      loading
    </div>
  </div>
</div>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      loading: false,
      finished: false
    };
  },
  methods: {
    loadMore() {
      if (this.list.length >= 200) {
        this.finished = true;
        return;
      }

      this.loading = true;
      setTimeout(() => {
        let lastNumber = this.list[this.list.length - 1];
        for (let i = 0; i < 5; i ++) {
          lastNumber += 1;
          this.list.push(lastNumber);
        }
        this.loading = false;
      }, 2500);
    },
    loadMoreUpper() {
      if (this.list[0] < 0) return;
      this.list.unshift(-1);
    }
  },
  computed: {
    isWaterfallDisabled: function() {
      return this.loading || this.finished;
    }
  }
};
</script>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| waterfall-disabled | 是否禁止瀑布流触发 | Boolean  | false |  |
| waterfall-offset | 触发瀑布流加载的阈值 | Number  | 300 |   |

