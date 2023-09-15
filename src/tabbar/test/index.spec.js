import VueRouter from 'vue-router';
import { later, mockGetBoundingClientRect, mount } from '../../../test';
import Vue from 'vue';
import Tabbar from '..';
import { createLocalVue } from '@vue/test-utils';

Vue.use(VueRouter);

test('route mode', async () => {
  const router = new VueRouter({
    routes: [
      { path: '/', component: { render: () => '/' } },
      { path: '/search', component: { render: () => '/search' } },
      { path: '/star', component: { render: () => '/star' } },
    ],
  });
  const localVue = createLocalVue();
  localVue.use(VueRouter);

  const wrapper = mount(
    {
      template: `
      <van-tabbar route>
        <van-tabbar-item replace to="/">
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
    `,
    },
    { localVue, router }
  );

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

test('route mode match by name', async () => {
  const Foo = { render: () => 'Foo' };
  const Bar = { render: () => 'Bar' };
  const router = new VueRouter({
    routes: [
      { path: '/foo', component: Foo, name: 'foo' },
      { path: '/bar', component: Bar, name: 'bar' },
    ],
  });

  const wrapper = mount({
    router,
    template: `
      <van-tabbar route>
        <van-tabbar-item :to="{ name: 'foo' }">
          Tab
        </van-tabbar-item>
        <van-tabbar-item :to="{ name: 'bar' }">
          Tab
        </van-tabbar-item>
      </van-tabbar>
    `,
  });

  const items = wrapper.findAll('.van-tabbar-item');
  items.at(0).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('router NavigationDuplicated', async (done) => {
  expect(async () => {
    const router = new VueRouter();
    const wrapper = mount({
      router,
      template: `
      <van-tabbar route>
        <van-tabbar-item replace to="/home">
          Tab
        </van-tabbar-item>
      </van-tabbar>
    `,
    });

    const item = wrapper.find('.van-tabbar-item');
    item.trigger('click');
    item.trigger('click');

    await later();
    done();
  }).not.toThrow();
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
        value: 0,
      };
    },
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
      onChange,
    },
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
        value: 'a',
      };
    },
    methods: {
      onChange,
    },
  });

  wrapper.findAll('.van-tabbar-item').at(1).trigger('click');

  expect(onChange).toHaveBeenCalledWith('b');
});

test('disable border', () => {
  const wrapper = mount(Tabbar, {
    propsData: {
      border: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('placeholder prop', () => {
  const restore = mockGetBoundingClientRect({ height: 50 });

  const wrapper = mount(Tabbar, {
    propsData: {
      fixed: true,
      placeholder: true,
    },
  });

  expect(wrapper).toMatchSnapshot();

  restore();
});
