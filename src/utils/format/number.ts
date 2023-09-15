export function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char);
  let prefix = '';

  if (index === -1) {
    return value;
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  if (char === '.' && value.match(/^(\.|-\.)/)) {
    prefix = index ? '-0' : '0';
  }

  return (
    prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '')
  );
}

export function formatNumber(
  value: string,
  allowDot = true,
  allowMinus = true
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
