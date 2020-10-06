module.exports = {
  base: '/vant/vant-use/',
  title: 'Vant Use',
  dest: 'dist',
  head: [['link', { rel: 'icon', href: 'https://img.yzcdn.cn/vant/logo.png' }]],
  patterns: ['**/*.md', '!**/node_modules'],
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
        title: '介绍',
        collapsable: false,
        children: ['/', 'changelog'],
      },
      {
        title: 'State',
        collapsable: false,
        children: ['/src/useToggle/', '/src/useCountDown/'],
      },
      {
        title: 'DOM',
        collapsable: false,
        children: [
          '/src/useRect/',
          '/src/useClickAway/',
          '/src/useEventListener/',
          '/src/usePageVisibility/',
          '/src/useScrollParent/',
          '/src/useWindowSize/',
        ],
      },
      {
        title: 'Enhanced',
        collapsable: false,
        children: ['/src/useRelation/'],
      },
    ],
  },
};
