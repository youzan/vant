# Changelog

### Tips

The current document is the changelog of Vant 2. If you want to view the changelog of Vant 3, please visit [Vant 3 Changelog](https://vant-ui.github.io/vant/next/#/en-US/changelog).

### Intro

Vant follows [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/).

**Release Schedule**

- Patch version：released weekly, including features and bug fixes.
- Minor version：released every one to two months, including backwards compatible features.
- Major version：including breaking changes and new features.

## Details

### [v2.12.50](https://github.com/vant-ui/vant/compare/v2.12.49...v2.12.50)

`2022-09-17`

**Bug Fixes**

- Uploader: optimize image preview [#11044](https://github.com/vant-ui/vant/issues/11044)
- ImagePreview: fix missing onScale type [#11057](https://github.com/vant-ui/vant/issues/11057)

### [v2.12.49](https://github.com/vant-ui/vant/compare/v2.12.48...v2.12.49)

`2022-09-05`

**Bug Fixes**

- Locale: avoid getting unexpected value [#11010](https://github.com/vant-ui/vant/issues/11010)
- Locale: Accurate Vietnamese translation [#10889](https://github.com/vant-ui/vant/issues/10889)

### [v2.12.48](https://github.com/vant-ui/vant/compare/v2.12.47...v2.12.48)

`2022-06-25`

**Feature**

- Steps: add center prop [#10617](https://github.com/vant-ui/vant/issues/10617)

**Bug Fixes**

- Dialog: should not submit form after clicking button [#10570](https://github.com/vant-ui/vant/issues/10570)
- List: element with `overflow: overlay` style should be considered a scroll container [#10743](https://github.com/vant-ui/vant/issues/10743)

### [v2.12.47](https://github.com/vant-ui/vant/compare/v2.12.46...v2.12.47)

`2022-04-07`

**Feature**

- Locale: add vi-VN lang [#10477](https://github.com/vant-ui/vant/issues/10477)

### [v2.12.46](https://github.com/vant-ui/vant/compare/v2.12.45...v2.12.46)

`2022-03-30`

**Bug Fixes**

- TabBar: fix route matching in special cases [#10447](https://github.com/vant-ui/vant/issues/10447)

### [v2.12.45](https://github.com/vant-ui/vant/compare/v2.12.44...v2.12.45)

`2022-03-18`

**Bug Fixes**

- Sku: Fixed a syntax error when skuTree is an empty array in special cases [#10390](https://github.com/vant-ui/vant/issues/10390)

**Feature**

- Dialog: support keyboard events [#10359](https://github.com/vant-ui/vant/issues/10359)

### [v2.12.44](https://github.com/vant-ui/vant/compare/v2.12.43...v2.12.44)

`2022-02-14`

**Bug Fixes**

- utils: isEmail ReDoS [#10295](https://github.com/vant-ui/vant/issues/10295)

### [v2.12.43](https://github.com/vant-ui/vant/compare/v2.12.39...v2.12.43)

`2022-02-10`

**Feature**

- Cascader: add show-header prop [#10201](https://github.com/vant-ui/vant/issues/10201)
- CollapseItem: add lazy-render prop [#10279](https://github.com/vant-ui/vant/issues/10279)

**Bug Fixes**

- Icon: remove white space under image when using image URL [#10224](https://github.com/vant-ui/vant/issues/10224)

### [v2.12.42](https://github.com/vant-ui/vant/compare/v2.12.41...v2.12.42)

`2022-02-07`

**Feature**

- switch npm tag to `latest-v2` [d84d2d](https://github.com/vant-ui/vant/commit/d84d2d68345bb619ab2544136ca3c763611c729d)

### [v2.12.39](https://github.com/vant-ui/vant/compare/v2.12.38...v2.12.39)

`2022-01-15`

**Bug Fixes**

- DatetimePicker: error in some edge cases [#10186](https://github.com/vant-ui/vant/issues/10186)
- ImagePreview: incorrectly closed after zooming [#10191](https://github.com/vant-ui/vant/issues/10191)
- NavBar: get correct height in mobile safari [#10190](https://github.com/vant-ui/vant/issues/10190)
- Tabbar: get correct height in mobile safari [#10185](https://github.com/vant-ui/vant/issues/10185)

### [v2.12.38](https://github.com/vant-ui/vant/compare/v2.12.37...v2.12.38)

`2022-01-10`

**Feature**

- Slider: add left-button and right-button slots [#10053](https://github.com/vant-ui/vant/issues/10053)

**Bug Fixes**

- PullRefresh: may trigger browser bounce in some cases [#10090](https://github.com/vant-ui/vant/issues/10090)

### [v2.12.37](https://github.com/vant-ui/vant/compare/v2.12.36...v2.12.37)

`2021-12-14`

**Feature**

- ImagePreview: add overlayStyle option [#10043](https://github.com/vant-ui/vant/issues/10043)

**Bug Fixes**

- DatetimePicker: should update value after calling picker methods [#10028](https://github.com/vant-ui/vant/issues/10028)

### [v2.12.36](https://github.com/vant-ui/vant/compare/v2.12.35...v2.12.36)

`2021-12-05`

**Bug Fixes**

- Calendar: date is empty when `poppable = fasle` in dialog [#9845](https://github.com/vant-ui/vant/issues/9845) [#9939](https://github.com/vant-ui/vant/issues/9939)
- Uploader: preview is slow when sum of images size be bigger [#7307](https://github.com/vant-ui/vant/issues/7307) [#9953](https://github.com/vant-ui/vant/issues/9953)

### [v2.12.35](https://github.com/vant-ui/vant/compare/v2.12.34...v2.12.35)

`2021-11-27`

**Bug Fixes**

- DatetimePicker: fix incorrect confirm value when v-model is not used [#9938](https://github.com/vant-ui/vant/issues/9938)
- Swipe: incorrect border radius in iOS safari [#9933](https://github.com/vant-ui/vant/issues/9933) [#9931](https://github.com/vant-ui/vant/issues/9931)

### [v2.12.34](https://github.com/vant-ui/vant/compare/v2.12.33...v2.12.34)

`2021-11-24`

**Feature**

- Tabbar: support highlight with child route [#9173](https://github.com/vant-ui/vant/issues/9173) [#9921](https://github.com/vant-ui/vant/issues/9921)

**Bug Fixes**

- DatetimePicker: fix incorrect confirm value when v-model is not used [#9913](https://github.com/vant-ui/vant/issues/9913)
- Swipe: should prevent touchmove event when swiping [#9918](https://github.com/vant-ui/vant/issues/9918)

### [v2.12.33](https://github.com/vant-ui/vant/compare/v2.12.32...v2.12.33)

`2021-11-16`

**Bug Fixes**

- Picker: SSR broken [#9875](https://github.com/vant-ui/vant/issues/9875)

### [v2.12.32](https://github.com/vant-ui/vant/compare/v2.12.31...v2.12.32)

`2021-11-15`

**Feature**

- NoticeBar: add reset method [#9864](https://github.com/vant-ui/vant/issues/9864)
- Picker: support mouse wheel on desktop browser [#9713](https://github.com/vant-ui/vant/issues/9713)

**Bug Fixes**

- Field: should not trigger validation after blurring readonly input [#9863](https://github.com/vant-ui/vant/issues/9863)
- Switch: switch node inherit font-size [#9841](https://github.com/vant-ui/vant/issues/9841)
- Tabbar: before-change not work in route mode [#9855](https://github.com/vant-ui/vant/issues/9855)

### [v2.12.31](https://github.com/vant-ui/vant/compare/v2.12.30...v2.12.31)

`2021-10-30`

**Bug Fixes**

- Field: adjust textarea size when focus/blur [#9718](https://github.com/vant-ui/vant/issues/9718)
- Progress: should resize when window size changed [#9757](https://github.com/vant-ui/vant/issues/9757)
- fix VueConstructor type conflict [#9750](https://github.com/vant-ui/vant/issues/9750)

### [v2.12.30](https://github.com/vant-ui/vant/compare/v2.12.29...v2.12.30)

`2021-10-14`

**Feature**

- Sku: add message extra desc [#9651](https://github.com/vant-ui/vant/issues/9651)

### [v2.12.29](https://github.com/vant-ui/vant/compare/v2.12.28...v2.12.29)

`2021-09-22`

**Bug Fixes**

- Tabs: failed to scroll into view when render multiple tabs [#9542](https://github.com/vant-ui/vant/issues/9542)

### [v2.12.28](https://github.com/vant-ui/vant/compare/v2.12.27...v2.12.28)

`2021-09-20`

**Feature**

- Icons: add shield-o、guide-o icon [fc2406](https://github.com/vant-ui/vant/commit/fc2406ee2849af989b151b31f9de138213fadf23)

**Bug Fixes**

- Radio: icon ref may be undefined [#9504](https://github.com/vant-ui/vant/issues/9504)

### [v2.12.27](https://github.com/vant-ui/vant/compare/v2.12.27-beta.0...v2.12.27)

`2021-09-06`

**Feature**

- Sku: add custom-upload prop [#9389](https://github.com/vant-ui/vant/issues/9389)

**Bug Fixes**

- Field: field-error-message-font-size var name [#9393](https://github.com/vant-ui/vant/issues/9393)
- Popup: fix memory leak issue [#9336](https://github.com/vant-ui/vant/issues/9336)

### [v2.12.26](https://github.com/vant-ui/vant/compare/v2.12.25...v2.12.26)

`2021-08-15`

**Feature**

- Uploader: add click-upload event [#9260](https://github.com/vant-ui/vant/issues/9260)
- Uploader: add readonly prop [#9257](https://github.com/vant-ui/vant/issues/9257)

**Bug Fixes**

- Field: textarea scroll to top after resizing [#9207](https://github.com/vant-ui/vant/issues/9207)
- Rate: should enable flex wrap [#9193](https://github.com/vant-ui/vant/issues/9193)
- Tabs: remove invalid head padding for card type [#9169](https://github.com/vant-ui/vant/issues/9169)

### [v2.12.25](https://github.com/vant-ui/vant/compare/v2.12.24...v2.12.25)

`2021-07-25`

**Feature**

- Cascader: add option slot [#9111](https://github.com/vant-ui/vant/issues/9111)
- CellGroup: add inset prop [#9055](https://github.com/vant-ui/vant/issues/9055)

### [v2.12.24](https://github.com/vant-ui/vant/compare/v2.12.23...v2.12.24)

`2021-07-13`

**Bug Fixes**

- DatetimePicker: fix incorrect value when using filter [#9009](https://github.com/vant-ui/vant/issues/9009)
- Step: z-index issue [#9004](https://github.com/vant-ui/vant/issues/9004)

### [v2.12.23](https://github.com/vant-ui/vant/compare/v2.12.22...v2.12.23)

`2021-07-06`

**Bug Fixes**

- DatetimePicker: fix change max-date、max-hour emit incorrect value [#8977](https://github.com/vant-ui/vant/issues/8977)
- Stepper: incorrect value after blurred when using async-change [#8936](https://github.com/vant-ui/vant/issues/8936)
- Toast: fix word break [#8966](https://github.com/vant-ui/vant/issues/8966)

### [v2.12.22](https://github.com/vant-ui/vant/compare/v2.12.21...v2.12.22)

`2021-06-22`

**Feature**

- Calendar: add top-info、bottom-info slot [#8847](https://github.com/vant-ui/vant/issues/8847)

**Bug Fixes**

- Slider: format v-model with step correctly [#8894](https://github.com/vant-ui/vant/issues/8894)

### [v2.12.21](https://github.com/vant-ui/vant/compare/v2.12.20...v2.12.21)

`2021-06-03`

**Feature**

- Button: add icon slot [#8784](https://github.com/vant-ui/vant/issues/8784)
- CouponList: add list-footer、disabled-list-footer slot [#8797](https://github.com/vant-ui/vant/issues/8797)
- Locale: add French translations [#8795](https://github.com/vant-ui/vant/issues/8795)

**Bug Fixes**

- CellGroup: fix render error in loop [#8787](https://github.com/vant-ui/vant/issues/8787)
- Collapse: fix safari rendering issues [#8788](https://github.com/vant-ui/vant/issues/8788)
- List: remove unused Less var @list-icon-margin-right [#8758](https://github.com/vant-ui/vant/issues/8758)
- NoticeBar: failed to play when inside a re-opened popup [#8791](https://github.com/vant-ui/vant/issues/8791)
- Tabs: setLine when popup reopened [#8792](https://github.com/vant-ui/vant/issues/8792)

### [v2.12.20](https://github.com/vant-ui/vant/compare/v2.12.19...v2.12.20)

`2021-05-23`

**Feature**

- Uploader: max-size prop can be a function [#8745](https://github.com/vant-ui/vant/issues/8745)

**Bug Fixes**

- Button: should not submit form when loading [#8735](https://github.com/vant-ui/vant/issues/8735)
- functional components should inherit "key" [#8718](https://github.com/vant-ui/vant/issues/8718)

### [v2.12.19](https://github.com/vant-ui/vant/compare/v2.12.18...v2.12.19)

`2021-05-17`

**Feature**

- NoticeBar: increase default speed to 60 [a48663](https://github.com/vant-ui/vant/commit/a486630fe3fe10d8854c03817214dba82b70229e)
- Dependencies: unlock @vant/icons [#8714](https://github.com/vant-ui/vant/issues/8714)

### [v2.12.18](https://github.com/vant-ui/vant/compare/v2.12.17...v2.12.18)

`2021-05-10`

**Bug Fixes**

- Coupon: timestamp can be string type [c5b4d1](https://github.com/vant-ui/vant/commit/c5b4d1a66372b94420146f9a640aee31f402889a)

### [v2.12.17](https://github.com/vant-ui/vant/compare/v2.12.16...v2.12.17)

`2021-05-08`

**Feature**

- CouponList: support custom valid period [#8679](https://github.com/vant-ui/vant/issues/8679)

### [v2.12.16](https://github.com/vant-ui/vant/compare/v2.12.15...v2.12.16)

`2021-05-03`

**Feature**

- Steps: add icon-prefix prop [#8630](https://github.com/vant-ui/vant/issues/8630)

**Bug Fixes**

- DatetimePicker: fixed show incorrect date time when dynamic set mindate or maxdate [#8640](https://github.com/vant-ui/vant/issues/8640)

### [v2.12.15](https://github.com/vant-ui/vant/compare/v2.12.14...v2.12.15)

`2021-04-25`

**Bug Fixes**

- Calendar: incorrect weekdays locale [#8569](https://github.com/vant-ui/vant/issues/8569)
- Tag: incorrect border color when using plain [#8602](https://github.com/vant-ui/vant/issues/8602)
- Uploader: failed to render scoped class [#8613](https://github.com/vant-ui/vant/issues/8613)

### [v2.12.14](https://github.com/vant-ui/vant/compare/v2.12.13...v2.12.14)

`2021-04-18`

**Bug Fixes**

- Calendar: failed to update subtitle in some cases [#8513](https://github.com/vant-ui/vant/issues/8513)
- ShareSheet: duration prop not work [#8542](https://github.com/vant-ui/vant/issues/8542)

### [v2.12.13](https://github.com/vant-ui/vant/compare/v2.12.12...v2.12.13)

`2021-04-11`

**Feature**

- Sticky: add change event [#8479](https://github.com/vant-ui/vant/issues/8479)

### [v2.12.12](https://github.com/vant-ui/vant/compare/v2.12.11...v2.12.12)

`2021-04-05`

**Bug Fixes**

- fix incorrect tag prompts under Webstorm [#8450](https://github.com/vant-ui/vant/issues/8450)

### [v2.12.11](https://github.com/vant-ui/vant/compare/v2.12.10...v2.12.11)

`2021-03-30`

**Bug Fixes**

- Field: should not reset validation after blurred [#8412](https://github.com/vant-ui/vant/issues/8412)
- Tabs: fix incorrect horizontal slip judgment [#8387](https://github.com/vant-ui/vant/issues/8387)

### [v2.12.10](https://github.com/vant-ui/vant/compare/v2.12.9...v2.12.10)

`2021-03-19`

**Bug Fixes**

- Utils: incorrect deepClone [#8326](https://github.com/vant-ui/vant/issues/8326)
- Swipe: incorrect item width after scaled [#8329](https://github.com/vant-ui/vant/issues/8329)

### [v2.12.9](https://github.com/vant-ui/vant/compare/v2.12.8...v2.12.9)

`2021-03-09`

**Feature**

- AddressList: add tag slot [#8311](https://github.com/vant-ui/vant/issues/8311)

### [v2.12.8](https://github.com/vant-ui/vant/compare/v2.12.7...v2.12.8)

`2021-03-07`

**Feature**

- ImagePreview: add transition prop [#8273](https://github.com/vant-ui/vant/issues/8273)
- PullRefresh: add pull-distance prop [#8279](https://github.com/vant-ui/vant/issues/8279)
- Locale: add th-TH lang [#8247](https://github.com/vant-ui/vant/issues/8247)

**Bug Fixes**

- ActionSheet: should not reopen when closed [#8271](https://github.com/vant-ui/vant/issues/8271)
- ImagePreview: missing initial animation [#8274](https://github.com/vant-ui/vant/issues/8274)
- Stepper: incorrect text color in iOS14 when disabled [#8278](https://github.com/vant-ui/vant/issues/8278)

### [v2.12.7](https://github.com/vant-ui/vant/compare/v2.12.6...v2.12.7)

`2021-02-28`

**Feature**

- Step: add finish-icon slot [#8240](https://github.com/vant-ui/vant/issues/8240)
- Steps: add finish-icon prop [#8237](https://github.com/vant-ui/vant/issues/8237)

**Bug Fixes**

- DatetimePicker: fix incorrecrt inital value when v-model is null [#7832](https://github.com/vant-ui/vant/issues/7832)
- Empty: linearGradient id conflict [#8011](https://github.com/vant-ui/vant/issues/8011)
- GoodsActionIcon: info warning [#8040](https://github.com/vant-ui/vant/issues/8040)
- Tabs: incorrect active tab when active prop is zero [#8087](https://github.com/vant-ui/vant/issues/8087)

### [v2.12.6](https://github.com/vant-ui/vant/compare/v2.12.5...v2.12.6)

`2021-01-26`

**Feature**

- Icons: add wechat icon, rename wechat-pay icon [b3cd8c](https://github.com/vant-ui/vant/commit/b3cd8c14aea9e542a9de4ba9999e50c3ecbf3b3c)

**Bug Fixes**

- fix CDN image url [#8000](https://github.com/vant-ui/vant/issues/8000)

**perf**

- Sku: using icon instead of cdn image [#7992](https://github.com/vant-ui/vant/issues/7992)

### [v2.12.5](https://github.com/vant-ui/vant/compare/v2.12.4...v2.12.5)

`2021-01-24`

**Feature**

- Calendar: reset method support specified date [#7943](https://github.com/vant-ui/vant/issues/7943)
- ImagePreview: reset scale after swiping [#7974](https://github.com/vant-ui/vant/issues/7974)
- ImagePreview: adjust default swipe duration to 300ms [#7973](https://github.com/vant-ui/vant/issues/7973)
- ShareSheet: add wechat-moments icon [4f94dd](https://github.com/vant-ui/vant/commit/4f94dd3260fedd0c67b8b542c106119dd1ca7b37)

**style**

- ShareSheet: update qrcode icon [335510](https://github.com/vant-ui/vant/commit/33551062e3e946107b05841ddd3914ab996600ce)

### [v2.12.4](https://github.com/vant-ui/vant/compare/v2.12.3...v2.12.4)

`2021-01-17`

**Feature**

- Cascader: add field-names prop [#7932](https://github.com/vant-ui/vant/issues/7932)
- Cell: allow to disable clickable when using is-link [#7922](https://github.com/vant-ui/vant/issues/7922)

**Bug Fixes**

- Circle: the gradient color is incorrect [#7910](https://github.com/vant-ui/vant/issues/7910) [#7897](https://github.com/vant-ui/vant/issues/7897)
- Field: should not allow dot when type is number [#7921](https://github.com/vant-ui/vant/issues/7921)

### [v2.12.3](https://github.com/vant-ui/vant/compare/v2.12.2...v2.12.3)

`2021-01-09`

**Bug Fixes**

- Col: compatible with less 4.0 [d8a81b](https://github.com/vant-ui/vant/commit/d8a81b26d8d867e810e54a40ea0d647bb6af3bee)

### [v2.12.2](https://github.com/vant-ui/vant/compare/v2.12.1...v2.12.2)

`2021-01-02`

**Feature**

- Calendar: add scrollToDate method [#7847](https://github.com/vant-ui/vant/issues/7847)
- Form: add disabled prop [#7829](https://github.com/vant-ui/vant/issues/7829)
- Form: add readonly prop [#7829](https://github.com/vant-ui/vant/issues/7829)
- Loading: add text-color prop [#7846](https://github.com/vant-ui/vant/issues/7846)
- IndexBar: add scrollTo method [#7845](https://github.com/vant-ui/vant/issues/7845)
- NumberKeyboard: add random-key-order prop [#7841](https://github.com/vant-ui/vant/issues/7841)

### [v2.12.1](https://github.com/vant-ui/vant/compare/v2.12.0...v2.12.1)

`2020-12-26`

**Feature**

- Form: support valdiate multiple names [#7810](https://github.com/vant-ui/vant/issues/7810)
- Form: resetValidation support multiple names [#7811](https://github.com/vant-ui/vant/issues/7811)
- Stepper: add show-input prop [#7812](https://github.com/vant-ui/vant/issues/7812)

**Bug Fixes**

- CountDown: fix ssr memory leak [#7808](https://github.com/vant-ui/vant/issues/7808)
- Image: mismatching warning during ssr [#7822](https://github.com/vant-ui/vant/issues/7822)
- Stepper: change event emitted twice [#7820](https://github.com/vant-ui/vant/issues/7820)
- Swipe: incorrect size during ssr [#7821](https://github.com/vant-ui/vant/issues/7821)

### [v2.12.0](https://github.com/vant-ui/vant/compare/v2.11.3...v2.12.0)

`2020-12-23`

**New Component**

- add Cascader component [#7771](https://github.com/vant-ui/vant/pull/7771)

<img src="https://b.yzcdn.cn/vant/cascader_1221.png">

**Feature**

- uploader: add single uploader preview image style [#7776](https://github.com/vant-ui/vant/issues/7776)

**Bug Fixes**

- Tab: should scroll into view when title changed [c919e9](https://github.com/vant-ui/vant/commit/c919e9dedaae8ecde8be944032e26474829c1253)

### [v2.11.3](https://github.com/vant-ui/vant/compare/v2.11.2...v2.11.3)

`2020-12-18`

**Feature**

- Sku: add disable-soldout-sku prop [#7759](https://github.com/vant-ui/vant/issues/7759)
- Icon: add delete-o、sort、font、font-o、revoke icon [#7760](https://github.com/vant-ui/vant/issues/7760)

### [v2.11.2](https://github.com/vant-ui/vant/compare/v2.11.1...v2.11.2)

`2020-12-10`

**style**

- Circle: add @circle-color less var [1a6cf6](https://github.com/vant-ui/vant/commit/1a6cf64f548bb19c6bd478db67f2e0a1d7c9a145)
- Circle: add @circle-layer-color less var [65a5ed](https://github.com/vant-ui/vant/commit/65a5ed85537b7a406655bd39f7e4f5332d780a82)
- Circle: add @circle-size less var [b57f7e](https://github.com/vant-ui/vant/commit/b57f7e9d9810ce95047334f0897899ebddaac6f3)
- IndexBar: adjust default highlight color to red [65b680](https://github.com/vant-ui/vant/commit/65b6807a7e6b8a415b5f228c5d55426cd81a1dfa)
- IndexBar: adjust sticky anchor color to red [87b0a0](https://github.com/vant-ui/vant/commit/87b0a034958296a720409ded893e708081c35bc5)
- IndexBar: increase right padding to 8px [aad055](https://github.com/vant-ui/vant/commit/aad055906484d8b6c38a9f84a768f09522b13a41)

**Bug Fixes**

- Popover: incorrect border position in wework [#7702](https://github.com/vant-ui/vant/issues/7702)
- Stepper: fix mobile safari page scroll down issue [#7701](https://github.com/vant-ui/vant/issues/7701)

### [v2.11.1](https://github.com/vant-ui/vant/compare/v2.11.0...v2.11.1)

`2020-11-26`

**Feature**

- CheckboxGroup: toggleAll support skipDisabled option [#7644](https://github.com/vant-ui/vant/issues/7644)
- DatetimePicker: support picker slots [#7645](https://github.com/vant-ui/vant/issues/7645)
- Popover: add trigger prop [#7646](https://github.com/vant-ui/vant/issues/7646)
- Popover: improve a11y [#7624](https://github.com/vant-ui/vant/issues/7624)
- ShareSheet: support weapp-qrcode icon [#7635](https://github.com/vant-ui/vant/issues/7635)

**style**

- NavBar: z-index not work when border is hidden [#7612](https://github.com/vant-ui/vant/issues/7612)
- Popover: improve cursor [#7623](https://github.com/vant-ui/vant/issues/7623)

**Bug Fixes**

- Button: icon button vertical align [#7636](https://github.com/vant-ui/vant/issues/7636)
- Popover: failed to compile in legacy nuxt.js [f3ad7e](https://github.com/vant-ui/vant/commit/f3ad7ed1a77cd2f19001489ea64df0d61429ce33)

### [v2.11.0](https://github.com/vant-ui/vant/compare/v2.10.14...v2.11.0)

`2020-11-22`

**New Component**

- add [Badge](#/en-US/badge) component [#7602](https://github.com/vant-ui/vant/issues/7602)
- add [Popover](#/en-US/popover) component [#7579](https://github.com/vant-ui/vant/issues/7579)

**Feature**

- Popup: add click-close-icon event [#7599](https://github.com/vant-ui/vant/issues/7599)

**Bug Fixes**

- ActionSheet: The height of the flex container is lost under iOS 10 [#7578](https://github.com/vant-ui/vant/issues/7578)

### [v2.10.14](https://github.com/vant-ui/vant/compare/v2.10.13...v2.10.14)

`2020-11-15`

**Feature**

- ImagePreview: passing current index to index slot [#7552](https://github.com/vant-ui/vant/issues/7552)
- Popup: add transition-appear prop [#7525](https://github.com/vant-ui/vant/issues/7525)
- Skeleton: add @skeleton-avatar-size less var [#7556](https://github.com/vant-ui/vant/issues/7556)
- Skeleton: add @skeleton-title-width less var [#7557](https://github.com/vant-ui/vant/issues/7557)

**Bug Fixes**

- Calendar: month-show event triggered multiple times [#7565](https://github.com/vant-ui/vant/issues/7565)
- Calendar: should not render all months on mounted [#7564](https://github.com/vant-ui/vant/issues/7564)
- IndexBar: incorrect behavior inside popup [#7559](https://github.com/vant-ui/vant/issues/7559)
- NavBar: safe-area-inset-top css incorrect [#7534](https://github.com/vant-ui/vant/issues/7534)
- Skeleton: avatar-size can be number type [#7555](https://github.com/vant-ui/vant/issues/7555)
- Sticky: not work in some cases [#7561](https://github.com/vant-ui/vant/issues/7561)
- Swipe: leak when width has decimal [#7562](https://github.com/vant-ui/vant/issues/7562)

### [v2.10.13](https://github.com/vant-ui/vant/compare/v2.10.12...v2.10.13)

`2020-11-08`

**Feature**

- Icon: using encoded woff2 iconfont by default [e0ad65](https://github.com/vant-ui/vant/commit/e0ad65e69fbcfb9ef69b25d2c1bce322577aad11)
- NavBar: add safe-area-inset-top prop [be25a4](https://github.com/vant-ui/vant/commit/be25a478dfbc599cdb27ba09d2d72858037c1700)
- Sticky: offset-top support vh unit [#7498](https://github.com/vant-ui/vant/issues/7498)

**Bug Fixes**

- NavBar: text vertical align [#7515](https://github.com/vant-ui/vant/issues/7515)
- NoticeBar: can't replay in iOS14 [#7516](https://github.com/vant-ui/vant/issues/7516)
- Picker: move to next option when default option is disabled [#7499](https://github.com/vant-ui/vant/issues/7499)
- Picker: should move to first option when all options are disabled [#7504](https://github.com/vant-ui/vant/issues/7504)
- Swipe: incorrect lazy render when loop is false [#7465](https://github.com/vant-ui/vant/issues/7465)
- Swipe: item should only rendered once [#7466](https://github.com/vant-ui/vant/issues/7466)
- Switch: remove unnecessary z-index [#7497](https://github.com/vant-ui/vant/issues/7497)
- Toast: onClose option should only be called once [#7496](https://github.com/vant-ui/vant/issues/7496)

### [v2.10.12](https://github.com/vant-ui/vant/compare/v2.10.11...v2.10.12)

`2020-10-31`

**Feature**

- Image: add icon-prefix prop [#7457](https://github.com/vant-ui/vant/issues/7457)
- Progress: add resize method [#5161](https://github.com/vant-ui/vant/issues/5161)
- SubmitBar: add button slot [#7458](https://github.com/vant-ui/vant/issues/7458)

**style**

- ActionSheet: keep the cancel button at the bottom [#7401](https://github.com/vant-ui/vant/issues/7401)
- Popup: adjust round border radius to 16px [#7421](https://github.com/vant-ui/vant/issues/7421)
- Sidebar: fix long number wrap [#7456](https://github.com/vant-ui/vant/issues/7456)

**Bug Fixes**

- GridItem: should not emit deprecation warning [#7433](https://github.com/vant-ui/vant/issues/7433)
- Picker: fix rendering failure during animation on safari [#7460](https://github.com/vant-ui/vant/issues/7460)
- Tabs: incorrect change event in some cases [#7461](https://github.com/vant-ui/vant/issues/7461)
- Tabs: should keep active value after insert item [#7445](https://github.com/vant-ui/vant/issues/7445)

### [v2.10.11](https://github.com/vant-ui/vant/compare/v2.10.11...v2.10.11)

`2020-10-24`

**Feature**

- Empty: add image-size prop [#7389](https://github.com/vant-ui/vant/issues/7389)
- Picker: add option slot [#7380](https://github.com/vant-ui/vant/issues/7380)
- Picker: add cancel slot [#7377](https://github.com/vant-ui/vant/issues/7377)
- Picker: add confirm slot [#7377](https://github.com/vant-ui/vant/issues/7377)

**Bug Fixes**

- Dialog: failed to disable closeOnPopstate [#7357](https://github.com/vant-ui/vant/issues/7357)
- NavBar: should not render blank left、right element [#7376](https://github.com/vant-ui/vant/issues/7376)
- Image: skip render loading placeholder during ssr [#7383](https://github.com/vant-ui/vant/issues/7383)
- Revert "style(Field): adjust placeholder color to gray-6 (#7192)" (#7375) [#7192](https://github.com/vant-ui/vant/issues/7192) [#7375](https://github.com/vant-ui/vant/issues/7375)

### [v2.10.10](https://github.com/vant-ui/vant/compare/v2.10.9...v2.10.10)

`2020-10-18`

**Feature**

- Icons: add minus icon [40e26f](https://github.com/vant-ui/vant/commit/40e26f97d1144d0dd0810075af8616676459ced3)
- IndexBar: add change event [#7296](https://github.com/vant-ui/vant/issues/7296)

**Improvement**

- add info prop deprecation warning [#7352](https://github.com/vant-ui/vant/issues/7352) [#7347](https://github.com/vant-ui/vant/issues/7347)
- SwitchCell: add deprecation warning [#7350](https://github.com/vant-ui/vant/issues/7350)
- Toast: add mask option deprecation warning [#7342](https://github.com/vant-ui/vant/issues/7342)
- TreeSelect: add deprecation warning of navclick/itemclick [#7351](https://github.com/vant-ui/vant/issues/7351)

**Bug Fixes**

- Calendar: does not show current month with larger screen sizes [#7355](https://github.com/vant-ui/vant/issues/7355)
- Tabs: incorrect animation when content is empty [#7354](https://github.com/vant-ui/vant/issues/7354)
- Field: incorrect label length when label-align is right [#7349](https://github.com/vant-ui/vant/issues/7349)
- GridItem: failed to break word [#7292](https://github.com/vant-ui/vant/issues/7292)
- Icon: incomplete after-sale/cash-back-record [#7328](https://github.com/vant-ui/vant/issues/7328)
- Picker: incorrect loading z-index [14cd28](https://github.com/vant-ui/vant/commit/14cd2863cc75d4f7328ddcf19808b9f6eec38fa4)
- Row: should enable flex wrap [#7332](https://github.com/vant-ui/vant/issues/7332)

### [v2.10.9](https://github.com/vant-ui/vant/compare/v2.10.8...v2.10.9)

`2020-10-01`

**Feature**

- Locale: Add German translations [#7245](https://github.com/vant-ui/vant/issues/7245)
- CollapseItem: add toggle method [#7281](https://github.com/vant-ui/vant/issues/7281)
- Pagination: add page、prev-text、next-text slot [#7222](https://github.com/vant-ui/vant/issues/7222)
- Tab: skip rendering empty pane [#7238](https://github.com/vant-ui/vant/issues/7238)

**Bug Fixes**

- Swipe: fix prev、next method types [#7270](https://github.com/vant-ui/vant/issues/7270)
- Button: incorrect ref in for [#7237](https://github.com/vant-ui/vant/issues/7237)
- Field: incorrect maxlength slicing [#7284](https://github.com/vant-ui/vant/issues/7284)
- @vant/markdown-vetur: fix Windows system build vetur problem [#7277](https://github.com/vant-ui/vant/issues/7277) [#7287](https://github.com/vant-ui/vant/issues/7287)

### [v2.10.8](https://github.com/vant-ui/vant/compare/v2.10.7...v2.10.8)

`2020-09-21`

**Feature**

- SidebarItem: add title slot [#7220](https://github.com/vant-ui/vant/issues/7220)

**Bug Fixes**

- Calendar: incorrect month title [#7205](https://github.com/vant-ui/vant/issues/7205)
- CouponCell: discounted value [#7196](https://github.com/vant-ui/vant/issues/7196)
- Field: incorrect disabled color in iOS 14 [#7206](https://github.com/vant-ui/vant/issues/7206)
- List: scoped style not applied to first child [#7202](https://github.com/vant-ui/vant/issues/7202)
- Swipe: can't disable loop in some cases [#7208](https://github.com/vant-ui/vant/issues/7208)
- Swipe: incorrect indicator color transition [#7207](https://github.com/vant-ui/vant/issues/7207)

### [v2.10.7](https://github.com/vant-ui/vant/compare/v2.10.6...v2.10.7)

`2020-09-17`

**Feature**

- Slider: add dual thumb mode for slider [#7176](https://github.com/vant-ui/vant/issues/7176)
- Button: add icon-position prop [#7174](https://github.com/vant-ui/vant/issues/7174)
- TabbarItem: add @tabbar-item-active-background-color less var [#7162](https://github.com/vant-ui/vant/issues/7162)

**Style**

- Dialog: add message min-height [#7191](https://github.com/vant-ui/vant/issues/7191)
- Field: adjust placeholder color to gray-6 [#7192](https://github.com/vant-ui/vant/issues/7192)

**Bug Fixes**

- Calendar: incorrect height when using rem [#7190](https://github.com/vant-ui/vant/issues/7190)
- ImagePreview: incorrect move range in some cases [#7142](https://github.com/vant-ui/vant/issues/7142)
- NoticeBar: fix cache issues with forwards and back history in safari [#7167](https://github.com/vant-ui/vant/issues/7167)
- NumberKeyboard: incorrect extra key [#7150](https://github.com/vant-ui/vant/issues/7150)
- NumberKeyboard: slot content click event not work [#7193](https://github.com/vant-ui/vant/issues/7193)
- Tabs: incorrect scroll position when offset-top has unit [#7143](https://github.com/vant-ui/vant/issues/7143)
- Tag: text vertical align in miui [#7151](https://github.com/vant-ui/vant/issues/7151)

### [v2.10.6](https://github.com/vant-ui/vant/compare/v2.10.5...v2.10.6)

`2020-09-08`

**Bug Fixes**

- Calendar: readonly not work in multiple mode [#7127](https://github.com/vant-ui/vant/issues/7127)
- CouponCell: fix discounted price [#7123](https://github.com/vant-ui/vant/issues/7123)
- List: scoped style not applied to first child [#7128](https://github.com/vant-ui/vant/issues/7128)

### [v2.10.5](https://github.com/vant-ui/vant/compare/v2.10.4...v2.10.5)

`2020-09-06`

**Feature**

- ActionSheet: add closeable prop [#7099](https://github.com/vant-ui/vant/issues/7099)
- Area: add readonly prop [#7106](https://github.com/vant-ui/vant/issues/7106)
- Calendar: add readonly prop [#7115](https://github.com/vant-ui/vant/issues/7115)
- Calendar: allow default-date to be null [#7116](https://github.com/vant-ui/vant/issues/7116)
- DatetimePicker: add readonly prop [#7107](https://github.com/vant-ui/vant/issues/7107)
- Picker: add readonly prop [#7105](https://github.com/vant-ui/vant/issues/7105)

**Bug Fixes**

- Field: disallow minus when using digit type [#7114](https://github.com/vant-ui/vant/issues/7114)
- Form: scroll to first matched field [#7102](https://github.com/vant-ui/vant/issues/7102)
- Form: should reset validation before submit [#7103](https://github.com/vant-ui/vant/issues/7103)
- Toast: failed to clear in some cases [#7100](https://github.com/vant-ui/vant/issues/7100)

### [v2.10.4](https://github.com/vant-ui/vant/compare/v2.10.3...v2.10.4)

`2020-09-03`

**Feature**

- ActionSheet: add description slot [#7068](https://github.com/vant-ui/vant/issues/7068)
- Icon: add share-o icon [ea6324](https://github.com/vant-ui/vant/commit/ea6324234beae3bc4a700c59523a7091add49480)
- Tabbar: add before-change prop [#7081](https://github.com/vant-ui/vant/issues/7081)

**Bug Fixes**

- Calendar: row-height should work on selected month [#7046](https://github.com/vant-ui/vant/issues/7046)
- Field: fix the issue of checking empty value [#7050](https://github.com/vant-ui/vant/issues/7050)
- Icon: fix calendar-o typo [#7080](https://github.com/vant-ui/vant/issues/7080)

### [v2.10.3](https://github.com/vant-ui/vant/compare/v2.10.2...v2.10.3)

`2020-08-25`

**Feature**

- Uploader: preview-cover slot add index param [#7036](https://github.com/vant-ui/vant/issues/7036)

**Style**

- Search: increase left padding to 12px [#7014](https://github.com/vant-ui/vant/issues/7014)
- Tabs: adjust default line-width to 40px [#7002](https://github.com/vant-ui/vant/issues/7002)
- Toast: adjust top position [#7044](https://github.com/vant-ui/vant/issues/7044)

**Bug Fixes**

- Calendar: render error when using rem unit [#7037](https://github.com/vant-ui/vant/issues/7037)
- Toast: failed to reopen when using get-container [#7032](https://github.com/vant-ui/vant/issues/7032)

### [v2.10.2](https://github.com/vant-ui/vant/compare/v2.10.1...v2.10.2)

`2020-08-12`

**Feature**

- Tab: add @tab-line-height less var [#6985](https://github.com/vant-ui/vant/issues/6985)

**Bug Fixes**

- Sku: compatible sku.list don't exist [#6991](https://github.com/vant-ui/vant/issues/6991)

### [v2.10.1](https://github.com/vant-ui/vant/compare/v2.10.0...v2.10.1)

`2020-08-10`

**Feature**

- Button: add loading slot [#6966](https://github.com/vant-ui/vant/issues/6966)
- Locale: adding Norwegian Language support [#6962](https://github.com/vant-ui/vant/issues/6962)

**Style**

- ContactList: add safe area inset bottom [#6970](https://github.com/vant-ui/vant/issues/6970)
- TabbarItem: increase icon size to 22px [#6972](https://github.com/vant-ui/vant/issues/6972)

**Bug Fixes**

- AddressEdit: incorrect label wrap on safari [#6969](https://github.com/vant-ui/vant/issues/6969)
- Icon: fix badge number align [#6975](https://github.com/vant-ui/vant/issues/6975) [#6952](https://github.com/vant-ui/vant/issues/6952)

### [v2.10.0](https://github.com/vant-ui/vant/compare/v2.9.4...v2.10.0)

`2020-08-07`

**Feature**

- AddressEdit: add tel-maxlength prop [#6869](https://github.com/vant-ui/vant/issues/6869)
- Calendar: enable close-on-popstate by default [#6874](https://github.com/vant-ui/vant/issues/6874)
- Dialog: add new prop theme [#6921](https://github.com/vant-ui/vant/issues/6921)
- Dialog: enable close-on-popsate by default [#6873](https://github.com/vant-ui/vant/issues/6873)
- DropdownMenu: add @dropdown-menu-box-shadow var [6d0c54](https://github.com/vant-ui/vant/commit/6d0c54e8f4e9c1c9982778df8a36c7ac3fc2f905)
- Icon: add back-top icon [#6931](https://github.com/vant-ui/vant/issues/6931)
- Icon: add photo-fail icon [#6883](https://github.com/vant-ui/vant/issues/6883)
- ImagePreview: enable close-on-popstate by default [#6875](https://github.com/vant-ui/vant/issues/6875)
- NumberKeyboard: add get-container prop [#6870](https://github.com/vant-ui/vant/issues/6870)

**Style**

- uniform line-height [#6862](https://github.com/vant-ui/vant/issues/6862)
- ActionSheet: add @action-sheet-loading-icon-size var [#6847](https://github.com/vant-ui/vant/issues/6847)
- ActionSheet: adjust cancel text color to @gray-7 [#6846](https://github.com/vant-ui/vant/issues/6846)
- ActionSheet: increase header height to 48px [#6856](https://github.com/vant-ui/vant/issues/6856)
- Cell: adjust icon margin to 4px [#6844](https://github.com/vant-ui/vant/issues/6844)
- CouponCell: insert a space after currency [#6888](https://github.com/vant-ui/vant/issues/6888)
- DropdownMenu: adjust default active color to @red [#6863](https://github.com/vant-ui/vant/issues/6863)
- Image: update loading icon and error icon [#6890](https://github.com/vant-ui/vant/issues/6890)
- Field: adjust icon margin to 4px [#6849](https://github.com/vant-ui/vant/issues/6849)
- NumberKeyboard: increase title size [#6845](https://github.com/vant-ui/vant/issues/6845)
- NumberKeyboard: adjust padding bottom [#6938](https://github.com/vant-ui/vant/issues/6938)
- NumberKeyboard: adjust key height to 28px [#6899](https://github.com/vant-ui/vant/issues/6899)
- Picker: adjust default value of visible-item-count to 6 [#6827](https://github.com/vant-ui/vant/issues/6827)
- Sidebar: adjust width to 80px [#6861](https://github.com/vant-ui/vant/issues/6861)
- Sku: improve price align [#6911](https://github.com/vant-ui/vant/issues/6911)
- Tag: adjust size and padding [#6828](https://github.com/vant-ui/vant/issues/6828)
- Tab: remove default border [69ac60](https://github.com/vant-ui/vant/commit/69ac602bc21b445fb88783303d00bd65e4dc5ae2)
- Tab: adjust padding in complete mode [90e678](https://github.com/vant-ui/vant/commit/90e678756aecddee2beb522e38017c68f616b387)
- Tab: update nav padding [8027f4](https://github.com/vant-ui/vant/commit/8027f46f3ff33b200cf022e5f9a2693293a1bb16)
- Tab: disable ellipsis when scrollable [bc0e45](https://github.com/vant-ui/vant/commit/bc0e45687a76f49355efa7fb2403184746575012)
- Toast: adjust background color [#6848](https://github.com/vant-ui/vant/issues/6848)
- Toast: adjust icon size to 36px [#6857](https://github.com/vant-ui/vant/issues/6857)

**Bug Fixes**

- AddressEdit: render error in some cases [#6942](https://github.com/vant-ui/vant/issues/6942)
- Calendar: should only scroll calendar body when inited [#6926](https://github.com/vant-ui/vant/issues/6926)
- Field: failed to reset validation when message is empty [#6867](https://github.com/vant-ui/vant/issues/6867)
- Info: number vertical align center [#6952](https://github.com/vant-ui/vant/issues/6952)
- ImagePreview: fit orientationchange [#6825](https://github.com/vant-ui/vant/issues/6825)
- NumberKeyboard: incorrect key height on legacy safari [#6937](https://github.com/vant-ui/vant/issues/6937)
- Picker: when item.defaultIndex is 0, this.defaultIndex will be used [#6948](https://github.com/vant-ui/vant/issues/6948)
- Sku: fix header image shrink [#6949](https://github.com/vant-ui/vant/issues/6949)

### [v2.9.4](https://github.com/vant-ui/vant/compare/v2.9.3...v2.9.4)

`2020-07-29`

**Feature**

- ShareSheet: add className option [#6886](https://github.com/vant-ui/vant/issues/6886)
- Sku: modify default min year of sku date picker [#6879](https://github.com/vant-ui/vant/issues/6879)

**Bug Fixes**

- Popup: incorrect lock scroll in some cases [#6892](https://github.com/vant-ui/vant/issues/6892)
- Stepper: double tap to scroll in safari [#6882](https://github.com/vant-ui/vant/issues/6882)

### [v2.9.3](https://github.com/vant-ui/vant/compare/v2.9.2...v2.9.3)

`2020-07-19`

**Feature**

- Tabs: add before-change prop [#6817](https://github.com/vant-ui/vant/issues/6817)
- Sticky: offset-top support vw unit [#6816](https://github.com/vant-ui/vant/issues/6816)
- Picker: item-height support vw unit [#6816](https://github.com/vant-ui/vant/issues/6816)
- Sku: add mobile message value formatter [19e0d0](https://github.com/vant-ui/vant/commit/19e0d0df0e52cb9b683aef1f7f09d9c4ae425b97)
- Tab: add scrollTo method [#6800](https://github.com/vant-ui/vant/issues/6800)
- Uploader: add preview-options prop [#6810](https://github.com/vant-ui/vant/issues/6810)

**Bug Fixes**

- Calendar: rendering fails in some cases [#6812](https://github.com/vant-ui/vant/issues/6812)
- ImagePreview: image overflow in some cases [#6811](https://github.com/vant-ui/vant/issues/6811)
- NumberKeyboard: flex not work on legacy safari [#6804](https://github.com/vant-ui/vant/issues/6804)
- Slider: missing transition in vertical mode [#6786](https://github.com/vant-ui/vant/issues/6786)

### [v2.9.2](https://github.com/vant-ui/vant/compare/v2.9.1...v2.9.2)

`2020-07-14`

**Feature**

- Calendar: add first-day-of-week prop [#6468](https://github.com/vant-ui/vant/issues/6468)
- DatetimePicker: add columns-order prop [#6672](https://github.com/vant-ui/vant/issues/6672) [#6768](https://github.com/vant-ui/vant/issues/6768)

**Bug Fixes**

- Tab: should not trigger route when disabled [#6782](https://github.com/vant-ui/vant/issues/6782)
- Sku: fix label color [#6771](https://github.com/vant-ui/vant/issues/6771)
- Sku: image cell word wrap [#6777](https://github.com/vant-ui/vant/issues/6777)

### [v2.9.1](https://github.com/vant-ui/vant/compare/v2.9.0...v2.9.1)

`2020-07-12`

**Feature**

- DatetimePicker: add datehour type [#6732](https://github.com/vant-ui/vant/issues/6732)
- Field: add clear-trigger prop [#6699](https://github.com/vant-ui/vant/issues/6699)
- Search: add clear-trigger prop [#6700](https://github.com/vant-ui/vant/issues/6700)
- Uploader: add preview-cover slot [#6707](https://github.com/vant-ui/vant/issues/6707)
- ShareSheet: add click-overlay event [#6765](https://github.com/vant-ui/vant/issues/6765)
- Stepper: add allow-empty prop [#6759](https://github.com/vant-ui/vant/issues/6759)
- Steps: add inactive-color prop [#6758](https://github.com/vant-ui/vant/issues/6758)
- SubmitBar: add button-color prop [#6757](https://github.com/vant-ui/vant/issues/6757)
- Sku: improve message datetime picker [8d29e5](https://github.com/vant-ui/vant/commit/8d29e5c8c6df278800865596f285c17029150963) [7343e5](https://github.com/vant-ui/vant/commit/7343e55409900635a0e39063edb9f67493048a54)

**Style**

- ActionSheet: subname vertical align [#6756](https://github.com/vant-ui/vant/issues/6756)
- Uploader: remove round border radius [#6748](https://github.com/vant-ui/vant/issues/6748)
- Uploader: update delete icon style [#6750](https://github.com/vant-ui/vant/issues/6750)

**Bug Fixes**

- Calendar: subtitle not updated in some cases [#6723](https://github.com/vant-ui/vant/issues/6723)
- Checkbox: dynamic bind group [#6730](https://github.com/vant-ui/vant/issues/6730)
- Field: can't display six characters in iOS [#6743](https://github.com/vant-ui/vant/issues/6743)
- Image: memory leak during SSR [#6721](https://github.com/vant-ui/vant/issues/6721)
- ImagePreview: fit window resize [#6760](https://github.com/vant-ui/vant/issues/6760)
- ImagePreview: swipeTo type should be optional [#6727](https://github.com/vant-ui/vant/issues/6727)
- Picker: click during momentum case incorrect result [#6724](https://github.com/vant-ui/vant/issues/6724)
- Popup: lock-scroll not work in some cases [#6698](https://github.com/vant-ui/vant/issues/6698)

### [v2.9.0](https://github.com/vant-ui/vant/compare/v2.8.7...v2.9.0)

`2020-07-03`

**Feature**

- Icon: add enlarge icon [1c97b1](https://github.com/vant-ui/vant/commit/1c97b1837f3f16f339773133b5e78b8a200c57f5)
- Image: add default slot [#6613](https://github.com/vant-ui/vant/issues/6613)
- ImagePreview: add swipeTo method [#6596](https://github.com/vant-ui/vant/issues/6596)
- ImagePreview: add get-container prop [39b5be](https://github.com/vant-ui/vant/commit/39b5beeac0d4a7e74866cb92eb9e4644872cf41a)
- NoticeBar: optimize replay delay [022196](https://github.com/vant-ui/vant/commit/02219625fb94384865b79cf27ecea5ae0c4f3bb0)
- Sku: add lazy-load prop [#6598](https://github.com/vant-ui/vant/issues/6598)
- Sku: add show-header-image prop [#6598](https://github.com/vant-ui/vant/issues/6598)
- Sku: support large image mode [#6598](https://github.com/vant-ui/vant/issues/6598)
- Sku: enable close-on-click-overlay prop by default [#6631](https://github.com/vant-ui/vant/issues/6631)
- TreeSelect: add selected-icon prop [#6615](https://github.com/vant-ui/vant/issues/6615)

**Style**

- ActionSheet: update description style [#6586](https://github.com/vant-ui/vant/issues/6586)
- AddressEdit: adjust label width [#6591](https://github.com/vant-ui/vant/issues/6591)
- AddressEdit: area picker use round popup [#6584](https://github.com/vant-ui/vant/issues/6584)
- Button: adjust small button size [#6371](https://github.com/vant-ui/vant/issues/6371)
- Cell: adjust inner border gap [#6686](https://github.com/vant-ui/vant/issues/6686)
- ContactEdit: adjust label width [a77ebe](https://github.com/vant-ui/vant/commit/a77ebe11d722a3f242ef8e4125bb94629a56b81f)
- Field: label color updated to gray-7 [#6581](https://github.com/vant-ui/vant/issues/6581)
- Field: label width adjusted to 6em [#6583](https://github.com/vant-ui/vant/issues/6583) [#6589](https://github.com/vant-ui/vant/issues/6589)
- ImagePreview: adjust index position [#6650](https://github.com/vant-ui/vant/issues/6650)
- Picker: optimize option disabled cursor [#6579](https://github.com/vant-ui/vant/issues/6579)
- Rate: the default color is adjusted to red [#6373](https://github.com/vant-ui/vant/issues/6373)
- Uploader: update failed icon [#6653](https://github.com/vant-ui/vant/issues/6653)

**Bug Fixes**

- ImagePreview: fix longpress error on mobile safari [#6660](https://github.com/vant-ui/vant/issues/6660)
- ImagePreview: fix incorrect position after scale [#6656](https://github.com/vant-ui/vant/issues/6656)
- Field: fix label word wrap [#6590](https://github.com/vant-ui/vant/issues/6590)
- NumberKeyboard: fix eliminate tap delay on safari [#6667](https://github.com/vant-ui/vant/issues/6667)
- Picker: disabled not work in cascade mode [#6580](https://github.com/vant-ui/vant/issues/6580)
- Picker: revert add @picker-option-height var [#6663](https://github.com/vant-ui/vant/issues/6663)
- Stepper: fix incorrect button disable status [#6652](https://github.com/vant-ui/vant/issues/6652)

### [v2.8.7](https://github.com/vant-ui/vant/compare/v2.8.6...v2.8.7)

`2020-06-19`

**Feature**

- Dialog: add allow-html prop [#6568](https://github.com/vant-ui/vant/issues/6568)
- Field: add format-trigger prop [#6566](https://github.com/vant-ui/vant/issues/6566)
- Form: rule message can be empty [#6536](https://github.com/vant-ui/vant/issues/6536)
- Sticky: offset-top support rem unit [#6556](https://github.com/vant-ui/vant/issues/6556)

**Style**

- Field: remove word num full color [#6545](https://github.com/vant-ui/vant/issues/6545)
- Picker: add @picker-option-height less var [#6571](https://github.com/vant-ui/vant/issues/6571)

**Bug Fixes**

- Field: should not display null [#6542](https://github.com/vant-ui/vant/issues/6542)
- ImagePreview: incorrect drag area [#6574](https://github.com/vant-ui/vant/issues/6574)
- NoticeBar: failed to replay [e8bd24](https://github.com/vant-ui/vant/commit/e8bd24265d6e36ed61ea353108d57d75602d2f08)

### [v2.8.6](https://github.com/vant-ui/vant/compare/v2.8.5...v2.8.6)

`2020-06-13`

**Feature**

- NoticeBar: allow to force scrolling [7b0546](https://github.com/vant-ui/vant/commit/7b0546dbba7425988ae2b4d1765fe20e907c893f)
- Picker: item-height support rem unit [#6462](https://github.com/vant-ui/vant/issues/6462)
- Stepper: add placeholder prop [#6519](https://github.com/vant-ui/vant/issues/6519)

**Style**

- Field: update disabled color [#6534](https://github.com/vant-ui/vant/issues/6534)

**Bug Fixes**

- Calendar: quick select not work when select same day [#6504](https://github.com/vant-ui/vant/issues/6504)
- CollapseItem: can't hide border [#6533](https://github.com/vant-ui/vant/issues/6533)
- Field: formatter not work when v-model changed [#6490](https://github.com/vant-ui/vant/issues/6490)
- ImagePreview: image blurred after scale on iOS [#6496](https://github.com/vant-ui/vant/issues/6496)
- Picker: cursor.defaultIndex may be 0 [#6473](https://github.com/vant-ui/vant/issues/6473)
- Tabbar: avoid redundant navigation error [#6474](https://github.com/vant-ui/vant/issues/6474)

### [v2.8.5](https://github.com/vant-ui/vant/compare/v2.8.4...v2.8.5)

`2020-06-04`

**Feature**

- DropdownItem: add lazy-render prop [#6454](https://github.com/vant-ui/vant/issues/6454)
- Notify: support component call [#6453](https://github.com/vant-ui/vant/issues/6453)
- ShareSheet: add options description [#6460](https://github.com/vant-ui/vant/issues/6460)
- Skeleton: add round prop [#6441](https://github.com/vant-ui/vant/issues/6441)

**Bug Fixes**

- Popup: incorrect overlay z-index when reopened [#6429](https://github.com/vant-ui/vant/issues/6429)
- Button: set font-size to inherit when loading [#6413](https://github.com/vant-ui/vant/issues/6413) [#6414](https://github.com/vant-ui/vant/issues/6414)
- NoticeBar: scroll failed after activated [d21420](https://github.com/vant-ui/vant/commit/d21420b7d2357c4c0b47bc0f38b48e57d7fd9b81)
- Field: fix render error when value is null or undefined [#6419](https://github.com/vant-ui/vant/issues/6419)

### [v2.8.4](https://github.com/vant-ui/vant/compare/v2.8.3...v2.8.4)

`2020-05-28`

**Feature**

- AddressList: add safe-area-inset-bottom [#6355](https://github.com/vant-ui/vant/issues/6355)
- DatetimePicker: add month-day type [#6395](https://github.com/vant-ui/vant/issues/6395)
- Popup: create overlay for every popup [#6357](https://github.com/vant-ui/vant/issues/6357)

**Style**

- ActionSheet: adjust subname color to gray-6 [e54c11](https://github.com/vant-ui/vant/commit/e54c11d55244e65246df7eddd7751983dbc4d331)
- ActionSheet: remove option border [8db218](https://github.com/vant-ui/vant/commit/8db218e9c0ca6905491a019cf983a0269f3aea8c)
- Cell: lower CSS priority of the border [#6359](https://github.com/vant-ui/vant/issues/6359)
- Collapse: adjust border gag [#6361](https://github.com/vant-ui/vant/issues/6361)
- Collapse: increase content font-size to 14px [#6358](https://github.com/vant-ui/vant/issues/6358)

**Bug Fixes**

- Area: use first city code when county list is empty [#6356](https://github.com/vant-ui/vant/issues/6356)
- Field: can not disable error in form [#6382](https://github.com/vant-ui/vant/issues/6382)
- GoodsAction: incorrect single button radius [#6347](https://github.com/vant-ui/vant/issues/6347)
- Sidebar: should emit change when v-model changed [#6383](https://github.com/vant-ui/vant/issues/6383)

### [v2.8.3](https://github.com/vant-ui/vant/compare/v2.8.2...v2.8.3)

`2020-05-21`

**Feature**

- Form: add submit-on-enter prop [#6336](https://github.com/vant-ui/vant/issues/6336)
- Form: scrollToField can scroll to bottom [#6335](https://github.com/vant-ui/vant/issues/6335)
- Field: adjust field placeholder color to gray-5 [#6304](https://github.com/vant-ui/vant/issues/6304)
- Field: minus can only be placed on the first char [#6303](https://github.com/vant-ui/vant/issues/6303)
- Picker: improve method type, support generic [#6315](https://github.com/vant-ui/vant/issues/6315)

**Bug Fixes**

- Button: text not align center in legacy safari [#6325](https://github.com/vant-ui/vant/issues/6325)
- Calendar: color prop not work when use allow-some-day [#6331](https://github.com/vant-ui/vant/issues/6331)

### [v2.8.2](https://github.com/vant-ui/vant/compare/v2.8.1...v2.8.2)

`2020-05-17`

**Feature**

- Field: add extra slot [#6290](https://github.com/vant-ui/vant/issues/6290)
- Grid: add direction prop [#6256](https://github.com/vant-ui/vant/issues/6256)
- Calendar: add month-show event [#6292](https://github.com/vant-ui/vant/issues/6292)
- NumberKeyboard: support multiple extra key [#6276](https://github.com/vant-ui/vant/issues/6276)
- Stepper: add theme prop [#6282](https://github.com/vant-ui/vant/issues/6282)

**Style**

- Rate: update rate disabled color [#6253](https://github.com/vant-ui/vant/issues/6253)
- Sku: adjust border alignment [#6272](https://github.com/vant-ui/vant/issues/6272)
- Sku: currency symbol should align to bottom [#6274](https://github.com/vant-ui/vant/issues/6274)
- NoticeBar: increase icon min-width to 24px [#6280](https://github.com/vant-ui/vant/issues/6280)

**Bug Fixes**

- Field: textarea line break failed on enter [#6263](https://github.com/vant-ui/vant/issues/6263)
- NoticeBar: replay event only triggered once [#6293](https://github.com/vant-ui/vant/issues/6293)

### [v2.8.1](https://github.com/vant-ui/vant/compare/v2.8.1-beta.0...v2.8.1)

`2020-05-09`

**Feature**

- Calendar: add lazy-render prop [#6245](https://github.com/vant-ui/vant/issues/6245)
- Field: add click-input event [#6239](https://github.com/vant-ui/vant/issues/6239)
- Sku: add sku-reset event [#6220](https://github.com/vant-ui/vant/issues/6220)
- GoodsActionButton: improve test size adjust [b1dcf3](https://github.com/vant-ui/vant/commit/b1dcf36263ae7a19197f2c162e67f220dd171047)

**Bug Fixes**

- Button: text should align center [8c53db](https://github.com/vant-ui/vant/commit/8c53db040dd0dfff60eca1ac284d98f13b4e4ce6)
- Field: should not submit form on enter [#6240](https://github.com/vant-ui/vant/issues/6240)
- Step: active-color should effect circle [#6229](https://github.com/vant-ui/vant/issues/6229)
- Stepper: incorrect value when format minus value [#6238](https://github.com/vant-ui/vant/issues/6238)
- Stepper: should not display NaN [7327a4](https://github.com/vant-ui/vant/commit/7327a481d18271393e25b17d4402dad6d336bb3a)
- Stepper: should not emit focus when input is readonly [c6024b](https://github.com/vant-ui/vant/commit/c6024b18b4191a3a56db0bed1ababa48420c0946)

### [v2.8.0](https://github.com/vant-ui/vant/compare/v2.7.1...v2.8.0)

`2020-05-05`

**Style**

- Button: use flex layout [#6180](https://github.com/vant-ui/vant/issues/6180)
- ActionSheet: improve text size adjust [#6175](https://github.com/vant-ui/vant/issues/6175)
- NavBar: improve text size adjust [7effb7](https://github.com/vant-ui/vant/commit/7effb7cf6cf59a8db1eb77fa16692712de4a18ba)
- NoticeBar: improve text size adjust [#6177](https://github.com/vant-ui/vant/issues/6177)
- NumberKeyboard: improve text size adjust [#6179](https://github.com/vant-ui/vant/issues/6179)
- Pagination: improve text size adjust [#6178](https://github.com/vant-ui/vant/issues/6178)
- PasswordInput: improve text size adjust [#6176](https://github.com/vant-ui/vant/issues/6176)
- Picker: improve text size adjust [#6174](https://github.com/vant-ui/vant/issues/6174) [#6205](https://github.com/vant-ui/vant/issues/6205)
- Picker: update action button color [#6214](https://github.com/vant-ui/vant/issues/6214)
- Tab: improve text size adjust [#6209](https://github.com/vant-ui/vant/issues/6209)
- CouponList: add @coupon-list-close-button-height less var [18a0c5](https://github.com/vant-ui/vant/commit/18a0c545ec881eb296ba6cc11dfaa12febd79e5c)

**Feature**

- Calendar: add unselect event [#6198](https://github.com/vant-ui/vant/issues/6198)
- Calendar: support max-range when type is multiple [#6202](https://github.com/vant-ui/vant/issues/6202)
- Field: add colon prop [#6195](https://github.com/vant-ui/vant/issues/6195)
- Locale: adding Romanian language support [#6193](https://github.com/vant-ui/vant/issues/6193)
- ShareSheet: improve accessibility [#6208](https://github.com/vant-ui/vant/issues/6208)

**Bug Fixes**

- Checkbox: incorrect icon position after font-size scale [#6168](https://github.com/vant-ui/vant/issues/6168)
- Layout: gutter calculation [#6197](https://github.com/vant-ui/vant/issues/6197) [#6143](https://github.com/vant-ui/vant/issues/6143)
- NoticeBar: allow dynamic setting of scrollable [#6190](https://github.com/vant-ui/vant/issues/6190)
- Radio: incorrect icon position after font-size scale [#6173](https://github.com/vant-ui/vant/issues/6173)
- ShareSheet: incorrect scrollbar height in some browsers [#6207](https://github.com/vant-ui/vant/issues/6207)
- Tab: fix ellipsis issue [#6209](https://github.com/vant-ui/vant/issues/6209)

### [v2.7.1](https://github.com/vant-ui/vant/compare/v2.7.0...v2.7.1)

`2020-04-28`

**Bug Fixes**

- Revert "style(NavBar): left & right part align to bottom (#6147)" [#6147](https://github.com/vant-ui/vant/issues/6147)

### [v2.7.0](https://github.com/vant-ui/vant/compare/v2.6.3...v2.7.0)

`2020-04-28`

**Style**

- NumberKeyboard: new style [3188b4](https://github.com/vant-ui/vant/commit/3188b4d25bb6e60ed5de930ec8947929a7577dd3) [#6149](https://github.com/vant-ui/vant/issues/6149) [#6151](https://github.com/vant-ui/vant/issues/6151)

<img src="https://b.yzcdn.cn/vant/keyboard-style-04281448.png" style="width: 600px; height: 394px;">

- add base-font-family [#6126](https://github.com/vant-ui/vant/issues/6126)
- DropdownMenu: add box-shadow style [7db744](https://github.com/vant-ui/vant/commit/7db74490956ec9d4c742a885e436dc6915f1f9dc)
- NavBar: left & right part align to bottom [#6147](https://github.com/vant-ui/vant/issues/6147)
- Sidebar: add less vars [e1a7c6](https://github.com/vant-ui/vant/commit/e1a7c6668de0b7da58028210e174c9156e87bea2)
- Sidebar: update border style [a31032](https://github.com/vant-ui/vant/commit/a31032e0d63956b2e9f0c75c8a85ca662fe42545)
- Toast: increase border-radius to 8px [2364c4](https://github.com/vant-ui/vant/commit/2364c4f526912433abf5ee2f36e2148beea7140b)
- TreeSelect: change checked icon to success icon [5b72e4](https://github.com/vant-ui/vant/commit/5b72e4339347a710620bf630f1bc8ee09511d63c)

**Feature**

- NoticeBar: add start method [#6069](https://github.com/vant-ui/vant/issues/6069)
- ImagePreview: adjust double-click interval to 250ms [#6136](https://github.com/vant-ui/vant/issues/6136)
- NumberKeyboard: add collapse icon [#6152](https://github.com/vant-ui/vant/issues/6152)
- NumberKeyboard: add close-button-loading prop [#6158](https://github.com/vant-ui/vant/issues/6158)

**Bug Fixes**

- Layout: outside of the screen after setting gutter [#6143](https://github.com/vant-ui/vant/issues/6143)
- Tab: incorrect vnode order in some cases [#6140](https://github.com/vant-ui/vant/issues/6140)
- uploader: automatically filter files exceeding the max-size [#6150](https://github.com/vant-ui/vant/issues/6150)
- Uploader: file message should be reactive [#6142](https://github.com/vant-ui/vant/issues/6142)
- types: VanComponent should extends Vue [#6148](https://github.com/vant-ui/vant/issues/6148)

### [v2.6.3](https://github.com/vant-ui/vant/compare/v2.6.2...v2.6.3)

`2020-04-20`

**Bug Fixes**

- Tab: fail to init in some cases [#6101](https://github.com/vant-ui/vant/issues/6101)
- sort vnode not work [#6100](https://github.com/vant-ui/vant/issues/6100)

### [v2.6.2](https://github.com/vant-ui/vant/compare/v2.6.1...v2.6.2)

`2020-04-18`

**Feature**

- Empty: support offline scenario [#6055](https://github.com/vant-ui/vant/issues/6055)
- NoticeBar: add replay event [#6079](https://github.com/vant-ui/vant/issues/6079)
- Overlay: add lock-scroll prop [#6082](https://github.com/vant-ui/vant/issues/6082)
- Uploader: add lazy-load prop [#6083](https://github.com/vant-ui/vant/issues/6083)

**Bug Fixes**

- Checkbox: get changed value in click event [#6066](https://github.com/vant-ui/vant/issues/6066)
- Picker: setColumnValues failed in cascade mode [#6080](https://github.com/vant-ui/vant/issues/6080)
- Slider: incorrect bar-height when vertical [#6065](https://github.com/vant-ui/vant/issues/6065)
- Swipe: incorrect width after resize if hidden [#6084](https://github.com/vant-ui/vant/issues/6084)

### [v2.6.1](https://github.com/vant-ui/vant/compare/v2.6.0...v2.6.1)

`2020-04-14`

**Feature**

- AddressEdit: add area-placeholder prop [#6023](https://github.com/vant-ui/vant/issues/6023)
- ImagePreview: support local registration [#6031](https://github.com/vant-ui/vant/issues/6031)

**Bug Fixes**

- sortChildren broke SSR [#6046](https://github.com/vant-ui/vant/issues/6046)
- Calendar: default-date should be today, close #6025 [#6025](https://github.com/vant-ui/vant/issues/6025) [#6028](https://github.com/vant-ui/vant/issues/6028)

### [v2.6.0](https://github.com/vant-ui/vant/compare/v2.5.9...v2.6.0)

`2020-04-09`

**Feature**

- add ShareSheet component [#6019](https://github.com/vant-ui/vant/issues/6019)
- add Empty component [#6010](https://github.com/vant-ui/vant/issues/6010)

**Feature**

- Form: add show-error prop [#5941](https://github.com/vant-ui/vant/issues/5941)
- Tabbar: add placeholder prop [#5979](https://github.com/vant-ui/vant/issues/5979)
- Sku: enable safe-area-inset-bottom by default [#5960](https://github.com/vant-ui/vant/issues/5960)
- Tabbar: enable safe-area-inset-bottom by default when fixed [#5968](https://github.com/vant-ui/vant/issues/5968)
- SubmitBar: enable safe-area-inset-bottom by default [#5956](https://github.com/vant-ui/vant/issues/5956)
- GoodsAction: enable safe-area-inset-bottom by default [#5955](https://github.com/vant-ui/vant/issues/5955)
- Swipe: allow swipe multiple item at once [#5953](https://github.com/vant-ui/vant/issues/5953)
- Calendar: auto selected to max range [#5992](https://github.com/vant-ui/vant/issues/5992)

**Improvement**

- NavBar: improve active feedback [#5949](https://github.com/vant-ui/vant/issues/5949)
- Popup: improve leave animation timing function [#5954](https://github.com/vant-ui/vant/issues/5954)
- Picker: improve scroll speed [#5951](https://github.com/vant-ui/vant/issues/5951)
- Swipe: improve swipe threshold [#6003](https://github.com/vant-ui/vant/issues/6003)
- TreeSelect: update nav background color [#5991](https://github.com/vant-ui/vant/issues/5991)

**Bug Fixes**

- Button: icon-prefix prop not work [#5947](https://github.com/vant-ui/vant/issues/5947)
- Calendar: rendering error when activated [#5978](https://github.com/vant-ui/vant/issues/5978)
- Form: incorrect validation order when add field dynamically [b8dea3](https://github.com/vant-ui/vant/commit/b8dea3c13b7dbf6533169653c493a3156c07f1d4)
- NavBar: icon align center [#5948](https://github.com/vant-ui/vant/issues/5948)
- Stepper: readonly not work in lagacy mobile safari [#5976](https://github.com/vant-ui/vant/issues/5976)

### [v2.5.9](https://github.com/vant-ui/vant/compare/v2.5.8...v2.5.9)

`2020-03-31`

**Feature**

- AddressEdit: add click-area event [#5939](https://github.com/vant-ui/vant/issues/5939)
- NavBar: add placeholder prop [#5938](https://github.com/vant-ui/vant/issues/5938)
- Steps: add click-step event [#5937](https://github.com/vant-ui/vant/issues/5937)

**Bug Fixes**

- NumberKeyboard: show-delete-key prop not work [#5935](https://github.com/vant-ui/vant/issues/5935)
- Toast: incorrect height in legacy devices [#5931](https://github.com/vant-ui/vant/issues/5931)
- Sticky: Fixed error when accessing the window during SSR [#5958](https://github.com/vant-ui/vant/issues/5958)

### [v2.5.8](https://github.com/vant-ui/vant/compare/v2.5.7...v2.5.8)

`2020-03-27`

**Feature**

- support generate webstorm types [#5900](https://github.com/vant-ui/vant/issues/5900)
- Circle: improve text padding [10f32d](https://github.com/vant-ui/vant/commit/10f32d6619199e99ff743cb5425db1e54e495fd0)
- Form: add show-error-message prop [#5927](https://github.com/vant-ui/vant/issues/5927)
- ImagePreview: enable swipe lazy-render [#5879](https://github.com/vant-ui/vant/issues/5879)
- Sidebar: set overflow-y auto [#5921](https://github.com/vant-ui/vant/issues/5921)
- Swipe: add lazy-render prop [365f2b](https://github.com/vant-ui/vant/commit/365f2b16f7d9592f92413e206439585468a8a1c7)
- Swipe: use flex layout [f701de](https://github.com/vant-ui/vant/commit/f701de9e58db5f88a582e3277c97a0c9ca99eec4)

**Bug Fixes**

- Calendar: fix the default date of multiple selection type [#5907](https://github.com/vant-ui/vant/issues/5907)
- PullRefresh: track should be full of container [#5878](https://github.com/vant-ui/vant/issues/5878)
- Sticky: shoud rerender after visibility changed [#5888](https://github.com/vant-ui/vant/issues/5888)
- Swipe: incorrect offset after resize [#5922](https://github.com/vant-ui/vant/issues/5922)

### [v2.5.7](https://github.com/vant-ui/vant/compare/v2.5.6...v2.5.7)

`2020-03-20`

**Bug Fixes**

- Locale: fix incorrect japanese filename [e8c88a](https://github.com/vant-ui/vant/commit/e8c88a380217eb48cef8aa7dc29d378a1031120a)

### [v2.5.6](https://github.com/vant-ui/vant/compare/v2.5.5...v2.5.6)

`2020-03-20`

**Feature**

- Calendar: add allow-same-day prop [#5688](https://github.com/vant-ui/vant/issues/5688)
- GoodsAction: add badge prop, mark info prop as deprecated [0dea9e](https://github.com/vant-ui/vant/commit/0dea9e2cb1562decc07ef4467d085247b91924fd)
- GridItem: add badge prop, mark info prop as deprecated [db94b2](https://github.com/vant-ui/vant/commit/db94b20c8258ebb31bac99ea1f0c918d62de1059)
- Icon: add badge prop, mark info prop deprecated [575577](https://github.com/vant-ui/vant/commit/575577ed58a1e6daa36ffba7db8054556aa0d24d)
- ImagePreview: add closed event [5b279a](https://github.com/vant-ui/vant/commit/5b279ab0dc862c0a3257d18fe17d04ed8dd8c1dd)
- locale: add japanese language [#5853](https://github.com/vant-ui/vant/issues/5853) [#5854](https://github.com/vant-ui/vant/issues/5854)
- SidebarItem: add badge prop, mark info prop as deprecated [01482f](https://github.com/vant-ui/vant/commit/01482f20bc2150a7e4667fac062b4f129b0ac0c1)
- Tab: add badge prop, mark info prop as deprecated [214b13](https://github.com/vant-ui/vant/commit/214b13b8fff411a401fe6ccfc9eb979a51df7461)
- TabbarItem: add badge prop, mark info prop as deprecated [d61cbd](https://github.com/vant-ui/vant/commit/d61cbdd086c9050fa467803be676a1eb14d50f16)
- TreeSelect: add badge option, mark info option as deprecated [0cc7a3](https://github.com/vant-ui/vant/commit/0cc7a305287f43314910f893092c09004cef5349)
- Uploader: add chooseFile method [#5818](https://github.com/vant-ui/vant/issues/5818)
- Uploader: add show-upload prop [66c0b3](https://github.com/vant-ui/vant/commit/66c0b3c1b7d101f242071cf90e5c0b2b899edbdd)
- Uploader: use before read promise resolved value [#5813](https://github.com/vant-ui/vant/issues/5813)

**Bug Fixes**

- Calendar: incorret button native-type [#5873](https://github.com/vant-ui/vant/issues/5873)
- Field: should not cache input slot [#5868](https://github.com/vant-ui/vant/issues/5868)
- ImagePreview: should not show previews image [7fcfc5](https://github.com/vant-ui/vant/commit/7fcfc5f3270d3507a002247c53a29da211f1ecb6)
- Picker: update cascade after setColumnIndex [#5807](https://github.com/vant-ui/vant/issues/5807)
- Picker: update cascade after setColumnValue [#5807](https://github.com/vant-ui/vant/issues/5807)
- Toast: should lock scroll when use forbidClick [df8777](https://github.com/vant-ui/vant/commit/df877751b3497eb6477797ee1a52933067e57676)

### [v2.5.5](https://github.com/vant-ui/vant/compare/v2.5.4...v2.5.5)

`2020-03-11`

**Feature**

- Calendar: add show-title prop [#5779](https://github.com/vant-ui/vant/issues/5779)
- Calendar: add show-subtitle prop [#5779](https://github.com/vant-ui/vant/issues/5779)
- Field: improve number keyboard [e89baa](https://github.com/vant-ui/vant/commit/e89baa12ae24dbd27466bd6ec694074ab99acf5d)
- Stepper: improve number keyboard [58e74a](https://github.com/vant-ui/vant/commit/58e74a9e8bfc36f69103c6a301170c5f6ada03dd)
- GoodsActionIcon: add dot prop [b983ac](https://github.com/vant-ui/vant/commit/b983ac08919056e1095767d1deb3f78e5274b41c)

**Bug Fixes**

- AddressEdit: check addressDetail only when showDetail is true [#5803](https://github.com/vant-ui/vant/issues/5803)
- Calendar: color not work in multiple mode [#5786](https://github.com/vant-ui/vant/issues/5786)
- Field: should not get formValue from button slot [#5785](https://github.com/vant-ui/vant/issues/5785)
- GoodsActionIcon: info not work with icon slot [#5788](https://github.com/vant-ui/vant/issues/5788)
- Stepper: skip form number validation [#5792](https://github.com/vant-ui/vant/issues/5792)
- Sticky: should not detect scroll when hidden [41e5c0](https://github.com/vant-ui/vant/commit/41e5c035dcf75c1f1d4c04673d3db255e439d452)

### [v2.5.4](https://github.com/vant-ui/vant/compare/v2.5.3...v2.5.4)

`2020-03-08`

**Feature**

- Calendar: add multiple type [#5705](https://github.com/vant-ui/vant/issues/5705)
- Field: input inherit line-height [#5737](https://github.com/vant-ui/vant/issues/5737)
- Search: add left slot [#5771](https://github.com/vant-ui/vant/issues/5771)
- Uploader: add upload-icon prop [b3b46c](https://github.com/vant-ui/vant/commit/b3b46cde45f885b746a2a633e5fc0e87e1881abe)
- Uploader: increase border-radius to 8px [c67918](https://github.com/vant-ui/vant/commit/c6791841f4b06e699a684da0243526147438d852)
- Uploader: update upload area style [bd4e64](https://github.com/vant-ui/vant/commit/bd4e64190e63eea30c342ea5255d8603a70385f9)

**Bug Fixes**

- Calendar: incorrect position when poppable is false [#5760](https://github.com/vant-ui/vant/issues/5760)
- DropdownMenu: menu ref may not exist in some cases [#5770](https://github.com/vant-ui/vant/issues/5770)
- Tabs: incorrect scrollspy position while inside a scroller [0993b3](https://github.com/vant-ui/vant/commit/0993b394b16fdbf92bdf02d39090e631bba1f471)
- Tabs: lock scroll not work when using scrollspy [#5727](https://github.com/vant-ui/vant/issues/5727)
- TimePicker: incorrect value when set min-minute dynamically [#5767](https://github.com/vant-ui/vant/issues/5767)

**Types**

- Form: fix missing scrollToField method [df4439](https://github.com/vant-ui/vant/commit/df4439e9f6759a446b522652233703601093e99d)
- ImagePreview: fix missing closeable option [d5438d](https://github.com/vant-ui/vant/commit/d5438dfe0dc9df22e94881b57def33207eca44e6)
- Toast: fix missing iconPrefix option [3237e5](https://github.com/vant-ui/vant/commit/3237e56561e1b6b80ea3431f3b8a9f30f61d4b08)

### [v2.5.3](https://github.com/vant-ui/vant/compare/v2.5.2...v2.5.3)

`2020-02-28`

**Feature**

- ActionSheet: add close-on-popstate prop [#5716](https://github.com/vant-ui/vant/issues/5716)
- Area: add columns-top、columns-bottom prop [#5719](https://github.com/vant-ui/vant/issues/5719)
- Area: add title slot [#5719](https://github.com/vant-ui/vant/issues/5719)
- Button: add icon-prefix prop [#5666](https://github.com/vant-ui/vant/issues/5666)
- Cell: add icon-prefix prop [#5666](https://github.com/vant-ui/vant/issues/5666)
- Field: add icon-prefix prop [#5666](https://github.com/vant-ui/vant/issues/5666)
- Form: rule message can be function [#5704](https://github.com/vant-ui/vant/issues/5704)
- Form: rule validator add rule param [#5704](https://github.com/vant-ui/vant/issues/5704)
- Form: support pattern rule [#5700](https://github.com/vant-ui/vant/issues/5700)
- Form: support rule formatter [d87835](https://github.com/vant-ui/vant/commit/d878354ebf8eedf849764480c11a90c4cdd2fbe3)
- GridItem: add icon-prefix prop [#5666](https://github.com/vant-ui/vant/issues/5666)
- Rate: add icon-prefix prop [#5666](https://github.com/vant-ui/vant/issues/5666)
- TabbarItem: add icon-prefix prop [#5666](https://github.com/vant-ui/vant/issues/5666)

**Bug Fixes**

- Calendar: scrollIntoView error when hidden [#5708](https://github.com/vant-ui/vant/issues/5708)
- DatetimePicker: getPicker method not work [#5710](https://github.com/vant-ui/vant/issues/5710)
- Popup: close-on-popstate not work when deactivated [f07077](https://github.com/vant-ui/vant/commit/f070773b42b86dd98d1f3989651e735895db78ee)

### [v2.5.2](https://github.com/vant-ui/vant/compare/v2.5.1...v2.5.2)

`2020-02-21`

**Feature**

- Calendar: add close、closed event [556f33](https://github.com/vant-ui/vant/commit/556f335cc224a40ab27bda863a67601c36339ea9)
- Calendar: add open、opened event [a83082](https://github.com/vant-ui/vant/commit/a83082f599362456d85864904cb5f47b44138e43)
- Form: add scroll-to-error prop [#5680](https://github.com/vant-ui/vant/issues/5680)
- Form: add validate-trigger prop [c08db7](https://github.com/vant-ui/vant/commit/c08db724a3ed6440da5d5faebfa08561312f4d3a)
- Form: add scrollToField method [#5680](https://github.com/vant-ui/vant/issues/5680)
- Sku: add preview-on-click-image prop [#5684](https://github.com/vant-ui/vant/issues/5684)
- Sku: add sku-header-image-extra slot [#5696](https://github.com/vant-ui/vant/issues/5696)

**Bug Fixes**

- Swipe: fix wrap problems caused by decimal width in some android devices [02afe7](https://github.com/vant-ui/vant/commit/02afe720c6aaeeb58036cde3072b6373e3b9254f)

### [v2.5.1](https://github.com/vant-ui/vant/compare/v2.5.1-beta.0...v2.5.1)

`2020-02-18`

**Feature**

- Sku: support define initialMessages
- Calendar: scroll to current month after reset [407b7d](https://github.com/vant-ui/vant/commit/407b7ded43bc87c98605444dbbb829f5f05744b6)
- Calendar: scroll to currecnt month when default-date changed [#5664](https://github.com/vant-ui/vant/issues/5664)

**Bug Fixes**

- Calendar: add Math.floor to avoid decimal height issues [#5640](https://github.com/vant-ui/vant/issues/5640)
- Calendar: should not check range in single mode [79d2c3](https://github.com/vant-ui/vant/commit/79d2c344f9ee9945b09434b35cbe63a3816410ad)
- Form: error-message-align prop type [#5674](https://github.com/vant-ui/vant/issues/5674)
- Swipe: incorrect width when resize in invisible state [#5678](https://github.com/vant-ui/vant/issues/5678)

### [v2.5.0](https://github.com/vant-ui/vant/compare/v2.4.7...v2.5.0)

`2020-02-15`

**New Component**

- add Form component

**Feature**

- Field: add name prop [f3398d](https://github.com/vant-ui/vant/commit/f3398dc2cdd1191613b97454b4725275458bde1b)
- Field: add rules prop [0ed7aa](https://github.com/vant-ui/vant/commit/0ed7aaac88f769549b688259b8e6e1050a10cb99)
- AddressEdit: add disable-area prop [#5630](https://github.com/vant-ui/vant/issues/5630)
- AddressList: add item-bottom slot [#5629](https://github.com/vant-ui/vant/issues/5629)
- RadioGroup: add direction prop [4dd41b](https://github.com/vant-ui/vant/commit/4dd41b23decbaf86c8812e0afcc1d72773f223f6)
- CheckboxGroup: add direction prop [153902](https://github.com/vant-ui/vant/commit/15390241d8d4252a828aa0e9d8c61377ba07512a)
- ImagePreview: add scale event [#5658](https://github.com/vant-ui/vant/issues/5658)
- ImagePreview: add closeable prop [#5654](https://github.com/vant-ui/vant/issues/5654)

**Style**

- Field: input slot vertical align center [03c826](https://github.com/vant-ui/vant/commit/03c826c4d44efd95a5ee509b5f183d8ded574fd7)
- Field: improve label right padding [2d6445](https://github.com/vant-ui/vant/commit/2d64458776df87625db9e8b07d83a7044a2bcf53)
- Uploader: add uploader disabled style [#5628](https://github.com/vant-ui/vant/issues/5628)

**Bug Fixes**

- Calendar: fix render issues in some devices [#5640](https://github.com/vant-ui/vant/issues/5640)
- Dialog: fix Dialog.Component typing [#5646](https://github.com/vant-ui/vant/issues/5646)
- Field: text-fill-color may affect child element [e17a4a](https://github.com/vant-ui/vant/commit/e17a4a24993822b0f35114dacbbb3bebc5b51a60)
- Picker: change event untriggered without a transition [#5662](https://github.com/vant-ui/vant/issues/5662)
- Tabs: scrollspy not work when custom scroller [#5637](https://github.com/vant-ui/vant/issues/5637)
- Calendar: should not submit form when click button [e93fcb](https://github.com/vant-ui/vant/commit/e93fcb0603b988a2ffb5b1651588f7e4ad8aa92d)

### [v2.4.7](https://github.com/vant-ui/vant/compare/v2.4.7-beta.0...v2.4.7)

`2020-02-06`

**Feature**

- Calendar: improve accessibility [2124cc](https://github.com/vant-ui/vant/commit/2124cc5261be4a7d666cf6f70d4295309f3705d9)
- Field: highlight word num when reaching maxlength [61093e](https://github.com/vant-ui/vant/commit/61093ef00f2dc421eb94ec7690093c1d565a296c)
- Sku: add sku-actions-top slot [#5617](https://github.com/vant-ui/vant/issues/5617)
- Uploader: support failed status [#5624](https://github.com/vant-ui/vant/issues/5624)
- Uploader: support uploading status [#5625](https://github.com/vant-ui/vant/issues/5625)

**Style**

- ActionSheet: add @action-sheet-close-icon-active-color less var [265bfe](https://github.com/vant-ui/vant/commit/265bfeaac756e05803858062ab1ece2092a08e17)
- Popup: add @popup-close-icon-active-color less var [660b03](https://github.com/vant-ui/vant/commit/660b0399512d3deddcdfb99af5cff1674617c515)

**Bug Fixes**

- Calendar: missing className when selected [0b7c56](https://github.com/vant-ui/vant/commit/0b7c567a78c85fbf1c3d59fcd3ce76c691040ff1)
- Popup: may throw error when using get-container and destroyed

### [v2.4.6](https://github.com/vant-ui/vant/compare/v2.4.5...v2.4.6)

`2020-02-01`

**Bug Fixes**

- Picker: should watch columns change [#5614](https://github.com/vant-ui/vant/issues/5614)

### [v2.4.5](https://github.com/vant-ui/vant/compare/v2.4.4...v2.4.5)

`2020-02-01`

**Feature**

- Picker: support cascade columns [#4247](https://github.com/vant-ui/vant/issues/4247)
- Slider: add button-size prop [1e9b8c](https://github.com/vant-ui/vant/commit/1e9b8c846674562d56ab638a0982baab4bb6870e)
- Optimize the props type. The original number type props now support string.

**Style**

- DropdownItem: add @dropdown-item-z-index less var [6f4c6f](https://github.com/vant-ui/vant/commit/6f4c6f5aa6614559cfc24bc361e68c9c938bbb61)
- IndexBar: add @index-anchor-z-index less var [89ee8e](https://github.com/vant-ui/vant/commit/89ee8e38723dadb2daa6ee31c325cdd2ad03ba99)
- IndexBar: add @index-bar-sidebar-z-index less var [89ee8e](https://github.com/vant-ui/vant/commit/89ee8e38723dadb2daa6ee31c325cdd2ad03ba99)
- IndexBar: add @index-bar-index-active-color less var [0011db](https://github.com/vant-ui/vant/commit/0011db75365b60699ae140d85e54b9e477f46a22)
- Notify: add @notify-text-color less var [9dcf57](https://github.com/vant-ui/vant/commit/9dcf57c65f5e046318e953f2e8ce87918b1cb312)
- Overlay: add @overlay-z-index less var [95d19f](https://github.com/vant-ui/vant/commit/95d19f70d1c90efc752074ff764b07787d89cf1e)
- Rate: add @rate-icon-disabled-color less var [8b8471](https://github.com/vant-ui/vant/commit/8b8471945c4313735a5fe59402212f37a31acfea)
- Rate: add @rate-icon-full-color less var [5c804c](https://github.com/vant-ui/vant/commit/5c804cf920b75c5bdf962fa49eae31363783f32f)
- Rate: add @rate-icon-void-color less var [f90015](https://github.com/vant-ui/vant/commit/f90015efe7619af055b9ebd4c8be7da1f17b8da0)
- Slider: add @slider-bar-height less var [a5819c](https://github.com/vant-ui/vant/commit/a5819c286e06469bc41e8aa9e0ed44cc21625dad)
- Search: add @search-content-background-color less var [ea7419](https://github.com/vant-ui/vant/commit/ea74194990314bd1ff1e8237c221be92fdb8ae37)
- Step: add @step-active-color less var [9e7a68](https://github.com/vant-ui/vant/commit/9e7a6874141fa05f0158ca8006c268d0a3d92679)
- Tabbar: add @tabbar-z-index less var [0441f7](https://github.com/vant-ui/vant/commit/0441f7ba098aca24b797de29d10af8f47cf32d15)
- NavBar: add @nav-bar-z-index less var [a2d870](https://github.com/vant-ui/vant/commit/a2d870ad8ee4912226ec8871cc4c2d56ef870902)
- NumberKeyboard: add @number-keyboard-z-index less var [760938](https://github.com/vant-ui/vant/commit/760938962399e0589b4a258ff29e7fe2f3ba90f1)

**Bug Fixes**

- ImagePreview: limit max-zoom when double clicking [1baa60](https://github.com/vant-ui/vant/commit/1baa60f2244b4605dc82f6dcf564671f5c623023)
- Popup: duration prop not work when position is center [44072e](https://github.com/vant-ui/vant/commit/44072e8c3f548cff78401780213ab7ef213372c3)
- Step: active-color should be effective for line [cfadce](https://github.com/vant-ui/vant/commit/cfadcefb0a1c29dfb1d940fbb7add746595158bd)

### [v2.4.4](https://github.com/vant-ui/vant/compare/v2.4.3...v2.4.4)

`2020-01-24`

**Feature**

- Card: change thumb fit mode to cover [e766d5](https://github.com/vant-ui/vant/commit/e766d5d5743e7f492b3601ce4010b8524fb2b016)
- Calendar: add get-contaienr prop [#5609](https://github.com/vant-ui/vant/issues/5609)
- Calendar: add close-on-popstate prop [2b82dc](https://github.com/vant-ui/vant/commit/2b82dcc3dd2dba678aba5e0533e0ff6af7c55b11)
- CountDown: add change event [#5599](https://github.com/vant-ui/vant/issues/5599)
- GoodsActionButton: add icon prop [b83bed](https://github.com/vant-ui/vant/commit/b83bed3b6c41d0896386b3c4b6380c9568bd3ef2)

**Bug Fixes**

- Sku: get-container can be string type [#5608](https://github.com/vant-ui/vant/issues/5608)

### [v2.4.3](https://github.com/vant-ui/vant/compare/v2.4.3-beta.0...v2.4.3)

`2020-01-19`

**Feature**

- Calendar: add max-range、range-prompt prop [#5583](https://github.com/vant-ui/vant/issues/5583)
- ImagePreview: add @image-preview-index-text-shadow var [e2f302](https://github.com/vant-ui/vant/commit/e2f30242eaaebd36d9816e2746fe6c44323e6aca)
- Stepper: add long-press prop [2f3ec6](https://github.com/vant-ui/vant/commit/2f3ec6a3d48a9d56f8127d27d51c3337f6e72cab)
- Swipe: pause autoplay when page hidden [113157](https://github.com/vant-ui/vant/commit/11315787ec980767973a3fded50fb5858e51e298)

**Improvement**

- Icon: update share icon [2f77ac](https://github.com/vant-ui/vant/commit/2f77acfc6cef23ea664defc38c4cd806ceca1ee4)
- Field: imporve readonly cursor [60173d](https://github.com/vant-ui/vant/commit/60173dd6bc004339333c50218d7c6b2f6c1bc07b)
- Stepper: improve disable-input behavior [959eca](https://github.com/vant-ui/vant/commit/959eca136c4ca6a39e22d36512db74b93ad100c6)

**Bug Fixes**

- Calendar: should show range prompt after select [ff0901](https://github.com/vant-ui/vant/commit/ff09011e0ef18ab29dd70b51f412625dd10bb4cb)
- GoodsAction: should set wrapper height [#5593](https://github.com/vant-ui/vant/issues/5593)

**Types**

- Calendar: fix missing type definition [#5588](https://github.com/vant-ui/vant/issues/5588)
- Toast: incorrect definition of setDefaultOptions method [#5582](https://github.com/vant-ui/vant/issues/5582)

### [v2.4.2](https://github.com/vant-ui/vant/compare/v2.4.2-beta.1...v2.4.2)

`2020-01-14`

**Feature**

- Sku: add properties prop [#5525](https://github.com/vant-ui/vant/issues/5525)
- Field: add digit type [#5524](https://github.com/vant-ui/vant/issues/5524)
- Image: add error-icon prop [#5470](https://github.com/vant-ui/vant/issues/5470)
- Image: add loading-icon prop [#5469](https://github.com/vant-ui/vant/issues/5469)
- Field: add formatter prop [#5534](https://github.com/vant-ui/vant/issues/5534)
- Swipe: add prev、next method [#5548](https://github.com/vant-ui/vant/issues/5548)
- GoodsAcitonIcon: add color prop [#5576](https://github.com/vant-ui/vant/issues/5576)

**Improvement**

- AddressEdit: show error message in field [#5479](https://github.com/vant-ui/vant/issues/5479)
- ActionSheet: update close icon style [#5574](https://github.com/vant-ui/vant/issues/5574)
- AddressList: update style [#5507](https://github.com/vant-ui/vant/issues/5507)
- CouponList: update style [#5501](https://github.com/vant-ui/vant/issues/5501)
- Calendar: scroll to current month when show [#5526](https://github.com/vant-ui/vant/issues/5526)
- ImagePreview: improve error image style [#5570](https://github.com/vant-ui/vant/issues/5570)
- improve cursor of all components [c1a535](https://github.com/vant-ui/vant/commit/c1a535b0dd9470f8eb526e86aa59cf6dec022f3a)

**Bug Fixes**

- Button: should not have click feedback when loading [0a70d3](https://github.com/vant-ui/vant/commit/0a70d344124ef756a73ea9edfee07303f394d880)
- Card: thumb image border-radius become effective [#5480](https://github.com/vant-ui/vant/issues/5480)
- Calendar: incorrect month title after auto scroll [#5569](https://github.com/vant-ui/vant/issues/5569)
- Calendar: missing info when selected [#5536](https://github.com/vant-ui/vant/issues/5536)
- Checkbox: only the icon is clickable when label-disabled [3d10d4](https://github.com/vant-ui/vant/commit/3d10d42fccadd1b9df46860d758a91f7825073e9)
- CouponList: incorrect click feedback [#5521](https://github.com/vant-ui/vant/issues/5521)
- Field: should limit number input in iOS [#5520](https://github.com/vant-ui/vant/issues/5520)
- ImagePreview: disable desktop browser image drag [#4487](https://github.com/vant-ui/vant/issues/4487)
- Picker: optimize the click experience [5cbb9e](https://github.com/vant-ui/vant/commit/5cbb9e29989ac58d44a4ec503cbb984269c8f18e)
- PullRefresh: should set height when using head-height [028747](https://github.com/vant-ui/vant/commit/028747c35471f33e8c2b0baa6fb8915510daac22)
- Tabs: can not render line when wrapper is fixed [#5496](https://github.com/vant-ui/vant/issues/5496)

### [v2.4.1](https://github.com/vant-ui/vant/compare/v2.4.0...v2.4.1)

`2020-01-02`

**Feature**

- ContactEdit: show error message in field [#5437](https://github.com/vant-ui/vant/issues/5437)
- CouponCell: prefer to use value over denominations [#5438](https://github.com/vant-ui/vant/issues/5438)

**Bug Fixes**

- Calendar: fix incorrect day offset [#5452](https://github.com/vant-ui/vant/issues/5452)
- List: fix incorrect reaching edge condition when direction is up [#5439](https://github.com/vant-ui/vant/issues/5439)

### [v2.4.0](https://github.com/vant-ui/vant/compare/v2.3.3...v2.4.0)

`2020-01-01`

**New Component**

- add Calendar component

![](https://img01.yzcdn.cn/vant/calendar-12282.png)

**Feature**

- List: add error slot [e9a938](https://github.com/vant-ui/vant/commit/e9a938820232194ad5f62b2b6588fa5d604016ae)
- List: add finished slot [8a0705](https://github.com/vant-ui/vant/commit/8a0705d7610890c0da47e9e7eb0ef5665a3dca0d)
- PullRefresh: add success slot [56e450](https://github.com/vant-ui/vant/commit/56e450f29e67a5e66b26cf9937c458270f462bdc)
- CouponList: update button style [#5368](https://github.com/vant-ui/vant/issues/5368)
- DatetimePicker: add getPicker method [1dc1fe](https://github.com/vant-ui/vant/commit/1dc1feae40b8ca11df980aa1d5ecf108151938e4)
- Image: add @image-loading-icon-size、@image-error-icon-size var [d7ae8c](https://github.com/vant-ui/vant/commit/d7ae8c5a26dcb6b7b79b4ca7a2ed3842673c2ea0)
- Picker: add confirm method [5eb2a4](https://github.com/vant-ui/vant/commit/5eb2a4012ae3e9d90a29a924ae454e54408b1235)
- TreeSelect: add @tree-select-item-selected-size var [373159](https://github.com/vant-ui/vant/commit/37315975203f28d36634d9ad8388a7f4dc8a44ea)

**Compatibility**

- NumberKeyboard: avoid Vue 2.6 event bubble issues [#5349](https://github.com/vant-ui/vant/issues/5349)
- Picker: avoid Vue 2.6 event bubble issues by manually binding events [#5345](https://github.com/vant-ui/vant/issues/5345)
- PullRefresh: avoid Vue 2.6 event bubble issues [#5347](https://github.com/vant-ui/vant/issues/5347)
- Rate、Slider: avoid Vue 2.6 event bubble issues [#5350](https://github.com/vant-ui/vant/issues/5350)
- Swipe: avoid Vue 2.6 event bubble issues [#5346](https://github.com/vant-ui/vant/issues/5346)
- SwipeCell: avoid Vue 2.6 event bubble issues [#5348](https://github.com/vant-ui/vant/issues/5348)

**Bug Fixes**

- ImagePreview: close event triggered twice [#5411](https://github.com/vant-ui/vant/issues/5411)
- ImagePreview: should not emit close event after tapped when using async-close [#5410](https://github.com/vant-ui/vant/issues/5410)
- PullRefresh: failed to trigger pull refresh when scrolling [e00058](https://github.com/vant-ui/vant/commit/e00058b681d8796feaaaa4a9f2c4083a18b61fe9)
- Tag: incorrect transition when set closeable dynamically [fe6e2f](https://github.com/vant-ui/vant/commit/fe6e2f29ba289206138fe17df046a55000b218ad)
- Tag: should not trigger click event when close [#5351](https://github.com/vant-ui/vant/issues/5351)
- Toast: may lose forbid click when has multiple toasts [#5398](https://github.com/vant-ui/vant/issues/5398)
- Icon: should compatible with medel-o [7b905a](https://github.com/vant-ui/vant/commit/7b905a6de85b895e2226c35875ee3633c2ae7e79)
- IndexBar: incorrect anchor position when anchor doesn't have a parent node [#5429](https://github.com/vant-ui/vant/issues/5429)
- Picker: compatible with desktop scenario [#5430](https://github.com/vant-ui/vant/issues/5430)
- Stepper: input disabled text color in safari [#5428](https://github.com/vant-ui/vant/issues/5428)

**Types**

- AddressEdit: add setAddressDetail method type [#5352](https://github.com/vant-ui/vant/issues/5352)
- Area: add reset method type [#5353](https://github.com/vant-ui/vant/issues/5353)
- Checkbox: add toggle method type [#5354](https://github.com/vant-ui/vant/issues/5354)
- CountDown: add methods types [0438bd](https://github.com/vant-ui/vant/commit/0438bdbc97a81ad8b7de18ef8784d9907ce641c6)
- DropdownItem: add toggle method type [5c1883](https://github.com/vant-ui/vant/commit/5c1883f77c36d5026c60c873197dab98d4ca42f5)
- Field: add focus、blur method type [0b5c8e](https://github.com/vant-ui/vant/commit/0b5c8e5f3df570292e8599e7c2ff997fbee120ce)
- List: add check method type [285bce](https://github.com/vant-ui/vant/commit/285bce677c8997d55515a760f4d12b05349ebd3f)
- Picker: add method types [46d2b0](https://github.com/vant-ui/vant/commit/46d2b094477b52a96e85d18ec6fc42051a832e10)
- Sku: add methods types [d2bb9f](https://github.com/vant-ui/vant/commit/d2bb9fa81b401e429296003e4c2ec8c0e544d2af)
- Swipe: add swipeTo、resize method types [a1831b](https://github.com/vant-ui/vant/commit/a1831b86387f1127325b9952d2d18349d41dc5c7)
- SwipeCell: add open、close method type [9a9676](https://github.com/vant-ui/vant/commit/9a9676d6af7d29ac2221761ad680cecd4e929a39)
- Tabs: add resize method type [3c526e](https://github.com/vant-ui/vant/commit/3c526ec1a26b5a38bc6a6ba2ded7a3db94bbcced)
- Uploader: add closeImagePreview method type [cf191e](https://github.com/vant-ui/vant/commit/cf191e09cbc8093bb72f5d1e9381b263cdf9f0d2)

### [v2.3.3](https://github.com/vant-ui/vant/tree/v2.3.3)

`2019-12-21`

**Bug Fixes**

- fix compile error when using babel-plugin-import

### [v2.3.2](https://github.com/vant-ui/vant/tree/v2.3.2)

`2019-12-20`

**Bug Fixes**

- fix Area missing style
- fix DatetimePicker missing style
- fix CountDown infinite tick if call reset after finish [\#5340](https://github.com/vant-ui/vant/pull/5340)
- fix ImagePreview onClose should only trigger once [\#5341](https://github.com/vant-ui/vant/pull/5341)

### [v2.3.1](https://github.com/vant-ui/vant/tree/v2.3.1)

`2019-12-20`

**Bug Fixes**

- Fix uncompiled ES6 code in the entry file

### [v2.3.0](https://github.com/vant-ui/vant/tree/v2.3.0)

`2019-12-20`

**Style**

Upgrading the style of business components:

- AddressEdit
- Card
- CouponList
- ContactList
- ContactCard
- ContactEdit
- SubmitBar

![](https://b.yzcdn.cn/vant/style-update-2.3.0-2.png)

**Features**

- use [@vant/cli](https://github.com/vant-ui/vant/tree/dev/packages/vant-cli) to build pacakge
- AddressList: add default-tag-text prop [\#5106](https://github.com/vant-ui/vant/pull/5106)
- Card: add price-top slot [\#5134](https://github.com/vant-ui/vant/pull/5134)
- Checkbox: improve toggleAll perf [\#5285](https://github.com/vant-ui/vant/pull/5285)
- Circle: add stroke-linecap prop [\#5087](https://github.com/vant-ui/vant/pull/5087)
- CouponList: add show-count prop [\#5139](https://github.com/vant-ui/vant/pull/5139)
- CountDown: support SS and S format [\#5154](https://github.com/vant-ui/vant/pull/5154)
- ContactList: add default-tag-text prop [\#5089](https://github.com/vant-ui/vant/pull/5089)
- ContactCard: add show-set-default prop [\#5083](https://github.com/vant-ui/vant/pull/5083)
- ContactCard: add set-default-label prop [\#5083](https://github.com/vant-ui/vant/pull/5083)
- Sku: add start-sale-num prop [\#5105](https://github.com/vant-ui/vant/pull/5105)
- Sku: add resetSelectedSku method [\#5318](https://github.com/vant-ui/vant/pull/5318)
- SubmitBar: add text-align prop [\#5130](https://github.com/vant-ui/vant/pull/5130)
- SwipeCell: add open event [\#5324](https://github.com/vant-ui/vant/pull/5324)
- SwipeCell: add before-close prop [\#5320](https://github.com/vant-ui/vant/pull/5320)
- Tab: add dot prop [\#5272](https://github.com/vant-ui/vant/pull/5272)
- Tab: add info prop [\#5274](https://github.com/vant-ui/vant/pull/5274)
- Tab: add rendered event [\#5315](https://github.com/vant-ui/vant/pull/5315)
- Tab: add scrollspy prop [\#5273](https://github.com/vant-ui/vant/pull/5273)
- Toast: improve type definitions [\#5086](https://github.com/vant-ui/vant/pull/5086)

**Bug Fixes**

- fix ActionSheet should not submit form [\#5181](https://github.com/vant-ui/vant/pull/5181)
- fix Card allow use bottom slot without price or num [\#5116](https://github.com/vant-ui/vant/pull/5116)
- fix Dialog show not trigger close event when hidden [\#5267](https://github.com/vant-ui/vant/pull/5267)
- fix DropdownMenu incorrect menu position when scroll [\#5313](https://github.com/vant-ui/vant/pull/5313)
- fix Icon medal typo [\#5242](https://github.com/vant-ui/vant/pull/5242)
- fix NumberKeyboard should not trigger blur event when hidden [\#5110](https://github.com/vant-ui/vant/pull/5110)
- fix Picker should not submit form [\#5182](https://github.com/vant-ui/vant/pull/5182)
- fix Popup should reopen when activated [\#5286](https://github.com/vant-ui/vant/pull/5286)
- fix Stepper should format value when max、min changed [\#5257](https://github.com/vant-ui/vant/pull/5257)
- fix Sku should check state when reset [\#5231](https://github.com/vant-ui/vant/pull/5231)
- fix Switch incorrect size prop type [\#5229](https://github.com/vant-ui/vant/pull/5229)
- fix SubmitBar incorrect decimal when price is integer [\#5224](https://github.com/vant-ui/vant/pull/5224)
- fix Sku stepper value must be integer [\#5202](https://github.com/vant-ui/vant/pull/5202)
- fix Sku stepper should not emit invalid num [\#5210](https://github.com/vant-ui/vant/pull/5210)
- fix Stepper should not submit form [\#5183](https://github.com/vant-ui/vant/pull/5183)
- fix TreeSelect should sync value before trigger click-item event [\#5153](https://github.com/vant-ui/vant/pull/5153)
- fix TouchEmulator compatibility issues on firefox [\#5118](https://github.com/vant-ui/vant/pull/5118)
- fix Uploader not trigger oversize event when upload same file [\#5177](https://github.com/vant-ui/vant/pull/5177)
- fix less import issue [\#5157](https://github.com/vant-ui/vant/pull/5157)

### [v2.2.16](https://github.com/vant-ui/vant/tree/v2.2.16)

`2019-12-03`

**Features**

- Stepper: add disable-plus props [\#5180](https://github.com/vant-ui/vant/pull/5180)
- Stepper: add disable-minus props [\#5180](https://github.com/vant-ui/vant/pull/5180)

### [v2.2.15](https://github.com/vant-ui/vant/tree/v2.2.15)

`2019-11-28`

**Bug Fixes**

- fix List incorrect list status in some cases

### [v2.2.14](https://github.com/vant-ui/vant/tree/v2.2.14)

`2019-11-22`

**Features**

- Tabs: add title-style prop [\#5048](https://github.com/vant-ui/vant/pull/5048)
- Tabs: add resize method [\#5071](https://github.com/vant-ui/vant/pull/5071)
- Swipe: add resize method [\#5070](https://github.com/vant-ui/vant/pull/5070)

**Bug Fixes**

- fix Cell should break word of value [\#5029](https://github.com/vant-ui/vant/pull/5029)
- fix Field incorrect count of line break in safari [\#5049](https://github.com/vant-ui/vant/pull/5049)
- fix Tabbar incorrect style when using safe-area-inset-bottom [\#5079](https://github.com/vant-ui/vant/pull/5079)
- fix SwipeCell compatible with desktop scenario [\#5077](https://github.com/vant-ui/vant/pull/5077)
- fix DropdownMenu should't close when custom container and get clicked [\#5047](https://github.com/vant-ui/vant/pull/5047)

### [v2.2.13](https://github.com/vant-ui/vant/tree/v2.2.13)

`2019-11-14`

**Features**

- Area: add swipe-duration prop [\#5014](https://github.com/vant-ui/vant/pull/5014)
- Swipe: add stop-propagation prop [\#4972](https://github.com/vant-ui/vant/pull/4972)
- Toast: add overlay option [\#4969](https://github.com/vant-ui/vant/pull/4969)
- Toast: add clickOnClickOverlay option [\#4967](https://github.com/vant-ui/vant/pull/4967)
- SwipeCell: add opened event [\#4986](https://github.com/vant-ui/vant/pull/4986)
- ActionSheet: add close-icon prop [\#5016](https://github.com/vant-ui/vant/pull/5016)
- DropdownItem: add title slot [\#4975](https://github.com/vant-ui/vant/pull/4975)
- DatetimePicker: add swipe-duration prop [\#5015](https://github.com/vant-ui/vant/pull/5015)

**Bug Fixes**

- fix Tab can't match when name is 0 [\#5017](https://github.com/vant-ui/vant/pull/5017)
- fix Indexbar incorrect anchor position when hidden [\#5012](https://github.com/vant-ui/vant/pull/5012)
- fix Indexbar incorrect anchor position when set sticky-offset-top [\#5012](https://github.com/vant-ui/vant/pull/5012)
- fix DatetimePicker can't change when filter when empty array [\#4973](https://github.com/vant-ui/vant/pull/4973)
- fix DateTimePicker incorrect value when set max-hour or max-minute [\#5006](https://github.com/vant-ui/vant/pull/5006)
- fix ImagePreview missing swipeDuration type definition [\#4968](https://github.com/vant-ui/vant/pull/4968)

### [v2.2.12](https://github.com/vant-ui/vant/tree/v2.2.12)

`2019-11-07`

**Features**

- Stepper: add name prop [\#4931](https://github.com/vant-ui/vant/pull/4931)
- Uploader: add deletable prop [\#4925](https://github.com/vant-ui/vant/pull/4925)

**Bug Fixes**

- fix Sku set min-height for sku body [\#4942](https://github.com/vant-ui/vant/pull/4942)
- fix List may trigger load event repeatedly [\#4953](https://github.com/vant-ui/vant/pull/4953)
- fix can't custom hairline border color [\#4939](https://github.com/vant-ui/vant/pull/4939)

### [v2.2.11](https://github.com/vant-ui/vant/tree/v2.2.11)

`2019-11-04`

**Features**

- Switch: add click event [\#4915](https://github.com/vant-ui/vant/pull/4915)
- Switch: support number type of size prop [\#4913](https://github.com/vant-ui/vant/pull/4913)
- Toast: change default duration to 2s [\#4886](https://github.com/vant-ui/vant/pull/4886)
- Uploader: add closeImagePreview method [\#4901](https://github.com/vant-ui/vant/pull/4901)

**Bug Fixes**

- fix Button loading color [\#4868](https://github.com/vant-ui/vant/pull/4868)
- fix CountDown should clear timer when destroyed [\#4918](https://github.com/vant-ui/vant/pull/4918)
- fix CountDown should pause timer when deactivated [\#4919](https://github.com/vant-ui/vant/pull/4919)
- fix Grid info、dot prop not work when use icon slot [\#4902](https://github.com/vant-ui/vant/pull/4902)

### [v2.2.10](https://github.com/vant-ui/vant/tree/v2.2.10)

`2019-10-27`

**Features**

- Icon: add font-display auto property [\#4831](https://github.com/vant-ui/vant/pull/4831)
- Popup: add close-on-popstate prop [\#4845](https://github.com/vant-ui/vant/pull/4845)
- Picker: add swipe-duration prop [\#4816](https://github.com/vant-ui/vant/pull/4816)
- Toast: support set default options of specfic type [\#4848](https://github.com/vant-ui/vant/pull/4848)

**Bug Fixes**

- fix Uploader file preview border radius [\#4846](https://github.com/vant-ui/vant/pull/4846)
- fix DatetimePicker incorrecrt initial value when use min-date and filter [\#4837](https://github.com/vant-ui/vant/pull/4837)

### [v2.2.9](https://github.com/vant-ui/vant/tree/v2.2.9)

`2019-10-20`

**Features**

- Tag: add closeable prop [\#4763](https://github.com/vant-ui/vant/pull/4763)
- Loading: add some less vars [\#4781](https://github.com/vant-ui/vant/pull/4781)
- Progress: add some less vars [\#4790](https://github.com/vant-ui/vant/pull/4790)
- Progress: add track-color prop [\#4789](https://github.com/vant-ui/vant/pull/4789)
- Toast: add @toast-loading-icon-color var [\#4782](https://github.com/vant-ui/vant/pull/4782)
- Picker: add @picker-loading-icon-color var [\#4787](https://github.com/vant-ui/vant/pull/4787)
- ImagePreview: add cover slot [\#4766](https://github.com/vant-ui/vant/pull/4766)

**Bug Fixes**

- fix Tag incorrect round radius [\#4762](https://github.com/vant-ui/vant/pull/4762)
- fix Sku emit sku-selected event when reset sku [\#4755](https://github.com/vant-ui/vant/pull/4755)
- fix ImagePreview should not close when click index [\#4764](https://github.com/vant-ui/vant/pull/4764)
- fix AddressEdit choose overseas failure when configuring placeholer [\#4769](https://github.com/vant-ui/vant/pull/4769)

### [v2.2.8](https://github.com/vant-ui/vant/tree/v2.2.8)

`2019-10-17`

**Features**

- Dialog: update border radius [\#4730](https://github.com/vant-ui/vant/pull/4730)
- Uploader: update delete icon style [\#4712](https://github.com/vant-ui/vant/pull/4712)
- Field: add show-word-limit prop [\#4721](https://github.com/vant-ui/vant/pull/4721)
- Stepper: limit decimal length when input [\#4747](https://github.com/vant-ui/vant/pull/4747)
- Slider: improve click area [\#4701](https://github.com/vant-ui/vant/pull/4701)
- ActionSheet: add description prop [\#4691](https://github.com/vant-ui/vant/pull/4691)
- Slider: add slide animation [\#4700](https://github.com/vant-ui/vant/pull/4700)
- add gradient color variables [\#4752](https://github.com/vant-ui/vant/pull/4752)
- add multi-line ellipsis classes [\#4690](https://github.com/vant-ui/vant/pull/4690)

**Bug Fixes**

- fix AddressEdit area confirmation verification [\#4724](https://github.com/vant-ui/vant/pull/4724)
- fix Rate incorrect height caused by inline-block [\#4693](https://github.com/vant-ui/vant/pull/4693)
- fix Slider pseudo element may casue body overflow-x [\#4699](https://github.com/vant-ui/vant/pull/4699)

### [v2.2.7](https://github.com/vant-ui/vant/tree/v2.2.7)

`2019-10-11`

**Features**

- Dialog: add width prop [\#4687](https://github.com/vant-ui/vant/pull/4687)
- Dialog: add overlay-class prop [\#4683](https://github.com/vant-ui/vant/pull/4683)
- Dialog: add overlay-style prop [\#4682](https://github.com/vant-ui/vant/pull/4682)
- Uploader: add file result-type [\#4680](https://github.com/vant-ui/vant/pull/4680)
- TreeSelect: add className option [\#4671](https://github.com/vant-ui/vant/pull/4671)

**Bug Fixes**

- fix Dialog avoid text blurry [\#4686](https://github.com/vant-ui/vant/pull/4686)
- fix Stepper can't work when step is small [\#4675](https://github.com/vant-ui/vant/pull/4675)
- fix DatetimePicker should update value when range changed [\#4676](https://github.com/vant-ui/vant/pull/4676)
- fix Field incorrect placeholder color when error and disabled [\#4666](https://github.com/vant-ui/vant/pull/4666)

### [v2.2.6](https://github.com/vant-ui/vant/tree/v2.2.6)

`2019-10-08`

**Features**

- Grid: add icon-size prop [\#4656](https://github.com/vant-ui/vant/pull/4656)
- Toast: add transition option [\#4638](https://github.com/vant-ui/vant/pull/4638)
- Dialog: add transition prop [\#4636](https://github.com/vant-ui/vant/pull/4636)
- Dialog: add open、close event [\#4633](https://github.com/vant-ui/vant/pull/4633)
- Dialog: add opened、closed event [\#4634](https://github.com/vant-ui/vant/pull/4634)
- NumberKeyboard: add extra-key slot [\#4644](https://github.com/vant-ui/vant/pull/4644)
- CheckboxGroup: add toggleAll method [\#4640](https://github.com/vant-ui/vant/pull/4640)

**Bug Fixes**

- fix AddressList input event triggered twice [\#4659](https://github.com/vant-ui/vant/pull/4659)
- fix Tabs incorrect padding when type is card [\#4658](https://github.com/vant-ui/vant/pull/4658)
- fix GoodsAction incorrect border radius [\#4653](https://github.com/vant-ui/vant/pull/4653)
- fix NumberKeyboard compatible with Vue 2.6 event bubble bug [\#4632](https://github.com/vant-ui/vant/pull/4632)

### [v2.2.5](https://github.com/vant-ui/vant/tree/v2.2.5)

`2019-09-28`

**Features**

- Picker: add columns-top slot [\#4607](https://github.com/vant-ui/vant/pull/4607)
- Picker: add columns-bottom slot [\#4607](https://github.com/vant-ui/vant/pull/4607)
- Overlay: add default slot [\#4571](https://github.com/vant-ui/vant/pull/4571)
- Overlay: add custom-style prop [\#4572](https://github.com/vant-ui/vant/pull/4572)
- Checkbox: add bind-group prop [\#4600](https://github.com/vant-ui/vant/pull/4600)
- DropdownItem: add get-container prop [\#4611](https://github.com/vant-ui/vant/pull/4611)
- Area: add columns-placeholder prop [\#4580](https://github.com/vant-ui/vant/pull/4580)
- AddressEdit: add area-columns-placeholder props [\#4584](https://github.com/vant-ui/vant/pull/4584)

**Bug Fixes**

- fix Overlay type definition missing [\#4601](https://github.com/vant-ui/vant/pull/4601)
- fix Swipe incorrect swipeTo animation [\#4570](https://github.com/vant-ui/vant/pull/4570)
- fix Uploader incorrect preview index when upload same images [\#4577](https://github.com/vant-ui/vant/pull/4577)

### [v2.2.4](https://github.com/vant-ui/vant/tree/v2.2.4) [Deprecated]

`2019-09-28` 🇨🇳

**Tips**

- There is a style loss issue in this version, please use version 2.2.5

### [v2.2.3](https://github.com/vant-ui/vant/tree/v2.2.3)

`2019-09-24`

**Features**

- Cell: improve accessibility [\#4519](https://github.com/vant-ui/vant/pull/4519)
- Popup: improve accessibility [\#4516](https://github.com/vant-ui/vant/pull/4516)
- Search: improve accessibility [\#4522](https://github.com/vant-ui/vant/pull/4522)
- Picker: improve accessibility [\#4521](https://github.com/vant-ui/vant/pull/4521)
- GridItem: improve accessbility [\#4517](https://github.com/vant-ui/vant/pull/4517)
- ActionSheet: improve accessibility [\#4525](https://github.com/vant-ui/vant/pull/4525)
- Sku: add sku item previewImgUrl [\#4562](https://github.com/vant-ui/vant/pull/4562)
- ActionSheet: enable round by default [\#4542](https://github.com/vant-ui/vant/pull/4542)
- RadioGroup: add icon-size prop [\#4529](https://github.com/vant-ui/vant/pull/4529)
- RadioGroup: add checked-color prop [\#4532](https://github.com/vant-ui/vant/pull/4532)
- CheckboxGroup: add icon-size prop [\#4530](https://github.com/vant-ui/vant/pull/4530)
- CheckboxGroup: add checked-color prop [\#4531](https://github.com/vant-ui/vant/pull/4531)
- ActionSheet: enable safe-area-inset-bottom by default [\#4524](https://github.com/vant-ui/vant/pull/4524)
- NumberKeyboard: enable safe-area-inset-bottom by default [\#4544](https://github.com/vant-ui/vant/pull/4544)

### [v2.2.2](https://github.com/vant-ui/vant/tree/v2.2.2)

`2019-09-19`

**Features**

- Dialog: improve word wrap [\#4506](https://github.com/vant-ui/vant/pull/4506)
- Search: add action-text prop [\#4501](https://github.com/vant-ui/vant/pull/4501)
- Popup: add close-icon-position prop [\#4507](https://github.com/vant-ui/vant/pull/4507)
- Uploader: add index param in events [\#4460](https://github.com/vant-ui/vant/pull/4460)
- GoodsActionButton: increase height [\#4461](https://github.com/vant-ui/vant/pull/4461)
- AddressList: add @address-list-item-radio-icon-color var [\#4481](https://github.com/vant-ui/vant/pull/4481)

**Bug Fixes**

- fix Field disabled color in safari [\#4508](https://github.com/vant-ui/vant/pull/4508)
- fix ImagePreview incorrect scale [\#4477](https://github.com/vant-ui/vant/pull/4477)
- fix DatetimePicker infinite loop when use formatted text is unnumeric [\#4485](https://github.com/vant-ui/vant/pull/4485)

### [v2.2.1](https://github.com/vant-ui/vant/tree/v2.2.1)

`2019-09-12`

**Features**

- Icon: add dot prop [\#4425](https://github.com/vant-ui/vant/pull/4425)
- Icon: add down、wap-home icon [\#4404](https://github.com/vant-ui/vant/pull/4404)
- Circle: update text style [\#4401](https://github.com/vant-ui/vant/pull/4401)
- GridItem: add dot prop [\#4426](https://github.com/vant-ui/vant/pull/4426)
- GridItem: add info prop [\#4424](https://github.com/vant-ui/vant/pull/4424)
- Progress: add stroke-width prop [\#4397](https://github.com/vant-ui/vant/pull/4397)
- Popup: add safe-area-inset-bottom prop [\#4419](https://github.com/vant-ui/vant/pull/4419)
- Tab: add to、url、replace prop [\#4422](https://github.com/vant-ui/vant/pull/4422)
- TreeSelect: add dot option [\#4433](https://github.com/vant-ui/vant/pull/4433)
- Stepper: add decimal-length prop [\#4443](https://github.com/vant-ui/vant/pull/4443)
- Sku: add stock-threshold prop [\#4444](https://github.com/vant-ui/vant/pull/4444)
- Sku: add safe-area-inset-bottom prop [\#4428](https://github.com/vant-ui/vant/pull/4428)
- Sku: update sku style [\#4437](https://github.com/vant-ui/vant/pull/4437)
- SidebarItem: add dot prop [\#4432](https://github.com/vant-ui/vant/pull/4432)

**Bug Fixes**

- fix Sku incorrect button position [\#4427](https://github.com/vant-ui/vant/pull/4427)
- fix Uploader should't emit click-preview when delete [\#4407](https://github.com/vant-ui/vant/pull/4407)
- fix Progress incorrect pivot position [\#4396](https://github.com/vant-ui/vant/pull/4396)

### [v2.2.0](https://github.com/vant-ui/vant/tree/v2.2.0)

`2019-09-06`

**Features**

- Style: update basic red color [\#4368](https://github.com/vant-ui/vant/pull/4368)
- Rate: add touchable prop [\#4361](https://github.com/vant-ui/vant/pull/4361)
- Rate: should be inline-block [\#4334](https://github.com/vant-ui/vant/pull/4334)
- Rate: optimize touchmove gesture [\#4336](https://github.com/vant-ui/vant/pull/4336)
- Popup: add closeable prop [\#4362](https://github.com/vant-ui/vant/pull/4362)
- Popup: add close-icon prop [\#4366](https://github.com/vant-ui/vant/pull/4366)
- Sidebar: remove border [\#4382](https://github.com/vant-ui/vant/pull/4382)
- SidebarItem add disabled prop [\#4325](https://github.com/vant-ui/vant/pull/4325)
- TreeSelect: add max prop [\#4323](https://github.com/vant-ui/vant/pull/4323)
- TreeSelect: support show info [\#4384](https://github.com/vant-ui/vant/pull/4384)
- Uploader: add close-preview event [\#4376](https://github.com/vant-ui/vant/pull/4376)
- ImagePreview: add image loading tip [\#4378](https://github.com/vant-ui/vant/pull/4378)

**Bug Fixes**

- fix Field should reset appearance in safari [\#4380](https://github.com/vant-ui/vant/pull/4380)
- fix Button should hide border when color is linear-gradient [\#4342](https://github.com/vant-ui/vant/pull/4342)
- fix Dialog should reset loading when closed [\#4352](https://github.com/vant-ui/vant/pull/4352)
- fix Slider should format initial value [\#4337](https://github.com/vant-ui/vant/pull/4337)
- fix Sidebar incorrect info position [\#4324](https://github.com/vant-ui/vant/pull/4324)
- fix DropdownItem missing default active color [\#4330](https://github.com/vant-ui/vant/pull/4330)
- fix NumberKeyboard incorrect button position in iphoneX [\#4304](https://github.com/vant-ui/vant/pull/4304)
- fix ImagePreview should reset scale after toggle [\#4319](https://github.com/vant-ui/vant/pull/4319)
- fix ImagePreview should emit change event when reset to start position [\#4320](https://github.com/vant-ui/vant/pull/4320)

### [v2.1.8](https://github.com/vant-ui/vant/tree/v2.1.8)

`2019-08-29`

**Features**

- Picker: add allow-html prop [\#4278](https://github.com/vant-ui/vant/pull/4278)
- PasswordInput: add focused prop [\#4279](https://github.com/vant-ui/vant/pull/4279)
- GoodsActionButton: add color prop [\#4255](https://github.com/vant-ui/vant/pull/4255)
- Button: color prop support linear-gradient [\#4252](https://github.com/vant-ui/vant/pull/4252)

**Bug Fixes**

- fix Circle stroke-width can't be greater than 60 [\#4256](https://github.com/vant-ui/vant/pull/4256)
- fix Picker should avoid click event when moving [\#4273](https://github.com/vant-ui/vant/pull/4273)
- fix Picker incorrect position when pause momentum [\#4277](https://github.com/vant-ui/vant/pull/4277)

### [v2.1.7](https://github.com/vant-ui/vant/tree/v2.1.7)

`2019-08-26`

**Bug Fixes**

- fix RadioGroup disabled prop not work [\#4242](https://github.com/vant-ui/vant/pull/4242)
- fix CheckboxGroup disabled prop not work [\#4242](https://github.com/vant-ui/vant/pull/4242)

### [v2.1.6](https://github.com/vant-ui/vant/tree/v2.1.6)

`2019-08-26`

**Features**

- Tag: add warning type [\#4232](https://github.com/vant-ui/vant/pull/4232)
- Image: add radius prop [\#4230](https://github.com/vant-ui/vant/pull/4230)
- Notify: add type prop [\#4237](https://github.com/vant-ui/vant/pull/4237)
- CellGroup: add title slot [\#4227](https://github.com/vant-ui/vant/pull/4227)
- Sku: initialSku can be set dynamically [\#4214](https://github.com/vant-ui/vant/pull/4214)
- Sku: can preview images of non-first level sku [\#4236](https://github.com/vant-ui/vant/pull/4236)
- Locale: add Spanish translation [\#4235](https://github.com/vant-ui/vant/pull/4235)

* fix Tabbar incorrect active style in route mode [\#4229](https://github.com/vant-ui/vant/pull/4229)
* fix NumberKeyboard incorrect sidebar position when has title [\#4228](https://github.com/vant-ui/vant/pull/4228)
* fix IndexBar the problem of rolling out parent boundaries when sticky bottom [\#4218](https://github.com/vant-ui/vant/pull/4218)

### [v2.1.5](https://github.com/vant-ui/vant/tree/v2.1.5)

`2019-08-23`

**Features**

- Toast: add closeOnClick option [\#4192](https://github.com/vant-ui/vant/pull/4192)
- Uploader: add image-fit prop [\#4189](https://github.com/vant-ui/vant/pull/4189)
- Uploader: add click-preview event [\#4206](https://github.com/vant-ui/vant/pull/4206)
- Uploader: add preview-full-image prop [\#4205](https://github.com/vant-ui/vant/pull/4205)
- DropdownMenu: add @dropdown-menu-title-active-text-color less var [\#4208](https://github.com/vant-ui/vant/pull/4208)

**Bug Fixes**

- fix IndexBar sticky bug [\#4184](https://github.com/vant-ui/vant/pull/4184)
- fix NumberKeyboard border color [\#4183](https://github.com/vant-ui/vant/pull/4183)
- fix Area can't select some oversea countries [\#4195](https://github.com/vant-ui/vant/pull/4195)

### [v2.1.4](https://github.com/vant-ui/vant/tree/v2.1.4)

`2019-08-21`

**Features**

- Col: add click event [\#4169](https://github.com/vant-ui/vant/pull/4169)
- Row: add click event [\#4170](https://github.com/vant-ui/vant/pull/4170)
- Area: add is-oversea-code prop [\#4163](https://github.com/vant-ui/vant/pull/4163)
- Circle: support gradient color [\#4157](https://github.com/vant-ui/vant/pull/4157)
- Circle: support number type of size prop [\#4160](https://github.com/vant-ui/vant/pull/4160)
- Tabbar: support match route by to.name [\#4148](https://github.com/vant-ui/vant/pull/4148)
- Sku: should close image preview when popstate [\#4152](https://github.com/vant-ui/vant/pull/4152)
- Uploader: should close image preview when popstate [\#4151](https://github.com/vant-ui/vant/pull/4151)
- Uploader: support more image types [\#4140](https://github.com/vant-ui/vant/pull/4140)
- TreeSelect: support multiple select [\#4130](https://github.com/vant-ui/vant/pull/4130)
- TreeSelect: active-id support sync modifier [\#4133](https://github.com/vant-ui/vant/pull/4133)
- TreeSelect: main-active-index support sync modifier [\#4132](https://github.com/vant-ui/vant/pull/4132)

**Bug Fixes**

- fix Sku unextracted i18n message [\#4172](https://github.com/vant-ui/vant/pull/4172)
- fix Tabbar avoid navigation duplicated [\#4147](https://github.com/vant-ui/vant/pull/4147)
- fix Field button width shrinked in firefox [\#4144](https://github.com/vant-ui/vant/pull/4144)
- fix Picker prevent style be override by base.css [\#4136](https://github.com/vant-ui/vant/pull/4136)

### [v2.1.3](https://github.com/vant-ui/vant/tree/v2.1.3)

`2019-08-15`

**Features**

- Sku: support i18n [\#4123](https://github.com/vant-ui/vant/pull/4123)
- Button: add color prop [\#4124](https://github.com/vant-ui/vant/pull/4124)
- Collapse: log tips for incorrect value [\#4122](https://github.com/vant-ui/vant/pull/4122)
- Uploader: add before-delete prop [\#4118](https://github.com/vant-ui/vant/pull/4118)
- TreeSelect: add content slot [\#4105](https://github.com/vant-ui/vant/pull/4105)
- TreeSelect: support string type of height prop [\#4107](https://github.com/vant-ui/vant/pull/4107)
- NumberKeyboard: improve click experience [\#4116](https://github.com/vant-ui/vant/pull/4116)

**Bug Fixes**

- fix DropdownMenu incorrect style when inside NavBar [\#4098](https://github.com/vant-ui/vant/pull/4098)
- fix Tab incorrect title position when insert tab pane [\#4091](https://github.com/vant-ui/vant/pull/4091)
- fix Icon service-o icon incomplete [\#4088](https://github.com/vant-ui/vant/pull/4088)
- fix Icon gift-o、refund-o icon incomplete [\#4089](https://github.com/vant-ui/vant/pull/4089)
- fix Slider should not emit change event when value not changed [\#4087](https://github.com/vant-ui/vant/pull/4087)

### [v2.1.2](https://github.com/vant-ui/vant/tree/v2.1.2)

`2019-08-10`

**Features**

- ActionSheet: add color option [\#4073](https://github.com/vant-ui/vant/pull/4073)
- AddressEdit: add postal-validator prop [\#4067](https://github.com/vant-ui/vant/pull/4067)
- Stepper: add show-plus、show-minus prop [\#4056](https://github.com/vant-ui/vant/pull/4056)
- Divider: add separator role to improve accessibility [\#4069](https://github.com/vant-ui/vant/pull/4069)
- DropdownMenu: add more less vars [\#4071](https://github.com/vant-ui/vant/pull/4071)
- Uploader: support isImage flag [\#4072](https://github.com/vant-ui/vant/pull/4072)
- Field: increase clickable area of icon [\#4058](https://github.com/vant-ui/vant/pull/4058)
- Picker: stop propagation when touchmove in vertical direction [\#4043](https://github.com/vant-ui/vant/pull/4043)
- Icon: add warning、good-job、good-job-o icon [\#4038](https://github.com/vant-ui/vant/pull/4038)
- Icon: add smile、music、thumb-circle、phone-circle icon [\#4048](https://github.com/vant-ui/vant/pull/4048)
- List: unify text font-size [\#4077](https://github.com/vant-ui/vant/pull/4077)
- Image: img inherit round border [\#4032](https://github.com/vant-ui/vant/pull/4032)
- adjust globalObject to support module script [\#4080](https://github.com/vant-ui/vant/pull/4080)

**Bug Fixes**

- fix Sticky incorrect position when inside scroll container [\#4055](https://github.com/vant-ui/vant/pull/4055)

### [v2.1.1](https://github.com/vant-ui/vant/tree/v2.1.1)

`2019-08-02`

**Bug Fixes**

- fix DatetimePicker event not work [\#4027](https://github.com/vant-ui/vant/pull/4027)
- fix Popup ensure z-index setting order [\#4026](https://github.com/vant-ui/vant/pull/4026)

### [v2.1.0](https://github.com/vant-ui/vant/tree/v2.1.0) [deprecated]

`2019-08-01`

**Features**

- GoodsAction: update style [\#3967](https://github.com/vant-ui/vant/pull/3967)
- Sku: update style [\#3875](https://github.com/vant-ui/vant/pull/3875) [\#3922](https://github.com/vant-ui/vant/pull/3922)
- Sku: add price-tag prop [\#3875](https://github.com/vant-ui/vant/pull/3875)
- Sku: add hide-selected-text prop [\#3875](https://github.com/vant-ui/vant/pull/3875)
- Sku: add sku-header-origin-price slot [\#3958](https://github.com/vant-ui/vant/pull/3958)
- Dialog: add title slot [\#3985](https://github.com/vant-ui/vant/pull/3985)
- Dialog: centered in screen [\#3905](https://github.com/vant-ui/vant/pull/3905)
- Uploader: add less vars [\#3907](https://github.com/vant-ui/vant/pull/3907)
- ActionSheet: add less vars [\#3908](https://github.com/vant-ui/vant/pull/3908)
- AddressList: add click-item event [\#3942](https://github.com/vant-ui/vant/pull/3942)
- CouponList: add empty-image prop [\#3941](https://github.com/vant-ui/vant/pull/3941)
- SwipeCell: add stop-propagation prop [\#3952](https://github.com/vant-ui/vant/pull/3952)
- ImagePreview: add swipe-duration prop [\#3963](https://github.com/vant-ui/vant/pull/3963)

**Bug Fixes**

- fix Tabs incorrect line position in some cases [\#3961](https://github.com/vant-ui/vant/pull/3961)
- fix ImagePreview should reset onClose & onChange option [\#3960](https://github.com/vant-ui/vant/pull/3960)
- fix DatetimePicker incorrect confirm param when use formatter [\#3969](https://github.com/vant-ui/vant/pull/3969)
- fix Tabs fix scroll position deviation when sticky [\#3949](https://github.com/vant-ui/vant/pull/3949)
- fix IndexBar should update when index-list updated [\#3943](https://github.com/vant-ui/vant/pull/3943)
- fix AddressList can't select item when click empty area [\#3909](https://github.com/vant-ui/vant/pull/3909)
- fix ImagePreview Image beyond the screen height cover index [\#4002](https://github.com/vant-ui/vant/pull/4002)
- fix Radio: can't select when click gap [\#4007](https://github.com/vant-ui/vant/pull/4007)
- fix SwipeCell should not prevent touchmove when opened [\#3982](https://github.com/vant-ui/vant/pull/3982)

### [v2.0.9](https://github.com/vant-ui/vant/tree/v2.0.9)

`2019-07-19`

**Features**

- add Sticky component [\#3888](https://github.com/vant-ui/vant/pull/3888)
- Grid: optimize word break [\#3897](https://github.com/vant-ui/vant/pull/3897)
- Image: add round prop [\#3838](https://github.com/vant-ui/vant/pull/3838)
- Image: add show-error prop [\#3896](https://github.com/vant-ui/vant/pull/3896)
- Image: add show-loading prop [\#3893](https://github.com/vant-ui/vant/pull/3893)
- Toast: add iconPrefix option [\#3872](https://github.com/vant-ui/vant/pull/3872)
- Toast: optimize image icon display [\#3895](https://github.com/vant-ui/vant/pull/3895)
- TreeSelect: add click-nav、click-item event [\#3892](https://github.com/vant-ui/vant/pull/3892)
- ActionSheet: add round prop [\#3874](https://github.com/vant-ui/vant/pull/3874)
- Uploader: support preview network image [\#3899](https://github.com/vant-ui/vant/pull/3899)

**Bug Fixes**

- fix Dialog closeOnPopstate can't be disabled [\#3868](https://github.com/vant-ui/vant/pull/3868)
- fix DropdownMenu cann't use toggle to open item [\#3876](https://github.com/vant-ui/vant/pull/3876)
- fix SwipeCell should stop event propagation [\#3898](https://github.com/vant-ui/vant/pull/3898)

### [v2.0.8](https://github.com/vant-ui/vant/tree/v2.0.8)

`2019-07-16`

**Features**

- Sku: support custom placeholder [\#3864](https://github.com/vant-ui/vant/pull/3864)
- DropdownMenu: add icon option [\#3855](https://github.com/vant-ui/vant/pull/3855)
- DropdownMenu: optimize title ellipsis [\#3847](https://github.com/vant-ui/vant/pull/3847)
- ImagePreview: support double click zoom [\#3839](https://github.com/vant-ui/vant/pull/3839)

**Bug Fixes**

- fix Tab: click event param missing [\#3866](https://github.com/vant-ui/vant/pull/3866)
- fix List not work when body is the scrolling container [\#3844](https://github.com/vant-ui/vant/pull/3844)
- fix IndexBar incorrect active anchor in some cases [\#3832](https://github.com/vant-ui/vant/pull/3832)

### [v2.0.7](https://github.com/vant-ui/vant/tree/v2.0.7)

`2019-07-11`

**Features**

- add CountDown component [\#3805](https://github.com/vant-ui/vant/pull/3805)
- Popup: add round prop [\#3781](https://github.com/vant-ui/vant/pull/3781)
- PullRefresh: add distance of slotProps [\#3829](https://github.com/vant-ui/vant/pull/3829)
- DropdownMenu: add close-on-click-outside prop [\#3824](https://github.com/vant-ui/vant/pull/3824)
- Swipe: add immediate option of swipeTo method [\#3821](https://github.com/vant-ui/vant/pull/3821)
- Slider: support number type of bar-height prop [\#3794](https://github.com/vant-ui/vant/pull/3794)
- IndexBar: add sticky-offset-top prop [\#3791](https://github.com/vant-ui/vant/pull/3791)

**Bug Fixes**

- fix Popup overlay may cover popup in some cases [\#3831](https://github.com/vant-ui/vant/pull/3831)
- fix Stepper add hack for iOS 12 page scroll [\#3804](https://github.com/vant-ui/vant/pull/3804)
- fix Dialog missing closeOnPopstate in type definition [\#3789](https://github.com/vant-ui/vant/pull/3789)
- fix DatetimePicker confirm event param incorrect when use filter [\#3816](https://github.com/vant-ui/vant/pull/3816)

### [v2.0.6](https://github.com/vant-ui/vant/tree/v2.0.6)

`2019-07-05`

**Features**

- add Divider component [\#3755](https://github.com/vant-ui/vant/pull/3755)
- Tab: add name prop [\#3762](https://github.com/vant-ui/vant/pull/3762)
- Sku: add add-cart-text prop [\#3725](https://github.com/vant-ui/vant/pull/3725)

**Bug Fixes**

- fix Swipe fix blank area when use width prop [\#3751](https://github.com/vant-ui/vant/pull/3751)
- fix Grid gutter can be string type [\#3741](https://github.com/vant-ui/vant/pull/3741)
- fix Collapse use double raf to ensure animation can start [\#3723](https://github.com/vant-ui/vant/pull/3723)
- fix PullRefresh ensure value change can be watched [\#3719](https://github.com/vant-ui/vant/pull/3719)

### [v2.0.5](https://github.com/vant-ui/vant/tree/v2.0.5)

`2019-07-02`

**Features**

- Stepper: add button-size prop [\#3714](https://github.com/vant-ui/vant/pull/3714)
- Stepper: support long press gesture [\#3711](https://github.com/vant-ui/vant/pull/3711)
- Dialog: add close-on-popstate prop [\#3709](https://github.com/vant-ui/vant/pull/3709)

**Bug Fixes**

- fix postcss config overwritten issue

### [v2.0.4](https://github.com/vant-ui/vant/tree/v2.0.4)

`2019-07-01`

**Features**

- add Grid、GridItem component [\#3669](https://github.com/vant-ui/vant/pull/3669) [\#3682](https://github.com/vant-ui/vant/pull/3682) [\#3683](https://github.com/vant-ui/vant/pull/3683)
- Field: add arrow-direction prop [\#3679](https://github.com/vant-ui/vant/pull/3679)
- Sidebar: add to、replace prop [\#3696](https://github.com/vant-ui/vant/pull/3696)
- Sidebar: support use v-model to bind active key [\#3698](https://github.com/vant-ui/vant/pull/3698)
- IndexBar: add class for active index [\#3692](https://github.com/vant-ui/vant/pull/3692)
- Uploader: support number type of name prop [\#3681](https://github.com/vant-ui/vant/pull/3681)
- SwipeCell: add name prop [\#3680](https://github.com/vant-ui/vant/pull/3680)
- AddressEdit: add detail-maxlength prop [\#3707](https://github.com/vant-ui/vant/pull/3707)
- GoodsActionIcon: add icon slot [\#3705](https://github.com/vant-ui/vant/pull/3705)

**Bug Fixes**

- fix Collapse flick in safari [\#3686](https://github.com/vant-ui/vant/pull/3686)
- fix Picker compatibility issues on lower versions of Android [\#3688](https://github.com/vant-ui/vant/pull/3688)

### [v2.0.3](https://github.com/vant-ui/vant/tree/v2.0.3)

`2019-06-27`

**Features**

- ActionSheet: add duration prop [\#3608](https://github.com/vant-ui/vant/pull/3608)
- ActionSheet: add open、opened events [\#3639](https://github.com/vant-ui/vant/pull/3639)
- ActionSheet: add close、closed events [\#3639](https://github.com/vant-ui/vant/pull/3639)
- Icon: add fit mode for image content [\#3667](https://github.com/vant-ui/vant/pull/3667)
- Icon: update checked、comment、comment-o icon [\#3615](https://github.com/vant-ui/vant/pull/3615)
- ImagePreview: add onChange option [\#3630](https://github.com/vant-ui/vant/pull/3630)
- Popup: optimize overlay animation duration [\#3610](https://github.com/vant-ui/vant/pull/3610)
- Uploader: support preview non-image file [\#3604](https://github.com/vant-ui/vant/pull/3604)
- Uploader: support click to preview image [\#3603](https://github.com/vant-ui/vant/pull/3603)
- Stepper: add less vars [\#3599](https://github.com/vant-ui/vant/pull/3599)

**Bug Fixes**

- fix ImagePreview should lock scroll [\#3645](https://github.com/vant-ui/vant/pull/3645)
- fix Tab may cause error when render title slot [\#3631](https://github.com/vant-ui/vant/pull/3631)
- fix vetur auto-complete [\#3617](https://github.com/vant-ui/vant/pull/3617)

### [v2.0.2](https://github.com/vant-ui/vant/tree/v2.0.2)

`2019-06-21`

**Features**

- Card: add click-thumb event [\#3586](https://github.com/vant-ui/vant/pull/3586)
- CouponList: add enabled-title、disabled-title props [\#3578](https://github.com/vant-ui/vant/pull/3578)
- Slider: min/max can set any value [\#3566](https://github.com/vant-ui/vant/pull/3566)
- Uploader: before-read prop support promise mode [\#3572](https://github.com/vant-ui/vant/pull/3572)
- Picker: update acceleration rate [\#3556](https://github.com/vant-ui/vant/pull/3556)
- NumberKeyboard: support v-model [\#3531](https://github.com/vant-ui/vant/pull/3531)
- NumberKeyboard: add maxlength prop [\#3532](https://github.com/vant-ui/vant/pull/3532)
- add sideEffects to enable tree shaking [\#3530](https://github.com/vant-ui/vant/pull/3530)

**Bug Fixes**

- fix Button default margin in safari [\#3577](https://github.com/vant-ui/vant/pull/3577)
- fix Sku can not preview image when only have goods picture [\#3569](https://github.com/vant-ui/vant/pull/3569)
- fix Toast missing type definition of clear method [\#3542](https://github.com/vant-ui/vant/pull/3542)

### [v2.0.1](https://github.com/vant-ui/vant/tree/v2.0.1)

`2019-06-15`

**Features**

- Tab: support string type of line-width & line-height [\#3514](https://github.com/vant-ui/vant/pull/3514)
- Icon: use image component to display image [\#3515](https://github.com/vant-ui/vant/pull/3515)
- Toast: add icon prop [\#3485](https://github.com/vant-ui/vant/pull/3485)
- DropdownMenu: add direction prop [\#3490](https://github.com/vant-ui/vant/pull/3490)
- NumberKeyboard: add delete slot [\#3499](https://github.com/vant-ui/vant/pull/3499)

**Bug Fixes**

- fix Image missing type definition [\#3520](https://github.com/vant-ui/vant/pull/3520)
- fix SwitchCell incorrect loading position [\#3501](https://github.com/vant-ui/vant/pull/3501)
- fix Toast missing fade-out transition in multiple mode [\#3504](https://github.com/vant-ui/vant/pull/3504)
- fix Locale can not modify functional message [\#3498](https://github.com/vant-ui/vant/pull/3498)

### [v2.0.0](https://github.com/vant-ui/vant/tree/v2.0.0)

`2019-06-12`

#### Overview

- Add four new components
- Add dozens of APIs
- Improve accessibility
- New card style document, support document search
- All components support custom styles via `less` variables
- Rename several components, deprecate several APIs

#### New Components

- `Image` Component
- `Skeleton` Component
- `IndexBar`、`IndexAnchor` Component
- `DropdownMenu`、`DropdownItem` Component

![](https://img01.yzcdn.cn/public_files/2019/06/10/141ac9b67c06be0811c86c4c1c571c9d.png)

#### Breaking Changes

##### Actionsheet

- Rename to `ActionSheet`

##### Button

- Remove `bottom-action` prop，please use `square` and `size` instead

##### Field

- Remove `on-icon-click` prop，please use `click-right-icon` event instead
- Rename `icon` prop to `right-icon`
- Rename `icon` slot to `right-icon`
- Rename `click-icon` event to `click-right-icon`

##### GoodsAction

- Rename `GoodsActionBigBtn` to `GoodsActionButton`
- Rename `GoodsActionMiniBtn` to `GoodsActionIcon`
- Remove `primary` prop of `GoodsActionBigBtn`，please to `type` prop instead

##### Step

- Remove `icon` prop
- Remove `title` prop
- Remove `icon-class` prop
- Remove `description` prop
- Remove `message-extra` slot

##### Badge

- Rename `BadgeGroup` to `Sidebar`
- Rename `Badge` to `SlidebarItem`

##### Loading

- Remove `circle` type
- Remove `gradient-circle` type

##### Checkbox

- Adjusted to `flex` layout, may affect the original layout

##### Radio

- Adjusted to `flex` layout, may affect the original layout

##### Waterfall

- Remove Waterfall component，please use `List` instead，or use [@vant/waterfall](https://github.com/vant-ui/vant/tree/dev/packages/vant-waterfall)。

---

#### Accessibility

Improve accessibility for those components：

- Accordion
- Checkbox
- Dialog
- DropdownMenu
- GoodsAction
- List
- NoticeBar
- NumberKeyboard
- Radio
- Rate
- Stepper
- Tab
- Slider
- Switch

#### New Feature

##### ActionSheet

- Add `lock-scroll` prop
- Add `click-overlay` event
- Add `close-on-click-action` prop
- Support both use `title` and `actions` prop

##### Area

- `reset` method support `code` param

##### Button

- Add `icon` prop
- Add `loading-type` prop

##### Checkbox

- Add `icon-size` prop

##### DatetimePicker

- Add `filter` prop

##### Field

- Add `input` slot
- Add `click` event
- Add `clickable` prop
- Add `label-class` prop
- No longer update v-model during IME composition

##### GoodsActionButton

- Add `type` prop

##### Icon

- Support `Number` type of `size` prop

##### ImagePreview

- Add `close-on-popstate` prop

##### Loading

- Add `default` slot
- Add `vertical` prop
- Add `text-size` prop
- Support `Number` type of `size` prop

##### Notify

- Add `onClick` option
- Add `onClose` option
- Add `onOpened` option

##### NoticeBar

- Add `left-icon` slot
- Add `right-icon` slot

##### PasswordInput

- Add `gutter` prop

##### Picker

- Support inertial scrolling
- Add `toolbar-position` prop

##### Popup

- Add `click` event
- Add `duration` prop

##### Radio

- Add `icon-size` prop

##### Rate

- Add `gutter` prop
- Support`String` type of `size` prop

##### Search

- Add `clearable` prop
- Add `left-icon` prop
- Add `right-icon` prop
- Add `right-icon` slot
- No longer update v-model during IME composition

##### Slider

- Add `drag-start` event
- Add `drag-end` event

##### Steps

- Add `inactive-icon` prop
- Add `inactive-icon` slot

##### Stepper

- Support`Number` type of `input-width` prop

##### SubmitBar

- Add `tip-icon` prop
- Add `suffix-label` prop

##### SwipeCell

- Auto calc `left-width` and `right-width`

##### Switch

- The loading icon color will now follow the background color change

##### SwitchCell

- Add `border` prop
- Add `cell-size` prop

##### Sku

- Add `preview-open` event
- Add `preview-close` event

##### Tab

- Add `border` prop
- Optimize `animated` animation performance
- Fix incorrect tab pane height when use `animated` prop

##### Tabbar

- Add `route` prop
- Add `border` prop
- Add `inactive-color` prop

##### TabbarItem

- Add `name` prop

##### Toast

- Add `onOpened` option

##### Uploader

- Add default upload style
- Add `delete` event
- Add `upload-text` prop
- Add `max-count` prop
- Add `preview-size` prop
- Add `preview-image` prop
- Support use `v-model` to bind file-list
- `oversize` event add `detail` param
