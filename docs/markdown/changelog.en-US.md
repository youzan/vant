# 更新日志

## [v2.0.1](https://github.com/youzan/vant/tree/v2.0.1)
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
