/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import { VueConstructor } from 'vue/types';
import Actionsheet from './actionsheet';
import AddressEdit from './address-edit';
import AddressList from './address-list';
import Area from './area';
import Badge from './badge';
import BadgeGroup from './badge-group';
import Button from './button';
import Card from './card';
import Cell from './cell';
import CellGroup from './cell-group';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Circle from './circle';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import ContactCard from './contact-card';
import ContactEdit from './contact-edit';
import ContactList from './contact-list';
import Coupon from './coupon';
import CouponCell from './coupon-cell';
import CouponList from './coupon-list';
import DatetimePicker from './datetime-picker';
import Dialog from './dialog';
import Field from './field';
import GoodsAction from './goods-action';
import GoodsActionBigBtn from './goods-action-big-btn';
import GoodsActionMiniBtn from './goods-action-mini-btn';
import Icon from './icon';
import ImagePreview from './image-preview';
import Info from './info';
import Lazyload from './lazyload';
import List from './list';
import Loading from './loading';
import Locale from './locale';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import Notify from './notify';
import NumberKeyboard from './number-keyboard';
import Overlay from './overlay';
import Pagination from './pagination';
import Panel from './panel';
import PasswordInput from './password-input';
import Picker from './picker';
import Popup from './popup';
import Progress from './progress';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Rate from './rate';
import Row from './row';
import Search from './search';
import Sku from './sku';
import Slider from './slider';
import Step from './step';
import Stepper from './stepper';
import Steps from './steps';
import SubmitBar from './submit-bar';
import Swipe from './swipe';
import SwipeCell from './swipe-cell';
import SwipeItem from './swipe-item';
import Switch from './switch';
import SwitchCell from './switch-cell';
import Tab from './tab';
import Tabbar from './tabbar';
import TabbarItem from './tabbar-item';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import TreeSelect from './tree-select';
import Uploader from './uploader';
import Waterfall from './waterfall';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const version = '1.6.15';
const components = [
  Actionsheet,
  AddressEdit,
  AddressList,
  Area,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Circle,
  Col,
  Collapse,
  CollapseItem,
  ContactCard,
  ContactEdit,
  ContactList,
  Coupon,
  CouponCell,
  CouponList,
  DatetimePicker,
  Dialog,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  ImagePreview,
  Info,
  List,
  Loading,
  NavBar,
  NoticeBar,
  Notify,
  NumberKeyboard,
  Overlay,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Search,
  Sku,
  Slider,
  Step,
  Stepper,
  Steps,
  SubmitBar,
  Swipe,
  SwipeCell,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast,
  TreeSelect,
  Uploader
];

const install = (Vue: VueConstructor) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Actionsheet,
  AddressEdit,
  AddressList,
  Area,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Circle,
  Col,
  Collapse,
  CollapseItem,
  ContactCard,
  ContactEdit,
  ContactList,
  Coupon,
  CouponCell,
  CouponList,
  DatetimePicker,
  Dialog,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  ImagePreview,
  Info,
  Lazyload,
  List,
  Loading,
  Locale,
  NavBar,
  NoticeBar,
  Notify,
  NumberKeyboard,
  Overlay,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Search,
  Sku,
  Slider,
  Step,
  Stepper,
  Steps,
  SubmitBar,
  Swipe,
  SwipeCell,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast,
  TreeSelect,
  Uploader,
  Waterfall
};

export default {
  install,
  version
};
