## Changelog

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
