# 开发 vant

首先感谢你使用 Vant。

以下是关于向 Vant 提交代码的指南。在向 Vant 提交 Issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

## Issue 规范
如果遇到问题，请先确认这个是否已经在 issue 中有记录或者已被修复。你可以直接搜索已有的 Issue 或者 PR。

提 Issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## Pull Request 规范
- 在开始大量代码修改之前，建议先开一个 Issue 进行讨论
- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能。
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在提交 PR 之前，请先进行 rebase 操作，保证提交时的 history 是干净的
- 在 PR 中请添加合适的描述，并关联相关的 Issue

## 初始化项目:

```bash
yarn

npm run dev
```

浏览器访问 [http://localhost:8080](http://localhost:8080) 就可以看到所有组件的示例了。

## 代码目录结构

- 仓库的组件代码都位于 `packages` 下，每个组件一个文件夹
- 所有的组件样式代码都位于 `packages/vant-css/src` 下，`vant-css` 也会在发布时单独发包
- `docs/markdown` 目录下是文档网站的代码，根据语言划分为 zh-CN 和 en-US，本地开发时可以在根目录下运行 `npm run dev` 开启文档网站。

项目目录大致如下：

```
vant
├── build            # 组件打包配置和编译需要的脚本
├── docs             # 文档网站代码
├── packages         # 组件源代码
├── test             # 组件测试代码
```

## 添加新组件

主要步骤：

- 添加 Vue 代码

以添加新组件 `Button` 为例，首先在 `packages` 目录下新建目录 `button`，用 `index.js` 或者 `index.vue` 文件做为组件入口，需要的话可以建其他文件来组织代码。

- 添加样式代码

组件对应的样式需要放到 `packages/vant-css/src` 目录下，`Button` 组件的话需要新建一个文件 `button.css`。如若个组件样式比较复杂，为了方便组织代码可以在 `packages/vant-css/src` 下面新建一个同名目录 `button`，里面可以放一些 partial 样式。

新添加的 `button.css` 文件需要在 `packages/vant-css/src/index.css` 中手动 import。

- 添加文档

新组件的文档编写，需要在 `docs/markdown` 下各个语言中新建对应同名文档 `button.md`，在 `docs/demos` 下创建组件示例，并在 `docs/src/doc.config.js` 中进行配置组件名称

- 添加测试代码

需要在 `test/specs` 目录下增加对应组件的测试文件，以 .spec.js 结尾，如：`button.spec.js`。测试框架使用了 karma + mocha + sinon + chai，vue 相关的操作使用了 [avoriaz](https://github.com/eddyerburgh/avoriaz)


## 组件文档如何编写

`docs/markdown` 下根据语言划分了组件文档，每个组件需要在各语言中编辑对应的文档。组件文档采用 markdown 格式，内容包括使用示例以及 `API` 等。具体书写规范请参考 [组件文档书写规范](./MARKDOWN.md)。

#### API 说明

组件的 API 说明，请以表格的形式书写，表格包含以下列：

| 参数         |   说明         | 类型     | 默认值      | 备选值            |
| ------------ | ------------- | -------- | ---------- | ----------------- |
| visible      | 是否可见       | bool     |  `false` | `true` \| `false` |

#### Event 说明

组件的 Event 说明，请以表格的形式书写，表格包含以下列：

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| click | 点击按钮时触发 | event：事件对象 |

## 一些实用技巧

#### 组件互相引用

比如说 `Dialog` 里面引用了 `Button` 组件，直接写相对路径引用即可。

#### 组件导出

为了统一管理，每个组件只能通过 `export default` 一个东西，如果需要导出多个变量，请把其余变量挂载在 `export default` 的变量上。

#### 样式

组件样式使用 `precss`，语法请参考 [precss 文档](https://github.com/jonathantneal/precss).

#### 关于 z-index

为了防止 `z-index` 滥用，我们规定了组件库内部的 `z-index` 使用规范。

`z-index` 优先级（从高到低）：

* 特殊组件：Toast 永远在最上面，[3000, +∞)
* ‘用完就关’ 的组件：Dialog, Pop, Actionsheet, ImagePreview 等 [2000, 3000)
* 其他：组件内部用来控制层次的 z-index 的区间 [-10, 10]，尽可能写小，一般1，2，3这种就够了。
