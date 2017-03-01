<template>
  <div class="page-cell">
    <h1 class="page-title">Cell</h1>
    
    <h2 class="page-sub-title">基础用法</h2>
    <zan-cell-group>
      <zan-cell title="单元格1" value="单元格1内容"></zan-cell>
      <zan-cell title="单元格2" value="单元格2内容"></zan-cell>
    </zan-cell-group>

    <h2 class="page-sub-title">标题带描述信息</h2>
    <zan-cell-group>
      <zan-cell title="单元格1" label="描述信息" is-link url="javascript:void(0)" @click="handleClick"></zan-cell>
      <zan-cell title="单元格2" label="描述信息"></zan-cell>
    </zan-cell-group>

    <h2 class="page-sub-title">带图标</h2>
    <zan-cell-group>
      <zan-cell title="起码运动馆" icon="home"></zan-cell>
      <zan-cell title="线下门店" icon="location"></zan-cell>
    </zan-cell-group>

    <h2 class="page-sub-title">可点击的链接</h2>
    <zan-cell-group>
      <zan-cell title="起码运动馆" value="进入店铺" icon="home" url="http://youzan.com" is-link></zan-cell>
      <zan-cell title="线下门店" icon="location" url="http://youzan.com" is-link></zan-cell>
    </zan-cell-group>

    <h2 class="page-sub-title">高级用法</h2>
    <zan-cell-group>
      <zan-cell value="进入店铺" icon="home" url="http://youzan.com" is-link>
        <template slot="title">
          <span class="zan-cell-text">起码运动馆</span>
          <img src="//su.yzcdn.cn/v2/image/account/icon_guan_160421.png" class="official-img">
        </template>
      </zan-cell>
      <zan-cell title="线下门店" icon="location" url="http://youzan.com" is-link></zan-cell>
    </zan-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>

<style>
.official-img {
  width: 31px;
  vertical-align: middle;
  border: 0;
}

.page-sub-title {
  padding: 25px 15px;
}
</style>
