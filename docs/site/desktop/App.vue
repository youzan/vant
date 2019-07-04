<template>
  <div class="app">
    <van-doc
      :base="base"
      :config="config"
      :lang="$vantLang"
      :github="github"
      :versions="versions"
      :simulators="simulators"
      :search-config="searchConfig"
      :current-simulator="currentSimulator"
      @switch-version="onSwitchVersion"
    >
      <router-view @changeDemoURL="onChangeDemoURL" />
    </van-doc>
  </div>
</template>

<script>
import pkgJson from '../../../package.json';
import docConfig, { github, versions, searchConfig } from '../doc.config';

export default {
  data() {
    this.github = github;
    this.versions = versions;
    this.searchConfig = searchConfig;

    return {
      simulators: [`mobile.html${location.hash}`],
      demoURL: ''
    };
  },

  computed: {
    base() {
      return `/${this.$vantLang}`;
    },

    config() {
      return docConfig[this.$vantLang];
    },

    currentSimulator() {
      const { name } = this.$route;
      return name && name.indexOf('demo') !== -1 ? 1 : 0;
    }
  },

  mounted() {
    this.showVersionTip();
  },

  methods: {
    showVersionTip() {
      const tip = window.localStorage.getItem('vantVersionTip');

      if (!tip && this.$vantLang === 'zh-CN') {
        const version = document.querySelector('.van-doc-header__version');
        version.insertAdjacentHTML('beforeend', `
          <div class="doc-version-tip">
            提示：你当前访问的是 Vant 2.0 版本文档，点此切换至旧版文档
            <div style="text-align: right;">
              <button class="doc-version-tip__button">好哒</button>
            </div>
          </div>
        `);

        const tip = document.querySelector('.doc-version-tip');
        const removeTip = event => {
          event.stopPropagation();
          tip.parentNode.removeChild(tip);
        };

        tip.addEventListener('click', removeTip);
        version.addEventListener('click', removeTip);

        window.localStorage.setItem('vantVersionTip', 1);
      }
    },

    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    },

    onSwitchVersion(version) {
      if (version !== pkgJson.version) {
        location.href = `https://youzan.github.io/vant/${version}`;
      }
    }
  }
};
</script>

<style lang="less">
.van-doc-intro {
  padding-top: 20px;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}

.doc-version-tip {
  position: absolute;
  top: 35px;
  left: 50%;
  z-index: 100;
  box-sizing: border-box;
  width: 300px;
  margin-left: -150px;
  padding: 15px;
  color: #333;
  text-align: left;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 12px #ebedf0;
  transform-origin: top;
  cursor: default;
  animation: version-tip .25s cubic-bezier(0.175, 0.885, 0.32, 1.375);

  &::before {
    position: absolute;
    top: -4px;
    left: 50%;
    margin-left: -3px;
    border: 6px solid;
    border-color: transparent transparent white white;
    transform: rotate(135deg);
    content: '';
  }

  &__button {
    width: 60px;
    color: #fff;
    font-size: 12px;
    line-height: 24px;
    background: #1889f9;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background: darken(#1889f9, 10%);
    }

    &:focus {
      outline: none;
    }
  }

  @keyframes version-tip {
    from {
      transform: scaleY(0);
      opacity: 0;
    }

    to {
      transform: scaleY(1);
      opacity: 1;
    }
  }
}
</style>
