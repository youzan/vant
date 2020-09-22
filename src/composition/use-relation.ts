import { VNode, isVNode, VNodeNormalizedChildren } from 'vue';

export function flattenVNodes(children: VNodeNormalizedChildren) {
  const result: VNode[] = [];

  const traverse = (children: VNodeNormalizedChildren) => {
    if (!Array.isArray(children)) {
      return;
    }

    children.forEach((child) => {
      if (isVNode(child)) {
        result.push(child);

        if (child.children) {
          traverse(child.children);
        }
      }
    });
  };

  traverse(children);

  return result;
}
