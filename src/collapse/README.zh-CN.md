# Collapse 折叠面板

### 引入

```js
import Vue from 'vue';
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse);
Vue.use(CollapseItem);
```

## 代码演示

### 基础用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
</van-collapse>
```

```js
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
</van-collapse>
```

```js
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

### 自定义标题内容

```html
<van-collapse v-model="activeNames">
  <van-collapse-item name="1">
    <template #title>
      <div>标题1 <van-icon name="question-o" /></div>
    </template>
    内容
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2" icon="shop-o">
    内容
  </van-collapse-item>
</van-collapse>
```

```js
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前展开面板的 name | 手风琴模式：*number \| string*<br>非手风琴模式：*(number \| string)[]* | - |
| accordion | 是否开启手风琴模式 | *boolean* | `false` |
| border | 是否显示外边框 | *boolean* | `true` |

### Collapse Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换面板时触发 | activeNames: 类型与 v-model 绑定的值一致 |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 唯一标识符，默认为索引值 | *number \| string* | `index` |
| icon | 标题栏左侧[图标名称](#/zh-CN/icon)或图片链接 | *string* | - |
| size | 标题栏大小，可选值为 `large` | *string* | - |
| title | 标题栏左侧内容 | *number \| string* | - |
| value | 标题栏右侧内容 | *number \| string* | - |
| label | 标题栏描述信息 | *number \| string*  | - |
| border | 是否显示内边框 | *boolean* | `true` |
| is-link | 是否展示标题栏右侧箭头并开启点击反馈 | *boolean* | `true` |
| disabled | 是否禁用面板 | *boolean* | `false` |
| title-class | 左侧标题额外类名 | *string* | - |
| value-class | 右侧内容额外类名 | *string* | - |
| label-class | 描述信息额外类名 | *string* | - |

### CollapseItem Slots

| 名称 | 说明 |
|------|------|
| default | 面板内容 |
| value | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |
