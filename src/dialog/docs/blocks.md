### 基本用法

``` html
<van-dialog safe-area-inset-bottom>
  <div vusion-slot-name="default" vusion-disabled-copy style="min-height: 100px;" :vusion-disabled-cut="true" env="alone">内容</div>
  <template #footer>
    <van-button
      :vusion-disabled-cut="true"
      size="large"
      class="van-button van-button--default van-button--large van-dialog__cancel"
      text="取消"
    ></van-button>
    <van-button
      :vusion-disabled-cut="true"
      size="large"
      class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left"
      text="确认"
    ></van-button>
  </template>
</van-dialog>
```
