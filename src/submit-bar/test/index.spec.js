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

  expect(wrapper).toMatchSnapshot();

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

  expect(wrapper).toMatchSnapshot();
});

test('top slot', () => {
  const wrapper = mount(SubmitBar, {
    scopedSlots: {
      top: () => 'top',
    },
  });

  expect(wrapper).toMatchSnapshot();
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

  expect(wrapper).toMatchSnapshot();
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

  expect(wrapper).toMatchSnapshot();
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
  expect(wrapper).toMatchSnapshot();
});

test('disable safe-area-inset-bottom prop', () => {
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        safeAreaInsetBottom: false,
      },
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('button-color prop', () => {
  const wrapper = mount(SubmitBar, {
    context: {
      props: {
        buttonColor: 'red',
      },
    },
  });
  expect(wrapper).toMatchSnapshot();
});
