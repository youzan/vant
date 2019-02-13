import { RenderContext, VNodeData } from 'vue/types';
import { ScopedSlot } from 'vue/types/vnode';

type ObjectIndex = {
  [key: string]: any;
};

type Context = RenderContext & { data: VNodeData & ObjectIndex };

type InheritContext = Partial<VNodeData> & ObjectIndex;

const inheritKey = [
  'style',
  'class',
  'attrs',
  'nativeOn',
  'directives',
  'staticClass',
  'staticStyle'
];

const mapInheritKey: ObjectIndex = { nativeOn: 'on' };

// inherit partial context, map nativeOn to on
export function inherit(context: Context): InheritContext {
  return inheritKey.reduce(
    (obj, key) => {
      if (context.data[key]) {
        obj[mapInheritKey[key] || key] = context.data[key];
      }
      return obj;
    },
    {} as InheritContext
  );
}

// emit event
export function emit(context: Context, eventName: string, ...args: any[]) {
  const listeners = context.listeners[eventName];
  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(listener => {
        listener(...args);
      });
    } else {
      listeners(...args);
    }
  }
}

// unify slots & scopedSlots
export function unifySlots(context: Context) {
  const { scopedSlots } = context;
  const slots = context.slots();

  Object.keys(slots).forEach(key => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key];
    }
  });

  return scopedSlots;
}
