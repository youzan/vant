## Collapse 折叠面板

### 使用指南
``` javascript
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse).use(CollapseItem);
```

### 代码演示

#### 基础用法
通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="有赞微商城" name="1">
    提供多样店铺模板，快速搭建网上商城
  </van-collapse-item>
  <van-collapse-item title="有赞零售" name="2">
    网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
  </van-collapse-item>
  <van-collapse-item title="有赞美业" name="3">
    线上拓客，随时预约，贴心顺手的开单收银
  </van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

#### 手风琴
通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="有赞微商城" name="1">
    提供多样店铺模板，快速搭建网上商城
  </van-collapse-item>
  <van-collapse-item title="有赞零售" name="2">
    网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
  </van-collapse-item>
  <van-collapse-item title="有赞美业" name="3">
    线上拓客，随时预约，贴心顺手的开单收银
  </van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

#### 自定义标题内容

```html
<van-collapse v-model="activeNames">
  <van-collapse-item name="1">
    <div slot="title">有赞微商城<van-icon name="question" /></div>
    提供多样店铺模板，快速搭建网上商城
  </van-collapse-item>
  <van-collapse-item title="有赞零售" name="2">
    网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
  </van-collapse-item>
</van-collapse>
```



### Collapse API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前展开面板的 name | `Array | String | Number` | - |
| accordion | 是否开启手风琴模式 | `Boolean` | `false` |

### Collapse Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 切换面板时触发 | activeNames: `string | array` |

### CollapseItem API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 面板唯一标识符，默认为索引值 | `String | Number` | `index` |
| icon | 左侧图标，可选值见 Icon 组件 | `String` | - |
| title | 左侧标题 | `String | Number` | - |
| value | 右侧内容 | `String | Number` | - |
| label | 标题下方的描述信息 | `String` | - |
| border | 是否显示内边框 | `Boolean` | `true` |
| center | 是否使内容垂直居中 | `Boolean` | `false` |
| url | 跳转链接 | `String` | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - |
| replace | 跳转时是否替换当前 history | `String` | `false` |
| clickable | 是否开启点击反馈 | `Boolean` | `false` |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` |
| required | 是否显示表单必填星号 | `Boolean` | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | `String` | - |

### CollapseItem Slot

| 名称 | 说明 |
|-----------|-----------|
| default | 面板内容 |
| value | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |
