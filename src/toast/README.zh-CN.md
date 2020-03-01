# Toast 轻提示

### 引入

```js
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
```

## 代码演示

### 文字提示

```js
Toast('提示内容');
```

### 加载提示

使用`Toast.loading`方法展示加载提示，通过`forbidClick`属性可以禁用背景点击，通过`loadingType`属性可以自定义加载图标类型。

```js
Toast.loading({
  message: '加载中...',
  forbidClick: true
});

// 自定义加载图标
Toast.loading({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner'
});
```

### 成功/失败提示

```js
Toast.success('成功文案');
Toast.fail('失败文案');
```

### 自定义图标

```js
Toast({
  message: '自定义图标',
  icon: 'like-o'
});

Toast({
  message: '展示图片',
  icon: 'https://img.yzcdn.cn/vant/logo.png'
});
```

### 动态更新提示

```js
const toast = Toast.loading({
  duration: 0, // 持续展示 toast
  forbidClick: true,
  message: '倒计时 3 秒'
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    // 手动清除 Toast
    Toast.clear();
  }
}, 1000);
```

### 组件内调用

引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$toast('提示文案');
  }
}
```

### 单例模式

Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例

```js
Toast.allowMultiple();

const toast1 = Toast('第一个 Toast');
const toast2 = Toast.success('第二个 Toast');

toast1.clear();
toast2.clear();
```

### 修改默认配置

通过`Toast.setDefaultOptions`函数可以全局修改 Toast 的默认配置

```js
// 将所有 Toast 的展示时长设置为 2000 毫秒
Toast.setDefaultOptions({ duration: 2000 });

// 将所有 loading Toast 设置为背景不可点击 (2.2.10 版本开始支持)
Toast.setDefaultOptions('loading', { forbidClick: true });

// 重置所有 Toast 的默认配置
Toast.resetDefaultOptions();

// 重置 loading Toast 的默认配置 (2.2.10 版本开始支持)
Toast.resetDefaultOptions('loading');
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| Toast | 展示提示 | `options | message` | toast 实例 |
| Toast.loading | 展示加载提示 | `options | message` | toast 实例 |
| Toast.success | 展示成功提示 | `options | message` | toast 实例 |
| Toast.fail | 展示失败提示 | `options | message` | toast 实例 |
| Toast.clear | 关闭提示 | `clearAll: boolean` | `void` |
| Toast.allowMultiple | 允许同时存在多个 Toast | - | `void` |
| Toast.setDefaultOptions | 修改默认配置，对所有 Toast 生效。<br>传入 type 可以修改指定类型的默认配置 | `type | options` | `void` |
| Toast.resetDefaultOptions | 重置默认配置，对所有 Toast 生效。<br>传入 type 可以重置指定类型的默认配置 | `type` | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 提示类型，可选值为 `loading` `success`<br>`fail` `html` | *string* | `text` |
| position | 位置，可选值为 `top` `bottom` | *string* | `middle` |
| message | 文本内容，支持通过`\n`换行 | *string* | `''` | - |
| icon `v2.0.1` | 自定义图标，支持传入[图标名称](#/zh-CN/icon)或图片链接 | *string* | - |
| iconPrefix `v2.0.9` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | *string* | `van-icon` |
| overlay `v2.2.13` | 是否显示背景遮罩层 | *boolean* | `false` |
| forbidClick | 是否禁止背景点击 | *boolean* | `false` |
| closeOnClick `v2.1.5` | 是否在点击后关闭 | *boolean* | `false` |
| closeOnClickOverlay `v2.2.13` | 是否在点击遮罩层后关闭 | *boolean* | `false` |
| loadingType | [加载图标类型](#/zh-CN/loading), 可选值为 `spinner` | *string* | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | *number* | `2000` |
| className | 自定义类名 | *any* | - |
| onOpened | 完全展示后的回调函数 | *Function* | - |
| onClose | 关闭时的回调函数 | *Function* | - |
| transition `v2.2.6` | 动画类名，等价于 [transtion](https://cn.vuejs.org/v2/api/index.html#transition) 的`name`属性 | *string* | `van-fade` |
| getContainer | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | *string \| () => Element* | `body` |
