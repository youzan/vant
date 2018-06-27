import Slider from '..';
import { mount, triggerDrag, trigger } from '../../../test/utils';

Element.prototype.getBoundingClientRect = jest.fn(() => ({ width: 100, left: 0 }));

test('drag button', () => {
  const wrapper = mount(Slider, {
    attachToDocument: true,
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
