# Changelog

### [v2.0.5](https://github.com/youzan/vant/tree/v2.0.5)
`2019-07-02`

**Improvements**

- Stepper: add button-size prop [\#3714](https://github.com/youzan/vant/pull/3714)
- Stepper: support long press gesture [\#3711](https://github.com/youzan/vant/pull/3711)
- Dialog: add close-on-popstate prop [\#3709](https://github.com/youzan/vant/pull/3709)

**Bug Fixes**

- fix postcss config overwritten issue


### [v2.0.4](https://github.com/youzan/vant/tree/v2.0.4)
`2019-07-01`

**Improvements**

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

**Improvements**

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

**Improvements**

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

**Improvements**

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

- Remove Waterfall component，please use `List` instead，or use [@vant/waterfall](https://github.com/chenjiahan/vant-waterfall)。

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
