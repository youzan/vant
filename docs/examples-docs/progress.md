<style>
.demo-progress {
  &__wrapper {
    padding: 5px;
    margin: 20px 10px;
  }
} 
</style>


## Progress 进度条

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Progress`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Progress`组件了：

```js
import Vue from 'vue';
import { Progress } from 'vant';
import 'vant/lib/vant-css/progress.css';

Vue.component(Progress.name, Progress);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Progress`组件，这样只能在你注册的组件中使用`Progress`：

```js
import { Progress } from 'vant';
import 'vant/lib/vant-css/progress.css';

export default {
  components: {
    'van-progress': Progress
  }
};
```

### 代码演示

#### 基础用法

默认情况进度条为蓝色，使用`percentage`属性来设置当前进度。

:::demo 基础用法
```html
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo1" :percentage="0"></van-progress>
</div>
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo2" :percentage="46"></van-progress>
</div>
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo1" :percentage="100"></van-progress>
</div>
```
:::


#### Inactive

是否置灰进度条，一般用于进度条被取消时。

:::demo Inactive
```html
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo1" inactive :percentage="0"></van-progress>
</div>
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo2" inactive :percentage="46"></van-progress>
</div>
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo1" inactive :percentage="100"></van-progress>
</div>
```
:::


#### 自定义颜色和文字

可以使用`pivot-text`属性自定义文字，`color`属性自定义进度条颜色

:::demo 自定义颜色和文字
```html
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo1" pivot-text="红色" color="#ed5050" :percentage="26"></van-progress>
</div>
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo1" pivot-text="橙色" color="#f60" :percentage="46"></van-progress>
</div>
<div class="demo-progress__wrapper">
  <van-progress class="demo-progress__demo1" pivot-text="黄色" color="#f09000" :percentage="66"></van-progress>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| inactive | 是否置灰 | `boolean`  | `false`          | `true`, `false`    |
| percentage | 进度百分比 | `number`  | `false`          | `0-100`    |
| pivotText | 文字显示 | `string`  | 百分比文字          | -   |
| color | 进度条颜色 | `string`  | `#38f`    | hexvalue   |
| textColor | 进度条文字颜色 | `string`  | `#fff`    | hexvalue   |

