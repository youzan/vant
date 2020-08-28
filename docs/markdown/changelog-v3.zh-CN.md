# 更新日志

### 提示

当前文档为 Vant 3.x 版本的更新日志，如需查询 Vant 2.0 的更新内容，请访问 [Vant 2.0 更新日志](https://youzan.github.io/vant/#/zh-CN/changelog)。

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新。

### [v3.0.0-alpha.2](https://github.com/youzan/vant/compare/v3.0.0-alpha.1...v3.0.0-alpha.2)

`2020-08-28`

**Bug Fixes**

- 修复使用 `yarn add vant@next` 安装失败的问题

### [v3.0.0-alpha.1](https://github.com/youzan/vant/compare/v2.10.3...v3.0.0-alpha.1)

`2020-08-28`

**refactor**

使用 Composition API 重构以下组件：

- ActionBar
- AddressList
- Area
- Badge
- Button
- Circle
- Col
- Collapse
- CountDown
- Image
- Row
- List
- Loading
- NavBar
- NoticeBar
- Progress
- Rate
- Sidebar
- Slider
- Steps
- Sticky
- Tabbar

**Bug Fixes**

- Rate: 修复控制台报 emit warning 提示的问题 [c32fba](https://github.com/youzan/vant/commit/c32fba0f1e7afa657c69c233d644c1994963a638)
- Button: 修复 click 事件参数丢失的问题 [cea272](https://github.com/youzan/vant/commit/cea2724321daf693a1dd36dd6923c4d28585895a)
- CellGroup: 修复 attrs 继承错误的问题 [8f978a](https://github.com/youzan/vant/commit/8f978addd49b7d2a5e6fcce0c952fcb05145ad1d)
- Dialog: 修复部分弹窗相关属性不生效的问题 [af94c9](https://github.com/youzan/vant/commit/af94c92614b78e999e5377208e2c3c3672480210)
- Image: 修复 loading 图标和 error 图标不展示的问题 [c720ee](https://github.com/youzan/vant/commit/c720eea83170b36e1b2f4eb8bdaff400e88bf714)

### [v3.0.0-alpha.0](https://github.com/youzan/vant/compare/v2.10.2...v3.0.0-alpha.0)

`2020-08-22`

**Bug Fixes**

- ActionSheet: some events missed [4d8d02](https://github.com/youzan/vant/commit/4d8d02151d6422db8c1243645167f9ffb691f1c1)
- AddressList: bottom slot not work [d9e0e7](https://github.com/youzan/vant/commit/d9e0e753f1a9d917a361115b1cfeb4aa2d2cb5a0)
- Cell: route props [7ed174](https://github.com/youzan/vant/commit/7ed1747de863a4f9d756591edee01c0cc48d8a12)
- cli: register packageEntry failed [4e7931](https://github.com/youzan/vant/commit/4e793189b6593721a203767511e6ec39b1d3eca8)
- cli: template v-for warning [0db903](https://github.com/youzan/vant/commit/0db9030f11b53f2922fc974d7b36b007cb546ec3)
- Coupon: failed to render face amount [4e7769](https://github.com/youzan/vant/commit/4e7769ebeeae622c1347f926bd67db5ab3c6297b)
- Dialog: missing emits config [492065](https://github.com/youzan/vant/commit/49206598fc32d35637cb9a3f57f06a7eea3da3bc)
- eslint-config: update extends rule [9754a8](https://github.com/youzan/vant/commit/9754a80597ac2e43f1c264feb3ca5e77480e9190)
- Field: cell slots [ec64d8](https://github.com/youzan/vant/commit/ec64d803bee07a306d71479ddd407c7879bf3ae5)
- Field: failed to inherit class/style [ad1301](https://github.com/youzan/vant/commit/ad1301636d563a237336128ab3a57a9464322538)
- Field: rows not work [092c53](https://github.com/youzan/vant/commit/092c5356e6d23c36a590c2164d76044b0da920ab)
- Icon: default slot [3a2e20](https://github.com/youzan/vant/commit/3a2e20eb5271e5391c5902b48e0f7154ca284a34)
- Image: alt prop not work [0a570b](https://github.com/youzan/vant/commit/0a570b2382286d3cd469fc476fa82451c8f8b319)
- Image: loading status [0010bf](https://github.com/youzan/vant/commit/0010bfd461bbccca825ada58a48d50f1a892cced)
- Popup: adjust teleport handler [54a860](https://github.com/youzan/vant/commit/54a8608078ebb51347af9361e1936d119c7b5fb2)
- Popup: duration not work for overlay [5e5025](https://github.com/youzan/vant/commit/5e5025d1cc7356054a576899f38053de051a470a)
- rename domPropsInnerHTML to innerHTML [c0c4f7](https://github.com/youzan/vant/commit/c0c4f764b53dde1d69d456b981e4cbc00a9af41b)
- Field: should not render empty label [4d58db](https://github.com/youzan/vant/commit/4d58dbe3a665fc82510d5d7cb34a83b152565824)
- Image: memory leak during SSR [#6721](https://github.com/youzan/vant/issues/6721)
- NoticeBar: add emits [70f614](https://github.com/youzan/vant/commit/70f6146981d42aa5e4be8877df6083aba0229c45)
- Pagination: missing emits [e8d190](https://github.com/youzan/vant/commit/e8d190d51d50618f27d499640955e99044c1be67)
- Popup: animation [708792](https://github.com/youzan/vant/commit/7087922d18b2ac54629a6d886ce33630015d6097)
- Popup: legacy removeNode [34ff81](https://github.com/youzan/vant/commit/34ff811102e7a153b0661f2f2f9b0c85af24f14b)
- Popup: missing overlay class & style [de6690](https://github.com/youzan/vant/commit/de66903baeb5132ccd57f7ca47b8a2865e8f4fe6)
- Popup: overlay z-index [5db6e3](https://github.com/youzan/vant/commit/5db6e380fe21bc162a186a62c5608df8790b0755)
- Popup: teleport [6995bc](https://github.com/youzan/vant/commit/6995bcc8a385bd0d10739901c25e9d2c27f59a23)
- Search: icon slot not work [b4e026](https://github.com/youzan/vant/commit/b4e02668cf8e2ea929b16c31769fa3b08c7f164c)
- Search: inherit style/class [742872](https://github.com/youzan/vant/commit/742872a4aa430669e938d8becb72773d76c57c62)
- SwipeCell: missing emits config [a7836a](https://github.com/youzan/vant/commit/a7836a30e6429c508729ce30bdf32de2ff3b8605)
- Uploader: enable inheritAttrs [2937c1](https://github.com/youzan/vant/commit/2937c1537e61afcb76cadc77a7d6697bd02eca7e)
- currentRoute [7346f2](https://github.com/youzan/vant/commit/7346f20e96defbcf5a4a14717e1044cd1075279a)
- failed to install component [47ad40](https://github.com/youzan/vant/commit/47ad40794e2c992d6d23a2739a87003d64a4f509)
- missing emits [d04c8c](https://github.com/youzan/vant/commit/d04c8c1e2455a7f2715d2d704a55425266db2de2)
- rename unmount lifecycles [6c8529](https://github.com/youzan/vant/commit/6c85294d35ca690d1953f779e08a8a63595e4c4c)
- Slider: missing transition in vertical mode [616723](https://github.com/youzan/vant/commit/6167239b80f29eafa6fd7f0db02fe2b10774a339)
- Tabs: update:active event [7e47a0](https://github.com/youzan/vant/commit/7e47a0721bd56d4c3a5237ae0daff6763ae84417)
- non-empty path must start with "/" [075bc0](https://github.com/youzan/vant/commit/075bc05a75f01a66772c4281ff8893f40a9835a8)
- router catchAll [59f9b8](https://github.com/youzan/vant/commit/59f9b851d62028f6df5415c68459d29e7445b441)
- router-view with keep-alive [88f5fe](https://github.com/youzan/vant/commit/88f5fed9cf0a82fe25a08e5163377ae8d59c789f)
- sync iframe router [2d63b9](https://github.com/youzan/vant/commit/2d63b9c8b58c5fbebae16c0dcbcda27763450b6a)
- utils [4c87fe](https://github.com/youzan/vant/commit/4c87fe247918313d85e24eeb1696e6c66b789de6)

**build**

- cli: update jsx plugin [f6280d](https://github.com/youzan/vant/commit/f6280dc41d325f6188a8d05bd908cce15e1a5473)

**Document**

- add changelog-v3 [448584](https://github.com/youzan/vant/commit/448584a146de7b13ef85ebf745e940eec1ba1cc0)
- add migrate guide [7cadc5](https://github.com/youzan/vant/commit/7cadc5e60f16c9cb7bb73ac3494800fb3279cdd5)
- shoud install vant@next [569c6d](https://github.com/youzan/vant/commit/569c6daeb00215a9b171afc7e1a8bfa79f375f22)
- update component registration guide [d42b1b](https://github.com/youzan/vant/commit/d42b1b43c34bd07a18c6ef702394f98b0603d9e0)
- update global method guide [9a86e9](https://github.com/youzan/vant/commit/9a86e9e6cace55b27e7516fe8eca6db19201e0ee)
- update install guide [435c6e](https://github.com/youzan/vant/commit/435c6ee794b1ccfa69710d9cafbda3d8d975d257)
- update migrate guide [a0725b](https://github.com/youzan/vant/commit/a0725b942da5f1ffc56248a59fb54d8baa54362e)
- ActionSheet: update v-model usage [1e441e](https://github.com/youzan/vant/commit/1e441e86a5446c69830f4a13879d681103011e89)
- changelog: add SwitchCell migrate guide [4e5f50](https://github.com/youzan/vant/commit/4e5f509b2f8418af9944ee035872c76e770bc2b3)
- changelog: add v-model demo [6347a0](https://github.com/youzan/vant/commit/6347a09df17a399e17c8212ca998ab91d68bff6c)
- Field: remove event inheirt [47cb51](https://github.com/youzan/vant/commit/47cb5159797f78df675ffb2331ae97e942f66f74)
- update v-model change [ab067e](https://github.com/youzan/vant/commit/ab067ecb0ca48292f36fe0739f967e96aefa511a)

**Feature**

- cli: package entry fit Vue 3 [173792](https://github.com/youzan/vant/commit/17379286c80fae8986e6ca626a693ac062b06abc)
- cli: update jest setup config [f0482c](https://github.com/youzan/vant/commit/f0482c7eecbbb7fd00610dd2507cd6e6223eba5b)
- ActionSheet component [aa09ba](https://github.com/youzan/vant/commit/aa09ba0fd9c65c5b5dc2ef723b2891590332c71e)
- add emits option [0e4b5a](https://github.com/youzan/vant/commit/0e4b5a0f2f00edf143079beac18c038088987a9f)
- Button component [12c167](https://github.com/youzan/vant/commit/12c167fbbccd9a2f11d4f4af4cb964e9b6fc65de)
- Cell component [2f1f54](https://github.com/youzan/vant/commit/2f1f540d6ae510d468d945e434a46e9d4106dffb)
- CellGroup component [bd5651](https://github.com/youzan/vant/commit/bd5651402a01a39e8553da2ca2e5155caed19651)
- Divider component [aa9fc7](https://github.com/youzan/vant/commit/aa9fc7fe7c66b0a55f2732f308178220a359745c)
- Empty component [aab12a](https://github.com/youzan/vant/commit/aab12a4906e5ff32da47ab575d1c9e37d6055b6f)
- Grid component [660e53](https://github.com/youzan/vant/commit/660e535811993322aaf51606904895e6b4545e36)
- i18n next [0a4c66](https://github.com/youzan/vant/commit/0a4c6676ba7fa54fe6224f6e7dde02dc21b924e4)
- image component [b79e59](https://github.com/youzan/vant/commit/b79e59bc18d34e25a9daa22e89bafbbabcdd01fe)
- layout component [e671e2](https://github.com/youzan/vant/commit/e671e22ea5d1dfb5e3bfbfa23528bd7666f53f5b)
- loading component [e0f938](https://github.com/youzan/vant/commit/e0f9382123ebc7282c22bc1f950cab99395d83ec)
- migrate AddressEdit component [134930](https://github.com/youzan/vant/commit/1349301f01e59cd5273fabd901b67ce357641bd6)
- migrate AddressList component [abe8ae](https://github.com/youzan/vant/commit/abe8ae7cca28a9963ece3062b7c2b05f18192f69)
- migrate Area component [789a2f](https://github.com/youzan/vant/commit/789a2fda1efd08cbc0bcfaecb0740c0602c81f9b)
- migrate Calendar component [0dd713](https://github.com/youzan/vant/commit/0dd713f361a85329adff9fbd5d297717795d9f27)
- migrate Card component [607410](https://github.com/youzan/vant/commit/607410a64f9ac8ed483e872cac18d6e9405fbdbb)
- migrate Checkbox/CheckboxGroup [cef8da](https://github.com/youzan/vant/commit/cef8daf717ba42cbb8f1e1096e8f93fc405c3072)
- migrate Field component [75421a](https://github.com/youzan/vant/commit/75421a47271b59ecfd7d2554d84defeb1a0aba74)
- migrate NoticeBar component [b3964e](https://github.com/youzan/vant/commit/b3964e6afa7b1f9f34f2e15b65e4f8b039697f2f)
- migrate PullRefresh component [bb8a3d](https://github.com/youzan/vant/commit/bb8a3d60b7d095fcd4c6df31b7c3d5a89cb12354)
- migrate ShareSheet component [bb445b](https://github.com/youzan/vant/commit/bb445b74eff8a046196019029cd1ac37579f322e)
- Tag: add show prop and fix transition [7317a1](https://github.com/youzan/vant/commit/7317a1379b2c4016037f9d10b7ae2363d9bb0ff2)
- migrate Circle component [94ae79](https://github.com/youzan/vant/commit/94ae79d9534e5e50739ab7b6c2c60bb77e1a90ad)
- migrate Collapse component [79511f](https://github.com/youzan/vant/commit/79511fe3311e17395c0d4e2bddd652b5a7b77427)
- migrate Contact component [6d1309](https://github.com/youzan/vant/commit/6d13094a2078714dfc7ba43a201277507ccbe363)
- migrate ContactCard component [41796b](https://github.com/youzan/vant/commit/41796b06165b40348c14daf1cda4ccb9065703da)
- migrate CountDown component [e111fd](https://github.com/youzan/vant/commit/e111fd4208c3f68531486374e2e7db7dc3f2c7a8)
- migrate CouponCell component [832ed6](https://github.com/youzan/vant/commit/832ed6f80f1aebaf0a3e4e72e9a3bbe232d058e2)
- migrate CouponList component [579a9e](https://github.com/youzan/vant/commit/579a9ebb78cd88033fb42b8ce8fa7c83ecb42a68)
- migrate DatetimePicker component [bfe2e9](https://github.com/youzan/vant/commit/bfe2e9843ba0cb2e8afba3725cbc5fd50500c681)
- migrate Dialog component [f3ff93](https://github.com/youzan/vant/commit/f3ff931ebf5f007d604f8e46bfd83da60f7e80a4)
- migrate Form component [b6b6e3](https://github.com/youzan/vant/commit/b6b6e38c45b8181c217b26eaedc451dc26e6482f)
- migrate GoodsAction component [e2d9b1](https://github.com/youzan/vant/commit/e2d9b12bd2a097ed45134f549ac0cd6994277fd9)
- migrate List component [01c740](https://github.com/youzan/vant/commit/01c7409e6e003be4d8aa950359a472c2ebacaf47)
- migrate SubmitBar component [854146](https://github.com/youzan/vant/commit/854146418ce8d05cce246d84cf077814deb514f4)
- Field: enable inheritAttrs [3c3e72](https://github.com/youzan/vant/commit/3c3e72cf792c1479b4d5d3e8bd545f7917491dc4)
- migrate DropdownMenu [998c7d](https://github.com/youzan/vant/commit/998c7d8da67e713be2073e3a113afb7070da5715)
- migrate ImagePreview component [3a290c](https://github.com/youzan/vant/commit/3a290ce5649812570c4a2450acbbfd03eff9f782)
- migrate IndexBar component [f956d1](https://github.com/youzan/vant/commit/f956d1ab3bdbbfd07d9d773936b221e8dd833712)
- migrate Notify component [0b9009](https://github.com/youzan/vant/commit/0b90092d1caf66007670b2568284ba3071b7630f)
- migrate NumberKeyboard component [a70d11](https://github.com/youzan/vant/commit/a70d1187fb0baabb31468bf115a90e743dbe0eaa)
- migrate PasswordInput component [6d3ce8](https://github.com/youzan/vant/commit/6d3ce895023873e694bb6dcbb3fa5e602b6143dc)
- migrate Picker component [9fa7a2](https://github.com/youzan/vant/commit/9fa7a258d752245dad9eb02656912bf0375529bf)
- migrate Radio/RadioGroup [2172cc](https://github.com/youzan/vant/commit/2172cce8b60c3480efb0085bfbb976ed820944b2)
- migrate Search component [735aca](https://github.com/youzan/vant/commit/735acabcec0c9c78c3f67f7d31aa150d52bdbdb8)
- migrate Sidebar component [08e03e](https://github.com/youzan/vant/commit/08e03e988fe57e73a9fdde33df829242742036d4)
- migrate Slider component [75d76d](https://github.com/youzan/vant/commit/75d76d2cecde2ae4503538cf8b6bdae9e400ca63)
- migrate Stepper component [0ed033](https://github.com/youzan/vant/commit/0ed0337de05ce35a540514f506b8a699af16e83e)
- migrate Sticky component [4ad0c3](https://github.com/youzan/vant/commit/4ad0c396efd6eb656bdd8c5d8e33ad4f29e1cd40)
- migrate Swipe component [f97864](https://github.com/youzan/vant/commit/f978642277d858d7d833538c6ffa5c5d3fd9f074)
- migrate SwipeCell component [8c4c51](https://github.com/youzan/vant/commit/8c4c51fea10f4b5c1126026b78a84f2dfd726301)
- migrate Tab component [d2291f](https://github.com/youzan/vant/commit/d2291f37104f0ad8ce9bef3ccffac668342d096d)
- migrate Tabbar component [7fda26](https://github.com/youzan/vant/commit/7fda2659f5d30420f0f2fb6188f9aa5ee120f0be)
- migrate Toast component [5d2cd5](https://github.com/youzan/vant/commit/5d2cd516ed931284c38c9396c9d921e2c9d04af2)
- migrate TreeSelect component [7a197f](https://github.com/youzan/vant/commit/7a197fc90f5320bd8e439678a42c26bad40ca80c)
- migrate Uploader component [7c2b4c](https://github.com/youzan/vant/commit/7c2b4c9abc59eb65ae57c2697dda2bed21a6b60a)
- Steps: add inactive-color prop [296315](https://github.com/youzan/vant/commit/296315c48fee3d502b5de01842d2ff4d5c2bb815)
- NavBar component [6567b0](https://github.com/youzan/vant/commit/6567b041b962b3eaafd81ef0a553996d6106e116)
- Overlay component [2a41dc](https://github.com/youzan/vant/commit/2a41dcf58e0924736bd0a5f5d547ed946de9dbae)
- Pagination component [97a6bf](https://github.com/youzan/vant/commit/97a6bf9d48558912df5aeba3c8d69e1254337e32)
- Popup component [57e035](https://github.com/youzan/vant/commit/57e035bb269ff9395bb74e49850671a040c6ddcc)
- Progress component [2539a5](https://github.com/youzan/vant/commit/2539a548b601fe98a432334551ea700d4d9c825d)
- Rate component [3bf647](https://github.com/youzan/vant/commit/3bf64717b565cd356716a3245c3e430564bafcca)
- Skeleton component [ca0b7f](https://github.com/youzan/vant/commit/ca0b7ff0281e22c6f2de4d62bba9472e2dfc0a7d)
- Steps component [4500e7](https://github.com/youzan/vant/commit/4500e71f1a1ab3daeaba3dca551b8c3bda48d02e)
- Switch component [1874b7](https://github.com/youzan/vant/commit/1874b7af606a5bdcc1e27d0f9123464ea37bda1f)
- Tag component [919161](https://github.com/youzan/vant/commit/919161568afe178c1b8e2a20dad12c9341762b4e)
- markdown-loader: compatible with vue 3 [d69702](https://github.com/youzan/vant/commit/d697026b2ca5754367d5f79ac8178e8763692ef4)

**refactor**

- DropdownItem: remove portal mixin [0b208d](https://github.com/youzan/vant/commit/0b208dc04bc0c802903ec52f12d8890017ac299a)
- NumberKeyboard: remove portal mixin [a4b481](https://github.com/youzan/vant/commit/a4b481c5cc25facb2514fd3956f7cdee531dcf0a)
- Popup: remove popup mixin [1ad76a](https://github.com/youzan/vant/commit/1ad76a8aa36f65d78e26553af2416f90f9e88eb9)
- SwipeCell: remove deprecated on-close [8031c6](https://github.com/youzan/vant/commit/8031c690dd889516d8025e0313f0f568a5b823ff)
- SwipeCell: rename open event params [13912c](https://github.com/youzan/vant/commit/13912c02a53ae00632da955230a1d1f1d9379e47)
- icon component [3bc649](https://github.com/youzan/vant/commit/3bc6495b04dd80ae8ffedea89486acbf80da147f)
- info component [425ffb](https://github.com/youzan/vant/commit/425ffb87eb0d84bb1ad00726066f114cb1559a42)

- breaking change: rename get-container to teleport [52b187](https://github.com/youzan/vant/commit/52b187692bb61ba27332274d7ff6000def8f710d)
- breaking change(Button): add success type, remove info type [07d1a2](https://github.com/youzan/vant/commit/07d1a2590ff8e2b14547c21c79b1f623089475f7)
- breaking change(Picker): enable show-toolbar by default [8843b7](https://github.com/youzan/vant/commit/8843b7875adf31c5d243b2bbc199a173aca0d83b)
- breaking change(Area): adjust change event param [832dab](https://github.com/youzan/vant/commit/832dab10cf319388cc7a946e7eb0500cd8e43244)
- breaking change(Picker): adjust change event param [036eb8](https://github.com/youzan/vant/commit/036eb8543cf09eb24fcea69564e96e29b0645f45)
- breaking change(Picker): update values param [af7e7f](https://github.com/youzan/vant/commit/af7e7fe9dfe13e20de228c6062e8ff9e86ede345)
- breaking change: rename Info to Badge [63bd47](https://github.com/youzan/vant/commit/63bd4700abbbf10eb0dbfb2984fae08142a87e17)
- breaking change: rename GoodsAction to ActionBar [fc825d](https://github.com/youzan/vant/commit/fc825d7a33219d95e0a7e43ad553a722c220ceef)
- breaking change: remove SwitchCell component [966fb5](https://github.com/youzan/vant/commit/966fb5f46a3795ffc3b64a10f79d825ebb44894f)
- Revert "chore: remove hooks ooops!" [2e6dbc](https://github.com/youzan/vant/commit/2e6dbca06dc38576308297d0ba6331ec4274e8fe)

**style**

- ActionSheet: subname align [6672b3](https://github.com/youzan/vant/commit/6672b346180190859932a48785c8ea01045c3f5e)

### v3.0.0-alpha.0

`2020-08-22`

**主要改动**

- 完成 Vue 3 适配
- 调整部分组件的 v-model 和 prop.sync 用法，以适配 v-model 语法变更
- 调整部分组件的 prop 和 event 用法
- 重命名所有组件的 info 属性为 badge
- 重命名所有组件的 get-container 属性为 teleport
- 废弃 SwitchCell 组件
- 废弃个别 API

**已知问题**

- Lazyload、Panel 和 Sku 组件暂未完成 Vue 3 适配

> 详细改动请参考 [从 v2 升级](https://youzan.github.io/vant/next/#/zh-CN/migrate-from-v2)。
