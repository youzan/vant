export default {
  name: '<%= name %>',
  build: {
    css: {
      preprocessor: '<%= preprocessor %>',
    },
    site: {
      publicPath: '/<%= name %>/',
    },
  },
  site: {
    title: '<%= name %>',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
