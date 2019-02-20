import Picker from '..';
import PickerColumn from '../PickerColumn';
import { mount, triggerDrag, later } from '../../../test/utils';

const simpleColumn = ['1990', '1991', '1992', '1993', '1994', '1995'];
const columns = [
  {
    values: ['vip', 'normal'],
    className: 'column1'
  },
  {
    values: simpleColumn,
    className: 'column2'
  }
];

test('simple columns confirm & cancel event', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: simpleColumn
    }
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
      showToolbar: true
    }
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('confirm')[0]).toEqual([[], []]);
  expect(wrapper.emitted('cancel')[0]).toEqual([[], []]);
});

test('set picker values', () => {
  const wrapper = mount(Picker, {
    propsData: {
      columns
    }
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
      columns
    }
  });
  triggerDrag(wrapper.find('.van-picker-column'), 0, 0);
  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  expect(wrapper.emitted('change')[0][1]).toEqual(['normal', '1990']);
});

test('drag simple columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      columns: simpleColumn
    }
  });
  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  expect(wrapper.emitted('change')[0][1]).toEqual('1992');
});

test('column watch default index', async () => {
  const disabled = { disabled: true, text: 1 };
  const wrapper = mount(PickerColumn, {
    propsData: {
      initialOptions: [disabled, ...simpleColumn],
      valueKey: 'text',
      itemHeight: 50
    }
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  wrapper.vm.defaultIndex = 2;
  expect(wrapper).toMatchSnapshot();
});

test('render title slot', () => {
  const wrapper = mount({
    template: `
      <picker show-toolbar>
        <template v-slot:title>Custom title</template>
      </picker>
    `,
    components: {
      Picker
    }
  });

  expect(wrapper).toMatchSnapshot();
});
