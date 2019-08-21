// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
export function getScrollEventTarget(element, rootParent = window) {
  let node = element;
  while (
    node &&
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === 1 &&
    node !== rootParent
  ) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return node;
    }
    node = node.parentNode;
  }
  return rootParent;
}

export function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}

// get distance from element top to page top
export function getElementTop(element) {
  return (
    (element === window ? 0 : element.getBoundingClientRect().top) +
    getScrollTop(window)
  );
}

export function getVisibleHeight(element) {
  return element === window
    ? element.innerHeight
    : element.getBoundingClientRect().height;
}
