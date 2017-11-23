import context from './popup-context';

const PopupManager = {
  getModal() {
    let { modal } = context;

    if (!modal) {
      modal = document.createElement('div');
      modal.classList.add('van-modal');
      modal.addEventListener('touchmove', event => {
        event.preventDefault();
        event.stopPropagation();
      });
      modal.addEventListener('click', () => {
        PopupManager.handleOverlayClick();
      });

      context.modal = modal;
    }

    return modal;
  },

  // close popup when click modal && closeOnClickOverlay is true
  handleOverlayClick() {
    const { topModal } = context;
    if (topModal) {
      const instance = context.instances[topModal.id];
      if (instance && instance.closeOnClickOverlay) {
        instance.close();
      }
    }
  },

  openModal({id, zIndex, dom, extraClass, extraStyle}) {
    const { modalStack } = context;
    const exist = modalStack.some(item => item.id === id);

    if (!exist) {
      const modal = this.getModal();
      if (extraClass) {
        modal.classList.add(extraClass);
      }
      if (extraStyle) {
        modal.style.cssText = `${modal.style.cssText} ${extraStyle}`;
      }
      modal.style.zIndex = zIndex;

      const parentNode = dom && dom.parentNode && dom.parentNode.nodeType !== 11 ? dom.parentNode : document.body;
      parentNode.appendChild(modal);
      modalStack.push({ id, zIndex, parentNode });
    };
  },

  closeModal(id) {
    const { modalStack } = context;

    if (modalStack.length) {
      if (context.topModal.id === id) {
        const modal = this.getModal();
        modalStack.pop();
        modal.parentNode.removeChild(modal);
        if (modalStack.length) {
          const { topModal } = context;
          modal.style.zIndex = topModal.zIndex;
          topModal.parentNode.appendChild(modal);
        }
      } else {
        context.modalStack = modalStack.filter(item => item.id !== id);
      }
    }
  }
};

export default PopupManager;
