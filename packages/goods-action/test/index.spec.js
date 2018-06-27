import BigBtn from '../../goods-action-big-btn';
import SmallBtn from '../../goods-action-mini-btn';
import { mount } from '../../../test/utils';

test('big btn click event', () => {
  const wrapper = mount(BigBtn);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
});

test('small btn click event', () => {
  const wrapper = mount(SmallBtn);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
});
