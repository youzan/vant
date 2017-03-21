<template>
  <div class="mobile-nav-group">
    <div
      class="mobile-nav-group__title"
      :class="{
        'mobile-nav-group__title--open': isOpen
      }"
      @click="isOpen = !isOpen">
      {{group.groupName}}
    </div>
    <ul class="pure-menu-list" v-show="isOpen">
      <template v-for="navItem in group.list">
        <li
          class="mobile-nav-group__title"
          v-if="!navItem.disabled">
          <router-link
            active-class="active"
            :to="base + navItem.path"
            v-text="navItem.title">
          </router-link>
          <zan-icon name="arrow"></zan-icon>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      default: () => {
        return [];
      }
    },
    base: String
  },

  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style>
@component-namespace mobile {
  @b nav-group {
    border-radius: 2px;
    margin-bottom: 15px;
    padding-left: 20px;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10);

    @e title {
      font-size: 16px;
      color: #333;
      line-height: 56px;
      position: relative;

      @m open {
        color: #999;
      }

      a {
        color: #333;
        display: block;
        border-top: 1px solid #e5e5e5;
      }

      .zan-icon-arrow {
        position: absolute;
        font-size: 12px;
        line-height: 1;
        top: 24px;
        right: 20px;
      }
    }

    li {
      list-style: none;
    }

    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
  }
}

</style>
