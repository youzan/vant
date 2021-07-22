import { Tabs } from '../../tabs';
import { mount, later, triggerDrag, mockScrollTop } from '../../../test';

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
        lazyRender: true,
      };
    },
    ...options,
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
      onChange,
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  tabs[1].trigger('click');
  tabs[2].trigger('click');
  await later();
  expect(wrapper.html()).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('swipe to switch tab', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <van-tabs v-model:active="active" swipeable @change="onChange">
        <van-tab title="title1">Text</van-tab>
        <van-tab title="title2">Text</van-tab>
        <van-tab title="title3" disabled>Text</van-tab>
      </van-tabs>
    `,
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      onChange,
    },
  });

  const content = wrapper.find('.van-tabs__content');
  await later();
  expect(wrapper.html()).toMatchSnapshot();

  triggerDrag(content, -100, 0);
  expect(wrapper.html()).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(1, 'title2');

  triggerDrag(content, -100, 0);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(wrapper.html()).toMatchSnapshot();

  await later();
  wrapper.unmount();
});

test('change tabs data', async () => {
  const wrapper = createWrapper();

  await later();

  expect(wrapper.html()).toMatchSnapshot();

  wrapper.setData({
    swipeable: false,
    sticky: false,
    type: 'card',
    color: 'blue',
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('lazy render', async () => {
  const wrapper = createWrapper();

  expect(wrapper.html()).toMatchSnapshot();

  wrapper.setData({
    lazyRender: false,
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('render nav-left & nav-right slot', async () => {
  const wrapper = createWrapper({
    extraTemplate: `
      <template v-slot:nav-left>Nav Left</template>
      <template v-slot:nav-right>Nav Right</template>
    `,
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('border props', async () => {
  const wrapper = mount(Tabs, {
    props: {
      border: false,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('name prop', async () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const onDisabled = jest.fn();

  const wrapper = mount({
    template: `
      <van-tabs v-model:active="active" @click="onClick" @disabled="onDisabled" @change="onChange">
        <van-tab title="title1" name="a">Text</van-tab>
        <van-tab title="title2" name="b">Text</van-tab>
        <van-tab title="title3" name="c" disabled>Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onClick,
      onChange,
      onDisabled,
    },
    data() {
      return {
        active: 0,
      };
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  tabs[1].trigger('click');

  expect(onClick).toHaveBeenCalledWith('b', 'title2');
  expect(onChange).toHaveBeenCalledWith('b', 'title2');
  expect(onChange).toHaveBeenCalledTimes(1);

  tabs[2].trigger('click');
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
      onClick,
    },
  });

  const tabs = wrapper.findAll('.van-tab');
  tabs[1].trigger('click');
  expect(onClick).toHaveBeenCalledWith(0, 'title2');
});

test('title-style prop', () => {
  const wrapper = mount({
    template: `
      <van-tabs>
        <van-tab title="title1" title-style="color: red;">Text</van-tab>
      </van-tabs>
    `,
  });

  expect(wrapper.find('.van-tab').style.color).toEqual('red');
});

test('dot prop', () => {
  const wrapper = mount({
    template: `
      <van-tabs>
        <van-tab dot>Text</van-tab>
      </van-tabs>
    `,
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('badge prop', () => {
  const wrapper = mount({
    template: `
      <van-tabs>
        <van-tab badge="10">Text</van-tab>
      </van-tabs>
    `,
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('scrollspy prop', async () => {
  const onChange = jest.fn();
  window.scrollTo = jest.fn();

  const wrapper = mount({
    template: `
      <van-tabs scrollspy sticky @change="onChange">
        <van-tab name="a" title="title1">Text</van-tab>
        <van-tab name="b" title="title2">Text</van-tab>
        <van-tab name="c" title="title3">Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onChange,
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  tabs[2].trigger('click');
  expect(onChange).toHaveBeenCalledWith('c', 'title3');

  await later();
  mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledWith('c', 'title3');
});

test('scrollTo method', async () => {
  const onChange = jest.fn();
  window.scrollTo = jest.fn();

  mount({
    template: `
      <van-tabs scrollspy sticky @change="onChange" ref="root">
        <van-tab name="a" title="title1">Text</van-tab>
        <van-tab name="b" title="title2">Text</van-tab>
        <van-tab name="c" title="title3">Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onChange,
    },
    mounted() {
      this.$refs.root.scrollTo('b');
    },
  });

  await later();
  expect(onChange).toHaveBeenCalledWith('b', 'title2');
});

test('rendered event', async () => {
  const onRendered = jest.fn();

  const wrapper = mount({
    template: `
      <van-tabs v-model:active="active" @rendered="onRendered">
        <van-tab name="a" title="title1">Text</van-tab>
        <van-tab name="b" title="title2">Title2</van-tab>
      </van-tabs>
    `,
    data() {
      return {
        active: 'a',
      };
    },
    methods: {
      onRendered,
    },
  });

  await later();
  expect(onRendered).toHaveBeenCalledWith('a', 'title1');
  expect(wrapper.find('.van-tab__pane')).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  tabs[1].trigger('click');
  tabs[0].trigger('click');

  await later();
  expect(onRendered).toHaveBeenCalledTimes(2);
});

test('should not trigger rendered event when disable lazy-render', async () => {
  const onRendered = jest.fn();

  mount({
    template: `
      <van-tabs :lazy-render="false" @rendered="onRendered">
        <van-tab>Text</van-tab>
        <van-tab>Title2</van-tab>
      </van-tabs>
    `,
    methods: {
      onRendered,
    },
  });

  await later();
  expect(onRendered).toHaveBeenCalledTimes(0);
});

test('before-change prop', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <van-tabs @change="onChange" :before-change="beforeChange">
        <van-tab title="title1">Text</van-tab>
        <van-tab title="title2">Text</van-tab>
        <van-tab title="title3">Text</van-tab>
        <van-tab title="title4">Text</van-tab>
        <van-tab title="title5">Text</van-tab>
      </van-tabs>
    `,
    methods: {
      onChange,
      beforeChange(name) {
        switch (name) {
          case 1:
            return false;
          case 2:
            return true;
          case 3:
            return Promise.resolve(false);
          case 4:
            return Promise.resolve(true);
        }
      },
    },
  });

  await later();

  const tabs = wrapper.findAll('.van-tab');
  tabs[1].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(0);

  tabs[2].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(2, 'title3');

  tabs[3].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(1);

  tabs[4].trigger('click');
  await later();
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith(4, 'title5');
});

test('render empty tab', async () => {
  const wrapper = mount({
    template: `
      <van-tabs>
        <van-tab title="title1" />
        <van-tab title="title2" />
      </van-tabs>
    `,
  });

  expect(wrapper.html()).toMatchSnapshot();
});
