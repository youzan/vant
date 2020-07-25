function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

export function PortalMixin({ ref, afterPortal } = {}) {
  return {
    props: {
      getContainer: [String, Function],
    },

    watch: {
      getContainer: 'portal',
    },

    mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },

    methods: {
      portal() {
        const { getContainer } = this;
        const el = ref ? this.$refs[ref] : this.$el;

        let container;
        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== el.parentNode) {
          container.appendChild(el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      },
    },
  };
}
