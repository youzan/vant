<style>
  @component-namespace demo {
    @b progress {
      @e wrapper {
        padding: 5px;
        margin: 20px 10px;
      }
    }
  } 
</style>


## Progress 进度条

### 基础用法

:::demo 基础用法
```html
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" :percentage="0"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo2" :percentage="46"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" :percentage="100"></zan-progress>
</div>
```
:::


### Inactive
:::demo Inactive
```html
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" :inactive="true" :percentage="0"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo2" :inactive="true" :percentage="46"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" :inactive="true" :percentage="100"></zan-progress>
</div>
```
:::


### 自定义颜色和文字
:::demo 自定义颜色
```html
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" pivot-text="红色" color="#ed5050" :percentage="26"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" pivot-text="橙色" color="#f60" :percentage="46"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" pivot-text="黄色" color="#f09000" :percentage="66"></zan-progress>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| inactive | 是否只会 | `boolean`  | `false`          | `true`, `false`    |
| percentage | 进度百分比 | `number`  | `false`          | `0-100`    |
| pivotText | 文字显示 | `string`  | 百分比文字          | -   |
| color | 进度条颜色 | `string`  | `#38f`    | hexvalue   |
| textColor | 进度条文字颜色 | `string`  | `#fff`    | hexvalue   |

