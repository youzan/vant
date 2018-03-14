import Vue from 'vue';
import Modal from './Modal';
import context from './context';

const defaultConfig = {
  className: '',
  customStyle: {}
};

export default {
  open(vm, config) {
    const { id, dom } = config;
    const exist = context.stack.some(item => item.id === id);

    /* istanbul ignore next */
    if (!exist) {
      const targetNode = dom && dom.parentNode && dom.parentNode.nodeType !== 11 ? dom.parentNode : document.body;
      context.stack.push({ vm, id, config, targetNode });
      this.update();
    };
  },

  close(id) {
    const { stack } = context;

    if (stack.length) {
      if (context.top.id === id) {
        stack.pop();
        this.update();
      } else {
        context.stack = stack.filter(item => item.id !== id);
      }
    }
  },

  update() {
    let { modal } = context;

    if (!modal) {
      modal = new (Vue.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);

      context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (context.top) {
      const { targetNode, config } = context.top;

      targetNode.appendChild(modal.$el);
      Object.assign(modal, {
        ...defaultConfig,
        ...config,
        visible: true
      });
    }
  },

  // close popup when click modal && closeOnClickOverlay is true
  onClick() {
    if (context.top) {
      const { vm } = context.top;
      if (vm) {
        vm.$emit('click-overlay');
        vm.closeOnClickOverlay && vm.close();
      }
    }
  }
};
