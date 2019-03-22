import Overlay from '../../overlay';
import { context } from './context';
import { mount } from '../../utils/functional';

export type OverlayConfig = {
  zIndex?: number;
  className?: string;
  customStyle?: string | object[] | object;
};

const defaultConfig: OverlayConfig = {
  className: '',
  customStyle: {}
};

let overlay: any;

// close popup when click overlay && closeOnClickOverlay is true
function onClickOverlay(): void {
  if (context.top) {
    const { vm } = context.top;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

export function updateOverlay(): void {
  if (!overlay) {
    overlay = mount(Overlay, {
      on: {
        click: onClickOverlay
      }
    });
  }

  if (context.top) {
    const { vm, config } = context.top;

    const el = vm.$el;
    const target = el && el.parentNode ? el.parentNode : document.body;
    if (target) {
      target.appendChild(overlay.$el);
    }

    Object.assign(overlay, defaultConfig, config, {
      visible: true
    });
  } else {
    overlay.visible = false;
  }
}

export function openOverlay(vm: any, config: OverlayConfig): void {
  if (!context.stack.some(item => item.vm === vm)) {
    context.stack.push({ vm, config });
    updateOverlay();
  }
}

export function closeOverlay(vm: any): void {
  const { stack } = context;

  if (stack.length) {
    if (context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      context.stack = stack.filter(item => item.vm !== vm);
    }
  }
}
