import Vue from 'vue';
import { sortChildren } from '../utils/vnodes';

type ChildrenMixinOptions = {
  indexKey?: any;
};

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

        sortChildren(children, this.parent);

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
