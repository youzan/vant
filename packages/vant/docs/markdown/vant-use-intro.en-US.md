# Composables

### Intro

Vant provide some built-in composition APIs, you can directly use these APIs for development.

### Install

Although `@vant/use` is already included in Vant's dependencies, it is still recommended to install this package explicitly:

```shell
# with npm
npm i @vant/use

# with yarn
yarn add @vant/use

# with pnpm
pnpm add @vant/use

# with Bun
bun add @vant/use
```

### Demo

```js
import { useWindowSize } from '@vant/use';

const { width, height } = useWindowSize();

console.log(width.value); // -> window width
console.log(height.value); // -> window height
```

### API List

| Name | Description |
| --- | --- |
| [useClickAway](#/en-US/use-click-away) | Triggers a callback when user clicks outside of the target element |
| [useCountDown](#/en-US/use-count-down) | Used to manage the countdown |
| [useCustomFieldValue](#/en-US/use-custom-field-value) | Used to custom Field value |
| [useEventListener](#/en-US/use-event-listener) | Used to attach event |
| [usePageVisibility](#/en-US/use-page-visibility) | Get the visible state of the page |
| [useRect](#/en-US/use-rect) | Get the size of an element and its position relative to the viewport |
| [useRelation](#/en-US/use-relation) | Establish the association relationship between parent and child components |
| [useScrollParent](#/en-US/use-scroll-parent) | Get the closest parent element that is scrollable |
| [useToggle](#/en-US/use-toggle) | Used to switch between `true` and `false` |
| [useWindowSize](#/en-US/use-window-size) | Get the viewport width and height of the browser window |
| [useRaf](#/zh-CN/use-raf) | Used to manage the requestAnimationFrame |
