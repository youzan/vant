# Changelog

### [v2.0.0-beta.0](https://github.com/youzan/vant/tree/v2.0.0-beta.0)
`2019-05-21`

#### Overview

- Add four new components
- Add dozens of APIs
- New card style document, support document search
- All components support custom styles via `less` variables
- Rename several components, deprecate several APIs

#### New Components

- `Image` Component
- `Skeleton` Component
- `IndexBar`、`IndexAnchor` Component
- `DropdownMenu`、`DropdownItem` Component

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
- Rename `Badge` to `SlideBarItem`

##### Loading

- Remove `circle` type
- Remove `gradient-circle` type

##### Checkbox

- Adjusted to `flex` layout, may affect the original layout

##### Radio

- Adjusted to `flex` layout, may affect the original layout

##### Waterfall

- Remove Waterfall component，please use `List` instead，or use [@vant/waterfall](https://github.com/chenjiahan/vant-waterfall)。

#### New Features

##### ActionSheet

- add `close-on-click-action` prop
- support use `title` and `actions` prop at same time

##### Button

- add `loading-type` prop

##### Checkbox

- add `icon-size` prop

##### Field

- add `label-class` prop

##### GoodsActionButton

- add `type` prop

##### Icon

- Support `size` prop of `Number` type

##### Loading

- add `default` slot
- add `vertical` prop
- add `text-size` prop
- Support `size` prop of `Number` type

##### Notify

- add `onClick` prop

##### NoticeBar

- add `left-icon` slot
- add `right-icon` slot

##### PasswordInput

- add `gutter` prop

##### Popup

- add `click` event
- add `duration` prop

##### Radio

- add `icon-size` prop

##### Steps

- add `inactive-icon` prop
- add `inactive-icon` slot

##### SubmitBar

- add `tip-icon` prop
- add `suffix-label` prop

##### Switch

- The loading icon color will now follow the background color change

##### SwitchCell

- add `border` prop
- add `cell-size` prop

##### Sku

- add `preview-open` event
- add `preview-close` event

##### Tab

- Optimize `animated` performance
- Fix incorrect tab pane height when use `animated` prop

##### Tabbar

- add `route` prop
- add `border` prop
- add `inactive-color` prop

##### TabbarItem

- add `name` prop
