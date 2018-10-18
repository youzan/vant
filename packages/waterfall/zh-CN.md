## Waterfall 瀑布流
注意：Waterfall 组件已被废弃且不再维护，请使用 [List](#/zh-CN/list) 组件代替

### 使用指南

#### 全局注册

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

#### 基础用法
使用 `v-waterfall-lower` 监听滚动到达底部，并执行相应函数。若是函数执行中需要异步加载数据，可以将 `waterfall-disabled` 指定的值置为 true，禁止 `v-waterfall-lower` 监听滚动事件

注意：`waterfall-disabled` 传入的是 vue 对象中表示是否禁止瀑布流触发 key 值，类型是字符串

```html
<ul
  v-waterfall-lower="loadMore"
  waterfall-disabled="disabled"
  waterfall-offset="400"
>
  <li v-for="item in list">{{ item }}</li>
</ul>
```

```js
export default {
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      disabled: false
    };
  },

  directives: {
    WaterfallLower: Waterfall('lower')
  },

  methods: {
    loadMore() {
      this.disabled = true;
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length);
        }
        this.disabled = false;
      }, 200);
    }
  }
};
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-waterfall-lower | 滚动到底部, 触发执行的函数 | `Function` | - | - |
| v-waterfall-upper | 滚动到顶部, 触发执行的函数 | `Function` | - | - |
| waterfall-disabled | 在 vue 对象中表示是否禁止瀑布流触发的 key 值 | `String` | - | - |
| waterfall-offset | 触发瀑布流加载的阈值 | `Number` | `300` | - |
