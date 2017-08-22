import Vue from 'vue';

export const once = function(el, event, fn) {
  const listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    el.removeEventListener(event, listener);
  };
  el.addEventListener(event, listener);
};
