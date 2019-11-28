import Col from '..';
import Row from '../../row';
import { mount } from '../../../test';

test('Col click event', () => {
  const wrapper = mount(Col);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});

test('Row click event', () => {
  const wrapper = mount(Row);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});
