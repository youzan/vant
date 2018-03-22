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

#### 自定义字体
如果我们的Icon数量无法满足你的需求，可以用以下方法，保留原本Icon的情况下，增加更多你想要的Icon

[Demo地址](https://github.com/qianzhaoy/vant--mobile-mall/blob/master/src/assets/scss/iconfont/iconfont.css)
```css
@font-face {
	font-family: "iconfont";
	src: url('./iconfont.ttf') format('truetype');
}

@font-face {
	font-family: "vanIcon";
	src: url(https://b.yzcdn.cn/zanui/icon/vant-icon-4c3245.ttf) format('truetype');
}

.van-icon {
	position: relative;
	font-family: "iconfont", "vanIcon" !important;
	font-size: 14px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.van-icon-success:before {
	content: "\e626";
}
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 图标名称 | `String` | `''` | - |
| info | 图标右上角文字提示 | `String` | `''` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击图标时触发 | - |
