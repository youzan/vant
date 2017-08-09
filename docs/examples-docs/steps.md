<style>
.demo-steps {
  .steps-success {
    color: #06bf04;
  }

  .van-button {
    margin: 15px 0 0 15px;
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

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-steps :active="active" icon="logistics" icon-class="steps-success" title="等待商家发货" description="等待商家发货等待商家发货等待商家发货等待商家发货等待商家发货">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>

<van-button @click="nextStep">下一步</van-button>

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

当你不设置`title`或`description`属性时，就会只显示步骤条，而没有步骤的详细信息。

:::demo 只显示步骤条
```html
<van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>
```
:::

#### 竖式步骤条

可以通过设置`direction`属性来改变步骤条的显示方式，可选值有`vertical/horizontal`。

:::demo 只显示步骤条
```html
<van-steps direction="vertical" :active="0" active-color="#f60">
  <van-step>
    <h3>【城市】最新的物流状态之类的表述哈哈哈哈</h3>
    <p>2016-07-12 12:12:12</p>
  </van-step>
  <van-step>
    <h3>【城市】已经过了的物流状态我是折行我是折行我是折行联系电话：158630099999</h3>
    <p>2016-07-12 12:12:12</p>
  </van-step>
  <van-step>
    <h3>未发货</h3>
    <p>2016-07-12 12:12:12</p>
  </van-step>
</van-steps>
```
:::

### 高级用法

可以使用具名`slot`增加自定义内容，其中包含`icon`和`message-extra`。

:::demo 高级用法
```html
<van-steps :active="active" title="等待商家发货">
  <van-icon slot="icon" name="like"></van-icon>
  <p slot="message-extra">流程</p>
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>  
</van-steps>
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
| direction | 	显示方向 | `string`  |   `horizontal`       |      `vertical/horizontal`    |
| activeColor | 	`active`状态时的颜色 | `string`  |   `#06bf04`       |        |

### Steps Slot

| 名称       | 说明      |
|-----------|-----------|
| icon | 自定义icon区域 |
| message-extra | 状态栏添加额外的元素 |

