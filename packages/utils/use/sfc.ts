/**
 * Create a basic component with common options
 */
import Vue from 'vue';
import '../../locale';
import { camelize } from '..';
import SlotsMixin from '../../mixins/slots';

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
  Vue.component(camelize(`-${name}`), this);
}

const inheritKey = ['style', 'class', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
const mapInheritKey = { nativeOn: 'on' };

function functional(sfc) {
  const { render } = sfc;
  sfc.render = (h, context) => {
    const inherit = inheritKey.reduce((obj, key) => {
      if (context.data[key]) {
        obj[mapInheritKey[key] || key] = context.data[key];
      }
      return obj;
    }, {});
    return render(h, context, inherit);
  };
}

export default (name: string) => (sfc) => {
  sfc.name = name;
  sfc.install = install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(SlotsMixin);

  if (sfc.props) {
    defaultProps(sfc.props);
  }

  if (sfc.functional) {
    functional(sfc);
  }

  return sfc;
};
