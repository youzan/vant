## 更新日志

## [v1.3.3](https://github.com/youzan/vant/tree/v1.3.3) (2018-09-23)
[Full Changelog](https://github.com/youzan/vant/compare/v1.3.2...v1.3.3)

**Breaking changes**

- List组件的加载更多，能否提供一个slot，目前有个需求，加载更多需要展示的是动画，而不是文案 [\#1798](https://github.com/youzan/vant/issues/1798)

**Bug Fixes**

- \[TypeScript\] dialog 组件 DialogOptions typings 遗漏 'className' 属性 [\#1787](https://github.com/youzan/vant/issues/1787)
- van-hairline消失 [\#1778](https://github.com/youzan/vant/issues/1778)
- 地址编辑组件, 若不需要邮政编码编辑即倒数第二行为"详细地址"时, 详细地址没有下边框 [\#1777](https://github.com/youzan/vant/issues/1777)

**Issue**

- GoodsAction 商品页行动点ui错乱了 [\#1846](https://github.com/youzan/vant/issues/1846)
- 组件添加图片不显示 [\#1845](https://github.com/youzan/vant/issues/1845)
- List组件当style设置为scoped时，会有部分push进去的数据样式没生效 [\#1844](https://github.com/youzan/vant/issues/1844)
- 如何过滤组件之间的样式相互影响 [\#1841](https://github.com/youzan/vant/issues/1841)
- 两个picker数据联动问题 [\#1840](https://github.com/youzan/vant/issues/1840)
- 表单校验 [\#1837](https://github.com/youzan/vant/issues/1837)
- \<van-swipe-cell\> solt 为right时，class设置不生效 [\#1836](https://github.com/youzan/vant/issues/1836)
- list组件如何配合table使用？ [\#1833](https://github.com/youzan/vant/issues/1833)
- 感觉vant的vue组件没得ract组件的功能多 [\#1832](https://github.com/youzan/vant/issues/1832)
- 下拉刷新时如何禁止list组件的“到达底部加载更多“，list加载更多时如何禁止下拉刷新 [\#1831](https://github.com/youzan/vant/issues/1831)
- area省市区直辖市报错 [\#1830](https://github.com/youzan/vant/issues/1830)
- 如何再次触发list的onLoad [\#1828](https://github.com/youzan/vant/issues/1828)
- list组件为什么会在初始化的时候自动执行两次onLoad方法 [\#1827](https://github.com/youzan/vant/issues/1827)
- 在Android4.4.2版本下collapse动画出现闪烁异常 [\#1824](https://github.com/youzan/vant/issues/1824)
- 当List数据较少的时候，下拉刷新底部会遮盖，目前有什么方法让List100%么？ [\#1823](https://github.com/youzan/vant/issues/1823)
- Swipe 轮播不显示图片 [\#1822](https://github.com/youzan/vant/issues/1822)
- 变更DatetimePicker的max-date导致column的index置0 [\#1821](https://github.com/youzan/vant/issues/1821)
- van-collapse-item 无法添加border-radius [\#1820](https://github.com/youzan/vant/issues/1820)
- SwipeCell 滑动单元格 [\#1818](https://github.com/youzan/vant/issues/1818)
- Collapse 和 PullRefresh 一起使用时，Collapse 展开关闭动画有时会失效 [\#1817](https://github.com/youzan/vant/issues/1817)
- 使用babel-plugin-import 报错 [\#1815](https://github.com/youzan/vant/issues/1815)
- upload组件上传图片 [\#1814](https://github.com/youzan/vant/issues/1814)
- ImagePreview组件不支持手势放大吗？可以增加图片旋转功能吗 [\#1813](https://github.com/youzan/vant/issues/1813)
- 打包后组件的样式丢失问题 [\#1812](https://github.com/youzan/vant/issues/1812)
- 有一个疑问 [\#1811](https://github.com/youzan/vant/issues/1811)
- 轮播组件在使用左右点击调用swiperTo方法和手指滑动混合使用时,左右点击会出现白屏的问题! [\#1810](https://github.com/youzan/vant/issues/1810)
- Uploader在同一個頁面如何用多個上傳圖片？ [\#1808](https://github.com/youzan/vant/issues/1808)
- 官方文档挂了 [\#1807](https://github.com/youzan/vant/issues/1807)
- 官网打不开？ [\#1806](https://github.com/youzan/vant/issues/1806)
- transition 封装List组件的bug💢🎃 [\#1803](https://github.com/youzan/vant/issues/1803)
- list组件Load触发的逻辑问题✋ [\#1801](https://github.com/youzan/vant/issues/1801)
- 建议DatePicker的列配置封装得更有灵活性，目前挺多close的issue都是提到他们需要灵活的时间列搭配 [\#1797](https://github.com/youzan/vant/issues/1797)
- PullRefresh 和 List 组件配合使用的问题 [\#1770](https://github.com/youzan/vant/issues/1770)

**Improvements**

- \[improvement\] SwipeCell: add click event [\#1848](https://github.com/youzan/vant/pull/1848) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] DatetimePicker: refactor getMonthEndDay function [\#1847](https://github.com/youzan/vant/pull/1847) ([ryanschen](https://github.com/ryanschen))
- \[bugfix\] Field: maxlength not work when type = number [\#1839](https://github.com/youzan/vant/pull/1839) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] render is crashed while this.$vantMessages is undefined [\#1835](https://github.com/youzan/vant/pull/1835) ([hzsrc](https://github.com/hzsrc))
- \[bugfix\] Tag: white border [\#1834](https://github.com/youzan/vant/pull/1834) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] update list usage [\#1826](https://github.com/youzan/vant/pull/1826) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] DatetimePicker: update value when range changed [\#1825](https://github.com/youzan/vant/pull/1825) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] PullRefresh: preventDefault warning [\#1819](https://github.com/youzan/vant/pull/1819) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] add component changelog [\#1816](https://github.com/youzan/vant/pull/1816) ([chenjiahan](https://github.com/chenjiahan))

## [v1.3.2](https://github.com/youzan/vant/tree/v1.3.2) (2018-09-14)
[Full Changelog](https://github.com/youzan/vant/compare/v1.3.1...v1.3.2)

**Bug Fixes**

- 最新的vant 升级了 babel 7 如果在nuxt 项目用编译不报错 运行的时候就会报错 这个问题是要怎么解决？ [\#1748](https://github.com/youzan/vant/issues/1748)

**Issue**

- Field组件中Clearable属性问题 [\#1796](https://github.com/youzan/vant/issues/1796)
- tabs粘性吸顶条在ios系统下会出现延迟吸顶的情况 [\#1795](https://github.com/youzan/vant/issues/1795)
- van-actionsheet 选中事件select无效 [\#1794](https://github.com/youzan/vant/issues/1794)
- 能否添加tabbar多个自定义图标的示例 [\#1792](https://github.com/youzan/vant/issues/1792)
- field组件clearable问题 [\#1791](https://github.com/youzan/vant/issues/1791)
- Toast 文字换行~ [\#1789](https://github.com/youzan/vant/issues/1789)
- 图片预览组件切换图片的过程中,下面的分页器会抖动 [\#1788](https://github.com/youzan/vant/issues/1788)
- 时间选择器，为什么不能单独展示年份列？加个type='year'可好？ [\#1783](https://github.com/youzan/vant/issues/1783)
- AddressEdit 组件中 slot 的位置如何调整？ [\#1782](https://github.com/youzan/vant/issues/1782)
- AddressEdit 组件 label 字段只能通过更改源码实现吗？ [\#1781](https://github.com/youzan/vant/issues/1781)
- 滑块Slider 一个小需求 [\#1780](https://github.com/youzan/vant/issues/1780)
- Add countdown component.建议增加倒计时组件 [\#1779](https://github.com/youzan/vant/issues/1779)
- 时间选择器，选择年份带动月日滑动后，点击确定，获取的时间有误 [\#1772](https://github.com/youzan/vant/issues/1772)
- Swipe 轮播图怎么添加点击进入详情的功能,绑定点击事件的话,滑动就不好用了 [\#1771](https://github.com/youzan/vant/issues/1771)
- Picker是否可实现单级多选功能 [\#1769](https://github.com/youzan/vant/issues/1769)
- van-button 的 loading 状态颜色错误 [\#1765](https://github.com/youzan/vant/issues/1765)
- ImagePreview types 错误 [\#1761](https://github.com/youzan/vant/issues/1761)
- vue-cli 3.x 求一套开箱即用的配置 [\#1760](https://github.com/youzan/vant/issues/1760)

**Improvements**

- \[bugfix\] hairline [\#1805](https://github.com/youzan/vant/pull/1805) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] List: add loading slot [\#1804](https://github.com/youzan/vant/pull/1804) ([chenjiahan](https://github.com/chenjiahan))
- update gitignore [\#1802](https://github.com/youzan/vant/pull/1802) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] AddressEdit: missing border [\#1800](https://github.com/youzan/vant/pull/1800) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Dialog: fix type definition [\#1799](https://github.com/youzan/vant/pull/1799) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] AddressEdit: add more props [\#1790](https://github.com/youzan/vant/pull/1790) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] AddressList: address not fully displayed [\#1786](https://github.com/youzan/vant/pull/1786) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] AddressEdit: optimize area label [\#1785](https://github.com/youzan/vant/pull/1785) ([chenjiahan](https://github.com/chenjiahan))
- update README.md [\#1784](https://github.com/youzan/vant/pull/1784) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] hairline in chrome 69 [\#1776](https://github.com/youzan/vant/pull/1776) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Tab: remove active color [\#1775](https://github.com/youzan/vant/pull/1775) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Dialog: update style [\#1774](https://github.com/youzan/vant/pull/1774) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] update border-color [\#1773](https://github.com/youzan/vant/pull/1773) ([chenjiahan](https://github.com/chenjiahan))

## [v1.3.1](https://github.com/youzan/vant/tree/v1.3.1) (2018-09-07)
[Full Changelog](https://github.com/youzan/vant/compare/v1.3.0...v1.3.1)

**Breaking changes**

- Rate 评分组件能否加一个只读状态 [\#1726](https://github.com/youzan/vant/issues/1726)
- Loading组件loading的颜色怎么改变？ [\#1692](https://github.com/youzan/vant/issues/1692)

**Bug Fixes**

- DatetimePicker 时间选择组件BUG [\#1700](https://github.com/youzan/vant/issues/1700)
- Swipe 组件bug [\#1679](https://github.com/youzan/vant/issues/1679)
- 关于Tabbar-item的info不显示 [\#1674](https://github.com/youzan/vant/issues/1674)
- tab标签页swipeable滑动切换可以切换到禁用的标签上 [\#1656](https://github.com/youzan/vant/issues/1656)

**Issue**

- \[Vant\] Local not correctly registered [\#1766](https://github.com/youzan/vant/issues/1766)
- area组件，二级为直辖市时，三级联动没有加载 [\#1764](https://github.com/youzan/vant/issues/1764)
- SwipeCell 回調函數如何傳參？ [\#1762](https://github.com/youzan/vant/issues/1762)
- 安卓4.4.4版本，popup右移了50% [\#1759](https://github.com/youzan/vant/issues/1759)
- 样式注入到html文档时顺序发生错乱（Dialog样式在Button样式之前） [\#1758](https://github.com/youzan/vant/issues/1758)
- Tabs组件使用v-model设置当前激活标签的索引不生效 [\#1752](https://github.com/youzan/vant/issues/1752)
- tab标签页切换动画 [\#1751](https://github.com/youzan/vant/issues/1751)
- Picker选择器三列联动怎么定义 [\#1750](https://github.com/youzan/vant/issues/1750)
- 图片预览组件建议增加手势缩放功能 [\#1749](https://github.com/youzan/vant/issues/1749)
- vant ui为什么不可以在jsp中使用 [\#1747](https://github.com/youzan/vant/issues/1747)
- vant ui 为什么不可以在jsp中引用。 [\#1746](https://github.com/youzan/vant/issues/1746)
- 字体和图标看着太小了，怎么“放大”啊？ [\#1745](https://github.com/youzan/vant/issues/1745)
- upload组件能上传多张图片吗? [\#1744](https://github.com/youzan/vant/issues/1744)
- 怎么在数据加载完成前全局使用loading组件啊 [\#1743](https://github.com/youzan/vant/issues/1743)
- 轻提示使用指南有误 [\#1742](https://github.com/youzan/vant/issues/1742)
- van-list 加载 了第一页之后马上又会自动加载下一页 [\#1741](https://github.com/youzan/vant/issues/1741)
- PullRefresh 下拉刷新组件问题 [\#1740](https://github.com/youzan/vant/issues/1740)
- 1.3.0 的更新日志为什么没有看到 [\#1739](https://github.com/youzan/vant/issues/1739)
- Field 输入框  必填项 会出现左右滚动 [\#1738](https://github.com/youzan/vant/issues/1738)
- 中文文档里uploader组件有个参数写错了 [\#1737](https://github.com/youzan/vant/issues/1737)
- 提供Poptip和Tooltip  气泡提示 [\#1736](https://github.com/youzan/vant/issues/1736)
- SwipeCell实例无法使用open方法 [\#1735](https://github.com/youzan/vant/issues/1735)
- Stepper 步进器 [\#1725](https://github.com/youzan/vant/issues/1725)

**Improvements**

- \[bugfix\] Button: loading color [\#1768](https://github.com/youzan/vant/pull/1768) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] ImagePreview: fix ts definition [\#1767](https://github.com/youzan/vant/pull/1767) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Tab: color not work in card type [\#1763](https://github.com/youzan/vant/pull/1763) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] Tab: update document [\#1757](https://github.com/youzan/vant/pull/1757) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Button: optimize loading [\#1756](https://github.com/youzan/vant/pull/1756) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Build: optimize style entry [\#1755](https://github.com/youzan/vant/pull/1755) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] vue cli 3 [\#1754](https://github.com/youzan/vant/pull/1754) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] fix lib dir babel runtime module [\#1753](https://github.com/youzan/vant/pull/1753) ([chenjiahan](https://github.com/chenjiahan))

## [v1.3.0](https://github.com/youzan/vant/tree/v1.3.0) (2018-08-31)
[Full Changelog](https://github.com/youzan/vant/compare/v1.2.1...v1.3.0)

**Breaking changes**

- 部分自定义图标和自带图标Icon无法同时显示 [\#1661](https://github.com/youzan/vant/issues/1661)

**Bug Fixes**

- Stepper默认值不能为0 [\#1682](https://github.com/youzan/vant/issues/1682)
- Tab标签页激活的底边框颜色 [\#1672](https://github.com/youzan/vant/issues/1672)

**Issue**

- Popup组件与vue-touch结合bug [\#1733](https://github.com/youzan/vant/issues/1733)
- 在单独引用vue.js和vantUI,发现图片预览功能并没有实现,反而报错404;我使用CDN上面的图片请求同样是这样 [\#1728](https://github.com/youzan/vant/issues/1728)
- switch 不能通过闭包来传参数嘛 [\#1727](https://github.com/youzan/vant/issues/1727)
- van-list http请求的数据  load 只执行一次 [\#1722](https://github.com/youzan/vant/issues/1722)
- 微信公众号中 多选图片失效 [\#1721](https://github.com/youzan/vant/issues/1721)
- 优惠券组件  按照文档数据格式  部分可以显示，部分显示NaN [\#1720](https://github.com/youzan/vant/issues/1720)
- \*\*怎样修改日期中取消，确认文字，如改成重置，确定\*\* [\#1719](https://github.com/youzan/vant/issues/1719)
- ImagePreview，当页面较长时，如果在页面底部调用了图片预览，关闭图片预览弹层后，页面会回到顶部 [\#1718](https://github.com/youzan/vant/issues/1718)
- 为什么复选框和单选框的样式是一样的？这样不会让人疑惑吗？ [\#1716](https://github.com/youzan/vant/issues/1716)
- tabs的change事件不触发 [\#1715](https://github.com/youzan/vant/issues/1715)
- 官网文档示例有误 [\#1714](https://github.com/youzan/vant/issues/1714)
- \<van-dialog\> - did you register the component correctly? [\#1711](https://github.com/youzan/vant/issues/1711)
- https生产环境中使用vant报错 [\#1710](https://github.com/youzan/vant/issues/1710)
- 优惠券 组件  根据文档  优惠券字段说明  传值  部分字段显示NaN  [\#1709](https://github.com/youzan/vant/issues/1709)
- 单元格-高级用法-无法slot value [\#1708](https://github.com/youzan/vant/issues/1708)
- van-tab里面的数据是异步请求回来的 设置van-tabs的v-model控制台报错 [\#1707](https://github.com/youzan/vant/issues/1707)
- search组件无法自动对焦 [\#1706](https://github.com/youzan/vant/issues/1706)
- 引入vant base.css为什么后面加了随机参数  [\#1702](https://github.com/youzan/vant/issues/1702)
- 官方网站示例，NumberKeyboard 有bug，无法正常点击 [\#1701](https://github.com/youzan/vant/issues/1701)
- 希望datatimePicker 可以增加个 分钟列表配置 和小时列表配置， [\#1698](https://github.com/youzan/vant/issues/1698)
- van-tab组件的tab文字在安卓机不水平垂直居中 [\#1697](https://github.com/youzan/vant/issues/1697)
- Picker 的多级联动无法设置第一列的默认值 [\#1695](https://github.com/youzan/vant/issues/1695)
- 依据开发指南的指令启动失败 [\#1691](https://github.com/youzan/vant/issues/1691)
- DateTimePicker是否可以支持月日的选择呢? [\#1690](https://github.com/youzan/vant/issues/1690)
- Van-field in custom component [\#1689](https://github.com/youzan/vant/issues/1689)
- 建议Search组件，鼠标悬浮时就显示清除按钮 [\#1675](https://github.com/youzan/vant/issues/1675)
- van-tabs滑动切换 [\#1669](https://github.com/youzan/vant/issues/1669)

**Improvements**

- \[breaking change\] Sku: no longer support i18n [\#1734](https://github.com/youzan/vant/pull/1734) ([chenjiahan](https://github.com/chenjiahan))
- sku组件增加库存文案和自定义validator的配置 [\#1732](https://github.com/youzan/vant/pull/1732) ([w91](https://github.com/w91))
- \[improvement\] Rate: add readonly prop [\#1731](https://github.com/youzan/vant/pull/1731) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Tab: add scroll event [\#1730](https://github.com/youzan/vant/pull/1730) ([luyi10year](https://github.com/luyi10year))
- \[new feature\] AddressList: support disabled list [\#1729](https://github.com/youzan/vant/pull/1729) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] DatetimePicker: incorrect value when use minMinute [\#1724](https://github.com/youzan/vant/pull/1724) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Swipe: wrong position [\#1723](https://github.com/youzan/vant/pull/1723) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Loading: support any color [\#1717](https://github.com/youzan/vant/pull/1717) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] add object assign transform [\#1713](https://github.com/youzan/vant/pull/1713) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] upgrade to babel 7 [\#1712](https://github.com/youzan/vant/pull/1712) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Tabbar: info not work when use icon slot [\#1705](https://github.com/youzan/vant/pull/1705) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Tab: should not swipe to disabled tab [\#1704](https://github.com/youzan/vant/pull/1704) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] bundle version wrong [\#1703](https://github.com/youzan/vant/pull/1703) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Popup: get-container support selector [\#1699](https://github.com/youzan/vant/pull/1699) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] upgrade to precss 3.0 [\#1696](https://github.com/youzan/vant/pull/1696) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Popup: optimize animation duration [\#1694](https://github.com/youzan/vant/pull/1694) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Contact: upgrade style [\#1693](https://github.com/youzan/vant/pull/1693) ([chenjiahan](https://github.com/chenjiahan))

## [v1.2.1](https://github.com/youzan/vant/tree/v1.2.1) (2018-08-24)
[Full Changelog](https://github.com/youzan/vant/compare/v1.2.0...v1.2.1)

**Breaking changes**

- AddressEdit组件show-delete设置false 和 address-info 冲突 [\#1645](https://github.com/youzan/vant/issues/1645)

**Issue**

- radio显示选中了两个 [\#1683](https://github.com/youzan/vant/issues/1683)
- 请问，搭建完vue-cli项目后安装vant为什么装不了？？ [\#1673](https://github.com/youzan/vant/issues/1673)
- 希望单选组件的选中样式加到外层父级或者给选中的label上也加一个选中类名，这样方便后期给选中字体添加样式，增加单选组件样式的可扩展性 [\#1668](https://github.com/youzan/vant/issues/1668)
- Checkbox 组如何设置全选?? [\#1667](https://github.com/youzan/vant/issues/1667)
- ImagePreview 图片预览中传入配置项无法预览 [\#1666](https://github.com/youzan/vant/issues/1666)
- 一次性导入所有组件的情况下，能定制主题吗？ [\#1663](https://github.com/youzan/vant/issues/1663)
- vant 引入SwipeCell 滑动单元格报错？ [\#1662](https://github.com/youzan/vant/issues/1662)
- 有关vant-tabs使用better-scroll问题 [\#1658](https://github.com/youzan/vant/issues/1658)
- dependencies were not found:  \* vant/lib/swipe-cell  [\#1657](https://github.com/youzan/vant/issues/1657)

**Improvements**

- \[Improvement\] Icon: add class-prefix [\#1688](https://github.com/youzan/vant/pull/1688) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Stepper: value can not be zero [\#1687](https://github.com/youzan/vant/pull/1687) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Tab: custom line color [\#1686](https://github.com/youzan/vant/pull/1686) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] update area document [\#1684](https://github.com/youzan/vant/pull/1684) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] 补全 van-pagination 组件文档中缺少的 total-items 属性和 page-count 属性的说明 [\#1681](https://github.com/youzan/vant/pull/1681) ([Rickykurt](https://github.com/Rickykurt))
- \[Doc\] 修正文档错别字“阙值、阀值”为阈值 [\#1680](https://github.com/youzan/vant/pull/1680) ([Rickykurt](https://github.com/Rickykurt))
- \[Improvement\] Field: update clear icon color [\#1678](https://github.com/youzan/vant/pull/1678) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] ContactEdit: optimize style [\#1677](https://github.com/youzan/vant/pull/1677) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] AddressEdit: optimize style [\#1676](https://github.com/youzan/vant/pull/1676) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] CollapseItem: enhancement, can use like `Cell` [\#1671](https://github.com/youzan/vant/pull/1671) ([Zenser](https://github.com/Zenser))
- \[bugfix\] Icon: fix share icon font-weight [\#1670](https://github.com/youzan/vant/pull/1670) ([chenjiahan](https://github.com/chenjiahan))
- \[bug fix\]Fix `Popup` of setting `getContainer` when the parent component is destroyed and the DOM object is not destroyed [\#1665](https://github.com/youzan/vant/pull/1665) ([lpreterite](https://github.com/lpreterite))
- \[new feature\] Swipe: support custom item width & height [\#1664](https://github.com/youzan/vant/pull/1664) ([xliez](https://github.com/xliez))

## [v1.2.0](https://github.com/youzan/vant/tree/v1.2.0) (2018-08-20)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.16...v1.2.0)

**Issue**

- Vant大佬们,可否再开设几个Vant讨论群好一起交流Vant使用心得 [\#1654](https://github.com/youzan/vant/issues/1654)
- 预览大图不能实现预览指定位置图片 [\#1651](https://github.com/youzan/vant/issues/1651)
- Swipe cell right is not properly styled [\#1650](https://github.com/youzan/vant/issues/1650)
- 需要一个可以设置Radio图标的功能 [\#1647](https://github.com/youzan/vant/issues/1647)
- 用CDN引用vant, Toast无法使用 [\#1646](https://github.com/youzan/vant/issues/1646)

**Improvements**

- \[Improvement\] Icon: add aim [\#1655](https://github.com/youzan/vant/pull/1655) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Area: update province data [\#1653](https://github.com/youzan/vant/pull/1653) ([chenjiahan](https://github.com/chenjiahan))
- \[breaking change\] CellSwipe: rename to SwipeCell [\#1652](https://github.com/youzan/vant/pull/1652) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] fix hot reload [\#1649](https://github.com/youzan/vant/pull/1649) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] AddressEdit: show delete [\#1648](https://github.com/youzan/vant/pull/1648) ([chenjiahan](https://github.com/chenjiahan))
- \[breaking change\] AddressEdit: use camelcase data [\#1644](https://github.com/youzan/vant/pull/1644) ([chenjiahan](https://github.com/chenjiahan))
- \[breaking change\] Coupon: use camelcase data [\#1643](https://github.com/youzan/vant/pull/1643) ([chenjiahan](https://github.com/chenjiahan))

## [v1.1.16](https://github.com/youzan/vant/tree/v1.1.16) (2018-08-10)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.15...v1.1.16)

## [v1.1.15](https://github.com/youzan/vant/tree/v1.1.15) (2018-08-03)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.14...v1.1.15)

## [v1.1.14](https://github.com/youzan/vant/tree/v1.1.14) (2018-07-19)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.13...v1.1.14)

## [v1.1.13](https://github.com/youzan/vant/tree/v1.1.13) (2018-07-13)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.12...v1.1.13)

## [v1.1.12](https://github.com/youzan/vant/tree/v1.1.12) (2018-07-06)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.11...v1.1.12)

## [v1.1.11](https://github.com/youzan/vant/tree/v1.1.11) (2018-07-04)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.10...v1.1.11)

## [v1.1.10](https://github.com/youzan/vant/tree/v1.1.10) (2018-06-28)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.9...v1.1.10)

## [v1.1.9](https://github.com/youzan/vant/tree/v1.1.9) (2018-06-22)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.8...v1.1.9)

## [v1.1.8](https://github.com/youzan/vant/tree/v1.1.8) (2018-06-14)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.7...v1.1.8)

## [v1.1.7](https://github.com/youzan/vant/tree/v1.1.7) (2018-06-06)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.6...v1.1.7)

## [v1.1.6](https://github.com/youzan/vant/tree/v1.1.6) (2018-06-01)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.5...v1.1.6)

## [v1.1.5](https://github.com/youzan/vant/tree/v1.1.5) (2018-05-24)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.4...v1.1.5)

## [v1.1.4](https://github.com/youzan/vant/tree/v1.1.4) (2018-05-18)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.3...v1.1.4)

## [v1.1.3](https://github.com/youzan/vant/tree/v1.1.3) (2018-05-12)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.2...v1.1.3)

## [v1.1.2](https://github.com/youzan/vant/tree/v1.1.2) (2018-05-08)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.1...v1.1.2)

## [v1.1.1](https://github.com/youzan/vant/tree/v1.1.1) (2018-05-04)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.0...v1.1.1)

## [v1.1.0](https://github.com/youzan/vant/tree/v1.1.0) (2018-04-25)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.8...v1.1.0)

## [v1.0.8](https://github.com/youzan/vant/tree/v1.0.8) (2018-04-20)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.7...v1.0.8)

## [v1.0.7](https://github.com/youzan/vant/tree/v1.0.7) (2018-04-17)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.6...v1.0.7)

## [v1.0.6](https://github.com/youzan/vant/tree/v1.0.6) (2018-04-17)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.5...v1.0.6)

## [v1.0.5](https://github.com/youzan/vant/tree/v1.0.5) (2018-04-13)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.4...v1.0.5)

## [v1.0.4](https://github.com/youzan/vant/tree/v1.0.4) (2018-04-10)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.3...v1.0.4)

## [v1.0.3](https://github.com/youzan/vant/tree/v1.0.3) (2018-03-26)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.2...v1.0.3)

## [v1.0.2](https://github.com/youzan/vant/tree/v1.0.2) (2018-03-22)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.1...v1.0.2)

## [v1.0.1](https://github.com/youzan/vant/tree/v1.0.1) (2018-03-19)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.0...v1.0.1)



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*