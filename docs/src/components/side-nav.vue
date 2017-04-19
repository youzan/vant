<template>
  <div class="side-nav">
    <ul>
      <li class="nav-item" v-for="item in data">
        <a href="javascript:void(0)" v-if="!item.path" @click="handleTitleClick(item)">{{item.name}}</a>
        <router-link
          v-else
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
        <ul class="pure-menu-list sub-nav" v-if="item.children">
          <li class="nav-item" v-for="navItem in item.children">
            <router-link
              active-class="active"
              :to="base + navItem.path"
              v-text="navItem.title || navItem.name">
            </router-link>
          </li>
        </ul>
        <template v-if="item.groups">
          <div class="nav-group" v-for="group in item.groups">
            <div class="nav-group__title">{{group.groupName}}</div>
            <ul class="pure-menu-list">
              <template v-for="navItem in group.list">
                <li
                  class="nav-item"
                  v-if="!navItem.disabled">
                  <router-link
                    active-class="active"
                    :to="base + navItem.path"
                    v-text="navItem.title">
                  </router-link>
                </li>
              </template>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    base: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleTitleClick(item) {
      const firstGroup = item.groups && item.groups[0];
      if (firstGroup && firstGroup.list && firstGroup.list.length !== 0) {
        return this.$router.replace(this.base + firstGroup.list[0].path);
      }
    }
  }
};
</script>

<style lang="css">
  .side-nav {
    flex: 0 0 250px;
    box-sizing: border-box;
    padding: 40px 0;
    border-right: 1px solid #e5e5e5;

    li {
      list-style: none;
    }
    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;
    }

    .nav-item {
      a {
        font-size: 16px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: all .3s;
        padding: 0 20px;

        &.active {
          color: #3388FF;
          background-color: #F2F2F2;
        }
      }
      .nav-item {
        a {
          display: block;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding-left: 44px;

          &:hover {
            color: #3388FF;
          }
        }
      }
    }
    .nav-group__title {
      font-size: 12px;
      color: #666;
      padding-left: 28px;
      line-height: 26px;
      margin-top: 10px;
    }
  }
</style>
