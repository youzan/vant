import { mount } from '../../../test';
import { AddressList } from '..';

const list = [
  {
    id: '1',
    name: 'Name 1',
    tel: '13000000000',
    address: 'Address 1',
  },
  {
    id: '2',
    name: 'Name 2',
    tel: '1310000000',
    address: 'Address 2',
  },
];

test('should not render Radio or Checkbox when switchable is false', async () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
      switchable: false,
    },
  });

  expect(wrapper.find('.van-radio').exists()).toBeFalsy();
  expect(wrapper.find('.van-checkbox').exists()).toBeFalsy();
});

test('should emit select event after clicking radio icon', () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
    },
  });

  wrapper.find('.van-radio__icon').trigger('click');

  expect(wrapper.emitted('select')![0]).toEqual([list[0], 0]);
});

test('should emit select event after clicking checkbox icon', () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
      modelValue: [],
    },
  });

  wrapper.find('.van-checkbox').trigger('click');

  expect(wrapper.emitted('select')![0]).toEqual([list[0], 0]);
});

test('should emit "update:modelValue" event when checkbox is clicked', async () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
      modelValue: [],
    },
  });

  const items = wrapper.findAll('.van-checkbox');

  await items[0].trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([[list[0].id]]);

  await items[1].trigger('click');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([[list[1].id]]);

  await items[0].trigger('click');
  expect(wrapper.emitted('update:modelValue')![2]).toEqual([[list[0].id]]);
});

test('should emit clickItem event when item is clicked', () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
    },
  });

  wrapper.find('.van-address-item').trigger('click');

  expect(wrapper.emitted('clickItem')![0].slice(0, 2)).toEqual([list[0], 0]);
});

test('should render tag slot correctly', () => {
  const wrapper = mount(AddressList, {
    slots: {
      tag: () => 'Custom Tag',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should bind value correctly when value is an array', () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
      modelValue: list.map((l) => l.id),
    },
  });

  expect(wrapper.find('.van-checkbox-group').exists());
});

test('should bind value correctly when value is not an array', () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
      modelValue: list[0].id,
    },
  });
  expect(wrapper.find('.van-radio-group').exists());
});
