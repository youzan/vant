export function formatNumber(value: string, allowDot: boolean) {
  if (allowDot) {
    const dotIndex = value.indexOf('.');

    if (dotIndex > -1) {
      value =
        value.slice(0, dotIndex + 1) + value.slice(dotIndex).replace(/\./g, '');
    }
  } else {
    value = value.split('.')[0];
  }

  const regExp = allowDot ? /[^0-9.]/g : /\D/g;

  return value.replace(regExp, '');
}
