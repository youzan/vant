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
type Result = any[] | PageOf | ListTotal | string;

export function formatResult(result: Result): any[] {
  if (!result)
    return [];
  if (typeof result === 'string') {
    let list = [];
    try {
      list = formatResult(JSON.parse(result));
    } catch (err) {
      console.error(err);
    }
    return list;
  }
  if (Array.isArray(result))
    return result;
  if (Array.isArray((result as ListTotal)?.list))
    return (result as ListTotal).list;
  if (Array.isArray((result as PageOf)?.content))
    return (result as PageOf).content;
  return [];
}