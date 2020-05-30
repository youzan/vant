module.exports = {
  name: 'vant',
  build: {
    skipInstall: ['lazyload'],
    site: {
      publicPath: 'https://b.yzcdn.cn/vant/',
    },
    vetur: {
      tagPrefix: 'van-',
    },
  },
  site: {
    defaultLang: 'en-US',
    versions: [{ label: '1.x', link: 'https://youzan.github.io/vant/1.x/' }],
    baiduAnalytics: {
      seed: 'ad6b5732c36321f2dafed737ac2da92f',
    },
    locales: {
      'zh-CN': {
        title: 'Vant',
        description: '轻量、可靠的移动端 Vue 组件库',
        logo: 'https://img.yzcdn.cn/vant/logo.png',
        langLabel: '中文',
        links: [
          {
            logo: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
            url: '/vant-weapp',
          },
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/youzan/vant',
          },
        ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'vant',
          placeholder: '搜索文档...',
        },
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
              {
                path: 'changelog',
                title: '更新日志',
              },
              {
                path: 'theme',
                title: '定制主题',
              },
              {
                path: 'contribution',
                title: '开发指南',
              },
              {
                path: 'design',
                title: '设计资源',
              },
              {
                path: 'style-guide',
                title: '风格指南',
              },
              {
                path: 'locale',
                title: '国际化',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
              },
              {
                path: 'cell',
                title: 'Cell 单元格',
              },
              {
                path: 'icon',
                title: 'Icon 图标',
              },
              {
                path: 'image',
                title: 'Image 图片',
              },
              {
                path: 'col',
                title: 'Layout 布局',
              },
              {
                path: 'popup',
                title: 'Popup 弹出层',
              },
              {
                path: 'style',
                title: 'Style 内置样式',
              },
            ],
          },
          {
            title: '表单组件',
            items: [
              {
                path: 'calendar',
                title: 'Calendar 日历',
              },
              {
                path: 'checkbox',
                title: 'Checkbox 复选框',
              },
              {
                path: 'datetime-picker',
                title: 'DatetimePicker 时间选择',
              },
              {
                path: 'field',
                title: 'Field 输入框',
              },
              {
                path: 'form',
                title: 'Form 表单',
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard 数字键盘',
              },
              {
                path: 'password-input',
                title: 'PasswordInput 密码输入框',
              },
              {
                path: 'picker',
                title: 'Picker 选择器',
              },
              {
                path: 'radio',
                title: 'Radio 单选框',
              },
              {
                path: 'rate',
                title: 'Rate 评分',
              },
              {
                path: 'search',
                title: 'Search 搜索',
              },
              {
                path: 'slider',
                title: 'Slider 滑块',
              },
              {
                path: 'stepper',
                title: 'Stepper 步进器',
              },
              {
                path: 'switch',
                title: 'Switch 开关',
              },
              {
                path: 'uploader',
                title: 'Uploader 文件上传',
              },
            ],
          },
          {
            title: '反馈组件',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet 动作面板',
              },
              {
                path: 'dialog',
                title: 'Dialog 弹出框',
              },
              {
                path: 'dropdown-menu',
                title: 'DropdownMenu 下拉菜单',
              },
              {
                path: 'loading',
                title: 'Loading 加载',
              },
              {
                path: 'notify',
                title: 'Notify 消息通知',
              },
              {
                path: 'overlay',
                title: 'Overlay 遮罩层',
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh 下拉刷新',
              },
              {
                path: 'share-sheet',
                title: 'ShareSheet 分享面板',
              },
              {
                path: 'swipe-cell',
                title: 'SwipeCell 滑动单元格',
              },
              {
                path: 'toast',
                title: 'Toast 轻提示',
              },
            ],
          },
          {
            title: '展示组件',
            items: [
              {
                path: 'circle',
                title: 'Circle 环形进度条',
              },
              {
                path: 'collapse',
                title: 'Collapse 折叠面板',
              },
              {
                path: 'count-down',
                title: 'CountDown 倒计时',
              },
              {
                path: 'divider',
                title: 'Divider 分割线',
              },
              {
                path: 'empty',
                title: 'Empty 空状态',
              },
              {
                path: 'image-preview',
                title: 'ImagePreview 图片预览',
              },
              {
                path: 'lazyload',
                title: 'Lazyload 懒加载',
              },
              {
                path: 'list',
                title: 'List 列表',
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar 通知栏',
              },
              {
                path: 'progress',
                title: 'Progress 进度条',
              },
              {
                path: 'skeleton',
                title: 'Skeleton 骨架屏',
              },
              {
                path: 'steps',
                title: 'Steps 步骤条',
              },
              {
                path: 'sticky',
                title: 'Sticky 粘性布局',
              },
              {
                path: 'swipe',
                title: 'Swipe 轮播',
              },
              {
                path: 'tag',
                title: 'Tag 标记',
              },
            ],
          },
          {
            title: '导航组件',
            items: [
              {
                path: 'grid',
                title: 'Grid 宫格',
              },
              {
                path: 'index-bar',
                title: 'IndexBar 索引栏',
              },
              {
                path: 'nav-bar',
                title: 'NavBar 导航栏',
              },
              {
                path: 'pagination',
                title: 'Pagination 分页',
              },
              {
                path: 'sidebar',
                title: 'Sidebar 侧边导航',
              },
              {
                path: 'tab',
                title: 'Tab 标签页',
              },
              {
                path: 'tabbar',
                title: 'Tabbar 标签栏',
              },
              {
                path: 'tree-select',
                title: 'TreeSelect 分类选择',
              },
            ],
          },
          {
            title: '业务组件',
            items: [
              {
                path: 'address-edit',
                title: 'AddressEdit 地址编辑',
              },
              {
                path: 'address-list',
                title: 'AddressList 地址列表',
              },
              {
                path: 'area',
                title: 'Area 省市区选择',
              },
              {
                path: 'card',
                title: 'Card 商品卡片',
              },
              {
                path: 'contact-card',
                title: 'Contact 联系人',
              },
              {
                path: 'coupon-list',
                title: 'Coupon 优惠券',
              },
              {
                path: 'goods-action',
                title: 'GoodsAction 商品导航',
              },
              {
                path: 'submit-bar',
                title: 'SubmitBar 提交订单栏',
              },
              {
                path: 'sku',
                title: 'Sku 商品规格',
              },
            ],
          },
          {
            title: '废弃',
            items: [
              {
                path: 'panel',
                title: 'Panel 面板',
              },
              {
                path: 'switch-cell',
                title: 'SwitchCell 开关单元格',
              },
            ],
          },
        ],
      },
      'en-US': {
        title: 'Vant',
        description: 'Mobile UI Components built on Vue',
        logo: 'https://img.yzcdn.cn/vant/logo.png',
        langLabel: 'En',
        links: [
          {
            logo: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
            url: '/vant-weapp',
          },
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/youzan/vant',
          },
        ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'vant',
          placeholder: 'Search...',
        },
        nav: [
          {
            title: 'Essentials',
            items: [
              {
                path: 'home',
                title: 'Introduction',
              },
              {
                path: 'quickstart',
                title: 'Quickstart',
              },
              {
                path: 'changelog',
                title: 'Changelog',
              },
              {
                path: 'theme',
                title: 'Custom Theme',
              },
              {
                path: 'locale',
                title: 'Internationalization',
              },
            ],
          },
          {
            title: 'Basic Components',
            items: [
              {
                path: 'button',
                title: 'Button',
              },
              {
                path: 'cell',
                title: 'Cell',
              },
              {
                path: 'icon',
                title: 'Icon',
              },
              {
                path: 'image',
                title: 'Image',
              },
              {
                path: 'col',
                title: 'Layout',
              },
              {
                path: 'popup',
                title: 'Popup',
              },
              {
                path: 'style',
                title: 'Built-in style',
              },
            ],
          },
          {
            title: 'Form Components',
            items: [
              {
                path: 'calendar',
                title: 'Calendar',
              },
              {
                path: 'checkbox',
                title: 'Checkbox',
              },
              {
                path: 'datetime-picker',
                title: 'DatetimePicker',
              },
              {
                path: 'field',
                title: 'Field',
              },
              {
                path: 'form',
                title: 'Form',
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard',
              },
              {
                path: 'password-input',
                title: 'PasswordInput',
              },
              {
                path: 'picker',
                title: 'Picker',
              },
              {
                path: 'radio',
                title: 'Radio',
              },
              {
                path: 'rate',
                title: 'Rate',
              },
              {
                path: 'search',
                title: 'Search',
              },
              {
                path: 'slider',
                title: 'Slider',
              },
              {
                path: 'stepper',
                title: 'Stepper',
              },
              {
                path: 'switch',
                title: 'Switch',
              },
              {
                path: 'switch-cell',
                title: 'SwitchCell',
              },
              {
                path: 'uploader',
                title: 'Uploader',
              },
            ],
          },
          {
            title: 'Action Components',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet',
              },
              {
                path: 'dialog',
                title: 'Dialog',
              },
              {
                path: 'dropdown-menu',
                title: 'DropdownMenu',
              },
              {
                path: 'loading',
                title: 'Loading',
              },
              {
                path: 'notify',
                title: 'Notify',
              },
              {
                path: 'overlay',
                title: 'Overlay',
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh',
              },
              {
                path: 'share-sheet',
                title: 'ShareSheet',
              },
              {
                path: 'swipe-cell',
                title: 'SwipeCell',
              },
              {
                path: 'toast',
                title: 'Toast',
              },
            ],
          },
          {
            title: 'Display Components',
            items: [
              {
                path: 'circle',
                title: 'Circle',
              },
              {
                path: 'collapse',
                title: 'Collapse',
              },
              {
                path: 'count-down',
                title: 'CountDown',
              },
              {
                path: 'divider',
                title: 'Divider',
              },
              {
                path: 'empty',
                title: 'Empty',
              },
              {
                path: 'image-preview',
                title: 'ImagePreview',
              },
              {
                path: 'lazyload',
                title: 'Lazyload',
              },
              {
                path: 'list',
                title: 'List',
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar',
              },
              {
                path: 'progress',
                title: 'Progress',
              },
              {
                path: 'skeleton',
                title: 'Skeleton',
              },
              {
                path: 'steps',
                title: 'Steps',
              },
              {
                path: 'sticky',
                title: 'Sticky',
              },
              {
                path: 'swipe',
                title: 'Swipe',
              },
              {
                path: 'tag',
                title: 'Tag',
              },
            ],
          },
          {
            title: 'Navigation Components',
            items: [
              {
                path: 'grid',
                title: 'Grid',
              },
              {
                path: 'index-bar',
                title: 'IndexBar',
              },
              {
                path: 'nav-bar',
                title: 'NavBar',
              },
              {
                path: 'pagination',
                title: 'Pagination',
              },
              {
                path: 'sidebar',
                title: 'Sidebar',
              },
              {
                path: 'tab',
                title: 'Tab',
              },
              {
                path: 'tabbar',
                title: 'Tabbar',
              },
              {
                path: 'tree-select',
                title: 'TreeSelect',
              },
            ],
          },
          {
            title: 'Business Components',
            items: [
              {
                path: 'address-edit',
                title: 'AddressEdit',
              },
              {
                path: 'address-list',
                title: 'AddressList',
              },
              {
                path: 'area',
                title: 'Area',
              },
              {
                path: 'card',
                title: 'Card',
              },
              {
                path: 'contact-card',
                title: 'Contact',
              },
              {
                path: 'coupon-list',
                title: 'Coupon',
              },
              {
                path: 'goods-action',
                title: 'GoodsAction',
              },
              {
                path: 'submit-bar',
                title: 'SubmitBar',
              },
              {
                path: 'sku',
                title: 'Sku',
              },
            ],
          },
          {
            title: 'Deprecated',
            items: [
              {
                path: 'panel',
                title: 'Panel',
              },
              {
                path: 'switch-cell',
                title: 'SwitchCell',
              },
            ],
          },
        ],
      },
    },
  },
};
