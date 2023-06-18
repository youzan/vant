# Changelog

### Tips

The current document is the changelog of Vant 4, other versions:

- [Vant 2 Changelog](https://vant-ui.github.io/vant/v2/#/en-US/changelog)
- [Vant 3 Changelog](https://vant-ui.github.io/vant/v3/#/en-US/changelog)

### Intro

Vant follows [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/).

**Release Schedule**

- Patch version：released weekly, including features and bug fixes.
- Minor version：released every one to two months, including backwards compatible features.
- Major version：including breaking changes and new features.

## Details

### [v4.5.0](https://github.com/vant-ui/vant/compare/v4.4.1...v4.5.0)

`2023-06-11`

**New Component**

- add new FloatingPanel component, contributed by [@zhousg](https://github.com/zhousg) ❤️ [#11832](https://github.com/vant-ui/vant/issues/11832)

**Feature**

- AddressList: add new right-icon props [#11959](https://github.com/vant-ui/vant/issues/11959)
- DropdownMenu: add close method [#11921](https://github.com/vant-ui/vant/issues/11921)
- Slider: add dragging param for button slot [#11946](https://github.com/vant-ui/vant/issues/11946)
- TimePicker: add min-time and max-time prop [#11887](https://github.com/vant-ui/vant/issues/11887)
- TimePicker: add values param for filter method [#11916](https://github.com/vant-ui/vant/issues/11916)
- CI: add issue helper [#11963](https://github.com/vant-ui/vant/issues/11963)

**Bug Fixes**

- BackTop: should hide when deactivated [#11938](https://github.com/vant-ui/vant/issues/11938)

### [v4.4.1](https://github.com/vant-ui/vant/compare/v4.4.0...v4.4.1)

`2023-05-28`

**Feature**

- Popover: add actions-direction prop [#11888](https://github.com/vant-ui/vant/issues/11888)

**Bug Fixes**

- ImagePreview: stop animation during initialization [#11897](https://github.com/vant-ui/vant/issues/11897)
- Popup: opened event is emitted twice when duration is 0 [#11902](https://github.com/vant-ui/vant/issues/11902)
- Slider: should update startValue when the slider is clicked [#11904](https://github.com/vant-ui/vant/issues/11904)
- Tab: maximum recursive updates exceeded in Tabs [#11898](https://github.com/vant-ui/vant/issues/11898)

### [v4.4.0](https://github.com/vant-ui/vant/compare/v4.3.2...v4.4.0)

`2023-05-21`

**New Component**

- add new Barrage component, contributed by [@zhousg](https://github.com/zhousg) ❤️ [#11760](https://github.com/vant-ui/vant/issues/11760)

**Feature**

- Cascader: scroll the selected option into view when switching tabs [#11869](https://github.com/vant-ui/vant/issues/11869)
- Divider: add vertical prop [#11883](https://github.com/vant-ui/vant/issues/11883)
- Document: sync mobile position on anchor click [#11879](https://github.com/vant-ui/vant/issues/11879)
- ImagePreview: optimize the preview effect of long images [#11857](https://github.com/vant-ui/vant/issues/11857)
- Signature: improve signature clarity by devicePixelRatio [#11835](https://github.com/vant-ui/vant/issues/11835)
- Uploader: add reupload prop [#11854](https://github.com/vant-ui/vant/issues/11854)

**Bug Fixes**

- AddressEdit: should hide border of the last cell [#11872](https://github.com/vant-ui/vant/issues/11872)
- Area: areaProps omit allow-html show-toolbar [#11871](https://github.com/vant-ui/vant/issues/11871)
- BackTop: use the closest parent scroll element as target [#11858](https://github.com/vant-ui/vant/issues/11858)
- ContactList: increase right icon size and optimize styles [#11873](https://github.com/vant-ui/vant/issues/11873)
- DatePicker: should display correctly when modelValue is updated from external [#11839](https://github.com/vant-ui/vant/issues/11839)
- Dialog: fix the rounded corners of shadow when button is clicked [#11863](https://github.com/vant-ui/vant/issues/11863)

### [v4.3.2](https://github.com/vant-ui/vant/compare/v4.3.1...v4.3.2)

`2023-05-14`

**Feature**

- ImagePreview: use the touched point as the center of zooming [#11848](https://github.com/vant-ui/vant/issues/11848)
- PickerGroup: the tab of PickerGroup supports controlled mode [#11771](https://github.com/vant-ui/vant/issues/11771)
- Checkbox: disabled unchecked options when the limit is exceeded [#11814](https://github.com/vant-ui/vant/issues/11814)

**Bug Fixes**

- Filed: onclick label execute twice [#11838](https://github.com/vant-ui/vant/issues/11838)
- Steps: fix the style that occurs when there is only one step [#11822](https://github.com/vant-ui/vant/issues/11822)
- SubmitBar: Unused CSS variables [#11845](https://github.com/vant-ui/vant/issues/11845)
- Tab: should cancel raf before the next scroll [#11819](https://github.com/vant-ui/vant/issues/11819)

### [v4.3.1](https://github.com/vant-ui/vant/compare/v4.3.0...v4.3.1)

`2023-05-04`

**Bug Fixes**

- Fix failed to install Vant v4.3.0 [#11815](https://github.com/vant-ui/vant/issues/11815)

### [v4.3.0](https://github.com/vant-ui/vant/compare/v4.2.1...v4.3.0)

`2023-05-03`

**New Component**

- add new Signature component, contributed by [@LIjiAngChen8](https://github.com/LIjiAngChen8) ❤️ [#11733](https://github.com/vant-ui/vant/issues/11733)

**Feature**

- Field: increase default icon size to 18px [#11799](https://github.com/vant-ui/vant/issues/11799)

**Bug Fixes**

- Field: disabled cursor should be not-allowed [#11800](https://github.com/vant-ui/vant/issues/11800)
- Image: failed to display loading when using lazy-load [#11809](https://github.com/vant-ui/vant/issues/11809)

### [v4.2.1](https://github.com/vant-ui/vant/compare/v4.2.0...v4.2.1)

`2023-04-30`

**Feature**

- Pagination: add show-prev-button, show-next-button props [#11780](https://github.com/vant-ui/vant/issues/11780)
- Picker: add scroll-into event [#11757](https://github.com/vant-ui/vant/issues/11757)

**Bug Fixes**

- Pagination: don't show click feedback when button is disabled [#11779](https://github.com/vant-ui/vant/issues/11779)
- Sticky: resize or orientationchange wrapper no reset width and height [#11753](https://github.com/vant-ui/vant/issues/11753)
- Tabs: re-render when line-width or line-height changed [#11776](https://github.com/vant-ui/vant/issues/11776)
- Tabs: should scroll active tab into view after resized [#11777](https://github.com/vant-ui/vant/issues/11777)
- Watermark: add xlink namespace and fix blob MIME type [#11762](https://github.com/vant-ui/vant/issues/11762)

### [v4.2.0](https://github.com/vant-ui/vant/compare/v4.1.2...v4.2.0)

`2023-04-16`

**New Component**

- add new Watermark component, contributed by [@HuberTRoy](https://github.com/HuberTRoy) ❤️ [#11721](https://github.com/vant-ui/vant/issues/11721)

**Feature**

- ShareSheet: allow custom icon [#11709](https://github.com/vant-ui/vant/issues/11709)
- TextEllipsis: add dots prop [#11745](https://github.com/vant-ui/vant/issues/11745)

**Bug Fixes**

- Swipe: should resize after props.width and props.height changed [#11747](https://github.com/vant-ui/vant/issues/11747)

### [v4.1.2](https://github.com/vant-ui/vant/compare/v4.1.1...v4.1.2)

`2023-03-26`

**Feature**

- Locale: add Khmer translations [#11701](https://github.com/vant-ui/vant/issues/11701)

**Bug Fixes**

- Field: label-align top works well with label-width [#11684](https://github.com/vant-ui/vant/issues/11684)
- Field: should emit blur event when readonly [#11699](https://github.com/vant-ui/vant/issues/11699)
- ImagePreview: long vertical images sliding up and down [#11702](https://github.com/vant-ui/vant/issues/11702)

### [v4.1.1](https://github.com/vant-ui/vant/compare/v4.1.0...v4.1.1)

`2023-03-19`

**Feature**

- Uploader: support avif image format [#11655](https://github.com/vant-ui/vant/issues/11655)

**Bug Fixes**

- @vant/use: add vue as peer dependencies [#11662](https://github.com/vant-ui/vant/issues/11662)
- DatePicker: fix display back wrong of date-picker [#11656](https://github.com/vant-ui/vant/issues/11656)
- Field: fix `FieldRuleFormatter` typo [#11674](https://github.com/vant-ui/vant/issues/11674)
- TextEllipsis: fix that numbers and letters cannot display ellipses [#11669](https://github.com/vant-ui/vant/issues/11669)

### [v4.1.0](https://github.com/vant-ui/vant/compare/v4.0.11...v4.1.0)

`2023-03-05`

**New Component**

- add new TextEllipsis component, contributed by [@wjw-gavin](https://github.com/wjw-gavin) ❤️ [#11593](https://github.com/vant-ui/vant/issues/11593)

**Feature**

- Swipe: add index param to drag-start/drag-end event [#11632](https://github.com/vant-ui/vant/issues/11632)
- TreeSelect: add nav-text slot [#11602](https://github.com/vant-ui/vant/issues/11602) [#11641](https://github.com/vant-ui/vant/issues/11641)

**Bug Fixes**

- DropdownMenu: fix dropdown-item position when expanded by default [#11640](https://github.com/vant-ui/vant/issues/11640)
- Field: fix label-align top not work when set label-width [#11611](https://github.com/vant-ui/vant/issues/11611)
- Locale: improve Ukrainian translation [#11629](https://github.com/vant-ui/vant/issues/11629)

### [v4.0.11](https://github.com/vant-ui/vant/compare/v4.0.10...v4.0.11)

`2023-02-20`

**Feature**

- Add new [vant-nuxt](https://github.com/vant-ui/vant-nuxt) module for Nuxt [#11588](https://github.com/vant-ui/vant/issues/11588)
- BackTop: support css variable and prop of z-index [#11582](https://github.com/vant-ui/vant/issues/11582)
- Picker: expose option index to option slot [#11594](https://github.com/vant-ui/vant/issues/11594)
- @vant/use: support cleanup useEventListener [#11540](https://github.com/vant-ui/vant/issues/11540)

**Bug Fixes**

- PickerGroup: confirm event missing params [#11566](https://github.com/vant-ui/vant/issues/11566)
- PickerGroup: fix style of tab-line caused by v-show [#11547](https://github.com/vant-ui/vant/issues/11547)
- PickerGroup: fix slots not work [#11564](https://github.com/vant-ui/vant/issues/11564)
- Popover: fix the arrow position of `*-start/end` placements [#11584](https://github.com/vant-ui/vant/issues/11584)
- Popover: should update location after transition [#11568](https://github.com/vant-ui/vant/issues/11568)
- Space: Text is not defined in SSR [#11549](https://github.com/vant-ui/vant/issues/11549)

### [v4.0.10](https://github.com/vant-ui/vant/compare/v4.0.9...v4.0.10)

`2023-02-02`

**Bug Fixes**

- DatePicker: fix the value is not updated in time of change event [#11529](https://github.com/vant-ui/vant/issues/11529)
- Slider: fix button does not work properly in two-thumb mode [#11526](https://github.com/vant-ui/vant/issues/11526) [#11534](https://github.com/vant-ui/vant/issues/11534)

### [v4.0.9](https://github.com/vant-ui/vant/compare/v4.0.8...v4.0.9)

`2023-01-26`

**Feature**

- BackTop: add immediate prop [#11515](https://github.com/vant-ui/vant/issues/11515)
- Calendar: add month-title slot [#11500](https://github.com/vant-ui/vant/issues/11500)
- Cascader: add useCascaderAreaData method [#11518](https://github.com/vant-ui/vant/issues/11518)
- ImagePreview: allow swipe when image is moved to edge [#11505](https://github.com/vant-ui/vant/issues/11505)
- Locale: add Esperanto translations [#11520](https://github.com/vant-ui/vant/issues/11520)
- Locale: add useCurrentLang method [#11517](https://github.com/vant-ui/vant/issues/11517)
- Swipe: add drag-start, drag-end event [#11502](https://github.com/vant-ui/vant/issues/11502)

**Bug Fixes**

- ImagePreview: disable zoom when swiping [#11504](https://github.com/vant-ui/vant/issues/11504)
- Locale: fix Italian general revision [#11519](https://github.com/vant-ui/vant/issues/11519)
- Swipe: avoid resetting position on multi-finger touch [#11503](https://github.com/vant-ui/vant/issues/11503)

### [v4.0.8](https://github.com/vant-ui/vant/compare/v4.0.7...v4.0.8)

`2023-01-15`

**Feature**

- PickerGroup: add next-step-text prop [#11487](https://github.com/vant-ui/vant/issues/11487)

**Bug Fixes**

- Picker: change confirm button color to primary color [#11479](https://github.com/vant-ui/vant/issues/11479)
- NumberKeyboard: change confirm button color to primary color [#11479](https://github.com/vant-ui/vant/issues/11479)
- Icons: add woff format to compat some special webview [#11485](https://github.com/vant-ui/vant/issues/11485)
- Picker: ensure title align in center [#11489](https://github.com/vant-ui/vant/issues/11489)
- Skeleton: fix can not register skeleton image component [#11470](https://github.com/vant-ui/vant/issues/11470) [#11469](https://github.com/vant-ui/vant/issues/11469)
- Tabs: incorrect insert position in some cases [#11462](https://github.com/vant-ui/vant/issues/11462)

### [v4.0.7](https://github.com/vant-ui/vant/compare/v4.0.6...v4.0.7)

`2023-01-02`

**Bug Fixes**

- Icons: fix delete / delete-o icon [#11441](https://github.com/vant-ui/vant/issues/11441)
- Icons: no longer support woff/ttf format [#11442](https://github.com/vant-ui/vant/issues/11442)
- ImagePreview：fix teleport prop not work [#11429](https://github.com/vant-ui/vant/issues/11429)
- Locale: fix typo of "Calendar" in ru-RU [#11425](https://github.com/vant-ui/vant/issues/11425)
- Swipe: failed to render inside keep-alive [#11437](https://github.com/vant-ui/vant/issues/11437)

### [v4.0.6](https://github.com/vant-ui/vant/compare/v4.0.5...v4.0.6)

`2022-12-26`

**Bug Fixes**

- Fix missing declaration files caused by upgrading vite v4 [#11423](https://github.com/vant-ui/vant/issues/11423)

### [v4.0.5](https://github.com/vant-ui/vant/compare/v4.0.4...v4.0.5)

`2022-12-25`

**Feature**

- Locale: add Dutch lang [#11419](https://github.com/vant-ui/vant/issues/11419)
- Locale: add Mongolian lang [#11418](https://github.com/vant-ui/vant/issues/11418)

**Bug Fixes**

- Badge: fix badge offset of different position [#11400](https://github.com/vant-ui/vant/issues/11400)
- Form: filter no name field's value [#11410](https://github.com/vant-ui/vant/issues/11410)
- Picker: picker loading color in dark theme [#11405](https://github.com/vant-ui/vant/issues/11405)

### [v4.0.4](https://github.com/vant-ui/vant/compare/v4.0.3...v4.0.4)

`2022-12-23`

**Bug Fixes**

- Field: incorrect cursor position when value length exceeds maxlength or when formatter is used [#11360](https://github.com/vant-ui/vant/issues/11360)
- Image: load event missing params [#11406](https://github.com/vant-ui/vant/issues/11406)

### [v4.0.3](https://github.com/vant-ui/vant/compare/v4.0.2...v4.0.3)

`2022-12-13`

**Bug Fixes**

- Field: failed to dynamically set empty label [#11373](https://github.com/vant-ui/vant/issues/11373)
- ImagePreview: fix loading when previewing images [#11376](https://github.com/vant-ui/vant/issues/11376)

### [v4.0.2](https://github.com/vant-ui/vant/compare/v4.0.1...v4.0.2)

`2022-12-03`

**Bug Fixes**

- Field: incorrect cursor position when using formatter [#11348](https://github.com/vant-ui/vant/issues/11348)
- Image: load event not triggered in nuxt3 [128972](https://github.com/vant-ui/vant/commit/128972a75329d4b14028d00cd23dac66038e2d4c)
- NavBar: update placeholder height when window resized [#11351](https://github.com/vant-ui/vant/issues/11351)

### [v4.0.1](https://github.com/vant-ui/vant/compare/v4.0.0...v4.0.1)

`2022-12-01`

**Feature**

- Picker: add selectedIndexes to the confirm event [#11329](https://github.com/vant-ui/vant/issues/11329)

**Bug Fixes**

- Field: set selection range only when focused [#11333](https://github.com/vant-ui/vant/issues/11333)

### [v4.0.0](https://github.com/vant-ui/vant/compare/v4.0.0-rc.9...v4.0.0)

`2022-11-26`

**Feature**

- List: add disabled prop [#11307](https://github.com/vant-ui/vant/issues/11307)
- BackTop: allow dynamically set target prop [#11311](https://github.com/vant-ui/vant/issues/11311)
- BackTop: allow using css var to custom position [#11312](https://github.com/vant-ui/vant/issues/11312)
- BackTop: rename visibility-height prop to offset [#11309](https://github.com/vant-ui/vant/issues/11309)

**Bug Fixes**

- Field: keep selection position after updating value [#11308](https://github.com/vant-ui/vant/issues/11308)

### [v4.0.0-rc.9](https://github.com/vant-ui/vant/compare/v4.0.0-rc.8...v4.0.0-rc.9)

`2022-11-24`

**Bug Fixes**

- Cell: arrow-direction assignment right is invalid [#11279](https://github.com/vant-ui/vant/issues/11279)
- Style: body normalize not work [#11287](https://github.com/vant-ui/vant/issues/11287)

### [v4.0.0-rc.8](https://github.com/vant-ui/vant/compare/v4.0.0-rc.7...v4.0.0-rc.8)

`2022-11-20`

**Feature**

- add new BackTop component, note that the API is not stable yet, we may change the API before 4.0 release. [#11236](https://github.com/vant-ui/vant/issues/11236)

**Bug Fixes**

- DropdownItem: should inherit attrs when using teleport [#11273](https://github.com/vant-ui/vant/issues/11273)
- List: incorrect initial loading value [#11275](https://github.com/vant-ui/vant/issues/11275)
- NumberKeyboard: should inherit attrs when using teleport [#11274](https://github.com/vant-ui/vant/issues/11274)

### [v4.0.0-rc.7](https://github.com/vant-ui/vant/compare/v4.0.0-rc.6...v4.0.0-rc.7)

`2022-11-13`

**New Component**

- Add new SkeletonAvatar、SkeletonTitle、SkeletonImage、SkeletonParagraph components [#11173](https://github.com/vant-ui/vant/issues/11173)

**Feature**

- ImagePreview: add long-press event [#11252](https://github.com/vant-ui/vant/issues/11252)
- Popover: support uncontrolled mode [#11244](https://github.com/vant-ui/vant/issues/11244)

**Bug Fixes**

- ActionSheet: fix that close is invalid without title [#11213](https://github.com/vant-ui/vant/issues/11213)
- DatePicker: only throw error in development [#11248](https://github.com/vant-ui/vant/issues/11248)
- Lazyload: lazy-image h is not a function [#11229](https://github.com/vant-ui/vant/issues/11229)
- Picker: correct v-model when emit confirm event [#11194](https://github.com/vant-ui/vant/issues/11194)
- Picker: empty column will cause error [#11249](https://github.com/vant-ui/vant/issues/11249)
- Uploader: chooseFile is invalid when show-upload is false [#11218](https://github.com/vant-ui/vant/issues/11218)

### [v4.0.0-rc.6](https://github.com/vant-ui/vant/compare/v4.0.0-rc.5...v4.0.0-rc.6)

`2022-10-23`

**Feature**

- Calendar: add params for subtitle slot [#11168](https://github.com/vant-ui/vant/issues/11168)
- Cell: add tag prop [#11139](https://github.com/vant-ui/vant/issues/11139)
- ImagePreview: add image slot [#11133](https://github.com/vant-ui/vant/issues/11133)
- Toast: add wordBreak prop [#11147](https://github.com/vant-ui/vant/issues/11147)

**Bug Fixes**

- CouponList: fix the style of coupon checkbox [#11153](https://github.com/vant-ui/vant/issues/11153)
- CouponList: incorrect field style [#11155](https://github.com/vant-ui/vant/issues/11155)
- Swipe: failed to render when inside popup [#11162](https://github.com/vant-ui/vant/issues/11162)

### [v4.0.0-rc.5](https://github.com/vant-ui/vant/compare/v4.0.0-rc.4...v4.0.0-rc.5)

`2022-10-07`

**Feature**

- Field: support label-position top [#11102](https://github.com/vant-ui/vant/issues/11102)
- Loading: add icon slot [#11109](https://github.com/vant-ui/vant/issues/11109)
- NavBar: add clickable prop [#11048](https://github.com/vant-ui/vant/issues/11048)
- Stepper: add auto-fixed prop [#11071](https://github.com/vant-ui/vant/issues/11071)

**Bug Fixes**

- DatePicker: format value when exceed max date [#11122](https://github.com/vant-ui/vant/issues/11122)
- Tabs: incorrect nav scroll animation in some cases [#11116](https://github.com/vant-ui/vant/issues/11116)
- Tabs: scroll position when using nav-bottom slot [#11115](https://github.com/vant-ui/vant/issues/11115)

### [v4.0.0-rc.4](https://github.com/vant-ui/vant/compare/v4.0.0-rc.3...v4.0.0-rc.4)

`2022-09-25`

**Feature**

- Field: add message param to 'end-validate' method [#11080](https://github.com/vant-ui/vant/issues/11080)

**Bug Fixes**

- Tabs: incorrect scroll position in some cases [#11085](https://github.com/vant-ui/vant/issues/11085)
- Tabs: incorrect scroll position when inited [#11059](https://github.com/vant-ui/vant/issues/11059)

### [v4.0.0-rc.3](https://github.com/vant-ui/vant/compare/v4.0.0-rc.2...v4.0.0-rc.3)

`2022-09-12`

**Feature**

- ConfigProvider: add ConfigProviderThemeVars type [#11034](https://github.com/vant-ui/vant/issues/11034)
- Notify: add z-index prop [#11032](https://github.com/vant-ui/vant/issues/11032)
- remove popperjs to reduce install size [#11030](https://github.com/vant-ui/vant/issues/11030)

**Types**

- Toast: fix missing global components type [#11033](https://github.com/vant-ui/vant/issues/11033)

### [v4.0.0-rc.2](https://github.com/vant-ui/vant/compare/v4.0.0-rc.1...v4.0.0-rc.2)

`2022-09-11`

**Breaking Changes**

- attach css variables to :root element [#11026](https://github.com/vant-ui/vant/issues/11026)

**Bug Fixes**

- Dialog: incorrect transform behavior [#11028](https://github.com/vant-ui/vant/issues/11028)
- Empty: fix opacity in dark mode [#11027](https://github.com/vant-ui/vant/issues/11027)

### [v4.0.0-rc.1](https://github.com/vant-ui/vant/compare/v4.0.0-rc.0...v4.0.0-rc.1)

`2022-09-10`

**Feature**

- export props of all components [#11024](https://github.com/vant-ui/vant/issues/11024)
- Dialog: message-align can be justify [#11014](https://github.com/vant-ui/vant/issues/11014)
- Image: add block prop [#11022](https://github.com/vant-ui/vant/issues/11022)
- Toast: add message slot [#11018](https://github.com/vant-ui/vant/issues/11018)

**Bug Fixes**

- Picker: failed to update value in some cases [#11009](https://github.com/vant-ui/vant/issues/11009)
- Locale: avoid getting unexpected value [#11010](https://github.com/vant-ui/vant/issues/11010)

### [v4.0.0-rc.0](https://github.com/vant-ui/vant/compare/v3.6.2...v4.0.0-rc.0)

`2022-09-04`

**New Component**

- Add new component [PickerGroup](#/en-US/picker-group) [#11005](https://github.com/vant-ui/vant/issues/11005)

**Bug Fixes**

- DatePicker: failed to update model value [#10984](https://github.com/vant-ui/vant/issues/10984)
- DatePicker: min-date prop not work correctly [#10985](https://github.com/vant-ui/vant/issues/10985)

### [v4.0.0-beta.1](https://github.com/vant-ui/vant/compare/v3.6.0...v4.0.0-beta.1)

`2022-08-24`

**Breaking Changes**

- Popup: improve style when position is center [#10965](https://github.com/vant-ui/vant/issues/10965)

```less
// Vant 3
.van-popup--center {
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

// Vant 4
.van-popup--center {
  left: 0;
  right: 0;
  width: fit-content;
  max-width: calc(100vw - var(--van-padding-md) * 2);
  margin: 0 auto;
  transform: translateY(-50%);
}
```

**New Component**

- Add new component [Space](#/en-US/space), contributed by [@LadyChatterleyLover](https://github.com/LadyChatterleyLover) [#10857](https://github.com/vant-ui/vant/issues/10857) ❤️

**Feature**

- ConfigProvider: add z-index prop [#10915](https://github.com/vant-ui/vant/issues/10915)
- Form: add validateEmpty option of rule [#10913](https://github.com/vant-ui/vant/issues/10913)
- Popup: add role and tabindex for a11y [#10894](https://github.com/vant-ui/vant/issues/10894)
- TouchEmulator: support .mjs extension [#10888](https://github.com/vant-ui/vant/issues/10888)

**Feature**

- ConfigProvider: add theme-vars-dark and theme-vars-light props [#10939](https://github.com/vant-ui/vant/issues/10939)
- Picker: add clickOption event [#10865](https://github.com/vant-ui/vant/issues/10865)
- add correct passive flag to improve scroll performance [#10951](https://github.com/vant-ui/vant/issues/10951)
- @vant/use: improve useEventListener typing [#10952](https://github.com/vant-ui/vant/issues/10952)

**Bug Fixes**

- ConfigProvider: should remove theme class on unmount [#10898](https://github.com/vant-ui/vant/issues/10898)
- reduce passive event warning of touchstart event [#10954](https://github.com/vant-ui/vant/issues/10954)
- Tabs: resize not work for swipeable tabs [#10964](https://github.com/vant-ui/vant/issues/10964)
- Fix incorrect tag name in WebStorm [#10946](https://github.com/vant-ui/vant/issues/10946)
- Badge: should hide string zero when using show-zero prop [#10921](https://github.com/vant-ui/vant/issues/10921)
- Calendar: content disappeared when hiding [#10910](https://github.com/vant-ui/vant/issues/10910)
- Calendar: reading getFullYear error in some cases [#10909](https://github.com/vant-ui/vant/issues/10909)
- Empty: generate unique id to avoid render issue [#10943](https://github.com/vant-ui/vant/issues/10943)
- Popover: can not scroll inside popup [#10949](https://github.com/vant-ui/vant/issues/10949)
- PullRefresh: fix passive event warning [#10938](https://github.com/vant-ui/vant/issues/10938)
- Search: --van-search-input-height var not work [#10911](https://github.com/vant-ui/vant/issues/10911)

### [v4.0.0-beta.0](https://github.com/vant-ui/vant/compare/v3.5.2...v4.0.0-beta.0)

`2022-07-16`

**Breaking Changes**

- Toast: redesign function-call API [#10804](https://github.com/vant-ui/vant/issues/10804)
- Dialog: redesign function-call API [#10781](https://github.com/vant-ui/vant/issues/10781)
- Notify: redesign function-call API [#10782](https://github.com/vant-ui/vant/issues/10782)
- ImagePreview: redesign function-call API [#10802](https://github.com/vant-ui/vant/issues/10802)

**Feature**

- add @vant/compat package [#10806](https://github.com/vant-ui/vant/issues/10806)
- Calendar: expose getSelectedDate method [419a8e](https://github.com/vant-ui/vant/commit/419a8e4f0e6454b9aac30d5800318deabec099cb)
- remove less source file to remove bundle size [#10752](https://github.com/vant-ui/vant/issues/10752)

**Bug Fixes**

- Uploader: should not preview failed images [#10790](https://github.com/vant-ui/vant/issues/10790)

### [v4.0.0-alpha.4](https://github.com/vant-ui/vant/compare/v3.5.0-beta.0...v4.0.0-alpha.4)

`2022-05-31`

**Feature**

- using mjs extension for esmodule [#10625](https://github.com/vant-ui/vant/issues/10625)

### [v4.0.0-alpha.3](https://github.com/vant-ui/vant/compare/v3.4.9...v4.0.0-alpha.3)

`2022-05-02`

**Feature**

- Form: support setting multiple validate-trigger [#10544](https://github.com/vant-ui/vant/issues/10544)
- Empty: localize all images [#10514](https://github.com/vant-ui/vant/issues/10514) [#10515](https://github.com/vant-ui/vant/issues/10515) [#10516](https://github.com/vant-ui/vant/issues/10516)
- Loading: add aria to improve a11y [#10568](https://github.com/vant-ui/vant/issues/10568)

**Bug Fixes**

- Search: style error in dark mode [#10527](https://github.com/vant-ui/vant/issues/10527)
- @vant/area-data: only publish dist folder to npm [f927f6](https://github.com/vant-ui/vant/commit/f927f6a7518cf7d08ec8abc5dd35019685c19e3a)

### [v4.0.0-alpha.2](https://github.com/vant-ui/vant/compare/v3.4.8...v4.0.0-alpha.2)

`2022-04-16`

- CalendarDay: add default margin-bottom [#10441](https://github.com/vant-ui/vant/issues/10441)
- Empty: support set the image size separately [#10465](https://github.com/vant-ui/vant/issues/10465)
- Field: add enterkeyhint prop [#10478](https://github.com/vant-ui/vant/issues/10478)
- Form: add getValues method [#10511](https://github.com/vant-ui/vant/issues/10511)
- Icon: add some icons for ShareSheet [#10468](https://github.com/vant-ui/vant/issues/10468)
- Locale: add Danish lang [#10513](https://github.com/vant-ui/vant/issues/10513)
- ShareSheet: no longer rely on CDN images [#10469](https://github.com/vant-ui/vant/issues/10469)
- Add event arguments in web-types.json [#10474](https://github.com/vant-ui/vant/issues/10474)

**Bug Fixes**

- DatetimePicker: modeValue is inconsistent with the selected data [#10448](https://github.com/vant-ui/vant/issues/10448)
- Rate: support precisely selected [#10500](https://github.com/vant-ui/vant/issues/10500)

### [v4.0.0-alpha.1](https://github.com/vant-ui/vant/compare/v3.4.6...v4.0.0-alpha.1)

`2022-03-19`

**Feature**

- @vant/area-data: update counties of NanJing [#10410](https://github.com/vant-ui/vant/issues/10410)
- Locale: add la-LA.ts [#10388](https://github.com/vant-ui/vant/issues/10388)

**Bug Fixes**

- Calendar: fix title color in dark mode [#10403](https://github.com/vant-ui/vant/issues/10403)
- Picker: fix title color in dark mode [#10403](https://github.com/vant-ui/vant/issues/10403)
- ConfigProvider: dark mode not work as default value [#10413](https://github.com/vant-ui/vant/issues/10413)
- DatePicker: failed to update model value [#10415](https://github.com/vant-ui/vant/issues/10415)
- Dialog: fix title and message color in dark mode [#10379](https://github.com/vant-ui/vant/issues/10379)
- IndexBar: allow active bottom anchor [#10404](https://github.com/vant-ui/vant/issues/10404)
