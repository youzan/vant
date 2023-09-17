# 图标贡献指南

## 设计稿

Vant 图标库托管在 [iconfont.cn](https://iconfont.cn) 上，同时仓库中保留了一份完整的 Sketch 设计稿。

[在线预览链接](https://iconfont.cn/collections/detail?cid=31945)

## 更新流程

新增/更新图标的标准流程如下：

### 1. 绘制图标

在 Sketch 中绘制所需的图标，并更新到 `assets/icons.sketch` 文件中。

绘制图标，请遵循以下图标规范：

- 首先要遵循 [iconfont - 图标绘制](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.16&helptype=draw) 中的基本规则，保证图标可以正确上传到 iconfont。
- 建议采用 `18x18` 规格绘制图标，图标的四周留出 `1px` 空隙，绘制完成后放大至 `1000x1000`。
- 绘制线框风格图标时，线条的标准宽度为 `1px`（放大后为 `55.55px`）。
- 线框风格图标如果有对应的实底风格图标，需要为名称添加 `-o` 后缀，比如 `star-o` 和 `star` 为一组对应的图标。

### 2. 上传图标

从 Sketch 中导出图标对应的 SVG 文件，并上传到 [iconfont 项目](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2553510)中。

<img src="https://fastly.jsdelivr.net/npm/@vant/assets/iconfont-upload.png" style="width: 800px;">

> 此步骤需要图标库管理员权限，请联系 Vant 维护者进行添加。

### 3. 更新代码

在 iconfont 中更新图标库代码，将新代码下载到本地，并更新以下文件：

- `src/index.less`: 更新字体文件的 CDN 链接。
- `src/encode-woff2.less`: 更新字体文件的 base64 URL 和 CDN 链接。

如果有新增图标，还需要更新以下文件：

- `src/config.js`: 增加新图标的英文名称。
- `src/common.less`: 增加新图标的样式类。

字体文件的 base64 URL 通过 [transfonter](https://transfonter.org/) 生成，步骤如下图所示：

<img src="https://fastly.jsdelivr.net/npm/@vant/assets/icon-transform.png" style="width: 800px;">

### 4. 发布图标库

执行 `pnpm run release` 命令，发布 `@vant/icons` 到 npm。

发布完成后，在对应仓库中进行升级，即可使用新图标。
