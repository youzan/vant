import { Area } from '..';
import { areaList } from '../demo/area-simple';
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

test('should emit confirm event after click the confirm button', () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0]).toEqual([firstOption, [0, 0, 0]]);
});

test('should emit cancel event after click the cancel button', () => {
  const onCancel = jest.fn();
  const wrapper = mount(Area, {
    props: {
      areaList,
      onCancel,
    },
  });

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(onCancel).toHaveBeenLastCalledWith(firstOption, [0, 0, 0]);
});

test('should watch value prop and render correctly', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
  });

  await later();
  expect(
    wrapper.find('.van-picker-column__item--selected').html()
  ).toMatchSnapshot();
  await wrapper.setProps({ value: '120225' });

  await later();
  expect(
    wrapper.find('.van-picker-column__item--selected').html()
  ).toMatchSnapshot();

  await wrapper.setProps({ value: '' });
  expect(
    wrapper.find('.van-picker-column__item--selected').html()
  ).toMatchSnapshot();
});

test('should emit change event after dragging options', () => {
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

  expect(wrapper.emitted('change')[0][0]).toEqual(secondOption);
});

test('should return current values when calling getValues method', () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
    },
  });

  expect(wrapper.vm.getValues()).toEqual(firstOption);
});

test('should reset selected option after calling the reset method', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
      value: '120225',
    },
  });

  await later();
  expect(
    wrapper.find('.van-picker-column__item--selected').html()
  ).toMatchSnapshot();

  wrapper.vm.reset();
  await later();
  expect(
    wrapper.find('.van-picker-column__item--selected').html()
  ).toMatchSnapshot();
});

test('should render two columns when columns-num prop is two', async () => {
  const wrapper = mount(Area, {
    props: {
      areaList,
      columnsNum: 3,
    },
  });

  expect(wrapper.findAll('.van-picker-column').length).toEqual(3);

  await wrapper.setProps({ columnsNum: 2 });
  expect(wrapper.findAll('.van-picker-column').length).toEqual(2);
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
