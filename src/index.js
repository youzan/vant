import Button from '../packages/button/index.js';
import Switch from '../packages/switch/index.js';
import Field from '../packages/field/index.js';
import Radio from '../packages/radio/index.js';
import Cell from '../packages/cell/index.js';
import Icon from '../packages/icon/index.js';
import CellGroup from '../packages/cell-group/index.js';
// zanui
import '../packages/zanui/src/index.pcss';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Button.name, Button);
  Vue.component(Switch.name, Switch);
  Vue.component(Field.name, Field);
  Vue.component(Radio.name, Radio);
  Vue.component(Cell.name, Cell);
  Vue.component(Icon.name, Icon);
  Vue.component(CellGroup.name, CellGroup);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '0.0.1',
  Button,
  Switch,
  Field,
  Radio,
  Cell,
  Icon,
  CellGroup
};
