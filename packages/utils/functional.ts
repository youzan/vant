import Vue, { RenderContext, VNodeData } from 'vue';

type ObjectIndex = {
  [key: string]: any;
};

type Context = RenderContext & { data: VNodeData & ObjectIndex };

type InheritContext = Partial<VNodeData> & ObjectIndex;

const inheritKey = [
  'ref',
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
export function inherit(
  context: Context,
  inheritListeners?: boolean
): InheritContext {
  const result = inheritKey.reduce(
    (obj, key) => {
      if (context.data[key]) {
        obj[mapInheritKey[key] || key] = context.data[key];
      }
      return obj;
    },
    {} as InheritContext
  );

  if (inheritListeners) {
    result.on = result.on || {};
    Object.assign(result.on, context.data.on);
  }

  return result;
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

// mount functional component
export function mount(Component: any, data?: VNodeData) {
  const instance = new Vue({
    el: document.createElement('div'),
    props: Component.props,
    render(h) {
      return h(Component, {
        props: this.$props,
        ...data
      });
    }
  });

  document.body.appendChild(instance.$el);

  return instance;
}
