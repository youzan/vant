import Button from '../../goods-action-button';
import Icon from '../../goods-action-icon';
import { mount } from '../../../test/utils';

test('Button click event', () => {
  const click = jest.fn();
  const wrapper = mount(Button, {
    context: {
      on: {
        click
      }
    }
  });

  wrapper.trigger('click');
  expect(click).toHaveBeenCalledTimes(1);
});

test('Icon click event', () => {
  const click = jest.fn();
  const wrapper = mount(Icon, {
    context: {
      on: {
        click
      }
    }
  });

  wrapper.trigger('click');
  expect(click).toHaveBeenCalledTimes(1);
});

test('Button render default slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Button, null, ['Default Content']);
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('Icon render default slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, null, ['Default Content']);
    }
  });

  expect(wrapper).toMatchSnapshot();
});
