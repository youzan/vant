### 基本用法

``` html
<van-dialog safe-area-inset-bottom><div vusion-slot-name="default" style="min-height: 200px;width: 100%;">内容</div>
        <template #footer>
          <van-row style="width: 100%">
            <van-col span="12" style="text-align: center;"><van-button style="border: none" text="取消"></van-button></van-col>
            <van-col span="12" style="text-align: center;"><van-button style="border: none" text="确认"></van-button></van-col>
          </van-row>
        </template></van-dialog>
```
