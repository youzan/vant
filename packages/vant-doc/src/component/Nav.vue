<template>
  <div class="van-doc-nav" :style="style">
    <div v-for="(item, index) in navConfig" class="van-doc-nav__item" :key="index">
      <van-doc-nav-link :item="item" :base="base" />
      <div v-if="item.children">
        <div
          class="nav-item van-doc-nav__group-title van-doc-nav__group-title"
          v-for="(navItem, navIndex) in item.children"
          :key="navIndex"
        >
          <van-doc-nav-link :item="navItem" :base="base" />
        </div>
      </div>
      <template v-if="item.groups">
        <div v-for="(group, groupIndex) in item.groups" :key="groupIndex">
          <div class="van-doc-nav__group-title">{{ group.groupName }}</div>
          <div>
            <template v-for="(navItem, navItemIndex) in group.list">
              <div v-if="!navItem.disabled" :key="navItemIndex" class="van-doc-nav__subitem">
                <van-doc-nav-link :item="navItem" :base="base" />
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: 'van-doc-nav',

  components: {
    [NavLink.name]: NavLink
  },

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      top: 60,
      bottom: 0
    };
  },

  computed: {
    style() {
      return {
        top: this.top + 'px',
        bottom: this.bottom + 'px'
      };
    }
  },

  created() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 60 - offset);
    }
  }
};
</script>

<style lang="less">
@import '../style/variable';

.van-doc-nav {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 1;
  min-width: @van-doc-nav-width;
  max-width: @van-doc-nav-width;
  padding: 25px 0 75px;
  overflow-y: scroll;
  background-color: #fff;
  border-right: 1px solid @van-doc-border-color;
  box-shadow: 0 8px 12px #ebedf0;

  @media (min-width: @van-doc-row-max-width) {
    left: 50%;
    margin-left: -(@van-doc-row-max-width / 2);
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }

  &__item,
  &__subitem {
    a {
      display: block;
      margin: 0;
      padding: 10px 0 10px @van-doc-padding;
      color: #455a64;
      font-size: 16px;
      line-height: 24px;
      transition: all 0.3s;

      &.active {
        color: #000;
        font-weight: 500;
        font-size: 15px;
      }
    }
  }

  &__item {
    > a {
      font-weight: 500;
    }
  }

  &__subitem {
    a {
      font-size: 14px;

      &:hover {
        color: #000;
      }
    }

    span {
      font-size: 13px;
    }
  }

  &__group-title {
    padding-left: @van-doc-padding;
    color: @van-doc-text-light-blue;
    font-size: 12px;
    line-height: 40px;
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;

    &__item,
    &__subitem {
      a {
        line-height: 22px;
      }
    }

    &__subitem {
      a {
        font-size: 13px;
      }

      &:active {
        font-size: 14px;
      }
    }
  }
}
</style>
