function getElement(teleport) {
  if (typeof teleport === 'string') {
    return document.querySelector(teleport);
  }

  return teleport;
}

export function PortalMixin({ ref, afterPortal } = {}) {
  return {
    props: {
      teleport: [String, Object],
    },

    watch: {
      teleport: 'portal',
    },

    mounted() {
      if (this.teleport) {
        this.portal();
      }
    },

    methods: {
      portal() {
        const { teleport } = this;
        const el = ref ? this.$refs[ref] : this.$el;

        let container;
        if (teleport) {
          container = getElement(teleport);
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
