import Switch from '..';
import { mount } from '../../../test/utils';

test('emit event', () => {
  const wrapper = mount(Switch);
  wrapper.trigger('click');
  wrapper.trigger('click');
  wrapper.setProps({ disabled: true });
  wrapper.trigger('click');

  expect(wrapper.emitted('input')).toEqual([[true], [true]]);
  expect(wrapper.emitted('change')).toEqual([[true], [true]]);
});
