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

#### 单色 spinner

:::demo 单色 spinner
```html
<van-loading type="circle" color="white"></van-loading>
<van-loading type="circle" color="black"></van-loading>
```
:::

#### 渐变色 spinner

:::demo 渐变色 spinner
```html
<van-loading type="gradient-circle" color="black"></van-loading>
<van-loading type="gradient-circle" color="white"></van-loading>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| color | 颜色 | `String` | `black` | `black` `white`   |
| type | 类型 | `String` | `gradient-circle` | `gradient-circle` `circle`   |
