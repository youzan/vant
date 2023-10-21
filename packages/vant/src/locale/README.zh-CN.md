# 国际化

### 介绍

Vant 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。

## 使用方法

### 多语言切换

Vant 通过 Locale 组件实现多语言支持，使用 `Locale.use` 方法可以切换当前使用的语言。

```js
import { Locale } from 'vant';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### 覆盖语言包

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

### 语言包

目前支持的语言:

| 语言                 | 文件名       | 版本     |
| -------------------- | ------------ | -------- |
| 阿拉伯语              | ar-SA        | `v3.5.0` |
| 保加利亚语           | bg-BG        | `v3.5.0` |
| 孟加拉语（孟加拉国） | bn-BD        | `v3.4.5` |
| 丹麦语               | da-DK        | `v3.4.8` |
| 德语                 | de-DE        | -        |
| 德语（正式）         | de-DE-formal | -        |
| 希腊语               | el-GR        | `v3.5.0` |
| 英语                 | en-US        | -        |
| 世界语               | eo-EO        | `v4.0.9` |
| 西班牙语             | es-ES        | -        |
| 波斯语               | fa-IR        | `v3.5.0` |
| 法语                 | fr-FR        | -        |
| 希伯来语             | he-IL        | `v3.5.0` |
| 印地语               | hi-IN        | `v3.4.3` |
| 印度尼西亚语         | id-ID        | `v3.4.5` |
| 冰岛语               | is-IS        | `v3.4.7` |
| 意大利语             | it-IT        | `v3.4.5` |
| 日语                 | ja-JP        | -        |
| 高棉语               | km-KH        | `v4.1.2` |
| 韩语/朝鲜语          | ko-KR        | `v3.4.3` |
| 老挝语               | la-LA        | `v3.4.7` |
| 蒙古语               | mm-MN        | `v4.0.5` |
| 挪威语               | nb-NO        | -        |
| 荷兰语               | nl-NL        | `v4.0.5` |
| 葡萄牙语（巴西）     | pt-BR        | `v3.3.3` |
| 罗马尼亚语           | ro-RO        | -        |
| 俄罗斯语             | ru-RU        | `v3.1.5` |
| 塞尔维亚语           | sr-RS        | `v4.6.4` |
| 瑞典语               | sv-SE        | `v3.4.7` |
| 泰语                 | th-TH        | -        |
| 土耳其语             | tr-TR        | -        |
| 乌克兰语             | uk-UA        | `v3.4.5` |
| 越南语               | vi-VN        | `v3.4.5` |
| 简体中文             | zh-CN        | -        |
| 繁體中文（港）       | zh-HK        | -        |
| 繁體中文（台）       | zh-TW        | -        |

> 在 [这里](https://github.com/vant-ui/vant/tree/main/packages/vant/src/locale/lang) 查看所有的语言包源文件。

### 获取当前语言

你可以通过 `useCurrentLang` 方法来获取当前使用的语言。

- **类型：**

```ts
function useCurrentLang(): Ref<string>;
```

- **示例：**

```ts
import { useCurrentLang } from 'vant';

const currentLang = useCurrentLang();

console.log(currentLang.value); // --> 'zh-CN'
```

## 常见问题

### 找不到所需的语言包？

如果上方列表中没有你需要的语言，欢迎给我们提 Pull Request 来增加新的语言包，改动内容可以参考[增加德语语言包](https://github.com/vant-ui/vant/pull/7245) 的 PR。

### 业务代码如何实现国际化？

可以使用 [vue-i18n](https://github.com/kazupon/vue-i18n) 来实现。

### 以 CDN 形式引入时，如何使用语言包？

目前没有提供 CDN 形式的语言包，可以手动拷贝语言包的内容来使用。

### 语言包中不包含 Sku 组件？

语言包中默认不包含 Sku 业务组件的语言配置，因此如果有 Sku 组件的国际化需求，请自行配置国际化文案。
