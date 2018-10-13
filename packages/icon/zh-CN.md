## Icon 图标

### 使用指南
``` javascript
import { Icon } from 'vant';

Vue.use(Icon);
```

### 代码演示

#### 基础用法

设置`name`属性为对应的图标名称即可，所有可用的图标名称见右侧列表

```html
<van-icon name="success" />
```

#### 使用本地字体文件

Icon 组件默认引用 `yzcdn.cn` 域名下的字体文件，如果想要使用本地字体文件，请引入下面的 css 文件

```js
import 'vant/lib/vant-css/icon-local.css';
```

#### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入你需要的 iconfont 对应的 ttf 文件和样式，之后就可以在 Icon 组件中直接使用

```css
@font-face {
  font-family: 'custom-iconfont';
  src: url('./iconfont.ttf') format('truetype');
}

.van-icon {
  font-family: 'vant-icon', 'custom-iconfont' !important;
}

.van-icon-extra:before {
  content: '\e626';
}
```

```html
<van-icon name="extra" />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 图标名称 | `String` | - |
| info | 图标右上角文字提示 | `String | Number` | - |
| color | 图标颜色 | `String` | `inherit` |
| size | 图标大小，如 `20px`，`2em` | `String` | `inherit` |
| class-prefix | 类名前缀 | `String` | `van-icon` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击图标时触发 | - |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.2.1 | feature | 新增 class-prefix 属性
| 1.2.0 | bugfix | 修复 size 属性不生效的问题
| 1.1.15 | feature | 新增 size 属性
| 1.1.10 | breaking change | 移除 birthday-privilege、member-day-privilege、balance-details 图标
| 1.1.3 | feature | 新增 color 属性
