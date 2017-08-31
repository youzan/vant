/**
 * 拼接商品价格（金额和积分）
 */
export function getTotalPrice(price, points) {
  const arr = [];
  if (points) {
    arr.push(points + '积分');
  }
  if (price) {
    arr.push('¥' + (price / 100).toFixed(2));
  }
  return arr.join(' + ');
}
