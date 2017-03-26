<template><section class="demo-cell"><h1 class="demo-title">cell</h1><example-block title="基础用法">
                <zan-cell-group>
  <zan-cell title="单元格1" value="单元格1内容"></zan-cell>
  <zan-cell title="单元格2" value="单元格2内容"></zan-cell>
</zan-cell-group>

              </example-block><example-block title="带*号，标明必填">
                <zan-cell-group>
  <zan-cell title="单元格1" required></zan-cell>
</zan-cell-group>

              </example-block><example-block title="标题带描述信息">
                <zan-cell-group>
  <zan-cell title="单元格1" label="描述信息" is-link="" url="javascript:void(0)" @click="handleClick"></zan-cell>
  <zan-cell title="单元格2" label="描述信息"></zan-cell>
</zan-cell-group>

              </example-block><example-block title="带图标">
                <zan-cell-group>
  <zan-cell title="起码运动馆" icon="home"></zan-cell>
  <zan-cell title="线下门店" icon="location"></zan-cell>
</zan-cell-group>

              </example-block><example-block title="可点击的链接">
                <zan-cell-group>
  <zan-cell title="起码运动馆" value="进入店铺" icon="home" url="http://youzan.com" is-link=""></zan-cell>
  <zan-cell title="线下门店" icon="location" url="http://youzan.com" is-link=""></zan-cell>
</zan-cell-group>

              </example-block><example-block title="高级用法">
                <zan-cell-group>
  <zan-cell value="进入店铺" icon="home" url="http://youzan.com" is-link="">
    <template slot="title">
      <span class="zan-cell-text">起码运动馆</span>
      <img src="//su.yzcdn.cn/v2/image/account/icon_guan_160421.png" class="official-img">
    </template>
  </zan-cell>
  <zan-cell title="线下门店" icon="location" url="http://youzan.com" is-link=""></zan-cell>
</zan-cell-group>

              </example-block></section></template>
<style>
.official-img {
  width: 31px;
  vertical-align: middle;
  border: 0;
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>