import { Area } from '..';
import { areaList } from '../demo/area-simple';
import { mount, later, triggerDrag } from '../../../test';
import {
  PickerCancelEventParams,
  PickerChangeEventParams,
  PickerConfirmEventParams,
} from '../../picker';

test('should emit confirm event after click the confirm button', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  const params = wrapper.emitted<PickerConfirmEventParams[]>('confirm')?.[0];
  expect(params?.[0].selectedValues).toEqual(['110000', '110100', '110101']);
});

test('should emit cancel event after click the cancel button', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
  });

  await wrapper.find('.van-picker__cancel').trigger('click');
  const params = wrapper.emitted<PickerCancelEventParams[]>('cancel')?.[0];
  expect(params?.[0].selectedValues).toEqual(['110000', '110100', '110101']);
});

test('should watch modelValue prop and render correctly', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
  });

  await later();
  expect(
    wrapper.find('.van-picker-column__item--selected').html(),
  ).toMatchSnapshot();

  await wrapper.setProps({ modelValue: '120225' });
  expect(
    wrapper.find('.van-picker-column__item--selected').html(),
  ).toMatchSnapshot();

  await wrapper.setProps({ modelValue: '' });
  expect(
    wrapper.find('.van-picker-column__item--selected').html(),
  ).toMatchSnapshot();
});

test('should emit change event after dragging options', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
  });

  const columns = wrapper.findAll('.van-picker-column');
  triggerDrag(columns[0], 0, -100);
  columns[0].find('ul').trigger('transitionend');
  triggerDrag(columns[2], 0, -100);
  columns[2].find('ul').trigger('transitionend');

  await later();
  const params = wrapper.emitted<PickerChangeEventParams[]>('change')?.[0];
  expect(params?.[0].selectedValues).toEqual(['120000', '120100', '120101']);
});

test('should render two columns when columns-num prop is two', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
      columnsNum: 3,
    },
  });

  expect(wrapper.findAll('.van-picker-column')).toHaveLength(3);

  await wrapper.setProps({ columnsNum: 2 });
  expect(wrapper.findAll('.van-picker-column')).toHaveLength(2);
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render title slot correctly', () => {
  const wrapper = mount(Area, {
    slots: {
      title: () => 'Custom Title',
    },
  });

  expect(wrapper.find('.van-picker__toolbar').html()).toMatchSnapshot();
});

test('should render columns-top、columns-bottom slot correctly', () => {
  const wrapper = mount(Area, {
    slots: {
      'columns-top': () => 'Top',
      'columns-bottom': () => 'Bottom',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
