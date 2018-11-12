import Cell from '..';
import { mount } from '../../../test/utils';

test('click event', () => {
  const wrapper = mount(Cell);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
});
