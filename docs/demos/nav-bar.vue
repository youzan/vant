<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-nav-bar
        :title="$t('title')"
        :leftText="$t('back')"
        :rightText="$t('button')"
        leftArrow
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-nav-bar :title="$t('title')" :leftText="$t('back')" leftArrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </demo-block>
  </demo-section>
</template>
