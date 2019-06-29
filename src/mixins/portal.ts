import Vue, { PropType } from 'vue';
import { GetContainer } from './popup/type';

type PortalMixinOptions = {
  afterPortal?: () => void;
};

function getElement(selector: string | GetContainer): Element | null {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

export function PortalMixin({ afterPortal }: PortalMixinOptions) {
  return Vue.extend({
    props: {
      getContainer: [String, Function] as (PropType<string | GetContainer>)
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
  });
}
