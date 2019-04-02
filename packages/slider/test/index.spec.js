import Slider from '..';
import { mount, triggerDrag, trigger } from '../../../test/utils';

function mockGetBoundingClientRect(vertical) {
  Element.prototype.getBoundingClientRect = jest.fn(() => ({
    width: vertical ? 0 : 100,
    height: vertical ? 100 : 0,
    top: vertical ? 0 : 100,
    left: vertical ? 100 : 0
  }));
}

test('drag button', () => {
  mockGetBoundingClientRect();

  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      disabled: true
    }
  });

  wrapper.vm.$on('input', value => {
    wrapper.setProps({ value });
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 50, 0);
  expect(wrapper).toMatchSnapshot();

  wrapper.setData({ disabled: false });
  triggerDrag(button, 50, 0);
  expect(wrapper).toMatchSnapshot();
});

it('click bar', () => {
  mockGetBoundingClientRect();

  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      disabled: true
    }
  });

  wrapper.vm.$on('input', value => {
    wrapper.setProps({ value });
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper).toMatchSnapshot();

  wrapper.setData({ disabled: false });
  trigger(wrapper, 'click', 100, 0);
  expect(wrapper).toMatchSnapshot();
});

test('drag button vertical', () => {
  mockGetBoundingClientRect(true);

  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      vertical: true
    }
  });

  wrapper.vm.$on('input', value => {
    wrapper.setProps({ value });
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 0, 50);
  expect(wrapper).toMatchSnapshot();
});

it('click vertical', () => {
  mockGetBoundingClientRect(true);

  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      vertical: true
    }
  });

  wrapper.vm.$on('input', value => {
    wrapper.setProps({ value });
  });

  trigger(wrapper, 'click', 0, 100);
  expect(wrapper).toMatchSnapshot();
});
