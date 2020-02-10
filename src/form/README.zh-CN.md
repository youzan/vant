# Form 表单

### 引入

```js
import Vue from 'vue';
import { Form } from 'vant';

Vue.use(Form);
```

## 代码演示

### 基础用法

```html
<van-form @submit="onSubmit" @failed="onFailed">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info">提交</van-button>
  </div>
</van-form>
```

```js
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|

### Slots

| 名称 | 说明 |
|------|------|
