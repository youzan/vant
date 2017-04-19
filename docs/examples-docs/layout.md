<style>
@component-namespace demo {
  @b layout {
    .van-row {
      padding: 0 20px;
    }
    .van-col {
      margin-bottom: 10px;
    }
  }
}

.gray {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    background: #666;
    color: #fff;
    text-align: center;
}
.white {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    background: #fff;
    color: #333;
    text-align: center;
}
</style>

## Layout 布局

主要提供了`van-row`和`van-col`两个组件来进行行列布局。

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Row`和`Col`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Row`和`Col`组件了：

```js
import Vue from 'vue';
import { Row, Col } from 'vant';
import 'vant/lib/vant-css/col.css';
import 'vant/lib/vant-css/row.css';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Row`和`Col`组件，这样只能在你注册的组件中使用`Row`和`Col`：

```js
import { Row, Col } from 'vant';

export default {
  components: {
    'van-row': Row,
    'van-col': Col
  }
};
```

### 代码演示

#### 常规用法

Layout组件提供了`24列栅格`，通过在`van-col`上添加`span`属性设置列所占的宽度百分比`(span / 24)`；此外，添加`offset`属性可以设置列的偏移宽度，计算方式与span相同。

:::demo 常规用法
```html
<van-row>
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
  <van-col span="8">
    <div class="white">span: 8</div>
  </van-col>
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
</van-row>
<van-row>
  <van-col span="4">
    <div class="gray">span: 4</div>
  </van-col>
  <van-col span="10" offset="4">
    <div class="gray">offset: 4, span: 10</div>
  </van-col>
</van-row>
<van-row>
  <van-col offset="12" span="12">
    <div class="gray">offset: 12, span: 12</div>
  </van-col>
</van-row>
```
:::

#### 在列元素之间增加间距

列元素之间默认间距为0，如果希望在列元素增加相同的间距，可以在`van-row`上添加`gutter`属性来设置列元素之间的间距。

:::demo 在列元素之间增加间距
```html
<van-row gutter="10">
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
  <van-col span="8">
    <div class="gray">span: 8</div>
  </van-col>
</van-row>
```
:::

### API

#### Row
| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| gutter | 列元素之间的间距（单位为px） | `String | Number`  | -  |   |

#### Column
| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| span | 列元素宽度 | `String | Number`  | -  |   |
| offset | 列元素偏移宽度 | `String | Number`  | -  |   |
