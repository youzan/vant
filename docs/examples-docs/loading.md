<style>
.demo-loading {
  .van-loading {
    margin: 0 auto;
  }

  .circle-loading {
    margin: 20px auto;
  }

  .demo-loading__example--with-bg {
    background-color: rgba(17, 17, 17, 0.7);
    margin: 0 auto;
    width: 120px;
    padding: 45px 0;
    border-radius: 10px;
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

#### 渐变深色spinner

:::demo 渐变深色spinner
```html
<van-loading class="some-customized-class"></van-loading>
```
:::

#### 渐变浅色spinner

:::demo 渐变浅色spinner
```html
<div class="demo-loading__example demo-loading__example--with-bg">
  <van-loading class="some-customized-class" :color="'white'"></van-loading>
</div>

<style>
.demo-loading__example--with-bg {
  background-color: rgba(17, 17, 17, 0.7);
  width: 120px;
  padding: 45px 0;
  border-radius: 10px;
}
</style>
```
:::

#### 单色spinner

:::demo 单色spinner
```html
<van-loading class="circle-loading" :type="'circle'" :color="'white'"></van-loading>
<van-loading class="circle-loading" :type="'circle'" :color="'black'"></van-loading>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| color | `loading`颜色 | `string`  | `black`          | `black`, `white`   |
| type | `loading`类型 | `string`  | `gradient-circle`          | `gradient-circle`, `circle`   |
