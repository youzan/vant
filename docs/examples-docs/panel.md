<style>
@component-namespace demo {
  @b panel {
    .van-panel-sum {
      background: #fff;
      text-align: right;
      font-size: 14px;
      color: #333;
      line-height: 30px;
      padding-right: 15px;

      span {
        color: red;
      }
    }

    .van-panel-buttons {
      text-align: right;

      .van-button {
        margin-left: 5px;
      }
    }

    .panel-content {
      padding: 20px;
    }
  }
}
</style>

## Panel 面板

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Panel`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Panel`组件了：

```js
import Vue from 'vue';
import { Panel } from 'vant';
import 'vant/lib/vant-css/panel.css';

Vue.component(Panel.name, Panel);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Panel`组件，这样只能在你注册的组件中使用`Panel`：

```js
import { Panel } from 'vant';
import 'vant/lib/vant-css/panel.css';

export default {
  components: {
    'van-panel': Panel
  }
};
```

### 代码演示

#### 基础用法

面板只是一个容器，里面可以放入自定义的内容。

:::demo 基础用法
```html
<van-panel title="标题" desc="标题描述" status="状态">
  <div class="panel-content">
    panel内容
  </div>
</van-panel>
```
:::

#### 高级用法

使用`slot`自定义内容。比如在自定义内容中放入一个`van-card`。

:::demo 高级用法
```html
<van-panel title="标题" desc="标题描述" status="状态">
  <van-card
    title="商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"
    desc="商品SKU1，商品SKU2"
    thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
    <div class="van-card__row" slot="title">
      <h4 class="van-card__title">商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余</h4>
      <span class="van-card__price">¥ 2.00</span>
    </div>
    <div class="van-card__row" slot="desc">
      <h4 class="van-card__desc">商品sku</h4>
      <span class="van-card__num">x 2</span>
    </div>
    <div class="van-card__footer" slot="footer">
      <van-button size="mini">按钮一</van-button>
      <van-button size="mini">按钮二</van-button>
    </div>
  </van-card>
  <div class="van-panel-sum">
    合计：<span>¥ 1999.90</span>
  </div>
  <div class="van-panel-buttons" slot="footer">
    <van-button size="small">按钮一</van-button>
    <van-button size="small" type="danger">按钮二</van-button>
  </div>
</van-panel>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `string`  |           |           |
| desc | 描述 | `string`  |           |           |
| status | 状态 | `string`  |           |           |


### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义内容 |
| header | 自定义header |
| footer | 自定义footer |
