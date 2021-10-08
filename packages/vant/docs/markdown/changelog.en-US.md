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

### [v3.2.5](https://github.com/youzan/vant/compare/v3.2.4...v3.2.5)

`2021-10-08`

**Feature**

- Field: add error-message slot [#9634](https://github.com/youzan/vant/issues/9634)

**Performance**

- remove CustomEvent polyfill [#9589](https://github.com/youzan/vant/issues/9589)
- remove passive event polyfill [#9590](https://github.com/youzan/vant/issues/9590)

**Types**

- Button: add ButtonNativeType、ButtonIconPosition type [#9604](https://github.com/youzan/vant/issues/9604)
- Skeleton: add SkeletonAvatarShape type [#9605](https://github.com/youzan/vant/issues/9605)

**Bug Fixes**

- Toast: failed to sync clear toast [a48caa](https://github.com/youzan/vant/commit/a48caa7c98f88d9c87de3f9e9f208771c1c98ab5)
- Revert "chore: adjust package entry file" [#9642](https://github.com/youzan/vant/issues/9642) [#9455](https://github.com/youzan/vant/issues/9455)

### [v3.2.4](https://github.com/youzan/vant/compare/v3.2.3...v3.2.4)

`2021-09-26`

**Feature**

- Icon: add guide-o icon [c5f45a](https://github.com/youzan/vant/commit/c5f45a5c134bf9d789c943b247c620a1a2391d03)
- Search: add autocomplete prop [#9553](https://github.com/youzan/vant/issues/9553)
- Search: add name prop [#9563](https://github.com/youzan/vant/issues/9563)

**Performance**

- Lazyload: reduce production log [33d7aa](https://github.com/youzan/vant/commit/33d7aa8f1aee38576f1a0b3549560edd7b5fe0ed)
- Lazyload: remove edge 15 polyfill [00b156](https://github.com/youzan/vant/commit/00b1568887321cf452ed4b8872fe99f089a74b22)
- @vant/use: remove raf polyfill [#9544](https://github.com/youzan/vant/issues/9544)

**Types**

- export props types [a3380f](https://github.com/youzan/vant/commit/a3380f08c06f5fd32443e9b033e3d8a29c1f726a)
- fix $toast、$dialog、$notify typing [#9556](https://github.com/youzan/vant/issues/9556)
- Popover: PopoverAction type allow extra properties [#9554](https://github.com/youzan/vant/issues/9554)

**Bug Fixes**

- Collapse: wrapperRef may be undefined [#9505](https://github.com/youzan/vant/issues/9505)
- CouponList: fix scroll issue [#9480](https://github.com/youzan/vant/issues/9480)
- Radio: icon ref may be undefined [#9503](https://github.com/youzan/vant/issues/9503)
- Tabs: failed to scroll into view when rendering multiple tabs [#9543](https://github.com/youzan/vant/issues/9543)

### [v3.2.3](https://github.com/youzan/vant/compare/v3.2.2...v3.2.3)

`2021-09-12`

**Bug Fixes**

- Button: should support CSS vars gradient background color [#9454](https://github.com/youzan/vant/issues/9454)
- Calendar: fix disabled date selection [#9361](https://github.com/youzan/vant/issues/9361)
- Field: fix user-select input issue in iOS [#9418](https://github.com/youzan/vant/issues/9418)
- FIeld: field-error-message-font-size var name [#9394](https://github.com/youzan/vant/issues/9394)
- Popup: failed to autoplay when activated [#9452](https://github.com/youzan/vant/issues/9452)
- Theme: remove less tilde [a7ab2f](https://github.com/youzan/vant/commit/a7ab2f8049b7c18d2a2f74aeac26f72dfbadaf6f)
- slider: fix empty range value [#9409](https://github.com/youzan/vant/issues/9409)
- Uploader: uploader-delete-icon-size should affect icon size [#9453](https://github.com/youzan/vant/issues/9453)

### [v3.2.2](https://github.com/youzan/vant/compare/v3.2.1...v3.2.2)

`2021-09-02`

**Feature**

- Field: add id prop [#9347](https://github.com/youzan/vant/issues/9347)
- Field: add `van-field__error` class when error [#9327](https://github.com/youzan/vant/issues/9327)
- Field: using `label` tag for label [#9346](https://github.com/youzan/vant/issues/9346)
- Popover: add show-arrow prop [#9372](https://github.com/youzan/vant/issues/9372)
- Progress: add transition effect [ba4ff5](https://github.com/youzan/vant/commit/ba4ff58af6ccf67e255bf43ef905677dc64596a3)
- Search: add id prop [#9349](https://github.com/youzan/vant/issues/9349)
- Tab: add show-zero-badge prop [#9343](https://github.com/youzan/vant/issues/9343)
- Locale: simplify locale configs [#9329](https://github.com/youzan/vant/issues/9329)

**Bug Fixes**

- AddressEdit: remove unused finish button [#9364](https://github.com/youzan/vant/issues/9364)
- Progress: fix render error when use v-show and improve performance [841e09](https://github.com/youzan/vant/commit/841e09d0529961058ecb63ed26f018cf3a66a3bf)
- Progress: percentage missing default value [8ac597](https://github.com/youzan/vant/commit/8ac597dc3d2316d34f866dcfd7e1646c695da180)
- fix animation css vars not work [#9337](https://github.com/youzan/vant/issues/9337)

### [v3.2.1](https://github.com/youzan/vant/compare/v3.2.0...v3.2.1)

`2021-08-22`

**Feature**

- Circle: add start-position prop [#9305](https://github.com/youzan/vant/issues/9305)
- Slider: add reverse prop [#9308](https://github.com/youzan/vant/issues/9308)
- NumberKeyboard: add van-number-keyboard-key-background-color css var [#9303](https://github.com/youzan/vant/issues/9303)
- PasswordInput: add password-input-text-color css var [#9304](https://github.com/youzan/vant/issues/9304)

**Bug Fixes**

- Calendar: title is undefined in month-show event [#9275](https://github.com/youzan/vant/issues/9275)
- Dialog: fix beforeClose repeat trigger [#9283](https://github.com/youzan/vant/issues/9283) [#9291](https://github.com/youzan/vant/issues/9291)
- Field: should export FieldInstance type [#9254](https://github.com/youzan/vant/issues/9254)
- Rate: convert count type [#9307](https://github.com/youzan/vant/issues/9307)
- TreeSelect: fix negative css vars [#9306](https://github.com/youzan/vant/issues/9306)

### [v3.2.0](https://github.com/youzan/vant/compare/v3.1.5...v3.2.0)

`2021-08-12`

**Feature**

- Form: add useCustomFieldValue api [#9200](https://github.com/youzan/vant/issues/9200)
- Button: loading-size prop support number type [#9177](https://github.com/youzan/vant/issues/9177)
- Style: add van-safe-area-bottom util class [#9205](https://github.com/youzan/vant/issues/9205)

**Types**

- AddressEdit: add AddressEditInstance type [#9197](https://github.com/youzan/vant/issues/9197)
- Area: add AreaInstance type [#9195](https://github.com/youzan/vant/issues/9195)
- Calendar: add CalendarInstance type [#9165](https://github.com/youzan/vant/issues/9165)
- Checkbox: add CheckboxInstance type [#9140](https://github.com/youzan/vant/issues/9140)
- CheckboxGroup: add CheckboxGroupInstance type [#9142](https://github.com/youzan/vant/issues/9142)
- CollapseItem: add CollapseItemInstance type [#9194](https://github.com/youzan/vant/issues/9194)
- CountDown: add CountDownInstance type [#9153](https://github.com/youzan/vant/issues/9153)
- DatetimePicker: add DatetimePickerInstance type [#9208](https://github.com/youzan/vant/issues/9208)
- DropdownItem: add DropdownItemInstance type [#9214](https://github.com/youzan/vant/issues/9214)
- Field: add FieldInstance type [#9166](https://github.com/youzan/vant/issues/9166)
- Form: add FormInstance type [#9139](https://github.com/youzan/vant/issues/9139)
- ImagePreview: add ImagePreviewInstance type [#9216](https://github.com/youzan/vant/issues/9216)
- IndexBar: add IndexBarInstance type [#9246](https://github.com/youzan/vant/issues/9246)
- List: add ListInstance type [#9159](https://github.com/youzan/vant/issues/9159)
- NoticeBar: add NoticeBarInstance type [#9245](https://github.com/youzan/vant/issues/9245)
- Picker: add PickerInstance type [#9183](https://github.com/youzan/vant/issues/9183)
- Progress: add ProgressInstance type [#9247](https://github.com/youzan/vant/issues/9247)
- Search: add SearchInstance type [#9181](https://github.com/youzan/vant/issues/9181)
- Swipe: add SwipeInstance type [#9158](https://github.com/youzan/vant/issues/9158)
- SwipeCell: add SwipeCellInstance type [#9179](https://github.com/youzan/vant/issues/9179)
- Tabs: add TabsInstance type [#9174](https://github.com/youzan/vant/issues/9174)
- Uploader: add UploaderInstance type [#9164](https://github.com/youzan/vant/issues/9164)

**Bug Fixes**

- Badge: minus x offset not work [#9199](https://github.com/youzan/vant/issues/9199)
- Image: fix border radius value [#9163](https://github.com/youzan/vant/issues/9163)
- Field: textarea scroll to top after resizing [#9206](https://github.com/youzan/vant/issues/9206)
- Notify: default option is overridden [#9138](https://github.com/youzan/vant/issues/9138)
- Rate: should enable flex wrap [#9192](https://github.com/youzan/vant/issues/9192)
- Tabs: remove invalid head padding for card type [#9168](https://github.com/youzan/vant/issues/9168)
- Toast: failed to update message [#9196](https://github.com/youzan/vant/issues/9196)

### [v3.1.5](https://github.com/youzan/vant/compare/v3.1.4...v3.1.5)

`2021-07-26`

**Feature**

- AddressEdit: add address-edit-button-font-size var [#9113](https://github.com/youzan/vant/issues/9113)
- Icon: add shield-o icon [#9082](https://github.com/youzan/vant/issues/9082)
- Locale: add Russian language [#9088](https://github.com/youzan/vant/issues/9088)
- Toast: improve unclickable cursor [#9116](https://github.com/youzan/vant/issues/9116)
- Uploader: add click-upload event [#9119](https://github.com/youzan/vant/issues/9119)
- Uploader: add readonly prop [#9118](https://github.com/youzan/vant/issues/9118)

**Bug Fixes**

- Icon: fix invitation typo [#9096](https://github.com/youzan/vant/issues/9096)
- NumberKeyboard: should not emit close event when click away [#9108](https://github.com/youzan/vant/issues/9108)
- Search: fix incorrect left icon color [#9100](https://github.com/youzan/vant/issues/9100)
- Tabbar: fix tabbar-item-icon-margin-bottom var name [#9101](https://github.com/youzan/vant/issues/9101)

### [v3.1.4](https://github.com/youzan/vant/compare/v3.1.3...v3.1.4)

`2021-07-19`

**Feature**

- ActionSheet: add before-close prop [#9068](https://github.com/youzan/vant/issues/9068)
- Cascader: add option slot [#9036](https://github.com/youzan/vant/issues/9036)
- Cascader: improve option cursor [#9032](https://github.com/youzan/vant/issues/9032)
- Popup: add before-close prop [#9067](https://github.com/youzan/vant/issues/9067)
- ShareSheet: add before-close prop [#9068](https://github.com/youzan/vant/issues/9068)
- Tabs: add click-tab event [#9037](https://github.com/youzan/vant/issues/9037)

**Bug Fixes**

- Field: required mark position [#9035](https://github.com/youzan/vant/issues/9035)
- List: should emit load event when parent tab is activated [#9022](https://github.com/youzan/vant/issues/9022)
- Popup: missing open、close event in some cases [#9065](https://github.com/youzan/vant/issues/9065)

### [v3.1.3](https://github.com/youzan/vant/compare/v3.1.2...v3.1.3)

`2021-07-11`

**Feature**

- Calendar: add click-subtitle event [#8981](https://github.com/youzan/vant/issues/8981)
- Calendar: add subtitle slot [#8980](https://github.com/youzan/vant/issues/8980)
- ConfigProvider: add icon-prefix prop [#8986](https://github.com/youzan/vant/issues/8986)
- Slider: add drag event param [#8990](https://github.com/youzan/vant/issues/8990)
- Slider: add left-button、right-button slot [#8989](https://github.com/youzan/vant/issues/8989)
- touch-emulator: support data-no-touch-simulate [#8984](https://github.com/youzan/vant/issues/8984)

**Bug Fixes**

- Step: fix z-index issue [#9003](https://github.com/youzan/vant/issues/9003)

### [v3.1.2](https://github.com/youzan/vant/compare/v3.1.1...v3.1.2)

`2021-07-03`

**Feature**

- Area: add toolbar、confirm、cancel slots [#8969](https://github.com/youzan/vant/issues/8969)
- Calendar: simplify placeholder dom [#8955](https://github.com/youzan/vant/issues/8955)
- Cascader: add disabled option [#8952](https://github.com/youzan/vant/issues/8952)
- ConfigProvider: add tag prop [#8967](https://github.com/youzan/vant/issues/8967)
- Picker: add toolbar slot [#8968](https://github.com/youzan/vant/issues/8968)
- Picker: allow option text to be number type [#8951](https://github.com/youzan/vant/issues/8951)
- Picker: add picker-option-padding CSS var [#8947](https://github.com/youzan/vant/issues/8947)

**Bug Fixes**

- Toast: fix word break [#8965](https://github.com/youzan/vant/issues/8965)

### [v3.1.1](https://github.com/youzan/vant/compare/v3.1.0...v3.1.1)

`2021-06-27`

**Feature**

- Cell: add value slot [#8933](https://github.com/youzan/vant/issues/8933)
- CollapseItem: add label slot [#8934](https://github.com/youzan/vant/issues/8934)
- NoticeBar: add reset method [#8917](https://github.com/youzan/vant/issues/8917)
- Tabs: add nav-bottom slot [#8915](https://github.com/youzan/vant/issues/8915)

### [v3.1.0](https://github.com/youzan/vant/compare/v3.1.0-beta.0...v3.1.0)

`2021-06-22`

**New Component**

- add [ConfigProvider](#/en-US/config-provider) Component [#8854](https://github.com/youzan/vant/issues/8854)

**Feature**

- all components support CSS Variables [aef257](https://github.com/youzan/vant/commit/aef2579a95da7c8b528ba7062b227fea698a0487) [fe1cba](https://github.com/youzan/vant/commit/fe1cba97b796eba7e9b5dca0ce4ab0d1de95715c)
- add more CSS Variables [#8861](https://github.com/youzan/vant/issues/8861)
- Checkbox: icon slot add disabled param [#8839](https://github.com/youzan/vant/issues/8839)
- Cascader: add className option [#8882](https://github.com/youzan/vant/issues/8882)
- Cascader: add color option [#8883](https://github.com/youzan/vant/issues/8883)
- CellGroup: add inset prop [#8885](https://github.com/youzan/vant/issues/8885)
- GridItem: add reverse prop [#8878](https://github.com/youzan/vant/issues/8878)
- IndexBar: add teleport prop [#8820](https://github.com/youzan/vant/issues/8820)

**Bug Fixes**

- Dialog: allow message function to return html [#8872](https://github.com/youzan/vant/issues/8872)
- Slider: format v-model with step correctly [#8893](https://github.com/youzan/vant/issues/8893)

### [v3.0.18](https://github.com/youzan/vant/compare/v3.0.17...v3.0.18)

`2021-06-03`

**Feature**

- Button: add icon slot [#8783](https://github.com/youzan/vant/issues/8783)
- CouponList: add list-footer、disabled-list-footer slot [#8801](https://github.com/youzan/vant/issues/8801)
- List: remove unused Less var @list-icon-margin-right [#8759](https://github.com/youzan/vant/issues/8759)
- Locale: add French translations [#8795](https://github.com/youzan/vant/issues/8795)
- Popup: add icon-prefix prop [#8793](https://github.com/youzan/vant/issues/8793)
- Popup: add overlay-content slot [#8794](https://github.com/youzan/vant/issues/8794)

**Bug Fixes**

- Collapse: fix safari rendering issues [#8788](https://github.com/youzan/vant/issues/8788)
- NoticeBar: failed to play when inside a re-opened popup [#8789](https://github.com/youzan/vant/issues/8789)
- @vant/touch-emulator: add SSR support [#8767](https://github.com/youzan/vant/issues/8767)

### [v3.0.17](https://github.com/youzan/vant/compare/v3.0.16...v3.0.17)

`2021-05-23`

**Feature**

- ActionBarIcon: add icon-prefix prop [#8748](https://github.com/youzan/vant/issues/8748)
- Calendar: add show-range-prompt prop [#8739](https://github.com/youzan/vant/issues/8739)
- Calendar: add top-info、bottom-info slot [#8716](https://github.com/youzan/vant/issues/8716)
- GridItem: add icon-color prop [#8753](https://github.com/youzan/vant/issues/8753)
- NoticeBar: increase default speed to 60 [#8694](https://github.com/youzan/vant/issues/8694)
- Popover: add icon-prefix prop [#8703](https://github.com/youzan/vant/issues/8703)
- Toast: add transition [#8743](https://github.com/youzan/vant/issues/8743)
- Uploader: max-size prop can be a function [#8744](https://github.com/youzan/vant/issues/8744)

**Bug Fixes**

- Button: add onClick event shim for tsx [#8665](https://github.com/youzan/vant/issues/8665)
- Calendar: initial date incorrect [#8696](https://github.com/youzan/vant/issues/8696)
- DatetimePicker: vant3 fixed incorrect value when dynamic set min/max [#8658](https://github.com/youzan/vant/issues/8658)
- List: skip check when inside an inactive tab [#8741](https://github.com/youzan/vant/issues/8741)
- Tabs: fix add scroll event target [#8734](https://github.com/youzan/vant/issues/8734)
- Toast: should reset duration when type or message changed [#8742](https://github.com/youzan/vant/issues/8742)

### [v3.0.16](https://github.com/youzan/vant/compare/v3.0.15...v3.0.16)

`2021-05-03`

**Feature**

- Swipe: indicator slot add active param [#8645](https://github.com/youzan/vant/issues/8645)
- Cascader: add @cascader-header-padding less var [#8626](https://github.com/youzan/vant/issues/8626)
- Steps: add icon-prefix prop [#8631](https://github.com/youzan/vant/issues/8631)
- export more types [#8652](https://github.com/youzan/vant/issues/8652)

**Bug Fixes**

- Stepper: fix blur event trigger timing [#8620](https://github.com/youzan/vant/issues/8620)
- SubmitBar: @submit-bar-price-font-size not work [#8639](https://github.com/youzan/vant/issues/8639)
- Swipe: re-initialize when popup reopened [#8643](https://github.com/youzan/vant/issues/8643)
- Tabs: setLine when popup reopened [#8642](https://github.com/youzan/vant/issues/8642)

### [v3.0.15](https://github.com/youzan/vant/compare/v2.12.14-test...v3.0.15)

`2021-04-25`

**Feature**

- Cascader: add click-tab event [#8606](https://github.com/youzan/vant/issues/8606)

**Bug Fixes**

- Tab: failed to render during SSR [#8603](https://github.com/youzan/vant/issues/8603)
- Rate: select half star correctly when clicked [#8580](https://github.com/youzan/vant/issues/8580)
- Tag: incorrect border color when using plain [#8601](https://github.com/youzan/vant/issues/8601)

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

- Field: should not reset validation after blurred [#8409](https://github.com/youzan/vant/issues/8409)
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
- DateTimePicker: fix incorrect initial value [#8193](https://github.com/youzan/vant/issues/8193)
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
