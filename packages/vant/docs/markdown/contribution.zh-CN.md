# 贡献指南

### 介绍

感谢你使用 Vant。

以下是关于向 Vant 提交反馈或代码的指南。在向 Vant 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下内容。

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。

## 参与开发

### 本地开发

在进行本地开发前，请先确保你的开发环境中安装了 [Node.js >= 18](https://nodejs.org)。

按照下面的步骤操作，即可在本地开发 Vant 组件。

```bash
# 克隆仓库
git clone git@github.com:vant-ui/vant.git

# 启用 pnpm 包管理器
corepack enable

# 安装依赖
pnpm i

# 进入开发模式，浏览器访问 localhost
pnpm dev
```

仓库的不同分支对应不同的 Vant 版本，请切换到对应分支进行开发：

- main 分支对应 Vant 4 版本，适用于 Vue 3
- 3.x 分支对应 Vant 3 版本 ，适用于 Vue 3
- 2.x 分支对应 Vant 2 版本，适用于 Vue 2

### 镜像仓库

如果 GitHub 克隆速度较慢，你也可以直接克隆 Vant 在 gitee 上的[镜像仓库](https://gitee.com/vant-contrib/vant)：

```bash
git clone git@gitee.com:vant-contrib/vant.git
```

镜像仓库仅用于加快国内的访问速度，请勿在镜像仓库中提 issue 和 Pull Request。

### 目录结构

Vant 采用 monorepo 进行代码管理，所有子包在 `packages` 目录下:

```
root
└─ packages
   ├─ vant        # 组件库
   ├─ vant-cli    # 脚手架
   ├─ vant-icons  # 图标库
   ├─ vant-use    # Composition API
   └─ ....        # 其他周边 npm 包
```

其中，`packages/vant` 目录为组件库的核心代码：

```
vant
├─ docs             # 文档
├─ src              # 组件源代码
├─ test             # 单测工具类
└─ vant.config.mjs  # 文档网站配置
```

`packages/vant/src` 目录包含各个组件的源码，每个文件夹对应一个组件：

```
src
└─ button
   ├─ demo             # 示例代码
   ├─ test             # 单元测试
   ├─ Component.tsx    # 组件
   ├─ index.ts         # 组件入口
   ├─ index.less       # 样式
   ├─ README.md        # 英文文档
   └─ README.zh-CN.md  # 中文文档
```

### 代码规范

在编写代码时，请注意：

- 确保代码可以通过仓库的 ESLint 校验。
- 确保代码格式是规范的，使用 prettier 进行代码格式化。
- 确保没有使用超出兼容性范围的 API，比如 `async`, `await`.

## 提交 Pull Request

### 参考指南

如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

- [第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/main/translations/README.zh-cn.md)
- [如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

### Pull Request 规范

在提交 Pull Request 时，请注意：

- 保持你的 PR 足够小，一个 PR 只解决单个问题或添加单个功能。
- 当新增组件或者修改原有组件时，记得增加或者修改对应的单元测试，保证代码的稳定。
- 在 PR 中请添加合适的描述，并关联相关的 Issue。

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码。
2. 基于 fork 后仓库的 main 分支新建一个分支，比如 `feature/button_color`。
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 main 分支。
4. Pull Request 会在 Review 通过后被合并到主仓库。
5. 等待 Vant 发布新版本，一般是每周一次。

### Pull Request 标题格式

Pull Request 的标题应该遵循以下格式：

```bash
type(ComponentName?)：commit message
```

示例：

- docs: fix typo in quickstart
- build: optimize build speed
- fix(Button): incorrect style
- feat(Button): add color prop

可选的类型：

- fix
- feat
- docs
- perf
- test
- types
- style
- build
- chore
- release
- refactor
- breaking change
- revert:

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：

```bash
# 添加主仓库到 remote
git remote add upstream git@github.com:vant-ui/vant.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 main 分支
git checkout main

# 合并主仓库代码
git merge upstream/main
```
