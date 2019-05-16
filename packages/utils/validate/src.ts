/**
 * Is image source
 */
export function isSrc(url: string): boolean {
  return /^(((blob:)?https?:)?\/\/|data:image)/.test(url);
}
