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

### [v4.0.0-beta.0](https://github.com/youzan/vant/compare/v3.5.2...v4.0.0-beta.0)

`2022-07-16`

**Breaking Changes**

- Toast: redesign function-call API [#10804](https://github.com/youzan/vant/issues/10804)
- Dialog: redesign function-call API [#10781](https://github.com/youzan/vant/issues/10781)
- Notify: redesign function-call API [#10782](https://github.com/youzan/vant/issues/10782)
- ImagePreview: redesign function-call API [#10802](https://github.com/youzan/vant/issues/10802)

**Feature**

- add @vant/compat package [#10806](https://github.com/youzan/vant/issues/10806)
- Calendar: expose getSelectedDate method [419a8e](https://github.com/youzan/vant/commit/419a8e4f0e6454b9aac30d5800318deabec099cb)
- remove less source file to remove bundle size [#10752](https://github.com/youzan/vant/issues/10752)

**Bug Fixes**

- Uploader: should not preview failed images [#10790](https://github.com/youzan/vant/issues/10790)

### [v4.0.0-alpha.4](https://github.com/youzan/vant/compare/v3.5.0-beta.0...v4.0.0-alpha.4)

`2022-05-31`

**Feature**

- using mjs extension for esmodule [#10625](https://github.com/youzan/vant/issues/10625)

### [v4.0.0-alpha.3](https://github.com/youzan/vant/compare/v3.4.9...v4.0.0-alpha.3)

`2022-05-02`

**Feature**

- Form: support setting multiple validate-trigger [#10544](https://github.com/youzan/vant/issues/10544)
- Empty: localize all images [#10514](https://github.com/youzan/vant/issues/10514) [#10515](https://github.com/youzan/vant/issues/10515) [#10516](https://github.com/youzan/vant/issues/10516)
- Loading: add aria to improve a11y [#10568](https://github.com/youzan/vant/issues/10568)

**Bug Fixes**

- Search: style error in dark mode [#10527](https://github.com/youzan/vant/issues/10527)
- @vant/area-data: only publish dist folder to npm [f927f6](https://github.com/youzan/vant/commit/f927f6a7518cf7d08ec8abc5dd35019685c19e3a)

### [v4.0.0-alpha.2](https://github.com/youzan/vant/compare/v3.4.8...v4.0.0-alpha.2)

`2022-04-16`

- CalendarDay: add default margin-bottom [#10441](https://github.com/youzan/vant/issues/10441)
- Empty: support set the image size separately [#10465](https://github.com/youzan/vant/issues/10465)
- Field: add enterkeyhint prop [#10478](https://github.com/youzan/vant/issues/10478)
- Form: add getValues method [#10511](https://github.com/youzan/vant/issues/10511)
- Icon: add some icons for ShareSheet [#10468](https://github.com/youzan/vant/issues/10468)
- Locale: add Danish lang [#10513](https://github.com/youzan/vant/issues/10513)
- ShareSheet: no longer rely on CDN images [#10469](https://github.com/youzan/vant/issues/10469)
- Add event arguments in web-types.json [#10474](https://github.com/youzan/vant/issues/10474)

**Bug Fixes**

- DatetimePicker: modeValue is inconsistent with the selected data [#10448](https://github.com/youzan/vant/issues/10448)
- Rate: support precisely selected [#10500](https://github.com/youzan/vant/issues/10500)

### [v4.0.0-alpha.1](https://github.com/youzan/vant/compare/v3.4.6...v4.0.0-alpha.1)

`2022-03-19`

**Feature**

- @vant/area-data: update counties of NanJing [#10410](https://github.com/youzan/vant/issues/10410)
- Locale: add la-LA.ts [#10388](https://github.com/youzan/vant/issues/10388)

**Bug Fixes**

- Calendar: fix title color in dark mode [#10403](https://github.com/youzan/vant/issues/10403)
- Picker: fix title color in dark mode [#10403](https://github.com/youzan/vant/issues/10403)
- ConfigProvider: dark mode not work as default value [#10413](https://github.com/youzan/vant/issues/10413)
- DatePicker: failed to update model value [#10415](https://github.com/youzan/vant/issues/10415)
- Dialog: fix title and message color in dark mode [#10379](https://github.com/youzan/vant/issues/10379)
- IndexBar: allow active bottom anchor [#10404](https://github.com/youzan/vant/issues/10404)
