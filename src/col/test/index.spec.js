import Col from '..';
import { mount } from '../../../test/utils';

test('Col click event', () => {
  const wrapper = mount(Col);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});
