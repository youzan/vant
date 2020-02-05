import Vue, { PropType } from 'vue';
import { GetContainer } from './popup/type';

type PortalMixinOptions = {
  ref?: string;
  afterPortal?: () => void;
};

function getElement(selector: string | GetContainer): Element | null {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

export function PortalMixin({ ref, afterPortal }: PortalMixinOptions) {
  return Vue.extend({
    props: {
      getContainer: [String, Function] as PropType<string | GetContainer>,
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
        const el = ref ? (this.$refs[ref] as HTMLElement) : this.$el;

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
  });
}
