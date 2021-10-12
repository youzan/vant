# 贡献指南

### 介绍

感谢你使用 Vant。

以下是关于向 Vant 提交反馈或代码的指南。在向 Vant 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## 参与开发

### 本地开发

按照下面的步骤操作，即可在本地开发 Vant 组件。

```bash
# 克隆仓库
# 默认为 dev 分支，对应 Vant 3 的代码
# 如果需要在 Vant 2 上进行更改，请基于 2.x 分支进行开发
git clone git@github.com:youzan/vant.git

# 安装依赖
yarn

# 进入开发模式，浏览器访问 localhost
yarn dev
```

### 目录结构

项目的主要目录结构如下所示：

```
vant
├─ docs            # 文档
├─ packages        # 基础包
├─ src             # 组件源代码
├─ test            # 单测工具类
└─ vant.config.js  # 文档网站配置
```

组件代码位于 src 目录下，每个组件一个独立的文件夹。

### 组件目录结构

添加新组件时，请按照下面的目录结构组织文件，并在 `vant.config.js` 中配置组件名称。

```
src
└─ button
   ├─ demo             # 示例代码
   ├─ test             # 单元测试
   ├─ Component.ts     # 组件
   ├─ index.ts         # 组件入口
   ├─ index.less       # 样式
   ├─ var.less         # 样式变量
   ├─ README.md        # 英文文档
   └─ README.zh-CN.md  # 中文文档
```

## 提交 PR

### Pull Request 规范

如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

- [如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)
- [第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码
2. 基于 fork 后仓库的 dev 分支新建一个分支，比如 `feature/button_color`
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 dev 分支
4. Pull Request 会在 Review 通过后被合并到主仓库
5. 等待 Vant 发布版本，一般是每周一次

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：

```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/youzan/vant.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 dev 分支
git checkout dev

# 合并主仓库代码
git merge upstream/dev
```
