### 基本样式

``` html
<van-cardu>
  <template #head>
    <van-text text="标题"></van-text>
  </template>
  卡片内容
</van-cardu>
```

### 带分割线样式

``` html
<van-cardu split>
  <template #head>
    <van-text text="标题"></van-text>
  </template>
  卡片内容
</van-cardu>
```

### 带图片样式

``` html
<van-cardu title="卡片" cover-slot>
  <template #cover>
    <van-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg"></van-image>
  </template>卡片内容
</van-cardu>
```
