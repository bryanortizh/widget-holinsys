export type DetailPrimitive = string | number | boolean | null;

export interface DetailItem {
  key: string;
  value: DetailPrimitive;
}

export interface DetailMap {
  [key: string]: DetailPrimitive;
}

export interface BuildDetailMeta {
  totalKeys: number;
  totalValues: number;
  createdAt: string;
}

export interface BuildDetailOptions {
  keys?: string[];
  numericKeys?: string[];
  includeMeta?: boolean;
}

export interface DetailResult {
  map: DetailMap;
  items: DetailItem[];
  meta?: BuildDetailMeta;
}
