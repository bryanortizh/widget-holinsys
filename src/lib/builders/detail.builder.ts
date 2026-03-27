import {
  BuildDetailOptions,
  DetailItem,
  DetailMap,
  DetailPrimitive,
  DetailResult
} from '../models/detail-builder.types';

export function buildDetail(
  values: DetailPrimitive[],
  options: BuildDetailOptions = {}
): DetailResult {
  const keys = options.keys?.length ? options.keys : values.map((_, index) => `field_${index + 1}`);
  const numericKeySet = new Set(options.numericKeys ?? []);
  const map: DetailMap = {};
  const items: DetailItem[] = [];

  keys.forEach((key, index) => {
    const rawValue = values[index] ?? null;
    const normalizedValue = normalizeValue(rawValue, numericKeySet.has(key));

    map[key] = normalizedValue;
    items.push({ key, value: normalizedValue });
  });

  if (!options.includeMeta) {
    return {
      map,
      items
    };
  }

  return {
    map,
    items,
    meta: {
      totalKeys: keys.length,
      totalValues: values.length,
      createdAt: new Date().toISOString()
    }
  };
}

function normalizeValue(value: DetailPrimitive, parseAsNumber: boolean): DetailPrimitive {
  if (!parseAsNumber) {
    return value;
  }

  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? value : parsed;
  }

  return value;
}
