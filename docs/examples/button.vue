<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <h2 class="page-sub-title">按钮功能</h2>
    <div class="z-button-group">
      <div class="z-button-1">
        <z-button>default</z-button>
      </div>
      <div class="z-button-1">
        <z-button type="primary">primary</z-button>
      </div>
      <div class="z-button-1">
        <z-button type="danger">danger</z-button>
      </div>
    </div>

    <h2 class="page-sub-title">禁用状态</h2>
    <div class="z-button-group">
      <div class="z-button-1">
        <z-button disabled>diabled</z-button>
      </div>
    </div>

    <h2 class="page-sub-title">按钮尺寸</h2>
    <div class="z-button-group">
      <div class="z-button-1">
        <z-button size="large">large</z-button>
      </div>
    </div>
    <div class="z-button-group">
      <div class="z-button-3">
        <z-button type="primary">normal</z-button>
      </div>
      <div class="z-button-3">
        <z-button size="small">small</z-button>
      </div>
      <div class="z-button-3">
        <z-button size="mini">mini</z-button>
      </div>
    </div>

    <h2 class="page-sub-title">自定义按钮标签</h2>
    <div class="z-button-group">
      <div class="z-button-1">
        <z-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</z-button>
      </div>
    </div>

    <h2 class="page-sub-title">button group</h2>
    <div class="z-button-group">
      <z-button type="primary" size="small">确认付款</z-button>
      <z-button size="small">确认收货</z-button>
      <z-button size="small">取消订单</z-button>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @b button {
      padding: 0 20px;
    }
  }
  @component-namespace z {
    @b button-group {
      .z-button-1 {
        margin-bottom: 10px;
      }
    }
  }

</style>
