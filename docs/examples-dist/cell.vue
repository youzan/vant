<template><section class="demo-cell"><h1 class="demo-title">Cell 单元格</h1><example-block title="基础用法">
                <van-cell-group>
  <van-cell title="单元格1" value="单元格1内容"></van-cell>
  <van-cell title="单元格2" value="单元格2内容"></van-cell>
</van-cell-group>

              </example-block><example-block title="只设置value">
                <van-cell-group>
  <van-cell value="单元格1内容"></van-cell>
  <van-cell value="单元格2内容"></van-cell>
</van-cell-group>

              </example-block><example-block title="标题带描述信息">
                <van-cell-group>
  <van-cell title="单元格1" label="描述信息" value="查看专栏" is-link="" url="javascript:void(0)" @click="handleClick"></van-cell>
  <van-cell title="单元格2" label="描述信息" value="查看专栏" is-link=""></van-cell>
</van-cell-group>

              </example-block><example-block title="带图标">
                <van-cell-group>
  <van-cell title="起码运动馆" icon="home"></van-cell>
  <van-cell title="线下门店" icon="location"></van-cell>
</van-cell-group>

              </example-block><example-block title="可点击的链接">
                <van-cell-group>
  <van-cell title="起码运动馆" value="进入店铺" icon="home" url="http://youzan.com" is-link=""></van-cell>
  <van-cell title="线下门店" icon="location" url="http://youzan.com" is-link=""></van-cell>
</van-cell-group>

              </example-block><example-block title="高级用法">
                <van-cell-group>
  <van-cell value="进入店铺" icon="home" url="http://youzan.com" is-link="">
    <template slot="title">
      <span class="van-cell-text">起码运动馆</span>
      <van-tag type="danger">官方</van-tag>
    </template>
  </van-cell>
  <van-cell title="线下门店" icon="location" url="http://youzan.com" is-link=""></van-cell>
  <van-cell title="其他">
    <template slot="right-icon">
      <van-icon name="passed" class="van-cell__right-icon" style="font-size: 16px;"></van-icon>
    </template>
  </van-cell>
</van-cell-group>

              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>