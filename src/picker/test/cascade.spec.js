import Picker from '..';
import { mount, triggerDrag } from '../../../test';
import { cascadeColumns } from '../demo/data';

test('cascade columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: cascadeColumns['en-US'],
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual([
    'Zhejiang',
    'Hangzhou',
    'Xihu',
  ]);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  expect(wrapper.emitted('change')[0][1]).toEqual([
    'Fujian',
    'Fuzhou',
    'Gulou',
  ]);

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0]).toEqual([
    'Fujian',
    'Fuzhou',
    'Gulou',
  ]);
});

test('setColumnValue of cascade columns', () => {
  const wrapper = mount(Picker, {
    propsData: {
      showToolbar: true,
      columns: cascadeColumns['en-US'],
    },
  });

  wrapper.vm.setColumnValue(0, 'Fujian');
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual([
    'Fujian',
    'Fuzhou',
    'Gulou',
  ]);

  wrapper.vm.setColumnValue(1, 'Xiamen');
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0]).toEqual([
    'Fujian',
    'Xiamen',
    'Siming',
  ]);
});
