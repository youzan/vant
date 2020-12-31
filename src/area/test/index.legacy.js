import Area from '..';
import areaList from '../demo/area-simple';
import { mount, later, triggerDrag } from '../../../test';

const firstOption = [
  { code: '110000', name: '北京市' },
  { code: '110100', name: '北京市' },
  { code: '110101', name: '东城区' },
];

const secondOption = [
  { code: '120000', name: '天津市' },
  { code: '120100', name: '天津市' },
  { code: '120101', name: '和平区' },
];

test('confirm & cancel event', async () => {
  const onConfirm = jest.fn();
  const onCancel = jest.fn();
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
    listeners: {
      confirm: onConfirm,
      cancel: onCancel,
    },
  });

  await later();

  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.find('.van-picker__cancel').trigger('click');

  expect(onConfirm).toHaveBeenCalledWith(firstOption, [0, 0, 0]);
  expect(onCancel).toHaveBeenCalledWith(firstOption, [0, 0, 0]);
});

test('watch areaList & code', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  wrapper.setProps({ value: '110117' });

  await later();
  expect(wrapper.html()).toMatchSnapshot();

  wrapper.setProps({
    value: '',
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('change option', () => {
  const onChange = jest.fn();
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
    listeners: {
      change: onChange,
    },
  });

  const columns = wrapper.findAll('.van-picker-column');
  expect(wrapper.html()).toMatchSnapshot();

  triggerDrag(columns[0], 0, -100);
  columns[0].find('ul').trigger('transitionend');
  expect(wrapper.html()).toMatchSnapshot();

  triggerDrag(columns[2], 0, -100);
  columns[2].find('ul').trigger('transitionend');
  expect(wrapper.html()).toMatchSnapshot();

  expect(onChange.mock.calls[0][1]).toEqual(secondOption);
});

test('getValues method', () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
    created() {
      expect(this.getValues()).toEqual([]);
    },
  });

  expect(wrapper.vm.getValues()).toEqual(firstOption);
});

test('reset method', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
      value: '120225',
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
  wrapper.vm.reset();
  expect(wrapper.html()).toMatchSnapshot();
});

test('columns-num prop', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
      columnsNum: 3,
    },
  });

  wrapper.setProps({
    columnsNum: 2,
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('title slot', async () => {
  const wrapper = mount(Area, {
    slots: {
      title: () => 'Custom Title',
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('columns-top、columns-bottom slot', async () => {
  const wrapper = mount(Area, {
    slots: {
      'columns-top': 'Top',
      'columns-bottom': 'Bottom',
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});
