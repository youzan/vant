<style>
@component-namespace demo {
  @b icon {

    .zan-icon {
      margin: 10px;
      font-size: 45px;
      width: 56px;
      text-align: center;
    }
  }
} 
</style>

## Icon 图标

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Icon`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Icon`组件了：

```js
import Vue from 'vue';
import { Icon } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/icon.css';

Vue.component(Icon.name, Icon);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Icon`组件，这样只能在你注册的组件中使用`Icon`：

```js
import { Icon } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-icon': Icon
  }
};
```

### 代码演示

#### 基础用法

设置`name`属性为对应的图标名称即可，以下目前有的所有图标：

:::demo 所有Icon
```html
<zan-icon name="qr-invalid"></zan-icon>
<zan-icon name="qr"></zan-icon>
<zan-icon name="exchange"></zan-icon>
<zan-icon name="close"></zan-icon>
<zan-icon name="location"></zan-icon>
<zan-icon name="upgrade"></zan-icon>
<zan-icon name="check"></zan-icon>
<zan-icon name="checked"></zan-icon>
<zan-icon name="like-o"></zan-icon>
<zan-icon name="like" :style="{ color: '#f44' }"></zan-icon>
<zan-icon name="chat"></zan-icon>
<zan-icon name="shop"></zan-icon>
<zan-icon name="photograph"></zan-icon>
<zan-icon name="add"></zan-icon>
<zan-icon name="add2"></zan-icon>
<zan-icon name="photo"></zan-icon>
<zan-icon name="logistics"></zan-icon>
<zan-icon name="edit"></zan-icon>
<zan-icon name="passed"></zan-icon>
<zan-icon name="cart"></zan-icon>
<zan-icon name="arrow"></zan-icon>
<zan-icon name="gift"></zan-icon>
<zan-icon name="search"></zan-icon>
<zan-icon name="clear"></zan-icon>
<zan-icon name="success"></zan-icon>
<zan-icon name="fail"></zan-icon>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| name | icon名称 | `string`  | `''` |   |
