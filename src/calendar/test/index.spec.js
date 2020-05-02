import Calendar from '..';
import { mount, later } from '../../../test';
import { getNextDay } from '../utils';
import {
  now,
  minDate,
  maxDate,
  formatDate,
  formatRange,
  formatMultiple,
} from './utils';

test('select event when type is single', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      poppable: false,
    },
  });

  await later();

  wrapper.findAll('.van-calendar__day').at(15).trigger('click');

  expect(formatDate(wrapper.emitted('select')[0][0])).toEqual('2010/1/16');
});

test('select event when type is range', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'range',
      minDate,
      maxDate,
      poppable: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  days.at(15).trigger('click');
  days.at(16).trigger('click');
  days.at(15).trigger('click');
  days.at(12).trigger('click');

  const emittedSelect = wrapper.emitted('select');
  expect(formatRange(emittedSelect[0][0])).toEqual('2010/1/16-');
  expect(formatRange(emittedSelect[1][0])).toEqual('2010/1/16-2010/1/17');
  expect(formatRange(emittedSelect[2][0])).toEqual('2010/1/16-');
  expect(formatRange(emittedSelect[3][0])).toEqual('2010/1/13-');
});

test('select event when type is multiple', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'multiple',
      minDate,
      maxDate,
      poppable: false,
      defaultDate: [minDate],
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  days.at(16).trigger('click');
  days.at(17).trigger('click');

  await later();
  days.at(15).trigger('click');
  days.at(12).trigger('click');

  const emittedSelect = wrapper.emitted('select');
  expect(formatMultiple(emittedSelect[0][0])).toEqual('2010/1/10,2010/1/16');
  expect(formatMultiple(emittedSelect[1][0])).toEqual(
    '2010/1/10,2010/1/16,2010/1/17'
  );
  expect(formatMultiple(emittedSelect[2][0])).toEqual(
    '2010/1/10,2010/1/16,2010/1/17,2010/1/18'
  );
  expect(formatMultiple(emittedSelect[3][0])).toEqual(
    '2010/1/10,2010/1/17,2010/1/18,2010/1/13'
  );
});

test('select event when type is multiple', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'multiple',
      minDate,
      maxDate,
      poppable: false,
      defaultDate: [minDate],
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  await later();
  days.at(15).trigger('click');

  expect(formatDate(wrapper.emitted('unselect')[0][0])).toEqual('2010/1/16');
});

test('should not trigger select event when click disabled day', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      poppable: false,
    },
  });

  await later();

  wrapper.findAll('.van-calendar__day').at(1).trigger('click');

  expect(formatDate(wrapper.emitted('select'))).toBeFalsy();
});

test('confirm event when type is single', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      poppable: false,
    },
  });

  await later();

  wrapper.findAll('.van-calendar__day').at(15).trigger('click');

  expect(wrapper.emitted('confirm')).toBeFalsy();

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatDate(wrapper.emitted('confirm')[0][0])).toEqual('2010/1/16');
});

test('confirm event when type is range', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'range',
      minDate,
      maxDate,
      poppable: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  days.at(18).trigger('click');

  expect(wrapper.emitted('confirm')).toBeFalsy();

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatRange(wrapper.emitted('confirm')[0][0])).toEqual(
    '2010/1/16-2010/1/19'
  );
});

test('default single date', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      poppable: false,
    },
  });

  await later();

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatDate(wrapper.emitted('confirm')[0][0])).toEqual(formatDate(now));
});

test('default range date', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'range',
      poppable: false,
    },
  });

  await later();

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatRange(wrapper.emitted('confirm')[0][0])).toEqual(
    formatRange([now, getNextDay(now)])
  );
});

test('reset method', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      type: 'range',
      poppable: false,
      defaultDate: [minDate, getNextDay(minDate)],
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  days.at(18).trigger('click');

  wrapper.vm.reset();

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatRange(wrapper.emitted('confirm')[0][0])).toEqual(
    '2010/1/10-2010/1/11'
  );
});

test('set show-confirm to false', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      type: 'range',
      poppable: false,
      showConfirm: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  days.at(18).trigger('click');

  expect(formatRange(wrapper.emitted('confirm')[0][0])).toEqual(
    '2010/1/16-2010/1/19'
  );
});

