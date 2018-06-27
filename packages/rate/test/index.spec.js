import Rate from '../';
import { mount } from '../../../test/utils';

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
