# Changelog

### Intro

Vant follows [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/).

**Release Schedule**

- Patch version：released weekly, including features and bug fixes.
- Minor version：released every one to two months, including backwards compatible features.
- Major version：including breaking changes and new features.

### [v2.8.4](https://github.com/youzan/vant/compare/v2.8.3...v2.8.4)

`2020-05-28`

**Feature**

- AddressList: add safe-area-inset-bottom [#6355](https://github.com/youzan/vant/issues/6355)
- DatetimePicker: add month-day type [#6395](https://github.com/youzan/vant/issues/6395)
- Popup: create overlay for every popup [#6357](https://github.com/youzan/vant/issues/6357)

**style**

- ActionSheet: adjust subname color to gray-6 [e54c11](https://github.com/youzan/vant/commit/e54c11d55244e65246df7eddd7751983dbc4d331)
- ActionSheet: remove option border [8db218](https://github.com/youzan/vant/commit/8db218e9c0ca6905491a019cf983a0269f3aea8c)
- Cell: lower CSS priority of the border [#6359](https://github.com/youzan/vant/issues/6359)
- Collapse: adjust border gag [#6361](https://github.com/youzan/vant/issues/6361)
- Collapse: increase content font-size to 14px [#6358](https://github.com/youzan/vant/issues/6358)

**Bug Fixes**

- Area: use first city code when county list is empty [#6356](https://github.com/youzan/vant/issues/6356)
- Field: can not disable error in form [#6382](https://github.com/youzan/vant/issues/6382)
- GoodsAction: incorrect single button radius [#6347](https://github.com/youzan/vant/issues/6347)
- Sidebar: should emit change when v-model changed [#6383](https://github.com/youzan/vant/issues/6383)

### [v2.8.3](https://github.com/youzan/vant/compare/v2.8.2...v2.8.3)

`2020-05-21`

**Feature**

- Form: add submit-on-enter prop [#6336](https://github.com/youzan/vant/issues/6336)
- Form: scrollToField can scroll to bottom [#6335](https://github.com/youzan/vant/issues/6335)
- Field: adjust field placeholder color to gray-5 [#6304](https://github.com/youzan/vant/issues/6304)
- Field: minus can only be placed on the first char [#6303](https://github.com/youzan/vant/issues/6303)
- Picker: improve method type, support generic [#6315](https://github.com/youzan/vant/issues/6315)

**Bug Fixes**

- Button: text not align center in legacy safari [#6325](https://github.com/youzan/vant/issues/6325)
- Calendar: color prop not work when use allow-some-day [#6331](https://github.com/youzan/vant/issues/6331)

### [v2.8.2](https://github.com/youzan/vant/compare/v2.8.1...v2.8.2)

`2020-05-17`

**Feature**

- Field: add extra slot [#6290](https://github.com/youzan/vant/issues/6290)
- Grid: add direction prop [#6256](https://github.com/youzan/vant/issues/6256)
- Calendar: add month-show event [#6292](https://github.com/youzan/vant/issues/6292)
- NumberKeyboard: support multiple extra key [#6276](https://github.com/youzan/vant/issues/6276)
- Stepper: add theme prop [#6282](https://github.com/youzan/vant/issues/6282)

**style**

- Rate: update rate disabled color [#6253](https://github.com/youzan/vant/issues/6253)
- Sku: adjust border alignment [#6272](https://github.com/youzan/vant/issues/6272)
- Sku: currency symbol should align to bottom [#6274](https://github.com/youzan/vant/issues/6274)
- NoticeBar: increase icon min-width to 24px [#6280](https://github.com/youzan/vant/issues/6280)

**Bug Fixes**

- Field: textarea line break failed on enter [#6263](https://github.com/youzan/vant/issues/6263)
- NoticeBar: replay event only triggered once [#6293](https://github.com/youzan/vant/issues/6293)

### [v2.8.1](https://github.com/youzan/vant/compare/v2.8.1-beta.0...v2.8.1)

`2020-05-09`

**Feature**

- Calendar: add lazy-render prop [#6245](https://github.com/youzan/vant/issues/6245)
- Field: add click-input event [#6239](https://github.com/youzan/vant/issues/6239)
- Sku: add sku-reset event [#6220](https://github.com/youzan/vant/issues/6220)
- GoodsActionButton: improve test size adjust [b1dcf3](https://github.com/youzan/vant/commit/b1dcf36263ae7a19197f2c162e67f220dd171047)

**Bug Fixes**

- Button: text should align center [8c53db](https://github.com/youzan/vant/commit/8c53db040dd0dfff60eca1ac284d98f13b4e4ce6)
- Field: should not submit form on enter [#6240](https://github.com/youzan/vant/issues/6240)
- Step: active-color should effect circle [#6229](https://github.com/youzan/vant/issues/6229)
- Stepper: incorrect value when format minus value [#6238](https://github.com/youzan/vant/issues/6238)
- Stepper: should not display NaN [7327a4](https://github.com/youzan/vant/commit/7327a481d18271393e25b17d4402dad6d336bb3a)
- Stepper: should not emit focus when input is readonly [c6024b](https://github.com/youzan/vant/commit/c6024b18b4191a3a56db0bed1ababa48420c0946)

### [v2.8.0](https://github.com/youzan/vant/compare/v2.7.1...v2.8.0)

`2020-05-05`

**style**

- Button: use flex layout [#6180](https://github.com/youzan/vant/issues/6180)
- ActionSheet: improve text size adjust [#6175](https://github.com/youzan/vant/issues/6175)
- NavBar: improve text size adjust [7effb7](https://github.com/youzan/vant/commit/7effb7cf6cf59a8db1eb77fa16692712de4a18ba)
- NoticeBar: improve text size adjust [#6177](https://github.com/youzan/vant/issues/6177)
- NumberKeyboard: improve text size adjust [#6179](https://github.com/youzan/vant/issues/6179)
- Pagination: improve text size adjust [#6178](https://github.com/youzan/vant/issues/6178)
- PasswordInput: improve text size adjust [#6176](https://github.com/youzan/vant/issues/6176)
- Picker: improve text size adjust [#6174](https://github.com/youzan/vant/issues/6174) [#6205](https://github.com/youzan/vant/issues/6205)
- Picker: update action button color [#6214](https://github.com/youzan/vant/issues/6214)
- Tab: improve text size adjust [#6209](https://github.com/youzan/vant/issues/6209)
- CouponList: add @coupon-list-close-button-height less var [18a0c5](https://github.com/youzan/vant/commit/18a0c545ec881eb296ba6cc11dfaa12febd79e5c)

**Feature**

- Calendar: add unselect event [#6198](https://github.com/youzan/vant/issues/6198)
- Calendar: support max-range when type is multiple [#6202](https://github.com/youzan/vant/issues/6202)
- Field: add colon prop [#6195](https://github.com/youzan/vant/issues/6195)
- Locale: adding Romanian language support [#6193](https://github.com/youzan/vant/issues/6193)
- ShareSheet: improve accessibility [#6208](https://github.com/youzan/vant/issues/6208)

**Bug Fixes**

- Checkbox: incorrect icon position after font-size scale [#6168](https://github.com/youzan/vant/issues/6168)
- Layout: gutter calculation [#6197](https://github.com/youzan/vant/issues/6197) [#6143](https://github.com/youzan/vant/issues/6143)
- NoticeBar: allow dynamic setting of scrollable [#6190](https://github.com/youzan/vant/issues/6190)
- Radio: incorrect icon position after font-size scale [#6173](https://github.com/youzan/vant/issues/6173)
- ShareSheet: incorrect scrollbar height in some browsers [#6207](https://github.com/youzan/vant/issues/6207)
- Tab: fix ellipsis issue [#6209](https://github.com/youzan/vant/issues/6209)

### [v2.7.1](https://github.com/youzan/vant/compare/v2.7.0...v2.7.1)

`2020-04-28`

**Bug Fixes**

- Revert "style(NavBar): left & right part align to bottom (#6147)" [#6147](https://github.com/youzan/vant/issues/6147)

### [v2.7.0](https://github.com/youzan/vant/compare/v2.6.3...v2.7.0)

`2020-04-28`

**style**

- NumberKeyboard: new style [3188b4](https://github.com/youzan/vant/commit/3188b4d25bb6e60ed5de930ec8947929a7577dd3) [#6149](https://github.com/youzan/vant/issues/6149) [#6151](https://github.com/youzan/vant/issues/6151)

<img src="https://b.yzcdn.cn/vant/keyboard-style-04281448.png" style="width: 600px; height: 394px;">

- add base-font-family [#6126](https://github.com/youzan/vant/issues/6126)
- DropdownMenu: add box-shadow style [7db744](https://github.com/youzan/vant/commit/7db74490956ec9d4c742a885e436dc6915f1f9dc)
- NavBar: left & right part align to bottom [#6147](https://github.com/youzan/vant/issues/6147)
- Sidebar: add less vars [e1a7c6](https://github.com/youzan/vant/commit/e1a7c6668de0b7da58028210e174c9156e87bea2)
- Sidebar: update border style [a31032](https://github.com/youzan/vant/commit/a31032e0d63956b2e9f0c75c8a85ca662fe42545)
- Toast: increase border-radius to 8px [2364c4](https://github.com/youzan/vant/commit/2364c4f526912433abf5ee2f36e2148beea7140b)
- TreeSelect: change checked icon to success icon [5b72e4](https://github.com/youzan/vant/commit/5b72e4339347a710620bf630f1bc8ee09511d63c)

**Feature**

- NoticeBar: add start method [#6069](https://github.com/youzan/vant/issues/6069)
- ImagePreview: adjust double-click interval to 250ms [#6136](https://github.com/youzan/vant/issues/6136)
- NumberKeyboard: add collapse icon [#6152](https://github.com/youzan/vant/issues/6152)
- NumberKeyboard: add close-button-loading prop [#6158](https://github.com/youzan/vant/issues/6158)

**Bug Fixes**

- Layout: outside of the screen after setting gutter [#6143](https://github.com/youzan/vant/issues/6143)
- Tab: incorrect vnode order in some cases [#6140](https://github.com/youzan/vant/issues/6140)
- uploader: automatically filter files exceeding the max-size [#6150](https://github.com/youzan/vant/issues/6150)
- Uploader: file message should be reactive [#6142](https://github.com/youzan/vant/issues/6142)
- types: VanComponent should extends Vue [#6148](https://github.com/youzan/vant/issues/6148)

### [v2.6.3](https://github.com/youzan/vant/compare/v2.6.2...v2.6.3)

`2020-04-20`

**Bug Fixes**

- Tab: fail to init in some cases [#6101](https://github.com/youzan/vant/issues/6101)
- sort vnode not work [#6100](https://github.com/youzan/vant/issues/6100)

### [v2.6.2](https://github.com/youzan/vant/compare/v2.6.1...v2.6.2)

`2020-04-18`

**Feature**

- Empty: support offline scenario [#6055](https://github.com/youzan/vant/issues/6055)
- NoticeBar: add replay event [#6079](https://github.com/youzan/vant/issues/6079)
- Overlay: add lock-scroll prop [#6082](https://github.com/youzan/vant/issues/6082)
- Uploader: add lazy-load prop [#6083](https://github.com/youzan/vant/issues/6083)

**Bug Fixes**

- Checkbox: get changed value in click event [#6066](https://github.com/youzan/vant/issues/6066)
- Picker: setColumnValues failed in cascade mode [#6080](https://github.com/youzan/vant/issues/6080)
- Slider: incorrect bar-height when vertical [#6065](https://github.com/youzan/vant/issues/6065)
- Swipe: incorrect width after resize if hidden [#6084](https://github.com/youzan/vant/issues/6084)

### [v2.6.1](https://github.com/youzan/vant/compare/v2.6.0...v2.6.1)

`2020-04-14`

**Feature**

- AddressEdit: add area-placeholder prop [#6023](https://github.com/youzan/vant/issues/6023)
- ImagePreview: support local registration [#6031](https://github.com/youzan/vant/issues/6031)

**Bug Fixes**

- sortChildren broke SSR [#6046](https://github.com/youzan/vant/issues/6046)
- Calendar: default-date should be today, close #6025 [#6025](https://github.com/youzan/vant/issues/6025) [#6028](https://github.com/youzan/vant/issues/6028)

### [v2.6.0](https://github.com/youzan/vant/compare/v2.5.9...v2.6.0)

`2020-04-09`

**Feature**

- add ShareSheet component [#6019](https://github.com/youzan/vant/issues/6019)
- add Empty component [#6010](https://github.com/youzan/vant/issues/6010)

**Feature**

- Form: add show-error prop [#5941](https://github.com/youzan/vant/issues/5941)
- Tabbar: add placeholder prop [#5979](https://github.com/youzan/vant/issues/5979)
- Sku: enable safe-area-inset-bottom by default [#5960](https://github.com/youzan/vant/issues/5960)
- Tabbar: enable safe-area-inset-bottom by default when fixed [#5968](https://github.com/youzan/vant/issues/5968)
- SubmitBar: enable safe-area-inset-bottom by default [#5956](https://github.com/youzan/vant/issues/5956)
- GoodsAction: enable safe-area-inset-bottom by default [#5955](https://github.com/youzan/vant/issues/5955)
- Swipe: allow swipe multiple item at once [#5953](https://github.com/youzan/vant/issues/5953)
- Calendar: auto selected to max range [#5992](https://github.com/youzan/vant/issues/5992)

**Improvement**

- NavBar: improve active feedback [#5949](https://github.com/youzan/vant/issues/5949)
- Popup: improve leave animation timing function [#5954](https://github.com/youzan/vant/issues/5954)
- Picker: improve scroll speed [#5951](https://github.com/youzan/vant/issues/5951)
- Swipe: improve swipe threshold [#6003](https://github.com/youzan/vant/issues/6003)
- TreeSelect: update nav background color [#5991](https://github.com/youzan/vant/issues/5991)

**Bug Fixes**

- Button: icon-prefix prop not work [#5947](https://github.com/youzan/vant/issues/5947)
- Calendar: rendering error when activated [#5978](https://github.com/youzan/vant/issues/5978)
- Form: incorrect validation order when add field dynamically [b8dea3](https://github.com/youzan/vant/commit/b8dea3c13b7dbf6533169653c493a3156c07f1d4)
- NavBar: icon align center [#5948](https://github.com/youzan/vant/issues/5948)
- Stepper: readonly not work in lagacy mobile safari [#5976](https://github.com/youzan/vant/issues/5976)

### [v2.5.9](https://github.com/youzan/vant/compare/v2.5.8...v2.5.9)

`2020-03-31`

**Feature**

- AddressEdit: add click-area event [#5939](https://github.com/youzan/vant/issues/5939)
- NavBar: add placeholder prop [#5938](https://github.com/youzan/vant/issues/5938)
- Steps: add click-step event [#5937](https://github.com/youzan/vant/issues/5937)

**Bug Fixes**

- NumberKeyboard: show-delete-key prop not work [#5935](https://github.com/youzan/vant/issues/5935)
- Toast: incorrect height in legacy devices [#5931](https://github.com/youzan/vant/issues/5931)
- Sticky: Fixed error when accessing the window during SSR [#5958](https://github.com/youzan/vant/issues/5958)

### [v2.5.8](https://github.com/youzan/vant/compare/v2.5.7...v2.5.8)

`2020-03-27`

**Feature**

- support generate webstorm types [#5900](https://github.com/youzan/vant/issues/5900)
- Circle: improve text padding [10f32d](https://github.com/youzan/vant/commit/10f32d6619199e99ff743cb5425db1e54e495fd0)
- Form: add show-error-message prop [#5927](https://github.com/youzan/vant/issues/5927)
- ImagePreview: enable swipe lazy-render [#5879](https://github.com/youzan/vant/issues/5879)
- Sidebar: set overflow-y auto [#5921](https://github.com/youzan/vant/issues/5921)
- Swipe: add lazy-render prop [365f2b](https://github.com/youzan/vant/commit/365f2b16f7d9592f92413e206439585468a8a1c7)
- Swipe: use flex layout [f701de](https://github.com/youzan/vant/commit/f701de9e58db5f88a582e3277c97a0c9ca99eec4)

**Bug Fixes**

- Calendar: fix the default date of multiple selection type [#5907](https://github.com/youzan/vant/issues/5907)
- PullRefresh: track should be full of container [#5878](https://github.com/youzan/vant/issues/5878)
- Sticky: shoud rerender after visibility changed [#5888](https://github.com/youzan/vant/issues/5888)
- Swipe: incorrect offset after resize [#5922](https://github.com/youzan/vant/issues/5922)

### [v2.5.7](https://github.com/youzan/vant/compare/v2.5.6...v2.5.7)

`2020-03-20`

**Bug Fixes**

- Locale: fix incorrect japanese filename [e8c88a](https://github.com/youzan/vant/commit/e8c88a380217eb48cef8aa7dc29d378a1031120a)

### [v2.5.6](https://github.com/youzan/vant/compare/v2.5.5...v2.5.6)

`2020-03-20`

**Feature**

- Calendar: add allow-same-day prop [#5688](https://github.com/youzan/vant/issues/5688)
- GoodsAction: add badge prop, mark info prop as deprecated [0dea9e](https://github.com/youzan/vant/commit/0dea9e2cb1562decc07ef4467d085247b91924fd)
- GridItem: add badge prop, mark info prop as deprecated [db94b2](https://github.com/youzan/vant/commit/db94b20c8258ebb31bac99ea1f0c918d62de1059)
- Icon: add badge prop, mark info prop deprecated [575577](https://github.com/youzan/vant/commit/575577ed58a1e6daa36ffba7db8054556aa0d24d)
- ImagePreview: add closed event [5b279a](https://github.com/youzan/vant/commit/5b279ab0dc862c0a3257d18fe17d04ed8dd8c1dd)
- locale: add japanese language [#5853](https://github.com/youzan/vant/issues/5853) [#5854](https://github.com/youzan/vant/issues/5854)
- SidebarItem: add badge prop, mark info prop as deprecated [01482f](https://github.com/youzan/vant/commit/01482f20bc2150a7e4667fac062b4f129b0ac0c1)
- Tab: add badge prop, mark info prop as deprecated [214b13](https://github.com/youzan/vant/commit/214b13b8fff411a401fe6ccfc9eb979a51df7461)
- TabbarItem: add badge prop, mark info prop as deprecated [d61cbd](https://github.com/youzan/vant/commit/d61cbdd086c9050fa467803be676a1eb14d50f16)
- TreeSelect: add badge option, mark info option as deprecated [0cc7a3](https://github.com/youzan/vant/commit/0cc7a305287f43314910f893092c09004cef5349)
- Uploader: add chooseFile method [#5818](https://github.com/youzan/vant/issues/5818)
- Uploader: add show-upload prop [66c0b3](https://github.com/youzan/vant/commit/66c0b3c1b7d101f242071cf90e5c0b2b899edbdd)
- Uploader: use before read promise resolved value [#5813](https://github.com/youzan/vant/issues/5813)

**Bug Fixes**

- Calendar: incorret button native-type [#5873](https://github.com/youzan/vant/issues/5873)
- Field: should not cache input slot [#5868](https://github.com/youzan/vant/issues/5868)
- ImagePreview: should not show previews image [7fcfc5](https://github.com/youzan/vant/commit/7fcfc5f3270d3507a002247c53a29da211f1ecb6)
- Picker: update cascade after setColumnIndex [#5807](https://github.com/youzan/vant/issues/5807)
- Picker: update cascade after setColumnValue [#5807](https://github.com/youzan/vant/issues/5807)
- Toast: should lock scroll when use forbidClick [df8777](https://github.com/youzan/vant/commit/df877751b3497eb6477797ee1a52933067e57676)

### [v2.5.5](https://github.com/youzan/vant/compare/v2.5.4...v2.5.5)

`2020-03-11`

**Feature**

- Calendar: add show-title prop [#5779](https://github.com/youzan/vant/issues/5779)
- Calendar: add show-subtitle prop [#5779](https://github.com/youzan/vant/issues/5779)
- Field: improve number keyboard [e89baa](https://github.com/youzan/vant/commit/e89baa12ae24dbd27466bd6ec694074ab99acf5d)
- Stepper: improve number keyboard [58e74a](https://github.com/youzan/vant/commit/58e74a9e8bfc36f69103c6a301170c5f6ada03dd)
- GoodsActionIcon: add dot prop [b983ac](https://github.com/youzan/vant/commit/b983ac08919056e1095767d1deb3f78e5274b41c)

**Bug Fixes**

- AddressEdit: check addressDetail only when showDetail is true [#5803](https://github.com/youzan/vant/issues/5803)
- Calendar: color not work in multiple mode [#5786](https://github.com/youzan/vant/issues/5786)
- Field: should not get formValue from button slot [#5785](https://github.com/youzan/vant/issues/5785)
- GoodsActionIcon: info not work with icon slot [#5788](https://github.com/youzan/vant/issues/5788)
- Stepper: skip form number validation [#5792](https://github.com/youzan/vant/issues/5792)
- Sticky: should not detect scroll when hidden [41e5c0](https://github.com/youzan/vant/commit/41e5c035dcf75c1f1d4c04673d3db255e439d452)

### [v2.5.4](https://github.com/youzan/vant/compare/v2.5.3...v2.5.4)

`2020-03-08`

**Feature**

- Calendar: add multiple type [#5705](https://github.com/youzan/vant/issues/5705)
- Field: input inherit line-height [#5737](https://github.com/youzan/vant/issues/5737)
- Search: add left slot [#5771](https://github.com/youzan/vant/issues/5771)
- Uploader: add upload-icon prop [b3b46c](https://github.com/youzan/vant/commit/b3b46cde45f885b746a2a633e5fc0e87e1881abe)
- Uploader: increase border-radius to 8px [c67918](https://github.com/youzan/vant/commit/c6791841f4b06e699a684da0243526147438d852)
- Uploader: update upload area style [bd4e64](https://github.com/youzan/vant/commit/bd4e64190e63eea30c342ea5255d8603a70385f9)

**Bug Fixes**

- Calendar: incorrect position when poppable is false [#5760](https://github.com/youzan/vant/issues/5760)
- DropdownMenu: menu ref may not exist in some cases [#5770](https://github.com/youzan/vant/issues/5770)
- Tabs: incorrect scrollspy position while inside a scroller [0993b3](https://github.com/youzan/vant/commit/0993b394b16fdbf92bdf02d39090e631bba1f471)
- Tabs: lock scroll not work when using scrollspy [#5727](https://github.com/youzan/vant/issues/5727)
- TimePicker: incorrect value when set min-minute dynamically [#5767](https://github.com/youzan/vant/issues/5767)

**Types**

- Form: fix missing scrollToField method [df4439](https://github.com/youzan/vant/commit/df4439e9f6759a446b522652233703601093e99d)
- ImagePreview: fix missing closeable option [d5438d](https://github.com/youzan/vant/commit/d5438dfe0dc9df22e94881b57def33207eca44e6)
- Toast: fix missing iconPrefix option [3237e5](https://github.com/youzan/vant/commit/3237e56561e1b6b80ea3431f3b8a9f30f61d4b08)

### [v2.5.3](https://github.com/youzan/vant/compare/v2.5.2...v2.5.3)

`2020-02-28`

**Feature**

- ActionSheet: add close-on-popstate prop [#5716](https://github.com/youzan/vant/issues/5716)
- Area: add columns-top、columns-bottom prop [#5719](https://github.com/youzan/vant/issues/5719)
- Area: add title slot [#5719](https://github.com/youzan/vant/issues/5719)
- Button: add icon-prefix prop [#5666](https://github.com/youzan/vant/issues/5666)
- Cell: add icon-prefix prop [#5666](https://github.com/youzan/vant/issues/5666)
- Field: add icon-prefix prop [#5666](https://github.com/youzan/vant/issues/5666)
- Form: rule message can be function [#5704](https://github.com/youzan/vant/issues/5704)
- Form: rule validator add rule param [#5704](https://github.com/youzan/vant/issues/5704)
- Form: support pattern rule [#5700](https://github.com/youzan/vant/issues/5700)
- Form: support rule formatter [d87835](https://github.com/youzan/vant/commit/d878354ebf8eedf849764480c11a90c4cdd2fbe3)
- GridItem: add icon-prefix prop [#5666](https://github.com/youzan/vant/issues/5666)
- Rate: add icon-prefix prop [#5666](https://github.com/youzan/vant/issues/5666)
- TabbarItem: add icon-prefix prop [#5666](https://github.com/youzan/vant/issues/5666)

**Bug Fixes**

- Calendar: scrollIntoView error when hidden [#5708](https://github.com/youzan/vant/issues/5708)
- DatetimePicker: getPicker method not work [#5710](https://github.com/youzan/vant/issues/5710)
- Popup: close-on-popstate not work when deactivated [f07077](https://github.com/youzan/vant/commit/f070773b42b86dd98d1f3989651e735895db78ee)

### [v2.5.2](https://github.com/youzan/vant/compare/v2.5.1...v2.5.2)

`2020-02-21`

**Feature**

- Calendar: add close、closed event [556f33](https://github.com/youzan/vant/commit/556f335cc224a40ab27bda863a67601c36339ea9)
- Calendar: add open、opened event [a83082](https://github.com/youzan/vant/commit/a83082f599362456d85864904cb5f47b44138e43)
- Form: add scroll-to-error prop [#5680](https://github.com/youzan/vant/issues/5680)
- Form: add validate-trigger prop [c08db7](https://github.com/youzan/vant/commit/c08db724a3ed6440da5d5faebfa08561312f4d3a)
- Form: add scrollToField method [#5680](https://github.com/youzan/vant/issues/5680)
- Sku: add preview-on-click-image prop [#5684](https://github.com/youzan/vant/issues/5684)
- Sku: add sku-header-image-extra slot [#5696](https://github.com/youzan/vant/issues/5696)

**Bug Fixes**

- Swipe: fix wrap problems caused by decimal width in some android devices [02afe7](https://github.com/youzan/vant/commit/02afe720c6aaeeb58036cde3072b6373e3b9254f)

### [v2.5.1](https://github.com/youzan/vant/compare/v2.5.1-beta.0...v2.5.1)

`2020-02-18`

**Feature**

- Sku: support define initialMessages
- Calendar: scroll to current month after reset [407b7d](https://github.com/youzan/vant/commit/407b7ded43bc87c98605444dbbb829f5f05744b6)
- Calendar: scroll to currecnt month when default-date changed [#5664](https://github.com/youzan/vant/issues/5664)

**Bug Fixes**

- Calendar: add Math.floor to avoid decimal height issues [#5640](https://github.com/youzan/vant/issues/5640)
- Calendar: should not check range in single mode [79d2c3](https://github.com/youzan/vant/commit/79d2c344f9ee9945b09434b35cbe63a3816410ad)
- Form: error-message-align prop type [#5674](https://github.com/youzan/vant/issues/5674)
- Swipe: incorrect width when resize in invisible state [#5678](https://github.com/youzan/vant/issues/5678)

### [v2.5.0](https://github.com/youzan/vant/compare/v2.4.7...v2.5.0)

`2020-02-15`

**New Component**

- add Form component

**Feature**

- Field: add name prop [f3398d](https://github.com/youzan/vant/commit/f3398dc2cdd1191613b97454b4725275458bde1b)
- Field: add rules prop [0ed7aa](https://github.com/youzan/vant/commit/0ed7aaac88f769549b688259b8e6e1050a10cb99)
- AddressEdit: add disable-area prop [#5630](https://github.com/youzan/vant/issues/5630)
- AddressList: add item-bottom slot [#5629](https://github.com/youzan/vant/issues/5629)
- RadioGroup: add direction prop [4dd41b](https://github.com/youzan/vant/commit/4dd41b23decbaf86c8812e0afcc1d72773f223f6)
- CheckboxGroup: add direction prop [153902](https://github.com/youzan/vant/commit/15390241d8d4252a828aa0e9d8c61377ba07512a)
- ImagePreview: add scale event [#5658](https://github.com/youzan/vant/issues/5658)
- ImagePreview: add closeable prop [#5654](https://github.com/youzan/vant/issues/5654)

**Style**

- Field: input slot vertical align center [03c826](https://github.com/youzan/vant/commit/03c826c4d44efd95a5ee509b5f183d8ded574fd7)
- Field: improve label right padding [2d6445](https://github.com/youzan/vant/commit/2d64458776df87625db9e8b07d83a7044a2bcf53)
- Uploader: add uploader disabled style [#5628](https://github.com/youzan/vant/issues/5628)

**Bug Fixes**

- Calendar: fix render issues in some devices [#5640](https://github.com/youzan/vant/issues/5640)
- Dialog: fix Dialog.Component typing [#5646](https://github.com/youzan/vant/issues/5646)
- Field: text-fill-color may affect child element [e17a4a](https://github.com/youzan/vant/commit/e17a4a24993822b0f35114dacbbb3bebc5b51a60)
- Picker: change event untriggered without a transition [#5662](https://github.com/youzan/vant/issues/5662)
- Tabs: scrollspy not work when custom scroller [#5637](https://github.com/youzan/vant/issues/5637)
- Calendar: should not submit form when click button [e93fcb](https://github.com/youzan/vant/commit/e93fcb0603b988a2ffb5b1651588f7e4ad8aa92d)

### [v2.4.7](https://github.com/youzan/vant/compare/v2.4.7-beta.0...v2.4.7)

`2020-02-06`

**Feature**

- Calendar: improve accessibility [2124cc](https://github.com/youzan/vant/commit/2124cc5261be4a7d666cf6f70d4295309f3705d9)
- Field: highlight word num when reaching maxlength [61093e](https://github.com/youzan/vant/commit/61093ef00f2dc421eb94ec7690093c1d565a296c)
- Sku: add sku-actions-top slot [#5617](https://github.com/youzan/vant/issues/5617)
- Uploader: support failed status [#5624](https://github.com/youzan/vant/issues/5624)
- Uploader: support uploading status [#5625](https://github.com/youzan/vant/issues/5625)

**Style**

- ActionSheet: add @action-sheet-close-icon-active-color less var [265bfe](https://github.com/youzan/vant/commit/265bfeaac756e05803858062ab1ece2092a08e17)
- Popup: add @popup-close-icon-active-color less var [660b03](https://github.com/youzan/vant/commit/660b0399512d3deddcdfb99af5cff1674617c515)

**Bug Fixes**

- Calendar: missing className when selected [0b7c56](https://github.com/youzan/vant/commit/0b7c567a78c85fbf1c3d59fcd3ce76c691040ff1)
- Popup: may throw error when using get-container and destroyed

### [v2.4.6](https://github.com/youzan/vant/compare/v2.4.5...v2.4.6)

`2020-02-01`

**Bug Fixes**

- Picker: should watch columns change [#5614](https://github.com/youzan/vant/issues/5614)

### [v2.4.5](https://github.com/youzan/vant/compare/v2.4.4...v2.4.5)

`2020-02-01`

**Feature**

- Picker: support cascade columns [#4247](https://github.com/youzan/vant/issues/4247)
- Slider: add button-size prop [1e9b8c](https://github.com/youzan/vant/commit/1e9b8c846674562d56ab638a0982baab4bb6870e)
- Optimize the props type. The original number type props now support string.

**Style**

- DropdownItem: add @dropdown-item-z-index less var [6f4c6f](https://github.com/youzan/vant/commit/6f4c6f5aa6614559cfc24bc361e68c9c938bbb61)
- IndexBar: add @index-anchor-z-index less var [89ee8e](https://github.com/youzan/vant/commit/89ee8e38723dadb2daa6ee31c325cdd2ad03ba99)
- IndexBar: add @index-bar-sidebar-z-index less var [89ee8e](https://github.com/youzan/vant/commit/89ee8e38723dadb2daa6ee31c325cdd2ad03ba99)
- IndexBar: add @index-bar-index-active-color less var [0011db](https://github.com/youzan/vant/commit/0011db75365b60699ae140d85e54b9e477f46a22)
- Notify: add @notify-text-color less var [9dcf57](https://github.com/youzan/vant/commit/9dcf57c65f5e046318e953f2e8ce87918b1cb312)
- Overlay: add @overlay-z-index less var [95d19f](https://github.com/youzan/vant/commit/95d19f70d1c90efc752074ff764b07787d89cf1e)
- Rate: add @rate-icon-disabled-color less var [8b8471](https://github.com/youzan/vant/commit/8b8471945c4313735a5fe59402212f37a31acfea)
- Rate: add @rate-icon-full-color less var [5c804c](https://github.com/youzan/vant/commit/5c804cf920b75c5bdf962fa49eae31363783f32f)
- Rate: add @rate-icon-void-color less var [f90015](https://github.com/youzan/vant/commit/f90015efe7619af055b9ebd4c8be7da1f17b8da0)
- Slider: add @slider-bar-height less var [a5819c](https://github.com/youzan/vant/commit/a5819c286e06469bc41e8aa9e0ed44cc21625dad)
- Search: add @search-content-background-color less var [ea7419](https://github.com/youzan/vant/commit/ea74194990314bd1ff1e8237c221be92fdb8ae37)
- Step: add @step-active-color less var [9e7a68](https://github.com/youzan/vant/commit/9e7a6874141fa05f0158ca8006c268d0a3d92679)
- Tabbar: add @tabbar-z-index less var [0441f7](https://github.com/youzan/vant/commit/0441f7ba098aca24b797de29d10af8f47cf32d15)
- NavBar: add @nav-bar-z-index less var [a2d870](https://github.com/youzan/vant/commit/a2d870ad8ee4912226ec8871cc4c2d56ef870902)
- NumberKeyboard: add @number-keyboard-z-index less var [760938](https://github.com/youzan/vant/commit/760938962399e0589b4a258ff29e7fe2f3ba90f1)

**Bug Fixes**

- ImagePreview: limit max-zoom when double clicking [1baa60](https://github.com/youzan/vant/commit/1baa60f2244b4605dc82f6dcf564671f5c623023)
- Popup: duration prop not work when position is center [44072e](https://github.com/youzan/vant/commit/44072e8c3f548cff78401780213ab7ef213372c3)
- Step: active-color should be effective for line [cfadce](https://github.com/youzan/vant/commit/cfadcefb0a1c29dfb1d940fbb7add746595158bd)

### [v2.4.4](https://github.com/youzan/vant/compare/v2.4.3...v2.4.4)

`2020-01-24`

**Feature**

- Card: change thumb fit mode to cover [e766d5](https://github.com/youzan/vant/commit/e766d5d5743e7f492b3601ce4010b8524fb2b016)
- Calendar: add get-contaienr prop [#5609](https://github.com/youzan/vant/issues/5609)
- Calendar: add close-on-popstate prop [2b82dc](https://github.com/youzan/vant/commit/2b82dcc3dd2dba678aba5e0533e0ff6af7c55b11)
- CountDown: add change event [#5599](https://github.com/youzan/vant/issues/5599)
- GoodsActionButton: add icon prop [b83bed](https://github.com/youzan/vant/commit/b83bed3b6c41d0896386b3c4b6380c9568bd3ef2)

**Bug Fixes**

- Sku: get-container can be string type [#5608](https://github.com/youzan/vant/issues/5608)

### [v2.4.3](https://github.com/youzan/vant/compare/v2.4.3-beta.0...v2.4.3)

`2020-01-19`

**Feature**

- Calendar: add max-range、range-prompt prop [#5583](https://github.com/youzan/vant/issues/5583)
- ImagePreview: add @image-preview-index-text-shadow var [e2f302](https://github.com/youzan/vant/commit/e2f30242eaaebd36d9816e2746fe6c44323e6aca)
- Stepper: add long-press prop [2f3ec6](https://github.com/youzan/vant/commit/2f3ec6a3d48a9d56f8127d27d51c3337f6e72cab)
- Swipe: pause autoplay when page hidden [113157](https://github.com/youzan/vant/commit/11315787ec980767973a3fded50fb5858e51e298)

**Improvement**

- Icon: update share icon [2f77ac](https://github.com/youzan/vant/commit/2f77acfc6cef23ea664defc38c4cd806ceca1ee4)
- Field: imporve readonly cursor [60173d](https://github.com/youzan/vant/commit/60173dd6bc004339333c50218d7c6b2f6c1bc07b)
- Stepper: improve disable-input behavior [959eca](https://github.com/youzan/vant/commit/959eca136c4ca6a39e22d36512db74b93ad100c6)

**Bug Fixes**

- Calendar: should show range prompt after select [ff0901](https://github.com/youzan/vant/commit/ff09011e0ef18ab29dd70b51f412625dd10bb4cb)
- GoodsAction: should set wrapper height [#5593](https://github.com/youzan/vant/issues/5593)

**Types**

- Calendar: fix missing type definition [#5588](https://github.com/youzan/vant/issues/5588)
- Toast: incorrect definition of setDefaultOptions method [#5582](https://github.com/youzan/vant/issues/5582)

### [v2.4.2](https://github.com/youzan/vant/compare/v2.4.2-beta.1...v2.4.2)

`2020-01-14`

**Feature**

- Sku: add properties prop [#5525](https://github.com/youzan/vant/issues/5525)
- Field: add digit type [#5524](https://github.com/youzan/vant/issues/5524)
- Image: add error-icon prop [#5470](https://github.com/youzan/vant/issues/5470)
- Image: add loading-icon prop [#5469](https://github.com/youzan/vant/issues/5469)
- Field: add formatter prop [#5534](https://github.com/youzan/vant/issues/5534)
- Swipe: add prev、next method [#5548](https://github.com/youzan/vant/issues/5548)
- GoodsAcitonIcon: add color prop [#5576](https://github.com/youzan/vant/issues/5576)

**Improvement**

- AddressEdit: show error message in field [#5479](https://github.com/youzan/vant/issues/5479)
- ActionSheet: update close icon style [#5574](https://github.com/youzan/vant/issues/5574)
- AddressList: update style [#5507](https://github.com/youzan/vant/issues/5507)
- CouponList: update style [#5501](https://github.com/youzan/vant/issues/5501)
- Calendar: scroll to current month when show [#5526](https://github.com/youzan/vant/issues/5526)
- ImagePreview: improve error image style [#5570](https://github.com/youzan/vant/issues/5570)
- improve cursor of all components [c1a535](https://github.com/youzan/vant/commit/c1a535b0dd9470f8eb526e86aa59cf6dec022f3a)

**Bug Fixes**

- Button: should not have click feedback when loading [0a70d3](https://github.com/youzan/vant/commit/0a70d344124ef756a73ea9edfee07303f394d880)
- Card: thumb image border-radius become effective [#5480](https://github.com/youzan/vant/issues/5480)
- Calendar: incorrect month title after auto scroll [#5569](https://github.com/youzan/vant/issues/5569)
- Calendar: missing info when selected [#5536](https://github.com/youzan/vant/issues/5536)
- Checkbox: only the icon is clickable when label-disabled [3d10d4](https://github.com/youzan/vant/commit/3d10d42fccadd1b9df46860d758a91f7825073e9)
- CouponList: incorrect click feedback [#5521](https://github.com/youzan/vant/issues/5521)
- Field: should limit number input in iOS [#5520](https://github.com/youzan/vant/issues/5520)
- ImagePreview: disable desktop browser image drag [#4487](https://github.com/youzan/vant/issues/4487)
- Picker: optimize the click experience [5cbb9e](https://github.com/youzan/vant/commit/5cbb9e29989ac58d44a4ec503cbb984269c8f18e)
- PullRefresh: should set height when using head-height [028747](https://github.com/youzan/vant/commit/028747c35471f33e8c2b0baa6fb8915510daac22)
- Tabs: can not render line when wrapper is fixed [#5496](https://github.com/youzan/vant/issues/5496)

### [v2.4.1](https://github.com/youzan/vant/compare/v2.4.0...v2.4.1)

`2020-01-02`

**Feature**

- ContactEdit: show error message in field [#5437](https://github.com/youzan/vant/issues/5437)
- CouponCell: prefer to use value over denominations [#5438](https://github.com/youzan/vant/issues/5438)

**Bug Fixes**

- Calendar: fix incorrect day offset [#5452](https://github.com/youzan/vant/issues/5452)
- List: fix incorrect reaching edge condition when direction is up [#5439](https://github.com/youzan/vant/issues/5439)

### [v2.4.0](https://github.com/youzan/vant/compare/v2.3.3...v2.4.0)

`2020-01-01`

**New Component**

- add Calendar component

![](https://img.yzcdn.cn/vant/calendar-12282.png)

**Feature**

- List: add error slot [e9a938](https://github.com/youzan/vant/commit/e9a938820232194ad5f62b2b6588fa5d604016ae)
- List: add finished slot [8a0705](https://github.com/youzan/vant/commit/8a0705d7610890c0da47e9e7eb0ef5665a3dca0d)
- PullRefresh: add success slot [56e450](https://github.com/youzan/vant/commit/56e450f29e67a5e66b26cf9937c458270f462bdc)
- CouponList: update button style [#5368](https://github.com/youzan/vant/issues/5368)
- DatetimePicker: add getPicker method [1dc1fe](https://github.com/youzan/vant/commit/1dc1feae40b8ca11df980aa1d5ecf108151938e4)
- Image: add @image-loading-icon-size、@image-error-icon-size var [d7ae8c](https://github.com/youzan/vant/commit/d7ae8c5a26dcb6b7b79b4ca7a2ed3842673c2ea0)
- Picker: add confirm method [5eb2a4](https://github.com/youzan/vant/commit/5eb2a4012ae3e9d90a29a924ae454e54408b1235)
- TreeSelect: add @tree-select-item-selected-size var [373159](https://github.com/youzan/vant/commit/37315975203f28d36634d9ad8388a7f4dc8a44ea)

**Compatibility**

- NumberKeyboard: avoid Vue 2.6 event bubble issues [#5349](https://github.com/youzan/vant/issues/5349)
- Picker: avoid Vue 2.6 event bubble issues by manually binding events [#5345](https://github.com/youzan/vant/issues/5345)
- PullRefresh: avoid Vue 2.6 event bubble issues [#5347](https://github.com/youzan/vant/issues/5347)
- Rate、Slider: avoid Vue 2.6 event bubble issues [#5350](https://github.com/youzan/vant/issues/5350)
- Swipe: avoid Vue 2.6 event bubble issues [#5346](https://github.com/youzan/vant/issues/5346)
- SwipeCell: avoid Vue 2.6 event bubble issues [#5348](https://github.com/youzan/vant/issues/5348)

**Bug Fixes**

- ImagePreview: close event triggered twice [#5411](https://github.com/youzan/vant/issues/5411)
- ImagePreview: should not emit close event after tapped when using async-close [#5410](https://github.com/youzan/vant/issues/5410)
- PullRefresh: failed to trigger pull refresh when scrolling [e00058](https://github.com/youzan/vant/commit/e00058b681d8796feaaaa4a9f2c4083a18b61fe9)
- Tag: incorrect transition when set closeable dynamically [fe6e2f](https://github.com/youzan/vant/commit/fe6e2f29ba289206138fe17df046a55000b218ad)
- Tag: should not trigger click event when close [#5351](https://github.com/youzan/vant/issues/5351)
- Toast: may lose forbid click when has multiple toasts [#5398](https://github.com/youzan/vant/issues/5398)
- Icon: should compatible with medel-o [7b905a](https://github.com/youzan/vant/commit/7b905a6de85b895e2226c35875ee3633c2ae7e79)
- IndexBar: incorrect anchor position when anchor doesn't have a parent node [#5429](https://github.com/youzan/vant/issues/5429)
- Picker: compatible with desktop scenario [#5430](https://github.com/youzan/vant/issues/5430)
- Stepper: input disabled text color in safari [#5428](https://github.com/youzan/vant/issues/5428)

**Types**

- AddressEdit: add setAddressDetail method type [#5352](https://github.com/youzan/vant/issues/5352)
- Area: add reset method type [#5353](https://github.com/youzan/vant/issues/5353)
- Checkbox: add toggle method type [#5354](https://github.com/youzan/vant/issues/5354)
- CountDown: add methods types [0438bd](https://github.com/youzan/vant/commit/0438bdbc97a81ad8b7de18ef8784d9907ce641c6)
- DropdownItem: add toggle method type [5c1883](https://github.com/youzan/vant/commit/5c1883f77c36d5026c60c873197dab98d4ca42f5)
- Field: add focus、blur method type [0b5c8e](https://github.com/youzan/vant/commit/0b5c8e5f3df570292e8599e7c2ff997fbee120ce)
- List: add check method type [285bce](https://github.com/youzan/vant/commit/285bce677c8997d55515a760f4d12b05349ebd3f)
- Picker: add method types [46d2b0](https://github.com/youzan/vant/commit/46d2b094477b52a96e85d18ec6fc42051a832e10)
- Sku: add methods types [d2bb9f](https://github.com/youzan/vant/commit/d2bb9fa81b401e429296003e4c2ec8c0e544d2af)
- Swipe: add swipeTo、resize method types [a1831b](https://github.com/youzan/vant/commit/a1831b86387f1127325b9952d2d18349d41dc5c7)
- SwipeCell: add open、close method type [9a9676](https://github.com/youzan/vant/commit/9a9676d6af7d29ac2221761ad680cecd4e929a39)
- Tabs: add resize method type [3c526e](https://github.com/youzan/vant/commit/3c526ec1a26b5a38bc6a6ba2ded7a3db94bbcced)
- Uploader: add closeImagePreview method type [cf191e](https://github.com/youzan/vant/commit/cf191e09cbc8093bb72f5d1e9381b263cdf9f0d2)

### [v2.3.3](https://github.com/youzan/vant/tree/v2.3.3)

`2019-12-21`

**Bug Fixes**

- fix compile error when using babel-plugin-import

### [v2.3.2](https://github.com/youzan/vant/tree/v2.3.2)

`2019-12-20`

**Bug Fixes**

- fix Area missing style
- fix DatetimePicker missing style
- fix CountDown infinite tick if call reset after finish [\#5340](https://github.com/youzan/vant/pull/5340)
- fix ImagePreview onClose should only trigger once [\#5341](https://github.com/youzan/vant/pull/5341)

### [v2.3.1](https://github.com/youzan/vant/tree/v2.3.1)

`2019-12-20`

**Bug Fixes**

- Fix uncompiled ES6 code in the entry file

### [v2.3.0](https://github.com/youzan/vant/tree/v2.3.0)

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

- use [@vant/cli](https://github.com/youzan/vant/tree/dev/packages/vant-cli) to build pacakge
- AddressList: add default-tag-text prop [\#5106](https://github.com/youzan/vant/pull/5106)
- Card: add price-top slot [\#5134](https://github.com/youzan/vant/pull/5134)
- Checkbox: improve toggleAll perf [\#5285](https://github.com/youzan/vant/pull/5285)
- Circle: add stroke-linecap prop [\#5087](https://github.com/youzan/vant/pull/5087)
- CouponList: add show-count prop [\#5139](https://github.com/youzan/vant/pull/5139)
- CountDown: support SS and S format [\#5154](https://github.com/youzan/vant/pull/5154)
- ContactList: add default-tag-text prop [\#5089](https://github.com/youzan/vant/pull/5089)
- ContactCard: add show-set-default prop [\#5083](https://github.com/youzan/vant/pull/5083)
- ContactCard: add set-default-label prop [\#5083](https://github.com/youzan/vant/pull/5083)
- Sku: add start-sale-num prop [\#5105](https://github.com/youzan/vant/pull/5105)
- Sku: add resetSelectedSku method [\#5318](https://github.com/youzan/vant/pull/5318)
- SubmitBar: add text-align prop [\#5130](https://github.com/youzan/vant/pull/5130)
- SwipeCell: add open event [\#5324](https://github.com/youzan/vant/pull/5324)
- SwipeCell: add before-close prop [\#5320](https://github.com/youzan/vant/pull/5320)
- Tab: add dot prop [\#5272](https://github.com/youzan/vant/pull/5272)
- Tab: add info prop [\#5274](https://github.com/youzan/vant/pull/5274)
- Tab: add rendered event [\#5315](https://github.com/youzan/vant/pull/5315)
- Tab: add scrollspy prop [\#5273](https://github.com/youzan/vant/pull/5273)
- Toast: improve type definitions [\#5086](https://github.com/youzan/vant/pull/5086)

**Bug Fixes**

- fix ActionSheet should not submit form [\#5181](https://github.com/youzan/vant/pull/5181)
- fix Card allow use bottom slot without price or num [\#5116](https://github.com/youzan/vant/pull/5116)
- fix Dialog show not trigger close event when hidden [\#5267](https://github.com/youzan/vant/pull/5267)
- fix DropdownMenu incorrect menu position when scroll [\#5313](https://github.com/youzan/vant/pull/5313)
- fix Icon medal typo [\#5242](https://github.com/youzan/vant/pull/5242)
- fix NumberKeyboard should not trigger blur event when hidden [\#5110](https://github.com/youzan/vant/pull/5110)
- fix Picker should not submit form [\#5182](https://github.com/youzan/vant/pull/5182)
- fix Popup should reopen when activated [\#5286](https://github.com/youzan/vant/pull/5286)
- fix Stepper should format value when max、min changed [\#5257](https://github.com/youzan/vant/pull/5257)
- fix Sku should check state when reset [\#5231](https://github.com/youzan/vant/pull/5231)
- fix Switch incorrect size prop type [\#5229](https://github.com/youzan/vant/pull/5229)
- fix SubmitBar incorrect decimal when price is integer [\#5224](https://github.com/youzan/vant/pull/5224)
- fix Sku stepper value must be integer [\#5202](https://github.com/youzan/vant/pull/5202)
- fix Sku stepper should not emit invalid num [\#5210](https://github.com/youzan/vant/pull/5210)
- fix Stepper should not submit form [\#5183](https://github.com/youzan/vant/pull/5183)
- fix TreeSelect should sync value before trigger click-item event [\#5153](https://github.com/youzan/vant/pull/5153)
- fix TouchEmulator compatibility issues on firefox [\#5118](https://github.com/youzan/vant/pull/5118)
- fix Uploader not trigger oversize event when upload same file [\#5177](https://github.com/youzan/vant/pull/5177)
- fix less import issue [\#5157](https://github.com/youzan/vant/pull/5157)

### [v2.2.16](https://github.com/youzan/vant/tree/v2.2.16)

`2019-12-03`

**Features**

- Stepper: add disable-plus props [\#5180](https://github.com/youzan/vant/pull/5180)
- Stepper: add disable-minus props [\#5180](https://github.com/youzan/vant/pull/5180)

### [v2.2.15](https://github.com/youzan/vant/tree/v2.2.15)

`2019-11-28`

**Bug Fixes**

- fix List incorrect list status in some cases

### [v2.2.14](https://github.com/youzan/vant/tree/v2.2.14)

`2019-11-22`

**Features**

- Tabs: add title-style prop [\#5048](https://github.com/youzan/vant/pull/5048)
- Tabs: add resize method [\#5071](https://github.com/youzan/vant/pull/5071)
- Swipe: add resize method [\#5070](https://github.com/youzan/vant/pull/5070)

**Bug Fixes**

- fix Cell should break word of value [\#5029](https://github.com/youzan/vant/pull/5029)
- fix Field incorrect count of line break in safari [\#5049](https://github.com/youzan/vant/pull/5049)
- fix Tabbar incorrect style when using safe-area-inset-bottom [\#5079](https://github.com/youzan/vant/pull/5079)
- fix SwipeCell compatible with desktop scenario [\#5077](https://github.com/youzan/vant/pull/5077)
- fix DropdownMenu should't close when custom container and get clicked [\#5047](https://github.com/youzan/vant/pull/5047)

### [v2.2.13](https://github.com/youzan/vant/tree/v2.2.13)

`2019-11-14`

**Features**

- Area: add swipe-duration prop [\#5014](https://github.com/youzan/vant/pull/5014)
- Swipe: add stop-propagation prop [\#4972](https://github.com/youzan/vant/pull/4972)
- Toast: add overlay option [\#4969](https://github.com/youzan/vant/pull/4969)
- Toast: add clickOnClickOverlay option [\#4967](https://github.com/youzan/vant/pull/4967)
- SwipeCell: add opened event [\#4986](https://github.com/youzan/vant/pull/4986)
- ActionSheet: add close-icon prop [\#5016](https://github.com/youzan/vant/pull/5016)
- DropdownItem: add title slot [\#4975](https://github.com/youzan/vant/pull/4975)
- DatetimePicker: add swipe-duration prop [\#5015](https://github.com/youzan/vant/pull/5015)

**Bug Fixes**

- fix Tab can't match when name is 0 [\#5017](https://github.com/youzan/vant/pull/5017)
- fix Indexbar incorrect anchor position when hidden [\#5012](https://github.com/youzan/vant/pull/5012)
- fix Indexbar incorrect anchor position when set sticky-offset-top [\#5012](https://github.com/youzan/vant/pull/5012)
- fix DatetimePicker can't change when filter when empty array [\#4973](https://github.com/youzan/vant/pull/4973)
- fix DateTimePicker incorrect value when set max-hour or max-minute [\#5006](https://github.com/youzan/vant/pull/5006)
- fix ImagePreview missing swipeDuration type definition [\#4968](https://github.com/youzan/vant/pull/4968)

### [v2.2.12](https://github.com/youzan/vant/tree/v2.2.12)

`2019-11-07`

**Features**

- Stepper: add name prop [\#4931](https://github.com/youzan/vant/pull/4931)
- Uploader: add deletable prop [\#4925](https://github.com/youzan/vant/pull/4925)

**Bug Fixes**

- fix Sku set min-height for sku body [\#4942](https://github.com/youzan/vant/pull/4942)
- fix List may trigger load event repeatedly [\#4953](https://github.com/youzan/vant/pull/4953)
- fix can't custom hairline border color [\#4939](https://github.com/youzan/vant/pull/4939)

### [v2.2.11](https://github.com/youzan/vant/tree/v2.2.11)

`2019-11-04`

**Features**

- Switch: add click event [\#4915](https://github.com/youzan/vant/pull/4915)
- Switch: support number type of size prop [\#4913](https://github.com/youzan/vant/pull/4913)
- Toast: change default duration to 2s [\#4886](https://github.com/youzan/vant/pull/4886)
- Uploader: add closeImagePreview method [\#4901](https://github.com/youzan/vant/pull/4901)

**Bug Fixes**

- fix Button loading color [\#4868](https://github.com/youzan/vant/pull/4868)
- fix CountDown should clear timer when destroyed [\#4918](https://github.com/youzan/vant/pull/4918)
- fix CountDown should pause timer when deactivated [\#4919](https://github.com/youzan/vant/pull/4919)
- fix Grid info、dot prop not work when use icon slot [\#4902](https://github.com/youzan/vant/pull/4902)

### [v2.2.10](https://github.com/youzan/vant/tree/v2.2.10)

`2019-10-27`

**Features**

- Icon: add font-display auto property [\#4831](https://github.com/youzan/vant/pull/4831)
- Popup: add close-on-popstate prop [\#4845](https://github.com/youzan/vant/pull/4845)
- Picker: add swipe-duration prop [\#4816](https://github.com/youzan/vant/pull/4816)
- Toast: support set default options of specfic type [\#4848](https://github.com/youzan/vant/pull/4848)

**Bug Fixes**

- fix Uploader file preview border radius [\#4846](https://github.com/youzan/vant/pull/4846)
- fix DatetimePicker incorrecrt initial value when use min-date and filter [\#4837](https://github.com/youzan/vant/pull/4837)

### [v2.2.9](https://github.com/youzan/vant/tree/v2.2.9)

`2019-10-20`

**Features**

- Tag: add closeable prop [\#4763](https://github.com/youzan/vant/pull/4763)
- Loading: add some less vars [\#4781](https://github.com/youzan/vant/pull/4781)
- Progress: add some less vars [\#4790](https://github.com/youzan/vant/pull/4790)
- Progress: add track-color prop [\#4789](https://github.com/youzan/vant/pull/4789)
- Toast: add @toast-loading-icon-color var [\#4782](https://github.com/youzan/vant/pull/4782)
- Picker: add @picker-loading-icon-color var [\#4787](https://github.com/youzan/vant/pull/4787)
- ImagePreview: add cover slot [\#4766](https://github.com/youzan/vant/pull/4766)

**Bug Fixes**

- fix Tag incorrect round radius [\#4762](https://github.com/youzan/vant/pull/4762)
- fix Sku emit sku-selected event when reset sku [\#4755](https://github.com/youzan/vant/pull/4755)
- fix ImagePreview should not close when click index [\#4764](https://github.com/youzan/vant/pull/4764)
- fix AddressEdit choose overseas failure when configuring placeholer [\#4769](https://github.com/youzan/vant/pull/4769)

### [v2.2.8](https://github.com/youzan/vant/tree/v2.2.8)

`2019-10-17`

**Features**

- Dialog: update border radius [\#4730](https://github.com/youzan/vant/pull/4730)
- Uploader: update delete icon style [\#4712](https://github.com/youzan/vant/pull/4712)
- Field: add show-word-limit prop [\#4721](https://github.com/youzan/vant/pull/4721)
- Stepper: limit decimal length when input [\#4747](https://github.com/youzan/vant/pull/4747)
- Slider: improve click area [\#4701](https://github.com/youzan/vant/pull/4701)
- ActionSheet: add description prop [\#4691](https://github.com/youzan/vant/pull/4691)
- Slider: add slide animation [\#4700](https://github.com/youzan/vant/pull/4700)
- add gradient color variables [\#4752](https://github.com/youzan/vant/pull/4752)
- add multi-line ellipsis classes [\#4690](https://github.com/youzan/vant/pull/4690)

**Bug Fixes**

- fix AddressEdit area confirmation verification [\#4724](https://github.com/youzan/vant/pull/4724)
- fix Rate incorrect height caused by inline-block [\#4693](https://github.com/youzan/vant/pull/4693)
- fix Slider pseudo element may casue body overflow-x [\#4699](https://github.com/youzan/vant/pull/4699)

### [v2.2.7](https://github.com/youzan/vant/tree/v2.2.7)

`2019-10-11`

**Features**

- Dialog: add width prop [\#4687](https://github.com/youzan/vant/pull/4687)
- Dialog: add overlay-class prop [\#4683](https://github.com/youzan/vant/pull/4683)
- Dialog: add overlay-style prop [\#4682](https://github.com/youzan/vant/pull/4682)
- Uploader: add file result-type [\#4680](https://github.com/youzan/vant/pull/4680)
- TreeSelect: add className option [\#4671](https://github.com/youzan/vant/pull/4671)

**Bug Fixes**

- fix Dialog avoid text blurry [\#4686](https://github.com/youzan/vant/pull/4686)
- fix Stepper can't work when step is small [\#4675](https://github.com/youzan/vant/pull/4675)
- fix DatetimePicker should update value when range changed [\#4676](https://github.com/youzan/vant/pull/4676)
- fix Field incorrect placeholder color when error and disabled [\#4666](https://github.com/youzan/vant/pull/4666)

### [v2.2.6](https://github.com/youzan/vant/tree/v2.2.6)

`2019-10-08`

**Features**

- Grid: add icon-size prop [\#4656](https://github.com/youzan/vant/pull/4656)
- Toast: add transition option [\#4638](https://github.com/youzan/vant/pull/4638)
- Dialog: add transition prop [\#4636](https://github.com/youzan/vant/pull/4636)
- Dialog: add open、close event [\#4633](https://github.com/youzan/vant/pull/4633)
- Dialog: add opened、closed event [\#4634](https://github.com/youzan/vant/pull/4634)
- NumberKeyboard: add extra-key slot [\#4644](https://github.com/youzan/vant/pull/4644)
- CheckboxGroup: add toggleAll method [\#4640](https://github.com/youzan/vant/pull/4640)

**Bug Fixes**

- fix AddressList input event triggered twice [\#4659](https://github.com/youzan/vant/pull/4659)
- fix Tabs incorrect padding when type is card [\#4658](https://github.com/youzan/vant/pull/4658)
- fix GoodsAction incorrect border radius [\#4653](https://github.com/youzan/vant/pull/4653)
- fix NumberKeyboard compatible with Vue 2.6 event bubble bug [\#4632](https://github.com/youzan/vant/pull/4632)

### [v2.2.5](https://github.com/youzan/vant/tree/v2.2.5)

`2019-09-28`

**Features**

- Picker: add columns-top slot [\#4607](https://github.com/youzan/vant/pull/4607)
- Picker: add columns-bottom slot [\#4607](https://github.com/youzan/vant/pull/4607)
- Overlay: add default slot [\#4571](https://github.com/youzan/vant/pull/4571)
- Overlay: add custom-style prop [\#4572](https://github.com/youzan/vant/pull/4572)
- Checkbox: add bind-group prop [\#4600](https://github.com/youzan/vant/pull/4600)
- DropdownItem: add get-container prop [\#4611](https://github.com/youzan/vant/pull/4611)
- Area: add columns-placeholder prop [\#4580](https://github.com/youzan/vant/pull/4580)
- AddressEdit: add area-columns-placeholder props [\#4584](https://github.com/youzan/vant/pull/4584)

**Bug Fixes**

- fix Overlay type definition missing [\#4601](https://github.com/youzan/vant/pull/4601)
- fix Swipe incorrect swipeTo animation [\#4570](https://github.com/youzan/vant/pull/4570)
- fix Uploader incorrect preview index when upload same images [\#4577](https://github.com/youzan/vant/pull/4577)

### [v2.2.4](https://github.com/youzan/vant/tree/v2.2.4) [Deprecated]

`2019-09-28` 🇨🇳

**Tips**

- There is a style loss issue in this version, please use version 2.2.5

### [v2.2.3](https://github.com/youzan/vant/tree/v2.2.3)

`2019-09-24`

**Features**

- Cell: improve accessibility [\#4519](https://github.com/youzan/vant/pull/4519)
- Popup: improve accessibility [\#4516](https://github.com/youzan/vant/pull/4516)
- Search: improve accessibility [\#4522](https://github.com/youzan/vant/pull/4522)
- Picker: improve accessibility [\#4521](https://github.com/youzan/vant/pull/4521)
- GridItem: improve accessbility [\#4517](https://github.com/youzan/vant/pull/4517)
- ActionSheet: improve accessibility [\#4525](https://github.com/youzan/vant/pull/4525)
- Sku: add sku item previewImgUrl [\#4562](https://github.com/youzan/vant/pull/4562)
- ActionSheet: enable round by default [\#4542](https://github.com/youzan/vant/pull/4542)
- RadioGroup: add icon-size prop [\#4529](https://github.com/youzan/vant/pull/4529)
- RadioGroup: add checked-color prop [\#4532](https://github.com/youzan/vant/pull/4532)
- CheckboxGroup: add icon-size prop [\#4530](https://github.com/youzan/vant/pull/4530)
- CheckboxGroup: add checked-color prop [\#4531](https://github.com/youzan/vant/pull/4531)
- ActionSheet: enable safe-area-inset-bottom by default [\#4524](https://github.com/youzan/vant/pull/4524)
- NumberKeyboard: enable safe-area-inset-bottom by default [\#4544](https://github.com/youzan/vant/pull/4544)

### [v2.2.2](https://github.com/youzan/vant/tree/v2.2.2)

`2019-09-19`

**Features**

- Dialog: improve word wrap [\#4506](https://github.com/youzan/vant/pull/4506)
- Search: add action-text prop [\#4501](https://github.com/youzan/vant/pull/4501)
- Popup: add close-icon-position prop [\#4507](https://github.com/youzan/vant/pull/4507)
- Uploader: add index param in events [\#4460](https://github.com/youzan/vant/pull/4460)
- GoodsActionButton: increase height [\#4461](https://github.com/youzan/vant/pull/4461)
- AddressList: add @address-list-item-radio-icon-color var [\#4481](https://github.com/youzan/vant/pull/4481)

**Bug Fixes**

- fix Field disabled color in safari [\#4508](https://github.com/youzan/vant/pull/4508)
- fix ImagePreview incorrect scale [\#4477](https://github.com/youzan/vant/pull/4477)
- fix DatetimePicker infinite loop when use formatted text is unnumeric [\#4485](https://github.com/youzan/vant/pull/4485)

### [v2.2.1](https://github.com/youzan/vant/tree/v2.2.1)

`2019-09-12`

**Features**

- Icon: add dot prop [\#4425](https://github.com/youzan/vant/pull/4425)
- Icon: add down、wap-home icon [\#4404](https://github.com/youzan/vant/pull/4404)
- Circle: update text style [\#4401](https://github.com/youzan/vant/pull/4401)
- GridItem: add dot prop [\#4426](https://github.com/youzan/vant/pull/4426)
- GridItem: add info prop [\#4424](https://github.com/youzan/vant/pull/4424)
- Progress: add stroke-width prop [\#4397](https://github.com/youzan/vant/pull/4397)
- Popup: add safe-area-inset-bottom prop [\#4419](https://github.com/youzan/vant/pull/4419)
- Tab: add to、url、replace prop [\#4422](https://github.com/youzan/vant/pull/4422)
- TreeSelect: add dot option [\#4433](https://github.com/youzan/vant/pull/4433)
- Stepper: add decimal-length prop [\#4443](https://github.com/youzan/vant/pull/4443)
- Sku: add stock-threshold prop [\#4444](https://github.com/youzan/vant/pull/4444)
- Sku: add safe-area-inset-bottom prop [\#4428](https://github.com/youzan/vant/pull/4428)
- Sku: update sku style [\#4437](https://github.com/youzan/vant/pull/4437)
- SidebarItem: add dot prop [\#4432](https://github.com/youzan/vant/pull/4432)

**Bug Fixes**

- fix Sku incorrect button position [\#4427](https://github.com/youzan/vant/pull/4427)
- fix Uploader should't emit click-preview when delete [\#4407](https://github.com/youzan/vant/pull/4407)
- fix Progress incorrect pivot position [\#4396](https://github.com/youzan/vant/pull/4396)

### [v2.2.0](https://github.com/youzan/vant/tree/v2.2.0)

`2019-09-06`

**Features**

- Style: update basic red color [\#4368](https://github.com/youzan/vant/pull/4368)
- Rate: add touchable prop [\#4361](https://github.com/youzan/vant/pull/4361)
- Rate: should be inline-block [\#4334](https://github.com/youzan/vant/pull/4334)
- Rate: optimize touchmove gesture [\#4336](https://github.com/youzan/vant/pull/4336)
- Popup: add closeable prop [\#4362](https://github.com/youzan/vant/pull/4362)
- Popup: add close-icon prop [\#4366](https://github.com/youzan/vant/pull/4366)
- Sidebar: remove border [\#4382](https://github.com/youzan/vant/pull/4382)
- SidebarItem add disabled prop [\#4325](https://github.com/youzan/vant/pull/4325)
- TreeSelect: add max prop [\#4323](https://github.com/youzan/vant/pull/4323)
- TreeSelect: support show info [\#4384](https://github.com/youzan/vant/pull/4384)
- Uploader: add close-preview event [\#4376](https://github.com/youzan/vant/pull/4376)
- ImagePreview: add image loading tip [\#4378](https://github.com/youzan/vant/pull/4378)

**Bug Fixes**

- fix Field should reset appearance in safari [\#4380](https://github.com/youzan/vant/pull/4380)
- fix Button should hide border when color is linear-gradient [\#4342](https://github.com/youzan/vant/pull/4342)
- fix Dialog should reset loading when closed [\#4352](https://github.com/youzan/vant/pull/4352)
- fix Slider should format initial value [\#4337](https://github.com/youzan/vant/pull/4337)
- fix Sidebar incorrect info position [\#4324](https://github.com/youzan/vant/pull/4324)
- fix DropdownItem missing default active color [\#4330](https://github.com/youzan/vant/pull/4330)
- fix NumberKeyboard incorrect button position in iphoneX [\#4304](https://github.com/youzan/vant/pull/4304)
- fix ImagePreview should reset scale after toggle [\#4319](https://github.com/youzan/vant/pull/4319)
- fix ImagePreview should emit change event when reset to start position [\#4320](https://github.com/youzan/vant/pull/4320)

### [v2.1.8](https://github.com/youzan/vant/tree/v2.1.8)

`2019-08-29`

**Features**

- Picker: add allow-html prop [\#4278](https://github.com/youzan/vant/pull/4278)
- PasswordInput: add focused prop [\#4279](https://github.com/youzan/vant/pull/4279)
- GoodsActionButton: add color prop [\#4255](https://github.com/youzan/vant/pull/4255)
- Button: color prop support linear-gradient [\#4252](https://github.com/youzan/vant/pull/4252)

**Bug Fixes**

- fix Circle stroke-width can't be greater than 60 [\#4256](https://github.com/youzan/vant/pull/4256)
- fix Picker should avoid click event when moving [\#4273](https://github.com/youzan/vant/pull/4273)
- fix Picker incorrect position when pause momentum [\#4277](https://github.com/youzan/vant/pull/4277)

### [v2.1.7](https://github.com/youzan/vant/tree/v2.1.7)

`2019-08-26`

**Bug Fixes**

- fix RadioGroup disabled prop not work [\#4242](https://github.com/youzan/vant/pull/4242)
- fix CheckboxGroup disabled prop not work [\#4242](https://github.com/youzan/vant/pull/4242)

### [v2.1.6](https://github.com/youzan/vant/tree/v2.1.6)

`2019-08-26`

**Features**

- Tag: add warning type [\#4232](https://github.com/youzan/vant/pull/4232)
- Image: add radius prop [\#4230](https://github.com/youzan/vant/pull/4230)
- Notify: add type prop [\#4237](https://github.com/youzan/vant/pull/4237)
- CellGroup: add title slot [\#4227](https://github.com/youzan/vant/pull/4227)
- Sku: initialSku can be set dynamically [\#4214](https://github.com/youzan/vant/pull/4214)
- Sku: can preview images of non-first level sku [\#4236](https://github.com/youzan/vant/pull/4236)
- Locale: add Spanish translation [\#4235](https://github.com/youzan/vant/pull/4235)

* fix Tabbar incorrect active style in route mode [\#4229](https://github.com/youzan/vant/pull/4229)
* fix NumberKeyboard incorrect sidebar position when has title [\#4228](https://github.com/youzan/vant/pull/4228)
* fix IndexBar the problem of rolling out parent boundaries when sticky bottom [\#4218](https://github.com/youzan/vant/pull/4218)

### [v2.1.5](https://github.com/youzan/vant/tree/v2.1.5)

`2019-08-23`

**Features**

- Toast: add closeOnClick option [\#4192](https://github.com/youzan/vant/pull/4192)
- Uploader: add image-fit prop [\#4189](https://github.com/youzan/vant/pull/4189)
- Uploader: add click-preview event [\#4206](https://github.com/youzan/vant/pull/4206)
- Uploader: add preview-full-image prop [\#4205](https://github.com/youzan/vant/pull/4205)
- DropdownMenu: add @dropdown-menu-title-active-text-color less var [\#4208](https://github.com/youzan/vant/pull/4208)

**Bug Fixes**

- fix IndexBar sticky bug [\#4184](https://github.com/youzan/vant/pull/4184)
- fix NumberKeyboard border color [\#4183](https://github.com/youzan/vant/pull/4183)
- fix Area can't select some oversea countries [\#4195](https://github.com/youzan/vant/pull/4195)

### [v2.1.4](https://github.com/youzan/vant/tree/v2.1.4)

`2019-08-21`

**Features**

- Col: add click event [\#4169](https://github.com/youzan/vant/pull/4169)
- Row: add click event [\#4170](https://github.com/youzan/vant/pull/4170)
- Area: add is-oversea-code prop [\#4163](https://github.com/youzan/vant/pull/4163)
- Circle: support gradient color [\#4157](https://github.com/youzan/vant/pull/4157)
- Circle: support number type of size prop [\#4160](https://github.com/youzan/vant/pull/4160)
- Tabbar: support match route by to.name [\#4148](https://github.com/youzan/vant/pull/4148)
- Sku: should close image preview when popstate [\#4152](https://github.com/youzan/vant/pull/4152)
- Uploader: should close image preview when popstate [\#4151](https://github.com/youzan/vant/pull/4151)
- Uploader: support more image types [\#4140](https://github.com/youzan/vant/pull/4140)
- TreeSelect: support multiple select [\#4130](https://github.com/youzan/vant/pull/4130)
- TreeSelect: active-id support sync modifier [\#4133](https://github.com/youzan/vant/pull/4133)
- TreeSelect: main-active-index support sync modifier [\#4132](https://github.com/youzan/vant/pull/4132)

**Bug Fixes**

- fix Sku unextracted i18n message [\#4172](https://github.com/youzan/vant/pull/4172)
- fix Tabbar avoid navigation duplicated [\#4147](https://github.com/youzan/vant/pull/4147)
- fix Field button width shrinked in firefox [\#4144](https://github.com/youzan/vant/pull/4144)
- fix Picker prevent style be override by base.css [\#4136](https://github.com/youzan/vant/pull/4136)

### [v2.1.3](https://github.com/youzan/vant/tree/v2.1.3)

`2019-08-15`

**Features**

- Sku: support i18n [\#4123](https://github.com/youzan/vant/pull/4123)
- Button: add color prop [\#4124](https://github.com/youzan/vant/pull/4124)
- Collapse: log tips for incorrect value [\#4122](https://github.com/youzan/vant/pull/4122)
- Uploader: add before-delete prop [\#4118](https://github.com/youzan/vant/pull/4118)
- TreeSelect: add content slot [\#4105](https://github.com/youzan/vant/pull/4105)
- TreeSelect: support string type of height prop [\#4107](https://github.com/youzan/vant/pull/4107)
- NumberKeyboard: improve click experience [\#4116](https://github.com/youzan/vant/pull/4116)

**Bug Fixes**

- fix DropdownMenu incorrect style when inside NavBar [\#4098](https://github.com/youzan/vant/pull/4098)
- fix Tab incorrect title position when insert tab pane [\#4091](https://github.com/youzan/vant/pull/4091)
- fix Icon service-o icon incomplete [\#4088](https://github.com/youzan/vant/pull/4088)
- fix Icon gift-o、refund-o icon incomplete [\#4089](https://github.com/youzan/vant/pull/4089)
- fix Slider should not emit change event when value not changed [\#4087](https://github.com/youzan/vant/pull/4087)

### [v2.1.2](https://github.com/youzan/vant/tree/v2.1.2)

`2019-08-10`

**Features**

- ActionSheet: add color option [\#4073](https://github.com/youzan/vant/pull/4073)
- AddressEdit: add postal-validator prop [\#4067](https://github.com/youzan/vant/pull/4067)
- Stepper: add show-plus、show-minus prop [\#4056](https://github.com/youzan/vant/pull/4056)
- Divider: add separator role to improve accessibility [\#4069](https://github.com/youzan/vant/pull/4069)
- DropdownMenu: add more less vars [\#4071](https://github.com/youzan/vant/pull/4071)
- Uploader: support isImage flag [\#4072](https://github.com/youzan/vant/pull/4072)
- Field: increase clickable area of icon [\#4058](https://github.com/youzan/vant/pull/4058)
- Picker: stop propagation when touchmove in vertical direction [\#4043](https://github.com/youzan/vant/pull/4043)
- Icon: add warning、good-job、good-job-o icon [\#4038](https://github.com/youzan/vant/pull/4038)
- Icon: add smile、music、thumb-circle、phone-circle icon [\#4048](https://github.com/youzan/vant/pull/4048)
- List: unify text font-size [\#4077](https://github.com/youzan/vant/pull/4077)
- Image: img inherit round border [\#4032](https://github.com/youzan/vant/pull/4032)
- adjust globalObject to support module script [\#4080](https://github.com/youzan/vant/pull/4080)

**Bug Fixes**

- fix Sticky incorrect position when inside scroll container [\#4055](https://github.com/youzan/vant/pull/4055)

### [v2.1.1](https://github.com/youzan/vant/tree/v2.1.1)

`2019-08-02`

**Bug Fixes**

- fix DatetimePicker event not work [\#4027](https://github.com/youzan/vant/pull/4027)
- fix Popup ensure z-index setting order [\#4026](https://github.com/youzan/vant/pull/4026)

### [v2.1.0](https://github.com/youzan/vant/tree/v2.1.0) [deprecated]

`2019-08-01`

**Features**

- GoodsAction: update style [\#3967](https://github.com/youzan/vant/pull/3967)
- Sku: update style [\#3875](https://github.com/youzan/vant/pull/3875) [\#3922](https://github.com/youzan/vant/pull/3922)
- Sku: add price-tag prop [\#3875](https://github.com/youzan/vant/pull/3875)
- Sku: add hide-selected-text prop [\#3875](https://github.com/youzan/vant/pull/3875)
- Sku: add sku-header-origin-price slot [\#3958](https://github.com/youzan/vant/pull/3958)
- Dialog: add title slot [\#3985](https://github.com/youzan/vant/pull/3985)
- Dialog: centered in screen [\#3905](https://github.com/youzan/vant/pull/3905)
- Uploader: add less vars [\#3907](https://github.com/youzan/vant/pull/3907)
- ActionSheet: add less vars [\#3908](https://github.com/youzan/vant/pull/3908)
- AddressList: add click-item event [\#3942](https://github.com/youzan/vant/pull/3942)
- CouponList: add empty-image prop [\#3941](https://github.com/youzan/vant/pull/3941)
- SwipeCell: add stop-propagation prop [\#3952](https://github.com/youzan/vant/pull/3952)
- ImagePreview: add swipe-duration prop [\#3963](https://github.com/youzan/vant/pull/3963)

**Bug Fixes**

- fix Tabs incorrect line position in some cases [\#3961](https://github.com/youzan/vant/pull/3961)
- fix ImagePreview should reset onClose & onChange option [\#3960](https://github.com/youzan/vant/pull/3960)
- fix DatetimePicker incorrect confirm param when use formatter [\#3969](https://github.com/youzan/vant/pull/3969)
- fix Tabs fix scroll position deviation when sticky [\#3949](https://github.com/youzan/vant/pull/3949)
- fix IndexBar should update when index-list updated [\#3943](https://github.com/youzan/vant/pull/3943)
- fix AddressList can't select item when click empty area [\#3909](https://github.com/youzan/vant/pull/3909)
- fix ImagePreview Image beyond the screen height cover index [\#4002](https://github.com/youzan/vant/pull/4002)
- fix Radio: can't select when click gap [\#4007](https://github.com/youzan/vant/pull/4007)
- fix SwipeCell should not prevent touchmove when opened [\#3982](https://github.com/youzan/vant/pull/3982)

### [v2.0.9](https://github.com/youzan/vant/tree/v2.0.9)

`2019-07-19`

**Features**

- add Sticky component [\#3888](https://github.com/youzan/vant/pull/3888)
- Grid: optimize word break [\#3897](https://github.com/youzan/vant/pull/3897)
- Image: add round prop [\#3838](https://github.com/youzan/vant/pull/3838)
- Image: add show-error prop [\#3896](https://github.com/youzan/vant/pull/3896)
- Image: add show-loading prop [\#3893](https://github.com/youzan/vant/pull/3893)
- Toast: add iconPrefix option [\#3872](https://github.com/youzan/vant/pull/3872)
- Toast: optimize image icon display [\#3895](https://github.com/youzan/vant/pull/3895)
- TreeSelect: add click-nav、click-item event [\#3892](https://github.com/youzan/vant/pull/3892)
- ActionSheet: add round prop [\#3874](https://github.com/youzan/vant/pull/3874)
- Uploader: support preview network image [\#3899](https://github.com/youzan/vant/pull/3899)

**Bug Fixes**

- fix Dialog closeOnPopstate can't be disabled [\#3868](https://github.com/youzan/vant/pull/3868)
- fix DropdownMenu cann't use toggle to open item [\#3876](https://github.com/youzan/vant/pull/3876)
- fix SwipeCell should stop event propagation [\#3898](https://github.com/youzan/vant/pull/3898)

### [v2.0.8](https://github.com/youzan/vant/tree/v2.0.8)

`2019-07-16`

**Features**

- Sku: support custom placeholder [\#3864](https://github.com/youzan/vant/pull/3864)
- DropdownMenu: add icon option [\#3855](https://github.com/youzan/vant/pull/3855)
- DropdownMenu: optimize title ellipsis [\#3847](https://github.com/youzan/vant/pull/3847)
- ImagePreview: support double click zoom [\#3839](https://github.com/youzan/vant/pull/3839)

**Bug Fixes**

- fix Tab: click event param missing [\#3866](https://github.com/youzan/vant/pull/3866)
- fix List not work when body is the scrolling container [\#3844](https://github.com/youzan/vant/pull/3844)
- fix IndexBar incorrect active anchor in some cases [\#3832](https://github.com/youzan/vant/pull/3832)

### [v2.0.7](https://github.com/youzan/vant/tree/v2.0.7)

`2019-07-11`

**Features**

- add CountDown component [\#3805](https://github.com/youzan/vant/pull/3805)
- Popup: add round prop [\#3781](https://github.com/youzan/vant/pull/3781)
- PullRefresh: add distance of slotProps [\#3829](https://github.com/youzan/vant/pull/3829)
- DropdownMenu: add close-on-click-outside prop [\#3824](https://github.com/youzan/vant/pull/3824)
- Swipe: add immediate option of swipeTo method [\#3821](https://github.com/youzan/vant/pull/3821)
- Slider: support number type of bar-height prop [\#3794](https://github.com/youzan/vant/pull/3794)
- IndexBar: add sticky-offset-top prop [\#3791](https://github.com/youzan/vant/pull/3791)

**Bug Fixes**

- fix Popup overlay may cover popup in some cases [\#3831](https://github.com/youzan/vant/pull/3831)
- fix Stepper add hack for iOS 12 page scroll [\#3804](https://github.com/youzan/vant/pull/3804)
- fix Dialog missing closeOnPopstate in type definition [\#3789](https://github.com/youzan/vant/pull/3789)
- fix DatetimePicker confirm event param incorrect when use filter [\#3816](https://github.com/youzan/vant/pull/3816)

### [v2.0.6](https://github.com/youzan/vant/tree/v2.0.6)

`2019-07-05`

**Features**

- add Divider component [\#3755](https://github.com/youzan/vant/pull/3755)
- Tab: add name prop [\#3762](https://github.com/youzan/vant/pull/3762)
- Sku: add add-cart-text prop [\#3725](https://github.com/youzan/vant/pull/3725)

**Bug Fixes**

- fix Swipe fix blank area when use width prop [\#3751](https://github.com/youzan/vant/pull/3751)
- fix Grid gutter can be string type [\#3741](https://github.com/youzan/vant/pull/3741)
- fix Collapse use double raf to ensure animation can start [\#3723](https://github.com/youzan/vant/pull/3723)
- fix PullRefresh ensure value change can be watched [\#3719](https://github.com/youzan/vant/pull/3719)

### [v2.0.5](https://github.com/youzan/vant/tree/v2.0.5)

`2019-07-02`

**Features**

- Stepper: add button-size prop [\#3714](https://github.com/youzan/vant/pull/3714)
- Stepper: support long press gesture [\#3711](https://github.com/youzan/vant/pull/3711)
- Dialog: add close-on-popstate prop [\#3709](https://github.com/youzan/vant/pull/3709)

**Bug Fixes**

- fix postcss config overwritten issue

### [v2.0.4](https://github.com/youzan/vant/tree/v2.0.4)

`2019-07-01`

**Features**

- add Grid、GridItem component [\#3669](https://github.com/youzan/vant/pull/3669) [\#3682](https://github.com/youzan/vant/pull/3682) [\#3683](https://github.com/youzan/vant/pull/3683)
- Field: add arrow-direction prop [\#3679](https://github.com/youzan/vant/pull/3679)
- Sidebar: add to、replace prop [\#3696](https://github.com/youzan/vant/pull/3696)
- Sidebar: support use v-model to bind active key [\#3698](https://github.com/youzan/vant/pull/3698)
- IndexBar: add class for active index [\#3692](https://github.com/youzan/vant/pull/3692)
- Uploader: support number type of name prop [\#3681](https://github.com/youzan/vant/pull/3681)
- SwipeCell: add name prop [\#3680](https://github.com/youzan/vant/pull/3680)
- AddressEdit: add detail-maxlength prop [\#3707](https://github.com/youzan/vant/pull/3707)
- GoodsActionIcon: add icon slot [\#3705](https://github.com/youzan/vant/pull/3705)

**Bug Fixes**

- fix Collapse flick in safari [\#3686](https://github.com/youzan/vant/pull/3686)
- fix Picker compatibility issues on lower versions of Android [\#3688](https://github.com/youzan/vant/pull/3688)

### [v2.0.3](https://github.com/youzan/vant/tree/v2.0.3)

`2019-06-27`

**Features**

- ActionSheet: add duration prop [\#3608](https://github.com/youzan/vant/pull/3608)
- ActionSheet: add open、opened events [\#3639](https://github.com/youzan/vant/pull/3639)
- ActionSheet: add close、closed events [\#3639](https://github.com/youzan/vant/pull/3639)
- Icon: add fit mode for image content [\#3667](https://github.com/youzan/vant/pull/3667)
- Icon: update checked、comment、comment-o icon [\#3615](https://github.com/youzan/vant/pull/3615)
- ImagePreview: add onChange option [\#3630](https://github.com/youzan/vant/pull/3630)
- Popup: optimize overlay animation duration [\#3610](https://github.com/youzan/vant/pull/3610)
- Uploader: support preview non-image file [\#3604](https://github.com/youzan/vant/pull/3604)
- Uploader: support click to preview image [\#3603](https://github.com/youzan/vant/pull/3603)
- Stepper: add less vars [\#3599](https://github.com/youzan/vant/pull/3599)

**Bug Fixes**

- fix ImagePreview should lock scroll [\#3645](https://github.com/youzan/vant/pull/3645)
- fix Tab may cause error when render title slot [\#3631](https://github.com/youzan/vant/pull/3631)
- fix vetur auto-complete [\#3617](https://github.com/youzan/vant/pull/3617)

### [v2.0.2](https://github.com/youzan/vant/tree/v2.0.2)

`2019-06-21`

**Features**

- Card: add click-thumb event [\#3586](https://github.com/youzan/vant/pull/3586)
- CouponList: add enabled-title、disabled-title props [\#3578](https://github.com/youzan/vant/pull/3578)
- Slider: min/max can set any value [\#3566](https://github.com/youzan/vant/pull/3566)
- Uploader: before-read prop support promise mode [\#3572](https://github.com/youzan/vant/pull/3572)
- Picker: update acceleration rate [\#3556](https://github.com/youzan/vant/pull/3556)
- NumberKeyboard: support v-model [\#3531](https://github.com/youzan/vant/pull/3531)
- NumberKeyboard: add maxlength prop [\#3532](https://github.com/youzan/vant/pull/3532)
- add sideEffects to enable tree shaking [\#3530](https://github.com/youzan/vant/pull/3530)

**Bug Fixes**

- fix Button default margin in safari [\#3577](https://github.com/youzan/vant/pull/3577)
- fix Sku can not preview image when only have goods picture [\#3569](https://github.com/youzan/vant/pull/3569)
- fix Toast missing type definition of clear method [\#3542](https://github.com/youzan/vant/pull/3542)

### [v2.0.1](https://github.com/youzan/vant/tree/v2.0.1)

`2019-06-15`

**Features**

- Tab: support string type of line-width & line-height [\#3514](https://github.com/youzan/vant/pull/3514)
- Icon: use image component to display image [\#3515](https://github.com/youzan/vant/pull/3515)
- Toast: add icon prop [\#3485](https://github.com/youzan/vant/pull/3485)
- DropdownMenu: add direction prop [\#3490](https://github.com/youzan/vant/pull/3490)
- NumberKeyboard: add delete slot [\#3499](https://github.com/youzan/vant/pull/3499)

**Bug Fixes**

- fix Image missing type definition [\#3520](https://github.com/youzan/vant/pull/3520)
- fix SwitchCell incorrect loading position [\#3501](https://github.com/youzan/vant/pull/3501)
- fix Toast missing fade-out transition in multiple mode [\#3504](https://github.com/youzan/vant/pull/3504)
- fix Locale can not modify functional message [\#3498](https://github.com/youzan/vant/pull/3498)

### [v2.0.0](https://github.com/youzan/vant/tree/v2.0.0)

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

![](https://img.yzcdn.cn/public_files/2019/06/10/141ac9b67c06be0811c86c4c1c571c9d.png)

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

- Remove Waterfall component，please use `List` instead，or use [@vant/waterfall](https://github.com/youzan/vant/tree/dev/packages/vant-waterfall)。

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
