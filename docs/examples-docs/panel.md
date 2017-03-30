<style>
@component-namespace demo {
  @b panel {
    .zan-panel-sum {
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

    .zan-panel-buttons {
      text-align: right;

      .zan-button {
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

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Panel`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Panel`组件了：

```js
import Vue from 'vue';
import { Panel } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/panel.css';

Vue.component(Panel.name, Panel);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Panel`组件，这样只能在你注册的组件中使用`Panel`：

```js
import { Panel } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-panel': Panel
  }
};
```

### 代码演示

#### 基础用法

面板只是一个容器，里面可以放入自定义的内容。

:::demo 基础用法
```html
<zan-panel title="标题" desc="标题描述" status="状态">
  <div class="panel-content">
    panel内容
  </div>
</zan-panel>
```
:::

#### 高级用法

使用具名`slot`自定义内容。

:::demo 高级用法
```html
<zan-panel title="标题" desc="标题描述" status="状态">
  <zan-card
    title="商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"
    desc="商品SKU1，商品SKU2"
    thumb="https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg">
    <div class="zan-card__row" slot="title">
      <h4 class="zan-card__title">商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余</h4>
      <span class="zan-card__price">¥ 2.00</span>
    </div>
    <div class="zan-card__row" slot="desc">
      <h4 class="zan-card__desc">商品sku</h4>
      <span class="zan-card__num">x 2</span>
    </div>
    <div class="zan-card__footer" slot="footer">
      <zan-button size="mini">按钮一</zan-button>
      <zan-button size="mini">按钮二</zan-button>
    </div>
  </zan-card>
  <div class="zan-panel-sum">
    合计：<span>¥ 1999.90</span>
  </div>
  <div class="zan-panel-buttons" slot="footer">
    <zan-button size="small">按钮一</zan-button>
    <zan-button size="small" type="danger">按钮二</zan-button>
  </div>
</zan-panel>
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
