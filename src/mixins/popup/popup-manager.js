import Vue from 'vue';
import { addClass } from 'src/utils/dom';

const getModal = function() {
  let modalDom = window.popupContext && window.popupContext.modalDom;

  if (modalDom) {
    window.popupContext.hasModal = true;
  } else {
    window.popupContext.hasModal = false;

    modalDom = document.createElement('div');
    window.popupContext.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function(event) {
      event.preventDefault();
      event.stopPropagation();
    });

    modalDom.addEventListener('click', function() {
      PopupManager.handleOverlayClick && PopupManager.handleOverlayClick();
    });
  }

  return modalDom;
};

const PopupManager = {
  nextZIndex() {
    return this.popupContext.zIndex++;
  },

  getInstance(id) {
    return this.popupContext.instances[id];
  },

  register(id, instance, context) {
    if (id && instance) {
      this.popupContext = context;
      this.popupContext.instances[id] = instance;
    }
  },

  deregister(id) {
    if (id) {
      this.popupContext.instances[id] = null;
      delete this.popupContext.instances[id];
    }
  },

  /**
   * 遮罩层点击回调，`closeOnClickOverlay`为`true`时会关闭当前`popup`
   */
  handleOverlayClick() {
    const topModal = this.popupContext.modalStack[this.popupContext.modalStack.length - 1];
    if (!topModal) return;

    const instance = PopupManager.getInstance(topModal.id);
    if (instance && instance.closeOnClickOverlay) {
      instance.close();
    }
  },

  openModal(id, zIndex, dom) {
    if (!id || zIndex === undefined) return;

    const modalStack = this.popupContext.modalStack;

    for (let i = 0, len = modalStack.length; i < len; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    const modalDom = getModal();

    addClass(modalDom, 'zan-modal');

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.style.display = '';

    this.popupContext.modalStack.push({ id: id, zIndex: zIndex });
  },

  closeModal(id) {
    const modalStack = this.popupContext.modalStack;
    const modalDom = getModal();

    if (modalStack.length > 0) {
      const topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }

    if (modalStack.length === 0) {
      setTimeout(() => {
        if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);

        modalDom.style.display = 'none';
        this.modalDom = null;
      }, 200);
    }
  }
};

export default PopupManager;
