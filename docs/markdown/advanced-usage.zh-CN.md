# 进阶用法

### 介绍

通过本章节你可以了解到 Vant 的一些进阶用法，比如组件插槽用法、多种浏览器适配方式。

## 组件用法

### 组件注册

Vant 支持多种组件注册方式，请根据实际业务需要进行选择。

#### 全局注册

全局注册后，你可以在 app 下的任意子组件中使用注册的 Vant 组件。

```js
import Vue from 'vue';
import { Button } from 'vant';

// 方式一. 通过 Vue.use 注册
// 注册完成后，在模板中通过 <van-button> 或 <VanButton> 标签来使用按钮组件
Vue.use(Button);

// 方式二. 通过 Vue.component 注册
// 注册完成后，在模板中通过 <van-button> 标签来使用按钮组件
Vue.component(Button.name, Button);
```

#### 局部注册

局部注册后，你可以在当前组件中使用注册的 Vant 组件。

```js
import { Button } from 'vant';

export default {
  components: {
    [Button.name]: Button,
  },
};
```

> 对于组件注册更详细的介绍，请参考 [Vue 官方文档 - 组件注册](https://cn.vuejs.org/v2/guide/components-registration.html)。

### 组件插槽

Vant 提供了丰富的组件插槽，通过插槽可以对组件的某一部分进行个性化定制。如果你对 Vue 的插槽不太熟悉，可以阅读 Vue 官方文档中的[插槽章节](https://cn.vuejs.org/v2/guide/components-slots.html)。下面是通过插槽来定制 Checkbox 图标的示例：

```html
<van-checkbox v-model="checked">
  <!-- 使用组件提供的 icon 插槽 -->
  <!-- 将默认图标替换为个性化图片 -->
  <template #icon="props">
    <img :src="props.checked ? activeIcon : inactiveIcon" />
  </template>
</van-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
      activeIcon: 'https://img01.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img01.yzcdn.cn/vant/user-inactive.png',
    };
  },
};
```

### 组件实例方法

Vant 中的许多组件提供了实例方法，调用实例方法时，我们需要通过 [ref](https://cn.vuejs.org/v2/api/#ref) 来注册组件引用信息，引用信息将会注册在父组件的`$refs`对象上。注册完成后，我们可以通过`this.$refs.xxx`访问到对应的组件实例，并调用上面的实例方法。

```html
<!-- 通过 ref 属性将组件绑定到 this.$refs.checkbox 上 -->
<van-checkbox v-model="checked" ref="checkbox"> 复选框 </van-checkbox>
```

```js
export default {
  data() {
    return {
      checked: false,
    };
  },
  // 注意：组件挂载后才能访问到 ref 对象
  mounted() {
    this.$refs.checkbox.toggle();
  },
};
```

## 浏览器适配

### Viewport 布局

Vant 默认使用 `px` 作为样式单位，如果需要使用 `viewport` 单位 (vw, vh, vmin, vmax)，推荐使用 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 进行转换。

[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。

#### PostCSS PostCSS 示例配置

下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```

> Tips: 在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 Vant 样式无法被编译。

### Rem 布局适配

如果需要使用 `rem` 单位进行适配，推荐使用以下两个工具：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

#### PostCSS 示例配置

下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

#### 其他设计稿尺寸

如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 `rootValue` 配置调整为:

```js
// postcss.config.js
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};
```

### 桌面端适配

Vant 是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 `touch` 事件，没有监听桌面端的 `mouse` 事件。

如果你需要在桌面端使用 Vant，可以引入我们提供的 [@vant/touch-emulator](https://github.com/vant-ui/vant/tree/dev/packages/vant-touch-emulator)，这个库会在桌面端自动将 `mouse` 事件转换成对应的 `touch` 事件，使得组件能够在桌面端使用。

```bash
# 安装模块
npm i @vant/touch-emulator -S
```

```js
// 引入模块后自动生效
import '@vant/touch-emulator';
```

### 底部安全区适配

iPhone X 等机型底部存在底部指示条，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行安全区适配。Vant 中部分组件提供了 `safe-area-inset-top` 或 `safe-area-inset-bottom` 属性，设置该属性后，即可在对应的机型上开启适配，如下示例：

```html
<!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
/>

<!-- 开启顶部安全区适配 -->
<van-nav-bar safe-area-inset-top />

<!-- 开启底部安全区适配 -->
<van-number-keyboard safe-area-inset-bottom />
```

<img src="https://img01.yzcdn.cn/vant/safearea.png">
