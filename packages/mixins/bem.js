/**
 * bem helper
 */

import { isObj } from '../utils';

const prefix = (name, join, val) => {
  if (!val) {
    return name;
  }

  if (typeof val === 'string') {
    return name + join + val;
  }

  if (Array.isArray(val)) {
    return val.map(item => prefix(name, join, item));
  }

  if (isObj(val)) {
    const ret = {};
    Object.keys(val).forEach(key => {
      ret[name + join + key] = val[key];
    });
    return ret;
  }
};

export default {
  methods: {
    b(block) {
      return prefix(this.$options.name, '__', block);
    },

    m(mods) {
      return prefix(this.$options.name, '--', mods);
    }
  }
};
