### 基本用法

``` html
<van-swipe-cell>
  <template #left>
    <van-button squareroud="square" type="primary" text="选择" />
  </template>
  <van-cell center>
    <template #title>
      左侧文本
    </template>
    <template>
      右侧文本
    </template>
  </van-cell>
  <template #right>
    <van-button squareroud="square" type="danger" text="删除" />
    <van-button squareroud="square" type="primary" text="收藏" />
  </template>
</van-swipe-cell>
```
