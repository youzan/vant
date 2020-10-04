module.exports = {
  base: '/vant-use/',
  title: 'Vant Use',
  dest: 'dist',
  head: [['link', { rel: 'icon', href: 'https://img.yzcdn.cn/vant/logo.png' }]],
  themeConfig: {
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/youzan/vant/tree/next/packages/vant-use',
      },
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'State',
        collapsable: false,
        // children: ['/src/useToggle/'],
      },
      {
        title: 'DOM',
        collapsable: false,
        children: [
          '/src/useClickAway/',
          '/src/useEventListener/',
          '/src/usePageVisibility/',
          '/src/useScrollParent/',
          // '/src/useWindowSize/',
        ],
      },
    ],
  },
};
