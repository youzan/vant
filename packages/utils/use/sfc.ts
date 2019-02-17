/**
 * Create a basic component with common options
 */
import '../../locale';
import { camelize } from '..';
import SlotsMixin from '../../mixins/slots';
import Vue, {
  VueConstructor,
  ComponentOptions,
  CreateElement,
  RenderContext
} from 'vue/types';
import { VNode } from 'vue/types/vnode';
import { InjectOptions, PropsDefinition } from 'vue/types/options';

export type ScopedSlot = (props?: any) => VNode[] | undefined;

export type ScopedSlots = {
  [key: string]: ScopedSlot | undefined;
  default?: ScopedSlot;
};

export type ModelOptions = {
  prop?: string;
  event?: string;
};

export interface VantComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
};

export type DefaultProps = Record<string, any>;

export type FunctionalComponent<
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

export type VantTsxComponent<T> = (props: T) => VNode;

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
  if (name) {
    Vue.component(name, this);
    Vue.component(camelize(`-${name}`), this);
  }
}

// unify slots & scopedSlots
export function unifySlots(context: RenderContext) {
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  const slots = context.slots();

  Object.keys(slots).forEach(key => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key];
    }
  });

  return scopedSlots;
}

function transformFunctionalComponent(
  pure: FunctionalComponent
): VantComponentOptions {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context): any => pure(h, context.props, unifySlots(context), context)
  };
}

export default (name: string) => <T = DefaultProps>(
  sfc: VantComponentOptions | FunctionalComponent
): VantTsxComponent<T> => {
  if (typeof sfc === 'function') {
    sfc = transformFunctionalComponent(sfc);
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

  return sfc as VantTsxComponent<T>;
};
