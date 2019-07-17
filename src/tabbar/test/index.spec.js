import { mount, later } from '../../../test/utils';
import Vue from 'vue';
import Tabbar from '..';
import TabbarItem from '../../tabbar-item';

Vue.use(Tabbar);
Vue.use(TabbarItem);

test('route mode', async () => {
  Vue.util.defineReactive(Vue.prototype, '$route', { path: '/home' });

  Vue.prototype.$router = {
    replace(to) {
      Vue.prototype.$route.path = typeof to === 'string' ? to : to.path;
    }
  };

  const wrapper = mount({
    template: `
      <van-tabbar route>
        <van-tabbar-item replace to="/home">
          Tab
        </van-tabbar-item>
        <van-tabbar-item replace to="/search">
          Tab
        </van-tabbar-item>
        <van-tabbar-item replace :to="{ path: '/star' }">
          Tab
        </van-tabbar-item>
        <van-tabbar-item>
          Tab
        </van-tabbar-item>
      </van-tabbar>
    `
  });

  expect(wrapper).toMatchSnapshot();

  const items = wrapper.findAll('.van-tabbar-item');

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(2).trigger('click');
  items.at(3).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});


test('watch tabbar value', () => {
  const wrapper = mount({
    template: `
      <van-tabbar :value="value">
        <van-tabbar-item>Tab</van-tabbar-item>
        <van-tabbar-item>Tab</van-tabbar-item>
      </van-tabbar>
    `,
    data() {
      return {
        value: 0
      };
    }
  });

  wrapper.setData({ value: 1 });
  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount({
    template: `
      <van-tabbar @change="onChange">
        <van-tabbar-item @click="onClick">Tab</van-tabbar-item>
      </van-tabbar>
    `,
    methods: {
      onClick,
      onChange
    }
  });

  wrapper.find('.van-tabbar-item').trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('name prop', () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <van-tabbar :value="value" @change="onChange">
        <van-tabbar-item name="a">Tab</van-tabbar-item>
        <van-tabbar-item name="b">Tab</van-tabbar-item>
      </van-tabbar>
    `,
    data() {
      return {
        value: 'a'
      };
    },
    methods: {
      onChange
    }
  });

  wrapper.findAll('.van-tabbar-item').at(1).trigger('click');

  expect(onChange).toHaveBeenCalledWith('b');
});

test('disable border', () => {
  const wrapper = mount(Tabbar, {
    propsData: {
      border: false
    }
  });

  expect(wrapper).toMatchSnapshot();
});
