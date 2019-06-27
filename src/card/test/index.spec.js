import Card from '..';
import { mount } from '../../../test/utils';

test('render price & num slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      num: () => 'Custom Num',
      price: () => 'Custom Price'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render origin-price slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      'origin-price': () => 'Custom Origin Price'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render bottom slot', () => {
  const wrapper = mount(Card, {
    propsData: {
      price: 100
    },
    scopedSlots: {
      bottom: () => 'Custom Bottom'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render thumb & tag slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      tag: () => 'Custom Tag',
      thumb: () => 'Custom Thumb'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render title & desc slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      title: () => 'Custom Title',
      desc: () => 'Custom desc'
    }
  });

  expect(wrapper).toMatchSnapshot();
});
