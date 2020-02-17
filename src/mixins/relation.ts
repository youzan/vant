import Vue, { VNode } from 'vue';

type ChildrenMixinOptions = {
  indexKey?: any;
};

function flattenVNodes(vnodes: VNode[]) {
  const result: VNode[] = [];

  function traverse(vnodes: VNode[]) {
    vnodes.forEach(vnode => {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

type ChildrenMixinThis = {
  disableBindRelation?: boolean;
};

export function ChildrenMixin(
  parent: string,
  options: ChildrenMixinOptions = {}
) {
  const indexKey = options.indexKey || 'index';

  return Vue.extend({
    inject: {
      [parent]: {
        default: null,
      },
    },

    computed: {
      parent() {
        if ((this as ChildrenMixinThis).disableBindRelation) {
          return null;
        }

        return (this as any)[parent];
      },

      [indexKey]() {
        this.bindRelation();
        return this.parent.children.indexOf(this);
      },
    },

    mounted() {
      this.bindRelation();
    },

    beforeDestroy() {
      if (this.parent) {
        this.parent.children = this.parent.children.filter(
          (item: any) => item !== this
        );
      }
    },

    methods: {
      bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        const children = [...this.parent.children, this];
        const vnodes = flattenVNodes(this.parent.slots());
        children.sort(
          (a, b) => vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode)
        );

        this.parent.children = children;
      },
    },
  });
}

export function ParentMixin(parent: string) {
  return {
    provide() {
      return {
        [parent]: this,
      };
    },

    data() {
      return {
        children: [],
      };
    },
  };
}
