import { isServer } from '.';

export default {
  // get nearest scroll element
  getScrollEventTarget(element, rootParent = window) {
    let node = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== rootParent) {
      const { overflowY } = this.getComputedStyle(node);
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return node;
      }
      node = node.parentNode;
    }
    return rootParent;
  },

  getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },

  setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },

  // get distance from element top to page top
  getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },

  getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },

  getComputedStyle: !isServer && document.defaultView.getComputedStyle.bind(document.defaultView)
};
