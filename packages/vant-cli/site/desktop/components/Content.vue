<template>
  <div
    :class="['van-doc-content', `van-doc-content--${currentPage}`]"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VanDocContent',

  computed: {
    currentPage() {
      const { path } = this.$route;
      if (path) {
        return path.split('/').slice(-1)[0];
      }
      return this.$route.name;
    },
  },

  methods: {
    onClick({ target }) {
      if (['H2', 'H3', 'H4', 'H5'].includes(target.tagName)) {
        this.scrollToAnchor(target);
      }
    },

    scrollToAnchor(target) {
      if (target.id) {
        this.$router.push({
          name: this.$route.name,
          hash: '#' + target.id,
        });
      }
    },
  },
};
</script>

<style lang="less">
@import '../../common/style/var';

.van-doc-card {
  margin-bottom: 24px;
  padding: 24px;
  background-color: #fff;
  border-radius: @van-doc-border-radius;
  box-shadow: 0 8px 12px #ebedf0;

  > p a,
  > ul a,
  > table a,
  > blockquote a {
    margin: 0 1px;
    color: @van-doc-blue;
    -webkit-font-smoothing: auto;

    &:hover {
      color: darken(@van-doc-blue, 10%);
    }

    &:active {
      color: darken(@van-doc-blue, 20%);
    }
  }

  > h3,
  > h4,
  > h5,
  > h6 {
    color: @van-doc-black;
    font-weight: normal;
    line-height: 1.5;

    &[id] {
      cursor: pointer;
    }
  }

  > h3 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 19px;
  }

  > h4 {
    margin: 24px 0 12px;
    font-weight: 600;
    font-size: 16px;
  }

  > h5 {
    margin: 24px 0 12px;
    font-weight: 600;
    font-size: 15px;
  }

  > p,
  > blockquote p {
    color: @van-doc-text-color;
    font-size: 15px;
    line-height: 26px;

    strong {
      color: black;
    }
  }

  > table {
    width: 100%;
    margin-top: 12px;
    color: @van-doc-text-color;
    font-size: 14px;
    line-height: 1.5;
    border-collapse: collapse;

    th {
      padding: 8px 10px;
      font-weight: 600;
      text-align: left;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    td {
      padding: 8px;
      border-top: 1px solid @van-doc-code-background-color;

      &:first-child {
        padding-left: 0;

        // version tag
        code {
          margin: 0;
          padding: 2px 6px;
          color: @van-doc-blue;
          font-weight: 600;
          font-size: 11px;
          background-color: fade(@van-doc-blue, 10%);
          border-radius: 20px;
        }
      }

      &:last-child {
        padding-right: 0;
      }
    }

    em {
      display: inline-block;
      color: @van-doc-green;
      font-size: 14px;
      font-family: @van-doc-code-font-family;
      font-style: normal;
      max-width: 300px;
      -webkit-font-smoothing: auto;
    }
  }

  > ul li,
  > ol li {
    position: relative;
    margin: 5px 0 5px 10px;
    padding-left: 15px;
    color: @van-doc-text-color;
    font-size: 15px;
    line-height: 26px;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 6px;
      height: 6px;
      margin-top: 10px;
      border: 1px solid @van-doc-dark-grey;
      border-radius: 50%;
      content: '';
    }
  }

  > hr {
    margin: 30px 0;
    border: 0 none;
    border-top: 1px solid #eee;
  }

  > p code,
  > ul code,
  > ol code,
  > table code {
    display: inline;
    margin: 0 2px;
    padding: 2px 5px;
    font-size: 14px;
    font-family: inherit;
    font-weight: 600;
    word-break: keep-all;
    background-color: @van-doc-background-color;
    border-radius: 4px;
    -webkit-font-smoothing: antialiased;
  }

  > blockquote {
    margin: 16px 0 0;
    padding: 16px;
    background-color: #ecf9ff;
    border-radius: @van-doc-border-radius;
  }

  > img,
  > p img {
    width: 100%;
    margin: 16px 0;
    border-radius: @van-doc-border-radius;
  }
}

.van-doc-content {
  position: relative;
  flex: 1;
  padding: 0 0 75px;

  .van-doc-markdown-body {
    padding: 24px;
    overflow: hidden;

    h1,
    h2 {
      color: @van-doc-black;
      font-weight: normal;
      line-height: 1.5;

      &[id] {
        cursor: pointer;
      }
    }

    h1 {
      margin: 0 0 30px;
      font-size: 30px;
      cursor: default;
    }

    h2 {
      margin: 45px 0 20px;
      font-size: 25px;
    }
  }

  &--changelog {
    strong {
      display: block;
      margin: 24px 0 12px;
      font-weight: 600;
      font-size: 15px;
    }

    h3 {
      + p code {
        margin: 0;
      }

      a {
        color: inherit;
        font-size: 20px;
      }
    }
  }
}
</style>
