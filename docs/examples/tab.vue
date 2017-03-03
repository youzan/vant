<template>
  <div class="page-tab">
    <h1 class="page-title">Tab</h1>
    
    <h2 class="page-sub-title">基础用法line</h2>
    <zan-tabs>
      <zan-tab tab-key="0" title="选项一">内容一</zan-tab>
      <zan-tab tab-key="1" title="选项二">内容二</zan-tab>
      <zan-tab tab-key="2" title="选项三">内容三</zan-tab>
      <zan-tab tab-key="3" title="选项四">内容四</zan-tab>
      <zan-tab tab-key="4" title="选项五">内容五</zan-tab>
    </zan-tabs>

    <h2 class="page-sub-title" style="margin-top: 50px;">基础用法card</h2>
    <zan-tabs class-type="card">
      <zan-tab tab-key="0" title="选项一">内容一</zan-tab>
      <zan-tab tab-key="1" title="选项二">内容二</zan-tab>
      
    </zan-tabs>
    
    <h2 class="page-sub-title" style="margin-top: 50px;">自定义样式用法</h2>
    <zan-tabs active-tab-key="2" tabs-class-name="custom-tabwrap" tab-class-name="custom-tab">
      <zan-tab tab-key="0" title="选项一" tab-pane-class-name="custom-pane"><div class="test">内容一</div></zan-tab>
      <zan-tab tab-key="1" title="选项二" tab-pane-class-name="custom-pane">内容二</zan-tab>
      <zan-tab tab-key="2" title="选项三" tab-pane-class-name="custom-pane">内容三</zan-tab>
      <zan-tab tab-key="3" title="选项四" tab-pane-class-name="custom-pane">内容四</zan-tab>
      <zan-tab tab-key="4" title="选项五" tab-pane-class-name="custom-pane">内容五</zan-tab>
    </zan-tabs>
  </div>
</template>
<style>
  .page-tab {
    padding: 0 15px;
  }
  .custom-tabwrap .zan-tab-active{
    color: #20a0ff;
  }
  .custom-tabwrap .zan-tabs-nav-bar{
    background: #20a0ff;
  }
  .custom-tab {
    font-weight: bold;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>