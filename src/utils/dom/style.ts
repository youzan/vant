export function isHidden(element: HTMLElement) {
  return (
    window.getComputedStyle(element).display === 'none' || element.offsetParent === null
  );
}
