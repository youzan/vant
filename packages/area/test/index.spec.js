import Area from '..';
import { mount } from '@vue/test-utils';
import areaList from '../demo/area.simple';
import { later, triggerDrag } from '../../../test/utils';

const firstOption = [
  { code: '110000', name: '北京市' },
  { code: '110100', name: '北京市' },
  { code: '110101', name: '东城区' }
];

test('confirm & cancel event', () => {
  const wrapper = mount(Area, {
    propsData: {
      areaList
    }
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.find('.van-picker__cancel').trigger('click');

  expect(wrapper.emitted('confirm')[0][0]).toEqual(firstOption);
  expect(wrapper.emitted('cancel')[0][0]).toEqual(firstOption);
});

test('watch areaList & code', async() => {
  const wrapper = mount(Area);
  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ areaList });
  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ value: '110117' });

  await later();
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({
    value: '',
    areaList: null
  });
  expect(wrapper).toMatchSnapshot();
});

test('change option', () => {
  const wrapper = mount(Area, {
    propsData: {
      areaList
    }
  });

  const columns = wrapper.findAll('.van-picker-column');
  expect(wrapper).toMatchSnapshot();
  triggerDrag(columns.at(0), 0, -100);
  expect(wrapper).toMatchSnapshot();
  triggerDrag(columns.at(2), 0, -100);
  expect(wrapper).toMatchSnapshot();
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
