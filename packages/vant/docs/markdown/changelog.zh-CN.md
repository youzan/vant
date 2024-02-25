# 更新日志

### 提示

当前文档为 Vant 4 的更新日志，其他版本请参考：

- [Vant 2 更新日志](https://vant-ui.github.io/vant/v2/#/zh-CN/changelog)
- [Vant 3 更新日志](https://vant-ui.github.io/vant/v3/#/zh-CN/changelog)

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：通常每隔 1 ~ 2 周发布，包含新特性和问题修复。
- 次版本号：通常每隔 1 ~ 2 月发布，包含新组件或较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

## 更新内容

### v4.8.5

`2024-02-25`

#### 新功能 🎉

- feat(Image): 新增 `crossorigin` 和 `referrerpolicy` 属性 by [@Jungzl](https://github.com/Jungzl) in [#12641](https://github.com/youzan/vant/pull/12641)

#### Bug修复 🐞

- fix(NumberKeyboard): 当主题为自定义时正确渲染删除插槽 by [@TPORL](https://github.com/TPORL) in [#12624](https://github.com/youzan/vant/pull/12624)

#### 文档 📖

- docs: 更新与 Picker 事件相关的参数文档 by [@wjw-gavin](https://github.com/wjw-gavin) in [#12619](https://github.com/youzan/vant/pull/12619)
- docs(DatePicker): 修复英文文档错误 by [@wjw-gavin](https://github.com/wjw-gavin) in [#12620](https://github.com/youzan/vant/pull/12620)
- docs(Uploader): 修复丢失双引号问题 by [@nemo-shen](https://github.com/nemo-shen) in [#12627](https://github.com/youzan/vant/pull/12627)
- docs: 新增完整注册指南 by [@chenjiahan](https://github.com/chenjiahan) in [#12628](https://github.com/youzan/vant/pull/12628)
- docs: 新增Rsbuild按需引入指南 by [@chenjiahan](https://github.com/chenjiahan) in [#12629](https://github.com/youzan/vant/pull/12629)

#### 其他更改

- Revert "fix(DropdownMenu): 当传递对象字面量给title-class时修复递归更新问题 (#12614)" by [@inottn](https://github.com/inottn) in [#12617](https://github.com/youzan/vant/pull/12617)
- chore(deps): 提升 Rsbuild 至 v0.4 版本 by [@chenjiahan](https://github.com/chenjiahan) in [#12625](https://github.com/youzan/vant/pull/12625)
- chore(workflow): 设置 renovate 配置 by [@chenjiahan](https://github.com/chenjiahan) in [#12626](https://github.com/youzan/vant/pull/12626)
- test: 跳过图像 SSR 测试案例 by [@chenjiahan](https://github.com/chenjiahan) in [#12644](https://github.com/youzan/vant/pull/12644)

#### 新贡献者

- [@TPORL](https://github.com/TPORL) 在 [#12624](https://github.com/youzan/vant/pull/12624) 中首次贡献

### v4.8.4

`2024-02-03`

#### 新功能 🎉

- feat(Picker): 允许隐藏工具栏按钮 by [@chenjiahan](https://github.com/chenjiahan) in [#12599](https://github.com/youzan/vant/pull/12599)

#### 问题修复 🐞

- fix(Sticky): 初始黏贴位置 by [@nemo-shen](https://github.com/nemo-shen) in [#12601](https://github.com/youzan/vant/pull/12601)
- fix(DropdownMenu): 修复传递对象字面量到 title-class 时的递归更新问题 by [@inottn](https://github.com/inottn) in [#12614](https://github.com/youzan/vant/pull/12614)

#### 文档 📖

- docs: 改进快速启动提示 by [@inottn](https://github.com/inottn) in [#12606](https://github.com/youzan/vant/pull/12606)

#### 其他改变

- chore(deps): 升级 Rsbuild 至 0.3.9 by [@chenjiahan](https://github.com/chenjiahan) in [#12600](https://github.com/youzan/vant/pull/12600)
- chore: 避免工作流在 forked repo 上运行 by [@tolking](https://github.com/tolking) in [#12607](https://github.com/youzan/vant/pull/12607)
- chore(workflow): 使用新的 M1 macOS 运行器 by [@chenjiahan](https://github.com/chenjiahan) in [#12615](https://github.com/youzan/vant/pull/12615)

### v4.8.3

`2024-01-20`

#### 新功能 🎉

- feat(Notify): 添加 teleport 属性，由 [@inottn](https://github.com/inottn) 贡献于 [#12556](https://github.com/youzan/vant/pull/12556)
- feat(TextEllipsis): 添加 `action` 插槽，由 [@nemo-shen](https://github.com/nemo-shen) 贡献于 [#12560](https://github.com/youzan/vant/pull/12560)
- feat(ImagePreview): 添加 close-on-click-image 属性，由 [@inottn](https://github.com/inottn) 贡献于 [#12566](https://github.com/youzan/vant/pull/12566)
- feat(icons): 添加图标 `arrow-double-left` 和 `arrow-double-right`，由 [@nemo-shen](https://github.com/nemo-shen) 贡献于 [#12579](https://github.com/youzan/vant/pull/12579)
- feat(Toast): 添加 z-index 属性，由 [@inottn](https://github.com/inottn) 贡献于 [#12587](https://github.com/youzan/vant/pull/12587)

#### 问题修复 🐞

- fix(Tab): 带 sticky 属性的标签页在切换后丢失 'fixed' 类名，由 [@nemo-shen](https://github.com/nemo-shen) 贡献于 [#12547](https://github.com/youzan/vant/pull/12547)
- fix(Image): 之前未导出 ImagePosition 类型，由 [@Jungzl](https://github.com/Jungzl) 贡献于 [#12549](https://github.com/youzan/vant/pull/12549)
- fix(Tabs): 将 van-border-radius-sm 更改为 van-radius-sm，由 [@edram](https://github.com/edram) 贡献于 [#12576](https://github.com/youzan/vant/pull/12576)

#### 文档更新 📖

- docs(Lazyload): 修复 preLoad 类型错误和拼写错误，由 [@RSS1102](https://github.com/RSS1102) 贡献于 [#12554](https://github.com/youzan/vant/pull/12554)
- docs(home): 更新标题层级，由 [@inottn](https://github.com/inottn) 贡献于 [#12577](https://github.com/youzan/vant/pull/12577)

#### 其他变更

- test: 将 vitest 升级到 v1.1.3，由 [@inottn](https://github.com/inottn) 贡献于 [#12546](https://github.com/youzan/vant/pull/12546)
- chore(deps): 将 Rsbuild 升级到 v0.3.2，由 [@chenjiahan](https://github.com/chenjiahan) 贡献于 [#12565](https://github.com/youzan/vant/pull/12565)
- chore(deps): 将 vue 升级到 v3.4.13，由 [@inottn](https://github.com/inottn) 贡献于 [#12567](https://github.com/youzan/vant/pull/12567)
- chore(deps): 将 vite 从 5.0.11 升级到 5.0.12，由 [@dependabot](https://github.com/dependabot) 贡献于 [#12588](https://github.com/youzan/vant/pull/12588)

#### 新贡献者

- [@edram](https://github.com/edram) 在 [#12576](https://github.com/youzan/vant/pull/12576) 中首次贡献

### v4.8.2

`2024-01-03`

#### 新功能 🎉

- feat: 支持从 shadow DOM 中链接 CSS [@yoyo837](https://github.com/yoyo837) 在 [#12526](https://github.com/youzan/vant/pull/12526)
- feat(DropdownMenu): 新增 auto-locate 属性 [@inottn](https://github.com/inottn) 在 [#12251](https://github.com/youzan/vant/pull/12251)

#### 性能提升 🚀

- perf(CLI): 提升 markdown 编译性能 [@chenjiahan](https://github.com/chenjiahan) 在 [#12541](https://github.com/youzan/vant/pull/12541)

#### Bug 修复 🐞

- fix(ci): 在 Windows 上修复 eslint [@Jungzl](https://github.com/Jungzl) 在 [#12516](https://github.com/youzan/vant/pull/12516)
- fix(ImagePreview): 在某些情况下双倍缩放和点击遮罩关闭可能无法工作 [@inottn](https://github.com/inottn) 在 [#12521](https://github.com/youzan/vant/pull/12521)

#### 其他更改

- chore(deps): 升级 Rsbuild 至 v0.2.8 [@chenjiahan](https://github.com/chenjiahan) 在 [#12519](https://github.com/youzan/vant/pull/12519)
- chore(deps): 升级 Vue 至 3.4.0-beta.4 [@chenjiahan](https://github.com/chenjiahan) 在 [#12520](https://github.com/youzan/vant/pull/12520)
- test: 升级 vitest 至 v1.1.0 [@chenjiahan](https://github.com/chenjiahan) 在 [#12522](https://github.com/youzan/vant/pull/12522)
- chore(deps): 升级 vite 至 v5 [@chenjiahan](https://github.com/chenjiahan) 在 [#12523](https://github.com/youzan/vant/pull/12523)
- chore(deps): 升级 esbuild 至 v0.19 [@chenjiahan](https://github.com/chenjiahan) 在 [#12524](https://github.com/youzan/vant/pull/12524)
- chore: 锁定 Rspack 至 v0.4.3 以修复 CSS 问题 [@chenjiahan](https://github.com/chenjiahan) 在 [#12525](https://github.com/youzan/vant/pull/12525)
- chore(workflow): 调整问题模板 [@chenjiahan](https://github.com/chenjiahan) 在 [#12528](https://github.com/youzan/vant/pull/12528)
- chore(workflow): 更新 codesandbox 链接 [@chenjiahan](https://github.com/chenjiahan) 在 [#12529](https://github.com/youzan/vant/pull/12529)
- chore: 更新 vitest 配置 [@inottn](https://github.com/inottn) 在 [#12530](https://github.com/youzan/vant/pull/12530)
- chore(deps): 升级 Rsbuild 和 Vue [@chenjiahan](https://github.com/chenjiahan) 在 [#12532](https://github.com/youzan/vant/pull/12532)
- chore(ImagePreview): 重用 isTap 引用 [@inottn](https://github.com/inottn) 在 [#12536](https://github.com/youzan/vant/pull/12536)
- test(Toast): 减少测试运行时间 [@inottn](https://github.com/inottn) 在 [#12538](https://github.com/youzan/vant/pull/12538)
- test(FloatingBubble): 减少测试运行时间 [@inottn](https://github.com/inottn) 在 [#12539](https://github.com/youzan/vant/pull/12539)
- release: 发布 vant v4.8.2 [@chenjiahan](https://github.com/chenjiahan) 在 [#12542](https://github.com/youzan/vant/pull/12542)

### v4.8.1

`2023-12-17`

#### 新功能 🎉

- perf(TextEllipsis): 重用 windowWidth 以避免重复计算 by [@inottn](https://github.com/inottn) in [#12471](https://github.com/youzan/vant/pull/12471)
- feat(TextEllipsis): 添加 toggle 实例方法 by [@wjw-gavin](https://github.com/wjw-gavin) in [#12472](https://github.com/youzan/vant/pull/12472)
- feat(cli): 升级 Rsbuild 到 v0.2.2 by [@chenjiahan](https://github.com/chenjiahan) in [#12502](https://github.com/youzan/vant/pull/12502)

#### 性能优化 🚀

- perf(cli): 禁用 source map 以加快编译速度 by [@chenjiahan](https://github.com/chenjiahan) in [#12484](https://github.com/youzan/vant/pull/12484)

#### Bug 修复 🐞

- fix(cli): 在模板中删除未使用的脚本 by [@chenjiahan](https://github.com/chenjiahan) in [#12482](https://github.com/youzan/vant/pull/12482)
- fix(TextEllipsis): 修复 toggle 的缺少参数 by [@wjw-gavin](https://github.com/wjw-gavin) in [#12483](https://github.com/youzan/vant/pull/12483)

#### 文档 📖

- docs(collapse): 修复缺少的引用标签 by [@RSS1102](https://github.com/RSS1102) in [#12460](https://github.com/youzan/vant/pull/12460)
- docs(collapse): 修复翻译错误 by [@RSS1102](https://github.com/RSS1102) in [#12464](https://github.com/youzan/vant/pull/12464)
- docs(dialog): 修复翻译错误并保持示例代码不变 by [@RSS1102](https://github.com/RSS1102) in [#12465](https://github.com/youzan/vant/pull/12465)
- docs(TreeSelect): 修正变量名 by [@inottn](https://github.com/inottn) in [#12469](https://github.com/youzan/vant/pull/12469)
- docs: 添加 Rsbuild 脚手架指南 by [@chenjiahan](https://github.com/chenjiahan) in [#12475](https://github.com/youzan/vant/pull/12475)
- docs(image-preview): 补充 className 的使用方法 by [@RSS1102](https://github.com/RSS1102) in [#12491](https://github.com/youzan/vant/pull/12491)
- docs(Quickstart): 更新 unplugin-vue-components 的使用方法 (#12499) by [@wChenonly](https://github.com/wChenonly) in [#12500](https://github.com/youzan/vant/pull/12500)

#### 其他变更

- chore(workflow): 为 PR 添加 perf 标签 by [@chenjiahan](https://github.com/chenjiahan) in [#12473](https://github.com/youzan/vant/pull/12473)
- refactor(CLI): 整合 Rsbuild 以构建网站 by [@chenjiahan](https://github.com/chenjiahan) in [#12481](https://github.com/youzan/vant/pull/12481)
- chore: 升级 Rspack 到 0.4.2 以修复中文路径问题 by [@chenjiahan](https://github.com/chenjiahan) in [#12496](https://github.com/youzan/vant/pull/12496)
- chore(deps): 从 4.4.9 升级 vite 到 4.4.12 by [@dependabot](https://github.com/dependabot) in [#12493](https://github.com/youzan/vant/pull/12493)

#### 新贡献者

- [@RSS1102](https://github.com/RSS1102) 在 [#12460](https://github.com/youzan/vant/pull/12460) 中作出了他们的首次贡献

### v4.8.0

`2023-11-19`

#### 新组件 🎉

- 新增 Highlight 组件，由 [@wjw-gavin](https://github.com/wjw-gavin) 和 [@inottn](https://github.com/inottn) 贡献 ❤️ [#12434](https://github.com/youzan/vant/pull/12434)

#### 新功能

- feat(ImagePreview): 由 [@inottn](https://github.com/inottn) 在 [#12426](https://github.com/youzan/vant/pull/12426) 中增加 resetScale 方法
- feat(Checker): 由 [@inottn](https://github.com/inottn) 在 [#12436](https://github.com/youzan/vant/pull/12436) 中向默认插槽添加 checked 和 disabled 参数
- feat(Row): 由 [@cc-hearts](https://github.com/cc-hearts) 在 [#12439](https://github.com/youzan/vant/pull/12439) 中支持 gutter 垂直间距

#### Bug 修复 🐞

- fix(Calendar): 由 [@cc-hearts](https://github.com/cc-hearts) 在 [#12425](https://github.com/youzan/vant/pull/12425) 中支持副标题的响应式

#### 文档 📖

- docs(field): 由 [@Simon-He95](https://github.com/Simon-He95) 在 [#12429](https://github.com/youzan/vant/pull/12429) 中更新 props size
- docs(cell): 由 [@Simon-He95](https://github.com/Simon-He95) 在 [#12427](https://github.com/youzan/vant/pull/12427) 中更新 props size
- docs(Highlight): 由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12438](https://github.com/youzan/vant/pull/12438) 中添加版本提示
- docs(Overlay): 由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12454](https://github.com/youzan/vant/pull/12454) 中添加设置 z-index 的演示
- docs: 由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12455](https://github.com/youzan/vant/pull/12455) 中将 Rsbuild 添加到快速入门指南

#### 其他变更

- chore(deps): 由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12414](https://github.com/youzan/vant/pull/12414) 中修复了 babel 和 postcss 的安全警报

#### 新贡献者

- [@cc-hearts](https://github.com/cc-hearts) 在 [#12425](https://github.com/youzan/vant/pull/12425) 中进行了首次贡献

### v4.7.3

`2023-10-29`

#### 新功能 🎉

- feat(locale): 添加阿拉伯语本地化支持 by [@mo9a7i](https://github.com/mo9a7i) in [#12381](https://github.com/youzan/vant/pull/12381)
- feat(Form): 添加 required 属性并支持自动显示 by [@chenjiahan](https://github.com/chenjiahan) in [#12380](https://github.com/youzan/vant/pull/12380)
- feat(auto-import-resolver): 添加模块选项 by [@chenjiahan](https://github.com/chenjiahan) in [#12383](https://github.com/youzan/vant/pull/12383)
- style: 使用 overflow-wrap 替换 word-break by [@wjw-gavin](https://github.com/wjw-gavin) in [#12396](https://github.com/youzan/vant/pull/12396)
- feat(Tab): 添加 show-header 属性 by [@yoyo837](https://github.com/yoyo837) in [#12394](https://github.com/youzan/vant/pull/12394)
- style(Search): 在显示错误消息时使用一致的内边距 by [@chenjiahan](https://github.com/chenjiahan) in [#12409](https://github.com/youzan/vant/pull/12409)
- feat(Signature): 公开 resize 方法 by [@inottn](https://github.com/inottn) in [#12405](https://github.com/youzan/vant/pull/12405)

#### Bug 修复 🐞

- fix(ConfigProvider): 导出丢失的主题变量 by [@inottn](https://github.com/inottn) in [#12371](https://github.com/youzan/vant/pull/12371)
- fix(AddressEdit): 当 showArea 为 false 时区域字段验证错误 by [@zhousg](https://github.com/zhousg) in [#12393](https://github.com/youzan/vant/pull/12393)
- fix([@vant](https://github.com/vant)/area-data): 添加导出类型 by @Alkaidcc in [#12397](https://github.com/youzan/vant/pull/12397)
- fix(Search): 修复显示错误消息时的搜索样式问题 by [@johnsonwong666](https://github.com/johnsonwong666) in [#12385](https://github.com/youzan/vant/pull/12385)
- fix(PickerGroup): 仅过滤 Comment vnode by [@zhousg](https://github.com/zhousg) in [#12402](https://github.com/youzan/vant/pull/12402)

#### 文档 📖

- docs(auto-import-resolver): 添加 importStyle 选项的文档 by [@chenjiahan](https://github.com/chenjiahan) in [#12382](https://github.com/youzan/vant/pull/12382)
- docs(Tab): 保持文档和示例的一致性 by [@wjw-gavin](https://github.com/wjw-gavin) in [#12395](https://github.com/youzan/vant/pull/12395)
- chore: 将 vscode-common-intellisense 添加到社区生态系统中 by [@Simon-He95](https://github.com/Simon-He95) in [#12406](https://github.com/youzan/vant/pull/12406)
- docs(Signature): 添加 resize 方法 by [@chenjiahan](https://github.com/chenjiahan) in [#12411](https://github.com/youzan/vant/pull/12411)
- docs(progress): 移除过时的 resize 方法 by [@chenjiahan](https://github.com/chenjiahan) in [#12412](https://github.com/youzan/vant/pull/12412)

#### 其他变更

- chore(Field): 当 rules 包含 required 时，必填标签的 CSS 将生效 by [@morance](https://github.com/morance) in [#12376](https://github.com/youzan/vant/pull/12376)
- test(ImagePreview): 修复不正确的 onClose 测试用例 by [@chenjiahan](https://github.com/chenjiahan) in [#12386](https://github.com/youzan/vant/pull/12386)
- chore: forked 仓库，跳过 CI 运行 by [@yoyo837](https://github.com/yoyo837) in [#12410](https://github.com/youzan/vant/pull/12410)

#### 新贡献者

- [@morance](https://github.com/morance) 在 [#12376](https://github.com/youzan/vant/pull/12376) 中进行了首次贡献
- [@mo9a7i](https://github.com/mo9a7i) 在 [#12381](https://github.com/youzan/vant/pull/12381) 中进行了首次贡献
- [@Alkaidcc](https://github.com/Alkaidcc) 在 [#12397](https://github.com/youzan/vant/pull/12397) 中进行了首次贡献
- [@johnsonwong666](https://github.com/johnsonwong666) 在 [#12385](https://github.com/youzan/vant/pull/12385) 中进行了首次贡献

### v4.7.2

`2023-10-15`

#### 新功能 🎉

- feat(Icon): 添加 font-family CSS 变量，由 [@JeremyFan](https://github.com/JeremyFan) 在 [#12354](https://github.com/youzan/vant/pull/12354) 中贡献
- feat(ImagePreview): 添加 doubleScale 选项，由 [@coderXMin](https://github.com/coderXMin) 在 [#12360](https://github.com/youzan/vant/pull/12360) 中贡献

#### Bug 修复 🐞

- fix(Icons): 使图标与 Vant 2 的浏览器范围兼容，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12356](https://github.com/youzan/vant/pull/12356) 中贡献
- fix(Uploader): 修复了多次重新上传只选择一个以及取消选择的问题，由 [@zhousg](https://github.com/zhousg) 在 [#12359](https://github.com/youzan/vant/pull/12359) 中贡献

#### 其他更改

- refactor(Signature): 避免在下一个 tick 中设置 canvas 的宽度和高度，由 [@inottn](https://github.com/inottn) 在 [#12347](https://github.com/youzan/vant/pull/12347) 中贡献
- refactor(Signature): 使用 scale 方法提高清晰度，由 [@inottn](https://github.com/inottn) 在 [#12363](https://github.com/youzan/vant/pull/12363) 中贡献
- chore(deps): 将 rslog 版本提升至 v1.1.0，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12364](https://github.com/youzan/vant/pull/12364) 中贡献
- chore(cli): 合并欢迎日志，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12365](https://github.com/youzan/vant/pull/12365) 中贡献
- chore(ImagePreview): 重命名 doubleScale 并添加测试用例，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12366](https://github.com/youzan/vant/pull/12366) 中贡献

#### 新贡献者

- [@coderXMin](https://github.com/coderXMin) 在 [#12360](https://github.com/youzan/vant/pull/12360) 中进行了他的首次贡献

### v4.7.1

`2023-10-06`

#### 新功能 🎉

- feat(FloatingPanel): 优化弹跳动画，由 [@zhousg](https://github.com/zhousg) 在 [#12317](https://github.com/youzan/vant/pull/12317) 中贡献
- feat(cli): 使用 rslog，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12334](https://github.com/youzan/vant/pull/12334) 中贡献
- style(Swipe): 声明 `transition-property` 样式，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12336](https://github.com/youzan/vant/pull/12336) 中贡献
- feat(Notify): 为辅助函数添加 JSDoc，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12342](https://github.com/youzan/vant/pull/12342) 中贡献
- feat(Dialog): 为辅助函数添加 JSDoc，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12343](https://github.com/youzan/vant/pull/12343) 中贡献
- feat(Toast): 为辅助函数添加 JSDoc，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12344](https://github.com/youzan/vant/pull/12344) 中贡献

#### Bug 修复 🐞

- fix(Popup): 修复无法继承 scopedId 的问题，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12327](https://github.com/youzan/vant/pull/12327) 中贡献
- fix(CellGroup): 修复带有标题时无法继承 scopeId 的问题，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12328](https://github.com/youzan/vant/pull/12328) 中贡献
- fix(Popover): 修复无法继承 scopedId 的问题，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12329](https://github.com/youzan/vant/pull/12329) 中贡献

#### 文档 📖

- docs: 修复 Form 中的拼写错误，由 [@zcvvvbb](https://github.com/zcvvvbb) 在 [#12322](https://github.com/youzan/vant/pull/12322) 中贡献
- docs: 添加更多生态项目，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12338](https://github.com/youzan/vant/pull/12338) 中贡献
- docs(ImagePreview): 改进英文文档，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12345](https://github.com/youzan/vant/pull/12345) 中贡献
- docs: 修复将 Georqia 错误拼写为 Georgia 的问题，由 [@mahnunchik](https://github.com/mahnunchik) 在 [#12331](https://github.com/youzan/vant/pull/12331) 中贡献

#### 其他变更

- chore(Swipe): 限制 transform 的小数位数，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12337](https://github.com/youzan/vant/pull/12337) 中贡献
- chore: 升级 pnpm 到 v8.8.0，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12339](https://github.com/youzan/vant/pull/12339) 中贡献
- chore(deps): 将 postcss 从 8.4.27 升级到 8.4.31，由 [@dependabot](https://github.com/dependabot) 在 [#12341](https://github.com/youzan/vant/pull/12341) 中贡献

#### 新贡献者

- [@zcvvvbb](https://github.com/zcvvvbb) 在 [#12322](https://github.com/youzan/vant/pull/12322) 中首次贡献
- [@mahnunchik](https://github.com/mahnunchik) 在 [#12331](https://github.com/youzan/vant/pull/12331) 中首次贡献

### v4.7.0

`2023-09-24`

#### 🍭 图标更新

- 图标：添加一个实底的 `records` 图标
- 图标：添加一个实底的 `contact` 图标
- 图标：添加一个实底的 `discount` 图标
- 图标：添加一个实底的 `completed` 图标
- 图标：添加一个实底的 `description` 图标
- 图标：添加一个实底的 `cash-back-record` 图标
- 图标：添加新的 `user` 图标
- 图标：添加新的 `notes` 图标
- 图标：添加新的 `newspaper` 图标
- 图标：添加新的 `list-switch` 图标
- 图标：添加新的 `list-switching` 图标
- 图标：将以前的 `records` 图标重命名为 `records-o`
- 图标：将以前的 `contact` 图标重命名为 `contact-o`
- 图标：将以前的 `discount` 图标重命名为 `discount-o`
- 图标：将以前的 `completed` 图标重命名为 `completed-o`
- 图标：将以前的 `description` 图标重命名为 `description-o`
- 图标：将以前的 `cash-back-record` 图标重命名为 `cash-back-record-o`

#### 新功能 🎉

- feat(Calendar): 由 [@LadyChatterleyLover](https://github.com/LadyChatterleyLover) 在 [#12274](https://github.com/youzan/vant/pull/12274) 中添加了 `click-disabled-date` 事件
- feat(Uploader): 由 [@xieyezi](https://github.com/xieyezi) 在 [#12280](https://github.com/youzan/vant/pull/12280) 中添加了 `--van-uploader-border-radius` CSS 变量
- feat(SwipeCell): 由 [@nined9](https://github.com/nined9) 在 [#12309](https://github.com/youzan/vant/pull/12309) 中修复了运行 `beforeClose` 时点击外部触发关闭的问题
- feat(AddressEdit): 由 [@zhousg](https://github.com/zhousg) 在 [#12310](https://github.com/youzan/vant/pull/12310) 中为姓名和电话输入添加了 `change` 事件
- types(Dialog): 由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12316](https://github.com/youzan/vant/pull/12316) 中改进了 `showDialog` 的返回类型

#### Bug 修复 🐞

- fix(Picker): 由 [@lllomh](https://github.com/lllomh) 在 [#12300](https://github.com/youzan/vant/pull/12300) 中修复了弹出窗口的内容与中文版本不一致的问题
- fix(Signature): 由 [@sywyyhykkk](https://github.com/sywyyhykkk) 在 [#12304](https://github.com/youzan/vant/pull/12304) 中修复了当设置了背景颜色时检查画布是否为空的问题
- fix(FloatingPanel): 由 [@zhousg](https://github.com/zhousg) 在 [#12314](https://github.com/youzan/vant/pull/12314) 中修复了向下拖动导致页面移动的问题

#### 文档 📖

- docs(Picker): 由 [@MrXwq](https://github.com/MrXwq) 在 [#12275](https://github.com/youzan/vant/pull/12275) 中改进了 Picker 的文档
- docs(Uploader): 由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12289](https://github.com/youzan/vant/pull/12289) 中添加了有关相机权限的常见问题解答

#### 其他变更

- test(Dialog): 由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12315](https://github.com/youzan/vant/pull/12315) 中启用了函数调用测试用例
- fix(cli): 由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12292](https://github.com/youzan/vant/pull/12292) 中允许在发布时缺少构建脚本

#### 新贡献者

- [@nined9](https://github.com/nined9) 在 [#12309](https://github.com/youzan/vant/pull/12309) 中进行了首次贡献
- [@sywyyhykkk](https://github.com/sywyyhykkk) 在 [#12304](https://github.com/youzan/vant/pull/12304) 中进行了首次贡献

### v4.6.8

`2023-09-10`

#### 新功能 🎉

- feat(Cell): 添加 CSS 变量用于自定义 Value 的字体大小 by [@inottn](https://github.com/inottn) in [#12260](https://github.com/youzan/vant/pull/12260)
- feat(ConfigProvider): 补充 ConfigProviderThemeVars 的类型声明 by [@xieyezi](https://github.com/xieyezi) in [#12264](https://github.com/youzan/vant/pull/12264)
- feat(NavBar): 添加 leftDisabled 和 rightDisabled 属性 by [@m-xlsea](https://github.com/m-xlsea) in [#12258](https://github.com/youzan/vant/pull/12258)

#### Bug 修复 🐞

- fix(ConfigProvider): 修复设置某些基础主题变量失败的问题 by [@chenjiahan](https://github.com/chenjiahan) in [#12272](https://github.com/youzan/vant/pull/12272)
- fix(ConfigProvider): 修复 ConfigProviderThemeVars 的 fontSizeXs 命名错误 by [@xieyezi](https://github.com/xieyezi) in [#12267](https://github.com/youzan/vant/pull/12267)

#### 文档 📖

- docs(NavBar): 添加禁用按钮示例 by [@chenjiahan](https://github.com/chenjiahan) in [#12270](https://github.com/youzan/vant/pull/12270)

#### 其他变更

- chore(CI): 启用单一提交以减小仓库大小 by [@chenjiahan](https://github.com/chenjiahan) in [#12268](https://github.com/youzan/vant/pull/12268)
- chore(CI): 升级 actions 版本 by [@chenjiahan](https://github.com/chenjiahan) in [#12269](https://github.com/youzan/vant/pull/12269)
- chore: 将 Axure 文件移动到 vant-assets 仓库 by [@chenjiahan](https://github.com/chenjiahan) in [#12271](https://github.com/youzan/vant/pull/12271)

#### 新贡献者

- [@xieyezi](https://github.com/xieyezi) 在 [#12264](https://github.com/youzan/vant/pull/12264) 中首次贡献
- [@m-xlsea](https://github.com/m-xlsea) 在 [#12258](https://github.com/youzan/vant/pull/12258) 中首次贡献

### v4.6.7

`2023-09-04`

#### 新功能 🎉

- feat(vant-use): 添加 useRaf，由 [@Simon-He95](https://github.com/Simon-He95) 在 [#12211](https://github.com/youzan/vant/pull/12211) 中贡献
- feat(Checkbox): 添加不确定状态，由 [@wjw-gavin](https://github.com/wjw-gavin) 在 [#12216](https://github.com/youzan/vant/pull/12216) 中贡献
- feat(auto-import-resolver): 添加 auto-import-resolver 包，由 [@wChenonly](https://github.com/wChenonly) 在 [#12227](https://github.com/youzan/vant/pull/12227) 中贡献
- feat(ConfigProvider): 添加 theme-vars-scope 属性以启用根作用域影响，由 [@zhousg](https://github.com/zhousg) 在 [#12240](https://github.com/youzan/vant/pull/12240) 中贡献

#### 问题修复 🐞

- fix(auto-import-resolver): 修复 TS 项目中的类型不匹配问题，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12243](https://github.com/youzan/vant/pull/12243) 中贡献
- fix(eslint): 使用 ignorePatterns 替代 .eslintignore，由 [@MrXwq](https://github.com/MrXwq) 在 [#12237](https://github.com/youzan/vant/pull/12237) 中贡献

#### 文档 📖

- docs: 改善 back-top 的菜单位置，由 [@wjw-gavin](https://github.com/wjw-gavin) 在 [#12223](https://github.com/youzan/vant/pull/12223) 中贡献
- docs: 改善 use-raf 文档，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12224](https://github.com/youzan/vant/pull/12224) 中贡献
- docs: 在快速入门指南中添加 Vite 和 Nuxt 的指引，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12239](https://github.com/youzan/vant/pull/12239) 中贡献
- docs(auto-import-resolver): 更新 README 和文件夹名称，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12241](https://github.com/youzan/vant/pull/12241) 中贡献
- docs(auto-import-resolver): 添加 Rspack 的使用方法，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12242](https://github.com/youzan/vant/pull/12242) 中贡献
- docs(ConfigProvider): 更新修改 CSS 变量的指南，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12246](https://github.com/youzan/vant/pull/12246) 中贡献

#### 其他变更

- test: 将测试运行器迁移到 vitest，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12206](https://github.com/youzan/vant/pull/12206) 中贡献
- chore(CI): 修复 codecov 报告器，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12210](https://github.com/youzan/vant/pull/12210) 中贡献
- chore: 对内部依赖使用 workspace 协议，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12225](https://github.com/youzan/vant/pull/12225) 中贡献
- test: 修复 vitest 的 canvas 模拟，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12226](https://github.com/youzan/vant/pull/12226) 中贡献

### v4.6.6

`2023-08-20`

#### 新功能 🎉

- feat(DropdownItem): 支持在 options 的 value 中传入布尔值 by [@baboon-king](https://github.com/baboon-king) in [#12208](https://github.com/youzan/vant/pull/12208)

#### Bug 修复 🐞

- fix(FloatingBubble): 拖动时不应触发子元素的点击事件 by [@zhousg](https://github.com/zhousg) in [#12201](https://github.com/youzan/vant/pull/12201)
- fix(FloatingBubble): 隐藏时不更新状态 by [@zhousg](https://github.com/zhousg) in [#12207](https://github.com/youzan/vant/pull/12207)

#### 其他变更

- chore(CI): 更新 issue 评论消息的内容 by [@chenjiahan](https://github.com/chenjiahan) in [#12204](https://github.com/youzan/vant/pull/12204)
- refactor(cli): 移除 execa 依赖 by [@chenjiahan](https://github.com/chenjiahan) in [#12205](https://github.com/youzan/vant/pull/12205)

### v4.6.5

`2023-08-16`

#### 新功能 🎉

- feat(DropdownMenu): 添加 swipe-threshold 属性 by [@inottn](https://github.com/inottn) in [#12117](https://github.com/youzan/vant/pull/12117)
- types(Toast): 添加 `ToastWrapperInstance` 导出 by [@long-woo](https://github.com/long-woo) in [#12166](https://github.com/youzan/vant/pull/12166)
- feat(FloatingBubble): 使用组件属性 by [@zhousg](https://github.com/zhousg) in [#12171](https://github.com/youzan/vant/pull/12171)

#### Bug 修复 🐞

- fix(FloatingPanel): 修复由滚动条和面板移动引起的延迟问题 #12146 by [@yue1123](https://github.com/yue1123) in [#12161](https://github.com/youzan/vant/pull/12161)
- fix(FloatingPanel): 将 lock-scroll 的默认值更改为 false by [@inottn](https://github.com/inottn) in [#12162](https://github.com/youzan/vant/pull/12162)
- fix(cli): 在 markdown 中应该转义花括号 by [@chenjiahan](https://github.com/chenjiahan) in [#12188](https://github.com/youzan/vant/pull/12188)

#### 文档 📖

- docs: 添加 bun 包管理器的说明 by [@colinhacks](https://github.com/colinhacks) in [#12182](https://github.com/youzan/vant/pull/12182)

#### 其他变更

- chore: 添加脚本以格式化 GitHub 更新日志 by [@chenjiahan](https://github.com/chenjiahan) in [#12158](https://github.com/youzan/vant/pull/12158)
- chore(FloatingPanel): 改进代码风格 by [@chenjiahan](https://github.com/chenjiahan) in [#12175](https://github.com/youzan/vant/pull/12175)
- refactor(cli): 重写 vite-plugin-md by [@chenjiahan](https://github.com/chenjiahan) in [#12179](https://github.com/youzan/vant/pull/12179)
- chore(deps): 升级 markdown-it 到 v13 和 commander 到 v11 by [@chenjiahan](https://github.com/chenjiahan) in [#12180](https://github.com/youzan/vant/pull/12180)
- chore(CI): 不在拉取请求中运行 codeql by [@chenjiahan](https://github.com/chenjiahan) in [#12181](https://github.com/youzan/vant/pull/12181)

#### 新贡献者

- [@long-woo](https://github.com/long-woo) 在 [#12166](https://github.com/youzan/vant/pull/12166) 中进行了首次贡献
- [@yue1123](https://github.com/yue1123) 在 [#12161](https://github.com/youzan/vant/pull/12161) 中进行了首次贡献
- [@colinhacks](https://github.com/colinhacks) 在 [#12182](https://github.com/youzan/vant/pull/12182) 中进行了首次贡献
- [@xincheng-1999](https://github.com/xincheng-1999) 在 [#12189](https://github.com/youzan/vant/pull/12189) 中进行了首次贡献

### v4.6.4

`2023-08-06`

#### 新功能 🎉

- feat(area-data): 更新芜湖的县区数据，由 [@nivin-studio](https://github.com/nivin-studio) 在 [#12122](https://github.com/youzan/vant/pull/12122) 中贡献
- feat(Locale): 添加塞尔维亚语到国际化，由 [@RogerZXY](https://github.com/RogerZXY) 在 [#12145](https://github.com/youzan/vant/pull/12145) 中贡献
- feat(ImagePreview): 添加 closeOnClickOverlay 选项，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12153](https://github.com/youzan/vant/pull/12153) 中贡献
- feat(List): 添加 scroller 属性，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12154](https://github.com/youzan/vant/pull/12154) 中贡献
- feat(FloatingPanel): 添加 lock-scroll 属性，由 [@inottn](https://github.com/inottn) 在 [#12157](https://github.com/youzan/vant/pull/12157) 中贡献

#### Bug 修复 🐞

- fix(TextEllipsis): 修复省略号重复出现的问题，由 [@muzaisimao](https://github.com/muzaisimao) 在 [#12120](https://github.com/youzan/vant/pull/12120) 中贡献
- fix(TextEllipsis): 修复计算省略号位置的逻辑问题，由 [@inottn](https://github.com/inottn) 在 [#12137](https://github.com/youzan/vant/pull/12137) 中贡献

#### 文档 📖

- docs: 将 PR 标题格式移至贡献指南，由 [@chenjiahan](https://github.com/chenjiahan) 在 [#12114](https://github.com/youzan/vant/pull/12114) 中贡献
- docs(Radio): 添加对 css 变量 '--van-radio-dot-size' 的文档描述，由 [@wjw-gavin](https://github.com/wjw-gavin) 在 [#12152](https://github.com/youzan/vant/pull/12152) 中贡献

#### 其他更改

- chore: 避免 prettier 破坏 hbs 模板 by [@chenjiahan](https://github.com/chenjiahan) in [#12113](https://github.com/youzan/vant/pull/12113)
- chore(deps): 升级 release-it v16 by [@chenjiahan](https://github.com/chenjiahan) in [#12115](https://github.com/youzan/vant/pull/12115)
- feat(get-deps): 将 import('../foo.vue') 替换为 import('../foo.mjs') by [@suncohey](https://github.com/suncohey) in [#12046](https://github.com/youzan/vant/pull/12046)
- refactor(cli): 重写 release 命令 by [@chenjiahan](https://github.com/chenjiahan) in [#12133](https://github.com/youzan/vant/pull/12133)
- feat(cli): 为 release 命令添加 gitTag 选项支持 by [@chenjiahan](https://github.com/chenjiahan) in [#12134](https://github.com/youzan/vant/pull/12134)
- chore(CI): 通过 GitHub 自动生成变更日志 by [@chenjiahan](https://github.com/chenjiahan) in [#12135](https://github.com/youzan/vant/pull/12135)
- chore: 添加 PR 标签动作 by [@chenjiahan](https://github.com/chenjiahan) in [#12136](https://github.com/youzan/vant/pull/12136)
- chore(TextEllipsis): 重用 actionText 变量 by [@chenjiahan](https://github.com/chenjiahan) in [#12138](https://github.com/youzan/vant/pull/12138)
- refactor(cli): 使用 GitHub 变更日志替代 conventional-changelog by [@chenjiahan](https://github.com/chenjiahan) in [#12139](https://github.com/youzan/vant/pull/12139)
- chore: 添加塞尔维亚文档并重命名文件 by [@chenjiahan](https://github.com/chenjiahan) in [#12150](https://github.com/youzan/vant/pull/12150)
- chore(eslint-config): 升级依赖项 by [@chenjiahan](https://github.com/chenjiahan) in [#12155](https://github.com/youzan/vant/pull/12155)

#### 新贡献者

- [@muzaisimao](https://github.com/muzaisimao) 在 [#12120](https://github.com/youzan/vant/pull/12120) 中首次贡献
- [@suncohey](https://github.com/suncohey) 在 [#12046](https://github.com/youzan/vant/pull/12046) 中首次贡献
- [@nivin-studio](https://github.com/nivin-studio) 在 [#12122](https://github.com/youzan/vant/pull/12122) 中首次贡献
- [@RogerZXY](https://github.com/RogerZXY) 在 [#12145](https://github.com/youzan/vant/pull/12145) 中首次贡献

### [v4.6.3](https://github.com/vant-ui/vant/compare/v4.6.2...v4.6.3)

`2023-07-23`

**Feature**

- AddressList: 新增 show-add-button 属性 [#12090](https://github.com/vant-ui/vant/issues/12090)
- CheckboxGroup: 新增 shape 属性 [#12092](https://github.com/vant-ui/vant/issues/12092)
- RadioGroup: 新增 shape 属性 [#12092](https://github.com/vant-ui/vant/issues/12092)

**Bug Fixes**

- FloatingBubble: 修复全局组件类型定义错误 [#12101](https://github.com/vant-ui/vant/issues/12101)
- Tab: 修复导入路径错误 [#12103](https://github.com/vant-ui/vant/issues/12103)

### [v4.6.2](https://github.com/vant-ui/vant/compare/v4.6.1...v4.6.2)

`2023-07-09`

**Feature**

- Field: 新增 autocapitalize，autocorrect 和 spellcheck 属性 [#12065](https://github.com/vant-ui/vant/issues/12065)
- FloatingBubble: 新增 CSS 变量用于自定义圆角 [#12070](https://github.com/vant-ui/vant/issues/12070)
- Radio: 新增 dot 属性 [#12057](https://github.com/vant-ui/vant/issues/12057)
- TextEllipsis: 新增 position 属性，由 [cxybd](https://github.com/cxybd) 贡献 ❤️ [#12058](https://github.com/vant-ui/vant/issues/12058)

**Bug Fixes**

- FloatingBubble: 修复边界错误 [#12067](https://github.com/vant-ui/vant/issues/12067)
- Pagination: 修复边框渲染错误 [#12062](https://github.com/vant-ui/vant/issues/12062)

### [v4.6.1](https://github.com/vant-ui/vant/compare/v4.6.0...v4.6.1)

`2023-07-02`

**Feature**

- ellipsis: 改进中文、日文或韩文文本的换行符 [#12030](https://github.com/vant-ui/vant/issues/12030)

**Bug Fixes**

- FloatingBubble: 修复 floatingBubbleBackground 类型问题 [#12029](https://github.com/vant-ui/vant/issues/12029)
- SubmitBar: 移除多余的 theme 类型定义 [#12031](https://github.com/vant-ui/vant/issues/12031)
- Uploader: 修复 base64 图片预览导致的性能问题 [#12051](https://github.com/vant-ui/vant/issues/12051)

### [v4.6.0](https://github.com/vant-ui/vant/compare/v4.5.0...v4.6.0)

`2023-06-24`

**New Component**

- 新增 FloatingBubble 组件，由 [@zhousg](https://github.com/zhousg) 贡献 ❤️ [#11880](https://github.com/vant-ui/vant/issues/11880)
- 新增 RollingText 组件，由 [@cunzaizhuyi](https://github.com/cunzaizhuyi) 贡献 ❤️ [#11911](https://github.com/vant-ui/vant/issues/11911)

**Feature**

- Rate: 新增 clearable 属性 [#11969](https://github.com/vant-ui/vant/issues/11969)

**Bug Fixes**

- DropdownMenu: 修复缺少类型导出的问题 [#11979](https://github.com/vant-ui/vant/issues/11979)
- Field: 修复使用 input 插槽时设置了多余的 label `for` 属性的问题 [#11966](https://github.com/vant-ui/vant/issues/11966)
- FloatingPanel: 修复缺少 floatingPanelProps 类型导出的问题 [#11978](https://github.com/vant-ui/vant/issues/11978)
- FloatingPanel: 修复 passive event warning [#11992](https://github.com/vant-ui/vant/issues/11992)
- Picker: 修复多列同时滚动时的问题 [#11945](https://github.com/vant-ui/vant/issues/11945)
- Rate: 修复半星拖动时断触的问题 [#12002](https://github.com/vant-ui/vant/issues/12002)

### [v4.5.0](https://github.com/vant-ui/vant/compare/v4.4.1...v4.5.0)

`2023-06-11`

**New Component**

- 新增 FloatingPanel 组件，由 [@zhousg](https://github.com/zhousg) 贡献 ❤️ [#11832](https://github.com/vant-ui/vant/issues/11832)

**Feature**

- AddressList: 新增 right-icon 属性 [#11959](https://github.com/vant-ui/vant/issues/11959)
- DropdownMenu: 新增 close 方法 [#11921](https://github.com/vant-ui/vant/issues/11921)
- Slider: 新增 button 插槽的 dragging 参数 [#11946](https://github.com/vant-ui/vant/issues/11946)
- TimePicker: 新增 min-time 和 max-time 属性 [#11887](https://github.com/vant-ui/vant/issues/11887)
- TimePicker: 新增 filter 属性的 values 参数 [#11916](https://github.com/vant-ui/vant/issues/11916)
- CI: 增加 issue helper [#11963](https://github.com/vant-ui/vant/issues/11963)

**Bug Fixes**

- BackTop: 修复 deactivated 时未隐藏的问题 [#11938](https://github.com/vant-ui/vant/issues/11938)

### [v4.4.1](https://github.com/vant-ui/vant/compare/v4.4.0...v4.4.1)

`2023-05-28`

**Feature**

- Popover: 新增 actions-direction 属性 [#11888](https://github.com/vant-ui/vant/issues/11888)

**Bug Fixes**

- ImagePreview: 修复初始化时可能有过渡动画的问题 [#11897](https://github.com/vant-ui/vant/issues/11897)
- Popup: 修复 duration 为 0 时 opened 事件触发两次的问题 [#11902](https://github.com/vant-ui/vant/issues/11902)
- Slider: 修复点击可能无法触发 change 事件的问题 [#11904](https://github.com/vant-ui/vant/issues/11904)
- Tab: 修复 title-class 和 title-style 属性可能导致死循环的问题 [#11898](https://github.com/vant-ui/vant/issues/11898)

### [v4.4.0](https://github.com/vant-ui/vant/compare/v4.3.2...v4.4.0)

`2023-05-21`

**New Component**

- 新增 Barrage 组件，由 [@zhousg](https://github.com/zhousg) 贡献 ❤️ [#11760](https://github.com/vant-ui/vant/issues/11760)

**Feature**

- Cascader: 切换 Tab 时自动滚动到选中项 [#11869](https://github.com/vant-ui/vant/issues/11869)
- Divider: 新增 vertical 属性 [#11883](https://github.com/vant-ui/vant/issues/11883)
- Document: 支持点击标题时自动调整右侧示例到相应的位置 [#11879](https://github.com/vant-ui/vant/issues/11879)
- ImagePreview: 优化长图的默认展示效果 [#11857](https://github.com/vant-ui/vant/issues/11857)
- Signature: 优化签名的清晰度 [#11835](https://github.com/vant-ui/vant/issues/11835)
- Uploader: 新增 reupload prop [#11854](https://github.com/vant-ui/vant/issues/11854)

**Bug Fixes**

- AddressEdit: 修复多余的底部边框 [#11872](https://github.com/vant-ui/vant/issues/11872)
- Area: 修复多余的 allow-html 和 show-toolbar props 定义 [#11871](https://github.com/vant-ui/vant/issues/11871)
- BackTop: 默认使用最近的父级滚动元素作为 target [#11858](https://github.com/vant-ui/vant/issues/11858)
- ContactList: 优化样式和图标大小 [#11873](https://github.com/vant-ui/vant/issues/11873)
- DatePicker: 修复外部设置 modelValue 时展示错误的问题 [#11839](https://github.com/vant-ui/vant/issues/11839)
- Dialog: 修复点击按钮时圆角错误的问题 [#11863](https://github.com/vant-ui/vant/issues/11863)

### [v4.3.2](https://github.com/vant-ui/vant/compare/v4.3.1...v4.3.2)

`2023-05-14`

**Feature**

- ImagePreview: 支持基于手指位置进行缩放 [#11848](https://github.com/vant-ui/vant/issues/11848)
- PickerGroup: 支持控制当前 Tab 的位置 [#11771](https://github.com/vant-ui/vant/issues/11771)
- Checkbox: 支持在达到最大选择数量时自动禁用其他选项 [#11814](https://github.com/vant-ui/vant/issues/11814)

**Bug Fixes**

- Filed: 修复点击 label 会触发两次 click 事件的问题 [#11838](https://github.com/vant-ui/vant/issues/11838)
- Steps: 修复只有一个 Step 时样式错误的问题 [#11822](https://github.com/vant-ui/vant/issues/11822)
- SubmitBar: 移除多余的 CSS 变量 [#11845](https://github.com/vant-ui/vant/issues/11845)
- Tab: 修复下划线动画可能错误的问题 [#11819](https://github.com/vant-ui/vant/issues/11819)

### [v4.3.1](https://github.com/vant-ui/vant/compare/v4.3.0...v4.3.1)

`2023-05-04`

**Bug Fixes**

- 修复安装 Vant v4.3.0 失败的问题 [#11815](https://github.com/vant-ui/vant/issues/11815)

### [v4.3.0](https://github.com/vant-ui/vant/compare/v4.2.1...v4.3.0)

`2023-05-03`

**New Component**

- 新增 Signature 组件, 由 [@LIjiAngChen8](https://github.com/LIjiAngChen8) 贡献 ❤️ [#11733](https://github.com/vant-ui/vant/issues/11733)

**Feature**

- Field: 图标的默认大小增加为 18px [#11799](https://github.com/vant-ui/vant/issues/11799)

**Bug Fixes**

- Field: 修复禁用状态下光标显示不正确的问题 [#11800](https://github.com/vant-ui/vant/issues/11800)
- Image: 修复开启 lazy-load 时无法显示加载中状态的问题 [#11809](https://github.com/vant-ui/vant/issues/11809)

### [v4.2.1](https://github.com/vant-ui/vant/compare/v4.2.0...v4.2.1)

`2023-04-30`

**Feature**

- Pagination: 新增 show-prev-button, show-next-button 属性 [#11780](https://github.com/vant-ui/vant/issues/11780)
- Picker: 新增 scroll-into 事件 [#11757](https://github.com/vant-ui/vant/issues/11757)

**Bug Fixes**

- Pagination: 修复点击禁用后的按钮时存在点击反馈的问题 [#11779](https://github.com/vant-ui/vant/issues/11779)
- Sticky: 修复屏幕宽度变化时不会更新组件宽度的问题 [#11753](https://github.com/vant-ui/vant/issues/11753)
- Tabs: 修复动态设置 line-width 或 line-height 不会重新渲染的问题 [#11776](https://github.com/vant-ui/vant/issues/11776)
- Tabs: 修复屏幕宽度变化时不会自动滚动到激活的标签页的问题 [#11777](https://github.com/vant-ui/vant/issues/11777)
- Watermark: 修复 iOS 12 系统的兼容性问题 [#11762](https://github.com/vant-ui/vant/issues/11762)

### [v4.2.0](https://github.com/vant-ui/vant/compare/v4.1.2...v4.2.0)

`2023-04-16`

**New Component**

- 新增 Watermark 水印组件，由 [@HuberTRoy](https://github.com/HuberTRoy) 贡献 ❤️ [#11721](https://github.com/vant-ui/vant/issues/11721)

**Feature**

- ShareSheet: 支持自定义 icon [#11709](https://github.com/vant-ui/vant/issues/11709)
- TextEllipsis: 新增 dots 属性 [#11745](https://github.com/vant-ui/vant/issues/11745)

**Bug Fixes**

- Swipe: 修复 width 和 height 属性变化后未重新渲染的问题 [#11747](https://github.com/vant-ui/vant/issues/11747)

### [v4.1.2](https://github.com/vant-ui/vant/compare/v4.1.1...v4.1.2)

`2023-03-26`

**Feature**

- Locale: 增加 Khmer 高棉语 [#11701](https://github.com/vant-ui/vant/issues/11701)

**Bug Fixes**

- Field: 修复同时设置 label-align "top" 和 is-link 时样式错误的问题 [#11684](https://github.com/vant-ui/vant/issues/11684)
- Field: 修复设置 readonly 属性后无法触发 blur 事件的问题 [#11699](https://github.com/vant-ui/vant/issues/11699)
- ImagePreview: 修复长图片上下拖动不顺滑的问题 [#11702](https://github.com/vant-ui/vant/issues/11702)

### [v4.1.1](https://github.com/vant-ui/vant/compare/v4.1.0...v4.1.1)

`2023-03-19`

**Feature**

- Uploader: 支持 avif 图片格式 [#11655](https://github.com/vant-ui/vant/issues/11655)

**Bug Fixes**

- @vant/use: 增加 vue 作为 peer dependencies [#11662](https://github.com/vant-ui/vant/issues/11662)
- DatePicker: 修复个别情况下显示时间错误的问题 [#11656](https://github.com/vant-ui/vant/issues/11656)
- Field: 修复 `FieldRuleFormatter` 类型拼写错误 [#11674](https://github.com/vant-ui/vant/issues/11674)
- TextEllipsis: 修复长数字无法被正确截断的问题 [#11669](https://github.com/vant-ui/vant/issues/11669)

### [v4.1.0](https://github.com/vant-ui/vant/compare/v4.0.11...v4.1.0)

`2023-03-05`

**New Component**

- 新增 TextEllipsis 文本省略组件，由 [@wjw-gavin](https://github.com/wjw-gavin) 贡献 ❤️ [#11593](https://github.com/vant-ui/vant/issues/11593)

**Feature**

- Swipe: 新增 drag-start/drag-end 事件的 index 参数 [#11632](https://github.com/vant-ui/vant/issues/11632)
- TreeSelect: 新增 nav-text 插槽 [#11602](https://github.com/vant-ui/vant/issues/11602) [#11641](https://github.com/vant-ui/vant/issues/11641)

**Bug Fixes**

- DropdownMenu: 修复使用 toggle 方法打开时位置错误的问题 [#11640](https://github.com/vant-ui/vant/issues/11640)
- Field: 修复设置 label-width 后 label-position 不生效的问题 [#11611](https://github.com/vant-ui/vant/issues/11611)
- Locale: 修复乌克兰语翻译问题 [#11629](https://github.com/vant-ui/vant/issues/11629)

### [v4.0.11](https://github.com/vant-ui/vant/compare/v4.0.10...v4.0.11)

`2023-02-20`

**Feature**

- 新增 [vant-nuxt](https://github.com/vant-ui/vant-nuxt) 包，作为官方的 Nuxt Module [#11588](https://github.com/vant-ui/vant/issues/11588)
- BackTop: 新增 z-index 属性以及相关 CSS 变量 [#11582](https://github.com/vant-ui/vant/issues/11582)
- Picker: 支持在 option 插槽中获取选项的 index [#11594](https://github.com/vant-ui/vant/issues/11594)
- @vant/use: 支持注销 useEventListener [#11540](https://github.com/vant-ui/vant/issues/11540)

**Bug Fixes**

- PickerGroup: 修复 confirm 事件参数不正确的问题 [#11566](https://github.com/vant-ui/vant/issues/11566)
- PickerGroup: 修复 Tab 的下划线样式错误问题 [#11547](https://github.com/vant-ui/vant/issues/11547)
- PickerGroup: 修复部分插槽不可用的问题 [#11564](https://github.com/vant-ui/vant/issues/11564)
- Popover: 修复 placement 为 `*-start/end` 时箭头位置错误的问题 [#11584](https://github.com/vant-ui/vant/issues/11584)
- Popover: 修复动画会导致组件位置错误的问题 [#11568](https://github.com/vant-ui/vant/issues/11568)
- Space: 修复 SSR 时出现缺少 Text 报错的问题 [#11549](https://github.com/vant-ui/vant/issues/11549)

### [v4.0.10](https://github.com/vant-ui/vant/compare/v4.0.9...v4.0.10)

`2023-02-02`

**Bug Fixes**

- DatePicker: 修复 change 事件中日期参数不正确的问题 [#11529](https://github.com/vant-ui/vant/issues/11529)
- Slider: 修复双滑块模式下无法正确拖动的问题 [#11526](https://github.com/vant-ui/vant/issues/11526) [#11534](https://github.com/vant-ui/vant/issues/11534)

### [v4.0.9](https://github.com/vant-ui/vant/compare/v4.0.8...v4.0.9)

`2023-01-26`

**Feature**

- BackTop: 新增 immediate 属性 [#11515](https://github.com/vant-ui/vant/issues/11515)
- Calendar: 新增 month-title 插槽 [#11500](https://github.com/vant-ui/vant/issues/11500)
- Cascader: 新增 useCascaderAreaData 方法 [#11518](https://github.com/vant-ui/vant/issues/11518)
- ImagePreview: 支持在缩放图片后滑动至其他图片 [#11505](https://github.com/vant-ui/vant/issues/11505)
- Locale: 新增 Esperanto 世界语 [#11520](https://github.com/vant-ui/vant/issues/11520)
- Locale: 新增 useCurrentLang 方法 [#11517](https://github.com/vant-ui/vant/issues/11517)
- Swipe: 新增 drag-start, drag-end 事件 [#11502](https://github.com/vant-ui/vant/issues/11502)

**Bug Fixes**

- ImagePreview: 修复切换图片过程中可以触发图片缩放的问题 [#11504](https://github.com/vant-ui/vant/issues/11504)
- Locale: 修复意大利语翻译问题 [#11519](https://github.com/vant-ui/vant/issues/11519)
- Swipe: 修复多指操作时滑动位置被错误重置的问题 [#11503](https://github.com/vant-ui/vant/issues/11503)

### [v4.0.8](https://github.com/vant-ui/vant/compare/v4.0.7...v4.0.8)

`2023-01-15`

**Feature**

- PickerGroup: 新增 next-step-text 属性 [#11487](https://github.com/vant-ui/vant/issues/11487)

**Bug Fixes**

- Picker: 调整确认按钮的颜色为 primary color [#11479](https://github.com/vant-ui/vant/issues/11479)
- NumberKeyboard: 调整确认按钮的颜色为 primary color [#11479](https://github.com/vant-ui/vant/issues/11479)
- Icons: 增加 woff 格式来兼容个别 webview 环境 [#11485](https://github.com/vant-ui/vant/issues/11485)
- Picker: 修复标题文字可能不居中的问题 [#11489](https://github.com/vant-ui/vant/issues/11489)
- Skeleton: 修复全量引入组件时不会自动注册 Skeleton 子组件的问题 [#11470](https://github.com/vant-ui/vant/issues/11470) [#11469](https://github.com/vant-ui/vant/issues/11469)
- Tabs: 修复动态插入 Tab 时在个别情况下顺序错误的问题 [#11462](https://github.com/vant-ui/vant/issues/11462)

### [v4.0.7](https://github.com/vant-ui/vant/compare/v4.0.6...v4.0.7)

`2023-01-02`

**Bug Fixes**

- Icons: 修复 delete / delete-o 图标存在多余黑点的问题 [#11441](https://github.com/vant-ui/vant/issues/11441)
- Icons: 移除多余的 woff/ttf 格式声明 [#11442](https://github.com/vant-ui/vant/issues/11442)
- ImagePreview：修复 teleport 属性不生效的问题 [#11429](https://github.com/vant-ui/vant/issues/11429)
- Locale: 修复 ru-RU 中的 "Calendar" 拼写错误 [#11425](https://github.com/vant-ui/vant/issues/11425)
- Swipe: 修复在 keep-alive 内使用时可能渲染空白的问题 [#11437](https://github.com/vant-ui/vant/issues/11437)

### [v4.0.6](https://github.com/vant-ui/vant/compare/v4.0.5...v4.0.6)

`2022-12-26`

**Bug Fixes**

- 修复升级 vite v4 导致构建产物不全的问题 [#11423](https://github.com/vant-ui/vant/issues/11423)

### [v4.0.5](https://github.com/vant-ui/vant/compare/v4.0.4...v4.0.5)

`2022-12-25`

**Feature**

- Locale: 新增 Dutch 荷兰语 [#11419](https://github.com/vant-ui/vant/issues/11419)
- Locale: 新增 Mongolian 蒙古语 [#11418](https://github.com/vant-ui/vant/issues/11418)

**Bug Fixes**

- Badge: 修复 offset 属性部分情况下导致样式错误的问题 [#11400](https://github.com/vant-ui/vant/issues/11400)
- Form: 修复事件参数中可能出现 key 为 undefined 的问题 [#11410](https://github.com/vant-ui/vant/issues/11410)
- Picker: 修复深色模式下加载状态样式错误的问题 [#11405](https://github.com/vant-ui/vant/issues/11405)

### [v4.0.4](https://github.com/vant-ui/vant/compare/v4.0.3...v4.0.4)

`2022-12-23`

**Bug Fixes**

- Field: 修复使用 formatter 时光标位置可能错误的问题 [#11360](https://github.com/vant-ui/vant/issues/11360)
- Image: 修复 load 事件未正确触发导致 ImagePreview 报错的问题 [#11406](https://github.com/vant-ui/vant/issues/11406)

### [v4.0.3](https://github.com/vant-ui/vant/compare/v4.0.2...v4.0.3)

`2022-12-13`

**Bug Fixes**

- Field: 修复动态设置空的 label 不生效的问题 [#11373](https://github.com/vant-ui/vant/issues/11373)
- ImagePreview: 修复图片可能加载失败的问题 [#11376](https://github.com/vant-ui/vant/issues/11376)

### [v4.0.2](https://github.com/vant-ui/vant/compare/v4.0.1...v4.0.2)

`2022-12-03`

**Bug Fixes**

- Field: 修复使用 formatter 时光标位置错误的问题 [#11348](https://github.com/vant-ui/vant/issues/11348)
- Image: 修复在 Nuxt 3 下图片可能无法展示的问题 [128972](https://github.com/vant-ui/vant/commit/128972a75329d4b14028d00cd23dac66038e2d4c)
- NavBar: 修复屏幕旋转时 placeholder 未自动适配高度的问题 [#11351](https://github.com/vant-ui/vant/issues/11351)

### [v4.0.1](https://github.com/vant-ui/vant/compare/v4.0.0...v4.0.1)

`2022-12-01`

**Feature**

- Picker: 新增 selectedIndexes 作为事件入参 [#11329](https://github.com/vant-ui/vant/issues/11329)

**Bug Fixes**

- Field: 修复未选中时修改绑定的值会导致键盘弹出的问题 [#11333](https://github.com/vant-ui/vant/issues/11333)

### [v4.0.0](https://github.com/vant-ui/vant/compare/v4.0.0-rc.9...v4.0.0)

`2022-11-26`

> 完整内容请移步：[「4.0 更新介绍」](https://vant-ui.github.io/vant/#/zh-CN/release-note-v4)

**Feature**

- List: 新增 disabled 属性 [#11307](https://github.com/vant-ui/vant/issues/11307)
- BackTop: 支持动态设置 target 属性 [#11311](https://github.com/vant-ui/vant/issues/11311)
- BackTop: 支持通过 CSS 变量修改组件位置 [#11312](https://github.com/vant-ui/vant/issues/11312)
- BackTop: 重命名 visibility-height 属性为 offset [#11309](https://github.com/vant-ui/vant/issues/11309)

**Bug Fixes**

- Field: 修复格式化值后，光标位置错误的问题 [#11308](https://github.com/vant-ui/vant/issues/11308)

### [v4.0.0-rc.9](https://github.com/vant-ui/vant/compare/v4.0.0-rc.8...v4.0.0-rc.9)

`2022-11-24`

**Bug Fixes**

- Cell: 修复 arrow-direction 设置为 right 不显示的问题 [#11279](https://github.com/vant-ui/vant/issues/11279)
- Style: 修复 body 标签上的 normalize 样式未生效的问题 [#11287](https://github.com/vant-ui/vant/issues/11287)

### [v4.0.0-rc.8](https://github.com/vant-ui/vant/compare/v4.0.0-rc.7...v4.0.0-rc.8)

`2022-11-20`

**Feature**

- 新增 BackTop 回到顶部组件，注意该新组件的 API 尚未稳定，在 4.0 正式版发布前仍可能产生 breaking change [#11236](https://github.com/vant-ui/vant/issues/11236)

**Bug Fixes**

- DropdownItem: 修复使用 teleport 时无法设置 attr 的问题 [#11273](https://github.com/vant-ui/vant/issues/11273)
- List: 修复初始的 loading 值为 true 时加载错误的问题 [#11275](https://github.com/vant-ui/vant/issues/11275)
- NumberKeyboard: 修复使用 teleport 时无法设置 attr 的问题 [#11274](https://github.com/vant-ui/vant/issues/11274)

### [v4.0.0-rc.7](https://github.com/vant-ui/vant/compare/v4.0.0-rc.6...v4.0.0-rc.7)

`2022-11-13`

**New Component**

- 新增 SkeletonAvatar、SkeletonTitle、SkeletonImage、SkeletonParagraph 组件 [#11173](https://github.com/vant-ui/vant/issues/11173)

**Feature**

- ImagePreview: 新增 long-press 事件 [#11252](https://github.com/vant-ui/vant/issues/11252)
- Popover: 支持非受控模式 [#11244](https://github.com/vant-ui/vant/issues/11244)

**Bug Fixes**

- ActionSheet: 修复标题为空时取消按钮层级错误的问题 [#11213](https://github.com/vant-ui/vant/issues/11213)
- DatePicker: 在生产环境下不再抛出开发错误提示 [#11248](https://github.com/vant-ui/vant/issues/11248)
- Lazyload: 修复使用 lazy-image 时报错 h is not a function 的问题 [#11229](https://github.com/vant-ui/vant/issues/11229)
- Picker: 修复抛出 confirm 事件时 v-model 未正确更新的问题 [#11194](https://github.com/vant-ui/vant/issues/11194)
- Picker: 修复 column 为空时操作报错的问题 [#11249](https://github.com/vant-ui/vant/issues/11249)
- Uploader: 修复 show-upload 为 false 时 chooseFile 无法调用的问题 [#11218](https://github.com/vant-ui/vant/issues/11218)

### [v4.0.0-rc.6](https://github.com/vant-ui/vant/compare/v4.0.0-rc.5...v4.0.0-rc.6)

`2022-10-23`

**Feature**

- Calendar: subtitle 插槽新增 text 和 date 入参 [#11168](https://github.com/vant-ui/vant/issues/11168)
- Cell: 新增 tag 属性 [#11139](https://github.com/vant-ui/vant/issues/11139)
- ImagePreview: 新增 image 插槽 [#11133](https://github.com/vant-ui/vant/issues/11133)
- Toast: 新增 wordBreak 选项 [#11147](https://github.com/vant-ui/vant/issues/11147)

**Bug Fixes**

- CouponList: 修复 coupon 位置错误的问题 [#11153](https://github.com/vant-ui/vant/issues/11153)
- CouponList: 修复输入框样式错误的问题 [#11155](https://github.com/vant-ui/vant/issues/11155)
- Swipe: 修复在 Popup 内时个别情况下渲染错误的问题 [#11162](https://github.com/vant-ui/vant/issues/11162)

### [v4.0.0-rc.5](https://github.com/vant-ui/vant/compare/v4.0.0-rc.4...v4.0.0-rc.5)

`2022-10-07`

**Feature**

- Field: 支持将 label-position 设置为 top [#11102](https://github.com/vant-ui/vant/issues/11102)
- Loading: 新增 icon 插槽 [#11109](https://github.com/vant-ui/vant/issues/11109)
- NavBar: 新增 clickable 属性 [#11048](https://github.com/vant-ui/vant/issues/11048)
- Stepper: 新增 auto-fixed 属性 [#11071](https://github.com/vant-ui/vant/issues/11071)

**Bug Fixes**

- DatePicker: 修复日期超出 maxDate 时格式化不正确的问题 [#11122](https://github.com/vant-ui/vant/issues/11122)
- Tabs: 修复开启 scrollspy 时个别情况下标题栏滚动位置错误的问题 [#11116](https://github.com/vant-ui/vant/issues/11116)
- Tabs: 修复开启 scrollspy 时 nav-bottom 插槽遮挡内容的问题 [#11115](https://github.com/vant-ui/vant/issues/11115)

### [v4.0.0-rc.4](https://github.com/vant-ui/vant/compare/v4.0.0-rc.3...v4.0.0-rc.4)

`2022-09-25`

**Feature**

- Field: end-validate 事件新增 message 参数 [#11080](https://github.com/vant-ui/vant/issues/11080)

**Bug Fixes**

- Tabs: 修复个别情况下页面滚动位置错误的问题 [#11085](https://github.com/vant-ui/vant/issues/11085)
- Tabs: 修复初始化时菜单横向滚动位置错误的问题 [#11059](https://github.com/vant-ui/vant/issues/11059)

### [v4.0.0-rc.3](https://github.com/vant-ui/vant/compare/v4.0.0-rc.2...v4.0.0-rc.3)

`2022-09-12`

**Feature**

- ConfigProvider: 新增 ConfigProviderThemeVars 类型 [#11034](https://github.com/vant-ui/vant/issues/11034)
- Notify: 新增 z-index 属性 [#11032](https://github.com/vant-ui/vant/issues/11032)
- 移除 `@popperjs/core` 依赖，减少安装体积 1.6MB [#11030](https://github.com/vant-ui/vant/issues/11030)

**Types**

- Toast: 修复缺少全局类型定义的问题 [#11033](https://github.com/vant-ui/vant/issues/11033)

### [v4.0.0-rc.2](https://github.com/vant-ui/vant/compare/v4.0.0-rc.1...v4.0.0-rc.2)

`2022-09-11`

**Breaking Changes**

- 调整了所有 CSS 变量的挂载位置，由 `body` 节点调整回 `:root` 节点，调整后与 Vant v3 版本保持一致，以便于 v3 项目更平滑地升级到 v4 版本。 [#11026](https://github.com/vant-ui/vant/issues/11026)

**Bug Fixes**

- Dialog: 修复过渡动画异常的问题 [#11028](https://github.com/vant-ui/vant/issues/11028)
- Empty: 修复深色模式下亮度过高的问题 [#11027](https://github.com/vant-ui/vant/issues/11027)

### [v4.0.0-rc.1](https://github.com/vant-ui/vant/compare/v4.0.0-rc.0...v4.0.0-rc.1)

`2022-09-10`

**Feature**

- 导出所有组件的 props，方便进行二次封装 [#11024](https://github.com/vant-ui/vant/issues/11024)
- Dialog: message-align 属性支持设置为 justify [#11014](https://github.com/vant-ui/vant/issues/11014)
- Image: 新增 block 属性 [#11022](https://github.com/vant-ui/vant/issues/11022)
- Toast: 新增 message 插槽 [#11018](https://github.com/vant-ui/vant/issues/11018)

**Bug Fixes**

- Picker: 修复部分情况下未正确更新选中值的问题 [#11009](https://github.com/vant-ui/vant/issues/11009)
- Locale: 修复读取 i18n 文案时可能获取到 JS 原生方法的问题 [#11010](https://github.com/vant-ui/vant/issues/11010)

### [v4.0.0-rc.0](https://github.com/vant-ui/vant/compare/v3.6.2...v4.0.0-rc.0)

`2022-09-04`

**Feature**

- 新增 [PickerGroup 选择器组](#/zh-CN/picker-group) 组件

**Bug Fixes**

- DatePicker: 修复未正确更新 modelValue 的问题 [#10984](https://github.com/vant-ui/vant/issues/10984)
- DatePicker: 修复 min-date 属性未正确生效的问题 [#10985](https://github.com/vant-ui/vant/issues/10985)

### [v4.0.0-beta.1](https://github.com/vant-ui/vant/compare/v3.6.0...v4.0.0-beta.1)

`2022-08-24`

**Breaking Changes**

- Popup: 默认添加了 `box-sizing: border-box` 样式。
- Popup: 调整了 `position="center"` 时的水平居中方式，以解决弹窗宽度无法正确自适应的问题。

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

- 新增 [Space 间距](#/zh-CN/space) 组件, 由 [@LadyChatterleyLover](https://github.com/LadyChatterleyLover) 贡献 ❤️ [#10857](https://github.com/vant-ui/vant/issues/10857)

**Feature**

- ConfigProvider: 新增 z-index 属性，用于设置弹窗组件的 z-index [#10915](https://github.com/vant-ui/vant/issues/10915)
- Form: 新增 rule 的 validateEmpty 选项 [#10913](https://github.com/vant-ui/vant/issues/10913)
- Popup: 新增 role 和 tabindex，优化无障碍访问 [#10894](https://github.com/vant-ui/vant/issues/10894)
- TouchEmulator: 支持 .mjs 后缀 [#10888](https://github.com/vant-ui/vant/issues/10888)

**Feature**

- ConfigProvider: 新增 theme-vars-dark 和 theme-vars-light 属性 [#10939](https://github.com/vant-ui/vant/issues/10939)
- Picker: 新增 clickOption 事件 [#10865](https://github.com/vant-ui/vant/issues/10865)
- 为 scroll 事件添加了正确的 passive 标记来提升滚动性能 [#10951](https://github.com/vant-ui/vant/issues/10951)
- @vant/use: 优化 useEventListener 类型定义 [#10952](https://github.com/vant-ui/vant/issues/10952)

**Bug Fixes**

- ConfigProvider: 修复销毁时没有回收全局样式类的问题 [#10898](https://github.com/vant-ui/vant/issues/10898)
- 修复 touchstart 导致控制台出现 passive event warning 的问题 [#10954](https://github.com/vant-ui/vant/issues/10954)
- Tabs: 修复开启 swipeable 时，resize 方法无法正确生效的问题 [#10964](https://github.com/vant-ui/vant/issues/10964)
- 修复在 WebStorm 下标签无法自动补全的问题 [#10946](https://github.com/vant-ui/vant/issues/10946)
- Badge: 修复使用 show-zero 时字符串 `'0'` 不生效的问题 [#10921](https://github.com/vant-ui/vant/issues/10921)
- Calendar: 修复关闭弹窗过程中内容白屏的问题 [#10910](https://github.com/vant-ui/vant/issues/10910)
- Calendar: 修复控制台出现读取 getFullYear 异常的问题 [#10909](https://github.com/vant-ui/vant/issues/10909)
- Empty: 修复在 Tab 下嵌套使用时渲染异常的问题 [#10943](https://github.com/vant-ui/vant/issues/10943)
- Popover: 修复在 Popup 下嵌套使用时无法滚动的问题 [#10949](https://github.com/vant-ui/vant/issues/10949)
- PullRefresh: 修复 Chrome 控制台出现 passive event warning 的问题 [#10938](https://github.com/vant-ui/vant/issues/10938)
- Search: 修复 --van-search-input-height 样式变量不生效的问题 [#10911](https://github.com/vant-ui/vant/issues/10911)

### [v4.0.0-beta.0](https://github.com/vant-ui/vant/compare/v3.5.2...v4.0.0-beta.0)

`2022-07-16`

**Breaking Changes**

- Toast: 重新设计函数调用 API [#10804](https://github.com/vant-ui/vant/issues/10804)
- Dialog: 重新设计函数调用 API [#10781](https://github.com/vant-ui/vant/issues/10781)
- Notify: 重新设计函数调用 API[#10782](https://github.com/vant-ui/vant/issues/10782)
- ImagePreview: 重新设计函数调用 API [#10802](https://github.com/vant-ui/vant/issues/10802)

关于以上改动的详细描述和迁移方法，请参考 [从 v3 升级到 v4](/vant/v4/#/zh-CN/migrate-from-v3) 的 「API 调整」部分。

**Feature**

- 新增 @vant/compat 包，用于辅助代码迁移 [#10806](https://github.com/vant-ui/vant/issues/10806)
- Calendar: 新增 getSelectedDate 方法 [419a8e](https://github.com/vant-ui/vant/commit/419a8e4f0e6454b9aac30d5800318deabec099cb)
- 由于主题定制方式调整，发布到 npm 的代码中将不再包含 .less 样式源文件，从而减少 npm 包体积 [#10752](https://github.com/vant-ui/vant/issues/10752)

**Bug Fixes**

- Uploader: 修复预览图片时会展示上传失败的图片的问题 [#10790](https://github.com/vant-ui/vant/issues/10790)

### [v4.0.0-alpha.4](https://github.com/vant-ui/vant/compare/v3.5.0-beta.0...v4.0.0-alpha.4)

`2022-05-31`

**Feature**

- 适配 nuxt 3，现在 dist 目录下所有 esmodule 文件将使用 `.mjs` 文件后缀 [#10625](https://github.com/vant-ui/vant/issues/10625)

### [v4.0.0-alpha.3](https://github.com/vant-ui/vant/compare/v3.4.9...v4.0.0-alpha.3)

`2022-05-02`

**Feature**

- Form: 支持同时设置多个 validate-trigger 值 [#10544](https://github.com/vant-ui/vant/issues/10544)
- Empty: 支持在无网络的环境下离线使用，图片从 CDN 调整为内联的 SVG 图片 [#10514](https://github.com/vant-ui/vant/issues/10514) [#10515](https://github.com/vant-ui/vant/issues/10515) [#10516](https://github.com/vant-ui/vant/issues/10516)
- Loading: 优化无障碍访问 [#10568](https://github.com/vant-ui/vant/issues/10568)

**Bug Fixes**

- Search: 修复暗色模式下样式错误的问题 [#10527](https://github.com/vant-ui/vant/issues/10527)
- @vant/area-data: 修复发布到 npm 时包含 tsconfig.json 文件导致编译错误的问题 [f927f6](https://github.com/vant-ui/vant/commit/f927f6a7518cf7d08ec8abc5dd35019685c19e3a)

### [v4.0.0-alpha.2](https://github.com/vant-ui/vant/compare/v3.4.8...v4.0.0-alpha.2)

`2022-04-16`

**Feature**

- CalendarDay: 增加日期行间距 [#10441](https://github.com/vant-ui/vant/issues/10441)
- Empty: 支持单独设置 image 的宽高 [#10465](https://github.com/vant-ui/vant/issues/10465)
- Field: 新增 enterkeyhint 属性 [#10478](https://github.com/vant-ui/vant/issues/10478)
- Form: 新增 getValues 方法 [#10511](https://github.com/vant-ui/vant/issues/10511)
- Icon: 新增 qq、weibo 等图标 [#10468](https://github.com/vant-ui/vant/issues/10468)
- Locale: 新增 Danish 丹麦语 [#10513](https://github.com/vant-ui/vant/issues/10513)
- ShareSheet: 不再依赖 CDN 上的图片资源，使用 iconfont 代替 [#10469](https://github.com/vant-ui/vant/issues/10469)
- web-types.json 文件增加 event arguments 信息 [#10474](https://github.com/vant-ui/vant/issues/10474)

**Bug Fixes**

- DatetimePicker: 修复 modeValue 与选中的数据不一致的问题 [#10448](https://github.com/vant-ui/vant/issues/10448)
- Rate: 修复多行时滑动选中不正确的问题 [#10500](https://github.com/vant-ui/vant/issues/10500)

### [v4.0.0-alpha.1](https://github.com/vant-ui/vant/compare/v3.4.6...v4.0.0-alpha.1)

`2022-03-19`

**Feature**

- @vant/area-data: 新增南京市江北新区 [#10410](https://github.com/vant-ui/vant/issues/10410)
- Locale: 新增老挝语 [#10388](https://github.com/vant-ui/vant/issues/10388)

**Bug Fixes**

- Calendar: 修复暗色模式下标题颜色 [#10403](https://github.com/vant-ui/vant/issues/10403)
- Picker: 修复暗色模式下标题颜色 [#10403](https://github.com/vant-ui/vant/issues/10403)
- ConfigProvider: 修复默认设置暗色模式不生效的问题 [#10413](https://github.com/vant-ui/vant/issues/10413)
- DatePicker: 修复更新 v-model 不生效的问题 [#10415](https://github.com/vant-ui/vant/issues/10415)
- Dialog: 修复暗色模式下标题和文本颜色 [#10379](https://github.com/vant-ui/vant/issues/10379)
- IndexBar: 修复底部索引无法高亮的问题 [#10404](https://github.com/vant-ui/vant/issues/10404)

### 4.0.0-alpha.0

`2022-02-21`

**不兼容更新**

参见 [从 v3 升级到 v4](#/zh-CN/migrate-from-v3)。

**Feature**

- ConfigProvider: 新增 `theme` 属性，用于开启深色模式
- ConfigProvider: 新增 `ConfigProviderTheme` 类型

**Style**

在之前的版本中，Vant 组件有两种色彩风格，一部分采用红色作为主色调，另一部分采用蓝色。为了保持色彩规范的统一，我们在 Vant 4 中对组件的主色调进行了统一，所有组件均采用蓝色作为主色调。

以下组件的默认色值风格由红色调整为蓝色：

- AddressEdit
- AddressList
- Card
- Calendar
- Cascader
- ContactList
- ContactEdit
- CouponList
- Dialog
- DropdownMenu
- IndexBar
- Sidebar
- Steps
- Tabs
- TreeSelect

其他：

- `--van-font-bold` 的默认值由 `500` 调整为 `600`
- ActionBar: 调整 `--van-action-bar-icon-text-color` 变量的默认值为 `--van-text-color`
- AddressList: 重命名 `--van-address-list-item-radio-icon-color` 为 `--van-address-list-radio-color`
- Button: 默认圆角大小从 `2px` 调整为 `4px`
- Button: 默认按钮的边框颜色调整为 `--van-gray-4`
- Button: 调整 `font-smoothing`，默认使用粗体文字
- Cell: 只设置 `value` 时，内容不再会靠左对齐
- Card: 调整 `--van-card-background` 变量的默认值为 `--van-background`
- Card: 调整 `--van-card-price-color` 变量的默认值为 `--van-text-color`
- Card: 调整 `--van-card-desc-color` 变量的默认值为 `--van-text-color-2`
- ContactList: 重命名 `--van-contact-list-item-radio-icon-color` 为 `--van-contact-list-radio-color`
- CouponList: 重命名 `--van-coupon-corner-checkbox-icon-color` 为 `--van-coupon-checkbox-color`
- Field: 调整 `--van-field-label-color` 变量的默认值为 `--van-text-color`
- Switch: 移除 `--van-switch-border` 变量
- Switch: 调整 `--van-switch-size` 变量的默认值为 `26px`
- Switch: 调整 `--van-switch-background` 变量的默认值为 `rgba(120, 120, 128, 0.16)`
- Tabbar: 调整 `--van-tabbar-item-text-color` 变量的默认值为 `--van-text-color`
- GridItem: 调整 `--van-grid-item-text-color` 变量的默认值为 `--van-text-color`
