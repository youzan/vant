import { Calendar } from '..';
import { mount, later } from '../../../test';
import { minDate, maxDate } from './utils';

test('max-range prop when type is range and showConfirm is false', async () => {
  const wrapper = mount(Calendar, {
    props: {
      type: 'range',
      minDate,
      maxDate,
      maxRange: 3,
      poppable: false,
      showConfirm: false,
      lazyRender: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days[12].trigger('click');
  days[18].trigger('click');

  expect(wrapper.emitted<[Date]>('select')![0][0]).toEqual([
    new Date(2010, 0, 13),
  ]);
  expect(wrapper.emitted<[Date]>('select')![1][0]).toEqual([
    new Date(2010, 0, 13),
    new Date(2010, 0, 19),
  ]);
  expect(wrapper.emitted('confirm')).toBeFalsy();
});

test('max-range prop when type is range and showConfirm is true', async () => {
  const wrapper = mount(Calendar, {
    props: {
      type: 'range',
      minDate,
      maxDate,
      maxRange: 3,
      poppable: false,
      lazyRender: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days[12].trigger('click');
  days[18].trigger('click');

  expect(wrapper.emitted<[Date]>('select')![0][0]).toEqual([
    new Date(2010, 0, 13),
  ]);
  expect(wrapper.emitted<[Date]>('select')![1][0]).toEqual([
    new Date(2010, 0, 13),
    new Date(2010, 0, 15),
  ]);
  expect(wrapper.emitted('confirm')).toBeFalsy();
});

test('max-range prop when type is multiple', async () => {
  const wrapper = mount(Calendar, {
    props: {
      type: 'multiple',
      minDate,
      maxDate,
      maxRange: 2,
      poppable: false,
      showConfirm: false,
      lazyRender: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days[13].trigger('click');
  days[14].trigger('click');
  days[15].trigger('click');

  expect(wrapper.emitted<[Date]>('select')![0][0]).toHaveLength(2);
});

test('show-title prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      show: true,
    },
  });

  expect(wrapper.find('.van-calendar__header-title').exists()).toBeTruthy();
  await wrapper.setProps({ showTitle: false });
  expect(wrapper.find('.van-calendar__header-title').exists()).toBeFalsy();
});

test('show-subtitle prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      show: true,
    },
  });

  expect(wrapper.find('.van-calendar__header-subtitle').exists()).toBeTruthy();
  await wrapper.setProps({ showSubtitle: false });
  expect(wrapper.find('.van-calendar__header-subtitle').exists()).toBeFalsy();
});

test('hide close icon when there is no title', async () => {
  const wrapper = mount(Calendar, {
    props: {
      show: true,
    },
  });

  expect(wrapper.find('.van-popup__close-icon').exists()).toBeTruthy();

  await wrapper.setProps({
    showTitle: false,
    showSubtitle: false,
  });
  expect(wrapper.find('.van-popup__close-icon').exists()).toBeFalsy();
});

test('allow-same-day prop', async () => {
  const onSelect = jest.fn();
  const wrapper = mount(Calendar, {
    props: {
      type: 'range',
      minDate,
      maxDate,
      poppable: false,
      lazyRender: false,
      onSelect,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days[9].trigger('click');
  days[9].trigger('click');

  expect(onSelect).toHaveBeenLastCalledWith([minDate]);

  await wrapper.setProps({
    allowSameDay: true,
  });

  days[9].trigger('click');
  expect(onSelect).toHaveBeenLastCalledWith([minDate, minDate]);
});

test('min-date after current time', () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      minDate: new Date(2200, 0, 1),
      maxDate: new Date(2200, 0, 2),
      lazyRender: false,
    },
  });

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(
    new Date(2200, 0, 1)
  );
});

test('min-date before current time', () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      minDate: new Date(1800, 0, 1),
      maxDate: new Date(1800, 0, 2),
      lazyRender: false,
    },
  });

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(
    new Date(1800, 0, 2)
  );
});

test('lazy-render prop', () => {
  const wrapper = mount(Calendar, {
    props: {
      minDate,
      maxDate,
      poppable: false,
      lazyRender: false,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('month-show event', async () => {
  const wrapper = mount(Calendar, {
    props: {
      show: true,
    },
  });
  await later(200);

  expect(wrapper.emitted('month-show')).toBeTruthy();
});

test('first day of week', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultDate: new Date(2020, 7, 1),
      minDate: new Date(2020, 7, 1),
      maxDate: new Date(2020, 7, 30),
      firstDayOfWeek: 2,
      lazyRender: false,
    },
  });

  await later();

  expect(wrapper.findAll('.van-calendar__weekday')[0].text()).toEqual('Tue');

  const day = wrapper.find(
    '.van-calendar__month:first-of-type .van-calendar__day'
  );
  expect(day.text()).toEqual('1');
  expect(day.attributes('style')).toContain(`margin-left: ${(100 * 4) / 7}%`);
});

test('readonly prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      type: 'multiple',
      minDate,
      maxDate,
      readonly: true,
      poppable: false,
      lazyRender: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days[13].trigger('click');
  expect(wrapper.emitted('select')).toBeFalsy();

  await wrapper.setProps({ readonly: false });
  days[13].trigger('click');
  expect(wrapper.emitted('select')).toBeTruthy();
});

test('should disabled prompt when using show-range-prompt prop', async () => {
  document.getElementsByTagName('html')[0].innerHTML = '';
  const wrapper = mount(Calendar, {
    props: {
      type: 'range',
      minDate,
      maxDate,
      maxRange: 3,
      poppable: false,
      lazyRender: false,
      showRangePrompt: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days[12].trigger('click');
  days[18].trigger('click');

  await later();
  expect(document.querySelector('.van-toast')).toBeFalsy();
});

test('should emit over-range when exceeded max range', async () => {
  const onOverRange = jest.fn();
  const wrapper = mount(Calendar, {
    props: {
      type: 'range',
      minDate,
      maxDate,
      maxRange: 3,
      onOverRange,
      poppable: false,
      lazyRender: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days[12].trigger('click');
  days[18].trigger('click');

  expect(onOverRange).toHaveBeenCalledTimes(1);
});
