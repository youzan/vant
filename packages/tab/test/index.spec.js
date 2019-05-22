import Vue from 'vue';
import Tab from '..';
import Tabs from '../../tabs';
import { mount, later, triggerDrag } from '../../../test/utils';

Vue.use(Tab);
Vue.use(Tabs);

function createWrapper(options = {}) {
  return mount({
    template: `
      <van-tabs
        :color="color"
        :type="type"
        :sticky="sticky"
        :swipeable="swipeable"
        :line-width="lineWidth"
        :lazy-render="lazyRender"
        @change="onChange"
      >
        ${options.extraTemplate || ''}
        <van-tab :title="title1">Text</van-tab>
        <van-tab>
          <span slot="title">title2</span>
          Text
        </van-tab>
        <van-tab title="title3" disabled>Text</van-tab>
      </van-tabs>
    `,
    data() {
      return {
        title1: 'title1',
        color: '#f44',
        type: 'line',
        swipeable: true,
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
  const wrapper = createWrapper({
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
  const wrapper = createWrapper({
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
  triggerDrag(content, -100, 0);
  expect(wrapper).toMatchSnapshot();
  triggerDrag(content, 100, 0);
  triggerDrag(content, 100, 0);
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
    color: 'blue',
    title1: 'new title1'
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
  const wrapper = mount({
    template: `
      <van-tabs :border="false" />
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
