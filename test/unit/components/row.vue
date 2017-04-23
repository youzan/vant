<template>
  <van-row gutter="10">
    <van-col span="8">
      <div class="gray">span: 8</div>
    </van-col>
    <van-col span="8">
      <div class="gray">span: 8</div>
    </van-col>
    <van-col span="8">
      <div class="gray">span: 8</div>
    </van-col>
  </van-row>
</template>

<script>
import Row from 'packages/row';
import Col from 'packages/col';

export default {
  components: {
    'van-row': Row,
    'van-col': Col
  }
};
</script>
