import Button from './button';
import Switch from './switch';
import Field from './field';
import Radio from './radio';
import Cell from './cell';
import Icon from './icon';
import CellGroup from './cell-group';
import CellSwipe from './cell-swipe';
import Popup from './popup';
import Dialog from './dialog';
import Picker from './picker';
import RadioGroup from './radio-group';
import Waterfall from './waterfall';
import Loading from './loading';
import Panel from './panel';
import Card from './card';
import Steps from './steps';
import Tag from './tag';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import BadgeGroup from './badge-group';
import Badge from './badge';
import Search from './search';
import Step from './step';
import Tabs from './tabs';
import Tab from './tab';
import Lazyload from './lazyload';
import ImagePreview from './image-preview';
import Col from './col';
import Row from './row';
import Actionsheet from './actionsheet';
import Quantity from './quantity';
import Progress from './progress';
import Toast from './toast';
import Uploader from './uploader';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import DatetimePicker from './datetime-picker';

const version = '0.8.0';
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
