# Lazyload 懒加载

### 引入

`Lazyload` 是 `Vue` 指令，使用前需要对指令进行注册。

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
```

## 代码演示

### 基础用法

将 `v-lazy` 指令的值设置为你需要懒加载的图片。

```html
<img v-for="img in imageList" v-lazy="img" />
```

```js
export default {
  data() {
    return {
      imageList: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
};
```

### 背景图懒加载

和图片懒加载不同，背景图懒加载需要使用 `v-lazy:background-image`，值设置为背景图片的地址，需要注意的是必须声明容器高度。

```html
<div v-for="img in imageList" v-lazy:background-image="img" />
```

### 组件懒加载

将需要懒加载的组件放在 `lazy-component` 标签中，即可实现组件懒加载。

```js
// 注册时设置`lazyComponent`选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
```

```html
<lazy-component>
  <img v-for="img in imageList" v-lazy="img" />
</lazy-component>
```

## API

### Options

| 参数          | 说明             | 类型       | 默认值     |
| ------------- | ---------------- | ---------- | ---------- |
| loading       | 加载时的图片     | _string_   | -          |
| error         | 错误时的图片     | _string_   | -          |
| preload       | 预加载高度的比例 | _string_   | -          |
| attempt       | 尝试次数         | _number_   | `3`        |
| listenEvents  | 监听的事件       | _string[]_ | `scroll`等 |
| adapter       | 适配器           | _object_   | -          |
| filter        | 图片 URL 过滤    | _object_   | -          |
| lazyComponent | 是否能懒加载模块 | _boolean_  | `false`    |

> 更多内容请参照：[vue-lazyload 官方文档](https://github.com/hilongjw/vue-lazyload)
