import { isObj } from '../utils';

const EL = '__';
const MOD = '--';

export default {
  methods: {
    b(block, mods) {
      const { name } = this.$options;
      const classnames = [];

      if (!arguments.length) {
        return name;
      }

      classnames.push(block ? (name + EL + block) : name);

      if (mods) {
        if (isObj(mods)) {
          const prefixedMods = {};
          Object.keys(mods).forEach(key => {
            prefixedMods[name + MOD + key] = mods[key];
          });
          classnames.push(prefixedMods);
        }
      }

      return classnames;
    }
  }
};
