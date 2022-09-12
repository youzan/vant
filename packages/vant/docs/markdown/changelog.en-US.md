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

- Add new component [Space](#/en-US/space), contributed by [@LadyChatterleyLover](https://github.com/LadyChatterleyLover) [#10857](https://github.com/vant-ui/vant/issues/10857)

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
