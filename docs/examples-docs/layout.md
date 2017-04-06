<style>
@component-namespace demo {
  @b layout {
    .zan-row {
      padding: 0 20px;
    }
    .zan-col {
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

主要提供了`zan-row`和`zan-col`两个组件来进行行列布局。

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Row`和`Col`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Row`和`Col`组件了：

```js
import Vue from 'vue';
import { Row, Col } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/col.css';
import '@youzan/zanui-vue/lib/zanui-css/row.css';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Row`和`Col`组件，这样只能在你注册的组件中使用`Row`和`Col`：

```js
import { Row, Col } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-row': Row,
    'zan-col': Col
  }
};
```

### 代码演示

#### 常规用法

Layout组件提供了`24列栅格`，通过在`zan-col`上添加`span`属性设置列所占的宽度百分比`(span / 24)`；此外，添加`offset`属性可以设置列的偏移宽度，计算方式与span相同。

:::demo 常规用法
```html
<zan-row>
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
  <zan-col span="8">
    <div class="white">span: 8</div>
  </zan-col>
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="4">
    <div class="gray">span: 4</div>
  </zan-col>
  <zan-col span="10" offset="4">
    <div class="gray">offset: 4, span: 10</div>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col offset="12" span="12">
    <div class="gray">offset: 12, span: 12</div>
  </zan-col>
</zan-row>
```
:::

#### 在列元素之间增加间距

列元素之间默认间距为0，如果希望在列元素增加相同的间距，可以在`zan-row`上添加`gutter`属性来设置列元素之间的间距。

:::demo 在列元素之间增加间距
```html
<zan-row gutter="10">
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
  <zan-col span="8">
    <div class="gray">span: 8</div>
  </zan-col>
</zan-row>
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
