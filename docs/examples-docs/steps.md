<style>
@component-namespace demo {
  @b steps {
    .steps-success {
      color: #06bf04;
    }

    .zan-button {
      margin-left: 15px;
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

### 基础用法

:::demo 基础用法
```html
<zan-steps :active="active" icon="certificate" icon-class="steps-success" title="等待商家发货" description="等待商家发货等待商家发货等待商家发货等待商家发货等待商家发货">
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

### 只显示步骤条

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
| message-extra | 状态栏添加额外的元素 |

