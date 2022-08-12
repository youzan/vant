### 基础用法

``` html
<van-popover-combination placement="bottom" :value.sync="false">
  <template #reference>
         <van-button type="primary" text="触发弹出框组件，可删除替换"></van-button>
  </template>
  <van-popover-combination-item text="标签名称1"></van-popover-combination-item>
  <van-popover-combination-item text="标签名称2"></van-popover-combination-item>
  <van-popover-combination-item text="标签名称3"></van-popover-combination-item>
</van-popover-combination>
```
