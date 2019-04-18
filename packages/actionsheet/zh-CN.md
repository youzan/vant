## Actionsheet 上拉菜单

### 使用指南
``` javascript
import { Actionsheet } from 'vant';

Vue.use(Actionsheet);
```

### 代码演示

#### 基础用法

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

```html
<van-actionsheet
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
        {
          name: '选项'
        },
        {
          name: '选项',
          subname: '描述信息'
        },
        {
          loading: true
        },
        {
          name: '禁用选项',
          disabled: true
        }
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

#### 带取消按钮的 Actionsheet

如果传入了`cancelText`属性，且不为空，则会在下方显示一个取消按钮，点击会将当前`Actionsheet`关闭。

```html
<van-actionsheet
  v-model="show"
  :actions="actions"
  cancel-text="取消"
  @select="onSelect"
  @cancel="onCancel"
/>
```

#### 带标题的 Actionsheet

如果传入了`title`属性，且不为空，则另外一种样式的`Actionsheet`，里面内容需要自定义。

```html
<van-actionsheet v-model="show" title="支持以下配送方式">
  <p>一些内容</p>
</van-actionsheet>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| actions | 菜单选项 | `Array` | `[]` | - |
| title | 标题 | `String` | - | - |
| cancel-text | 取消按钮文字，为空时不展示取消按钮 | `String` | - | - |
| overlay | 是否显示遮罩层 | `Boolean` | `true` | - |
| close-on-click-overlay | 是否在点击蒙层后关闭 | `Boolean` | `true` | - |
| lazy-render | 是否在显示弹层时才渲染节点 | `Boolean` | `true` | 1.1.11 |
| get-container | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | `String | () => HTMLElement` | - | - |
| safe-area-inset-bottom | 是否开启 iPhone X 底部安全区适配，需要在 `viewport` meta 标签中设置 `viewport-fit=cover` | `Boolean` | `false` | 1.6.15 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| select | 选中选项时触发，禁用或加载状态下不会触发 | item: 选项对应的对象, index: 选择对应的索引 |
| cancel | 取消按钮点击时触发 | - |

### actions

`API`中的`actions`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`：

| key | 说明 |
|------|------|
| name | 标题 |
| subname | 二级标题 |
| className | 为对应列添加额外的 class |
| loading | 是否为加载状态 |
| disabled | 是否为禁用状态 |
