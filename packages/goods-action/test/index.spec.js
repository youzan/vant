import BigBtn from '../../goods-action-big-btn';
import MiniBtn from '../../goods-action-mini-btn';
import { mount } from '../../../test/utils';

test('BigBtn click event', () => {
  const click = jest.fn();
  const wrapper = mount(BigBtn, {
    context: {
      on: {
        click
      }
    }
  });

  wrapper.trigger('click');
  expect(click.mock.calls.length).toEqual(1);
});

test('MiniBtn click event', () => {
  const click = jest.fn();
  const wrapper = mount(MiniBtn, {
    context: {
      on: {
        click
      }
    }
  });

  wrapper.trigger('click');
  expect(click.mock.calls.length).toEqual(1);
});
