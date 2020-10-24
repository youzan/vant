import {
  VNode,
  isVNode,
  provide,
  reactive,
  getCurrentInstance,
  VNodeNormalizedChildren,
  ComponentPublicInstance,
  ComponentInternalInstance,
} from 'vue';

export function flattenVNodes(children: VNodeNormalizedChildren) {
  const result: VNode[] = [];

  const traverse = (children: VNodeNormalizedChildren) => {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (isVNode(child)) {
          result.push(child);

          if (child.component?.subTree) {
            traverse(child.component.subTree.children);
          }

          if (child.children) {
            traverse(child.children);
          }
        }
      });
    }
  };

  traverse(children);

  return result;
}

// sort children instances by vnodes order
export function sortChildren(
  parent: ComponentInternalInstance,
  publicChildren: ComponentPublicInstance[],
  internalChildren: ComponentInternalInstance[]
) {
  const vnodes = flattenVNodes(parent.subTree.children);

  internalChildren.sort(
    (a, b) => vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode)
  );

  const orderedPublicChildren = internalChildren.map((item) => item.proxy!);

  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a);
    const indexB = orderedPublicChildren.indexOf(b);
    return indexA - indexB;
  });
}

export function useChildren(key: string | symbol) {
  const publicChildren: ComponentPublicInstance[] = reactive([]);
  const internalChildren: ComponentInternalInstance[] = reactive([]);
  const parent = getCurrentInstance()!;

  const linkChildren = (value?: any) => {
    const link = (child: ComponentInternalInstance) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy);
        sortChildren(parent, publicChildren, internalChildren);
      }
    };

    const unlink = (child: ComponentInternalInstance) => {
      const index = internalChildren.indexOf(child);
      publicChildren.splice(index, 1);
      internalChildren.splice(index, 1);
    };

    provide(key, {
      link,
      unlink,
      children: publicChildren,
      internalChildren,
      ...value,
    });
  };

  return {
    children: publicChildren,
    linkChildren,
  };
}
