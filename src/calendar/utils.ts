import { createNamespace } from '../utils';

const [createComponent, bem, t] = createNamespace('calendar');

export { createComponent, bem, t };

export const ROW_HEIGHT = 64;

export function formatMonthTitle(date: Date) {
  return t('monthTitle', date.getFullYear(), date.getMonth() + 1);
}

export function compareMonth(date1: Date, date2: Date) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}

export function compareDay(day1: Date, day2: Date) {
  const compareMonthResult = compareMonth(day1, day2);

  if (compareMonthResult === 0) {
    const date1 = day1.getDate();
    const date2 = day2.getDate();

    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}

export function getDayByOffset(date: Date, offset: number) {
  date = new Date(date);
  date.setDate(date.getDate() + offset);

  return date;
}

export function getPrevDay(date: Date) {
  return getDayByOffset(date, -1);
}

export function getNextDay(date: Date) {
  return getDayByOffset(date, 1);
}

export function calcDateNum(date: [Date, Date]) {
  const day1 = date[0].getTime();
  const day2 = date[1].getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}

export function copyDate(dates: Date) {
  return new Date(dates);
}

export function copyDates(dates: Date | Date[]) {
  if (Array.isArray(dates)) {
    return dates.map((date) => {
      if (date === null) {
        return date;
      }

      return copyDate(date);
    });
  }

  return copyDate(dates);
}
