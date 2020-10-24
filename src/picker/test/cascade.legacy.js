import Picker from '..';
import { mount, triggerDrag } from '../../../test';

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

test('cascade columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(['A1', 'B1', 'C1']);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  expect(wrapper.emitted('change')[0][1]).toEqual(['A2', 'B3', 'C5']);

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0]).toEqual(['A2', 'B3', 'C5']);
});

test('setColumnValue of cascade columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  wrapper.vm.setColumnValue(0, 'A2');
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(['A2', 'B3', 'C5']);

  wrapper.vm.setColumnValue(1, 'B4');
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0]).toEqual(['A2', 'B4', 'C7']);
});

test('setValues of cascade columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  wrapper.vm.setValues(['A2', 'B4', 'C8']);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(['A2', 'B4', 'C8']);
});

test('setColumnIndex of cascade columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  wrapper.vm.setColumnIndex(0, 1);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(['A2', 'B3', 'C5']);

  wrapper.vm.setColumnIndex(1, 1);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0]).toEqual(['A2', 'B4', 'C7']);
});

test('setIndexes of cascade columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: COLUMNS,
    },
  });

  wrapper.vm.setIndexes([1, 0, 1]);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(['A2', 'B3', 'C6']);
});

test('disabled in cascade', () => {
  const wrapper = mount(Picker, {
    propsData: {
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

  expect(wrapper.find('.van-picker-column__item--disabled')).toMatchSnapshot();
});
