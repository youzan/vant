import SubmitBar from '..';
import { mount } from '../../../test/utils';

test('submit', () => {
  const submit = jest.fn();
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        price: 0.01
      },
      on: { submit }
    }
  });

  const button = wrapper.find('.van-button');
  button.trigger('click');
  expect(submit.mock.calls[0]).toBeTruthy();
});

test('disable submit', () => {
  const submit = jest.fn();
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        price: 0.01,
        disabled: true
      },
      on: { submit }
    }
  });

  expect(wrapper).toMatchSnapshot();

  // disabled
  const button = wrapper.find('.van-button');
  button.trigger('click');
  expect(submit.mock.calls[0]).toBeFalsy();
});
