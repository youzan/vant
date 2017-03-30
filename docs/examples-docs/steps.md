<style>
@component-namespace demo {
  @b steps {
    .steps-success {
      color: #06bf04;
    }

    .zan-button {
      margin: 15px 0 0 15px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    nextStep() {
      if (++this.active > 3) this.active = 0;
    }
  }
}
</script>

## Steps 步骤条

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Steps`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Steps`组件了：

```js
import Vue from 'vue';
import { Steps, Step } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/steps.css';

Vue.component(Steps.name, Steps);
Vue.component(Step.name, Step);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Steps`组件，这样只能在你注册的组件中使用`Steps`：

```js
import { Steps, Step } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-steps': Steps,
    'zan-step': Step
  }
};
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<zan-steps :active="active" icon="logistics" icon-class="steps-success" title="等待商家发货" description="等待商家发货等待商家发货等待商家发货等待商家发货等待商家发货">
  <zan-step>买家下单</zan-step>
  <zan-step>商家接单</zan-step>
  <zan-step>买家提货</zan-step>
  <zan-step>交易完成</zan-step>
</zan-steps>

<zan-button @click="nextStep">下一步</zan-button>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    nextStep() {
      if (++this.active > 3) this.active = 0;
    }
  }
}
</script>
```
:::

#### 只显示步骤条

当你不设置`title`或`description`属性时，就会🈯️显示步骤条，而没有步骤的详细信息。

:::demo 只显示步骤条
```html
<zan-steps :active="active">
  <zan-step>买家下单</zan-step>
  <zan-step>商家接单</zan-step>
  <zan-step>买家提货</zan-step>
  <zan-step>交易完成</zan-step>
</zan-steps>
```
:::


### Steps API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| active | 当前激活的步骤，从0开始 | `number`  |          |          |
| icon | 当前步骤的icon | `string`  |          |          |
| iconClass | 当前步骤栏为icon添加的类 | `string`  |          |          |
| title | 当前步骤从标题 | `string`  |          |          |
| description | 当前步骤描述 | `string`  |          |          |

### Steps Slot

| 名称       | 说明      |
|-----------|-----------|
| icon | 自定义icon区域 |
| message-extra | 状态栏添加额外的元素 |

