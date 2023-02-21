import { mount } from '../../../test';
import { Picker, PickerOption } from '..';

const simpleColumn = [
  { text: '1990', value: '1990' },
  { text: '1991', value: '1991' },
];

test('should render title slot correctly', () => {
  const wrapper = mount(Picker, {
    slots: {
      title: () => 'Custom title',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render toolbar slot correctly', () => {
  const wrapper = mount(Picker, {
    slots: {
      toolbar: () => 'Custom toolbar',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render confirm/cancel slot correctly', () => {
  const wrapper = mount(Picker, {
    slots: {
      confirm: () => 'Custom Confirm',
      cancel: () => 'Custom Cancel',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render option slot correctly', () => {
  const wrapper = mount(Picker, {
    props: {
      columns: simpleColumn,
    },
    slots: {
      option: (option: PickerOption, index) =>
        `Custom ${option.text}, index: ${index}`,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render columns-top、columns-bottom slots correctly', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
    },
    slots: {
      'columns-top': () => 'Custom Columns Top',
      'columns-bottom': () => 'Custom Columns Bottom',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
