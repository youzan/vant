<style>
.demo-loading {
  .van-loading {
    display: inline-block;
    margin: 10px 0 10px 20px;
  }
}
</style>

## Loading 加载

### 使用指南
``` javascript
import { Loading } from 'vant';

Vue.component(Loading.name, Loading);
```

### 代码演示

#### 单色圆环

:::demo 单色圆环
```html
<van-loading type="circle" color="black"></van-loading>
<van-loading type="circle" color="white"></van-loading>
```
:::

#### 渐变色圆环

:::demo 渐变色圆环
```html
<van-loading type="gradient-circle" color="black"></van-loading>
<van-loading type="gradient-circle" color="white"></van-loading>
```
:::

#### Spinner

:::demo Spinner
```html
<van-loading type="spinner" color="black"></van-loading>
<van-loading type="spinner" color="white"></van-loading>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| color | 颜色 | `String` | `black` | `black` `white` |
| type | 类型 | `String` | `gradient-circle` | `spinner` `circle` |
