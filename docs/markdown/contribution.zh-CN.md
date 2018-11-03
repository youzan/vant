## 开发指南

首先感谢你使用 Vant。

以下是关于向 Vant 提交代码的指南。在向 Vant 提交 Issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

### Issue 规范

- 遇到问题时，请先确认这个问题已经在 issue 中有记录或者已被修复
- 提 Issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

### Pull Request 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

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

- 仓库的组件代码位于 packages 下，每个组件一个文件夹
- docs 目录下是文档网站的代码，本地开发时可以在目录下运行 npm run dev 开启文档网站

项目目录大致如下：

```
vant
├─ build            # 构建脚本
├─ docs             # 文档网站
├─ packages         # 组件文件
├─ test             # 单元测试
└─ types            # 类型定义
```

### 添加新组件

添加新组件时，请按照下面的目录结构组织文件，并在 `docs/src/doc.config.js` 中配置组件名称

```
packages
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

### 组件文档

组件文档采用 markdown 格式，内容包括使用示例以及 `API` 等。

##### 1. 标题规范

文档标题从 `h2`（即 `##` 标题 ）开始，每往下一级多加一个 `#` 号。

##### 2. 组件描述

大标题下面是对组件的一句话简要描述。

##### 3. 使用指南

如果组件需要使用指南，放在组件描述下方，另起一个二级标题。

##### 4. 代码演示

书写代码演示时，建议从简单用法开始介绍，不要上来就同时使用一大堆 API，会让人觉得难以上手。并且一个示例只演示一个 API 的使用方法，如无特殊需求不要在一个示例中同时演示多个 API 混合使用。

```html
<van-button :size="size">
  Large
</van-button>
```

```javascript
export default {
  data() {
    return {
      size: 'large'
    };
  }
};
```

#### 5. API 说明

组件的 API 说明，请以表格的形式书写，表格包含以下列：

| 参数 | 说明 | 类型 | 默认值 |
| ------------ | ------------- | -------- | ---------- |
| visible | 是否可见 | bool | `false` |

#### 6. Event 说明

组件的 Event 说明，请以表格的形式书写，表格包含以下列：

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击按钮时触发 | event：事件对象 |

### 实用技巧

#### 组件互相引用

比如说 `Dialog` 里面引用了 `Button` 组件，直接写相对路径引用即可。

```js
import Button from '../button';
```

#### 组件创建

Vant 中的组件会通过 `create` 方法统一创建，`create` 方法会在选项文件中注入基本的依赖和方法。

```js
import create from '../utils/create';

export default create({
  name: 'button'
});
```

#### 样式

组件样式使用 `precss 3.0` 作为预处理器，具体语法请参考 [precss 文档](https://github.com/jonathantneal/precss).
