export function isValidDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
}

export function padZero(val) {
  return `00${val}`.slice(-2);
}

export function times(n, iteratee) {
  let index = -1;
  const result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

export function getTrueValue(formattedValue) {
  if (!formattedValue) return;
  while (isNaN(parseInt(formattedValue, 10))) {
    formattedValue = formattedValue.slice(1);
  }
  return parseInt(formattedValue, 10);
}

export function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
