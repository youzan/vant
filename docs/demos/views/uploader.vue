<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="demo-uploader-container">
        <van-uploader :after-read="logContent">
          <van-icon name="photograph" />
        </van-uploader>
      </div>
    </demo-block>

    <demo-block :title="$t('title2')">
      <div class="demo-uploader-container">
        <van-uploader :after-read="logContent" accept="image/gif, image/jpeg">
          <van-icon name="photograph" />
        </van-uploader>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '设置 input 属性'
    },
    'en-US': {
      title2: 'Set input attr'
    }
  },

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
