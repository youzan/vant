### 基础用法
<van-form>
  <van-field required :placeholder="请输入" label="名称">
  </van-field>
  <van-field name="radio" label="单选框">
    <template #input>
      <van-radio-group v-model="radio" direction="horizontal">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </template>
  </van-field>
</van-form>
