<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4;
    }
  }
}
</script>

## Steps

### Install
``` javascript
import { Step, Steps } from 'vant';

Vue.component(Step.name, Step);
Vue.component(Steps.name, Steps);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>

<van-button @click="nextStep">下一步</van-button>
```

```javascript
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4;
    }
  }
}
```
:::

#### 物流描述

通过`title`和`description`属性来定义物流描述信息

:::demo 物流描述
```html
<van-steps
  :active="active"
  icon="logistics"
  icon-class="steps-success"
  title="等待商家发货"
  description="物流描述"
>
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>
```
:::

#### 竖向步骤条

可以通过设置`direction`属性来改变步骤条的显示方式

:::demo 竖向步骤条
```html
<van-steps direction="vertical" :active="0" active-color="#f60">
  <van-step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
  </van-step>
  <van-step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
  </van-step>
  <van-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </van-step>
</van-steps>
```
:::

### #### Advanced Usage
使用`slot`增加自定义内容

:::demo Advanced Usage
```html
<van-steps :active="active" title="等待商家发货">
  <van-icon slot="icon" name="location"></van-icon>
  <p slot="message-extra">物流进度</p>
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>  
</van-steps>
```
:::

### Steps API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| active | 当前步骤，起始值为0 | `Number` | | |
| icon | 当前步骤的icon | `String` | | |
| iconClass | 当前步骤栏为icon添加的类 | `String` | | |
| title | 当前步骤从标题 | `String` | | |
| description | 当前步骤描述 | `String` | | |
| direction | 显示方向 | `String` | `horizontal` | `vertical` |
| activeColor | active状态颜色 | `String` | `#06bf04` | |

### Steps Slot

| 名称 | Description |
|-----------|-----------|
| icon | 自定义icon区域 |
| message-extra | 状态栏添加额外的元素 |
