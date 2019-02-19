/**
 * Is image source
 */
export function isSrc(url: string): boolean {
  return /^(https?:)?\/\/|data:image/.test(url);
}
