import SubmitBar from '..';
import { mount } from '../../../test';

test('submit event', () => {
  const submit = jest.fn();
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        price: 1,
      },
      on: { submit },
    },
  });

  const button = wrapper.find('.van-button');
  button.trigger('click');
  expect(submit).toHaveBeenCalled();
});

test('disable submit', () => {
  const submit = jest.fn();
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        price: 1,
        disabled: true,
      },
      on: { submit },
    },
  });

  expect(wrapper.html()).toMatchSnapshot();

  // disabled
  const button = wrapper.find('.van-button');
  button.trigger('click');
  expect(submit).toHaveBeenCalledTimes(0);
});

test('without price', () => {
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        label: 'Label',
      },
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('top slot', () => {
  const wrapper = mount(SubmitBar, {
    scopedSlots: {
      top: () => 'Custom Top',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('decimal-length prop', () => {
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        price: 111,
        decimalLength: 1,
      },
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('suffix-label prop', () => {
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        price: 111,
        label: 'Label',
        suffixLabel: 'Suffix Label',
      },
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('text-align prop', () => {
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        price: 111,
        textAlign: 'left',
      },
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('disable safe-area-inset-bottom prop', () => {
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        safeAreaInsetBottom: false,
      },
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('button-color prop', () => {
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        buttonColor: 'red',
      },
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('button slot', () => {
  const wrapper = mount(SubmitBar, {
    buttonText: 'text',
    scopedSlots: {
      button: () => 'Custom button',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
