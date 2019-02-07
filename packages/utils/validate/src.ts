/**
 * Is image source
 */
export default function src(url: string): boolean {
  return /^(https?:)?\/\/|data:image/.test(url);
}
