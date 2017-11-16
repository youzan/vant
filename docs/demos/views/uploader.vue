<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="demo-uploader-container">
        <van-uploader :after-read="logContent">
          <van-icon name="photograph" />
        </van-uploader>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    logContent(file) {
      console.log(file);
    }
  }
};
</script>


<style lang="postcss">
.demo-uploader {
  &-container {
    padding: 10px 20px;
    font-size: 20px;
  }
}
</style>
