<style>
@component-namespace demo {
  @b icon {
    .zan-col {
      text-align: center;
    }

    .zan-icon {
      font-size: 45px;
      display: block;
      margin: 15px 0;
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
<zan-row>
  <zan-col span="8">
   <zan-icon name="qr-invalid"></zan-icon>
   <span>qr-invalid</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="qr"></zan-icon>
   <span>qr</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="exchange"></zan-icon>
   <span>exchange</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="close"></zan-icon>
   <span>close</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="location"></zan-icon>
   <span>location</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="upgrade"></zan-icon>
   <span>upgrade</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="check"></zan-icon>
   <span>check</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="checked"></zan-icon>
   <span>checked</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="like-o"></zan-icon>
   <span>like-o</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="like" style="color: red;"></zan-icon>
   <span>like</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="chat"></zan-icon>
   <span>chat</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="shop"></zan-icon>
   <span>shop</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="photograph"></zan-icon>
   <span>photograph</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="add"></zan-icon>
   <span>add</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="add2"></zan-icon>
   <span>add2</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="photo"></zan-icon>
   <span>photo</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="logistics"></zan-icon>
   <span>logistics</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="edit"></zan-icon>
   <span>edit</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="passed"></zan-icon>
   <span>passed</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="cart"></zan-icon>
   <span>cart</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="arrow"></zan-icon>
   <span>arrow</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="gift"></zan-icon>
   <span>gift</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="search"></zan-icon>
   <span>search</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="clear"></zan-icon>
   <span>clear</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="success"></zan-icon>
   <span>success</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="fail"></zan-icon>
   <span>fail</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="contact"></zan-icon>
   <span>contact</span>
  </zan-col>
</zan-row>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| name | icon名称 | `string`  | `''` |   |
