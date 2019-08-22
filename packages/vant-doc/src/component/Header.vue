<template>
  <div class="van-doc-header">
    <div class="van-doc-row">
      <div class="van-doc-header__top">
        <a class="van-doc-header__logo" :href="config.logo.href">
          <img :src="config.logo.image">
          <span>{{ config.logo.title }}</span>
        </a>

        <search-input v-if="searchConfig" :lang="lang" :search-config="searchConfig" />

        <ul class="van-doc-header__top-nav">
          <li v-for="item in config.nav.logoLink" class="van-doc-header__top-nav-item">
            <a class="van-doc-header__logo-link" target="_blank" :href="item.url">
              <img :src="item.image">
            </a>
          </li>

          <li ref="version" v-if="versions" class="van-doc-header__top-nav-item">
            <span class="van-doc-header__cube van-doc-header__version" @click="toggleVersionPop">
              {{ versions[0] }}
              <transition name="van-doc-dropdown">
                <div v-if="showVersionPop" class="van-doc-header__version-pop">
                  <div
                    v-for="item in versions"
                    class="van-doc-header__version-pop-item"
                    @click="onSwitchVersion(item)"
                  >{{ item }}</div>
                </div>
              </transition>
            </span>
          </li>

          <li v-if="config.nav.lang" class="van-doc-header__top-nav-item">
            <a class="van-doc-header__cube" :href="langLink">{{ config.nav.lang.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from './SearchInput';

export default {
  name: 'van-doc-header',

  components: {
    SearchInput
  },

  props: {
    lang: String,
    config: Object,
    github: String,
    versions: Array,
    searchConfig: Object
  },

  data() {
    return {
      showVersionPop: false
    };
  },

  computed: {
    langLink() {
      const { lang } = this.config.nav;
      return `#${this.$route.path.replace(lang.from, lang.to)}`;
    }
  },

  methods: {
    toggleVersionPop() {
      const val = !this.showVersionPop;

      const action = val ? 'add' : 'remove';
      document.body[`${action}EventListener`]('click', this.checkHideVersionPop);

      this.showVersionPop = val;
    },

    checkHideVersionPop(event) {
      if (!this.$refs.version.contains(event.target)) {
        this.showVersionPop = false;
      }
    },

    onSwitchLang(lang) {
      this.$router.push(this.$route.path.replace(lang.from, lang.to));
    },

    onSwitchVersion(version) {
      this.$emit('switch-version', version);
    }
  }
};
</script>

<style lang="less">
@import '../style/variable';

.van-doc-header {
  width: 100%;
  box-shadow: 0 4px 12px #ebedf0;
  user-select: none;

  &__top {
    display: flex;
    align-items: center;
    height: @van-doc-header-top-height;
    padding: 0 @van-doc-padding;
    line-height: @van-doc-header-top-height;
    background-color: #001938;

    &-nav {
      flex: 1;
      font-size: 0;
      text-align: right;

      > li {
        position: relative;
        display: inline-block;
        vertical-align: middle;
      }

      &-item {
        margin-left: 20px;
      }

      &-title {
        display: block;
        font-size: 15px;
      }
    }
  }

  &__cube {
    position: relative;
    display: block;
    padding: 0 10px;
    color: #fff;
    font-size: 14px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 24px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  &__version {
    padding-right: 20px;

    &::after {
      position: absolute;
      top: 7px;
      right: 7px;
      width: 5px;
      height: 5px;
      color: rgba(255, 255, 255, 0.9);
      border: 1px solid;
      border-color: transparent transparent currentColor currentColor;
      transform: rotate(-45deg);
      content: '';
    }

    &-pop {
      position: absolute;
      top: 30px;
      right: 0;
      left: 0;
      z-index: 99;
      color: #333;
      line-height: 36px;
      text-align: left;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 4px 12px #ebedf0;
      transform-origin: top;
      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

      &-item {
        padding-left: 7px;
        transition: 0.2s;

        &:hover {
          color: @van-doc-blue;
        }
      }
    }
  }

  &__logo {
    display: block;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 26px;
      margin-right: 10px;
    }

    span {
      color: #fff;
      font-size: 22px;
    }
  }

  &__logo-link {
    img {
      display: block;
      width: 26px;
      height: 26px;
      transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.van-doc-dropdown {
  &-enter,
  &-leave-active {
    transform: scaleY(0);
    opacity: 0;
  }
}
</style>
