import type { AreaList } from '.';
import type { PickerOption } from '../picker';

const EMPTY_CODE = '000000';

const makeOption = (
  text = '',
  value = EMPTY_CODE,
  children?: PickerOption[]
): PickerOption => ({
  text,
  value,
  children,
});

export function formatDataForCascade(
  { city_list: city, county_list: county, province_list: province }: AreaList,
  columnsNum: number | string,
  placeholder: string[]
) {
  const showCity = columnsNum > 1;
  const showCounty = columnsNum > 2;

  const getCityChildren = () => {
    if (showCounty) {
      return placeholder.length ? [makeOption(placeholder[1])] : [];
    }
  };

  const getProvinceChildren = () => {
    if (showCity) {
      return placeholder.length
        ? [makeOption(placeholder[0], EMPTY_CODE, showCounty ? [] : undefined)]
        : [];
    }
  };

  const provinceMap = new Map<string, PickerOption>();
  Object.keys(province).forEach((code) => {
    provinceMap.set(
      code.slice(0, 2),
      makeOption(province[code], code, getProvinceChildren())
    );
  });

  const cityMap = new Map<string, PickerOption>();
  if (showCity) {
    Object.keys(city).forEach((code) => {
      const option = makeOption(city[code], code, getCityChildren());
      cityMap.set(code.slice(0, 4), option);

      const province = provinceMap.get(code.slice(0, 2));
      if (province) {
        province.children!.push(option);
      }
    });
  }

  if (showCounty) {
    Object.keys(county).forEach((code) => {
      const city = cityMap.get(code.slice(0, 4));
      if (city) {
        city.children!.push(makeOption(county[code], code));
      }
    });
  }

  const options = Array.from(provinceMap.values()) as PickerOption[];

  if (placeholder.length) {
    const county = showCounty
      ? [makeOption(placeholder[2], EMPTY_CODE)]
      : undefined;
    const city = showCity
      ? [makeOption(placeholder[1], EMPTY_CODE, county)]
      : undefined;
    options.unshift(makeOption(placeholder[0], EMPTY_CODE, city));
  }

  return options;
}
