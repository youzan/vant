import { Picker, PickerConfirmEventParams } from '..';
import { mount } from '../../../test';

const cascadeColumns = [
  {
    text: 'A1',
    value: 'A1',
    children: [
      {
        text: 'B1',
        value: 'B1',
        children: [
          { text: 'C1', value: 'C1' },
          { text: 'C2', value: 'C2' },
        ],
      },
      {
        text: 'B2',
        value: 'B2',
        children: [
          { text: 'C3', value: 'C3' },
          { text: 'C4', value: 'C4' },
        ],
      },
    ],
  },
  {
    text: 'A2',
    value: 'A2',
    children: [
      {
        text: 'B3',
        value: 'B3',
        children: [
          { text: 'C5', value: 'C5' },
          { text: 'C6', value: 'C6' },
        ],
      },
      {
        text: 'B4',
        value: 'B4',
        children: [
          { text: 'C7', value: 'C7' },
          { text: 'C8', value: 'C8' },
        ],
      },
    ],
  },
];

test('should emit confirm event for cascade picker correctly', async () => {
  const wrapper = mount(Picker, {
    props: {
      columns: cascadeColumns,
    },
  });

  await wrapper.find('.van-picker__confirm').trigger('click');

  const params = wrapper.emitted<PickerConfirmEventParams[]>('confirm')?.[0];
  expect(params?.[0].selectedValues).toEqual(['A1', 'B1', 'C1']);
});

test('should update cascade options correctly', async () => {
  const wrapper = mount(Picker, {
    props: {
      columns: cascadeColumns,
    },
  });

  await wrapper.findAll('.van-picker-column__item')[1].trigger('click');
  await wrapper.find('.van-picker__confirm').trigger('click');
  const params = wrapper.emitted<PickerConfirmEventParams[]>('confirm')?.[0];
  expect(params?.[0].selectedValues).toEqual(['A2', 'B3', 'C5']);
});

test('should move to next option when default option is disabled', async () => {
  const wrapper = mount(Picker, {
    props: {
      columns: [
        {
          text: 'A1',
          value: 'A1',
          disabled: true,
          children: [
            { text: 'B1', value: 'B1' },
            { text: 'B2', value: 'B2' },
          ],
        },
        {
          text: 'A2',
          value: 'A2',
          children: [
            { text: 'B3', value: 'B3' },
            { text: 'B4', value: 'B4' },
          ],
        },
      ],
    },
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  const params = wrapper.emitted<PickerConfirmEventParams[]>('confirm')?.[0];
  expect(params?.[0].selectedValues).toEqual(['A2', 'B3']);
});

test('should move to first option when all options are disabled', () => {
  const wrapper = mount(Picker, {
    props: {
      columns: [
        {
          text: 'A1',
          disabled: true,
          children: [
            { text: 'B1', disabled: true },
            { text: 'B2', disabled: true },
          ],
        },
        {
          text: 'A2',
          disabled: true,
          children: [
            { text: 'B3', disabled: true },
            { text: 'B4', disabled: true },
          ],
        },
      ],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
