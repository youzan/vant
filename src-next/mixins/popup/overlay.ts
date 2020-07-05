import Overlay from '../../overlay';
import { context } from './context';
import { mount } from '../../utils/functional';
import { removeNode } from '../../utils/dom/node';

export type OverlayConfig = {
  zIndex?: number;
  className?: string;
  customStyle?: string | object[] | object;
};

const defaultConfig: OverlayConfig = {
  className: '',
  customStyle: {},
};

function mountOverlay(vm: any) {
  return mount(Overlay, {
    on: {
      // close popup when overlay clicked & closeOnClickOverlay is true
      click() {
        vm.$emit('click-overlay');

        if (vm.closeOnClickOverlay) {
          if (vm.onClickOverlay) {
            vm.onClickOverlay();
          } else {
            vm.close();
          }
        }
      },
    },
  });
}

export function updateOverlay(vm: any): void {
  const item = context.find(vm);

  if (item) {
    const el = vm.$el;
    const { config, overlay } = item;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    }

    Object.assign(overlay, defaultConfig, config, {
      show: true,
    });
  }
}

export function openOverlay(vm: any, config: OverlayConfig): void {
  const item = context.find(vm);
  if (item) {
    item.config = config;
  } else {
    const overlay = mountOverlay(vm);
    context.stack.push({ vm, config, overlay });
  }

  updateOverlay(vm);
}

export function closeOverlay(vm: any): void {
  const item = context.find(vm);
  if (item) {
    item.overlay.show = false;
  }
}

export function removeOverlay(vm: any) {
  const item = context.find(vm);
  if (item) {
    removeNode(item.overlay.$el);
  }
}
