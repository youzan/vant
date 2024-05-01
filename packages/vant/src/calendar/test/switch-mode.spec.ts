import { Calendar, CalendarInstance } from '..';
import { mount, later } from '../../../test';
import {
  formatMonthTitle,
  getMonthByOffset,
  getPrevMonth,
  getNextMonth,
  getPrevYear,
  getNextYear,
  getYearByOffset,
} from '../utils';
import { minDate, maxDate } from './utils';

const disabledActionClass = 'van-calendar__header-action--disabled';

test('the action buttons should be displayed correctly', async () => {
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      poppable: false,
      switchMode: 'month',
    },
  });

  await later();
  expect(wrapper.findAll('.van-calendar__header-action')).toHaveLength(2);

  await wrapper.setProps({ switchMode: 'year-month' });
  expect(wrapper.findAll('.van-calendar__header-action')).toHaveLength(4);
});

test('disable previous and next month buttons', async () => {
  const maxDate = getNextMonth(minDate);
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      poppable: false,
      switchMode: 'month',
    },
  });

  await later();
  const title = wrapper.find('.van-calendar__header-subtitle-text');
  const [prevMonth, nextMonth] = wrapper.findAll(
    '.van-calendar__header-action',
  );

  expect(title.text()).toEqual(formatMonthTitle(maxDate));
  expect(prevMonth.classes()).not.toContain(disabledActionClass);
  expect(nextMonth.classes()).toContain(disabledActionClass);

  await nextMonth.trigger('click');
  expect(title.text()).toEqual(formatMonthTitle(maxDate));
  expect(prevMonth.classes()).not.toContain(disabledActionClass);
  expect(nextMonth.classes()).toContain(disabledActionClass);

  await prevMonth.trigger('click');
  expect(title.text()).toEqual(formatMonthTitle(minDate));
  expect(prevMonth.classes()).toContain(disabledActionClass);
  expect(nextMonth.classes()).not.toContain(disabledActionClass);
});

test('disable previous and next year buttons', async () => {
  const maxDate = getNextYear(minDate);
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      poppable: false,
      switchMode: 'year-month',
    },
  });
  await later();
  let currentDate = maxDate;
  const title = wrapper.find('.van-calendar__header-subtitle-text');
  const [prevYear, prevMonth, nextMonth, nextYear] = wrapper.findAll(
    '.van-calendar__header-action',
  );

  expect(title.text()).toEqual(formatMonthTitle(currentDate));
  expect(prevYear.classes()).not.toContain(disabledActionClass);
  expect(prevMonth.classes()).not.toContain(disabledActionClass);
  expect(nextMonth.classes()).toContain(disabledActionClass);
  expect(nextYear.classes()).toContain(disabledActionClass);

  await prevMonth.trigger('click');
  currentDate = getPrevMonth(currentDate);
  expect(title.text()).toEqual(formatMonthTitle(currentDate));
  expect(prevYear.classes()).toContain(disabledActionClass);
  expect(prevMonth.classes()).not.toContain(disabledActionClass);
  expect(nextMonth.classes()).not.toContain(disabledActionClass);
  expect(nextYear.classes()).toContain(disabledActionClass);

  await nextMonth.trigger('click');
  currentDate = getNextMonth(currentDate);
  expect(title.text()).toEqual(formatMonthTitle(currentDate));

  await prevYear.trigger('click');
  currentDate = getPrevYear(currentDate);
  expect(title.text()).toEqual(formatMonthTitle(currentDate));
  expect(prevYear.classes()).toContain(disabledActionClass);
  expect(prevMonth.classes()).toContain(disabledActionClass);
  expect(nextMonth.classes()).not.toContain(disabledActionClass);
  expect(nextYear.classes()).not.toContain(disabledActionClass);
});

test('should switch to the provided date after calling the scrollToDate method', async () => {
  const maxDate = getNextYear(minDate);
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      poppable: false,
      switchMode: 'month',
    },
  });

  await later();
  let currentDate = maxDate;
  const title = wrapper.find('.van-calendar__header-subtitle-text');

  currentDate = getMonthByOffset(currentDate, -4);
  (wrapper.vm as CalendarInstance).scrollToDate(currentDate);
  await later();
  expect(title.text()).toEqual(formatMonthTitle(currentDate));
});

test('should render action slots correctly', async () => {
  const prevYearSlot = vi.fn(() => 'prev year');
  const prevMonthSlot = vi.fn(() => 'prev month');
  const nextMonthSlot = vi.fn(() => 'next month');
  const nextYearSlot = vi.fn(() => 'next year');
  const maxDate = getNextYear(minDate);
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      poppable: false,
      switchMode: 'year-month',
    },
    slots: {
      'prev-year': prevYearSlot,
      'prev-month': prevMonthSlot,
      'next-month': nextMonthSlot,
      'next-year': nextYearSlot,
    },
  });

  await later();
  const [prevYear, prevMonth, nextMonth, nextYear] = wrapper.findAll(
    '.van-calendar__header-action',
  );
  expect(prevYearSlot).toHaveBeenLastCalledWith({ disabled: false });
  expect(prevMonthSlot).toHaveBeenLastCalledWith({ disabled: false });
  expect(nextMonthSlot).toHaveBeenLastCalledWith({ disabled: true });
  expect(nextYearSlot).toHaveBeenLastCalledWith({ disabled: true });
  expect(prevYear.text()).toEqual('prev year');
  expect(prevMonth.text()).toEqual('prev month');
  expect(nextMonth.text()).toEqual('next month');
  expect(nextYear.text()).toEqual('next year');

  await prevMonth.trigger('click');
  expect(prevYearSlot).toHaveBeenLastCalledWith({ disabled: true });
  expect(prevMonthSlot).toHaveBeenLastCalledWith({ disabled: false });
  expect(nextMonthSlot).toHaveBeenLastCalledWith({ disabled: false });
  expect(nextYearSlot).toHaveBeenLastCalledWith({ disabled: true });
});

test('should emit panelChange event', async () => {
  const onPanelChange = vi.fn();
  const maxDate = getYearByOffset(minDate, 10);
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      poppable: false,
      switchMode: 'year-month',
      onPanelChange,
    },
  });

  await later();
  let currentDate = maxDate;
  const [prevYear, prevMonth, nextMonth, nextYear] = wrapper.findAll(
    '.van-calendar__header-action',
  );

  await prevMonth.trigger('click');
  currentDate = getPrevMonth(currentDate);
  expect(onPanelChange).toHaveBeenLastCalledWith({ date: currentDate });

  await prevYear.trigger('click');
  currentDate = getPrevYear(currentDate);
  expect(onPanelChange).toHaveBeenLastCalledWith({ date: currentDate });

  await nextYear.trigger('click');
  currentDate = getNextYear(currentDate);
  expect(onPanelChange).toHaveBeenLastCalledWith({ date: currentDate });

  await nextMonth.trigger('click');
  currentDate = getNextMonth(currentDate);
  expect(onPanelChange).toHaveBeenLastCalledWith({ date: currentDate });
});
