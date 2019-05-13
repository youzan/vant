import { VNode, CreateElement, RenderContext } from 'vue';
import { InjectOptions, PropsDefinition } from 'vue/types/options';

export type EventHanlder = (eventName?: Event) => void;

export type ObjectIndex = {
  [key: string]: any;
};

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

export type DefaultProps = Record<string, any>;

export type FunctionComponent<Props = DefaultProps, PropDefs = PropsDefinition<Props>> = {
  (h: CreateElement, props: Props, slots: ScopedSlots, context: RenderContext<Props>):
    | VNode
    | undefined;
  props?: PropDefs;
  model?: ModelOptions;
  inject?: InjectOptions;
};
