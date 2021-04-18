# Changelog

### Tips

The current document is the changelog of Vant 3. If you want to view the changelog of Vant 2, please visit [Vant 2 Changelog](https://youzan.github.io/vant/#/en-US/changelog).

### Intro

Vant follows [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/).

**Release Schedule**

- Patch version：released weekly, including features and bug fixes.
- Minor version：released every one to two months, including backwards compatible features.
- Major version：including breaking changes and new features.

## Details

### [v3.0.14](https://github.com/youzan/vant/compare/v3.0.13...v3.0.14)

`2021-04-18`

**Feature**

- Badge: offset prop support custom unit [35edb7](https://github.com/youzan/vant/commit/35edb72b5cd519d4e75443acaa0a63db16695d2d)
- Rate: support decimal modelValue when readonly [#8528](https://github.com/youzan/vant/issues/8528)

**Bug Fixes**

- ContactList: fix nodes type [0b764b](https://github.com/youzan/vant/commit/0b764b63470b09f5654d267c8d07a20bc2d31536)

### [v3.0.13](https://github.com/youzan/vant/compare/v3.0.12...v3.0.13)

`2021-04-11`

**Feature**

- ActionBar: add @action-bar-icon-background-color less var [#8474](https://github.com/youzan/vant/issues/8474)
- Popover: bump @popperjs/core@2.9.2 [0d1323](https://github.com/youzan/vant/commit/0d132337d5d263957a7993d60e47a18efec7313e)
- perf: reduce bundle size [ba3e6d](https://github.com/youzan/vant/commit/ba3e6d56a0bc7ae3acc25b1380f054da3b9b020f)

**Types**

- Popup: fix PopupCloseIconPosition type [15d901](https://github.com/youzan/vant/commit/15d901ad6aace3826881cb3c6e0499f75b71df80)
- Search: missing some props in jsx [#8485](https://github.com/youzan/vant/issues/8485)
- Stepper: improve theme prop typing [#8489](https://github.com/youzan/vant/issues/8489)

**Bug Fixes**

- Field: autofocus prop not work [#8488](https://github.com/youzan/vant/issues/8488)

### [v3.0.12](https://github.com/youzan/vant/compare/v3.0.11...v3.0.12)

`2021-04-05`

**Feature**

- CollapseItem: add readonly prop [#8445](https://github.com/youzan/vant/issues/8445)
- Field: add clear-icon prop [#8438](https://github.com/youzan/vant/issues/8438)
- Search: add clear-icon prop [#8439](https://github.com/youzan/vant/issues/8439)
- Search: add error-message prop [#8442](https://github.com/youzan/vant/issues/8442)
- Search: add formatter、format-trigger prop [#8441](https://github.com/youzan/vant/issues/8441)

**Bug Fixes**

- fix incorrect tag prompts under Webstorm [#8450](https://github.com/youzan/vant/issues/8450)

### [v3.0.11](https://github.com/youzan/vant/compare/v3.0.10...v3.0.11)

`2021-03-30`

**Feature**

- Cascader: add swipeable prop [#8383](https://github.com/youzan/vant/issues/8383)
- Dialog: add footer slot [#8382](https://github.com/youzan/vant/issues/8382)
- Dialog: allow to render JSX message [#8420](https://github.com/youzan/vant/issues/8420)
- Image: add icon-size prop [#8395](https://github.com/youzan/vant/issues/8395)
- Row: add wrap prop [#8393](https://github.com/youzan/vant/issues/8393)

**Bug Fixes**

- Field: should not reset validation after blured [#8409](https://github.com/youzan/vant/issues/8409)
- Sticky: Element not exist during SSR [#8407](https://github.com/youzan/vant/issues/8407)
- Tabs: incorrect horizontal slip judgment [#8388](https://github.com/youzan/vant/issues/8388)

### [v3.0.10](https://github.com/youzan/vant/compare/v3.0.9...v3.0.10)

`2021-03-19`

**Feature**

- ActionSheet: add cancel slot [#8333](https://github.com/youzan/vant/issues/8333)
- Badge: add show-zero prop [#8381](https://github.com/youzan/vant/issues/8381)
- Cascader: add close-icon prop [#8334](https://github.com/youzan/vant/issues/8334)
- Popover: add close-on-click-overlay prop [#8351](https://github.com/youzan/vant/issues/8351)
- Popover: add duration prop [#8355](https://github.com/youzan/vant/issues/8355)
- Popover: add overlay-class prop [#8353](https://github.com/youzan/vant/issues/8353)
- Popover: add overlay-style prop [#8354](https://github.com/youzan/vant/issues/8354)
- ShareSheet: add cancel slot [#8335](https://github.com/youzan/vant/issues/8335)
- Sticky: add change event [#8374](https://github.com/youzan/vant/issues/8374)
- Tag: close event param [#8337](https://github.com/youzan/vant/issues/8337)
- Toast: add iconSize option [#8338](https://github.com/youzan/vant/issues/8338)

**Feature**

- ContactList: add @contact-list-item-radio-icon-color var [#8322](https://github.com/youzan/vant/issues/8322)
- Coupon: add @coupon-corner-checkbox-icon-color var [#8323](https://github.com/youzan/vant/issues/8323)
- List: add @list-loading-icon-size less var [#8365](https://github.com/youzan/vant/issues/8365)
- Loading: add @button-loading-icon-size less var [465bf0](https://github.com/youzan/vant/commit/465bf07095c58e8292b23ef0c64be1550aa9d430)
- PullRefresh: add @pull-refresh-loading-icon-size less var [#8366](https://github.com/youzan/vant/issues/8366)

**Bug Fixes**

- Popover: close-on-click-outside not work [#8352](https://github.com/youzan/vant/issues/8352)
- Swipe: incorrect item width after scaled [#8330](https://github.com/youzan/vant/issues/8330)

### [v3.0.9](https://github.com/youzan/vant/compare/v3.0.8...v3.0.9)

`2021-03-08`

**Feature**

- AddressList: add tag slots [#8292](https://github.com/youzan/vant/issues/8292)

**Bug Fixes**

- fix custom theme not work [#8301](https://github.com/youzan/vant/issues/8301)
- fix failed to install component in TypeScript [#8308](https://github.com/youzan/vant/issues/8308)

### [v3.0.8](https://github.com/youzan/vant/compare/v3.0.7...v3.0.8)

`2021-03-07`

**Types**

- Build types from source code [#8264](https://github.com/youzan/vant/issues/8264)

**Feature**

- ImagePreview: add overlay-style prop [#8276](https://github.com/youzan/vant/issues/8276)
- ImagePreview: add transition prop [#8275](https://github.com/youzan/vant/issues/8275)
- Locale: add th-TH lang [#8297](https://github.com/youzan/vant/issues/8297)
- PullRefresh: add pull-distance prop [#8280](https://github.com/youzan/vant/issues/8280)
- Button: add some less vars [#8281](https://github.com/youzan/vant/issues/8281)

**Bug Fixes**

- ImagePreview: add test cases [#8282](https://github.com/youzan/vant/issues/8282)
- ActionSheet: should not reopen when closed [#8272](https://github.com/youzan/vant/issues/8272)
- Stepper: incorrect text color in iOS14 when disabled [#8277](https://github.com/youzan/vant/issues/8277)
- Swipe: should render dynamic swipe item correctly [#8288](https://github.com/youzan/vant/issues/8288)

### [v3.0.7](https://github.com/youzan/vant/compare/v3.0.6...v3.0.7)

`2021-02-28`

**Feature**

- Notify: add lockScroll option [#8168](https://github.com/youzan/vant/issues/8168)
- Popup: click-overlay event add `Event` param [#8107](https://github.com/youzan/vant/issues/8107)
- ShareSheet: add overlay-style prop [#8225](https://github.com/youzan/vant/issues/8225)
- ShareSheet: add overlay-class prop [#8225](https://github.com/youzan/vant/issues/8225)
- Step: add finish-icon slot [#8241](https://github.com/youzan/vant/issues/8241)
- Steps: add finish-icon prop [#8103](https://github.com/youzan/vant/issues/8103)
- Uploader: add @uploader-mask-text-color var [#8064](https://github.com/youzan/vant/issues/8064)

**perf**

- adjust browserslist to fit Vue 3 [#8227](https://github.com/youzan/vant/issues/8227)
- disable enableObjectSlots to reduce bundle size [#8226](https://github.com/youzan/vant/issues/8226)

**Bug Fixes**

- ActionSheet: fix safe-area-inset-bottom prop not work [#8085](https://github.com/youzan/vant/issues/8085)
- DateTimePicker: fix incorrecrt inital value [#8193](https://github.com/youzan/vant/issues/8193)
- Form: may scroll to incorrect field after submitted [#8159](https://github.com/youzan/vant/issues/8159)
- ImagePreview: fix incorrect image display during the second call [#8060](https://github.com/youzan/vant/issues/8060)
- IndexBar: failed to render active anchor when inited [#8164](https://github.com/youzan/vant/issues/8164)
- Popup: should watch lockScroll [#8169](https://github.com/youzan/vant/issues/8169)
- Swipe: active may outrange when initialize [#8061](https://github.com/youzan/vant/issues/8061)
- SwipeCell: incorrect position param when clicking outside [#8108](https://github.com/youzan/vant/issues/8108)
- Tabbar: incorrect active tab when name is zero [#8125](https://github.com/youzan/vant/issues/8125)
- Tabs: incorrect active tab when active prop is zero [#8074](https://github.com/youzan/vant/issues/8074)
- Toast: ssr error [#8214](https://github.com/youzan/vant/issues/8214)

### [v3.0.6](https://github.com/youzan/vant/compare/v3.0.5...v3.0.6)

`2021-01-31`

**Feature**

- Area: support more than 6-digit area code [#8001](https://github.com/youzan/vant/issues/8001)
- Form: adjust show-error default value to false [#8016](https://github.com/youzan/vant/issues/8016)
- Form: allow validator to return message [#8052](https://github.com/youzan/vant/issues/8052)
- NumberKeyboard: add blur-on-close prop [#8033](https://github.com/youzan/vant/issues/8033)
- Popover: add click-overlay event [#8050](https://github.com/youzan/vant/issues/8050)
- Popover: support config action color [#8049](https://github.com/youzan/vant/issues/8049)
- Sticky: add position、offset-bottom prop [#7979](https://github.com/youzan/vant/issues/7979)

**Bug Fixes**

- Button: should not submit form when loading [#8018](https://github.com/youzan/vant/issues/8018)
- Calendar: should expose scrollToDate method [#7983](https://github.com/youzan/vant/issues/7983)
- Empty: linearGradient id conflict [#8013](https://github.com/youzan/vant/issues/8013)
- Toast: closeOnClickOverlay not work [#8044](https://github.com/youzan/vant/issues/8044)

### [v3.0.5](https://github.com/youzan/vant/compare/v3.0.4...v3.0.5)

`2021-01-24`

**Feature**

- Badge: add offset prop [e0b463](https://github.com/youzan/vant/commit/e0b463630108b5031a02a8afcd0c141a7fdbac9e)
- Calendar: reset method support specified date [#7966](https://github.com/youzan/vant/issues/7966)
- Icons: add wechat icon, rename wechat-pay icon [b3cd8c](https://github.com/youzan/vant/commit/b3cd8c14aea9e542a9de4ba9999e50c3ecbf3b3c)
- ImagePreview: reset scale after swiping [#7972](https://github.com/youzan/vant/issues/7972)
- ImagePreview: adjust default swipeDuration to 300ms [#7970](https://github.com/youzan/vant/issues/7970)
- ShareSheet: add wechat-moments icon [ca66fb](https://github.com/youzan/vant/commit/ca66fbca36c5c839e3a294d465b0fc2bd7bf5039)
- Slider: add readonly prop [4cd991](https://github.com/youzan/vant/commit/4cd991dfec01bd5342cb59b750d0dfa5901b8dc8)

**style**

- ShareSheet: update qrcode icon [32a08b](https://github.com/youzan/vant/commit/32a08bb6807d9d38027e03eef376d82b6eab282e)
- TreeSelect: add active feedback [bada31](https://github.com/youzan/vant/commit/bada315fb3b0fbdf30c663170c867bbbc274687c)

**Bug Fixes**

- Calendar: should reset to default date when calling reset method [#7967](https://github.com/youzan/vant/issues/7967)
- Dialog: failed to render when toggling allowHtml [#7968](https://github.com/youzan/vant/issues/7968)
- ImagePreview: scale event index is undefined [#7971](https://github.com/youzan/vant/issues/7971)

### [v3.0.4](https://github.com/youzan/vant/compare/v3.0.3...v3.0.4)

`2021-01-17`

**Feature**

- Cascader: add field-names prop [#7933](https://github.com/youzan/vant/issues/7933)
- Cell: allow to disable clickable when using is-link [#7923](https://github.com/youzan/vant/issues/7923)
- DropdownItem: title-class can be array or object type [#7926](https://github.com/youzan/vant/issues/7926)
- Popup: overlay-class can be array or object [#7924](https://github.com/youzan/vant/issues/7924)
- Toast: add overlayClass option [#7925](https://github.com/youzan/vant/issues/7925)
- Toast: add overlayStyle option [#7898](https://github.com/youzan/vant/issues/7898)

**Bug Fixes**

- AddressEdit: should expose setAreaCode method [6a184f](https://github.com/youzan/vant/commit/6a184f8e930fea31035680dd44f40bc007aba4cd)
- Circle: the gradient color is incorrect [#7909](https://github.com/youzan/vant/issues/7909)
- NumberKeyboard: fix delete、extra-key slot not work [52a0e5](https://github.com/youzan/vant/commit/52a0e5a8c70dcc07b87140e33318acefcbdd3ef9)
- Search: fix update:modelValue emits warning [#7872](https://github.com/youzan/vant/issues/7872)
- Swipe: should stop autoplay when page is hidden [1c428f](https://github.com/youzan/vant/commit/1c428f240cd44d3389510263dd7f03973cfbfa2b)

### [v3.0.3](https://github.com/youzan/vant/compare/v3.0.2...v3.0.3)

`2021-01-10`

**Feature**

- Field: add autocomplate prop [#7877](https://github.com/youzan/vant/issues/7877)

**Bug Fixes**

- Area: should expose getValues method [03c7b4](https://github.com/youzan/vant/commit/03c7b46b04d8c543f952cbf8399ec21ca39f979f)
- ImagePreview: close-on-popstate not work [#7880](https://github.com/youzan/vant/issues/7880)
- List: should watch error prop and check position [b79c32](https://github.com/youzan/vant/commit/b79c32183f6159a663dad42f6189a939061f9f32)

### [v3.0.2](https://github.com/youzan/vant/compare/v3.0.1...v3.0.2)

`2021-01-02`

**Feature**

- Calendar: add scrollToDate method [#7847](https://github.com/youzan/vant/issues/7847)
- Form: add disabled prop [#7830](https://github.com/youzan/vant/issues/7830)
- Form: add readonly prop [#7830](https://github.com/youzan/vant/issues/7830)
- Loading: add text-color prop [#7806](https://github.com/youzan/vant/issues/7806)
- Picker: add columns-field-names prop [#7791](https://github.com/youzan/vant/issues/7791)
- NumberKeyboard: add random-key-order prop [#7841](https://github.com/youzan/vant/issues/7841)

**Bug Fixes**

- Calendar: title slot not work [#7826](https://github.com/youzan/vant/issues/7826)
- Calendar: failed to watch defaultDate [#7815](https://github.com/youzan/vant/issues/7815)
- Popup: should remove lock scroll before destroyed [#7835](https://github.com/youzan/vant/issues/7835)
- Stepper: should format model-value [81494d](https://github.com/youzan/vant/commit/81494dfa13e6ab9a3f12995f481290d27d14ab7a)

### [v3.0.1](https://github.com/youzan/vant/compare/v3.0.0...v3.0.1)

`2020-12-27`

**Feature**

- Form: support valdiate multiple names [#7810](https://github.com/youzan/vant/issues/7810)
- Form: resetValidation support multiple names [#7811](https://github.com/youzan/vant/issues/7811)
- Stepper: add show-input prop [#7812](https://github.com/youzan/vant/issues/7812)
- IndexBar: add scrollTo method [#7794](https://github.com/youzan/vant/issues/7794)

**Bug Fixes**

- CountDown: fix ssr memory leak [#7808](https://github.com/youzan/vant/issues/7808)
- Image: mismatching warning during ssr [#7822](https://github.com/youzan/vant/issues/7822)
- Popup: lockScroll not work [#7738](https://github.com/youzan/vant/issues/7738)
- Stepper: change event emitted twice [#7820](https://github.com/youzan/vant/issues/7820)
- Swipe: incorrect size during ssr [#7821](https://github.com/youzan/vant/issues/7821)
- Swipe: incorrect active swipe when children changed [#7802](https://github.com/youzan/vant/issues/7802)
- Swipe: incorrect active tab when activated [#7772](https://github.com/youzan/vant/issues/7772)

### [v3.0.0](https://github.com/youzan/vant/compare/v2.12.0...v3.0.0)

`2020-12-23`

**Content**

Reference: [Vant 3.0 正式发布：全面拥抱 Vue 3](https://github.com/youzan/vant/issues/7797)。

### [v3.0.0-rc.4](https://github.com/youzan/vant/compare/v2.12.0-beta.0...v3.0.0-rc.4)

`2020-12-21`

**New Component**

- add Cascader component [#7771](https://github.com/youzan/vant/pull/7771)

<img src="https://b.yzcdn.cn/vant/cascader_1221.png">

**Feature**

- Stepper: add show-input prop [#7785](https://github.com/youzan/vant/issues/7785)
- uploader: add single uploader preview image style [#7731](https://github.com/youzan/vant/issues/7731)

**Types**

- Lazyload: fix typing [#7757](https://github.com/youzan/vant/issues/7757)
- Contains all features and bug fixes of `v2.12.0-beta.0` version

### [v3.0.0-rc.3](https://github.com/youzan/vant/compare/v2.11.2...v3.0.0-rc.3)

`2020-12-10`

**Breaking Change**

- Stepper: rename async-change to before-change [e026d2](https://github.com/youzan/vant/commit/e026d2d83f66bb25c66f805cf8085de70d8e009f)

**perf**

- Stepper: improve bundle size [#7675](https://github.com/youzan/vant/issues/7675)

**Bug Fixes**

- Stepper: disabled not work [c27760](https://github.com/youzan/vant/commit/c277603160a7a17685dc532304b9a0c2444db959)
- Tabs: failed to set active tab [#7717](https://github.com/youzan/vant/issues/7717)
- Contains all features and bug fixes of `v2.11.3` version

### [v3.0.0-rc.2](https://github.com/youzan/vant/compare/v3.0.0-rc.1...v3.0.0-rc.2)

`2020-12-04`

**perf**

- reduce bundle size [#7675](https://github.com/youzan/vant/issues/7675)

**Bug Fixes**

- Lazyload: missing esm output [#7685](https://github.com/youzan/vant/issues/7685)
- NumberKeyboard: fix hide-on-click-outside prop not working [#7668](https://github.com/youzan/vant/issues/7668) [#7667](https://github.com/youzan/vant/issues/7667)
- Uploader: fix change status is not valid [#7681](https://github.com/youzan/vant/issues/7681)
- Types: fix teleport typing [#7687](https://github.com/youzan/vant/issues/7687)
- Contains all features and bug fixes of `v2.11.2` version

### [v3.0.0-rc.1](https://github.com/youzan/vant/compare/v2.11.1...v3.0.0-rc.1)

`2020-12-01`

**Breaking Change**

- Popover: adjust trigger default value to click [1699d9](https://github.com/youzan/vant/commit/1699d9927240373867f065355136fd27ac04b0e5)

**Feature**

- Lazyload: support Vue 3 [d3ca40](https://github.com/youzan/vant/commit/d3ca404f98ffd572035d7048c949e8942b89fc55)
- Contains all features and bug fixes of `v2.11.1` version

**style**

- Circle: add @circle-color less var [1a6cf6](https://github.com/youzan/vant/commit/1a6cf64f548bb19c6bd478db67f2e0a1d7c9a145)
- Circle: add @circle-layer-color less var [65a5ed](https://github.com/youzan/vant/commit/65a5ed85537b7a406655bd39f7e4f5332d780a82)
- Circle: add @circle-size less var [b57f7e](https://github.com/youzan/vant/commit/b57f7e9d9810ce95047334f0897899ebddaac6f3)
- IndexBar: adjust default highlight color to red [65b680](https://github.com/youzan/vant/commit/65b6807a7e6b8a415b5f228c5d55426cd81a1dfa)
- IndexBar: adjust sticky anchor color to red [87b0a0](https://github.com/youzan/vant/commit/87b0a034958296a720409ded893e708081c35bc5)
- IndexBar: increase right padding to 8px [aad055](https://github.com/youzan/vant/commit/aad055906484d8b6c38a9f84a768f09522b13a41)

**Bug Fixes**

- Image: lazy-load prop not work [0ba818](https://github.com/youzan/vant/commit/0ba8187bf540abc0c593c6571554f1b72e8d3e19)
- Lazyload: fix typing [d0c4c2](https://github.com/youzan/vant/commit/d0c4c26d758f18ac3f33fc7d4867a98b731b129d)
- Popup: transition-appear prop not work [dd6930](https://github.com/youzan/vant/commit/dd6930533593a363e25f56717e5c17184ef6e867)

### [v3.0.0-beta.10](https://github.com/youzan/vant/compare/v3.0.0-beta.9...v3.0.0-beta.10)

`2020-11-22`

**Bug Fixes**

- Radio: failed to bind group [0f7c9a](https://github.com/youzan/vant/commit/0f7c9a317cc9a7219ec8431bae0658a5e84d43af)

### [v3.0.0-beta.9](https://github.com/youzan/vant/compare/v2.11.0...v3.0.0-beta.9)

`2020-11-22`

**Feature**

- Search: add blur method [d26282](https://github.com/youzan/vant/commit/d26282e54245a47075fed01baf6304e0d84559e0)
- Search: add focus method [2833bc](https://github.com/youzan/vant/commit/2833bc03f5243370e5a3aeece5b823fc2ebde64c)

**Bug Fixes**

- Checkbox: bind-group prop not work [#7447](https://github.com/youzan/vant/issues/7447)
- Badge: fix missing typing [c487b3](https://github.com/youzan/vant/commit/c487b394efa946f6fae5059f1e1a69be11a25a6e)
- Contains all features and bug fixes of `v2.11.0` version

### [v3.0.0-beta.8](https://github.com/youzan/vant/compare/v2.10.14...v3.0.0-beta.8)

`2020-11-15`

**Bug Fixes**

- ActionSheet: incorrect behavior when clicking disabled option [996598](https://github.com/youzan/vant/commit/996598686955b90bb5cf7589b5ca1589e17e2016)
- ActionSheet: missing callback option [27b761](https://github.com/youzan/vant/commit/27b761f534186a6bfa2e8e54cc78ccb51ec48e25)
- Calendar: failed to render when default-date is null #7519 [#7519](https://github.com/youzan/vant/issues/7519)
- cli: should not collect coverage from test dir [c21517](https://github.com/youzan/vant/commit/c2151708bbffee95ceb169176bfa5deb5f7e9317)
- DatetimePicker: inherit correct props [ed332d](https://github.com/youzan/vant/commit/ed332daf319e2005995f279026a57d4f30a339f6)
- NavBar: safe-area-inset-top css incorrect [#7535](https://github.com/youzan/vant/issues/7535)
- NoticeBar: avoid repeated start [0712d9](https://github.com/youzan/vant/commit/0712d920634e7b70b77f49c71337172bf3ece470)
- Swipe: failed to render in lazy-render mode [e06ba4](https://github.com/youzan/vant/commit/e06ba480a9ec02af8659616ff6ceb5155defddad)
- Swipe: avoid repeated initialization [c94173](https://github.com/youzan/vant/commit/c9417341e0adb681db6108cf1383bab77ab90da9)
- Tabs: avoid repeated initialization [599e81](https://github.com/youzan/vant/commit/599e817cd4f4239b4a93c75f34118731d47891b5)
- Contains all features and bug fixes of `v2.10.14` version

### [v3.0.0-beta.7](https://github.com/youzan/vant/compare/v2.10.13...v3.0.0-beta.7)

`2020-11-08`

**Bug Fixes**

- Calendar: incorrect initial date [#7412](https://github.com/youzan/vant/issues/7412)
- DropdownMenu: can't disable closeOnClickOutside [#7473](https://github.com/youzan/vant/issues/7473)
- Uploader: before-read return true not work [#7493](https://github.com/youzan/vant/issues/7493)
- Uploader: can't get index in delete event [#7481](https://github.com/youzan/vant/issues/7481)
- Contains all features and bug fixes of `v2.10.13` version

### [v3.0.0-beta.6](https://github.com/youzan/vant/compare/v2.10.12...v3.0.0-beta.6)

`2020-11-01`

**Bug Fixes**

- Calendar: watch maxData/minDate and reset [#7412](https://github.com/youzan/vant/issues/7412)
- Swipe: incorrect lazy render when loop is false [#7465](https://github.com/youzan/vant/issues/7465)
- Swipe: item should only rendered once [#7466](https://github.com/youzan/vant/issues/7466)
- Tabs: skip initial animation [49e877](https://github.com/youzan/vant/commit/49e87756c70b33e1a56620ebee3c0aa53fb9fc86)
- ActionBar: fix typing [#7440](https://github.com/youzan/vant/issues/7440) [#7442](https://github.com/youzan/vant/issues/7442)
- Contains all features and bug fixes of `v2.10.12` version
