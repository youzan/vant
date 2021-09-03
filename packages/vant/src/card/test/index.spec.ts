import { Card } from '..';
import { mount } from '../../../test';

test('should emit click event after clicked', () => {
  const onClick = jest.fn();
  const wrapper = mount(Card, {
    props: {
      onClick,
    },
  });
  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should emit click-thumb event after clicking thumb', () => {
  const wrapper = mount(Card, {
    props: {
      thumb: 'xx',
    },
  });

  wrapper.find('.van-card__thumb').trigger('click');
  expect(wrapper.emitted('click-thumb')!.length).toEqual(1);
});

test('should render price and num slot correctly', () => {
  const wrapper = mount(Card, {
    slots: {
      num: () => 'Custom Num',
      price: () => 'Custom Price',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render origin-price slot correctly', () => {
  const wrapper = mount(Card, {
    slots: {
      'origin-price': () => 'Custom Origin Price',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render bottom slot correctly', () => {
  const wrapper = mount(Card, {
    slots: {
      bottom: () => 'Custom Bottom',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render thumb and tag slot correctly', () => {
  const wrapper = mount(Card, {
    slots: {
      tag: () => 'Custom Tag',
      thumb: () => 'Custom Thumb',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render title and desc slot correctly', () => {
  const wrapper = mount(Card, {
    slots: {
      title: () => 'Custom Title',
      desc: () => 'Custom desc',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render price and price-top slot correctly', () => {
  const wrapper = mount(Card, {
    slots: {
      price: () => 'Custom Price',
      'price-top': () => 'Custom Price-top',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
