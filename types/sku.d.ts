/* eslint-disable camelcase */
import { VanComponent } from './component';

export type SkuData = {
  price: string;
  none_sku: boolean;
  stock_num: number;
  hide_stock: boolean;
  collection_id: number;
  tree: SkuTreeItemData[];
  list: SkuListItemData[];
  messages: SkuMessageData[];
  properties: SkuPropItemData[];
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
  previewImgUrl?: string;
};

export type SkuPropItemData = {
  k: string;
  v: SkuPropItemValueData[];
  k_id: number;
  is_multiple?: boolean;
};

export type SkuPropItemValueData = {
  id: string;
  name: string;
  price?: number;
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
  placeholder?: string;
};

export type SkuGoodsData = {
  title: string;
  picture: string;
};

export type SelectedSkuData = Record<string, string>;

export class Sku extends VanComponent {
  getSkuData(): SkuData;

  resetSelectedSku(): void;
}
