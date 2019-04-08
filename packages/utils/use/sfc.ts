/**
 * Create a basic component with common options
 */
import '../../locale';
import { camelize } from '..';
import { SlotsMixin } from '../../mixins/slots';
import Vue, {
  VNode,
  VueConstructor,
  ComponentOptions,
  CreateElement,
  RenderContext
} from 'vue';
import { InjectOptions, PropsDefinition } from 'vue/types/options';

export type ScopedSlot<Props = any> = (props?: Props) => VNode[] | VNode | undefined;

export type DefaultSlots = {
  default?: ScopedSlot;
};

export type ScopedSlots = DefaultSlots & {
  [key: string]: ScopedSlot | undefined;
};

export type ModelOptions = {
  prop?: string;
  event?: string;
};

export interface VantComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
}

export type DefaultProps = Record<string, any>;

export type FunctionComponent<
  Props = DefaultProps,
  PropDefs = PropsDefinition<Props>
> = {
  (
    h: CreateElement,
    props: Props,
    slots: ScopedSlots,
    context: RenderContext<Props>
  ): VNode | undefined;
  props?: PropDefs;
  model?: ModelOptions;
  inject?: InjectOptions;
};

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

const arrayProp = {
  type: Array,
  default: () => []
};

const numberProp = {
  type: Number,
  default: 0
};

function defaultProps(props: any) {
  Object.keys(props).forEach(key => {
    if (props[key] === Array) {
      props[key] = arrayProp;
    } else if (props[key] === Number) {
      props[key] = numberProp;
    }
  });
}

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

  Object.keys(slots).forEach(key => {
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
      pure(h, context.props, unifySlots(context), context)
  };
}

export const useSFC = (name: string) => <Props = DefaultProps, Events = {}, Slots = {}>(
  sfc: VantComponentOptions | FunctionComponent
): TsxComponent<Props, Events, Slots> => {
  if (typeof sfc === 'function') {
    sfc = transformFunctionComponent(sfc);
  }

  if (!sfc.functional) {
    sfc.mixins = sfc.mixins || [];
    sfc.mixins.push(SlotsMixin);
  }

  if (sfc.props) {
    defaultProps(sfc.props);
  }

  sfc.name = name;
  sfc.install = install;

  return sfc as TsxComponent<Props, Events, Slots>;
};
