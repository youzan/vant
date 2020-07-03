function length2(int) {
  return int > 9 ? `${int}` : `0${int}`;
}

// 字符串转 Date
// 只处理 YYYY-MM-DD 或者 YYYY-MM-DD HH:MM 格式
export function string2Date(timeString) {
  if (!timeString) {
    return null;
  }
  return new Date(timeString.replace(/-/g, '/'));
}

// Date 转字符串
// type: date or datetime
export function date2String(date, type = 'date') {
  if (!date) {
    return '';
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let timeString = `${year}-${length2(month)}-${length2(day)}`;
  if (type === 'datetime') {
    const hours = date.getHours();
    const minute = date.getMinutes();
    timeString += ` ${length2(hours)}:${length2(minute)}`;
  }
  return timeString;
}
