## Waterfall 瀑布流

### 使用指南

#### 全局注册

`Waterfall`引入后就自动全局安装。如果需要，可以再次手动安装：

```js
import Vue from 'vue';
import { Waterfall } from 'vant';

Vue.use(Waterfall);
```

#### 局部注册

如果你只是想在某个组件中使用`Waterfall`，可以在对应组件中注册`Waterfall`指令，这样只能在你注册的组件中使用`Waterfall`：

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
import Vue from 'vue';
import Waterfall from 'packages/waterfall';

export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      loading: false,
      finished: false
    };
  },
  directives: {
    WaterfallLower: Waterfall('lower'),
    WaterfallUpper: Waterfall('upper')
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
      }, 200);
    }
  },
  computed: {
    isWaterfallDisabled() {
      return this.loading || this.finished;
    }
  }
};
</script>

<style>
.demo-waterfall {
  ul {
    max-height: 360px;
    overflow: scroll;
    border-top: 1px solid #e5e5e5;
  }
  li {
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
    text-align: center;
  }
  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
}
</style>

#### 基础用法
使用 `v-waterfall-lower` 监听滚动到达底部，并执行相应函数。若是函数执行中需要异步加载数据，可以将 `waterfall-disabled` 指定的值置为 false，禁止 `v-waterfall-lower` 监听滚动事件
:::demo 基础用法
```html
<p class="page-desc">当即将滚动到元素底部时，会自动加载更多</p>
<ul
  v-waterfall-lower="loadMore"
  waterfall-disabled="isWaterfallDisabled"
  waterfall-offset="400">
  <li v-for="(item, index) in list">{{ item }}</li>
</ul>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| v-waterfall-lower | 滚动到底部, 触发执行的函数 | `Function`  | - |  |
| v-waterfall-upper | 滚动到顶部, 触发执行的函数 | `Function`  | - |  |
| waterfall-disabled | 在vue对象中表示是否禁止瀑布流触发的key值 | `String`  | - |  |
| waterfall-offset | 触发瀑布流加载的阈值 | `Number`  | `300` |   |

