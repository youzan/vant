function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

export function PortalMixin({ afterPortal }) {
  return {
    props: {
      getContainer: [String, Function]
    },

    watch: {
      getContainer() {
        this.portal();
      }
    },

    mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },

    methods: {
      portal() {
        const { getContainer } = this;

        let container;
        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== this.$el.parentNode) {
          container.appendChild(this.$el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  };
}
