/**
 * Create a basic component with common options
 */
import '../../locale';
import { isFunction } from '..';
import { camelize } from '../format/string';
import { SlotsMixin } from '../../mixins/slots';
import Vue, {
  VNode,
  VueConstructor,
  ComponentOptions,
  RenderContext,
} from 'vue';
import { DefaultProps, FunctionComponent } from '../types';

export interface VantComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
}

export type TsxBaseProps<Slots> = {
  key: string | number;
  // hack for jsx prop spread
  props: any;
  class: any;
  style: string | object[] | object;
  scopedSlots: Slots;
};

export type TsxComponent<Props, Events, Slots> = (
  props: Partial<Props & Events & TsxBaseProps<Slots>>
) => VNode;

function install(this: ComponentOptions<Vue>, Vue: VueConstructor) {
  const { name } = this;
  Vue.component(name as string, this);
  Vue.component(camelize(`-${name}`), this);
}

// unify slots & scopedSlots
export function unifySlots(context: RenderContext) {
  // use data.scopedSlots in lower Vue version
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  const slots = context.slots();

  Object.keys(slots).forEach((key) => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key];
    }
  });

  return scopedSlots;
}

// should be removed after Vue 3
function transformFunctionComponent(
  pure: FunctionComponent
): VantComponentOptions {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context): any =>
      pure(h, context.props, unifySlots(context), context),
  };
}

export function createComponent(name: string) {
  return function <Props = DefaultProps, Events = {}, Slots = {}>(
    sfc: VantComponentOptions | FunctionComponent
  ): TsxComponent<Props, Events, Slots> {
    if (isFunction(sfc)) {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;

    return sfc as TsxComponent<Props, Events, Slots>;
  };
}
