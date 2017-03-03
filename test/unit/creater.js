import Vue from 'vue';

let id = 0;

class Creater {
  constructor(Compo, propsData) {
    let Ctor = Vue.extend(Compo);
    this.vueInstance = new Ctor({ propsData });
  }

  mount() {
    const elem = exports.createElm();
    this.vueInstance.$mount(elem);
  }

  triggerEvent(name, ...opts) {
    let eventName;
    let elem = this.vueInstance.$el;

    if (/^mouse|click/.test(name)) {
      eventName = 'MouseEvents';
    } else if (/^key/.test(name)) {
      eventName = 'KeyboardEvent';
    } else {
      eventName = 'HTMLEvents';
    }
    const evt = document.createEvent(eventName);

    evt.initEvent(name, ...opts);
    elem.dispatchEvent
      ? elem.dispatchEvent(evt)
      : elem.fireEvent('on' + name, evt);

    return elem;
  }

  destroy() {
    this.vueInstance.$el &&
    this.vueInstance.$el.parentNode &&
    this.vueInstance.$el.parentNode.removeChild(this.$el);
  }
}

exports.createElm = function() {
  const elm = document.createElement('div');

  elm.id = 'app' + ++id;
  document.body.appendChild(elm);

  return elm;
};

exports.createVue = function(Compo, propsData = {}) {
  return new Creater(Compo, propsData);
};
