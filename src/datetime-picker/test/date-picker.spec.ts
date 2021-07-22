import DatePicker from '../DatePicker';
import { mount, later, triggerDrag } from '../../../test';

function filter(type: string, options: string[]): string[] {
  const mod = type === 'year' ? 10 : 5;
  return options.filter((option: string) => Number(option) % mod === 0);
}

function formatter(type: string, value: string): string {
  return `${value} ${type}`;
}

test('filter prop', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      filter,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      modelValue: new Date(2020, 10, 1, 0, 0),
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('formatter prop', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      filter,
      formatter,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2025, 10, 1),
      modelValue: new Date(2020, 10, 1, 0, 0),
    },
  });

  expect(wrapper.html()).toMatchSnapshot();

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  await later();

  expect((wrapper.vm as Record<string, any>).getPicker().getValues()).toEqual([
    '2020 year',
    '05 month',
    '05 day',
    '00 hour',
    '00 minute',
  ]);
});

test('confirm event', () => {
  const date = new Date(2020, 10, 1, 0, 0);

  const wrapper = mount(DatePicker, {
    props: {
      modelValue: date,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0].getFullYear()).toEqual(2020);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getFullYear()).toEqual(2025);
});

test('year-month type', async () => {
  const date = new Date(2020, 10, 1, 0, 0);

  const wrapper = mount(DatePicker, {
    props: {
      type: 'year-month',
      modelValue: date,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0].getFullYear()).toEqual(2020);
  expect(wrapper.emitted<[Date]>('confirm')![0][0].getMonth()).toEqual(10);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getFullYear()).toEqual(2025);
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getMonth()).toEqual(0);

  triggerDrag(wrapper.findAll('.van-picker-column')[0], 0, -100);
  await later();
  triggerDrag(wrapper.findAll('.van-picker-column')[1], 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![2][0].getFullYear()).toEqual(2025);
  expect(wrapper.emitted<[Date]>('confirm')![2][0].getMonth()).toEqual(10);
});

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

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0].getMonth()).toEqual(10);
  expect(wrapper.emitted<[Date]>('confirm')![0][0].getDate()).toEqual(1);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -300);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getMonth()).toEqual(11);
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getDate()).toEqual(1);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -300);
  await later();
  triggerDrag(wrapper.findAll('.van-picker-column')[1], 0, -300);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![2][0].getMonth()).toEqual(11);
  expect(wrapper.emitted<[Date]>('confirm')![2][0].getDate()).toEqual(31);
});

test('datehour type', () => {
  const wrapper = mount(DatePicker, {
    props: {
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2025, 10, 1),
      modelValue: new Date(2020, 10, 1, 0, 0),
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0].getHours()).toEqual(0);

  triggerDrag(wrapper.findAll('.van-picker-column')[3], 0, -300);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getHours()).toEqual(23);
});

test('cancel event', () => {
  const wrapper = mount(DatePicker);

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('cancel')).toBeTruthy();
});

test('max-date prop', () => {
  const maxDate = new Date(2010, 5, 0, 0, 0);
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 10, 30, 30, 30),
      maxDate,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(maxDate);
});

test('min-date prop', () => {
  const minDate = new Date(2030, 0, 0, 0, 0);
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 0, 0, 0),
      minDate,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(minDate);
});

test('dynamic set value', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2019, 1, 1),
    },
  });

  await wrapper.setProps({ modelValue: new Date(2019, 1, 1) });
  wrapper.find('.van-picker__confirm').trigger('click');
  await wrapper.setProps({ modelValue: new Date(2025, 1, 1) });
  wrapper.find('.van-picker__confirm').trigger('click');

  expect(wrapper.emitted<[Date]>('confirm')![0][0].getFullYear()).toEqual(2019);
  expect(wrapper.emitted<[Date]>('confirm')![1][0].getFullYear()).toEqual(2025);
});

test('use min-date with filter', async () => {
  const minDate = new Date(2030, 0, 0, 0, 3);
  const maxDate = new Date(2040, 0, 0, 0, 0);

  const wrapper = mount(DatePicker, {
    props: {
      minDate,
      maxDate,
      modelValue: new Date(2020, 0, 0, 0, 0),
      filter(type: string, values: string[]) {
        if (type === 'minute') {
          return values.filter((value) => Number(value) % 30 === 0);
        }

        return values;
      },
    },
  });

  await later();

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(
    new Date(2030, 0, 0, 0, 30)
  );
});
