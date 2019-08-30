<template>
  <van-collapse
    v-model="active"
    :border="false"
    class="mobile-nav"
  >
    <van-collapse-item
      class="mobile-nav__item"
      :title="group.groupName"
      :name="group.groupName"
    >
      <van-icon
        :name="group.icon"
        slot="right-icon"
        class="mobile-nav__icon"
      />
      <template v-for="(navItem, index) in group.list">
        <van-cell
          v-if="!navItem.disabled"
          :key="index"
          :to="'/' + base + navItem.path"
          :title="navItem.title"
          is-link
        />
      </template>
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
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 1px 5px #ebedf0;
  }

  &__icon {
    font-size: 24px;

    img {
      width: 100%;
    }
  }

  .van-collapse-item__content {
    padding: 0;
  }

  .van-collapse-item__title {
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    border-radius: 2px;
  }
}
</style>
