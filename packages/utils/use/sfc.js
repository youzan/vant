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

export default name => (sfc, functional) => {
  sfc.name = name;
  sfc.install = install;

  if (sfc.props) {
    defaultProps(sfc.props);
  }

  if (functional) {
    sfc.functional = true;
  }

  return sfc;
};
