import Card from '..';
import { mount } from '@vue/test-utils';

test('click event', () => {
  const onClick = jest.fn();
  const wrapper = mount(Card, {
    context: {
      on: {
        click: onClick,
      },
    },
  });

  wrapper.trigger('click');

  expect(onClick).toHaveBeenCalledWith(
    expect.objectContaining({
      isTrusted: expect.any(Boolean),
    })
  );
});

test('click-thumb event', () => {
  const onClickThumb = jest.fn();
  const wrapper = mount(Card, {
    propsData: {
      thumb: 'xx',
    },
    context: {
      on: {
        'click-thumb': onClickThumb,
      },
    },
  });

  wrapper.find('.van-card__thumb').trigger('click');

  expect(onClickThumb).toHaveBeenCalledWith(
    expect.objectContaining({
      isTrusted: expect.any(Boolean),
    })
  );
});

test('render price & num slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      num: () => 'Custom Num',
      price: () => 'Custom Price',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render origin-price slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      'origin-price': () => 'Custom Origin Price',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render bottom slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      bottom: () => 'Custom Bottom',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render thumb & tag slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      tag: () => 'Custom Tag',
      thumb: () => 'Custom Thumb',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render title & desc slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      title: () => 'Custom Title',
      desc: () => 'Custom desc',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render price & price-top slot', () => {
  const wrapper = mount(Card, {
    scopedSlots: {
      price: () => 'Custom Price',
      'price-top': () => 'Custom Price-top',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
