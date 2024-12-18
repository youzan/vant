import {
  compareDay,
  compareMonth,
  getNextDay,
  calcDateNum,
  isLastRowInMonth,
} from '../utils';

const date1 = new Date(2010, 0, 1);
const date2 = new Date(2010, 0, 2);
const date3 = new Date(2010, 1, 1);
const date4 = new Date(2011, 0, 1);

test('compareMonth', () => {
  expect(compareMonth(date1, date1)).toEqual(0);
  expect(compareMonth(date1, date2)).toEqual(0);
  expect(compareMonth(date2, date3)).toEqual(-1);
  expect(compareMonth(date1, date4)).toEqual(-1);
  expect(compareMonth(date4, date1)).toEqual(1);
});

test('compareDay', () => {
  expect(compareDay(date1, date1)).toEqual(0);
  expect(compareDay(date1, date2)).toEqual(-1);
  expect(compareDay(date2, date3)).toEqual(-1);
  expect(compareDay(date4, date1)).toEqual(1);
});

test('getNextDay', () => {
  expect(getNextDay(date1).getDate()).toEqual(2);
  expect(getNextDay(date2).getDate()).toEqual(3);
});

test('calcDateNum', () => {
  expect(calcDateNum([date1, date2])).toEqual(2);
  expect(calcDateNum([date1, date3])).toEqual(32);
});

test('isLastRowInMonth', () => {
  // test first day of month
  expect(isLastRowInMonth(new Date(2024, 0, 1), 0)).toEqual(false);

  // test middle of month
  expect(isLastRowInMonth(new Date(2024, 0, 22), 0)).toEqual(false);
  expect(isLastRowInMonth(new Date(2024, 0, 28), 0)).toEqual(false);

  // test last week of month
  expect(isLastRowInMonth(new Date(2024, 0, 29), 0)).toEqual(true);
  expect(isLastRowInMonth(new Date(2024, 0, 31), 0)).toEqual(true);

  // test different offset
  expect(isLastRowInMonth(new Date(2024, 0, 18), 4)).toEqual(false);
  expect(isLastRowInMonth(new Date(2024, 0, 24), 4)).toEqual(false);
  expect(isLastRowInMonth(new Date(2024, 0, 25), 4)).toEqual(true);
  expect(isLastRowInMonth(new Date(2024, 0, 31), 4)).toEqual(true);
});
