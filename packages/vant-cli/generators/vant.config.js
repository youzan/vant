module.exports = {
  name: 'demo-ui',
  build: {
    site: {
      publicPath: '/demo-ui/'
    }
  },
  site: {
    title: 'Demo UI',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍'
          },
          {
            path: 'quickstart',
            title: '快速上手'
          }
        ]
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'my-button',
            title: 'MyButton 按钮'
          },
          {
            path: 'my-icon',
            title: 'MyIcon 图标'
          }
        ]
      },
      {
        title: '展示组件',
        items: [
          {
            path: 'my-cell',
            title: 'MyCell 单元格'
          }
        ]
      }
    ]
  }
};
