<template>
  <div class="page-loading">
    <h1 class="page-title">Loading</h1>
    <h2 class="page-sub-title">渐变深色spinner</h2>
    <div class="page-loading__example">
      <zan-loading class="some-customized-class"></zan-loading>
    </div>
    <h2 class="page-sub-title">渐变浅色spinner</h2>
    <div class="page-loading__example page-loading__example--with-bg">
      <zan-loading class="some-customized-class" :color="'white'"></zan-loading>
    </div>
    <h2 class="page-sub-title">单色spinner</h2>
    <div class="page-loading__example">
      <zan-loading class="some-customized-class" :type="'circle'" :color="'white'"></zan-loading>
    </div>
    <h2 class="page-sub-title">单色spinner</h2>
    <div class="page-loading__example">
      <zan-loading class="some-customized-class" :type="'circle'" :color="'black'"></zan-loading>
    </div>
  </div>
</template>


<style>
.page-loading__example{
  width: 30px;
  height: 30px;
  padding: 20px;
  margin: auto;
  border-radius: 5px;
  border: 1px solid transparent;
}

.page-loading__example--with-bg {
  background-color: rgba(0, 0, 0, 0.5);
}

.page-loading {
  padding: 0 20px;
}
</style>
