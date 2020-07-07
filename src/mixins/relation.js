import { sortChildren } from '../utils/vnodes';

export function ChildrenMixin(parent, options = {}) {
  const indexKey = options.indexKey || 'index';

  return {
    inject: {
      [parent]: {
        default: null,
      },
    },

    computed: {
      parent() {
        if (this.disableBindRelation) {
          return null;
        }

        return this[parent];
      },

      [indexKey]() {
        this.bindRelation();

        if (this.parent) {
          return this.parent.children.indexOf(this);
        }

        return null;
      },
    },

    watch: {
      disableBindRelation(val) {
        if (!val) {
          this.bindRelation();
        }
      },
    },

    mounted() {
      this.bindRelation();
    },

    beforeDestroy() {
      if (this.parent) {
        this.parent.children = this.parent.children.filter(
          (item) => item !== this
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
  };
}

export function ParentMixin(parent) {
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
