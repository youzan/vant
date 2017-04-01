<style>
.uploader-container {
  padding: 5px 15px;
}
</style>
<script>
export default {
  methods: {
    logContent(file) {
      console.log(file)
    }
  }
};  
</script>

## Uploader 图片上传

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Uploader`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Uploader`组件了：

```js
import Vue from 'vue';
import { Uploader } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/uploader.css';

Vue.component(Uploader.name, Uploader);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Uploader`组件，这样只能在你注册的组件中使用`Uploader`：

```js
import { Uploader } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-uploader': Uploader
  }
};
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<div class="uploader-container">
    <zan-uploader 
        :before-read="logContent"
        @file-readed="logContent">
    </zan-uploader>
</div>
```
:::

#### 自定义上传图标

:::demo 自定义上传图标
```html
<div class="uploader-container">
  <zan-uploader @file-readed="logContent">
    <zan-icon name="photograph"></zan-icon>
  </zan-uploader>
</div>
```
:::


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| result-type | 读取文件的方式，以base64的方式读取；以文本的方式读取 | `string`  | `dataUrl`          | `dataUrl`, `text`         |
| disable | 是否禁用上传,在图片上传期间设置为true，禁止用户点击此组件上传图片 | `boolean`  | `false`          |           |
| before-read | 读文件之前的钩子，参数为选择的文件，若返回 false 则停止读取文件。 | `Function`  |           |  |
| file-readed | 文件读完之后出发此事件，参数为{name:'文件名',type:'文件类型',size:'文件大小',content:'读的内容'} | `Function`  |           |  |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义上传显示图标 |
