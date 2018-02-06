import Vue from 'vue';
import Modal from './Modal';
import context from './context';

const modalDefaultConfig = {
  className: '',
  customStyle: {}
};

const manager = {
  getModal() {
    let { modal } = context;

    if (!modal) {
      const ModalConstructor = Vue.extend(Modal);
      modal = new ModalConstructor({
        el: document.createElement('div')
      });
      modal.$on('click', () => {
        manager.onClickOverlay();
      });

      context.modal = modal;
    }

    return modal;
  },

  // close popup when click modal && closeOnClickOverlay is true
  onClickOverlay() {
    const { top } = context;
    if (top) {
      const { instance } = top;
      if (instance && instance.closeOnClickOverlay) {
        instance.close();
      }
    }
  },

  openModal(instance, config) {
    const { id, dom } = config;
    const exist = context.stack.some(item => item.id === id);

    /* istanbul ignore next */
    if (!exist) {
      const targetNode = dom && dom.parentNode && dom.parentNode.nodeType !== 11 ? dom.parentNode : document.body;
      context.stack.push({ instance, id, config, targetNode });
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

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (context.top) {
      const { targetNode, config } = context.top;

      targetNode.appendChild(modal.$el);
      Object.assign(modal, {
        ...modalDefaultConfig,
        ...config,
        visible: true
      });
    }
  }
};

export default manager;
