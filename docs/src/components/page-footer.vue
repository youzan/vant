<template>
  <div class="page-footer">
    <ul class="page-footer__navs">
      <li class="page-footer__item">
        <a href="https://www.youzan.com/" class="page-footer__link" target="_blank">有赞官网</a>
      </li>
      <li class="page-footer__item">
        <a href="https://www.youzanyun.com/" class="page-footer__link" target="_blank">有赞云</a>
      </li>
      <li class="page-footer__item">
        <a href="https://job.youzan.com/" class="page-footer__link" target="_blank">加入我们</a>
      </li>
    </ul>
    <p class="page-footer__copyright">
      2012-{{ curYear }} © youzanyun.com -  浙公网安备 33010602004354号 增值电信业务经营许可证：浙B2-20140331 - 浙ICP备13037466号
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curYear: (new Date()).getFullYear()
    };
  }
};
</script>

<style>
@component-namespace page {
  @b footer {
    height: 72px;
    margin-top: 40px;
    background-color: #34383B;
    display: flex;
    justify-content: center;

    @e item {
      float: left;
      margin: 0 20px;
    }

    @e link {
      display: block;
      color: #E5E5E5;
      font-size: 12px;
      line-height: 72px;
    }

    @e copyright {
      color: #999;
      font-size: 12px;
      line-height: 72px;
      margin-left: 50px;
    }
  }
}
</style>
