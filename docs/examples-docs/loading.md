<style>
@component-namespace demo {
  @b loading {
    .zan-loading {
      margin: 0 auto;
    }

    .circle-loading {
      margin: 20px auto;
    }

    .demo-loading__example--with-bg {
      background-color: rgba(0, 0, 0, 0.5);
      margin: 0 auto;
      width: 80px;
      padding: 25px 0;
      border-radius: 10px;
    }
  }
}
</style>

## Loading 加载

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Loading`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Loading`组件了：

```js
import Vue from 'vue';
import { Loading } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/loading.css';

Vue.component(Loading.name, Loading);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Loading`组件，这样只能在你注册的组件中使用`Loading`：

```js
import { Loading } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-loading': Loading
  }
};
```

### 代码演示

#### 渐变深色spinner

:::demo 渐变深色spinner
```html
<zan-loading class="some-customized-class"></zan-loading>
```
:::

#### 渐变浅色spinner

:::demo
```html
<div class="demo-loading__example demo-loading__example--with-bg">
  <zan-loading class="some-customized-class" :color="'white'"></zan-loading>
</div>
```
:::

#### 单色spinner

:::demo
```html
<zan-loading class="circle-loading" :type="'circle'" :color="'white'"></zan-loading>
<zan-loading class="circle-loading" :type="'circle'" :color="'black'"></zan-loading>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| color | `loading`颜色 | `string`  | `black`          | `black`, `white`   |
| type | `loading`类型 | `string`  | `gradient-circle`          | `gradient-circle`, `circle`   |
