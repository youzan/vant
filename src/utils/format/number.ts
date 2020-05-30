export function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

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

export function formatNumber(value: string, allowDot?: boolean) {
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  value = trimExtraChar(value, '-', /-/g);

  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;

  return value.replace(regExp, '');
}
