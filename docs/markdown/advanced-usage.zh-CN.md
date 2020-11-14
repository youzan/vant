# 进阶用法

### 介绍

通过本章节你可以了解到 Vant 的一些进阶用法，比如组件插槽用法、多种浏览器适配方式。

## 组件用法

### 组件插槽

Vant 提供了丰富的组件插槽，通过插槽可以对组件的某一部分进行个性化定制。如果你对 Vue 的插槽不太熟悉，可以阅读 Vue 官方文档中的[插槽章节](https://v3.cn.vuejs.org/guide/component-slots.html)。下面是通过插槽来定制 Checkbox 图标的示例：

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
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },
};
```

### 组件实例方法

Vant 中的许多组件提供了实例方法，调用实例方法时，我们需要通过 [ref](https://v3.cn.vuejs.org/guide/component-template-refs.html) 来注册组件引用信息，引用信息将会注册在父组件的`$refs`对象上。注册完成后，我们可以通过`this.$refs.xxx`访问到对应的组件实例，并调用上面的实例方法。

```html
<!-- 通过 ref 属性将组件绑定到 this.$refs.checkbox 上 -->
<van-checkbox v-model="checked" ref="checkbox">
  复选框
</van-checkbox>
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

### Rem 布局适配

Vant 中的样式默认使用 `px` 作为单位，如果需要使用 `rem` 单位，推荐使用以下两个工具：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

#### PostCSS 配置

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改。

```js
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

> Tips: 在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 Vant 样式无法被编译。

### 桌面端适配

Vant 是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 `touch` 事件，没有监听桌面端的 `mouse` 事件。

如果你需要在桌面端使用 Vant，可以引入我们提供的 [@vant/touch-emulator](https://github.com/youzan/vant/tree/dev/packages/vant-touch-emulator)，这个库会在桌面端自动将 `mouse` 事件转换成对应的 `touch` 事件，使得组件能够在桌面端使用。

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

<img src="https://img.yzcdn.cn/vant/safearea.png">
