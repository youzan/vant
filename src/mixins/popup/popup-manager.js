import Vue from 'vue';
import merge from 'src/utils/merge';
import { addClass } from 'src/utils/dom';

let popupContext;
if (Vue.prototype.$isServer) {
  popupContext = global.popupContext || {};
  global.popupContext = popupContext;
} else {
  popupContext = window.popupContext || {};
  window.popupContext = popupContext;
}

popupContext = merge(popupContext, {
  hasModal: false,
  instances: {},
  modalStack: []
});

const getModal = function() {
  let modalDom = PopupManager.modalDom;
  if (modalDom) {
    popupContext.hasModal = true;
  } else {
    popupContext.hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;

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
  zIndex: 2000,

  nextZIndex() {
    return this.zIndex++;
  },

  getInstance(id) {
    return popupContext.instances[id];
  },

  register(id, instance) {
    if (id && instance) {
      popupContext.instances[id] = instance;
    }
  },

  deregister(id) {
    if (id) {
      popupContext.instances[id] = null;
      delete popupContext.instances[id];
    }
  },

  /**
   * 遮罩层点击回调，`closeOnClickOverlay`为`true`时会关闭当前`popup`
   */
  handleOverlayClick() {
    const topModal = popupContext.modalStack[popupContext.modalStack.length - 1];
    if (!topModal) return;

    const instance = PopupManager.getInstance(topModal.id);
    if (instance && instance.closeOnClickOverlay) {
      instance.close();
    }
  },

  openModal(id, zIndex, dom) {
    if (!id || zIndex === undefined) return;

    const modalStack = popupContext.modalStack;

    for (let i = 0, len = modalStack.length; i < len; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    const modalDom = getModal();

    addClass(modalDom, 'zan-modal');

    document.body.appendChild(modalDom);

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.style.display = '';

    popupContext.modalStack.push({ id: id, zIndex: zIndex });
  },

  closeModal(id) {
    const modalStack = popupContext.modalStack;
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
