export function ChildrenMixin(parent, options = {}) {
  const indexKey = options.indexKey || 'index';

  return {
    inject: {
      // TODO: disableBindRelation
      parent: {
        from: parent,
        default: null,
      },
    },

    computed: {
      [indexKey]() {
        this.bindRelation();

        if (this.parent) {
          return this.parent.children.indexOf(this);
        }

        return null;
      },
    },

    mounted() {
      this.bindRelation();
    },

    beforeUnmount() {
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

        // TODO sortChildren

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
