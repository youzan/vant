import {
  VNode,
  toRaw,
  isVNode,
  provide,
  reactive,
  InjectionKey,
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
            result.push(child.component.subTree);
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

const findVNodeIndex = (vnodes: VNode[], child: ComponentInternalInstance) => {
  const vnode = child.vnode;
  const index = vnodes.indexOf(vnode);
  if (index !== -1) {
    return index;
  }

  // While a dynamic update is being patched, `child.vnode` can still point to
  // the previous vnode. The component instance is stable across re-renders, so
  // try locating the child by instance as well (`toRaw` is needed because the
  // children are stored in a reactive array).
  const rawChild = toRaw(child);
  const instanceIndex = vnodes.findIndex(
    (item) => item.component === rawChild,
  );
  if (instanceIndex !== -1) {
    return instanceIndex;
  }

  const keyIndex = vnodes.findIndex(
    (item) =>
      vnode.key !== undefined &&
      vnode.key !== null &&
      item.type === vnode.type &&
      item.key === vnode.key,
  );
  if (keyIndex !== -1) {
    return keyIndex;
  }

  // The child is not in the current tree yet (e.g. a field rendered after an
  // inserted one has not been patched). Trailing it keeps the existing order
  // instead of moving the child to the front, which would corrupt the order.
  return vnodes.length;
};

// sort children instances by vnodes order
export function sortChildren(
  parent: ComponentInternalInstance,
  publicChildren: ComponentPublicInstance[],
  internalChildren: ComponentInternalInstance[],
) {
  const vnodes = flattenVNodes(parent.subTree.children);

  internalChildren.sort(
    (a, b) => findVNodeIndex(vnodes, a) - findVNodeIndex(vnodes, b),
  );

  const orderedPublicChildren = internalChildren.map((item) => item.proxy!);

  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a);
    const indexB = orderedPublicChildren.indexOf(b);
    return indexA - indexB;
  });
}

export function useChildren<
  // eslint-disable-next-line
  Child extends ComponentPublicInstance = ComponentPublicInstance<{}, any>,
  ProvideValue = never,
>(key: InjectionKey<ProvideValue>) {
  const publicChildren: Child[] = reactive([]);
  const internalChildren: ComponentInternalInstance[] = reactive([]);
  const parent = getCurrentInstance()!;

  const linkChildren = (value?: ProvideValue) => {
    const link = (child: ComponentInternalInstance) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy as Child);
        sortChildren(parent, publicChildren, internalChildren);
      }
    };

    const unlink = (child: ComponentInternalInstance) => {
      const index = internalChildren.indexOf(child);
      publicChildren.splice(index, 1);
      internalChildren.splice(index, 1);
    };

    provide(
      key,
      Object.assign(
        {
          link,
          unlink,
          children: publicChildren,
          internalChildren,
        },
        value,
      ),
    );
  };

  return {
    children: publicChildren,
    linkChildren,
  };
}
