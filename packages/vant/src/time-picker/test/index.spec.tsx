import TimePicker from '../TimePicker';
import { mount } from '../../../test';
import type { PickerOption } from '../../picker';

function filter(type: string, options: PickerOption[]): PickerOption[] {
  const mod = type === 'minute' ? 20 : 10;
  return options.filter((option) => Number(option.value) % mod === 0);
}

test('should format initial value correctly', () => {
  const onUpdate = jest.fn();
  mount(TimePicker, {
    props: {
      minHour: 22,
      minMinute: 58,
      'onUpdate:modelValue': onUpdate,
    },
  });

  expect(onUpdate.mock.calls[0]).toEqual([['22', '58']]);
});

test('should update modelValue correctly when using max-hour and max-minute prop', () => {
  const onUpdate = jest.fn();
  mount(TimePicker, {
    props: {
      modelValue: ['23', '59'],
      maxHour: 2,
      maxMinute: 2,
      'onUpdate:modelValue': onUpdate,
    },
  });

  expect(onUpdate.mock.calls[0]).toEqual([['00', '00']]);
});

test('should filter options when using filter prop', () => {
  const wrapper = mount(TimePicker, {
    props: {
      filter,
      modelValue: ['12', '00'],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format options correctly when using formatter prop', async () => {
  const formatter = (type: string, option: PickerOption): PickerOption => {
    option.text = `${option.text} ${type}`;
    return option;
  };
  const wrapper = mount(TimePicker, {
    props: {
      filter,
      formatter,
      modelValue: ['12', '00'],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit confirm event after clicking the confirm button', () => {
  const wrapper = mount(TimePicker, {
    props: {
      modelValue: ['12', '00'],
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')).toEqual([
    [
      {
        selectedOptions: [
          { text: '12', value: '12' },
          { text: '00', value: '00' },
        ],
        selectedValues: ['12', '00'],
      },
    ],
  ]);
});

test('should emit cancel event after clicking the cancel button', () => {
  const wrapper = mount(TimePicker);

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('cancel')).toBeTruthy();
});

test('should emit confirm event correctly after setting values', async () => {
  const wrapper = mount(TimePicker);

  await wrapper.setProps({ modelValue: ['00', '00'] });
  await wrapper.find('.van-picker__confirm').trigger('click');
  await wrapper.setProps({ modelValue: ['22', '30'] });
  await wrapper.find('.van-picker__confirm').trigger('click');

  expect(wrapper.emitted('confirm')).toEqual([
    [
      {
        selectedOptions: [
          { text: '00', value: '00' },
          { text: '00', value: '00' },
        ],
        selectedValues: ['00', '00'],
      },
    ],
    [
      {
        selectedOptions: [
          { text: '22', value: '22' },
          { text: '30', value: '30' },
        ],
        selectedValues: ['22', '30'],
      },
    ],
  ]);
});

test('should emit confirm event correctly after setting range', async () => {
  const onUpdate = jest.fn();
  const wrapper = mount(TimePicker, {
    props: {
      minHour: 0,
      minMinute: 0,
      modelValue: ['12', '00'],
      'onUpdate:modelValue': onUpdate,
    },
  });

  await wrapper.setProps({ minHour: 20, minMinute: 30 });
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(onUpdate.mock.calls[0]).toEqual([['20', '30']]);
  expect(wrapper.emitted('confirm')).toEqual([
    [
      {
        selectedOptions: [
          { text: '20', value: '20' },
          { text: '30', value: '30' },
        ],
        selectedValues: ['20', '30'],
      },
    ],
  ]);
});

test('should emit confirm event correctly after setting smaller max-hour and max-minute', async () => {
  const wrapper = mount(TimePicker, {
    props: {
      modelValue: ['23', '59'],
    },
  });

  await wrapper.setProps({
    maxHour: 2,
    maxMinute: 2,
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')).toEqual([
    [
      {
        selectedOptions: [
          { text: '00', value: '00' },
          { text: '00', value: '00' },
        ],
        selectedValues: ['00', '00'],
      },
    ],
  ]);
});
