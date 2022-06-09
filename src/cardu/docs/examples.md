### 基本样式

``` html
<van-cardu title="卡片">卡片内容</van-cardu>
```

### 带分割线样式

``` html
<van-cardu title="卡片" split>卡片内容</van-cardu>
```

### 带图片样式

``` html
<van-cardu title="卡片" style="width: 280px" cover-slot><template #cover>
        <van-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" fit="contain"></van-image>
</template>卡片内容</van-cardu>
```
