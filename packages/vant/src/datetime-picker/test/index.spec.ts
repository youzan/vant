import { later, mount, triggerDrag } from '../../../test';
import DatePicker from '../DatePicker';

test('month-day type', async () => {
  const date = new Date(2020, 10, 1, 0, 0);

  const wrapper = mount(DatePicker, {
    props: {
      type: 'month-day',
      modelValue: date,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    },
  });

  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0].getMonth()).toEqual(10);
  expect(wrapper.emitted<[Date]>('confirm')![0][0].getDate()).toEqual(1);

  await later();
  triggerDrag(wrapper.find('.van-picker-column'), 0, -300);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getMonth()).toEqual(11);
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getDate()).toEqual(1);

  await later();
  triggerDrag(wrapper.findAll('.van-picker-column')[1], 0, -300);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![2][0].getMonth()).toEqual(11);
  expect(wrapper.emitted<[Date]>('confirm')![2][0].getDate()).toEqual(31);
});

test('v-model', async () => {
  const minDate = new Date(2030, 0, 0, 0, 3);

  const wrapper = mount(DatePicker, {
    props: {
      minDate,
    },
  });

  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(minDate);
});

test('value has an initial value', async () => {
  const defaultValue = new Date(2020, 0, 0, 0, 0);
  const wrapper = mount(DatePicker, {
    propsData: {
      modelValue: defaultValue,
    },
  });

  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(defaultValue);
});
