import { RenderContext, VNodeData } from 'vue';

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

export function inheritContext(context: Context): InheritContext {
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
