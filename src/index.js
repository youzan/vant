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
import Waterfall from '../packages/waterfall/index.js';
import Loading from '../packages/loading/index.js';
import Panel from '../packages/panel/index.js';
import Card from '../packages/card/index.js';
import Steps from '../packages/steps/index.js';
import Tag from '../packages/tag/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import BadgeGroup from '../packages/badge-group/index.js';
import Badge from '../packages/badge/index.js';
import Search from '../packages/search/index.js';
import Step from '../packages/step/index.js';
import Tabs from '../packages/tabs/index.js';
import Tab from '../packages/tab/index.js';
import Lazyload from '../packages/lazyload/index.js';
import ImagePreview from '../packages/image-preview/index.js';
import Col from '../packages/col/index.js';
import Row from '../packages/row/index.js';
import Actionsheet from '../packages/actionsheet/index.js';

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
  Vue.component(Panel.name, Panel);
  Vue.component(Card.name, Card);
  Vue.component(Steps.name, Steps);
  Vue.component(Tag.name, Tag);
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
  Vue.component(BadgeGroup.name, BadgeGroup);
  Vue.component(Badge.name, Badge);
  Vue.component(Search.name, Search);
  Vue.component(Step.name, Step);
  Vue.component(Tabs.name, Tabs);
  Vue.component(Tab.name, Tab);
  Vue.component(Col.name, Col);
  Vue.component(Row.name, Row);
  Vue.component(Actionsheet.name, Actionsheet);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  version: '0.0.25',
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
  Waterfall,
  Loading,
  Panel,
  Card,
  Steps,
  Tag,
  Checkbox,
  CheckboxGroup,
  BadgeGroup,
  Badge,
  Search,
  Step,
  Tabs,
  Tab,
  Lazyload,
  ImagePreview,
  Col,
  Row,
  Actionsheet
};
