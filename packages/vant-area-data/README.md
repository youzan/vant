# Vant China Area Data

中国省市区数据，适用于 Vant 的 Area 和 Cascader 等组件。

## 安装

```shell
# 通过 npm
npm i @vant/area-data

# 通过 yarn
yarn add @vant/area-data

# 通过 pnpm
pnpm add @vant/area-data
```

## 使用

在 Vant 的 Area 组件中使用时，直接引用 `areaList` 对象即可：

```ts
import { areaList } from '@vant/area-data';
```

在 Vant 的 Cascader 组件中使用时，请使用 `useCascaderAreaData` 方法：

```ts
import { useCascaderAreaData } from '@vant/area-data';

const cascaderAreaData = useCascaderAreaData();
```

## 数据更新

中国的行政区划每年都会有变动，如果发现省市区数据未及时更新，欢迎提 Pull Request 帮助我们更新。你可以在[「国家统计局 - 全国区划代码」](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/) 和[「民政部 - 行政区划代码」](https://www.mca.gov.cn/article/sj/xzqh/1980/)上查询到最新数据，请根据官方数据进行核实。
