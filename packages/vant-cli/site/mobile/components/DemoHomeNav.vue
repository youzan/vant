<template>
  <van-collapse
    v-model="active"
    :border="false"
    class="demo-home-nav"
  >
    <van-collapse-item
      class="demo-home-nav__item"
      :title="group.title"
      :name="group.title"
    >
      <van-icon
        v-if="group.icon"
        :name="group.icon"
        slot="right-icon"
        class="demo-home-nav__icon"
      />
      <template v-for="(navItem, index) in group.items">
        <van-cell
          :key="index"
          :to="'/' + navItem.path"
          :title="navItem.title"
          is-link
        />
      </template>
    </van-collapse-item>
  </van-collapse>
</template>

<script>
import { Cell, Icon, Collapse, CollapseItem } from 'vant';

export default {
  components: {
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },

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
@import '../../common/style/index';

.demo-home-nav {
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
