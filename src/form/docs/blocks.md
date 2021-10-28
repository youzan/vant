### 基础用法

``` html
<van-form>
  <van-field required label="名称" drole="other">
    <template #input>
      <van-fieldinput  placeholder="请输入" clearable></van-fieldinput>
    </template>
  </van-field>
  <van-field name="radio" label="单选框" drole="other">
    <template #input>
      <van-radio-group direction="horizontal">
        <van-radio name="1" title="单选框 1"></van-radio>
        <van-radio name="2" title="单选框 2"></van-radio>
      </van-radio-group>
    </template>
  </van-field>
  <div style="margin: 16px 16px 0">
    <van-button round block type="info" native-type="submit" text="提交">
    </van-button>
  </div>
</van-form>
```
