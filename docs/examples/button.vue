<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <h2 class="page-sub-title">按钮功能</h2>
    <div class="zan-button-group">
      <div class="zan-button-1">
        <zan-button>default</zan-button>
      </div>
      <div class="zan-button-1">
        <zan-button type="primary">primary</zan-button>
      </div>
      <div class="zan-button-1">
        <zan-button type="danger">danger</zan-button>
      </div>
    </div>

    <h2 class="page-sub-title">禁用状态</h2>
    <div class="zan-button-group">
      <div class="zan-button-1">
        <zan-button disabled>diabled</zan-button>
      </div>
    </div>

    <h2 class="page-sub-title">按钮尺寸</h2>
    <div class="zan-button-group">
      <div class="zan-button-1">
        <zan-button size="large">large</zan-button>
      </div>
    </div>
    <div class="zan-button-group">
      <div class="zan-button-3">
        <zan-button type="primary">normal</zan-button>
      </div>
      <div class="zan-button-3">
        <zan-button size="small">small</zan-button>
      </div>
      <div class="zan-button-3">
        <zan-button size="mini">mini</zan-button>
      </div>
    </div>

    <h2 class="page-sub-title">自定义按钮标签</h2>
    <div class="zan-button-group">
      <div class="zan-button-1">
        <zan-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</zan-button>
      </div>
    </div>

    <h2 class="page-sub-title">button group</h2>
    <div class="zan-button-group">
      <zan-button type="primary" size="small">确认付款</zan-button>
      <zan-button size="small">确认收货</zan-button>
      <zan-button size="small">取消订单</zan-button>
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
      .zan-button-1 {
        margin-bottom: 10px;
      }
    }
  }

</style>
