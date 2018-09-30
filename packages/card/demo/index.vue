<template>
  <demo-section background="#fff">
    <demo-block :title="$t('basicUsage')">
      <van-card
        num="2"
        price="2.00"
        :desc="$t('desc')"
        :title="$t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-card
        num="2"
        price="2.00"
        :tag="$t('tag')"
        :desc="$t('desc')"
        :title="$t('title')"
        :thumb="imageURL"
      >
        <div slot="footer">
          <van-button size="mini">{{ $t('button') }}</van-button>
          <van-button size="mini">{{ $t('button') }}</van-button>
        </div>
      </van-card>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '商品标题'
    }
  },

  data() {
    return {
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    };
  }
};
</script>
