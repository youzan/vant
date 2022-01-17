# 图标贡献指南

## 设计稿

Vant 图标库托管在 [iconfont.cn](https://iconfont.cn) 上，同时仓库中保留了一份完整的 Sketch 设计稿。

[在线预览链接](https://iconfont.cn/collections/detail?cid=31945)

## 更新流程

新增/更新图标的标准流程如下：

### 1. 绘制图标

在 Sketch 中绘制所需的图标，并更新到 `assets/icons.sketch` 文件中。

绘制图标前，请阅读：[iconfont - 图标绘制](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.16&helptype=draw)。

### 2. 上传图标

从 Sketch 中导出图标对应的 SVG 文件，并上传到 [iconfont 项目](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2553510)中。

<img src="https://img.yzcdn.cn/upload_files/2021/12/21/Fi0XXEorB1SVr_BT-Dz6txHOKNlB.png" style="width: 800px;">

> 此步骤需要图标库管理员权限，请联系 Vant 维护者进行添加。

### 3. 更新代码

在 iconfont 中将更新后的图标库下载到本地，并更新以下文件：

- `src/index.less`: 更新字体文件的 CDN 链接。
- `src/encode-woff2.less`: 更新字体文件的 base64 URL。

如果有新增图标，还需要更新以下文件：

- `src/config.js`: 增加新图标的英文名称。
- `src/common.less`: 增加新图标的样式类。

字体文件的 base64 URL 通过 [transfonter](https://transfonter.org/) 生成，步骤如下图所示：

<img src="https://img01.yzcdn.cn/upload_files/2021/12/21/FlMHanQNhDV1XWaw8spnAtHKumjW.png" style="width: 800px;">

### 4. 发布图标库

执行 `yarn release` 命令，发布 `@vant/icons` 到 npm。

发布完成后，在对应仓库中进行升级，即可使用新图标。
