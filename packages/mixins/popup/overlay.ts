import Overlay from '../../overlay';
import { context } from './context';
import { mount } from '../../utils/functional';

export type OverlayConfig = {
  zIndex?: number;
  className?: string;
  customStyle?: object[] | object;
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

function updateOverlay(): void {
  if (!overlay) {
    overlay = mount(Overlay, {
      on: {
        click: onClickOverlay
      }
    });
  }

  if (overlay.$el.parentNode) {
    overlay.visible = false;
  }

  if (context.top) {
    const { target, config } = context.top;

    target.appendChild(overlay.$el);
    Object.assign(overlay, defaultConfig, config, {
      visible: true
    });
  }
}

export function openOverlay(vm: any, config: OverlayConfig): void {
  /* istanbul ignore next */
  if (!context.stack.some(item => item.vm === vm)) {
    const el = vm.$el;
    const target = el && el.parentNode ? el.parentNode : document.body;
    context.stack.push({ vm, config, target });
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
