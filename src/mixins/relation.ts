import Vue, { VNode } from 'vue';

type ChildrenMixinOptions = {
  indexKey?: any;
};

function containVNode(parentNode: VNode, childNode: VNode): boolean {
  if (parentNode === childNode) {
    return true;
  }

  if (parentNode.children) {
    return parentNode.children.some(node => containVNode(node, childNode));
  }

  return false;
}

function findVNodeIndex(childs: VNode[], node: VNode) {
  for (let i = 0; i < childs.length; i++) {
    if (containVNode(childs[i], node)) {
      return i;
    }
  }

  return -1;
}

export function ChildrenMixin(parent: string, options: ChildrenMixinOptions = {}) {
  const indexKey = options.indexKey || 'index';

  return Vue.extend({
    inject: {
      [parent]: {
        default: null
      }
    },

    computed: {
      parent() {
        return (this as any)[parent];
      },

      [indexKey]() {
        this.bindRelation();
        return this.parent.children.indexOf(this);
      }
    },

    created() {
      this.bindRelation();
    },

    beforeDestroy() {
      if (this.parent) {
        this.parent.children = this.parent.children.filter((item: any) => item !== this);
      }
    },

    methods: {
      bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        const children = [...this.parent.children, this];
        const vnodes = this.parent.slots();

        children.sort((a, b) => {
          const indexA = findVNodeIndex(vnodes, a.$vnode);
          const indexB = findVNodeIndex(vnodes, b.$vnode);
          return indexA > indexB ? 1 : -1;
        });

        this.parent.children = children;
      }
    }
  });
}

export function ParentMixin(parent: string) {
  return {
    provide() {
      return {
        [parent]: this
      };
    },

    data() {
      return {
        children: []
      };
    }
  };
}
