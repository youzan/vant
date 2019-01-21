/**
 * Create a basic component with common options
 */
import '../../locale';
import { camelize } from '..';

const arrayProp = {
  type: Array,
  default: () => []
};

const numberProp = {
  type: Number,
  default: 0
};

function defaultProps(props) {
  Object.keys(props).forEach(key => {
    if (props[key] === Array) {
      props[key] = arrayProp;
    } else if (props[key] === Number) {
      props[key] = numberProp;
    }
  });
}

function install(Vue) {
  const { name } = this;
  Vue.component(name, this);
  Vue.component((camelize(`-${name}`)), this);
}

export default name => sfc => {
  sfc.name = name;
  sfc.install = install;
  sfc.props && defaultProps(sfc.props);

  return sfc;
};
