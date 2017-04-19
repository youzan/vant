<style>
@component-namespace demo {
  @b icon {
    .van-col {
      text-align: center;
    }

    .van-icon {
      font-size: 45px;
      display: block;
      margin: 15px 0;
    }
  }
} 
</style>

## Icon 图标

### 使用指南

如果你已经按照快速上手中引入了整个，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Icon`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Icon`组件了：

```js
import Vue from 'vue';
import { Icon } from 'vant';
import 'vant/lib/vant-css/icon.css';

Vue.component(Icon.name, Icon);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Icon`组件，这样只能在你注册的组件中使用`Icon`：

```js
import { Icon } from 'vant';

export default {
  components: {
    'van-icon': Icon
  }
};
```

### 代码演示

#### 基础用法

设置`name`属性为对应的图标名称即可，以下目前有的所有图标：

:::demo 所有Icon
```html
<van-row>
  <van-col span="8">
   <van-icon name="qr-invalid"></van-icon>
   <span>qr-invalid</span>
  </van-col>
  <van-col span="8">
   <van-icon name="qr"></van-icon>
   <span>qr</span>
  </van-col>
  <van-col span="8">
   <van-icon name="exchange"></van-icon>
   <span>exchange</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="close"></van-icon>
   <span>close</span>
  </van-col>
  <van-col span="8">
   <van-icon name="location"></van-icon>
   <span>location</span>
  </van-col>
  <van-col span="8">
   <van-icon name="upgrade"></van-icon>
   <span>upgrade</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="check"></van-icon>
   <span>check</span>
  </van-col>
  <van-col span="8">
   <van-icon name="checked"></van-icon>
   <span>checked</span>
  </van-col>
  <van-col span="8">
   <van-icon name="like-o"></van-icon>
   <span>like-o</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="like" style="color: red;"></van-icon>
   <span>like</span>
  </van-col>
  <van-col span="8">
   <van-icon name="chat"></van-icon>
   <span>chat</span>
  </van-col>
  <van-col span="8">
   <van-icon name="shop"></van-icon>
   <span>shop</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="photograph"></van-icon>
   <span>photograph</span>
  </van-col>
  <van-col span="8">
   <van-icon name="add"></van-icon>
   <span>add</span>
  </van-col>
  <van-col span="8">
   <van-icon name="add2"></van-icon>
   <span>add2</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="photo"></van-icon>
   <span>photo</span>
  </van-col>
  <van-col span="8">
   <van-icon name="logistics"></van-icon>
   <span>logistics</span>
  </van-col>
  <van-col span="8">
   <van-icon name="edit"></van-icon>
   <span>edit</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="passed"></van-icon>
   <span>passed</span>
  </van-col>
  <van-col span="8">
   <van-icon name="cart"></van-icon>
   <span>cart</span>
  </van-col>
  <van-col span="8">
   <van-icon name="arrow"></van-icon>
   <span>arrow</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="gift"></van-icon>
   <span>gift</span>
  </van-col>
  <van-col span="8">
   <van-icon name="search"></van-icon>
   <span>search</span>
  </van-col>
  <van-col span="8">
   <van-icon name="clear"></van-icon>
   <span>clear</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="success"></van-icon>
   <span>success</span>
  </van-col>
  <van-col span="8">
   <van-icon name="fail"></van-icon>
   <span>fail</span>
  </van-col>
  <van-col span="8">
   <van-icon name="contact"></van-icon>
   <span>contact</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="wechat"></van-icon>
   <span>wechat</span>
  </van-col>
  <van-col span="8">
   <van-icon name="alipay"></van-icon>
   <span>alipay</span>
  </van-col>
</van-row>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| name | icon名称 | `string`  | `''` |   |
