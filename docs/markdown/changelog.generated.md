## 更新日志

## [v1.1.4](https://github.com/youzan/vant/tree/v1.1.4) (2018-05-18)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.3...v1.1.4)

**Breaking changes**

- van-field 组件添加 label slot [\#1041](https://github.com/youzan/vant/issues/1041)
- AddressEdit组件 点击删除收货地址时弹出的Dialog.confirm只有confirm事件cancel貌似没有ww [\#1035](https://github.com/youzan/vant/issues/1035)
- Toast.loading没有传loading组件的type进去，导致Toast.loading只能用loading的默认样式 [\#1018](https://github.com/youzan/vant/issues/1018)

**Bug Fixes**

- 时间组件默认值初始化不正确 [\#1072](https://github.com/youzan/vant/issues/1072)
- ImagePreview 图片预览组件点击关闭不了bug [\#1043](https://github.com/youzan/vant/issues/1043)

**Issue**

- toast找不到 [\#1096](https://github.com/youzan/vant/issues/1096)
- 省市县三级联动 [\#1090](https://github.com/youzan/vant/issues/1090)
- ImagePreview\(\[  目前只支持打开url，不考虑增加个 src打开base64吗 [\#1088](https://github.com/youzan/vant/issues/1088)
- van-tabs组件1.1.3版本tab个数大于4个时不能横向滚动 [\#1087](https://github.com/youzan/vant/issues/1087)
- \<van-nav-bar 没有做一个attr实现顶部固定的效果嘛？ [\#1081](https://github.com/youzan/vant/issues/1081)
- Tab 标签页并不能通过v-modal来设置选中项，不知道文档是否有问题 [\#1080](https://github.com/youzan/vant/issues/1080)
- 竖向文字轮播 [\#1079](https://github.com/youzan/vant/issues/1079)
- Tab组件中van-tab的宽度问题 [\#1078](https://github.com/youzan/vant/issues/1078)
- Uploader 组件 after-read 无法取得 上传文件名。 [\#1076](https://github.com/youzan/vant/issues/1076)
- 输入框如何自定义icon  [\#1071](https://github.com/youzan/vant/issues/1071)
- vant-doc 里面使用better-scoroll 无法滚动 [\#1070](https://github.com/youzan/vant/issues/1070)
- 时间控件，maxDate和设置的不一致 [\#1069](https://github.com/youzan/vant/issues/1069)
- vue项目中我想调用sku业务逻辑组件的getSkuData\(\)获取当前 skuData怎么调用 [\#1067](https://github.com/youzan/vant/issues/1067)
- \<van-icon 标签color属性设置无效果 [\#1065](https://github.com/youzan/vant/issues/1065)
- sku 商品规格层隐藏后不重置所选参数 [\#1062](https://github.com/youzan/vant/issues/1062)
- 图片预览有没有手势缩放？ [\#1061](https://github.com/youzan/vant/issues/1061)
- 为什么vant 的竖向轮播图没用 [\#1060](https://github.com/youzan/vant/issues/1060)
- sku商品规格怎么修改默认选中？？ [\#1059](https://github.com/youzan/vant/issues/1059)
- 微信中使用van-tabbar，to不起作用 [\#1058](https://github.com/youzan/vant/issues/1058)
- 下拉刷新问题，不知道是不是就是这样的设计？ [\#1057](https://github.com/youzan/vant/issues/1057)
- Sku组件的none\_sku无效 [\#1040](https://github.com/youzan/vant/issues/1040)
- Sku的demo中，initialSku为什么没效果？ [\#1032](https://github.com/youzan/vant/issues/1032)

**Improvements**

- \[Improvement\] Progress: support gradient color [\#1098](https://github.com/youzan/vant/pull/1098) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] DatetimePicker: initial value error \(\#1072\) [\#1093](https://github.com/youzan/vant/pull/1093) ([rex-zsd](https://github.com/rex-zsd))
- \[Improvement\] Field: add left-icon prop [\#1092](https://github.com/youzan/vant/pull/1092) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Icon template [\#1091](https://github.com/youzan/vant/pull/1091) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] add AddressEdit test cases [\#1083](https://github.com/youzan/vant/pull/1083) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] AddressEdit: fit in small screen [\#1082](https://github.com/youzan/vant/pull/1082) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] test coverage should exclude demo [\#1075](https://github.com/youzan/vant/pull/1075) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] GoodsAction: info position [\#1074](https://github.com/youzan/vant/pull/1074) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Cell: support number type title & value [\#1073](https://github.com/youzan/vant/pull/1073) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Reorganize document [\#1066](https://github.com/youzan/vant/pull/1066) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] reduce dev log [\#1063](https://github.com/youzan/vant/pull/1063) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] upgrade to webpack-serve [\#1056](https://github.com/youzan/vant/pull/1056) ([chenjiahan](https://github.com/chenjiahan))
- update dependencies [\#1054](https://github.com/youzan/vant/pull/1054) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Optimize demo test [\#1053](https://github.com/youzan/vant/pull/1053) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Reorganize demos [\#1052](https://github.com/youzan/vant/pull/1052) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Rebuild test system [\#1051](https://github.com/youzan/vant/pull/1051) ([chenjiahan](https://github.com/chenjiahan))

## [v1.1.3](https://github.com/youzan/vant/tree/v1.1.3) (2018-05-12)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.2...v1.1.3)

**Breaking changes**

- Area  [\#1017](https://github.com/youzan/vant/issues/1017)
- Stepper 步进器可以输入小数 [\#944](https://github.com/youzan/vant/issues/944)

**Bug Fixes**

- 在 tab组件中 不同tab下面的内容盒子里面加入轮播组件  第二个轮播脚本出现bug [\#930](https://github.com/youzan/vant/issues/930)

**Issue**

- 优惠券插件 引用后报警告 [\#1044](https://github.com/youzan/vant/issues/1044)
- field 的自定义按钮不能显示 [\#1039](https://github.com/youzan/vant/issues/1039)
- 新人 学习一波 [\#1038](https://github.com/youzan/vant/issues/1038)
- swipe没有点击事件啊 [\#1036](https://github.com/youzan/vant/issues/1036)
- 使用日期组件，type=year-month时，出现异常 [\#1034](https://github.com/youzan/vant/issues/1034)
- 使用日期组件 type=year-month时报错误 Error in mounted hook: "TypeError: Cannot read property 'getFullYear' of undefined" [\#1033](https://github.com/youzan/vant/issues/1033)
-  请问\<icon v-if="icon" :class="b\('left-icon'\)" :name="icon" /\> 这里面的:class="b\('left-icon'\)"是什么用法？哪里有资料可以看 [\#1030](https://github.com/youzan/vant/issues/1030)
- area  [\#1028](https://github.com/youzan/vant/issues/1028)
- \<van-nav-bar title="'标题'"\> [\#1026](https://github.com/youzan/vant/issues/1026)
- 官网文档中关于 “List 列表“ 例子引用缺失。 [\#1024](https://github.com/youzan/vant/issues/1024)
- cell-swipe样式问题 [\#1023](https://github.com/youzan/vant/issues/1023)
- 没有生效 fix Tab should lazy render tab-pane \#978 \(jerryni\) [\#1021](https://github.com/youzan/vant/issues/1021)
- 遍历checkbox之后，点击一个checkbox操作其他的checkbox的true或false 均触发change事件，然后其他checkbox点击没反应 [\#1020](https://github.com/youzan/vant/issues/1020)
- Swipe 轮播 怎么实现点击跳转? [\#1016](https://github.com/youzan/vant/issues/1016)
- slider组件拖拽的时候需要实时获取value的值 [\#1014](https://github.com/youzan/vant/issues/1014)
- Stepper 步进器出现错位 [\#979](https://github.com/youzan/vant/issues/979)
- Sku 商品购买组件中如何添加spu属性\(不会影响到库存和价格的属性\)？ [\#966](https://github.com/youzan/vant/issues/966)

**Improvements**

- \[Doc\] fix demo page [\#1050](https://github.com/youzan/vant/pull/1050) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Toast: add loadingType option [\#1049](https://github.com/youzan/vant/pull/1049) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Field: add label slot [\#1048](https://github.com/youzan/vant/pull/1048) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] AddressEdit: add cancel-delete event [\#1047](https://github.com/youzan/vant/pull/1047) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] ImagePreview: can't be closed when contain single image [\#1046](https://github.com/youzan/vant/pull/1046) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] fix dialog document [\#1045](https://github.com/youzan/vant/pull/1045) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] ImagePreview: optimize click detect [\#1042](https://github.com/youzan/vant/pull/1042) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] NoticeBar: add ref check [\#1037](https://github.com/youzan/vant/pull/1037) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Icon: support color property [\#1031](https://github.com/youzan/vant/pull/1031) ([realywithoutname](https://github.com/realywithoutname))
- \[bugfix\] Cell: default width [\#1029](https://github.com/youzan/vant/pull/1029) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Search: update style [\#1027](https://github.com/youzan/vant/pull/1027) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Icon: update search icon [\#1025](https://github.com/youzan/vant/pull/1025) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] Changelog: fix changelog error [\#1022](https://github.com/youzan/vant/pull/1022) ([cookfront](https://github.com/cookfront))

## [v1.1.2](https://github.com/youzan/vant/tree/v1.1.2) (2018-05-08)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.1...v1.1.2)

**Breaking changes**

- Swipe 如何禁止用户滑动 [\#967](https://github.com/youzan/vant/issues/967)
- 关于组件事件的设计思路 [\#960](https://github.com/youzan/vant/issues/960)
- 请问可以自定义tab line模式下滑动条的宽度并使其居中吗 [\#954](https://github.com/youzan/vant/issues/954)

**Bug Fixes**

- Search 搜索组件 首字显示不全 [\#969](https://github.com/youzan/vant/issues/969)

**Issue**

- 怎么用Checkbox组件实现全选功能 [\#1015](https://github.com/youzan/vant/issues/1015)
- 建议增加属性筛选器 [\#1009](https://github.com/youzan/vant/issues/1009)
- fonts本地化，不起作用啊！ [\#1008](https://github.com/youzan/vant/issues/1008)
- 关于form标签 [\#1006](https://github.com/youzan/vant/issues/1006)
- Cell单元格里面value字段的颜色什么的都不能自定义的吗 [\#1004](https://github.com/youzan/vant/issues/1004)
- Field type=number 报错 Cannot read property 'indexOf' of null [\#1003](https://github.com/youzan/vant/issues/1003)
- Picker多级联动，初始化无法绑定 [\#996](https://github.com/youzan/vant/issues/996)
- type check failed for prop "swipeThreshold" [\#995](https://github.com/youzan/vant/issues/995)
- AddressList默认地址 [\#989](https://github.com/youzan/vant/issues/989)
- swipe组件在nuxt generate下无效果 [\#984](https://github.com/youzan/vant/issues/984)
- 本地构建主题的问题 [\#981](https://github.com/youzan/vant/issues/981)
- 当picker组件和popup组件一起使用的时候,picker的toolbar的bug [\#971](https://github.com/youzan/vant/issues/971)
- list 组件快速划到底部 多次加载 有点问题吧？ [\#963](https://github.com/youzan/vant/issues/963)

**Improvements**

- \[Improvement\] Area: add change event [\#1019](https://github.com/youzan/vant/pull/1019) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] optimize document site [\#1013](https://github.com/youzan/vant/pull/1013) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Locale: add warning when not correctly registered [\#1012](https://github.com/youzan/vant/pull/1012) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Rate: remove dependencie of Array.fill [\#1011](https://github.com/youzan/vant/pull/1011) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Rate: add english document [\#1010](https://github.com/youzan/vant/pull/1010) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Rate: rename component [\#1002](https://github.com/youzan/vant/pull/1002) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] optimize watcher [\#1001](https://github.com/youzan/vant/pull/1001) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Search: should not have cell border [\#1000](https://github.com/youzan/vant/pull/1000) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Button: update border color [\#998](https://github.com/youzan/vant/pull/998) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Stepper: update disabled style [\#997](https://github.com/youzan/vant/pull/997) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] update slogan [\#993](https://github.com/youzan/vant/pull/993) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Stepper: integer wrong spelling [\#992](https://github.com/youzan/vant/pull/992) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] remove Accepted Values [\#991](https://github.com/youzan/vant/pull/991) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] remove Accepted Values [\#990](https://github.com/youzan/vant/pull/990) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Tab: should lazy render tab-pane [\#978](https://github.com/youzan/vant/pull/978) ([jerryni](https://github.com/jerryni))
- \[new feature\] add StarRate component [\#901](https://github.com/youzan/vant/pull/901) ([Tinysymphony](https://github.com/Tinysymphony))

## [v1.1.1](https://github.com/youzan/vant/tree/v1.1.1) (2018-05-04)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.0...v1.1.1)

**Bug Fixes**

- dialog ts error [\#917](https://github.com/youzan/vant/issues/917)
- popup 重大bug [\#911](https://github.com/youzan/vant/issues/911)
- van-uploader弹出选择图片，点击完图片没有反应 [\#910](https://github.com/youzan/vant/issues/910)
- picker 选择器在IOS设备上选中偏移 [\#907](https://github.com/youzan/vant/issues/907)

**Issue**

- dialog的高级用法能不能给一个完整的实例,文档看的一脸懵逼 [\#987](https://github.com/youzan/vant/issues/987)
- mpvue 中引入 vant 不生效 [\#983](https://github.com/youzan/vant/issues/983)
- AddressEdit 地址编辑 默认收件地区 [\#982](https://github.com/youzan/vant/issues/982)
- List组件的一个BUG [\#976](https://github.com/youzan/vant/issues/976)
- tab标签页，滑动切换 怎么监听滑动切换的事件 ， 比如滑动到了第几个模块， 有没有相应的事件？ [\#973](https://github.com/youzan/vant/issues/973)
- GoodsAction 商品页行动点 bug问题 [\#964](https://github.com/youzan/vant/issues/964)
- iPhoneX路由带参跳转需要按两遍以上才能跳转 [\#962](https://github.com/youzan/vant/issues/962)
- van-address-edit 里的省市区不能绑定值，每次都要重选 [\#961](https://github.com/youzan/vant/issues/961)
- List 选项卡切换后 无法加载 [\#959](https://github.com/youzan/vant/issues/959)
- 请问是否可以自定义swiper的宽度？ [\#958](https://github.com/youzan/vant/issues/958)
- 为什的组件的css不能写在.vue文件里面？ [\#957](https://github.com/youzan/vant/issues/957)
- 你好，我打算用这个也淘宝的flexible，做适配，vue项目，但是这个应该怎么适配呢 [\#955](https://github.com/youzan/vant/issues/955)
- 打包和按需加载的实现 [\#953](https://github.com/youzan/vant/issues/953)
- 请问search组件打开键盘的时候如何默认数字键 [\#952](https://github.com/youzan/vant/issues/952)
- 建议加入下拉组件 [\#950](https://github.com/youzan/vant/issues/950)
- 与vw适配不兼容 [\#949](https://github.com/youzan/vant/issues/949)
- list 的loading text 加载中 文字如何设置 ？ [\#947](https://github.com/youzan/vant/issues/947)
- 希望增加一个类似微信朋友圈的“全文、收起”的组件 [\#946](https://github.com/youzan/vant/issues/946)
- picker多列联动，获取数据后再绑定出错 [\#945](https://github.com/youzan/vant/issues/945)
- Coupon组件超过屏幕高度的时候不会出现滚动条 [\#943](https://github.com/youzan/vant/issues/943)
- slider 2个重大BUG。 [\#942](https://github.com/youzan/vant/issues/942)
-  CouponList组件disabled-doupons参数无效 [\#939](https://github.com/youzan/vant/issues/939)
- list组件load重复加载问题 [\#933](https://github.com/youzan/vant/issues/933)
- PullRefresh 触发机制 [\#922](https://github.com/youzan/vant/issues/922)

**Improvements**

- \[Improvement\] Tab: add line-width prop [\#988](https://github.com/youzan/vant/pull/988) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] ImagePreview: remove unused code [\#986](https://github.com/youzan/vant/pull/986) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Swipe: optimzie performance [\#985](https://github.com/youzan/vant/pull/985) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] ImagePreview offset empty [\#980](https://github.com/youzan/vant/pull/980) ([jerryni](https://github.com/jerryni))
- \[Improvement\] Slider: expand touch area [\#977](https://github.com/youzan/vant/pull/977) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Swipe: add touchable prop [\#975](https://github.com/youzan/vant/pull/975) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Search: incomplete text display in iOS [\#974](https://github.com/youzan/vant/pull/974) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Contact: optimize background image [\#972](https://github.com/youzan/vant/pull/972) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] fixed a bug in picker doc [\#970](https://github.com/youzan/vant/pull/970) ([Plortinus](https://github.com/Plortinus))
- \[Improvement\] Stepper: add interger prop [\#951](https://github.com/youzan/vant/pull/951) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] List: loading-text support [\#948](https://github.com/youzan/vant/pull/948) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] \#734 swipe组件支持垂直滚动 [\#938](https://github.com/youzan/vant/pull/938) ([jerryni](https://github.com/jerryni))

## [v1.1.0](https://github.com/youzan/vant/tree/v1.1.0) (2018-04-25)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.8...v1.1.0)

**Bug Fixes**

- Field组件不支持负数 [\#884](https://github.com/youzan/vant/issues/884)

**Issue**

- swiper-item 加了页面跳转事件或者a 标签，swiper 组件中含 swipe-item 滑动时，会触发页面跳转，在ios 中会出现 [\#940](https://github.com/youzan/vant/issues/940)
- van-datetime-picker选项高度item-height设置不生效 [\#935](https://github.com/youzan/vant/issues/935)
- rem还没解决方案吗，可以提供些思路怎么快速解决 [\#931](https://github.com/youzan/vant/issues/931)
- 按需引入DatetimePicker组件时出现错误 [\#925](https://github.com/youzan/vant/issues/925)
- col not work [\#923](https://github.com/youzan/vant/issues/923)
- 可以实现夜间模式嘛？能不能给个思路吗？ [\#914](https://github.com/youzan/vant/issues/914)
- 在Google Chrome 67.0.3396.10版本（32位）下Button按钮没有点击效果 [\#908](https://github.com/youzan/vant/issues/908)
- 运行 npm run test 或 npm run test:watch 报错 [\#906](https://github.com/youzan/vant/issues/906)
- 本地开发vant 需要清空yarn.lock 再yarn  [\#905](https://github.com/youzan/vant/issues/905)
- radio组件没有挂载 [\#900](https://github.com/youzan/vant/issues/900)
- 请问怎么监听sku 规格选项发生变化 [\#899](https://github.com/youzan/vant/issues/899)
- 请问PopUP overlay-style 如何赋值。 [\#896](https://github.com/youzan/vant/issues/896)
- sku在部分手机出现了两遍 [\#895](https://github.com/youzan/vant/issues/895)
- sku组件提供的getSkuData\(\)方法，应该如何使用，希望能在文档上加个例子 [\#882](https://github.com/youzan/vant/issues/882)

**Improvements**

- \[Doc\] Loading: remove circle type from document [\#941](https://github.com/youzan/vant/pull/941) ([chenjiahan](https://github.com/chenjiahan))
- \[build\] upgrade vue-loader@15 [\#937](https://github.com/youzan/vant/pull/937) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] use MiniCssExtractPlugin instead of ExtractTextPlugin [\#936](https://github.com/youzan/vant/pull/936) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] use bem mixin [\#934](https://github.com/youzan/vant/pull/934) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] more component use bem mixin [\#932](https://github.com/youzan/vant/pull/932) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Uploader: can not upload pic in android [\#929](https://github.com/youzan/vant/pull/929) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] add rem guide [\#928](https://github.com/youzan/vant/pull/928) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Panel: use cell instead of extra style [\#927](https://github.com/youzan/vant/pull/927) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] add sideEffects config for webpack 4 [\#926](https://github.com/youzan/vant/pull/926) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] more component use bem mixin [\#924](https://github.com/youzan/vant/pull/924) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] component use bem mixin [\#921](https://github.com/youzan/vant/pull/921) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Checkbox: should not render label when label is empty [\#920](https://github.com/youzan/vant/pull/920) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Cell: optimize flex layout [\#919](https://github.com/youzan/vant/pull/919) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Dialog: type define error [\#918](https://github.com/youzan/vant/pull/918) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Picker: text adjust may cause option wrong offset [\#916](https://github.com/youzan/vant/pull/916) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Slider: add step & bar-height prop [\#915](https://github.com/youzan/vant/pull/915) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] use ChromeHeadless instead of PhantomJS to run test cases [\#913](https://github.com/youzan/vant/pull/913) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Popup: should remove touch event listener when distroyed [\#912](https://github.com/youzan/vant/pull/912) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] add BEM helper mixin [\#904](https://github.com/youzan/vant/pull/904) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] fix Radio document [\#903](https://github.com/youzan/vant/pull/903) ([jerryni](https://github.com/jerryni))
- \[new component\] add Slider component  \#721 [\#897](https://github.com/youzan/vant/pull/897) ([jerryni](https://github.com/jerryni))

## [v1.0.8](https://github.com/youzan/vant/tree/v1.0.8) (2018-04-20)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.7...v1.0.8)

**Issue**

- Uploader 图片上传组件存在BUG，同时使用:before-read，:after-read参数，后者不触发 [\#898](https://github.com/youzan/vant/issues/898)
- sku 组件 sku数据key值只能是tree，list，k，v么？ [\#894](https://github.com/youzan/vant/issues/894)
- 希望form里面增加一个select的组件 [\#892](https://github.com/youzan/vant/issues/892)
- 通过script方式引入，如何调用类似于图片预览的方法？ [\#890](https://github.com/youzan/vant/issues/890)
- tab的v-model无效? [\#888](https://github.com/youzan/vant/issues/888)
- 2级联动 Picker，Columns 数据是 key-value 格式的可以支持吗 [\#887](https://github.com/youzan/vant/issues/887)
- Contact 联系人组件是否有考虑增加一个  地址 类型？ [\#886](https://github.com/youzan/vant/issues/886)

**Improvements**

- \[Improvement\] Cell: optimize left icon [\#893](https://github.com/youzan/vant/pull/893) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Popup: fix lock scroll [\#891](https://github.com/youzan/vant/pull/891) ([Tinysymphony](https://github.com/Tinysymphony))
- \[bugfix\] Field: allow negative number when type is number [\#889](https://github.com/youzan/vant/pull/889) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Build: should use babel sync compile [\#885](https://github.com/youzan/vant/pull/885) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] add git hook, optimize dev process [\#883](https://github.com/youzan/vant/pull/883) ([jerryni](https://github.com/jerryni))

## [v1.0.7](https://github.com/youzan/vant/tree/v1.0.7) (2018-04-17)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.6...v1.0.7)

## [v1.0.6](https://github.com/youzan/vant/tree/v1.0.6) (2018-04-17)
[Full Changelog](https://github.com/youzan/vant/compare/v1.0.5...v1.0.6)

**Improvements**

- \[Improvement\] Dialog: add before-close prop [\#881](https://github.com/youzan/vant/pull/881) ([chenjiahan](https://github.com/chenjiahan))

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