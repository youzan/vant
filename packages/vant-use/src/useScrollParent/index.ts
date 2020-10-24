import { ref, Ref, onMounted } from 'vue';

type ScrollElement = HTMLElement | Window;

const overflowScrollReg = /scroll|auto/i;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== 'HTML' && node.nodeType === ELEMENT_NODE_TYPE;
}

// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
function getScrollParent(el: Element, root: ScrollElement = window) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      }

      // see: https://github.com/youzan/vant/issues/3823
      const { overflowY: htmlOverflowY } = window.getComputedStyle(
        node.parentNode as Element
      );

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode as Element;
  }

  return root;
}

export function useScrollParent(el: Ref<Element | undefined>) {
  const scrollParent = ref<Element | Window>();

  onMounted(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value);
    }
  });

  return scrollParent;
}
