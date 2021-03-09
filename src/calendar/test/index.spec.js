import { Calendar } from '..';
import { mount } from '../../../test';
import { getNextDay, getPrevDay } from '../utils';
import { minDate, maxDate } from './utils';

test('should reset to default date when calling reset method', async () => {
  const defaultDate = [minDate, getNextDay(minDate)];
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      type: 'range',
      poppable: false,
      lazyRender: false,
      defaultDate,
    },
  });

  const days = wrapper.findAll('.van-calendar__day');
  await days[15].trigger('click');
  await days[18].trigger('click');

  wrapper.vm.reset();

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(defaultDate);
});

test('should reset to specific date when calling reset method with date', async () => {
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      type: 'range',
      poppable: false,
      lazyRender: false,
      defaultDate: [minDate, getNextDay(minDate)],
    },
  });

  const days = wrapper.findAll('.van-calendar__day');
  await days[15].trigger('click');
  await days[18].trigger('click');

  const newDate = [getPrevDay(maxDate), maxDate];
  wrapper.vm.reset(newDate);

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(newDate);
});
