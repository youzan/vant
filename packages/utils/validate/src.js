/**
 * Is image source
 */
export default function src(url) {
  return /^(https?:)?\/\/|data:image/.test(url);
}
