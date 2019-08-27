# ActionSheet 上拉菜单

### 引入

``` javascript
import Vue from 'vue';
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);
```

## 代码演示

### 基础用法

`ActionSheet`通过`actions`数组来定义展示的选项，数组的每一项是一个对象，对象属性见文档下方表格。

```html
<van-action-sheet
  v-model="show"
  :actions="actions"
  @select="onSelect"
/>
```

```javascript
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '描述信息' }
      ]
    };
  },

  methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Toast(item.name);
    }
  }
}
```

### 选项状态

选项可以设置为加载状态或禁用状态

```html
<van-action-sheet
  v-model="show"
  :actions="actions"
/>
```

```javascript
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: '选项', color: '#07c160' },
        { loading: true },
        { name: '禁用选项', disabled: true }
      ]
    };
  }
}
```

### 展示取消按钮

设置`cancelText`属性后，会在底部展示取消按钮，点击后关闭当前菜单

```html
<van-action-sheet
  v-model="show"
  :actions="actions"
  cancel-text="取消"
  @select="onSelect"
  @cancel="onCancel"
/>
```

### 展示标题栏

通过设置`title`属性展示标题栏，同时可以使用插槽自定义菜单内容

```html
<van-action-sheet v-model="show" title="标题">
  <p>内容</p>
</van-action-sheet>
```

## 常见问题

### 引入时提示 dependencies not found？

在 1.x 版本中，上拉菜单的组件名为`Actionsheet`，从 2.0 版本开始更名为`ActionSheet`，请注意区分。


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| actions | 菜单选项 | *Action[]* | `[]` | - |
| title | 标题 | *string* | - | - |
| cancel-text | 取消按钮文字 | *string* | - | - |
| overlay | 是否显示遮罩层 | *boolean* | `true` | - |
| round | 是否显示圆角 | *boolean* | `false` | 2.0.9 |
| close-on-click-action | 是否在点击选项后关闭 | *boolean* | `false` | - |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | *boolean* | `true` | - |
| lazy-render | 是否在显示弹层时才渲染节点 | *boolean* | `true` | - |
| lock-scroll | 是否锁定背景滚动 | *boolean* | `true` | - |
| duration | 动画时长，单位秒 | *number* | `0.3` | 2.0.3 |
| get-container | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | *string \| () => HTMLElement* | - | - |
| safe-area-inset-bottom | 是否开启 iPhone X 底部安全区适配，需要在 `viewport` meta 标签中设置 `viewport-fit=cover` | *boolean* | `false` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选中选项时触发，禁用或加载状态下不会触发 | item: 选项对应的对象, index: 选择对应的索引 |
| cancel | 取消按钮点击时触发 | - |
| click-overlay | 点击遮罩层时触发 | - |
| open | 打开菜单时触发 | - |
| opened | 打开菜单且动画结束后触发 | - |
| close | 关闭菜单时触发 | - |
| closed | 关闭菜单且动画结束后触发 | - |

### Action 数据结构

`Props`中的`actions`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`：

| 键名 | 说明 | 类型 |
|------|------|------|
| name | 标题 | *string* |
| subname | 二级标题 | *string* |
| color | 选项文字颜色 | *string* |
| className | 为对应列添加额外的 class | *any* |
| loading | 是否为加载状态 | *boolean* |
| disabled | 是否为禁用状态 | *boolean* |
