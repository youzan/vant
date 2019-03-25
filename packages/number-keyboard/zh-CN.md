## NumberKeyboard 数字键盘

### 使用指南
``` javascript
import { NumberKeyboard } from 'vant';

Vue.use(NumberKeyboard);
```

### 代码演示

#### 默认样式

```html
<van-button @touchstart.stop="show = true">
  弹出默认键盘
</van-button>

<van-number-keyboard
  :show="show"
  extra-key="."
  close-button-text="完成"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

```javascript
export default {
  data() {
    return {
      show: true
    }
  },

  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('delete');
    }
  }
}
```

#### 自定义样式

```html
<van-number-keyboard
  :show="show"
  theme="custom"
  extra-key="."
  close-button-text="完成"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| show | 是否显示键盘 | `Boolean` | - | - |
| theme | 样式风格，可选值为 `default` `custom` | `String` | `default` | - |
| title | 键盘标题 | `String` | - | - |
| transition | 是否开启过场动画 | `Boolean` | `true` | - |
| z-index | 键盘 z-index | `Number` | `100` | - |
| extra-key | 左下角按键内容 | `String` | `''` | - |
| close-button-text | 关闭按钮文字，空则不展示 | `String` | `-` | - |
| delete-button-text | 删除按钮文字 | `String` | `删除` | 1.4.3 |
| show-delete-key | 是否展示删除按钮 | `Boolean` | `true` | - |
| hide-on-click-outside | 点击外部时是否收起键盘 | `Boolean` | `true` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| input | 点击按键时触发 | key: 按键内容 |
| delete | 点击删除键时触发 | - |
| close | 点击关闭按钮时触发 | - |
| blur | 点击关闭按钮或非键盘区域时触发 | - |
| show | 键盘完全弹出时触发 | - |
| hide | 键盘完全收起时触发 | - |
