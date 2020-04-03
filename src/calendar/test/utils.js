export const now = new Date();
export const minDate = new Date(2010, 0, 10);
export const maxDate = new Date(2010, 0, 20);

export function formatDate(date) {
  if (date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }

  return '';
}

export function formatRange([start, end]) {
  return `${formatDate(start)}-${formatDate(end)}`;
}

export function formatMultiple(dates) {
  return dates.map(formatDate).join(',');
}
