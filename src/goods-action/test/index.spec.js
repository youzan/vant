import GoodsAction from '..';
import Button from '../../goods-action-button';
import Icon from '../../goods-action-icon';
import { mount } from '../../../test';

test('Button click event', () => {
  const wrapper = mount(Button);
  wrapper.trigger('click');
  expect(wrapper.emitted('click').length).toEqual(1);
});

test('Icon click event', () => {
  const wrapper = mount(Icon);
  wrapper.trigger('click');
  expect(wrapper.emitted('click').length).toEqual(1);
});

test('Button render default slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Button, null, ['Default Content']);
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('Icon render default slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, null, ['Default Content']);
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('Icon render icon slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, {
        scopedSlots: {
          default: () => 'Text',
          icon: () => 'Custom Icon',
        },
      });
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('Icon render icon slot with badge', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, {
        props: {
          badge: '1',
        },
        scopedSlots: {
          default: () => 'Text',
          icon: () => 'Custom Icon',
        },
      });
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('Icon render icon slot with dot', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, {
        props: {
          dot: true,
        },
        scopedSlots: {
          default: () => 'Text',
          icon: () => 'Custom Icon',
        },
      });
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('disable safe-area-inset-bottom prop', () => {
  const wrapper = mount(GoodsAction, {
    propsData: {
      safeAreaInsetBottom: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
