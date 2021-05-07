import { Picker } from '..';
import { mount, triggerDrag } from '../../../test';
import type { ComponentInstance } from '../../utils';

const COLUMNS = [
  {
    text: 'A1',
    children: [
      {
        text: 'B1',
        children: [{ text: 'C1' }, { text: 'C2' }],
      },
      {
        text: 'B2',
        children: [{ text: 'C3' }, { text: 'C4' }],
      },
    ],
  },
  {
    text: 'A2',
    children: [
      {
        text: 'B3',
        children: [{ text: 'C5' }, { text: 'C6' }],
      },
      {
        text: 'B4',
        children: [{ text: 'C7' }, { text: 'C8' }],
      },
    ],
  },
];

const pickColumnText = (column: Array<{ text: string }>) =>
  column.map((item: { text: string }) => item.text);

type ColumnValues = Array<{
  text: string;
  children?: ColumnValues[];
}>;

test('cascade columns', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');

  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('confirm')![0][0])
  ).toEqual(['A1', 'B1', 'C1']);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');

  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('change')![0][0])
  ).toEqual(['A2', 'B3', 'C5']);

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('confirm')![1][0])
  ).toEqual(['A2', 'B3', 'C5']);
});

test('setColumnValue of cascade columns', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  (wrapper.vm as ComponentInstance).setColumnValue(0, 'A2');
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('confirm')![0][0])
  ).toEqual(['A2', 'B3', 'C5']);

  (wrapper.vm as ComponentInstance).setColumnValue(1, 'B4');
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('confirm')![1][0])
  ).toEqual(['A2', 'B4', 'C7']);
});

test('setValues of cascade columns', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  (wrapper.vm as ComponentInstance).setValues(['A2', 'B4', 'C8']);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('confirm')![0][0])
  ).toEqual(['A2', 'B4', 'C8']);
});

test('setColumnIndex of cascade columns', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  (wrapper.vm as ComponentInstance).setColumnIndex(0, 1);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('confirm')![0][0])
  ).toEqual(['A2', 'B3', 'C5']);

  (wrapper.vm as ComponentInstance).setColumnIndex(1, 1);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('confirm')![1][0])
  ).toEqual(['A2', 'B4', 'C7']);
});

test('setIndexes of cascade columns', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  (wrapper.vm as ComponentInstance).setIndexes([1, 0, 1]);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    pickColumnText(wrapper.emitted<[ColumnValues]>('confirm')![0][0])
  ).toEqual(['A2', 'B3', 'C6']);
});

test('disabled in cascade', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: [
        COLUMNS[0],
        {
          ...COLUMNS[1],
          disabled: true,
        },
      ],
    },
  });

  expect(
    wrapper.find('.van-picker-column__item--disabled').html()
  ).toMatchSnapshot();
});

test('should move to next option when default option is disabled', () => {
  const wrapper = mount(Picker, {
    props: {
      columns: [
        {
          text: 'A1',
          disabled: true,
          children: [{ text: 'B1' }, { text: 'B2' }],
        },
        {
          text: 'A2',
          children: [{ text: 'B3' }, { text: 'B4' }],
        },
      ],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
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
