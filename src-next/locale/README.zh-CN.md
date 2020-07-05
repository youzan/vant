# 国际化

### 介绍

Vant 默认采用中文作为语言，如果需要使用其他语言，可以参考下面的方案。

### 多语言切换

Vant 通过 Locale 组件实现多语言支持，使用 `Locale.use` 方法可以切换当前使用的语言。

```js
import { Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### 修改默认文案

通过 `Locale.add` 方法可以实现文案的修改和扩展，示例如下：

```js
import { Locale } from 'vant';

const messages = {
  'zh-CN': {
    vanPicker: {
      confirm: '关闭', // 将'确认'修改为'关闭'
    },
  },
};

Locale.add(messages);
```

### 配置文件

目前支持的语言:

| 语言           | 文件名 |
| -------------- | ------ |
| 简体中文       | zh-CN  |
| 繁體中文（港） | zh-HK  |
| 繁體中文（台） | zh-TW  |
| 英语           | en-US  |
| 土耳其语       | tr-TR  |
| 西班牙语       | es-ES  |
| 日语           | ja-JP  |
| 罗马尼亚语     | ro-RO  |

> 在 [这里](https://github.com/youzan/vant/tree/dev/src/locale/lang) 查看所有的 i18n 配置文件。

### Sku 组件

语言包中默认不包含 Sku 业务组件的语言配置，因此如果有 Sku 组件的国际化需求，请自行配置国际化文案。
