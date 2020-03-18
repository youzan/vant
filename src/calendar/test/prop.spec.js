import Calendar from '..';
import { mount, later } from '../../../test';

const minDate = new Date(2010, 0, 10);
const maxDate = new Date(2010, 0, 20);

test('max-range prop', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'range',
      minDate,
      maxDate,
      maxRange: 1,
      poppable: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  days.at(18).trigger('click');
  wrapper.find('.van-calendar__confirm').trigger('click');

  expect(wrapper.emitted('confirm')).toBeFalsy();
});

test('show-title prop', () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: true,
    },
  });

  expect(wrapper.contains('.van-calendar__header-title')).toBeTruthy();
  wrapper.setProps({ showTitle: false });
  expect(wrapper.contains('.van-calendar__header-title')).toBeFalsy();
});

test('show-subtitle prop', () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: true,
    },
  });

  expect(wrapper.contains('.van-calendar__header-subtitle')).toBeTruthy();
  wrapper.setProps({ showSubtitle: false });
  expect(wrapper.contains('.van-calendar__header-subtitle')).toBeFalsy();
});

test('hide close icon when there is no title', () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: true,
    },
  });

  expect(wrapper.contains('.van-popup__close-icon')).toBeTruthy();

  wrapper.setProps({
    showTitle: false,
    showSubtitle: false,
  });
  expect(wrapper.contains('.van-popup__close-icon')).toBeFalsy();
});

test('allow-same-day prop', async () => {
  const select = jest.fn();
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'range',
      minDate,
      maxDate,
      poppable: false,
    },
    listeners: {
      select,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(9).trigger('click');
  days.at(9).trigger('click');

  expect(select).toHaveBeenLastCalledWith([minDate, null]);

  wrapper.setProps({
    allowSameDay: true,
  });

  days.at(9).trigger('click');
  expect(select).toHaveBeenLastCalledWith([minDate, minDate]);
});
