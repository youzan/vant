### 基本用法

``` html
<van-cell-group>
  <van-cell title="单元格" value="内容" is-link />
  <van-cell title="单元格" value="内容" is-link label="描述信息" />
</van-cell-group>
```

### 卡片风格

``` html
<van-cell-group inset>
  <van-cell title="单元格" value="内容" is-link />
  <van-cell title="单元格" value="内容" label="描述信息" is-link />
</van-cell-group>
```

### 自定义右侧内容

``` html
<van-cell value="内容" is-link center>
  <!-- 使用 title 插槽来自定义标题 -->
  <van-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg"></van-image>
</van-cell>
```
