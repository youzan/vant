/* eslint-disable no-underscore-dangle */
import { VNode } from 'vue';

function flattenVNodes(vnodes: VNode[]) {
  const result: VNode[] = [];

  function traverse(vnodes: VNode[]) {
    vnodes.forEach((vnode) => {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

type VueInstance = {
  _vnode: VNode;
  $vnode: VNode;
};

// sort children instances by vnodes order
export function sortChildren(children: VueInstance[], parent: VueInstance) {
  const vnodes = flattenVNodes(parent._vnode.children!);
  children.sort((a, b) => vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode));
}
