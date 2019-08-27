<template>
  <div :class="['van-doc-content', `van-doc-content--${currentPage}`]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'van-doc-content',

  computed: {
    currentPage() {
      const { path } = this.$route;
      if (path) {
        return path.split('/').slice(-1)[0];
      }
      return this.$route.name;
    }
  }
};
</script>

<style lang="less">
@import '../style/variable';

.van-doc-content {
  position: relative;
  flex: 1;
  padding: 0 0 75px;

  .card {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 8px 12px #ebedf0;
  }

  a {
    color: @van-doc-blue;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
    font-size: 22px;
  }

  h3 {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 17px;
  }

  h4 {
    margin: 24px 0 12px;
    font-weight: 500;
    font-size: 15px;
  }

  h5 {
    margin: 24px 0 12px;
    font-weight: 500;
    font-size: 14px;
  }

  p {
    color: @van-doc-text-color;
    font-size: 14px;
    line-height: 26px;
  }

  table {
    width: 100%;
    margin-top: 12px;
    color: @van-doc-text-color;
    font-size: 13px;
    line-height: 1.5;
    border-radius: 6px;
    border-collapse: collapse;

    th {
      padding: 8px 10px;
      font-weight: 500;
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
      }

      &:last-child {
        padding-right: 0;
      }
    }

    code {
      padding: 0 8px;
      font-size: 13px;
      font-family: inherit;
      word-break: keep-all;
    }

    em {
      color: @van-doc-fuchsia;
      font-size: 12px;
      font-family: @van-doc-code-font-family;
      font-style: normal;
    }
  }

  ul li,
  ol li {
    position: relative;
    margin: 5px 0 5px 10px;
    padding-left: 15px;
    color: @van-doc-text-color;
    font-size: 14px;
    line-height: 22px;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 6px;
      height: 6px;
      margin-top: 8px;
      border: 1px solid @van-doc-dark-grey;
      border-radius: 50%;
      content: '';
    }
  }

  hr {
    margin: 30px 0;
    border: 0 none;
    border-top: 1px solid #eee;
  }

  p > code,
  li > code,
  table code {
    display: inline;
    margin: 2px 3px;
    padding: 2px 5px;
    background-color: #f0f2f5;
    box-shadow: none;
  }

  section {
    padding: 30px;
    overflow: hidden;
  }

  blockquote {
    margin: 20px 0 0;
    padding: 16px;
    color: rgba(52, 73, 94, .8);
    font-size: 14px;
    background-color: #ecf9ff;
    border-left: 5px solid #50bfff;
    border-radius: 4px;
  }

  img {
    width: 100%;
    margin: 15px 0;
    box-shadow: 0 2px 4px #ebedf0;
  }

  &--changelog {
    strong {
      display: block;
      margin: 12px 0;
      font-weight: 500;
      font-size: 15px;
    }

    h3 {
      font-size: 20px;

      + p code {
        margin: 0;
      }

      a {
        color: inherit;
      }
    }
  }
}
</style>
