# 开发 vant

首先感谢你使用 Vant。

以下是关于向 Vant 提交代码的指南。在向 Vant 提交 Issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

## Issue 规范

如果遇到问题，请先确认这个是否已经在 issue 中有记录或者已被修复。你可以直接搜索已有的 Issue 或者 PR。
提 Issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## Pull Request 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能。
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

## 初始化项目:

```bash
git clone git@github.com:youzan/vant.git

cd vant

npm run bootstrap

npm run dev
```

浏览器访问 [http://localhost:8080](http://localhost:8080) 就可以看到所有组件的示例了。

## 代码目录结构

- 仓库的组件代码都位于 `packages` 下，每个组件一个文件夹
- 所有的组件样式代码都位于 `packages/vant-css/src` 下，`vant-css` 也会在发布时单独发包
- `docs` 目录下是文档网站的代码，本地开发时可以在根目录下运行 `npm run dev` 开启文档网站

项目目录大致如下：

```
vant
├── build            # 组件打包配置和编译需要的脚本
├── docs             # 文档网站代码
├── packages         # 组件源代码
├── test             # 单元测试代码
├── types            # TS 类型定义
```

## 添加新组件

主要步骤：

- 添加 Vue 代码

以添加新组件 `Button` 为例，首先在 `packages` 目录下新建目录 `button`，用 `index.js` 或者 `index.vue` 文件做为组件入口，需要的话可以建其他文件来组织代码。

- 添加样式代码

组件对应的样式需要放到 `packages/vant-css/src` 目录下，`Button` 组件的话需要新建一个文件 `button.css`。新添加的 `button.css` 文件需要在 `packages/vant-css/src/index.css` 中手动 import。

- 添加文档、示例和测试

组件文档放在组件目录下，并以 `en-US.md` 和 `zh-CN.md` 作为文件名，测试代码放在组件目录下的 `test` 文件夹中，示例代码放在组件目录下的 `demo` 文件夹中。

- 将组件添加到文档网站

在 `docs/src/doc.config.js` 中进行配置组件名称，即可将将组件添加到文档网站


## 组件文档如何编写

`docs/markdown` 下根据语言划分了组件文档，每个组件需要在各语言中编辑对应的文档。组件文档采用 markdown 格式，内容包括使用示例以及 `API` 等。具体书写规范请参考 [组件文档书写规范](./MARKDOWN.md)。

#### API 说明

组件的 API 说明，请以表格的形式书写，表格包含以下列：

| 参数 | 说明 | 类型 | 默认值 |
| ------------ | ------------- | -------- | ---------- |
| visible | 是否可见 | bool | `false` |

#### Event 说明

组件的 Event 说明，请以表格的形式书写，表格包含以下列：

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击按钮时触发 | event：事件对象 |

## 一些实用技巧

#### 组件互相引用

比如说 `Dialog` 里面引用了 `Button` 组件，直接写相对路径引用即可。

#### 组件导出

为了统一管理，每个组件只能通过 `export default` 一个东西，如果需要导出多个变量，请把其余变量挂载在 `export default` 的变量上。

#### 样式

组件样式使用 `precss`，语法请参考 [precss 文档](https://github.com/jonathantneal/precss).
