import * as vant from 'vant';
import 'vant/lib/index.css';

export default ({ Vue }) => {
  Object.keys(vant).forEach(key => {
    const component = vant[key];

    component.name && Vue.component(component.name, component);
  });
};
