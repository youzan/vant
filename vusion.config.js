const pkg = require('./package.json');

module.exports = {
    version: '>=0.1.0',
    type: 'library',
    name: '@lcap/mobile-ui',
    CamelName: 'LcapMobileUI',
    docs: {
        title: '@lcap/mobile-ui组件库',
        logo: '组件库',
        github: 'https://github.com/vusion/vant',
        package: pkg,
        navbar: [
            // { text: '设计语言', to: '/design' },
            { text: '基础组件', to: '/components' },
            { text: '指令和工具', to: '/misc' },
            { text: '布局', to: '/layouts' },
        ],
        components: [
            { group: 'Layout', name: 'divider', alias: '分割线', vscode: false },
            { group: 'Display', name: 'button', alias: '按钮', vscode: false },
            { group: 'Display', name: 'image', alias: '图片', vscode: false },
            { group: 'Display', name: 'tab', alias: '选项卡' },
            { group: 'Container', name: 'popup', alias: '弹窗'}
        ],
        blocks: [],
        directives: [
            // { group: 'Directive', name: 'v-repeat-click' },
            // // { group: 'Directive', name: 'v-click-outside' },
            // { group: 'Directive', name: 'v-ellipsis-title' },
            // { group: 'Directive', name: 'v-focus' },
        ],
        filters: [],
        utils: [
            // { group: 'Utils', name: 'DataSource', alias: '数据源' },
            // { group: 'Utils', name: 'Formatters', alias: '格式器' },
            { group: 'Utils', name: 'dom', alias: 'DOM 相关' },
            { group: 'Utils', name: 'edit', alias: '编辑相关' },
        ],
        layouts: [
            { group: 'Layout', name: 'l-dashboard', alias: '仪表盘布局' },
            { group: 'Layout', name: 'l-document', alias: '文档布局' },
            { group: 'Layout', name: 'l-page', alias: '通用页面布局' },
            { group: 'Layout', name: 'l-side-main', alias: '左侧栏固定布局' },
            { group: 'Layout', name: 'l-left-middle-right', alias: '左中右布局' },
            { group: 'Layout', name: 'l-wrapper', alias: '透传页' },
            { group: 'Layout', name: 'l-root', alias: '界面根节点' },
        ],
    },
};
