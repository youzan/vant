# 开发指南

### 介绍

首先感谢你使用 Vant。

以下是关于向 Vant 提交代码的指南。在向 Vant 提交 Issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

### Issue 规范

- 遇到问题时，请先确认这个问题已经在 issue 中有记录或者已被修复
- 提 Issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

### Pull Request 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码
2. 基于 fork 后仓库的 dev 分支新建一个分支，比如`feature/button_color`
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 dev 分支
4. Pull Request 会在 Review 通过后被合并到主仓库
5. 等待 Vant 发布版本，一般是每周一次

### 同步教程

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码

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

### 初始化项目

```bash
git clone git@github.com:youzan/vant.git

cd vant

# 安装依赖
npm run bootstrap

# 本地开发模式
npm run dev
```

浏览器访问 [http://localhost:8080](http://localhost:8080) 就可以看到所有组件的示例了。

### 目录结构

- 仓库的组件代码位于 src 下，每个组件一个文件夹
- docs 目录下是文档网站的代码，本地开发时可以在目录下运行 npm run dev 开启文档网站

项目目录大致如下：

```
vant
├─ build            # 构建脚本
├─ docs             # 文档网站
├─ src              # 组件文件
├─ test             # 单元测试
└─ types            # 类型定义
```

### 添加新组件

添加新组件时，请按照下面的目录结构组织文件，并在 `docs/src/doc.config.js` 中配置组件名称

```
src
|- button
|  ├─ demo        # 示例代码
|  ├─ test        # 单元测试
|  ├─ zh-CN.md    # 中文文档
|  ├─ en-US.md    # 英文文档
|  ├─ index.less  # 组件样式
|  └─ index.vue   # 组件入口
|
├─ index.js       # 所有组件入口
└─ index.less     # 所有组件样式
```
