## Toast 轻提示

### 使用指南

```javascript
import { Toast } from 'vant';

Vue.use(Toast);
```

### 代码演示

#### 文字提示

```javascript
Toast('提示内容');
```

#### 加载提示

```javascript
Toast.loading({
  mask: true,
  message: '加载中...'
});
```

#### 成功/失败提示

```javascript
Toast.success('成功文案');
Toast.fail('失败文案');
```

#### 高级用法

```javascript
const toast = Toast.loading({
  duration: 0,       // 持续展示 toast
  forbidClick: true, // 禁用背景点击
  loadingType: 'spinner',
  message: '倒计时 3 秒'
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);
```

#### 组件内调用
引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$toast('提示文案');
  }
}
```

#### 单例模式
Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例

```js
Toast.allowMultiple();

const toast1 = Toast('第一个 Toast');
const toast2 = Toast.success('第二个 Toast');

toast1.clear();
toast2.clear();
```

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| Toast | `options | message` | toast 实例 | 展示提示 |
| Toast.loading | `options | message` | toast 实例 | 展示加载提示 |
| Toast.success | `options | message` | toast 实例 | 展示成功提示 |
| Toast.fail | `options | message` | toast 实例 | 展示失败提示 |
| Toast.clear | `clearAll` | `void` | 关闭提示 |
| Toast.allowMultiple | - | `void` | 允许同时存在多个 Toast |
| Toast.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Toast 生效 |
| Toast.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Toast 生效 |

### Options

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 提示类型，可选值为 `loading` `success`<br>`fail` `html` | `String` | `text` | - |
| position | 位置，可选值为 `top` `bottom` | `String` | `middle` | - |
| message | 内容 | `String` | `''` | - | - |
| mask | 是否显示背景蒙层 | `Boolean` | `false` | - |
| forbidClick | 是否禁止背景点击 | `Boolean` | `false` | - |
| loadingType | 加载图标类型, 可选值为 `spinner` | `String` | `circular` | 1.1.3 |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | `Number` | `3000` | - |
| className | 自定义类名 | `String | Array | Object` | - | 1.6.0 |
| onClose | 关闭时的回调函数 | `Function` | - | 1.6.10 |
| getContainer | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | `String | () => HTMLElement` | `body` | 1.6.3 |
