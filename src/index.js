import Button from '../packages/button/index.js';
import Cell from '../packages/cell/index.js';
import Field from '../packages/field/index.js';
import Popup from '../packages/popup/index.js';
import Picker from '../packages/picker/index.js';
import Toast from '../packages/toast/index.js';
import Indicator from '../packages/indicator/index.js';
import MessageBox from '../packages/message-box/index.js';
import Lazyload from '../packages/lazyload/index.js';
import Spinner from '../packages/spinner/index.js';
import '../src/assets/font/iconfont.css';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(Field.name, Field);
  Vue.component(Popup.name, Popup);
  Vue.component(Picker.name, Picker);
  Vue.component(Spinner.name, Spinner);
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    try: 3
  });

  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '1.0.0',
  Button,
  Cell,
  Field,
  Popup,
  Picker,
  Toast,
  Indicator,
  MessageBox,
  Lazyload,
  Spinner
};
