import Cell from '..';
import { mount } from '../../../test/utils';

test('click event', () => {
  const click = jest.fn();
  const wrapper = mount(Cell, {
    context: {
      on: {
        click
      }
    }
  });

  wrapper.trigger('click');
  expect(click.mock.calls.length).toBeTruthy();
});
