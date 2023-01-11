### 基本用法

```html
<van-swipe-cell :leftforhelper="false" :rightforhelper="false">
  <template #left>
    <van-button
      style="height:100%;width:72px;"
      squareroud="square"
      type="primary"
      text="选择"
      size="middle"
    />
  </template>
  <van-cell center>
    <template #title> 左侧文本 </template>
    <template> 右侧文本 </template>
  </van-cell>
  <template #right>
    <van-button
      style="height:100%;width:72px;"
      squareroud="square"
      type="danger"
      text="删除"
      size="middle"
    />
  </template>
</van-swipe-cell>
```
