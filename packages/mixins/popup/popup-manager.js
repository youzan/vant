import Vue from 'vue';
import Modal from './Modal';
import context from './popup-context';

const modalDefaultConfig = {
  className: '',
  customStyle: {}
};

const PopupManager = {
  getModal() {
    let { modal } = context;

    if (!modal) {
      const ModalConstructor = Vue.extend(Modal);
      modal = new ModalConstructor({
        el: document.createElement('div')
      });
      modal.$on('click', () => {
        PopupManager.handleOverlayClick();
      });

      context.modal = modal;
    }

    return modal;
  },

  // close popup when click modal && closeOnClickOverlay is true
  handleOverlayClick() {
    const { top } = context;
    if (top) {
      const instance = context.instances[top.id];
      if (instance && instance.closeOnClickOverlay) {
        instance.close();
      }
    }
  },

  openModal(config) {
    const { id, dom } = config;
    const exist = context.stack.some(item => item.id === id);

    if (!exist) {
      const targetNode = dom && dom.parentNode && dom.parentNode.nodeType !== 11 ? dom.parentNode : document.body;
      context.stack.push({ id, config, targetNode });
      this.updateModal();
    };
  },

  closeModal(id) {
    const { stack } = context;

    if (stack.length) {
      if (context.top.id === id) {
        stack.pop();
        this.updateModal();
      } else {
        context.stack = stack.filter(item => item.id !== id);
      }
    }
  },

  updateModal() {
    const modal = this.getModal();
    const el = modal.$el;

    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }

    if (context.top) {
      const { targetNode, config } = context.top;

      targetNode.appendChild(el);
      Object.assign(modal, {
        ...modalDefaultConfig,
        ...config
      });
    }
  }
};

export default PopupManager;
