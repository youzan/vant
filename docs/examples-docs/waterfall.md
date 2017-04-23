## Waterfall 瀑布流

### 使用指南

#### 全局注册

`Waterfall`引入后就自动全局安装。如果需要，可以再次手动安装：

```js
import Vue from 'vue';
import { Waterfall } from 'vant';

Waterfall.install(Vue);
```

#### 局部注册

如果你只是想在某个组件中使用`Waterfall`，你可以在对应组件中注册`Waterfall`指令，这样只能在你注册的组件中使用`Waterfall`：

```js
import { Waterfall } from 'vant';

export default {
  directives: {
    WaterfallLower: Waterfall('lower'),
    WaterfallUpper: Waterfall('upper')
  }
};
```

### 代码演示

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
      }, 2000);
    }
  },
  computed: {
    isWaterfallDisabled: function() {
      return this.loading || this.finished;
    }
  }
};
</script>

<style>
  .waterfall {
    max-height: 360px;
    overflow: scroll;
    border-top: 1px solid #e5e5e5;
  }
  .waterfall-item {
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
  }
  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
  .van-loading {
    margin: 10px auto;
  }
</style>

#### 基础用法

:::demo 基础用法
```html
<p class="page-desc">当即将滚动到元素底部时，会自动加载更多</p>
<div class="waterfall">
  <div
    v-waterfall-lower="loadMore"
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
    <van-loading
      v-if="loading"
      :type="'circle'"
      :color="'black'"
    ></van-loading>
  </div>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| v-waterfall-lower | 滚动到底部, 触发执行的函数 | `function`  | - |  |
| v-waterfall-upper | 滚动到顶部, 触发执行的函数 | `function`  | - |  |
| waterfall-disabled | 在vue对象中表示是否禁止瀑布流触发的key值 | `string`  | - |  |
| waterfall-offset | 触发瀑布流加载的阈值 | `number`  | `300` |   |

