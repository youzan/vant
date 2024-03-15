# Changelog

### Tips

The current document is the changelog of Vant 4, other versions:

- [Vant 2 Changelog](https://vant-ui.github.io/vant/v2/#/en-US/changelog)
- [Vant 3 Changelog](https://vant-ui.github.io/vant/v3/#/en-US/changelog)

### Intro

Vant follows [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/).

**Release Schedule**

- Patch version：Typically released every 1 to 2 weeks, including new features and bug fixes.
- Minor version：Typically released every 1 to 2 months, including new components or significant feature updates, with backward compatibility.
- Major version：No fixed release time, includes breaking changes and major feature updates.

## Details

### v4.8.5

`2024-02-25`

#### New Features 🎉

- feat(Image): add `crossorigin` & `referrerpolicy` props by [@Jungzl](https://github.com/Jungzl) in [#12641](https://github.com/youzan/vant/pull/12641)

#### Bug Fixes 🐞

- fix(NumberKeyboard): render delete slot correctly when theme is custom by [@TPORL](https://github.com/TPORL) in [#12624](https://github.com/youzan/vant/pull/12624)

#### Document 📖

- docs: update docs for params related to Picker events by [@wjw-gavin](https://github.com/wjw-gavin) in [#12619](https://github.com/youzan/vant/pull/12619)
- docs(DatePicker): fix en-docs error by [@wjw-gavin](https://github.com/wjw-gavin) in [#12620](https://github.com/youzan/vant/pull/12620)
- docs(Uploader): fix miss double quote by [@nemo-shen](https://github.com/nemo-shen) in [#12627](https://github.com/youzan/vant/pull/12627)
- docs: add full registration guide by [@chenjiahan](https://github.com/chenjiahan) in [#12628](https://github.com/youzan/vant/pull/12628)
- docs: add Rsbuild import on demand guide by [@chenjiahan](https://github.com/chenjiahan) in [#12629](https://github.com/youzan/vant/pull/12629)

#### Other Changes

- Revert "fix(DropdownMenu): fix recursive update when passing object literal to title-class (#12614)" by [@inottn](https://github.com/inottn) in [#12617](https://github.com/youzan/vant/pull/12617)
- chore(deps): bump Rsbuild v0.4 by [@chenjiahan](https://github.com/chenjiahan) in [#12625](https://github.com/youzan/vant/pull/12625)
- chore(workflow): setup renovate config by [@chenjiahan](https://github.com/chenjiahan) in [#12626](https://github.com/youzan/vant/pull/12626)
- test: skip image SSR test case by [@chenjiahan](https://github.com/chenjiahan) in [#12644](https://github.com/youzan/vant/pull/12644)

#### New Contributors

- [@TPORL](https://github.com/TPORL) made their first contribution in [#12624](https://github.com/youzan/vant/pull/12624)

### v4.8.4

`2024-02-03`

#### New Features 🎉

- feat(Picker): allow to hidden to toolbar buttons by [@chenjiahan](https://github.com/chenjiahan) in [#12599](https://github.com/youzan/vant/pull/12599)

#### Bug Fixes 🐞

- fix(Sticky): initial sticky position by [@nemo-shen](https://github.com/nemo-shen) in [#12601](https://github.com/youzan/vant/pull/12601)
- fix(DropdownMenu): fix recursive update when passing object literal to title-class by [@inottn](https://github.com/inottn) in [#12614](https://github.com/youzan/vant/pull/12614)

#### Document 📖

- docs: improve quickstart tips by [@inottn](https://github.com/inottn) in [#12606](https://github.com/youzan/vant/pull/12606)

#### Other Changes

- chore(deps): bump Rsbuild 0.3.9 and enable clean dist by [@chenjiahan](https://github.com/chenjiahan) in [#12600](https://github.com/youzan/vant/pull/12600)
- chore: avoid workflow running on forked repo by [@tolking](https://github.com/tolking) in [#12607](https://github.com/youzan/vant/pull/12607)
- chore(workflow): using new M1 macOS runner by [@chenjiahan](https://github.com/chenjiahan) in [#12615](https://github.com/youzan/vant/pull/12615)

### v4.8.3

`2024-01-20`

#### New Features 🎉

- feat(Notify): add teleport prop by [@inottn](https://github.com/inottn) in [#12556](https://github.com/youzan/vant/pull/12556)
- feat(TextEllipsis): add `action` slot by [@nemo-shen](https://github.com/nemo-shen) in [#12560](https://github.com/youzan/vant/pull/12560)
- feat(ImagePreview): add close-on-click-image prop by [@inottn](https://github.com/inottn) in [#12566](https://github.com/youzan/vant/pull/12566)
- feat(icons): add icon `arrow-double-left` and `arrow-double-right` by [@nemo-shen](https://github.com/nemo-shen) in [#12579](https://github.com/youzan/vant/pull/12579)
- feat(Toast): add z-index prop by [@inottn](https://github.com/inottn) in [#12587](https://github.com/youzan/vant/pull/12587)

#### Bug Fixes 🐞

- fix(Tab): tab(with sticky prop) loss 'fixed' classname after switch tab by [@nemo-shen](https://github.com/nemo-shen) in [#12547](https://github.com/youzan/vant/pull/12547)
- fix(Image): ImagePosition type is not exported before by [@Jungzl](https://github.com/Jungzl) in [#12549](https://github.com/youzan/vant/pull/12549)
- fix(Tabs): van-border-radius-sm to van-radius-sm by [@edram](https://github.com/edram) in [#12576](https://github.com/youzan/vant/pull/12576)

#### Document 📖

- docs(Lazyload): fix preLoad type error and spelling mistakes by [@RSS1102](https://github.com/RSS1102) in [#12554](https://github.com/youzan/vant/pull/12554)
- docs(home): update heading level by [@inottn](https://github.com/inottn) in [#12577](https://github.com/youzan/vant/pull/12577)

#### Other Changes

- test: bump vitest v1.1.3 by [@inottn](https://github.com/inottn) in [#12546](https://github.com/youzan/vant/pull/12546)
- chore(deps): bump Rsbuild to v0.3.2 by [@chenjiahan](https://github.com/chenjiahan) in [#12565](https://github.com/youzan/vant/pull/12565)
- chore(deps): bump vue to v3.4.13 by [@inottn](https://github.com/inottn) in [#12567](https://github.com/youzan/vant/pull/12567)
- chore(deps): bump vite from 5.0.11 to 5.0.12 by [@dependabot](https://github.com/dependabot) in [#12588](https://github.com/youzan/vant/pull/12588)

#### New Contributors

- [@edram](https://github.com/edram) made their first contribution in [#12576](https://github.com/youzan/vant/pull/12576)

### v4.8.2

`2024-01-03`

#### New Features 🎉

- feat: support link css from shadow dom by [@yoyo837](https://github.com/yoyo837) in [#12526](https://github.com/youzan/vant/pull/12526)
- feat(DropdownMenu): add auto-locate prop by [@inottn](https://github.com/inottn) in [#12251](https://github.com/youzan/vant/pull/12251)

#### Performance 🚀

- perf(CLI): improve markdown compile performance by [@chenjiahan](https://github.com/chenjiahan) in [#12541](https://github.com/youzan/vant/pull/12541)

#### Bug Fixes 🐞

- fix(ci): eslint on windows by [@Jungzl](https://github.com/Jungzl) in [#12516](https://github.com/youzan/vant/pull/12516)
- fix(ImagePreview): double-scale and close-on-click-overlay may not work in certain scenarios by [@inottn](https://github.com/inottn) in [#12521](https://github.com/youzan/vant/pull/12521)

#### Other Changes

- chore(deps): bump Rsbuild v0.2.8 by [@chenjiahan](https://github.com/chenjiahan) in [#12519](https://github.com/youzan/vant/pull/12519)
- chore(deps): bump Vue 3.4.0-beta.4 by [@chenjiahan](https://github.com/chenjiahan) in [#12520](https://github.com/youzan/vant/pull/12520)
- test: bump vitest v1.1.0 by [@chenjiahan](https://github.com/chenjiahan) in [#12522](https://github.com/youzan/vant/pull/12522)
- chore(deps): bump vite v5 by [@chenjiahan](https://github.com/chenjiahan) in [#12523](https://github.com/youzan/vant/pull/12523)
- chore(deps): bump esbuild v0.19 by [@chenjiahan](https://github.com/chenjiahan) in [#12524](https://github.com/youzan/vant/pull/12524)
- chore: lock Rspack v0.4.3 to fix CSS issue by [@chenjiahan](https://github.com/chenjiahan) in [#12525](https://github.com/youzan/vant/pull/12525)
- chore(workflow): adjust issue templates by [@chenjiahan](https://github.com/chenjiahan) in [#12528](https://github.com/youzan/vant/pull/12528)
- chore(workflow): update codesandbox URL by [@chenjiahan](https://github.com/chenjiahan) in [#12529](https://github.com/youzan/vant/pull/12529)
- chore: update vitest config by [@inottn](https://github.com/inottn) in [#12530](https://github.com/youzan/vant/pull/12530)
- chore(deps): bump Rsbuild and Vue by [@chenjiahan](https://github.com/chenjiahan) in [#12532](https://github.com/youzan/vant/pull/12532)
- chore(ImagePreview): reuse isTap ref by [@inottn](https://github.com/inottn) in [#12536](https://github.com/youzan/vant/pull/12536)
- test(Toast): reduce test run time by [@inottn](https://github.com/inottn) in [#12538](https://github.com/youzan/vant/pull/12538)
- test(FloatingBubble): reduce test run time by [@inottn](https://github.com/inottn) in [#12539](https://github.com/youzan/vant/pull/12539)

### v4.8.1

`2023-12-17`

#### New Features 🎉

- perf(TextEllipsis): reuse windowWidth to avoid repeat calculations by [@inottn](https://github.com/inottn) in [#12471](https://github.com/youzan/vant/pull/12471)
- feat(TextEllipsis): add the toggle instance method by [@wjw-gavin](https://github.com/wjw-gavin) in [#12472](https://github.com/youzan/vant/pull/12472)
- feat(cli): bump Rsbuild v0.2.2 by [@chenjiahan](https://github.com/chenjiahan) in [#12502](https://github.com/youzan/vant/pull/12502)

#### Performance 🚀

- perf(cli): disable source map to make compilation faster by [@chenjiahan](https://github.com/chenjiahan) in [#12484](https://github.com/youzan/vant/pull/12484)

#### Bug Fixes 🐞

- fix(cli): remove unused script in template by [@chenjiahan](https://github.com/chenjiahan) in [#12482](https://github.com/youzan/vant/pull/12482)
- fix(TextEllipsis): fix missing param for toggle by [@wjw-gavin](https://github.com/wjw-gavin) in [#12483](https://github.com/youzan/vant/pull/12483)

#### Document 📖

- docs(collapse): fix missing ref tags by [@RSS1102](https://github.com/RSS1102) in [#12460](https://github.com/youzan/vant/pull/12460)
- docs(collapse): fix translation Error by [@RSS1102](https://github.com/RSS1102) in [#12464](https://github.com/youzan/vant/pull/12464)
- docs(dialog): fix translation Error and keep the sample code the same by [@RSS1102](https://github.com/RSS1102) in [#12465](https://github.com/youzan/vant/pull/12465)
- docs(TreeSelect): correct variable names by [@inottn](https://github.com/inottn) in [#12469](https://github.com/youzan/vant/pull/12469)
- docs: add Rsbuild scaffold guide by [@chenjiahan](https://github.com/chenjiahan) in [#12475](https://github.com/youzan/vant/pull/12475)
- docs(image-preview): usage of Supplementing className by [@RSS1102](https://github.com/RSS1102) in [#12491](https://github.com/youzan/vant/pull/12491)
- docs(Quickstart): unplugin-vue-components usage updated (#12499) by [@wChenonly](https://github.com/wChenonly) in [#12500](https://github.com/youzan/vant/pull/12500)

#### Other Changes

- chore(workflow): add perf label for PR by [@chenjiahan](https://github.com/chenjiahan) in [#12473](https://github.com/youzan/vant/pull/12473)
- refactor(CLI): integrate Rsbuild to build website by [@chenjiahan](https://github.com/chenjiahan) in [#12481](https://github.com/youzan/vant/pull/12481)
- chore: bump Rspack 0.4.2 to fix Chinese path by [@chenjiahan](https://github.com/chenjiahan) in [#12496](https://github.com/youzan/vant/pull/12496)
- chore(deps): bump vite from 4.4.9 to 4.4.12 by [@dependabot](https://github.com/dependabot) in [#12493](https://github.com/youzan/vant/pull/12493)

#### New Contributors

- [@RSS1102](https://github.com/RSS1102) made their first contribution in [#12460](https://github.com/youzan/vant/pull/12460)

### v4.8.0

`2023-11-19`

#### New Component 🎉

- Added Highlight component, contributed by [@wjw-gavin](https://github.com/wjw-gavin) and [@inottn](https://github.com/inottn) ❤️ [#12434](https://github.com/youzan/vant/pull/12434)

#### New Features

- feat(ImagePreview): expose resetScale method by [@inottn](https://github.com/inottn) in [#12426](https://github.com/youzan/vant/pull/12426)
- feat(Checker): add checked and disabled params to the default slot by [@inottn](https://github.com/inottn) in [#12436](https://github.com/youzan/vant/pull/12436)
- feat(Row): gutter support vertical space by [@cc-hearts](https://github.com/cc-hearts) in [#12439](https://github.com/youzan/vant/pull/12439)

#### Bug Fixes 🐞

- fix(Calendar): subtitle supports reactive by [@cc-hearts](https://github.com/cc-hearts) in [#12425](https://github.com/youzan/vant/pull/12425)

#### Document 📖

- docs(field): update props size by [@Simon-He95](https://github.com/Simon-He95) in [#12429](https://github.com/youzan/vant/pull/12429)
- docs(cell): update props size by [@Simon-He95](https://github.com/Simon-He95) in [#12427](https://github.com/youzan/vant/pull/12427)
- docs(Highlight): add version tip by [@chenjiahan](https://github.com/chenjiahan) in [#12438](https://github.com/youzan/vant/pull/12438)
- docs(Overlay): add set z-index demo by [@chenjiahan](https://github.com/chenjiahan) in [#12454](https://github.com/youzan/vant/pull/12454)
- docs: add Rsbuild to quickstart by [@chenjiahan](https://github.com/chenjiahan) in [#12455](https://github.com/youzan/vant/pull/12455)

#### Other Changes

- chore(deps): fix security alerts of babel and postcss by [@chenjiahan](https://github.com/chenjiahan) in [#12414](https://github.com/youzan/vant/pull/12414)

#### New Contributors

- [@cc-hearts](https://github.com/cc-hearts) made their first contribution in [#12425](https://github.com/youzan/vant/pull/12425)

### v4.7.3

`2023-10-29`

#### New Features 🎉

- feat(locale): add Arabic Locale by [@mo9a7i](https://github.com/mo9a7i) in [#12381](https://github.com/youzan/vant/pull/12381)
- feat(Form): add required prop and support auto display by [@chenjiahan](https://github.com/chenjiahan) in [#12380](https://github.com/youzan/vant/pull/12380)
- feat(auto-import-resolver): add module option by [@chenjiahan](https://github.com/chenjiahan) in [#12383](https://github.com/youzan/vant/pull/12383)
- style: replace word-break with overflow-wrap by [@wjw-gavin](https://github.com/wjw-gavin) in [#12396](https://github.com/youzan/vant/pull/12396)
- feat(Tab): add show-header prop by [@yoyo837](https://github.com/yoyo837) in [#12394](https://github.com/youzan/vant/pull/12394)
- style(Search): use consistent padding when display error msg by [@chenjiahan](https://github.com/chenjiahan) in [#12409](https://github.com/youzan/vant/pull/12409)
- feat(Signature): expose resize method by [@inottn](https://github.com/inottn) in [#12405](https://github.com/youzan/vant/pull/12405)

#### Bug Fixes 🐞

- fix(ConfigProvider): export missing theme vars by [@inottn](https://github.com/inottn) in [#12371](https://github.com/youzan/vant/pull/12371)
- fix(AddressEdit): area field validate error when showArea is false by [@zhousg](https://github.com/zhousg) in [#12393](https://github.com/youzan/vant/pull/12393)
- fix([@vant](https://github.com/vant)/area-data): add exports types by @Alkaidcc in [#12397](https://github.com/youzan/vant/pull/12397)
- fix(Search): fix search style when has error message by [@johnsonwong666](https://github.com/johnsonwong666) in [#12385](https://github.com/youzan/vant/pull/12385)
- fix(PickerGroup): only filter Comment vnode by [@zhousg](https://github.com/zhousg) in [#12402](https://github.com/youzan/vant/pull/12402)

#### Document 📖

- docs(auto-import-resolver): add doc for importStyle option by [@chenjiahan](https://github.com/chenjiahan) in [#12382](https://github.com/youzan/vant/pull/12382)
- docs(Tab): keep docs and example the same by [@wjw-gavin](https://github.com/wjw-gavin) in [#12395](https://github.com/youzan/vant/pull/12395)
- chore: add vscode-common-intellisense to the Community Ecosystem by [@Simon-He95](https://github.com/Simon-He95) in [#12406](https://github.com/youzan/vant/pull/12406)
- docs(Signature): add resize method by [@chenjiahan](https://github.com/chenjiahan) in [#12411](https://github.com/youzan/vant/pull/12411)
- docs(progress): remove outdated resize method by [@chenjiahan](https://github.com/chenjiahan) in [#12412](https://github.com/youzan/vant/pull/12412)

#### Other Changes

- chore(Field): required label css will active when rules contain required by [@morance](https://github.com/morance) in [#12376](https://github.com/youzan/vant/pull/12376)
- test(ImagePreview): fix incorrect onClose test case by [@chenjiahan](https://github.com/chenjiahan) in [#12386](https://github.com/youzan/vant/pull/12386)
- chore: forked repo, skip CI running by [@yoyo837](https://github.com/yoyo837) in [#12410](https://github.com/youzan/vant/pull/12410)

#### New Contributors

- [@morance](https://github.com/morance) made their first contribution in [#12376](https://github.com/youzan/vant/pull/12376)
- [@mo9a7i](https://github.com/mo9a7i) made their first contribution in [#12381](https://github.com/youzan/vant/pull/12381)
- [@Alkaidcc](https://github.com/Alkaidcc) made their first contribution in [#12397](https://github.com/youzan/vant/pull/12397)
- [@johnsonwong666](https://github.com/johnsonwong666) made their first contribution in [#12385](https://github.com/youzan/vant/pull/12385)

### v4.7.2

`2023-10-15`

#### New Features 🎉

- feat(Icon): add font-family css var by [@JeremyFan](https://github.com/JeremyFan) in [#12354](https://github.com/youzan/vant/pull/12354)
- feat(ImagePreview): add doubleScale option by [@coderXMin](https://github.com/coderXMin) in [#12360](https://github.com/youzan/vant/pull/12360)

#### Bug Fixes 🐞

- fix(Icons): compatible with the browser range of Vant 2 by [@chenjiahan](https://github.com/chenjiahan) in [#12356](https://github.com/youzan/vant/pull/12356)
- fix(Uploader): multiple reupload only choose one & cancel chose problem by [@zhousg](https://github.com/zhousg) in [#12359](https://github.com/youzan/vant/pull/12359)

#### Other Changes

- refactor(Signature): avoid setting the canvas width and height in the next tick by [@inottn](https://github.com/inottn) in [#12347](https://github.com/youzan/vant/pull/12347)
- refactor(Signature): use scale method to enhance clarity by [@inottn](https://github.com/inottn) in [#12363](https://github.com/youzan/vant/pull/12363)
- chore(deps): bump rslog v1.1.0 by [@chenjiahan](https://github.com/chenjiahan) in [#12364](https://github.com/youzan/vant/pull/12364)
- chore(cli): merge greet logs by [@chenjiahan](https://github.com/chenjiahan) in [#12365](https://github.com/youzan/vant/pull/12365)
- chore(ImagePreview): rename doubleScale and add test case by [@chenjiahan](https://github.com/chenjiahan) in [#12366](https://github.com/youzan/vant/pull/12366)

#### New Contributors

- [@coderXMin](https://github.com/coderXMin) made their first contribution in [#12360](https://github.com/youzan/vant/pull/12360)

### v4.7.1

`2023-10-06`

#### New Features 🎉

- feat(FloatingPanel): optimize bounce animate by [@zhousg](https://github.com/zhousg) in [#12317](https://github.com/youzan/vant/pull/12317)
- feat(cli): using rslog by [@chenjiahan](https://github.com/chenjiahan) in [#12334](https://github.com/youzan/vant/pull/12334)
- style(Swipe): declare transition-property by [@chenjiahan](https://github.com/chenjiahan) in [#12336](https://github.com/youzan/vant/pull/12336)
- feat(Notify): add JSDoc for utility functions by [@chenjiahan](https://github.com/chenjiahan) in [#12342](https://github.com/youzan/vant/pull/12342)
- feat(Dialog): add JSDoc for utility functions by [@chenjiahan](https://github.com/chenjiahan) in [#12343](https://github.com/youzan/vant/pull/12343)
- feat(Toast): add JSDoc for utility functions by [@chenjiahan](https://github.com/chenjiahan) in [#12344](https://github.com/youzan/vant/pull/12344)

#### Bug Fixes 🐞

- fix(Popup): fix failed to inherit scopedId by [@chenjiahan](https://github.com/chenjiahan) in [#12327](https://github.com/youzan/vant/pull/12327)
- fix(CellGroup): failed to inherit scopeId with title by [@chenjiahan](https://github.com/chenjiahan) in [#12328](https://github.com/youzan/vant/pull/12328)
- fix(Popover): failed to inherit scopedId by [@chenjiahan](https://github.com/chenjiahan) in [#12329](https://github.com/youzan/vant/pull/12329)

#### Document 📖

- docs: fix typo in Form by [@zcvvvbb](https://github.com/zcvvvbb) in [#12322](https://github.com/youzan/vant/pull/12322)
- docs: add more ecosystem projects by [@chenjiahan](https://github.com/chenjiahan) in [#12338](https://github.com/youzan/vant/pull/12338)
- docs(ImagePreview): improve English document by [@chenjiahan](https://github.com/chenjiahan) in [#12345](https://github.com/youzan/vant/pull/12345)
- docs: mistypo Georqia to Georgia by [@mahnunchik](https://github.com/mahnunchik) in [#12331](https://github.com/youzan/vant/pull/12331)

#### Other Changes

- chore(Swipe): limit the decimal length of transform by [@chenjiahan](https://github.com/chenjiahan) in [#12337](https://github.com/youzan/vant/pull/12337)
- chore: bump pnpm v8.8.0 by [@chenjiahan](https://github.com/chenjiahan) in [#12339](https://github.com/youzan/vant/pull/12339)
- chore(deps): bump postcss from 8.4.27 to 8.4.31 by [@dependabot](https://github.com/dependabot) in [#12341](https://github.com/youzan/vant/pull/12341)

#### New Contributors

- [@zcvvvbb](https://github.com/zcvvvbb) made their first contribution in [#12322](https://github.com/youzan/vant/pull/12322)
- [@mahnunchik](https://github.com/mahnunchik) made their first contribution in [#12331](https://github.com/youzan/vant/pull/12331)

### v4.7.0

`2023-09-24`

#### 🍭 Icon Updates

- Icon: add new `user` icon
- Icon: add new `notes` icon
- Icon: add new `newspaper` icon
- Icon: add new `list-switch` icon
- Icon: add new `list-switching` icon
- Icon: add a filled `records` icon
- Icon: add a filled `contact` icon
- Icon: add a filled `discount` icon
- Icon: add a filled `completed` icon
- Icon: add a filled `description` icon
- Icon: add a filled `cash-back-record` icon
- Icon: rename the previous `records` icon to `records-o`
- Icon: rename the previous `contact` icon to `contact-o`
- Icon: rename the previous `discount` icon to `discount-o`
- Icon: rename the previous `completed` icon to `completed-o`
- Icon: rename the previous `description` icon to `description-o`
- Icon: rename the previous `cash-back-record` icon to `cash-back-record-o`

#### New Features 🎉

- feat(Calendar): add click-disabled-date event by [@LadyChatterleyLover](https://github.com/LadyChatterleyLover) in [#12274](https://github.com/youzan/vant/pull/12274)
- feat(Uploader): add --van-uploader-border-radius css variables by [@xieyezi](https://github.com/xieyezi) in [#12280](https://github.com/youzan/vant/pull/12280)
- feat(SwipeCell): fix triggered close by clickAway when in running beforeClose by [@nined9](https://github.com/nined9) in [#12309](https://github.com/youzan/vant/pull/12309)
- feat(AddressEdit): add change event for name and tel input by [@zhousg](https://github.com/zhousg) in [#12310](https://github.com/youzan/vant/pull/12310)
- types(Dialog): improve showDialog return type by [@chenjiahan](https://github.com/chenjiahan) in [#12316](https://github.com/youzan/vant/pull/12316)

#### Bug Fixes 🐞

- fix(Picker): fix bug the content of the popup window is not consistent with the Chinese version under the English version by [@lllomh](https://github.com/lllomh) in [#12300](https://github.com/youzan/vant/pull/12300)
- fix(Signature): fix checking if canvas is empty when backgroundColor is set by [@sywyyhykkk](https://github.com/sywyyhykkk) in [#12304](https://github.com/youzan/vant/pull/12304)
- fix(FloatingPanel): dragging down causes the page to move by [@zhousg](https://github.com/zhousg) in [#12314](https://github.com/youzan/vant/pull/12314)

#### Document 📖

- docs(Picker): improve picker document by [@MrXwq](https://github.com/MrXwq) in [#12275](https://github.com/youzan/vant/pull/12275)
- docs(Uploader): add FAQ about camera permission by [@chenjiahan](https://github.com/chenjiahan) in [#12289](https://github.com/youzan/vant/pull/12289)

#### Other Changes

- test(Dialog): enable function-call test cases by [@chenjiahan](https://github.com/chenjiahan) in [#12315](https://github.com/youzan/vant/pull/12315)
- fix(cli): allow missing build script when releasing by [@chenjiahan](https://github.com/chenjiahan) in [#12292](https://github.com/youzan/vant/pull/12292)

#### New Contributors

- [@nined9](https://github.com/nined9) made their first contribution in [#12309](https://github.com/youzan/vant/pull/12309)
- [@sywyyhykkk](https://github.com/sywyyhykkk) made their first contribution in [#12304](https://github.com/youzan/vant/pull/12304)

### v4.6.8

`2023-09-10`

#### New Features 🎉

- feat(Cell): add CSS vars to customize font size of the value by [@inottn](https://github.com/inottn) in [#12260](https://github.com/youzan/vant/pull/12260)
- feat(ConfigProvider): supplement the type declaration of ConfigProviderThemeVars by [@xieyezi](https://github.com/xieyezi) in [#12264](https://github.com/youzan/vant/pull/12264)
- feat(NavBar): add leftDisabled and rightDisabled prop by [@m-xlsea](https://github.com/m-xlsea) in [#12258](https://github.com/youzan/vant/pull/12258)

#### Bug Fixes 🐞

- fix(ConfigProvider): failed to set some basic theme vars by [@chenjiahan](https://github.com/chenjiahan) in [#12272](https://github.com/youzan/vant/pull/12272)
- fix(ConfigProvider): ConfigProviderThemeVars fontSizeXs hump by [@xieyezi](https://github.com/xieyezi) in [#12267](https://github.com/youzan/vant/pull/12267)

#### Document 📖

- docs(NavBar): add disable button demo by [@chenjiahan](https://github.com/chenjiahan) in [#12270](https://github.com/youzan/vant/pull/12270)

#### Other Changes

- chore(CI): enable single-commit to reduce the repo size by [@chenjiahan](https://github.com/chenjiahan) in [#12268](https://github.com/youzan/vant/pull/12268)
- chore(CI): bump actions version by [@chenjiahan](https://github.com/chenjiahan) in [#12269](https://github.com/youzan/vant/pull/12269)
- chore: move axure to vant-assets repo by [@chenjiahan](https://github.com/chenjiahan) in [#12271](https://github.com/youzan/vant/pull/12271)

#### New Contributors

- [@xieyezi](https://github.com/xieyezi) made their first contribution in [#12264](https://github.com/youzan/vant/pull/12264)
- [@m-xlsea](https://github.com/m-xlsea) made their first contribution in [#12258](https://github.com/youzan/vant/pull/12258)

### v4.6.7

`2023-09-04`

#### New Features 🎉

- feat(vant-use): add useRaf by [@Simon-He95](https://github.com/Simon-He95) in [#12211](https://github.com/youzan/vant/pull/12211)
- feat(Checkbox): add indeterminate status by [@wjw-gavin](https://github.com/wjw-gavin) in [#12216](https://github.com/youzan/vant/pull/12216)
- feat(auto-import-resolver): add auto-import-resolver package by [@wChenonly](https://github.com/wChenonly) in [#12227](https://github.com/youzan/vant/pull/12227)
- feat(ConfigProvider): add theme-vars-scope props enable root affects by [@zhousg](https://github.com/zhousg) in [#12240](https://github.com/youzan/vant/pull/12240)

#### Bug Fixes 🐞

- fix(auto-import-resolver): type mismatch in TS projects by [@chenjiahan](https://github.com/chenjiahan) in [#12243](https://github.com/youzan/vant/pull/12243)
- fix(eslint): using ignorePatterns to replace .eslintignore by [@MrXwq](https://github.com/MrXwq) in [#12237](https://github.com/youzan/vant/pull/12237)

#### Document 📖

- docs: improve the menu position of back-top by [@wjw-gavin](https://github.com/wjw-gavin) in [#12223](https://github.com/youzan/vant/pull/12223)
- docs: improve use-raf document by [@chenjiahan](https://github.com/chenjiahan) in [#12224](https://github.com/youzan/vant/pull/12224)
- docs: add Vite and Nuxt guide to quickstart by [@chenjiahan](https://github.com/chenjiahan) in [#12239](https://github.com/youzan/vant/pull/12239)
- docs(auto-import-resolver): update README and folder name by [@chenjiahan](https://github.com/chenjiahan) in [#12241](https://github.com/youzan/vant/pull/12241)
- docs(auto-import-resolver): add Rspack usage by [@chenjiahan](https://github.com/chenjiahan) in [#12242](https://github.com/youzan/vant/pull/12242)
- docs(ConfigProvider): update the guide of modify CSS vars by [@chenjiahan](https://github.com/chenjiahan) in [#12246](https://github.com/youzan/vant/pull/12246)

#### Other Changes

- test: migrate test runner to vitest by [@chenjiahan](https://github.com/chenjiahan) in [#12206](https://github.com/youzan/vant/pull/12206)
- chore(CI): fix codecov reporter by [@chenjiahan](https://github.com/chenjiahan) in [#12210](https://github.com/youzan/vant/pull/12210)
- chore: use workspace protocol for internal deps by [@chenjiahan](https://github.com/chenjiahan) in [#12225](https://github.com/youzan/vant/pull/12225)
- test: fix vitest canvas mock by [@chenjiahan](https://github.com/chenjiahan) in [#12226](https://github.com/youzan/vant/pull/12226)

### v4.6.6

`2023-08-20`

#### New Features 🎉

- feat(DropdownItem): supports boolean value in options by [@baboon-king](https://github.com/baboon-king) in [#12208](https://github.com/youzan/vant/pull/12208)

#### Bug Fixes 🐞

- fix(FloatingBubble): drag should not trigger click on child elements by [@zhousg](https://github.com/zhousg) in [#12201](https://github.com/youzan/vant/pull/12201)
- fix(FloatingBubble): does not update state while hidden by [@zhousg](https://github.com/zhousg) in [#12207](https://github.com/youzan/vant/pull/12207)

#### Other Changes

- chore(CI): update issue comment messages by [@chenjiahan](https://github.com/chenjiahan) in [#12204](https://github.com/youzan/vant/pull/12204)
- refactor(cli): remove execa dependency by [@chenjiahan](https://github.com/chenjiahan) in [#12205](https://github.com/youzan/vant/pull/12205)

### v4.6.5

`2023-08-16`

#### New Features 🎉

- feat(DropdownMenu): add swipe-threshold prop by [@inottn](https://github.com/inottn) in [#12117](https://github.com/youzan/vant/pull/12117)
- types(Toast): add `ToastWrapperInstance` export by [@long-woo](https://github.com/long-woo) in [#12166](https://github.com/youzan/vant/pull/12166)
- feat(FloatingBubble): use component attrs by [@zhousg](https://github.com/zhousg) in [#12171](https://github.com/youzan/vant/pull/12171)

#### Bug Fixes 🐞

- fix(FloatingPanel): Lag caused by scrollbar and panel movement #12146 by [@yue1123](https://github.com/yue1123) in [#12161](https://github.com/youzan/vant/pull/12161)
- fix(FloatingPanel): change the default value of lock-scroll to false by [@inottn](https://github.com/inottn) in [#12162](https://github.com/youzan/vant/pull/12162)
- fix(cli): should escape curly brackets in markdown by [@chenjiahan](https://github.com/chenjiahan) in [#12188](https://github.com/youzan/vant/pull/12188)

#### Document 📖

- docs: add instructions for bun package manager by [@colinhacks](https://github.com/colinhacks) in [#12182](https://github.com/youzan/vant/pull/12182)

#### Other Changes

- chore: add script to format GitHub changelog by [@chenjiahan](https://github.com/chenjiahan) in [#12158](https://github.com/youzan/vant/pull/12158)
- chore(FloatingPanel): improve code style by [@chenjiahan](https://github.com/chenjiahan) in [#12175](https://github.com/youzan/vant/pull/12175)
- refactor(cli): rewrite vite-plugin-md by [@chenjiahan](https://github.com/chenjiahan) in [#12179](https://github.com/youzan/vant/pull/12179)
- chore(deps): bump markdown-it v13 and commander v11 by [@chenjiahan](https://github.com/chenjiahan) in [#12180](https://github.com/youzan/vant/pull/12180)
- chore(CI): do not run codeql for pull request by [@chenjiahan](https://github.com/chenjiahan) in [#12181](https://github.com/youzan/vant/pull/12181)

#### New Contributors

- [@long-woo](https://github.com/long-woo) made their first contribution in [#12166](https://github.com/youzan/vant/pull/12166)
- [@yue1123](https://github.com/yue1123) made their first contribution in [#12161](https://github.com/youzan/vant/pull/12161)
- [@colinhacks](https://github.com/colinhacks) made their first contribution in [#12182](https://github.com/youzan/vant/pull/12182)
- [@xincheng-1999](https://github.com/xincheng-1999) made their first contribution in [#12189](https://github.com/youzan/vant/pull/12189)

### v4.6.4

`2023-08-06`

#### New Features 🎉

- feat(area-data): update counties of WuHu by [@nivin-studio](https://github.com/nivin-studio) in [#12122](https://github.com/youzan/vant/pull/12122)
- feat(Locale): add Serbian language to internationalization by [@RogerZXY](https://github.com/RogerZXY) in [#12145](https://github.com/youzan/vant/pull/12145)
- feat(ImagePreview): add closeOnClickOverlay option by [@chenjiahan](https://github.com/chenjiahan) in [#12153](https://github.com/youzan/vant/pull/12153)
- feat(List): add scroller prop by [@chenjiahan](https://github.com/chenjiahan) in [#12154](https://github.com/youzan/vant/pull/12154)
- feat(FloatingPanel): add lock-scroll prop by [@inottn](https://github.com/inottn) in [#12157](https://github.com/youzan/vant/pull/12157)

#### Bug Fixes 🐞

- fix(TextEllipsis): dots repeated by [@muzaisimao](https://github.com/muzaisimao) in [#12120](https://github.com/youzan/vant/pull/12120)
- fix(TextEllipsis): fix the logic of calculating the position of ellipsis by [@inottn](https://github.com/inottn) in [#12137](https://github.com/youzan/vant/pull/12137)

#### Document 📖

- docs: move PR title format to contribution guide by [@chenjiahan](https://github.com/chenjiahan) in [#12114](https://github.com/youzan/vant/pull/12114)
- docs(Radio): add document description for the css var '--van-radio-dot-size' by [@wjw-gavin](https://github.com/wjw-gavin) in [#12152](https://github.com/youzan/vant/pull/12152)

#### Other Changes

- chore: avoid prettier breaking hbs template by [@chenjiahan](https://github.com/chenjiahan) in [#12113](https://github.com/youzan/vant/pull/12113)
- chore(deps): bump release-it v16 by [@chenjiahan](https://github.com/chenjiahan) in [#12115](https://github.com/youzan/vant/pull/12115)
- feat(get-deps): import('../foo.vue') => import('../foo.mjs') 的替换 by [@suncohey](https://github.com/suncohey) in [#12046](https://github.com/youzan/vant/pull/12046)
- refactor(cli): rewrite release command by [@chenjiahan](https://github.com/chenjiahan) in [#12133](https://github.com/youzan/vant/pull/12133)
- feat(cli): support gitTag option for release command by [@chenjiahan](https://github.com/chenjiahan) in [#12134](https://github.com/youzan/vant/pull/12134)
- chore(CI): automatically generate changelog via GitHub by [@chenjiahan](https://github.com/chenjiahan) in [#12135](https://github.com/youzan/vant/pull/12135)
- chore: add PR labeler action by [@chenjiahan](https://github.com/chenjiahan) in [#12136](https://github.com/youzan/vant/pull/12136)
- chore(TextEllipsis): reuse actionText variable by [@chenjiahan](https://github.com/chenjiahan) in [#12138](https://github.com/youzan/vant/pull/12138)
- refactor(cli): use GitHub changelog instead of conventional-changelog by [@chenjiahan](https://github.com/chenjiahan) in [#12139](https://github.com/youzan/vant/pull/12139)
- chore: add Serbian to doc and rename the file by [@chenjiahan](https://github.com/chenjiahan) in [#12150](https://github.com/youzan/vant/pull/12150)
- chore(eslint-config): bump dependencies by [@chenjiahan](https://github.com/chenjiahan) in [#12155](https://github.com/youzan/vant/pull/12155)

#### New Contributors

- [@muzaisimao](https://github.com/muzaisimao) made their first contribution in [#12120](https://github.com/youzan/vant/pull/12120)
- [@suncohey](https://github.com/suncohey) made their first contribution in [#12046](https://github.com/youzan/vant/pull/12046)
- [@nivin-studio](https://github.com/nivin-studio) made their first contribution in [#12122](https://github.com/youzan/vant/pull/12122)
- [@RogerZXY](https://github.com/RogerZXY) made their first contribution in [#12145](https://github.com/youzan/vant/pull/12145)

### [v4.6.3](https://github.com/vant-ui/vant/compare/v4.6.2...v4.6.3)

`2023-07-23`

**Feature**

- AddressList: add show-add-button prop [#12090](https://github.com/vant-ui/vant/issues/12090)
- CheckboxGroup: add shape prop [#12092](https://github.com/vant-ui/vant/issues/12092)
- RadioGroup: add shape prop [#12092](https://github.com/vant-ui/vant/issues/12092)

**Bug Fixes**

- FloatingBubble: fix global component type [#12101](https://github.com/vant-ui/vant/issues/12101)
- Tab: fix incorrect import path [#12103](https://github.com/vant-ui/vant/issues/12103)

### [v4.6.2](https://github.com/vant-ui/vant/compare/v4.6.1...v4.6.2)

`2023-07-09`

**Feature**

- Field: add autocapitalize, autocorrect and spellcheck props [#12065](https://github.com/vant-ui/vant/issues/12065)
- FloatingBubble: add CSS vars to override border radius [#12070](https://github.com/vant-ui/vant/issues/12070)
- Radio: add dot shape [#12057](https://github.com/vant-ui/vant/issues/12057)
- TextEllipsis: add position prop, contributed by [cxybd](https://github.com/cxybd) ❤️ [#12058](https://github.com/vant-ui/vant/issues/12058)

**Bug Fixes**

- FloatingBubble: fix wrong value of boundary [#12067](https://github.com/vant-ui/vant/issues/12067)
- Pagination: display the border correctly [#12062](https://github.com/vant-ui/vant/issues/12062)

### [v4.6.1](https://github.com/vant-ui/vant/compare/v4.6.0...v4.6.1)

`2023-07-02`

**Feature**

- ellipsis: improve break lines of Chinese, Japanese, or Korean text [#12030](https://github.com/vant-ui/vant/issues/12030)

**Bug Fixes**

- FloatingBubble: floatingBubbleBackground type should be optional [#12029](https://github.com/vant-ui/vant/issues/12029)
- SubmitBar: remove redundant theme types [#12031](https://github.com/vant-ui/vant/issues/12031)
- Uploader: render objectUrl to avoid perf issue [#12051](https://github.com/vant-ui/vant/issues/12051)

### [v4.6.0](https://github.com/vant-ui/vant/compare/v4.5.0...v4.6.0)

`2023-06-24`

**New Component**

- add new FloatingBubble component, contributed by [@zhousg](https://github.com/zhousg) ❤️ [#11880](https://github.com/vant-ui/vant/issues/11880)
- add new RollingText component, contributed by [@cunzaizhuyi](https://github.com/cunzaizhuyi) ❤️ [#11911](https://github.com/vant-ui/vant/issues/11911)

**Feature**

- Rate: add clearable prop [#11969](https://github.com/vant-ui/vant/issues/11969)

**Bug Fixes**

- DropdownMenu: fix missing exported type [#11979](https://github.com/vant-ui/vant/issues/11979)
- Field: should not set `for` attr to label when using input slot [#11966](https://github.com/vant-ui/vant/issues/11966)
- FloatingPanel: fix missing floatingPanelProps export [#11978](https://github.com/vant-ui/vant/issues/11978)
- FloatingPanel: remove passive event warning [#11992](https://github.com/vant-ui/vant/issues/11992)
- Picker: optimize the animation effect of sliding multiple columns simultaneously [#11945](https://github.com/vant-ui/vant/issues/11945)
- Rate: should change value when half icon is touchmoved [#12002](https://github.com/vant-ui/vant/issues/12002)

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
