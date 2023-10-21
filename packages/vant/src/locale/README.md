# Internationalization

### Intro

Vant uses Chinese as the default language. If you want to use other languages, please follow the instructions below.

## Usage

### Switch languages

Vant supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to different languages.

```js
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Override default configs

Use `Locale.add` method to modify the default configs.

```js
import { Locale } from 'vant';

const messages = {
  'en-US': {
    vanPicker: {
      confirm: 'Close',
    },
  },
};

Locale.add(messages);
```

### Config files

Current supported languages:

| Language                 | Filename     | Version  |
| ------------------------ | ------------ | -------- |
| Arabic                   | ar-SA        | `v3.5.0` |
| Bulgarian                | bg-BG        | `v3.5.0` |
| Bangla (Bangladesh)      | bn-BD        | `v3.4.5` |
| Danish                   | da-DK        | `v3.4.8` |
| German                   | de-DE        | -        |
| German (formal)          | de-DE-formal | -        |
| Greek                    | el-GR        | `v3.5.0` |
| English                  | en-US        | -        |
| Esperanto                | eo-EO        | `v4.0.9` |
| Spanish (Spain)          | es-ES        | -        |
| Farsi                    | fa-IR        | `v3.5.0` |
| French                   | fr-FR        | -        |
| Hebrew                   | he-IL        | `v3.5.0` |
| Hindi                    | hi-IN        | `v3.4.3` |
| Indonesian               | id-ID        | `v3.4.5` |
| Icelandic                | is-IS        | `v3.4.7` |
| Italian                  | it-IT        | `v3.4.5` |
| Japanese                 | ja-JP        | -        |
| Khmer                    | km-KH        | `v4.1.2` |
| Korean                   | ko-KR        | `v3.4.3` |
| Lao                      | la-LA        | `v3.4.7` |
| Mongolian                | mm-MN        | `v4.0.5` |
| Norwegian                | nb-NO        | -        |
| Dutch                    | nl-NL        | `v4.0.5` |
| Portuguese (Brazil)      | pt-BR        | `v3.3.3` |
| Romanian                 | ro-RO        | -        |
| Russian                  | ru-RU        | `v3.1.5` |
| Serbian                  | sr-RS        | `v4.6.4` |
| Swedish                  | sv-SE        | `v3.4.7` |
| Thai                     | th-TH        | -        |
| Turkish                  | tr-TR        | -        |
| Ukrainian                | uk-UA        | `v3.4.5` |
| Vietnamese               | vi-VN        | `v3.4.5` |
| Chinese                  | zh-CN        | -        |
| Traditional Chinese (HK) | zh-HK        | -        |
| Traditional Chinese (TW) | zh-TW        | -        |

> View all language configs [Here](https://github.com/vant-ui/vant/tree/main/packages/vant/src/locale/lang).

### Add new language

If you can’t find the language you need, please send us a Pull Request to add the new language pack, you can refer to [Add German language pack](https://github.com/vant-ui/vant/pull/7245) PR.

### Get Current Lang

You can get the current language using `useCurrentLang` method.

- **Type:**

```ts
function useCurrentLang(): Ref<string>;
```

- **Example:**

```ts
import { useCurrentLang } from 'vant';

const currentLang = useCurrentLang();

console.log(currentLang.value); // --> 'en-US'
```
