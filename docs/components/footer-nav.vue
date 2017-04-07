<template>
  <div class="footer-nav">
    <a
      href="javascript:void(0)"
      v-if="leftNav"
      class="footer-nav__link footer-nav__left"
      @click="handleNavClick('prev')">
      <zan-icon name="arrow"></zan-icon>
      <span>{{ leftNav.title }}</span>
    </a>
    <a
      href="javascript:void(0)"
      v-if="rightNav"
      class="footer-nav__link footer-nav__right"
      @click="handleNavClick('next')">
      <zan-icon name="arrow"></zan-icon>
      <span>{{ rightNav.title }}</span>
    </a>
  </div>
</template>

<script>
import navConfig from '../nav.config.json';

export default {
  data() {
    return {
      currentPath: null,
      nav: [],
      leftNav: null,
      rightNav: null
    };
  },

  watch: {
    '$route.path'() {
      this.setNav();
      this.updateNav();
    }
  },

  methods: {
    setNav() {
      let nav = navConfig['zh-CN'];
      for (let i = 0; i < nav.length; i++) {
        let navItem = nav[i];
        if (!navItem.groups) {
          this.nav.push(nav[i]);
        } else {
          for (let j = 0; j < navItem.groups.length; j++) {
            this.nav = this.nav.concat(navItem.groups[j].list);
          }
        }
      }
    },

    updateNav() {
      let baseUrl = '/component';
      let currentIndex;

      this.currentPath = this.$route.path.slice(baseUrl.length);

      for (let i = 0, len = this.nav.length; i < len; i++) {
        if (this.nav[i].path === this.currentPath) {
          currentIndex = i;
          break;
        }
      }
      this.leftNav = this.nav[currentIndex - 1];
      this.rightNav = this.nav[currentIndex + 1];
    },

    handleNavClick(direction) {
      this.$router.push(`/component${ direction === 'prev' ? this.leftNav.path : this.rightNav.path }`);
    }
  },

  created() {
    this.setNav();
    this.updateNav();
  }
};
</script>

<style>
@component-namespace footer {
  @b nav {
    padding: 24px 40px;
    overflow: hidden;
    border-top: 1px solid #e5e5e5;

    @e link {
      color: #3388FF;
      overflow: hidden;
      position: relative;
      font-size: 20px;
      line-height: 1.5;

      .zan-icon {
        width: 20px;
        font-size: 12px;
        line-height: 20px;
        border: 2px solid #3388FF;
        border-radius: 50%;
        text-align: center;
        margin-top: 3px;
      }
    }

    @e left {
      float: left;

      .zan-icon {
        float: left;
        transform: rotate(180deg);
        margin-right: 10px;
      }
    }

    @e right {
      float: right;

      .zan-icon {
        float: right;
        margin-left: 10px;
      }
    }
  }
}
</style>
