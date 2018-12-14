import Rate from '..';
import { mount, triggerDrag } from '../../../test/utils';

test('change event', () => {
  const wrapper = mount(Rate, {
    propsData: {
      disabled: true
    }
  });
  const item4 = wrapper.findAll('.van-rate__item').at(3);

  item4.trigger('click');
  expect(wrapper.emitted('change')).toBeFalsy();

  wrapper.vm.disabled = false;
  item4.trigger('click');
  expect(wrapper.emitted('input')[0][0]).toEqual(4);
  expect(wrapper.emitted('change')[0][0]).toEqual(4);
});

test('touchmove', () => {
  const wrapper = mount(Rate);
  triggerDrag(wrapper, 100, 0);

  const icons = wrapper.findAll('.van-icon');
  document.elementFromPoint = function (x) {
    const index = Math.round(x / 20);
    if (index < icons.length) {
      return icons.at(index).element;
    }
  };
  triggerDrag(wrapper, 100, 0);
  expect(wrapper.emitted('change')).toEqual([[2], [3], [4]]);
});
