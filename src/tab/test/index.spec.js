import Vue from 'vue';
import Tab from '..';
import Tabs from '../../tabs';
import { mount, later, triggerDrag } from '../../../test';

Vue.use(Tab);
Vue.use(Tabs);

function createWrapper(options = {}) {
  return mount({
    template: `
      <van-tabs
        :color="color"
        :type="type"
        :sticky="sticky"
        :line-width="lineWidth"
        :lazy-render="lazyRender"
        @change="onChange"
      >
        ${options.extraTemplate || ''}
        <van-tab title="title1">Text</van-tab>
        <van-tab title="title2">Text</van-tab>
        <van-tab title="title3" disabled>Text</van-tab>
      </van-tabs>
    `,
    data() {
      return {
        color: '#ee0a24',
        type: 'line',
        sticky: true,
        lineWidth: 2,
        lazyRender: true
      };
    },
    ...options
  });
}

test('click to switch tab', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <van-tabs @change="onChange">
        <van-tab title="title1">Text</van-tab>
        <van-tab title="title2">Text</van-tab>
        <van-tab title="title3" disabled>Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onChange
    }
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  tabs.at(1).trigger('click');
  tabs.at(2).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('swipe to switch tab', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <van-tabs swipeable @change="onChange">
        <van-tab title="title1">Text</van-tab>
        <van-tab title="title2">Text</van-tab>
        <van-tab title="title3" disabled>Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onChange
    }
  });

  const content = wrapper.find('.van-tabs__content');
  await later();
  expect(wrapper).toMatchSnapshot();

  triggerDrag(content, -100, 0);
  expect(wrapper).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(1, 'title2');

  triggerDrag(content, -100, 0);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(wrapper).toMatchSnapshot();

  await later();
  wrapper.destroy();
});

test('change tabs data', async () => {
  const wrapper = createWrapper();

  await later();

  expect(wrapper).toMatchSnapshot();

  wrapper.setData({
    swipeable: false,
    sticky: false,
    type: 'card',
    color: 'blue'
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('lazy render', async () => {
  const wrapper = createWrapper();

  expect(wrapper).toMatchSnapshot();

  wrapper.setData({
    lazyRender: false
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('render nav-left & nav-right slot', async () => {
  const wrapper = createWrapper({
    extraTemplate: `
      <template v-slot:nav-left>Nav Left</template>
      <template v-slot:nav-right>Nav Right</template>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('border props', async () => {
  const wrapper = mount(Tabs, {
    propsData: {
      border: false
    }
  });

  expect(wrapper).toMatchSnapshot();
});


test('click event', async () => {
  const onClick = jest.fn();
  const onDisabled = jest.fn();

  const wrapper = mount({
    template: `
      <van-tabs @click="onClick" @disabled="onDisabled">
        <van-tab title="title1">Text</van-tab>
        <van-tab title="title2" disabled>Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onClick,
      onDisabled
    }
  });

  const tabs = wrapper.findAll('.van-tab');

  tabs.at(0).trigger('click');
  expect(onClick).toHaveBeenCalledWith(0, 'title1');

  tabs.at(1).trigger('click');
  expect(onDisabled).toHaveBeenCalledWith(1, 'title2');
});

test('name prop', async () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const onDisabled = jest.fn();

  const wrapper = mount({
    template: `
      <van-tabs @click="onClick" @disabled="onDisabled" @change="onChange">
        <van-tab title="title1" name="a">Text</van-tab>
        <van-tab title="title2" name="b">Text</van-tab>
        <van-tab title="title3" name="c" disabled>Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onClick,
      onChange,
      onDisabled
    }
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  tabs.at(1).trigger('click');

  expect(onClick).toHaveBeenCalledWith('b', 'title2');
  expect(onChange).toHaveBeenCalledWith('b', 'title2');
  expect(onChange).toHaveBeenCalledTimes(1);

  tabs.at(2).trigger('click');
  expect(onDisabled).toHaveBeenCalledWith('c', 'title3');
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('set name to zero', async () => {
  const onClick = jest.fn();

  const wrapper = mount({
    template: `
      <van-tabs @click="onClick">
        <van-tab title="title1" :name="1">Text</van-tab>
        <van-tab title="title2" :name="0">Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onClick
    }
  });

  const tabs = wrapper.findAll('.van-tab');
  tabs.at(1).trigger('click');
  expect(onClick).toHaveBeenCalledWith(0, 'title2');
});

test('title-style prop', () => {
  const wrapper = mount({
    template: `
      <van-tabs>
        <van-tab title="title1" title-style="color: red;">Text</van-tab>
      </van-tabs>
    `
  });

  expect(wrapper.find('.van-tab').element.style.color).toEqual('red');
});
