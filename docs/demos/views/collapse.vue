<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-collapse v-model="active">
        <van-collapse-item title="第一项" name="1">文本内容</van-collapse-item>
        <van-collapse-item title="第二项" name="2">文本内容</van-collapse-item>
      </van-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {

  },

  data() {
    return {
      active: []
    };
  }
};
</script>
