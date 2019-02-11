/**
 * Create a basic component with common options
 */
import '../../locale';
import { camelize } from '..';
import SlotsMixin from '../../mixins/slots';
import Vue, { VueConstructor, ComponentOptions } from 'vue';

type VantComponentOptions = ComponentOptions<Vue> & {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
};

const arrayProp = {
  type: Array,
  default: () => []
};

const numberProp = {
  type: Number,
  default: 0
};

function defaultProps(props: any) {
  Object.keys(props).forEach(key => {
    if (props[key] === Array) {
      props[key] = arrayProp;
    } else if (props[key] === Number) {
      props[key] = numberProp;
    }
  });
}

function install(this: ComponentOptions<Vue>, Vue: VueConstructor) {
  const { name } = this;
  if (name) {
    Vue.component(name, this);
    Vue.component(camelize(`-${name}`), this);
  }
}

export default (name: string) => (sfc: VantComponentOptions) => {
  sfc.name = name;
  sfc.install = install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(SlotsMixin);

  if (sfc.props) {
    defaultProps(sfc.props);
  }

  return sfc;
};
