import { padZero } from '../utils';

export function getDate(timeStamp: number) {
  const date = new Date(timeStamp * 1000);
  return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(
    date.getDate(),
  )}`;
}

export const formatDiscount = (discount: number) =>
  (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);

export const formatAmount = (amount: number) =>
  (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
