# Changelog

## v1.5.0

- `useEventListener` now returns a cleanup function

## v1.4.4

- Fix `useChildren` not sort children correctly

## v1.4.3

- improve `useEventListener` typing

## v1.4.2

- `useClickAway` support multiple targets

## v1.4.1

- Add `exports` field to package.json, support nuxt 3.

## v1.4.0

- Using `.mjs` extension, `dist/index.esm.js` -> `dist/index.esm.mjs`

## v1.3.6

- Fix missing VisibilityState type

## v1.3.5

- Fix useChildren missing subTree when flattening vnodes

## v1.3.4

- Fix useClickAway failed in SSR

### v1.3.3

- Allow to call useWindowSize outside setup
- Improve usePageVisibility event bindings performance

### v1.3.2

- Remove passive event polyfill

### v1.3.1

- Remove requestAnimationFrame polyfill

### v1.3.0

- Added `useCustomFieldValue` method

### v1.2.2

`2021-07-22`

- `useEventListener`: fix `invalid watch source` issue

### v1.2.1

`2021-07-21`

- `useEventListener` will now watch the target changes and re-listen the events

### v1.2.0

`2021-07-12`

- Adjust type definition of `useParent` and `useChildren`

### v1.1.2

`2021-04-22`

- Fix the issue of `useScrollParent` reporting errors under SSR

### v1.1.1

`2021-04-16`

- Remove `@babel/runtime` dependency

### v1.1.0

`2021-04-06`

- Compile to ES6 instead of ES5

### v1.0.5

`2021-02-13`

- Optimize the return value type of `useRect`, always return `DOMRect`

### v1.0.4

`2021-02-12`

- `useChildren` supports defining the type of Children through generics

### v1.0.3

`2021-02-10`

- When parent does not exist, `useParent` now returns index -1 instead of undefined

### v1.0.2

`2021-01-01`

- Fix the problem of incorrect useToggle type definition

### v1.0.1

`2020-12-27`

- Export individual internal methods for use by Vant

### v1.0.0

`2020-12-15`

- Optimize the volume of the build product

### v0.1.0

`2020-11-11`

- Added `onMountedOrActivated` method

### v0.0.8

`2020-10-09`

- Improve type definition

### v0.0.7

`2020-10-06`

- Fix the problem that `useCountDown` is not exported

### v0.0.6

`2020-10-06`

- Export all type definitions

### v0.0.5

`2020-10-06`

- Added `useCountDown` method

### v0.0.4

`2020-10-05`

- Added `useRect` method

### v0.0.3

`2020-09-27`

- Added `useParent` method
- Added `useChildren` method

### v0.0.2

`2020-09-15`

- Added `useWindowSize` method

### v0.0.1

`2020-09-15`

- Added `useClickAway` method
- Added `useEventListener` method
- Added `usePageVisibility` method
- Added `useScrollParent` method
- Added `useToggle` method
