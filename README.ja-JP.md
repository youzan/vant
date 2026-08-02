<p align="center">
    <img alt="logo" src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">Vant</h1>

<p align="center">モバイルウェブアプリ向けの軽量でカスタマイズ可能な Vue UI ライブラリ。</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/main.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square&color=#4fc08d" alt="downloads" />
</p>

<p align="center">
  <a href="https://vant-ui.github.io/vant">ドキュメント</a>
  &nbsp;
  ·
  &nbsp;
  <a href="https://vant.pro/vant/">ドキュメント（バックアップ）</a>
  &nbsp;
  ·
  &nbsp;
  <a href="./README.md">English</a>
  &nbsp;
  ·
  &nbsp;
  <a href="./README.zh-CN.md">中文介绍</a>
</p>

---

## 特徴

- 🚀 平均コンポーネントサイズ 1KB（min+gzip）
- 🚀 80 種類以上の高品質コンポーネント
- 🚀 サードパーティ依存ゼロ
- 💪 90% 以上のユニットテストカバレッジ
- 💪 TypeScript で記述
- 📖 充実したドキュメントとデモ
- 📖 Sketch および Axure デザインリソースを提供
- 🍭 Vue 2 & Vue 3 対応
- 🍭 Nuxt 2 & Nuxt 3 対応、Nuxt 向けの [Vant Module](https://github.com/vant-ui/vant-nuxt) を提供
- 🍭 Tree Shaking 対応
- 🍭 カスタムテーマ対応
- 🍭 アクセシビリティ対応（改善中）
- 🍭 ダークモード対応
- 🍭 SSR 対応
- 🌍 i18n 対応、30 言語以上を内蔵

## インストール

`npm` を使ってインストール：

```bash
# Vue 3 プロジェクト向けに最新の Vant をインストール
npm i vant

# Vue 2 プロジェクト向けに Vant 2 をインストール
npm i vant@latest-v2
```

`yarn`、`pnpm`、または `bun` を使う場合：

```bash
# yarn を使う場合
yarn add vant

# pnpm を使う場合
pnpm add vant

# Bun を使う場合
bun add vant
```

## スキャフォールド

スキャフォールドプロジェクトの作成には [Rsbuild](https://github.com/web-infra-dev/rsbuild) の使用を推奨します。

Rsbuild は Rspack をベースにしたビルドツールで、Vant の作者が開発しています。優れたビルド速度と開発体験を提供し、Vant を最優先でサポートしています。

以下のコマンドで Rsbuild プロジェクトを作成できます：

```bash
npm create rsbuild@latest
```

詳細は [Rsbuild リポジトリ](https://github.com/web-infra-dev/rsbuild) をご覧ください。

## クイックスタート

```js
import { createApp } from 'vue';
// 1. 必要なコンポーネントをインポート
import { Button } from 'vant';
// 2. コンポーネントのスタイルをインポート
import 'vant/lib/index.css';

const app = createApp();

// 3. 必要なコンポーネントを登録
app.use(Button);
```

詳細は [クイックスタート](https://vant-ui.github.io/vant/#/en-US/quickstart) を参照してください。

## ブラウザサポート

Vant 2 はモダンブラウザおよび Android >= 4.0、iOS >= 8.0 をサポートしています。

Vant 3/4 はモダンブラウザおよび Chrome >= 51、iOS >= 10.0（Vue 3 と同様）をサポートしています。

## 公式エコシステム

| プロジェクト | 説明 |
| --- | --- |
| [vant-weapp](https://github.com/vant-ui/vant-weapp) | WeChat ミニプログラム UI |
| [vant-demo](https://github.com/vant-ui/vant-demo) | Vant デモ集 |
| [vant-cli](https://github.com/vant-ui/vant/tree/main/packages/vant-cli) | UI ライブラリ向けスキャフォールド |
| [vant-icons](https://github.com/vant-ui/vant/tree/main/packages/vant-icons) | Vant アイコン |
| [vant-touch-emulator](https://github.com/vant-ui/vant/tree/main/packages/vant-touch-emulator) | デスクトップブラウザで Vant を使用 |
| [vant-nuxt](https://github.com/vant-ui/vant-nuxt) | Nuxt 向け Vant モジュール |

## コミュニティエコシステム

| プロジェクト | 説明 |
| --- | --- |
| [3lang3/react-vant](https://github.com/3lang3/react-vant) | Vant をベースにした React モバイル UI コンポーネント |
| [vant-theme](https://github.com/Aisen60/vant-theme) | Vant UI を使ったオンラインテーマプレビュー |
| [@antmjs/vantui](https://github.com/antmjs/vantui) | Vant をベースにしたモバイル UI コンポーネント（Taro と React 対応） |
| [Taroify](https://github.com/mallfoundry/taroify) | Vant の Taro バージョン |
| [vant-playground](https://github.com/LadyChatterleyLover/vant-playground) | Vant プレイグラウンド |
| [sfc-playground-vant](https://github.com/zhixiaoqiang/sfc-playground-vant) | Vant プレイグラウンド |
| [vue3-h5-template](https://github.com/yulimchen/vue3-h5-template) | Vant をベースにしたモバイルプロジェクトテンプレート |
| [vue3-vant-mobile](https://github.com/vue-zone/vue3-vant-mobile) | Vant をベースにしたモバイルプロジェクトテンプレート（すぐに使える） |
| [vscode-common-intellisense](https://github.com/Simon-He95/vscode-common-intellisense) | Vant 開発者向けの優れた IntelliSense を提供する VS Code 拡張機能 |
| [nuxt-vant-mobile](https://github.com/vue-zone/nuxt-vant-mobile) | Vant をベースにした Nuxt 4 モバイルプロジェクトテンプレート（すぐに使える） |
| [mobvue](https://github.com/un-pany/mobvue) | 丁寧に作られたモバイルウェブアプリテンプレート |

## リンク

- [ドキュメント](https://vant-ui.github.io/vant/)
- [ドキュメント（バックアップ）](https://vant.pro/vant/)
- [変更履歴](https://vant-ui.github.io/vant/#/en-US/changelog)
- [ディスカッション](https://github.com/vant-ui/vant/discussions)

## プレビュー

以下の QR コードをスキャンしてデモにアクセスできます：

<img src="https://fastly.jsdelivr.net/npm/@vant/assets/preview-qrcode.png" width="220" height="220" >

## コアチーム

Vant および Vant Weapp のコアコントリビューター：

| [![chenjiahan](https://avatars.githubusercontent.com/u/7237365?s=80&v=4)](https://github.com/chenjiahan/) | [![cookfront](https://avatars.githubusercontent.com/u/4829465?s=80&v=4)](https://github.com/cookfront/) | [![w91](https://avatars.githubusercontent.com/u/2599455?s=80&v=4)](https://github.com/w91/) | [![pangxie1991](https://avatars.githubusercontent.com/u/5961240?s=80&v=4)](https://github.com/pangxie1991/) | [![rex-zsd](https://avatars.githubusercontent.com/u/8767877?s=80&v=4)](https://github.com/rex-zsd/) | [![nemo-shen](https://avatars.githubusercontent.com/u/13480805?s=80&v=4)](https://github.com/nemo-shen/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [chenjiahan](https://github.com/chenjiahan/) | [cookfront](https://github.com/cookfront/) | [wangnaiyi](https://github.com/w91/) | [pangxie](https://github.com/pangxie1991/) | [rex-zsd](https://github.com/rex-zsd/) | [nemo-shen](https://github.com/nemo-shen/) |

| [![Lindysen](https://avatars.githubusercontent.com/u/33708359?s=80&v=4)](https://github.com/Lindysen/) | [![JakeLaoyu](https://avatars.githubusercontent.com/u/16181940?s=80&v=4)](https://github.com/JakeLaoyu/) | [![landluck](https://avatars.githubusercontent.com/u/27060081?s=80&v=4)](https://github.com/landluck/) | [![wjw-gavin](https://avatars.githubusercontent.com/u/19986739?s=80&v=4)](https://github.com/wjw-gavin/) | [![inottn](https://avatars.githubusercontent.com/u/18509404?s=80&v=4)](https://github.com/inottn/) | [![zhousg](https://avatars.githubusercontent.com/u/15833290?s=80&v=4)](https://github.com/zhousg/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [Lindysen](https://github.com/Lindysen/) | [JakeLaoyu](https://github.com/JakeLaoyu/) | [landluck](https://github.com/landluck/) | [wjw-gavin](https://github.com/wjw-gavin/) | [inottn](https://github.com/inottn/) | [zhousg](https://github.com/zhousg/) |

## 全コントリビューター

Vant への貢献に感謝します：

<a href="https://github.com/vant-ui/vant/graphs/contributors">
  <img src="https://opencollective.com/vant/contributors.svg?width=890&button=false" alt="contributors">
</a>

## コントリビューションガイド

プルリクエストを作成する前に必ず [コントリビューティングガイド](./.github/CONTRIBUTING.md) をお読みください。

## Web IDE で始める

[https://github.dev/youzan/vant](https://github.dev/youzan/vant)

## ライセンス

Vant は [MIT](https://github.com/youzan/vant/blob/main/LICENSE) ライセンスです。
