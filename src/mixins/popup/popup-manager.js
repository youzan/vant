import { addClass, removeClass } from 'src/utils/dom';

let hasModal = false;

const getModal = function() {
  let modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
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

const instances = {};

const PopupManager = {
  zIndex: 2000,

  modalStack: [],

  nextZIndex() {
    return this.zIndex++;
  },

  getInstance(id) {
    return instances[id];
  },

  register(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },

  deregister(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },

  /**
   * 遮罩层点击回调，`closeOnClickOverlay`为`true`时会关闭当前`popup`
   */
  handleOverlayClick() {
    const topModal = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topModal) return;

    const instance = PopupManager.getInstance(topModal.id);
    if (instance && instance.closeOnClickOverlay) {
      instance.close();
    }
  },

  openModal(id, zIndex, dom) {
    if (!id || zIndex === undefined) return;

    const modalStack = this.modalStack;

    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    const modalDom = getModal();

    addClass(modalDom, 'v-modal');
    setTimeout(() => {
      removeClass(modalDom, 'v-modal-enter');
    }, 200);

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.style.display = '';

    this.modalStack.push({ id: id, zIndex: zIndex });
  },

  closeModal(id) {
    const modalStack = this.modalStack;
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
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);

          modalDom.style.display = 'none';
          this.modalDom = undefined;
        }
        removeClass(modalDom, 'v-modal-leave');
      }, 200);
    }
  }
};

export default PopupManager;
