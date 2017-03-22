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
## Uploader 组件

### 基础用法

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
### 自定义上传图标
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
