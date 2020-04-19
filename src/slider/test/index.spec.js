import Slider from '..';
import {
  mount,
  trigger,
  triggerDrag,
  mockGetBoundingClientRect,
} from '../../../test';

function mockRect(vertical) {
  return mockGetBoundingClientRect({
    width: vertical ? 0 : 100,
    height: vertical ? 100 : 0,
    top: vertical ? 0 : 100,
    left: vertical ? 100 : 0,
  });
}

test('drag button', () => {
  const restoreMock = mockRect();

  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      disabled: true,
    },
  });

  wrapper.vm.$on('input', (value) => {
    wrapper.setProps({ value });
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 50, 0);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.emitted('drag-start')).toBeFalsy();
  expect(wrapper.emitted('drag-end')).toBeFalsy();

  wrapper.setData({ disabled: false });
  trigger(button, 'touchstart', 0, 0);
  trigger(button, 'touchend', 0, 0);
  triggerDrag(button, 50, 0);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.emitted('drag-start')).toBeTruthy();
  expect(wrapper.emitted('drag-end')).toBeTruthy();

  restoreMock();
});

test('click bar', () => {
  const restoreMock = mockRect();

  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      disabled: true,
    },
  });

  wrapper.vm.$on('input', (value) => {
    wrapper.setProps({ value });
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper).toMatchSnapshot();

  wrapper.setData({ disabled: false });
  trigger(wrapper, 'click', 100, 0);
  expect(wrapper).toMatchSnapshot();

  restoreMock();
});

test('drag button vertical', () => {
  const restoreMock = mockRect(true);

  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      vertical: true,
    },
  });

  wrapper.vm.$on('input', (value) => {
    wrapper.setProps({ value });
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 0, 50);
  expect(wrapper).toMatchSnapshot();

  restoreMock();
});

test('click vertical', () => {
  const restoreMock = mockRect(true);

  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      vertical: true,
    },
  });

  wrapper.vm.$on('input', (value) => {
    wrapper.setProps({ value });
  });

  trigger(wrapper, 'click', 0, 100);
  expect(wrapper).toMatchSnapshot();

  restoreMock();
});

test('bar-height prop', () => {
  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      barHeight: 10,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('button-size prop', () => {
  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
      buttonSize: 10,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('should not emit change event when value not changed', () => {
  const wrapper = mount(Slider, {
    propsData: {
      value: 50,
    },
    listeners: {
      input(value) {
        wrapper.setProps({ value });
      },
    },
  });

  trigger(wrapper, 'click', 100, 0);
  trigger(wrapper, 'click', 100, 0);

  expect(wrapper.emitted('change').length).toEqual(1);
});

test('should format initial value', (done) => {
  mount(Slider, {
    propsData: {
      value: null,
    },
    listeners: {
      input(value) {
        expect(value).toEqual(0);
        done();
      },
    },
  });
});
