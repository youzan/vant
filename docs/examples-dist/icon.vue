<template><section class="demo-icon"><h1 class="demo-title">icon</h1><example-block title="所有Icon">
                <zan-row>
  <zan-col span="8">
   <zan-icon name="qr-invalid"></zan-icon>
   <span>qr-invalid</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="qr"></zan-icon>
   <span>qr</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="exchange"></zan-icon>
   <span>exchange</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="close"></zan-icon>
   <span>close</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="location"></zan-icon>
   <span>location</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="upgrade"></zan-icon>
   <span>upgrade</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="check"></zan-icon>
   <span>check</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="checked"></zan-icon>
   <span>checked</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="like-o"></zan-icon>
   <span>like-o</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="like" style="color: red;"></zan-icon>
   <span>like</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="chat"></zan-icon>
   <span>chat</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="shop"></zan-icon>
   <span>shop</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="photograph"></zan-icon>
   <span>photograph</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="add"></zan-icon>
   <span>add</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="add2"></zan-icon>
   <span>add2</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="photo"></zan-icon>
   <span>photo</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="logistics"></zan-icon>
   <span>logistics</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="edit"></zan-icon>
   <span>edit</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="passed"></zan-icon>
   <span>passed</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="cart"></zan-icon>
   <span>cart</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="arrow"></zan-icon>
   <span>arrow</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="gift"></zan-icon>
   <span>gift</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="search"></zan-icon>
   <span>search</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="clear"></zan-icon>
   <span>clear</span>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col span="8">
   <zan-icon name="success"></zan-icon>
   <span>success</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="fail"></zan-icon>
   <span>fail</span>
  </zan-col>
  <zan-col span="8">
   <zan-icon name="contact"></zan-icon>
   <span>contact</span>
  </zan-col>
</zan-row>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b icon {
    .zan-col {
      text-align: center;
    }

    .zan-icon {
      font-size: 45px;
      display: block;
      margin: 15px 0;
    }
  }
} 
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>