import Button from '../packages/button/index.js';
import Switch from '../packages/switch/index.js';
import Field from '../packages/field/index.js';
import Radio from '../packages/radio/index.js';
import Cell from '../packages/cell/index.js';
import Icon from '../packages/icon/index.js';
import CellGroup from '../packages/cell-group/index.js';
import Popup from '../packages/popup/index.js';
import Dialog from '../packages/dialog/index.js';
import Picker from '../packages/picker/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import Loading from '../packages/loading/index.js';
import Badge from '../packages/badge/index.js';
import BadgeGroup from '../packages/badge-group/index.js';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Button.name, Button);
  Vue.component(Switch.name, Switch);
  Vue.component(Field.name, Field);
  Vue.component(Radio.name, Radio);
  Vue.component(Cell.name, Cell);
  Vue.component(Icon.name, Icon);
  Vue.component(CellGroup.name, CellGroup);
  Vue.component(Popup.name, Popup);
  Vue.component(Picker.name, Picker);
  Vue.component(RadioGroup.name, RadioGroup);
  Vue.component(Loading.name, Loading);
  Vue.component(Badge.name, Badge);
  Vue.component(BadgeGroup.name, BadgeGroup);
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
  CellGroup,
  Popup,
  Dialog,
  Picker,
  RadioGroup,
  Loading,
  Badge,
  BadgeGroup
};
