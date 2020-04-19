import { on, off } from './event';
import {
  getScrollTop,
  getElementTop,
  getVisibleHeight,
  getScrollEventTarget,
} from './scroll';

const CONTEXT = '@@Waterfall';
const OFFSET = 300;

// 处理滚动函数
function handleScrollEvent() {
  const element = this.el;
  const { scrollEventTarget } = this;
  // 已被禁止的滚动处理
  if (this.disabled) return;

  const targetScrollTop = getScrollTop(scrollEventTarget);
  const targetVisibleHeight = getVisibleHeight(scrollEventTarget);
  // 滚动元素可视区域下边沿到滚动元素元素最顶上 距离
  const targetBottom = targetScrollTop + targetVisibleHeight;

  // 如果无元素高度，考虑为元素隐藏，直接返回
  if (!targetVisibleHeight) return;

  // 判断是否到了底
  let needLoadMoreToLower = false;
  if (element === scrollEventTarget) {
    needLoadMoreToLower =
      scrollEventTarget.scrollHeight - targetBottom < this.offset;
  } else {
    const elementBottom =
      getElementTop(element) -
      getElementTop(scrollEventTarget) +
      getVisibleHeight(element);
    needLoadMoreToLower = elementBottom - targetVisibleHeight < this.offset;
  }
  if (needLoadMoreToLower) {
    this.cb.lower &&
      this.cb.lower({ target: scrollEventTarget, top: targetScrollTop });
  }

  // 判断是否到了顶
  let needLoadMoreToUpper = false;
  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    const elementTop =
      getElementTop(element) - getElementTop(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }
  if (needLoadMoreToUpper) {
    this.cb.upper &&
      this.cb.upper({ target: scrollEventTarget, top: targetScrollTop });
  }
}

// 绑定事件到元素上
// 读取基本的控制变量
function doBindEvent() {
  if (this.el[CONTEXT].binded) {
    return;
  }
  this.el[CONTEXT].binded = true;

  this.scrollEventListener = handleScrollEvent.bind(this);
  this.scrollEventTarget = getScrollEventTarget(this.el);

  const disabledExpr = this.el.getAttribute('waterfall-disabled');
  let disabled = false;
  if (disabledExpr) {
    this.vm.$watch(disabledExpr, (value) => {
      this.disabled = value;
      this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }
  this.disabled = disabled;

  const offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;

  on(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);

  this.scrollEventListener();
}

// 绑定事件
function startBind(el) {
  const context = el[CONTEXT];

  context.vm.$nextTick(() => {
    doBindEvent.call(el[CONTEXT]);
  });
}

// 确认何时绑事件监听函数
function doCheckStartBind(el) {
  const context = el[CONTEXT];

  if (context.vm._isMounted) {
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', () => {
      startBind(el);
    });
  }
}

export default function (type) {
  return {
    bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el,
          vm: vnode.context,
          cb: {},
        };
      }
      el[CONTEXT].cb[type] = binding.value;

      doCheckStartBind(el);
    },

    update(el) {
      const context = el[CONTEXT];
      context.scrollEventListener && context.scrollEventListener();
    },

    unbind(el) {
      const context = el[CONTEXT];
      if (context.scrollEventTarget) {
        off(context.scrollEventTarget, 'scroll', context.scrollEventListener);
      }
    },
  };
}
