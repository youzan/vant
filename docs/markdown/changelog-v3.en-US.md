# Changelog

### Tips

The current document is the changelog of Vant 3.x. If you want to view the changelog of Vant 2.x, please visit [Vant 2.x Changelog](https://youzan.github.io/vant/#/en-US/changelog).

### Intro

Vant follows [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/).

**Release Schedule**

- Patch version：released weekly, including features and bug fixes.
- Minor version：released every one to two months, including backwards compatible features.
- Major version：including breaking changes and new features.

## Details

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
