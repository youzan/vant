<template><section class="demo-icon"><h1 class="demo-title">Icon 图标</h1><example-block title="所有Icon">
                <van-row>
  <van-col span="8">
   <van-icon name="qr-invalid"></van-icon>
   <span>qr-invalid</span>
  </van-col>
  <van-col span="8">
   <van-icon name="qr"></van-icon>
   <span>qr</span>
  </van-col>
  <van-col span="8">
   <van-icon name="exchange"></van-icon>
   <span>exchange</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="close"></van-icon>
   <span>close</span>
  </van-col>
  <van-col span="8">
   <van-icon name="location"></van-icon>
   <span>location</span>
  </van-col>
  <van-col span="8">
   <van-icon name="upgrade"></van-icon>
   <span>upgrade</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="check"></van-icon>
   <span>check</span>
  </van-col>
  <van-col span="8">
   <van-icon name="checked"></van-icon>
   <span>checked</span>
  </van-col>
  <van-col span="8">
   <van-icon name="like-o"></van-icon>
   <span>like-o</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="like" style="color: red;"></van-icon>
   <span>like</span>
  </van-col>
  <van-col span="8">
   <van-icon name="chat"></van-icon>
   <span>chat</span>
  </van-col>
  <van-col span="8">
   <van-icon name="shop"></van-icon>
   <span>shop</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="photograph"></van-icon>
   <span>photograph</span>
  </van-col>
  <van-col span="8">
   <van-icon name="add"></van-icon>
   <span>add</span>
  </van-col>
  <van-col span="8">
   <van-icon name="add2"></van-icon>
   <span>add2</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="photo"></van-icon>
   <span>photo</span>
  </van-col>
  <van-col span="8">
   <van-icon name="logistics"></van-icon>
   <span>logistics</span>
  </van-col>
  <van-col span="8">
   <van-icon name="edit"></van-icon>
   <span>edit</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="passed"></van-icon>
   <span>passed</span>
  </van-col>
  <van-col span="8">
   <van-icon name="cart"></van-icon>
   <span>cart</span>
  </van-col>
  <van-col span="8">
   <van-icon name="arrow"></van-icon>
   <span>arrow</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="gift"></van-icon>
   <span>gift</span>
  </van-col>
  <van-col span="8">
   <van-icon name="search"></van-icon>
   <span>search</span>
  </van-col>
  <van-col span="8">
   <van-icon name="clear"></van-icon>
   <span>clear</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="success"></van-icon>
   <span>success</span>
  </van-col>
  <van-col span="8">
   <van-icon name="fail"></van-icon>
   <span>fail</span>
  </van-col>
  <van-col span="8">
   <van-icon name="contact"></van-icon>
   <span>contact</span>
  </van-col>
</van-row>
<van-row>
  <van-col span="8">
   <van-icon name="wechat"></van-icon>
   <span>wechat</span>
  </van-col>
  <van-col span="8">
   <van-icon name="alipay"></van-icon>
   <span>alipay</span>
  </van-col>
</van-row>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b icon {
    .van-col {
      text-align: center;
    }

    .van-icon {
      font-size: 45px;
      display: block;
      margin: 15px 0;
    }
  }
} 
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>