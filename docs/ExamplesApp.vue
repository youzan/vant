<template>
  <div class="examples-container">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="zui-icon zui-icon-arrow"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    visible() {
      return ['/'].indexOf(this.$route.path) < 0;
    }
  }
};
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  a {
    color: #4078c0;
    text-decoration: none;
  }

  .examples-container {
    padding-bottom: 30px;
  }

  .page-back {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    color: #333;
    transform: rotate(180deg);

    i {
      font-size: 24px;
      line-height: 40px;
    }
  }

  .page-title {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;
  }

  .page-sub-title {
    font-size: 16px;
    padding: 10px 0;
  }
</style>
