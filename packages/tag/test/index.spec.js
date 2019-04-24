import Tag from '..';
import { mount } from '../../../test/utils';

test('click event', () => {
  const click = jest.fn();
  const wrapper = mount(Tag, {
    context: {
      on: {
        click
      }
    }
  });

  wrapper.trigger('click');
  expect(click).toHaveBeenCalledTimes(1);
});
