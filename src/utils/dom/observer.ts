export function observeStyle(el: Element, callback: MutationCallback) {
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(callback);
    observer.observe(el, { attributes: true, attributeFilter: ['style'] });
  }
}
