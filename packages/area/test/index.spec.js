import Area from '..';
import areaList from '../demo/area.simple';
import { mount, later, triggerDrag } from '../../../test/utils';

const firstOption = [
  { code: '110000', name: '北京市' },
  { code: '110100', name: '北京市' },
  { code: '110101', name: '东城区' }
];

const secondOption = [
  { code: '120000', name: '天津市' },
  { code: '120100', name: '天津市' },
  { code: '120101', name: '和平区' }
];

test('confirm & cancel event', async () => {
  const onConfirm = jest.fn();
  const onCancel = jest.fn();
  const wrapper = mount(Area, {
    propsData: {
      areaList
    },
    listeners: {
      confirm: onConfirm,
      cancel: onCancel
    }
  });

  await later();

  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.find('.van-picker__cancel').trigger('click');

  expect(onConfirm).toHaveBeenCalledWith(firstOption, [0, 0, 0]);
  expect(onCancel).toHaveBeenCalledWith(firstOption, [0, 0, 0]);
});

test('watch areaList & code', async () => {
  const wrapper = mount(Area, {
    propsData: {
      areaList
    }
  });

  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ value: '110117' });

  await later();
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({
    value: ''
  });
  expect(wrapper).toMatchSnapshot();
});

test('change option', () => {
  const onChange = jest.fn();
  const wrapper = mount(Area, {
    propsData: {
      areaList
    },
    listeners: {
      change: onChange
    }
  });

  const columns = wrapper.findAll('.van-picker-column');
  expect(wrapper).toMatchSnapshot();
  triggerDrag(columns.at(0), 0, -100);
  expect(wrapper).toMatchSnapshot();
  triggerDrag(columns.at(2), 0, -100);
  expect(wrapper).toMatchSnapshot();
  expect(onChange.mock.calls[0][1]).toEqual(secondOption);
});

test('getValues method', () => {
  const wrapper = mount(Area, {
    propsData: {
      areaList
    },
    created() {
      expect(this.getValues()).toEqual([]);
    }
  });

  expect(wrapper.vm.getValues()).toEqual(firstOption);
});

test('reset method', async () => {
  const wrapper = mount(Area, {
    propsData: {
      areaList,
      value: '120225'
    }
  });

  await later();
  expect(wrapper).toMatchSnapshot();
  wrapper.vm.reset();
  expect(wrapper).toMatchSnapshot();
});
