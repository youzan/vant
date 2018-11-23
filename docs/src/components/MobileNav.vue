<template>
  <van-collapse
    v-model="active"
    class="mobile-nav"
  >
    <van-collapse-item
      class="mobile-nav__item"
      :title="group.groupName"
      :name="group.groupName"
    >
      <van-cell
        v-if="!navItem.disabled"
        v-for="(navItem, index) in group.list"
        :key="index"
        :to="'/' + base + navItem.path"
        :title="navItem.title"
        is-link
      />
    </van-collapse-item>
  </van-collapse>
</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },

  data() {
    return {
      active: []
    };
  }
};
</script>

<style lang="less">
.mobile-nav {
  &__item {
    margin-bottom: 20px;
  }

  &::after {
    display: none;
  }

  .van-collapse-item__content {
    padding: 0;
  }

  .van-collapse-item__title {
    font-size: 16px;
    line-height: 36px;
    align-items: center;
  }
}
</style>
