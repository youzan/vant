## 更新日志

## [v1.1.7](https://github.com/youzan/vant/tree/v1.1.7) (2018-06-06)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.6...v1.1.7)

**Breaking changes**

- 可以将picker中的v-text改为v-html吗 [\#1155](https://github.com/youzan/vant/issues/1155)

**Bug Fixes**

- Popup 嵌套 AddressEdit 背景蒙层问题 [\#1203](https://github.com/youzan/vant/issues/1203)
- van-tab title slot 绑定数据更新异常 [\#1170](https://github.com/youzan/vant/issues/1170)

**Issue**

- \[eslint-plugin-vue\] \[vue/require-v-for-key\] Elements in iteration expect to have 'v-bind:key' directives. [\#1228](https://github.com/youzan/vant/issues/1228)
- image-preview不能直接用吗？ carousel 走马灯的效果 [\#1225](https://github.com/youzan/vant/issues/1225)
- Tab与List一起使用时，点击Tab后， list 会一直执行load事件 [\#1217](https://github.com/youzan/vant/issues/1217)
- Stepper 如果存在于checkbox中 会存在click事件冒泡 [\#1216](https://github.com/youzan/vant/issues/1216)
- Sku是否可以自定义数据格式 [\#1152](https://github.com/youzan/vant/issues/1152)

**Improvements**

- \[Improvement\] Dialog: optimize style without content [\#1233](https://github.com/youzan/vant/pull/1233) ([chenjiahan](https://github.com/chenjiahan))
- \[Test\] optimize async cases [\#1232](https://github.com/youzan/vant/pull/1232) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] add babel-eslint [\#1231](https://github.com/youzan/vant/pull/1231) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] ts import plugin [\#1230](https://github.com/youzan/vant/pull/1230) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Dialog: support custom className [\#1224](https://github.com/youzan/vant/pull/1224) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Swipe: add swipeTo method [\#1222](https://github.com/youzan/vant/pull/1222) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Field: support v-model.number [\#1221](https://github.com/youzan/vant/pull/1221) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] add version tip [\#1219](https://github.com/youzan/vant/pull/1219) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Test: separate jest config from packages.json [\#1218](https://github.com/youzan/vant/pull/1218) ([chenjiahan](https://github.com/chenjiahan))

## [v1.1.6](https://github.com/youzan/vant/tree/v1.1.6) (2018-06-01)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.5...v1.1.6)

**Breaking changes**

- 在van-pull-refresh内通过组件形式来调用 Dialog，dialog内容显示异常 [\#1171](https://github.com/youzan/vant/issues/1171)
- treeSelect的active-id参数类型校验建议不要限制为Number [\#1120](https://github.com/youzan/vant/issues/1120)
- 是否可以再优化下van-progress组件，谢谢 [\#1111](https://github.com/youzan/vant/issues/1111)
- 自定义数字键盘没有完成按钮的点击事件 [\#1110](https://github.com/youzan/vant/issues/1110)
- Rate评分组件可否出一个change event 返回改变后的数值 [\#1099](https://github.com/youzan/vant/issues/1099)
- popup弹出内容区不能放轮播组件？？？？ [\#1085](https://github.com/youzan/vant/issues/1085)

**Bug Fixes**

- 行动按钮 弹出层上面  使用请提示toast，在禁止背景点击的时候会出现 遮罩层关闭 [\#1116](https://github.com/youzan/vant/issues/1116)

**Issue**

- NoticeBar 通告栏能不能上下滚动? [\#1210](https://github.com/youzan/vant/issues/1210)
- Dialog确认按钮无法弹出,只有挂载在原型链的可以用 [\#1209](https://github.com/youzan/vant/issues/1209)
- rate的change事件 [\#1208](https://github.com/youzan/vant/issues/1208)
- Dialog注册不正确的报错提示 [\#1207](https://github.com/youzan/vant/issues/1207)
- TreeSelect 分类选择  [\#1206](https://github.com/youzan/vant/issues/1206)
- 轮播图不能纵向轮播 [\#1205](https://github.com/youzan/vant/issues/1205)
- 将vant引入mpvue框架，组件并没有渲染出来 [\#1204](https://github.com/youzan/vant/issues/1204)
- radio 单选，在safari浏览器\(包含苹果手机微信\)下显示不正常 [\#1199](https://github.com/youzan/vant/issues/1199)
- van-pull-refresh下拉刷新标签有个问题 [\#1196](https://github.com/youzan/vant/issues/1196)
- Stepper 步进器 多次触发事件 [\#1190](https://github.com/youzan/vant/issues/1190)
- swipe组件滑动时会触发item内的点击事件 [\#1186](https://github.com/youzan/vant/issues/1186)
- 为什么用在iphone5和ipad上 样式就崩了 [\#1185](https://github.com/youzan/vant/issues/1185)
- 设计稿是750px，根元素应该设置75，但是vant转换后好小，要改成35才行 [\#1181](https://github.com/youzan/vant/issues/1181)
- Stepper 组件不能输入后直接变成最大值默认值 [\#1180](https://github.com/youzan/vant/issues/1180)
- List组件按照官方的示例，初始化的时候就默认把所有页都加载了 [\#1179](https://github.com/youzan/vant/issues/1179)
- 下拉组件与浏览器页面滚动有冲突 [\#1178](https://github.com/youzan/vant/issues/1178)
- Vant-demo 404 [\#1175](https://github.com/youzan/vant/issues/1175)
- vant tab active 绑定无效 [\#1173](https://github.com/youzan/vant/issues/1173)
- rate 评分组件 [\#1172](https://github.com/youzan/vant/issues/1172)
- vant  checkbox 能否有多个触发机制 [\#1165](https://github.com/youzan/vant/issues/1165)
- Field  输入框左边怎样加图标 [\#1164](https://github.com/youzan/vant/issues/1164)
- \[Feature Request\] Popup组件右滑关闭 [\#1162](https://github.com/youzan/vant/issues/1162)
- 我是直接CDN引入开发。 [\#1161](https://github.com/youzan/vant/issues/1161)
- List组件在滚动到中间区域时，重置数据源时会触发两次load事件 [\#1160](https://github.com/youzan/vant/issues/1160)
- 复选框和步进器共用问题 [\#1159](https://github.com/youzan/vant/issues/1159)
- 步进器输入框大小偏小 [\#1158](https://github.com/youzan/vant/issues/1158)
- swipe item内的点击事件会在滑动时触发 [\#1153](https://github.com/youzan/vant/issues/1153)
- Tab 和 List 组件一起使用时，List 组件 onscroll 事件同时触发 [\#1151](https://github.com/youzan/vant/issues/1151)
- vant添加下拉刷新组件后Tab组件无法吸顶 [\#1146](https://github.com/youzan/vant/issues/1146)
- AddressList 地址列表 组件 前面的radio是否设置可以选？ [\#1144](https://github.com/youzan/vant/issues/1144)
- vant-list 计算高度的公式有歧义. [\#1140](https://github.com/youzan/vant/issues/1140)
- van-swipe bug [\#1132](https://github.com/youzan/vant/issues/1132)
- 添加“点赞”图标，实心和空心 [\#1121](https://github.com/youzan/vant/issues/1121)
- rem布局很多组建样式都乱了 [\#1118](https://github.com/youzan/vant/issues/1118)
- AddressEdit 没有onChange事件，希望能尽快增加上， [\#1114](https://github.com/youzan/vant/issues/1114)
- IOS操作系统使用AddressEdit时键盘挡住了输入框 [\#1089](https://github.com/youzan/vant/issues/1089)

**Improvements**

- \[Improvement\] upgrade to jest-serializer-vue@2.0 [\#1215](https://github.com/youzan/vant/pull/1215) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Picker: suppot html option [\#1213](https://github.com/youzan/vant/pull/1213) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Tab: title slot render [\#1212](https://github.com/youzan/vant/pull/1212) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] AddressEdit: area popup should mount in document root [\#1211](https://github.com/youzan/vant/pull/1211) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Switch: add test cases [\#1202](https://github.com/youzan/vant/pull/1202) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Checkbox: add test cases [\#1201](https://github.com/youzan/vant/pull/1201) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Search: add test cases [\#1200](https://github.com/youzan/vant/pull/1200) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] ImagePreview: add test cases [\#1198](https://github.com/youzan/vant/pull/1198) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Stepper: add test cases [\#1197](https://github.com/youzan/vant/pull/1197) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Contact: add test cases [\#1195](https://github.com/youzan/vant/pull/1195) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Collapse: add test cases [\#1194](https://github.com/youzan/vant/pull/1194) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] CellSwipe: add test cases [\#1193](https://github.com/youzan/vant/pull/1193) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Slider: add test cases [\#1192](https://github.com/youzan/vant/pull/1192) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] List: add test cases [\#1191](https://github.com/youzan/vant/pull/1191) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] PullRefresh: add test cases [\#1189](https://github.com/youzan/vant/pull/1189) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Uploader add test cases [\#1188](https://github.com/youzan/vant/pull/1188) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] improve quickstart [\#1187](https://github.com/youzan/vant/pull/1187) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] SubmitBar: optimize render [\#1184](https://github.com/youzan/vant/pull/1184) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] Field: add left-icon demo [\#1177](https://github.com/youzan/vant/pull/1177) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Dialog: add get-container prop [\#1176](https://github.com/youzan/vant/pull/1176) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] travis: use node8 [\#1169](https://github.com/youzan/vant/pull/1169) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] dynamic import [\#1168](https://github.com/youzan/vant/pull/1168) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] optimize config [\#1167](https://github.com/youzan/vant/pull/1167) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Dialog: beforeClose Add callback parameters [\#1166](https://github.com/youzan/vant/pull/1166) ([akebe](https://github.com/akebe))
- \[Build\] optimize build lib script [\#1163](https://github.com/youzan/vant/pull/1163) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] update wechat icon [\#1156](https://github.com/youzan/vant/pull/1156) ([zgrong](https://github.com/zgrong))

## [v1.1.5](https://github.com/youzan/vant/tree/v1.1.5) (2018-05-24)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.4...v1.1.5)

**Breaking changes**

- progress进度条的颜色，可以设置成渐变色吗？ [\#1094](https://github.com/youzan/vant/issues/1094)
- van-field有计划出一个类似label位置的图标参数吗？登录框很常用，用户名密码输入框之前经常会有 [\#1084](https://github.com/youzan/vant/issues/1084)
- Cell value=0无法显示 [\#1055](https://github.com/youzan/vant/issues/1055)

**Bug Fixes**

- Icon图标组件使用本地字体文件无效,还是引用 yzcdn.cn 域名下的字体文件 [\#1077](https://github.com/youzan/vant/issues/1077)
- GoodsActionMiniBtn中info属性在数字过大时会被遮挡 [\#1068](https://github.com/youzan/vant/issues/1068)

**Issue**

- PC端打开页面时，无法滑动日期控件 [\#1145](https://github.com/youzan/vant/issues/1145)
- https://www.youzanyun.com/zanui/vant/examples\#/zh-CN/ [\#1143](https://github.com/youzan/vant/issues/1143)
- hello vant，这不是一个issues 这是一个吐槽- [\#1139](https://github.com/youzan/vant/issues/1139)
- 有没有供设计参考的psd文件和规范呢 [\#1137](https://github.com/youzan/vant/issues/1137)
- 请问 源码中  :class="b\(\)"  这个b 是怎么导入的? [\#1134](https://github.com/youzan/vant/issues/1134)
- 使用全部导入组件方式，轮播图组件用懒加载报错 [\#1133](https://github.com/youzan/vant/issues/1133)
- 建议area组件添加pc鼠标事件 [\#1131](https://github.com/youzan/vant/issues/1131)
- Rate组件使用出错 [\#1130](https://github.com/youzan/vant/issues/1130)
- 内置图标在手机浏览器上正常显示，PC浏览器部分无法显示 [\#1129](https://github.com/youzan/vant/issues/1129)
- 自定义图标在哪里添加ttf文件 [\#1128](https://github.com/youzan/vant/issues/1128)
- List能否增加一个初始化位置的设置~ [\#1125](https://github.com/youzan/vant/issues/1125)
- 优惠券组件是否支持多选? [\#1123](https://github.com/youzan/vant/issues/1123)
- Uploader 图片上传，有图片压缩功能吗 [\#1122](https://github.com/youzan/vant/issues/1122)
- cell在某些分辨率边框显示不全。 两个框的高度显示一条border [\#1119](https://github.com/youzan/vant/issues/1119)
- cellswiper样式丢失 [\#1115](https://github.com/youzan/vant/issues/1115)
- van-radio组件，文字多了之后会使radio错位 [\#1113](https://github.com/youzan/vant/issues/1113)
- Checkbox 与 Cell 组件一起使用 点击cell部分不会选中复选框 [\#1106](https://github.com/youzan/vant/issues/1106)
- 在钉钉的APP中的iOS8.3版本下,样式错乱 [\#1105](https://github.com/youzan/vant/issues/1105)
- popup lock-scroll属性不生效 [\#1101](https://github.com/youzan/vant/issues/1101)
- vant   collapse 可折叠面板   右边下箭头切换 Safari浏览器点击不了。。。 [\#1097](https://github.com/youzan/vant/issues/1097)
- Tabs组件sticky有问题 [\#1095](https://github.com/youzan/vant/issues/1095)

**Improvements**

- \[bugfix\] Toast: mask render uncorrectly when forbidClick [\#1154](https://github.com/youzan/vant/pull/1154) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] AddressEdit: trim empty value [\#1150](https://github.com/youzan/vant/pull/1150) ([chenjiahan](https://github.com/chenjiahan))
- update dependencies [\#1149](https://github.com/youzan/vant/pull/1149) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Dialog: prevent button text select [\#1148](https://github.com/youzan/vant/pull/1148) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Field: normalize input margin in safari [\#1147](https://github.com/youzan/vant/pull/1147) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Picker: update unselected option color [\#1142](https://github.com/youzan/vant/pull/1142) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] fix field wrong spelling [\#1141](https://github.com/youzan/vant/pull/1141) ([chenjiahan](https://github.com/chenjiahan))
-  \[Improvement\] Popup: support lazy render [\#1138](https://github.com/youzan/vant/pull/1138) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Progress: pivot shouldn't cross border [\#1135](https://github.com/youzan/vant/pull/1135) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] NumberKeyboard: add close event [\#1127](https://github.com/youzan/vant/pull/1127) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] TreeSelect: support string type id [\#1126](https://github.com/youzan/vant/pull/1126) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] fix dialog document [\#1124](https://github.com/youzan/vant/pull/1124) ([zhangxiaoshang](https://github.com/zhangxiaoshang))
- \[Improvement\] optimize babel plugin [\#1117](https://github.com/youzan/vant/pull/1117) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] reduce scroll utils [\#1112](https://github.com/youzan/vant/pull/1112) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] optimize isDef [\#1109](https://github.com/youzan/vant/pull/1109) ([chenjiahan](https://github.com/chenjiahan))
- \[Build\] use es entry file [\#1108](https://github.com/youzan/vant/pull/1108) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] add gzip size badge [\#1107](https://github.com/youzan/vant/pull/1107) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Toast: add test cases [\#1104](https://github.com/youzan/vant/pull/1104) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Rate: add test cases [\#1103](https://github.com/youzan/vant/pull/1103) ([chenjiahan](https://github.com/chenjiahan))
- \[Improvement\] Rate: add change event [\#1102](https://github.com/youzan/vant/pull/1102) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] 优化sku报错文案 [\#1100](https://github.com/youzan/vant/pull/1100) ([w91](https://github.com/w91))

## [v1.1.4](https://github.com/youzan/vant/tree/v1.1.4) (2018-05-18)
[Full Changelog](https://github.com/youzan/vant/compare/v1.1.3...v1.1.4)

**Breaking changes**

- van-field 组件添加 label slot [\#1041](https://github.com/youzan/vant/issues/1041)
- AddressEdit组件 点击删除收货地址时弹出的Dialog.confirm只有confirm事件cancel貌似没有ww [\#1035](https://github.com/youzan/vant/issues/1035)

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