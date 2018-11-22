import Tab from '..';
import Tabs from '../../tabs';
import { mount, later, triggerDrag } from '../../../test/utils';

function createWrapper(options) {
  return mount({
    template: `
      <tabs @change="onChange" swipeable>
        <tab title="title1">Text</tab>
        <tab title="title2">Text</tab>
        <tab title="title3" disabled>Text</tab>
      </tabs>
    `,
    components: {
      Tab,
      Tabs
    },
    ...options
  });
}

test('click to switch tab', async() => {
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
  expect(onChange.mock.calls.length).toEqual(1);
});

test('swipe to switch tab', async() => {
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
  expect(onChange.mock.calls.length).toEqual(1);
  triggerDrag(content, -100, 0);
  expect(wrapper).toMatchSnapshot();
  triggerDrag(content, 100, 0);
  triggerDrag(content, 100, 0);
  expect(wrapper).toMatchSnapshot();

  await later();
  wrapper.destroy();
});
