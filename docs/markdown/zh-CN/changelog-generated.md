## 更新日志

## [v1.0.5](https://github.com/youzan/vant/tree/v1.0.5) (2018-04-13)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.4...v1.0.5)

**Issue**

- 移动端适配的问题,  我看单位用的是px, 那这样的话我们本身基于rem做的适配是不是对组件就没有效果了 [\#859](https://github.com/youzan/vant/issues/859)
- NavBar @click-left默认没有返回上一页Event么 每个页面需要自己添加Event么 [\#851](https://github.com/youzan/vant/issues/851)
- 部分样式无法覆盖 ，现项目中有些细节需要修改样式表 我是在vue文件里覆盖修改的 但是有些可以覆盖有效 有些覆盖无效 [\#847](https://github.com/youzan/vant/issues/847)
- 标签页切换后导致左边tab标签页的分页方法失效，求大神解答。 [\#843](https://github.com/youzan/vant/issues/843)
- 在使用sku弹层的时候  van-sku-row的高度会被设置的rem影响 [\#839](https://github.com/youzan/vant/issues/839)
- List 列表 瀑布流滚动加载 [\#834](https://github.com/youzan/vant/issues/834)
- Bug：Popup弹出层 滚动穿透至父层 [\#833](https://github.com/youzan/vant/issues/833)

**Improvements**

- \[Improvement\] add touch mixin [\#869](https://github.com/youzan/vant/pull/869) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] NavBar: limit title max width [\#867](https://github.com/youzan/vant/pull/867) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] CellSwipe: only trigger swipe when drag horizontally [\#866](https://github.com/youzan/vant/pull/866) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] ImagePreview: manually close not work [\#864](https://github.com/youzan/vant/pull/864) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Radio: name support any types [\#863](https://github.com/youzan/vant/pull/863) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Button: vertical align incorrect when loading [\#858](https://github.com/youzan/vant/pull/858) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] SubmitBar: inherit wrong font size [\#857](https://github.com/youzan/vant/pull/857) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] SwitchCell: text vertical align [\#852](https://github.com/youzan/vant/pull/852) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Swipe: stop touch event propagation [\#846](https://github.com/youzan/vant/pull/846) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] support Number type info [\#845](https://github.com/youzan/vant/pull/845) ([chenjiahan](https://github.com/chenjiahan))

## [v1.0.4](https://github.com/youzan/vant/tree/v1.0.4) (2018-04-10)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.3...v1.0.4)

**Issue**

- 单独调用Dialog.close\(\)或者在vue里调用this.$dialog.close\(\)方法会报错 [\#837](https://github.com/youzan/vant/issues/837)
- waterfall异步加载问题 [\#835](https://github.com/youzan/vant/issues/835)
- picker组件 在单列情况下 如何设置默认值？ [\#832](https://github.com/youzan/vant/issues/832)
- AddressEdit 地址编辑 cdn引用方式使用有问题 [\#831](https://github.com/youzan/vant/issues/831)
- 通过cdn形式使用时，bug太多 [\#830](https://github.com/youzan/vant/issues/830)
- Stepper 按钮怎么阻止冒泡 [\#829](https://github.com/youzan/vant/issues/829)
- area.json 数据  215090 没有父节点 [\#827](https://github.com/youzan/vant/issues/827)
- van-filed 组件的 button slot 无效。 [\#826](https://github.com/youzan/vant/issues/826)
- picker 组件 单列情况下 defaultIndex 参数不生效 [\#825](https://github.com/youzan/vant/issues/825)
- 希望DatetimePicker的type能够更灵活一点 [\#824](https://github.com/youzan/vant/issues/824)
- van-field中使用type="date"无效 [\#823](https://github.com/youzan/vant/issues/823)
- Uploader 图片上传  的属性disable  资料有误！ [\#822](https://github.com/youzan/vant/issues/822)
- used vue-lazyload? [\#821](https://github.com/youzan/vant/issues/821)
- Dialog使用中产生的问题 [\#819](https://github.com/youzan/vant/issues/819)
- 关于修改控件默认样式及尺寸的问题 [\#816](https://github.com/youzan/vant/issues/816)
- 急急急！！Popup在安卓手机上出现严重问题 [\#815](https://github.com/youzan/vant/issues/815)
- 当有一个van-popup组件弹出时，如果再触发toast组件 弹出提示 [\#814](https://github.com/youzan/vant/issues/814)
- van-tabs 组件点击事件第二个title参数显示undefined [\#813](https://github.com/youzan/vant/issues/813)
- Radio与Cell组件一起使用时和示例的样式不一样，不知道时候需要手动重新设置样式？ [\#811](https://github.com/youzan/vant/issues/811)
- 使用CDN时cell组件的bug [\#810](https://github.com/youzan/vant/issues/810)
- 希望能出一个视频播放组件 [\#809](https://github.com/youzan/vant/issues/809)
- 地址编辑 收取不到地区数据 [\#808](https://github.com/youzan/vant/issues/808)
- 关于checkbox [\#807](https://github.com/youzan/vant/issues/807)
- 如何点击tab时如何更换title旁的小图标 使当前点击状态的小图标与非点击时小图标不一样   [\#806](https://github.com/youzan/vant/issues/806)
- Cell组件为什么不开放value的slot？ [\#805](https://github.com/youzan/vant/issues/805)
- Tab 标签页  里面添加sticky属性页面滑到一半切换不见了 [\#804](https://github.com/youzan/vant/issues/804)
- 布局都是PX，没有用rem。 [\#803](https://github.com/youzan/vant/issues/803)
- NumberKeyboard组件能给一个配合输入框使用的demo吗？考虑到阻止虚拟键盘之类的 [\#802](https://github.com/youzan/vant/issues/802)
- tab 标签页 [\#801](https://github.com/youzan/vant/issues/801)
- 外联引用vant，\<van-cell-group\>组件渲染出错 [\#800](https://github.com/youzan/vant/issues/800)
- 关于文档中 Badge 与 Cell 的引入问题 [\#797](https://github.com/youzan/vant/issues/797)
- Actionsheet组件应有一个取消按钮事件，以便于处理一些额外逻辑 [\#795](https://github.com/youzan/vant/issues/795)
- area 控件设置value会出现问题，我设置了350104 [\#794](https://github.com/youzan/vant/issues/794)
- 关于 vant 样式适配 [\#793](https://github.com/youzan/vant/issues/793)
- vant 的标签 \<van-button/\> 的click属性不好用 [\#792](https://github.com/youzan/vant/issues/792)
- Circle 组件能否对中间内容提供slot支持 [\#791](https://github.com/youzan/vant/issues/791)
- Dont import base css when use babel-plugin-import [\#790](https://github.com/youzan/vant/issues/790)
- collapse折叠面板不设置accordion时报错Error in render: "TypeError: activeNames.some is not a function" [\#789](https://github.com/youzan/vant/issues/789)
- 为什么无法修改 tabs的样式 [\#787](https://github.com/youzan/vant/issues/787)
- 定制主题几点疑惑 [\#786](https://github.com/youzan/vant/issues/786)
- 移动端适配 [\#785](https://github.com/youzan/vant/issues/785)
- Icon组件在iphone6：Safari 无法看见,希望改善一下兼容性 [\#784](https://github.com/youzan/vant/issues/784)
- lazyload里面的options是什么？ [\#780](https://github.com/youzan/vant/issues/780)
- 省市区选择组件，点击确认后我咋能拿到选中的城市啊？谁知道赛？ [\#778](https://github.com/youzan/vant/issues/778)
- Error in render: "TypeError: Cannot read property 'undefined' of undefined" [\#776](https://github.com/youzan/vant/issues/776)
- collapse的一些问题，vant版本是0.12.3 [\#775](https://github.com/youzan/vant/issues/775)
- Toast.clear\(\); 后背景蒙层依然存在 [\#767](https://github.com/youzan/vant/issues/767)
- nuxt配置base.css引入报错 [\#765](https://github.com/youzan/vant/issues/765)
- 希望Field组件能像mint-ui里面的Field直接在innerHtml里面加组件来显示验证码或者发送验证码的按钮 [\#760](https://github.com/youzan/vant/issues/760)
- picker和area建议 [\#756](https://github.com/youzan/vant/issues/756)

**Improvements**

- \[bugfix\] Popup: lock-scroll not work when open multi popup [\#842](https://github.com/youzan/vant/pull/842) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Dialog: close method may cause error [\#841](https://github.com/youzan/vant/pull/841) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Sku: van-sku-row font-size [\#840](https://github.com/youzan/vant/pull/840) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] fix documentation error [\#828](https://github.com/youzan/vant/pull/828) ([cookfront](https://github.com/cookfront))
-  \[bug fix\]submit-bar: Decimal rounding [\#820](https://github.com/youzan/vant/pull/820) ([ddchef](https://github.com/ddchef))
- \[locate\] add zh-HK [\#812](https://github.com/youzan/vant/pull/812) ([jasonc08](https://github.com/jasonc08))
- \[Doc\] Circle [\#799](https://github.com/youzan/vant/pull/799) ([cookfront](https://github.com/cookfront))
- \[Doc\] Badge [\#798](https://github.com/youzan/vant/pull/798) ([cookfront](https://github.com/cookfront))
- \[improvement\] Actionsheet: add cancel event [\#796](https://github.com/youzan/vant/pull/796) ([cookfront](https://github.com/cookfront))
- \[Improvement\] DatetimePicker: support all picker props [\#788](https://github.com/youzan/vant/pull/788) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] optimize find parent mixin [\#781](https://github.com/youzan/vant/pull/781) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Button: should be unclickavble when loading [\#779](https://github.com/youzan/vant/pull/779) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Actionsheet: support maxHeight [\#777](https://github.com/youzan/vant/pull/777) ([iscarecrow](https://github.com/iscarecrow))
- \[Improvement\] SubmitBar: adjsut font-size [\#774](https://github.com/youzan/vant/pull/774) ([chenjiahan](https://github.com/chenjiahan))

## [v1.0.3](https://github.com/youzan/vant/tree/v1.0.3) (2018-03-26)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.2...v1.0.3)

**Issue**

- 优惠券选择器，优惠券多的话，超出屏幕无法拖动 [\#769](https://github.com/youzan/vant/issues/769)
- sku组件，在ios上面输入购买数量软键盘抬起的时候，有横向滚动条，希望给个解决思路 [\#768](https://github.com/youzan/vant/issues/768)
- 能否增加表单校验？ [\#764](https://github.com/youzan/vant/issues/764)
- 希望加个滚动组件，类似于iscroll [\#763](https://github.com/youzan/vant/issues/763)
- 关于Tab组件的点击事件 [\#758](https://github.com/youzan/vant/issues/758)
- 定制主题  本地编译的时候报错 [\#755](https://github.com/youzan/vant/issues/755)
- area 组件导入官方给mock的城市列表报错 [\#753](https://github.com/youzan/vant/issues/753)
- Use babel-plugin-import报错 [\#750](https://github.com/youzan/vant/issues/750)
- 只有下拉加载 有没有上拉加载组件呢？ [\#746](https://github.com/youzan/vant/issues/746)
- 编辑地址时，不能默认地址v1.0.1，上个版本还是可以的 [\#743](https://github.com/youzan/vant/issues/743)
- 「只有一个sku规格值时默认选中」逻辑问题 [\#738](https://github.com/youzan/vant/issues/738)
- 我想进微信交流群 [\#729](https://github.com/youzan/vant/issues/729)
- Toast组件实例化时mask先是显示header下面 然后再覆盖整个屏幕 [\#726](https://github.com/youzan/vant/issues/726)

**Improvements**

- \[bugfix\] Tag: text line height in android browser [\#773](https://github.com/youzan/vant/pull/773) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Field: add button slot [\#772](https://github.com/youzan/vant/pull/772) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Cell: add center prop [\#771](https://github.com/youzan/vant/pull/771) ([chenjiahan](https://github.com/chenjiahan))
-  \[Improvement\] Cell: update to flex-box [\#770](https://github.com/youzan/vant/pull/770) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] fix picker demo [\#766](https://github.com/youzan/vant/pull/766) ([erniu](https://github.com/erniu))
- \[bugfix\] Toast: mask not remove when hidden [\#762](https://github.com/youzan/vant/pull/762) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Tab: click event add title param [\#761](https://github.com/youzan/vant/pull/761) ([chenjiahan](https://github.com/chenjiahan))

## [v1.0.2](https://github.com/youzan/vant/tree/v1.0.2) (2018-03-22)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.1...v1.0.2)

**Issue**

- Checkbox组件change事件触发不了 [\#745](https://github.com/youzan/vant/issues/745)
- Tabs组件，swipeable属性问题 [\#741](https://github.com/youzan/vant/issues/741)
- List 列表加载更多问题 [\#735](https://github.com/youzan/vant/issues/735)
- 按照文档中的来，图标引入出错 [\#731](https://github.com/youzan/vant/issues/731)
- Collapse 还是不能用 [\#730](https://github.com/youzan/vant/issues/730)
- 使用Tabbar组件时自定义图标，通过webpack工具如何使用本地路径？ [\#727](https://github.com/youzan/vant/issues/727)

**Improvements**

- \[Doc\] add custom Icon directions [\#754](https://github.com/youzan/vant/pull/754) ([qianzhaoy](https://github.com/qianzhaoy))
- \[bugfix\] 修复sku默认选中逻辑与sku是否选中的判断逻辑 [\#752](https://github.com/youzan/vant/pull/752) ([w91](https://github.com/w91))
- \[bugfix\] List: should not trigger load event when hidden [\#751](https://github.com/youzan/vant/pull/751) ([chenjiahan](https://github.com/chenjiahan))
- \[bug fix\] Tabs: fix tab content not trigger click event [\#749](https://github.com/youzan/vant/pull/749) ([cookfront](https://github.com/cookfront))
- \[bugfix\] AddressEdit: should auto select area when created [\#748](https://github.com/youzan/vant/pull/748) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] DatetimePicker: improve documentation [\#747](https://github.com/youzan/vant/pull/747) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] NavBar: remove top border [\#744](https://github.com/youzan/vant/pull/744) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Toast: overlay blocked by other element [\#740](https://github.com/youzan/vant/pull/740) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] fix component link URL [\#739](https://github.com/youzan/vant/pull/739) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] NoticeBar:Adjust padding [\#737](https://github.com/youzan/vant/pull/737) ([skylinety](https://github.com/skylinety))
- Feature/new type and show toolbar timepicker [\#736](https://github.com/youzan/vant/pull/736) ([zz1211](https://github.com/zz1211))

## [v1.0.1](https://github.com/youzan/vant/tree/v1.0.1) (2018-03-19)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.0...v1.0.1)

**Issue**

- Tabs 标签组件 滑动切换问题 [\#725](https://github.com/youzan/vant/issues/725)
- 在引入Toast后没使用会页面上会出现一个黑块 [\#724](https://github.com/youzan/vant/issues/724)
- 在使用vant时,首次加载页面时组件尺寸大小正常,再次刷新后组件尺寸缩小 [\#717](https://github.com/youzan/vant/issues/717)
- 请问AddressEdit 地址编辑 里如何显示删除操作呢？ [\#715](https://github.com/youzan/vant/issues/715)
- \[共享\]贴出城市数据放置位置，方便大家寻找 \(https://github.com/youzan/vant/blob/dev/docs/demos/mock/area.js\)   [\#714](https://github.com/youzan/vant/issues/714)
- 为什么Collapse报错了 [\#710](https://github.com/youzan/vant/issues/710)
- 按照官方文档写show-action为什么会报错 [\#707](https://github.com/youzan/vant/issues/707)
- Field 组件高度自适应建议加入一个限制最高高度 [\#702](https://github.com/youzan/vant/issues/702)
- 文档有一处错误，建议修改 [\#699](https://github.com/youzan/vant/issues/699)
- feature request： PullRefresh 的效果支持手动触发 [\#681](https://github.com/youzan/vant/issues/681)

**Improvements**

- \[bugfix\] module circular dependency [\#728](https://github.com/youzan/vant/pull/728) ([chenjiahan](https://github.com/chenjiahan))



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*