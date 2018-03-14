<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        :right-text="$t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-nav-bar :title="$t('title')" :left-text="$t('back')" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      Toast(this.$t('back'));
    },
    onClickRight() {
      Toast(this.$t('button'));
    }
  }
};
</script>
