/* eslint-disable camelcase */

export type SkuData = {
  price: string;
  none_sku: boolean;
  stock_num: number;
  hide_stock: boolean;
  collection_id: number;
  tree: SkuTreeItemData[];
  list: SkuListItemData[];
  messages: SkuMessageData[];
};

export type SkuTreeItemData = {
  k: string;
  v: SkuTreeItemValueData[];
  k_s: string;
};

export type SkuTreeItemValueData = {
  id: string;
  name: string;
  imgUrl?: string;
  img_url?: string;
};

export type SkuListItemData = {
  id: number;
  s1: string;
  s2: string;
  s3: string;
  price: number;
  stock_num: number;
};

export type SkuMessageData = {
  name: string;
  type: string;
  required?: string;
  datetime?: string;
  multiple?: string;
};

export type SkuGoodsData = {
  title: string;
  picture: string;
};

export type SelectedSkuData = {
  s1: string;
  s2: string;
};
