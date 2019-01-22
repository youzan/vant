## Switch 开关

### 使用指南
``` javascript
import { Switch } from 'vant';

Vue.use(Switch);
```

### 代码演示

#### 基础用法

```html
<van-switch v-model="checked" />
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};  
```

#### 禁用状态

```html
<van-switch
  v-model="checked"
  disabled
/>
```

#### 加载状态

```html
<van-switch
  v-model="checked"
  loading
/>
```

#### 自定义大小

```html
<van-switch
  v-model="checked"
  size="24px"
/>
```

#### 自定义颜色

```html
<van-switch
  v-model="checked"
  active-color="#07c160"
  inactive-color="#f44"
/>
```

#### 异步控制

```html
<van-switch
  :value="checked"
  @input="onInput"
/>
```

```js
export default {
  data() {
    return {
      checked: true
    };
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked = checked;
      });
    }
  }
}; 
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 开关选中状态 | `any` | `false` | - |
| loading | 是否为加载状态 | `Boolean` | `false` | - |
| disabled | 是否为禁用状态 | `Boolean` | `false` | - |
| size | 开关尺寸 | `String` | `30px` | 1.0.0 |
| active-color | 打开时的背景色 | `String` | `#1989fa` | 1.4.2 |
| inactive-color | 关闭时的背景色 | `String` | `#fff` | 1.4.2 |
| active-value | 打开时的值 | `any` | `true` | 1.5.6 |
| inactive-value | 关闭时的值 | `any` | `false` | 1.5.6 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 开关状态切换回调 | checked: 是否选中开关 |
