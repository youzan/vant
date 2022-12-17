interface PageOf {
  content: any[];
  number: number;
  size: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  empty: boolean | number;
}
interface ListTotal {
  list: any[];
  total: number;
}
type Result = any[] | PageOf | ListTotal;

export function formatResult(result: Result): any[] {
  if (Array.isArray(result)) {
    return result;
  } else if (Array.isArray((result as ListTotal)?.list)) {
    return (result as ListTotal).list;
  } else if (Array.isArray((result as PageOf)?.content)) {
    return (result as PageOf).content;
  } else {
    return [];
  }
}