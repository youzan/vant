### 基本用法

``` html
<van-dialog safe-area-inset-bottom>
  <div class="dialogchild" vusion-slot-name="default" vusion-disabled-copy style="min-height: 100px;" :vusion-disabled-cut="true" env="alone">内容</div>
  <template #footer>
    <van-linear-layout type="flex" style="width: 100%;" :vusion-disabled-cut="true">
      <van-button
      class="van-button van-button--default van-dialog__cancel"
      text="取消"
    ></van-button>
    <van-button
      class="van-button van-button--default van-dialog__confirm van-hairline--left"
      text="确认"
    ></van-button>
    </van-linear-layout>
  </template>
</van-dialog>
```
