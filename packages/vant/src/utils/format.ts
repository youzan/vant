import type { CSSProperties } from 'vue';
import { inBrowser, type Numeric } from './basic';
import { windowWidth, windowHeight } from './dom';
import { isDef, isNumeric } from './basic';

export function addUnit(value?: Numeric): string | undefined {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return undefined;
}

export function getSizeStyle(
  originSize?: Numeric | Numeric[],
): CSSProperties | undefined {
  if (isDef(originSize)) {
    if (Array.isArray(originSize)) {
      return {
        width: addUnit(originSize[0]),
        height: addUnit(originSize[1]),
      };
    }
    const size = addUnit(originSize);
    return {
      width: size,
      height: size,
    };
  }
}

export function getZIndexStyle(zIndex?: Numeric) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}

// cache
let rootFontSize: number;

function getRootFontSize() {
  if (!rootFontSize) {
    const doc = document.documentElement;
    const fontSize =
      doc.style.fontSize || window.getComputedStyle(doc).fontSize;

    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value: string) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value: string) {
  value = value.replace(/vw/g, '');
  return (+value * windowWidth.value) / 100;
}

function convertVh(value: string) {
  value = value.replace(/vh/g, '');
  return (+value * windowHeight.value) / 100;
}

export function unitToPx(value: Numeric): number {
  if (typeof value === 'number') {
    return value;
  }

  if (inBrowser) {
    if (value.includes('rem')) {
      return convertRem(value);
    }
    if (value.includes('vw')) {
      return convertVw(value);
    }
    if (value.includes('vh')) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}

const camelizeRE = /-(\w)/g;

export const camelize = (str: string): string =>
  str.replace(camelizeRE, (_, c) => c.toUpperCase());

export const kebabCase = (str: string) =>
  str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

export function padZero(num: Numeric, targetLength = 2): string {
  let str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/** clamps number within the inclusive lower and upper bounds */
export const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);

function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char);

  if (index === -1) {
    return value;
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

export function formatNumber(
  value: string,
  allowDot = true,
  allowMinus = true,
) {
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }

  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;

  return value.replace(regExp, '');
}

// add num and avoid float number
export function addNumber(num1: number, num2: number) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}
