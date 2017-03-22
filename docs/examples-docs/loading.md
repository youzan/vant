<style>
.demo-loading__example{
  width: 30px;
  height: 30px;
  padding: 20px;
  margin: auto;
  border-radius: 5px;
  border: 1px solid transparent;
}

.demo-loading__example--with-bg {
  background-color: rgba(0, 0, 0, 0.5);
}

.demo-loading {
  padding: 0 20px;
}
</style>

## Loading 加载中

### 基础用法

:::demo 基础用法
```html
<div class="demo-loading">
  <h2 class="demo-sub-title">渐变深色spinner</h2>
  <div class="demo-loading__example">
    <zan-loading class="some-customized-class"></zan-loading>
  </div>
  <h2 class="demo-sub-title">渐变浅色spinner</h2>
  <div class="demo-loading__example demo-loading__example--with-bg">
    <zan-loading class="some-customized-class" :color="'white'"></zan-loading>
  </div>
  <h2 class="demo-sub-title">单色spinner</h2>
  <div class="demo-loading__example">
    <zan-loading class="some-customized-class" :type="'circle'" :color="'white'"></zan-loading>
  </div>
  <h2 class="demo-sub-title">单色spinner</h2>
  <div class="demo-loading__example">
    <zan-loading class="some-customized-class" :type="'circle'" :color="'black'"></zan-loading>
  </div>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| color | `loading`颜色 | `string`  | `black`          | `black`, `white`   |
| type | `loading`类型 | `string`  | `gradient-circle`          | `gradient-circle`, `circle`   |
