import Button from '../packages/button/index.js';
import Switch from '../packages/switch/index.js';
import Field from '../packages/field/index.js';
import Radio from '../packages/radio/index.js';
import Cell from '../packages/cell/index.js';
import Icon from '../packages/icon/index.js';
import CellGroup from '../packages/cell-group/index.js';
import CellSwipe from '../packages/cell-swipe/index.js';
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
import Quantity from '../packages/quantity/index.js';
import Progress from '../packages/progress/index.js';
import Toast from '../packages/toast/index.js';
import Uploader from '../packages/uploader/index.js';
import Swipe from '../packages/swipe/index.js';
import SwipeItem from '../packages/swipe-item/index.js';
import DatetimePicker from '../packages/datetime-picker/index.js';

const version = '0.7.2';
const components = [
  Button,
  Switch,
  Field,
  Radio,
  Cell,
  Icon,
  CellGroup,
  CellSwipe,
  Popup,
  Picker,
  RadioGroup,
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
  Col,
  Row,
  Actionsheet,
  Quantity,
  Progress,
  Uploader,
  Swipe,
  SwipeItem,
  DatetimePicker
];

const install = function(Vue) {
  if (install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button,
  Switch,
  Field,
  Radio,
  Cell,
  Icon,
  CellGroup,
  CellSwipe,
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
  Actionsheet,
  Quantity,
  Progress,
  Toast,
  Uploader,
  Swipe,
  SwipeItem,
  DatetimePicker
};
export default {
  install,
  version,
  Button,
  Switch,
  Field,
  Radio,
  Cell,
  Icon,
  CellGroup,
  CellSwipe,
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
  Actionsheet,
  Quantity,
  Progress,
  Toast,
  Uploader,
  Swipe,
  SwipeItem,
  DatetimePicker
};
