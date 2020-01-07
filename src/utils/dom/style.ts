export function isHidden(element: HTMLElement) {
  const style = window.getComputedStyle(element);
  const isHidden = style.display === 'none';

  // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed
  const isParentHidden = element.offsetParent === null && style.position !== 'fixed';

  return isHidden || isParentHidden;
}
