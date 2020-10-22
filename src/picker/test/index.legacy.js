import Picker from '..';
import PickerColumn from '../PickerColumn';
import { mount, triggerDrag, later } from '../../../test';

const simpleColumn = ['1990', '1991', '1992', '1993', '1994', '1995'];
const columns = [
  {
    values: ['vip', 'normal'],
    className: 'column1',
  },
  {
    values: simpleColumn,
    className: 'column2',
  },
];

test('simple columns confirm & cancel event', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: simpleColumn,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('confirm')[0]).toEqual(['1990', 0]);
  expect(wrapper.emitted('cancel')[0]).toEqual(['1990', 0]);
  wrapper.destroy();
});

test('multiple columns confirm & cancel event', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.find('.van-picker__cancel').trigger('click');

  const params = [
    ['vip', '1990'],
    [0, 0],
  ];

  expect(wrapper.emitted('confirm')[0]).toEqual(params);
  expect(wrapper.emitted('cancel')[0]).toEqual(params);
});

test('set picker values', () => {
  const wrapper = mount(Picker, {
    propsData: {
      columns,
    },
  });
  const { vm } = wrapper;

  expect(vm.getColumnValues(-1)).toEqual(undefined);
  expect(vm.getColumnValues(1).length).toEqual(6);
  expect(vm.getColumnValue(1)).toEqual('1990');

  vm.setColumnValue(0, 'normal');
  expect(vm.getColumnValue(0)).toEqual('normal');

  vm.setColumnIndex(0, 0);
  expect(vm.getColumnValue(0)).toEqual('vip');

  vm.setColumnValue(1, '1991');
  expect(vm.getColumnValue(1)).toEqual('1991');

  vm.setColumnValues(0, ['vip', 'normal', 'other']);
  expect(vm.getColumnValues(0).length).toEqual(3);
  expect(vm.getValues().length).toEqual(2);

  vm.setColumnValues(-1, []);
  expect(vm.getValues().length).toEqual(2);

  vm.setValues(['vip', '1992']);
  expect(vm.getColumnIndex(1)).toEqual(2);
  expect(vm.getColumnIndex(2)).toEqual(undefined);
  expect(vm.getIndexes(2)).toEqual([0, 2]);

  vm.setIndexes([1, 4]);
  expect(vm.getColumnValue(1)).toEqual('1994');
  expect(vm.getColumnValue(2)).toEqual(undefined);
});

test('drag columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      columns,
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');

  // 由于在极短的时间（大约几毫秒）移动 `100px`，因此再计算惯性滚动的距离时，
  // 会得到一个很大的值，导致会滚动到且选中列表的最后一项
  expect(wrapper.emitted('change')[0][1]).toEqual(['normal', '1990']);
});

test('drag simple columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      columns: simpleColumn,
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');

  // 由于在极短的时间（大约几毫秒）移动 `100px`，因此再计算惯性滚动的距离时，
  // 会得到一个很大的值，导致会滚动到且选中列表的最后一项
  expect(wrapper.emitted('change')[0][1]).toEqual('1995');
});

test('column watch default index', async () => {
  const disabled = { disabled: true, text: 1 };
  const wrapper = mount(PickerColumn, {
    propsData: {
      initialOptions: [disabled, ...simpleColumn],
      valueKey: 'text',
      itemHeight: 50,
      visibleItemCount: 5,
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  wrapper.vm.defaultIndex = 2;
  expect(wrapper).toMatchSnapshot();
});

test('render title slot', () => {
  const wrapper = mount({
    template: `
      <van-picker>
        <template v-slot:title>Custom title</template>
      </van-picker>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('render confirm/cancel slot', () => {
  const wrapper = mount({
    template: `
      <van-picker>
        <template v-slot:confirm>Custom Confirm</template>
        <template v-slot:cancel>Custom Cancel</template>
      </van-picker>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('render option slot with simple columns', () => {
  const wrapper = mount({
    template: `
      <van-picker :columns="columns" show-toolbar>
        <template #option="item">{{ item }}</template>
      </van-picker>
    `,
    data() {
      return { columns: ['foo', 'bar'] };
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('render option slot with object columns', () => {
  const wrapper = mount({
    template: `
      <van-picker :columns="columns" show-toolbar>
        <template #option="item">{{ item.text }}</template>
      </van-picker>
    `,
    data() {
      return {
        columns: [{ text: 'foo' }, { text: 'bar' }],
      };
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('simulation finger swipe again before transitionend', () => {
  // mock getComputedStyle
  // see: https://github.com/jsdom/jsdom/issues/2588
  const originGetComputedStyle = window.getComputedStyle;
  window.getComputedStyle = (ele) => {
    const style = originGetComputedStyle(ele);

    return {
      ...style,
      transform: 'matrix(1, 0, 0, 1, 0, -5)',
    };
  };

  const wrapper = mount(Picker, {
    propsData: {
      columns: simpleColumn,
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -5);
  triggerDrag(wrapper.find('.van-picker-column'), -5, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  expect(wrapper.emitted('change')[0][1]).toEqual('1995');
});

test('click column item', () => {
  const columns = [
    { text: '杭州' },
    { text: '宁波' },
    { text: '温州', disabled: true },
    { text: '嘉兴', disabled: true },
  ];
  const wrapper = mount(Picker, {
    propsData: {
      columns,
    },
  });

  wrapper.findAll('.van-picker-column__item').at(3).trigger('click');
  expect(wrapper.emitted('change')[0][1]).toEqual(columns[1]);
});

test('toolbar-position prop', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      toolbarPosition: 'bottom',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('not allow html', () => {
  const wrapper = mount(Picker, {
    propsData: {
      allowHtml: false,
      columns: ['<div>option</div>'],
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('columns-top、columns-bottom prop', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
    },
    scopedSlots: {
      'columns-top': () => 'Custom Columns Top',
      'columns-bottom': () => 'Custom Columns Bottom',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('watch columns change', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: ['1', '2'],
      defaultIndex: 1,
    },
  });

  wrapper.setProps({
    columns: ['2', '3'],
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0]).toEqual(['3', 1]);
});

test('should not reset index when columns unchanged', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: ['1', '2'],
    },
  });

  wrapper.vm.setIndexes([1]);
  wrapper.setProps({
    columns: ['1', '2'],
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0]).toEqual(['2', 1]);
});

test('set rem item-height', async () => {
  const originGetComputedStyle = window.getComputedStyle;

  window.getComputedStyle = () => ({ fontSize: '16px' });

  const wrapper = mount(Picker, {
    propsData: {
      columns: simpleColumn.slice(0, 2),
      itemHeight: '10rem',
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  window.getComputedStyle = originGetComputedStyle;
});

test('readonly prop', () => {
  const wrapper = mount(Picker, {
    propsData: {
      columns,
      readonly: true,
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  wrapper.findAll('.van-picker-column__item').at(3).trigger('click');

  expect(wrapper.emitted('change')).toBeFalsy();
});
