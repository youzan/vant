<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <h2 class="page-sub-title">按钮功能</h2>
    <zan-row>
      <zan-col span="24">
        <zan-button block>default</zan-button>
      </zan-col>
      <zan-col span="24">
        <zan-button type="primary" block>primary</zan-button>
      </zan-col>
      <zan-col span="24">
        <zan-button type="danger" block>danger</zan-button>
      </zan-col>
    </zan-row>

    <h2 class="page-sub-title">禁用状态</h2>
    <zan-row>
      <zan-col span="24">
        <zan-button disabled block>diabled</zan-button>
      </zan-col>
    </zan-row>

    <h2 class="page-sub-title">按钮尺寸</h2>
    <zan-row>
      <zan-col span="24">
        <zan-button size="large">large</zan-button>
      </zan-col>
    </zan-row>
    <zan-row gutter="10">
      <zan-col span="8">
        <zan-button type="primary" block>normal</zan-button>
      </zan-col>
      <zan-col span="8">
        <zan-button size="small" block>small</zan-button>
      </zan-col>
      <zan-col span="8">
        <zan-button size="mini" block>mini</zan-button>
      </zan-col>
    </zan-row>

    <h2 class="page-sub-title">自定义按钮标签</h2>
    <zan-row>
      <zan-col span="24">
        <zan-button tag="a" type="primary" href="https://www.youzan.com" target="_blank">a标签按钮</zan-button>
      </zan-col>
    </zan-row>

    <h2 class="page-sub-title">loading</h2>
    <zan-row>
      <zan-col span="24">
        <zan-button type="primary" loading block>loading</zan-button>
      </zan-col>
      <zan-col span="24">
        <zan-button loading block></zan-button>
      </zan-col>
    </zan-row>

    <h2 class="page-sub-title">button group</h2>
    <div class="button-group">
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
  @component-namespace zan {
    @b col {
      margin-bottom: 10px;
    }
  }
  .button-group {
    font-size: 0;
  }
</style>