test('row-height prop', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      poppable: false,
      rowHeight: 50,
      defaultDate: minDate,
    },
  });

  await later();

  expect(wrapper).toMatchSnapshot();
});

test('formatter prop', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      poppable: false,
      defaultDate: minDate,
      formatter(day) {
        const date = day.date.getDate();

        switch (date) {
          case 11:
            day.topInfo = 'Top Info';
            break;
          case 12:
            day.bottomInfo = 'Bottom Info';
            break;
          case 13:
            day.text = 'Text';
            break;
          case 14:
            day.className = 'test';
            break;
        }

        return day;
      },
    },
  });

  await later();

  expect(wrapper).toMatchSnapshot();
});

test('title & footer slot', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      poppable: false,
      defaultDate: minDate,
    },
    scopedSlots: {
      title: () => 'Custom Title',
      footer: () => 'Custom Footer',
    },
  });

  await later();

  expect(wrapper).toMatchSnapshot();
});

test('should reset when type changed', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      poppable: false,
      defaultDate: minDate,
    },
  });

  await later();

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatDate(wrapper.emitted('confirm')[0][0])).toEqual('2010/1/10');

  wrapper.setProps({
    type: 'range',
    defaultDate: [minDate, getNextDay(minDate)],
  });
  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatRange(wrapper.emitted('confirm')[1][0])).toEqual(
    '2010/1/10-2010/1/11'
  );
});

test('default-date prop in single type', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      defaultDate: getNextDay(minDate),
      poppable: false,
    },
  });

  await later();

  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatDate(wrapper.emitted('confirm')[0][0])).toEqual('2010/1/11');

  wrapper.setProps({ defaultDate: maxDate });
  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatDate(wrapper.emitted('confirm')[1][0])).toEqual('2010/1/20');
});

test('default-date prop in range type', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'range',
      minDate,
      maxDate,
      poppable: false,
    },
  });

  await later();

  wrapper.setProps({ defaultDate: [] });
  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(wrapper.emitted('confirm')).toBeFalsy();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  days.at(18).trigger('click');
  wrapper.find('.van-calendar__confirm').trigger('click');
  expect(formatRange(wrapper.emitted('confirm')[0][0])).toEqual(
    '2010/1/16-2010/1/19'
  );
});

test('popup wrapper', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      defaultDate: minDate,
    },
    listeners: {
      input(value) {
        wrapper.setProps({ value });
      },
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({ value: true });
  await later();

  expect(wrapper).toMatchSnapshot();

  wrapper.find('.van-popup__close-icon').trigger('click');
  expect(wrapper.element.style.display).toEqual('none');
});

test('set show-mark prop to false', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      showMark: false,
      poppable: false,
    },
  });

  await later();

  expect(wrapper.find('.van-calendar__month-mark').element).toBeFalsy();
});

test('color prop when type is single', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      minDate,
      maxDate,
      color: 'blue',
      poppable: false,
      defaultDate: minDate,
    },
  });

  await later();

  expect(wrapper).toMatchSnapshot();
});

test('color prop when type is range', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      defaultDate: [minDate, maxDate],
      type: 'range',
      minDate,
      maxDate,
      color: 'blue',
      poppable: false,
    },
  });

  await later();

  expect(wrapper).toMatchSnapshot();
});

test('should scroll to current month when show', async (done) => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'range',
      minDate: new Date(2010, 0, 10),
      maxDate: new Date(2010, 11, 10),
      defaultDate: [new Date(2010, 3, 1), new Date(2010, 5, 1)],
    },
  });

  Element.prototype.scrollIntoView = function () {
    expect(this.parentNode).toEqual(
      wrapper.findAll('.van-calendar__month').at(3).element
    );
    done();
  };

  wrapper.setProps({ value: true });

  await later();
});

test('close event', () => {
  const wrapper = mount(Calendar, {
    propsData: {
      value: true,
    },
  });

  wrapper.setProps({ value: false });
  expect(wrapper.emitted('close')).toBeTruthy();
});
