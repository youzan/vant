## Changelog

### [0.11.1](https://github.com/youzan/vant/tree/v0.11.1)
`2017-11-24`

**Improvements**
- Actionsheet: update close icon style [\#340](https://github.com/youzan/vant/pull/340) [@chenjiahan](https://github.com/chenjiahan)
- Popup: add overlayClass and overlayStyle props [\#349](https://github.com/youzan/vant/pull/349) [\#343](https://github.com/youzan/vant/pull/343) [@mickeyinfoshan](https://github.com/mickeyinfoshan) [@chenjiahan](https://github.com/chenjiahan)
- Icon: adjust unicode for better display [\#330](https://github.com/youzan/vant/pull/330) [@chenjiahan](https://github.com/chenjiahan)
- ImagePreview: support manually close [\#346](https://github.com/youzan/vant/pull/346) [@chenjiahan](https://github.com/chenjiahan)
- Tabbar: add slot-scope to avoid check by index [\#347](https://github.com/youzan/vant/pull/347) [@chuangbo](https://github.com/chuangbo)
- SubmitBar: add left slot [\#345](https://github.com/youzan/vant/pull/345) [@chenjiahan](https://github.com/chenjiahan)
- optimize component static classnames [\#337](https://github.com/youzan/vant/pull/337) [@chenjiahan](https://github.com/chenjiahan)
- optimize single line text ellipsis [\#334](https://github.com/youzan/vant/pull/334) [@chenjiahan](https://github.com/chenjiahan)
- optimize button css layer and GPU cost [\#336](https://github.com/youzan/vant/pull/336) [@deepkolos](https://github.com/deepkolos)

**Bug Fixes**
- fix some bugs in SSR [\#344](https://github.com/youzan/vant/pull/344) [@chenjiahan](https://github.com/chenjiahan)
- fix DateTimePicker crashed when pass invalid props [\#333](https://github.com/youzan/vant/pull/333) [@chenjiahan](https://github.com/chenjiahan)


### [0.11.0](https://github.com/youzan/vant/tree/v0.11.0)
`2017-11-17`

**Breaking changes**
- add i18n support [\#310](https://github.com/youzan/vant/pull/310) [@chenjiahan](https://github.com/chenjiahan)
- remove some unnecessary props [\#323](https://github.com/youzan/vant/pull/323) [@chenjiahan](https://github.com/chenjiahan)

**Improvements**
- add Pagination component [\#327](https://github.com/youzan/vant/pull/327) [\#328](https://github.com/youzan/vant/pull/328) [@zgrong](https://github.com/zgrong) [@chenjiahan](https://github.com/chenjiahan)
- add Locale component [\#310](https://github.com/youzan/vant/pull/310) [@chenjiahan](https://github.com/chenjiahan)
- add Internationalization document [\#321](https://github.com/youzan/vant/pull/321) [@chenjiahan](https://github.com/chenjiahan)
- Icon: add-o icon add radius [\#326](https://github.com/youzan/vant/pull/326) [@cookfront](https://github.com/cookfront)

### [0.10.9](https://github.com/youzan/vant/tree/v0.10.9) 
`2017-11-15`

**Improvements**
- Icon: add new icons [\#315](https://github.com/youzan/vant/pull/315) [@cookfront](https://github.com/cookfront)

**Bug Fixes**
- Search: fix box-sizing [\#312](https://github.com/youzan/vant/pull/312) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.8](https://github.com/youzan/vant/tree/v0.10.8)
`2017-11-11`

**Improvements**
- Tabbar: support vue-router [\#305](https://github.com/youzan/vant/pull/305) [@chenjiahan](https://github.com/chenjiahan)
- Stepper: add plus & minus event [\#294](https://github.com/youzan/vant/pull/294) [@chenjiahan](https://github.com/chenjiahan)
- Progress: add showPivot prop [\#300](https://github.com/youzan/vant/pull/300) [@chenjiahan](https://github.com/chenjiahan)
- Loading: add spinner type [\#297](https://github.com/youzan/vant/pull/297) [@chenjiahan](https://github.com/chenjiahan)
- Toast: add mask option [\#296](https://github.com/youzan/vant/pull/296) [@chenjiahan](https://github.com/chenjiahan)
- add Tab english document [\#308](https://github.com/youzan/vant/pull/308) [@cookfront](https://github.com/cookfront)
- add Toast english document [\#307](https://github.com/youzan/vant/pull/307) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix npm run dist errors in windows [\#301](https://github.com/youzan/vant/pull/301) [@zlkiarest](https://github.com/lkiarest)

### [0.10.7](https://github.com/youzan/vant/tree/v0.10.7)
`2017-11-08`

**Improvements**
- Normalize size of all icons [\#292](https://github.com/youzan/vant/pull/292) [@chenjiahan](https://github.com/chenjiahan)
- ImagePreview support custom startPosition [\#286](https://github.com/youzan/vant/pull/286) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix Sku scroll lock [\#291](https://github.com/youzan/vant/pull/291) [@w91](https://github.com/w91)
- fix Steps style error when has more than 4 items [\#287](https://github.com/youzan/vant/pull/287) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.6](https://github.com/youzan/vant/tree/v0.10.6)
`2017-11-06`

**Improvements**
- add Swipe initialSwipe prop [\#279](https://github.com/youzan/vant/pull/279) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix Dialog button text not reset when showed [\#278](https://github.com/youzan/vant/pull/278) [@chenjiahan](https://github.com/chenjiahan)
- fix Tab dynamic generate bug [\#284](https://github.com/youzan/vant/pull/284) [@cookfront](https://github.com/cookfront)
- fix NoticeBar text disappeared when page back [\#280](https://github.com/youzan/vant/pull/280) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.5](https://github.com/youzan/vant/tree/v0.10.5)
`2017-10-30`

**Improvements**
- Cell support vue-router target route [\#268](https://github.com/youzan/vant/pull/268) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix Tabbar info display when use icon slot [\#269](https://github.com/youzan/vant/pull/269) [@chenjiahan](https://github.com/chenjiahan)
- fix Uploader input type [\#265](https://github.com/youzan/vant/pull/265) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.4](https://github.com/youzan/vant/tree/v0.10.4)
`2017-10-26`

**Improvements**
- add more icons [\#253](https://github.com/youzan/vant/pull/253) [@pangxie1991](https://github.com/pangxie1991)
- add document of custom theme [\#251](https://github.com/youzan/vant/pull/251) [@chenjiahan](https://github.com/chenjiahan)
- add click feedback of buttons in components [\#248](https://github.com/youzan/vant/pull/248) [@chenjiahan](https://github.com/chenjiahan)
- add more props of NoticeBar [\#254](https://github.com/youzan/vant/pull/254) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix Swipe width calc error [\#258](https://github.com/youzan/vant/pull/258) [@chenjiahan](https://github.com/chenjiahan)
- fix PullRefreash scroll bug when parent is scrollable [\#247](https://github.com/youzan/vant/pull/247) [@GeoffZhu](https://github.com/GeoffZhu)
- fix CouponList empty info display bug [\#246](https://github.com/youzan/vant/pull/246) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.3](https://github.com/youzan/vant/tree/v0.10.3)
`2017-10-25`

**Improvements**
- add Tabbar info prop [\#245](https://github.com/youzan/vant/pull/245) [@chenjiahan](https://github.com/chenjiahan)
- add Toast position prop [\#244](https://github.com/youzan/vant/pull/244) [@chenjiahan](https://github.com/chenjiahan)
- add Coupon showExchangeBar prop [\#243](https://github.com/youzan/vant/pull/243) [@chenjiahan](https://github.com/chenjiahan)
- add Advanced components english document [\#236](https://github.com/youzan/vant/pull/236) [@Tinysymphony](https://github.com/Tinysymphony)
- add demo pages in document [\#237](https://github.com/youzan/vant/pull/237) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix Address & Contact list style error [\#230](https://github.com/youzan/vant/pull/230) [@chenjiahan](https://github.com/chenjiahan)
- fix popup style missing when build style entry [\#231](https://github.com/youzan/vant/pull/231) [@chenjiahan](https://github.com/chenjiahan)
- fix PullRefresh touchcancel event [\#239](https://github.com/youzan/vant/pull/239) [@GeoffZhu](https://github.com/GeoffZhu)

### [0.10.2](https://github.com/youzan/vant/tree/v0.10.2)
`2017-10-20`

**Improvements**
- Sku: sku-group slot add event bus [\#226](https://github.com/youzan/vant/pull/226) [@w91](https://github.com/w91)
- add English documents [\#220](https://github.com/youzan/vant/pull/220) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- Optimize component dependency analyze when build style entry [\#224](https://github.com/youzan/vant/pull/224) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.1](https://github.com/youzan/vant/tree/v0.10.1)
`2017-10-18`

**Improvements**
- upgrade Vue version to 2.5.0 [@chenjiahan](https://github.com/chenjiahan)
- add Tabs swipeThreshold prop [\#206](https://github.com/youzan/vant/pull/206) [@cookfront](https://github.com/cookfront)

**Bug Fixes**
- fix Swipe not clear autoplay timer when destroyed [\#218](https://github.com/youzan/vant/pull/218) [@chenjiahan](https://github.com/chenjiahan)
- fix Tab slot text ellipsis [\#217](https://github.com/youzan/vant/pull/217) [@cookfront](https://github.com/cookfront)
- fix TreeSelect denpendency path error [\#216](https://github.com/youzan/vant/pull/216) [@chenjiahan](https://github.com/chenjiahan)
- fix Checkbox border render error in Weixin browser [\#214](https://github.com/youzan/vant/pull/214) [@chenjiahan](https://github.com/chenjiahan)
- fix Popup modal can not display in some cases [\#211](https://github.com/youzan/vant/pull/211) [@chenjiahan](https://github.com/chenjiahan)
- fix Waterfall repeated event bind [@chenjiahan](https://github.com/chenjiahan)

### [0.10.0](https://github.com/youzan/vant/tree/v0.10.0)
`2017-10-13`

**Breaking changes**
- remove reset.css in vant-css [\#192](https://github.com/youzan/vant/issues/192) [\#196](https://github.com/youzan/vant/pull/196) [@chenjiahan](https://github.com/chenjiahan)
- reconstruct Swipe component, adjust some API [#174](https://github.com/youzan/vant/issues/174) [#180](https://github.com/youzan/vant/issues/180) [\#194](https://github.com/youzan/vant/pull/194) [\#200](https://github.com/youzan/vant/pull/200) [@chenjiahan](https://github.com/chenjiahan)
- optimize Search component，adjust struct [\#198](https://github.com/youzan/vant/pull/198) [@pangxie1991](https://github.com/pangxie1991)

**Improvements**
- add Tabbar componnet [#157](https://github.com/youzan/vant/issues/157) [\#204](https://github.com/youzan/vant/pull/204) [@chenjiahan](https://github.com/chenjiahan)
- add english document of Form components [\#199](https://github.com/youzan/vant/pull/199) [@chenjiahan](https://github.com/chenjiahan)
- optimize Sku style [\#205](https://github.com/youzan/vant/pull/205) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix ImagePreview beating bug when loading image [\#201](https://github.com/youzan/vant/pull/201) [@chenjiahan](https://github.com/chenjiahan)
- fix Field height error when type is textarea and display none [\#181](https://github.com/youzan/vant/issues/181) [@chenjiahan](https://github.com/chenjiahan)

### [0.9.12](https://github.com/youzan/vant/tree/v0.9.12) 
`2017-10-11`

**Bug Fixes**

- fix Search style bug [\#191](https://github.com/youzan/vant/pull/191) ([pangxie1991](https://github.com/pangxie1991))

### [0.9.11](https://github.com/youzan/vant/tree/v0.9.11)
`2017-10-11`

**Improvements**
- add Contribute document [\#182](https://github.com/youzan/vant/pull/182) [@pangxie1991](https://github.com/pangxie1991)

**Bug Fixes**
- fix AddressEdit name key [\#187](https://github.com/youzan/vant/pull/187) [@chenjiahan](https://github.com/chenjiahan)
- fix Filed textarea wrong height when display none [\#188](https://github.com/youzan/vant/pull/188) [@chenjiahan](https://github.com/chenjiahan)
- fix compile error in windows [\#185](https://github.com/youzan/vant/pull/182) [@pangxie1991](https://github.com/pangxie1991)

### [0.9.10](https://github.com/youzan/vant/tree/v0.9.10)
`2017-10-09`

**Improvements**
- add Contact component [\#160](https://github.com/youzan/vant/pull/160) [@chenjiahan](https://github.com/chenjiahan)
- add AddressEdit component [\#147](https://github.com/youzan/vant/pull/147) [@chenjiahan](https://github.com/chenjiahan)
- add english document support [\#170](https://github.com/youzan/vant/pull/170) [@pangxie1991](https://github.com/pangxie1991)
- remove dependency of zan-utils [\#168](https://github.com/youzan/vant/pull/168) [@w91](https://github.com/w91) [@chenjiahan](https://github.com/chenjiahan)
- remove unnecessary codes in transition.js [\#162](https://github.com/youzan/vant/pull/162) [@chenjiahan](https://github.com/chenjiahan)
- use clean-css instead of gulp-cssmin to minify css [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix Tab props not observable [\#148](https://github.com/youzan/vant/pull/148) [@chenjiahan](https://github.com/chenjiahan)
- fix Button active border color [\#150](https://github.com/youzan/vant/issues/150) [@ZWkang](https://github.com/ZWkang)
- fix Stepper input style [\#159](https://github.com/youzan/vant/pull/159) [@w91](https://github.com/w91)
- fix Waterfall disable props not work when display none [\#166](https://github.com/youzan/vant/pull/166) [@pangxie1991](https://github.com/pangxie1991)
- fix vant-css not compile calc property after build [@chenjiahan](https://github.com/chenjiahan)
- fix npm run dev error in MacOS [\#152](https://github.com/youzan/vant/issues/152) [@chenjiahan](https://github.com/chenjiahan)
- fix document router not work in some browsers [\#158](https://github.com/youzan/vant/pull/158) [@pangxie1991](https://github.com/pangxie1991)

### [0.9.9](https://github.com/youzan/vant/tree/v0.9.9)
`2017-09-26`

**Improvements**
- Sku：support Stepper [\#146](https://github.com/youzan/vant/pull/146) [@w91](https://github.com/w91)

**Bug Fixes**
- fix license error in packages.json [\#144](https://github.com/youzan/vant/pull/144) [@airyland](https://github.com/airyland)
- fix Waterfall scroll bug [\#145](https://github.com/youzan/vant/pull/145) [@pangxie1991](https://github.com/pangxie1991)


### [0.9.8](https://github.com/youzan/vant/tree/v0.9.8)
`2017-09-24`

**Improvements**
- add AddressList component [\#138](https://github.com/youzan/vant/pull/138) [@chenjiahan](https://github.com/chenjiahan)
- modify changelog [\#140](https://github.com/youzan/vant/pull/140) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- fix Sku message render bug [\#142](https://github.com/youzan/vant/pull/142) [@w91](https://github.com/w91)

### [0.9.7](https://github.com/youzan/vant/tree/v0.9.7)
`2017-09-21`

**Improvements**
- Checkbox: support shape prop [\#137](https://github.com/youzan/vant/pull/137) [@chenjiahan](https://github.com/chenjiahan)
