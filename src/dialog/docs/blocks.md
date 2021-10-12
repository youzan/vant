### 基本用法

``` html
<van-dialog safe-area-inset-bottom>
  <div vusion-slot-name="default" style="min-height: 100px;">内容</div>
  <template #footer>
    <van-button
      size="large"
      class="van-button van-button--default van-button--large van-dialog__cancel"
      text="取消"
    ></van-button>
    <van-button
      size="large"
      class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left"
      text="确认"
    ></van-button>
  </template>
</van-dialog>
```
