import DatePicker from '../DatePicker';
import { mount, later, triggerDrag } from '../../../test';

function filter(type, options) {
  const mod = type === 'year' ? 10 : 5;
  return options.filter((option) => option % mod === 0);
}

function formatter(type, value) {
  return `${value} ${type}`;
}

test('filter prop', () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      filter,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      value: new Date(2020, 10, 1, 0, 0),
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('formatter prop', async () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      filter,
      formatter,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2025, 10, 1),
      value: new Date(2020, 10, 1, 0, 0),
    },
  });

  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  await later();

  expect(wrapper.emitted('change')[0][0].getValues()).toEqual([
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
    propsData: {
      value: date,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0].getFullYear()).toEqual(2020);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0].getFullYear()).toEqual(2025);
});

test('year-month type', () => {
  const date = new Date(2020, 10, 1, 0, 0);

  const wrapper = mount(DatePicker, {
    propsData: {
      type: 'year-month',
      value: date,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0].getFullYear()).toEqual(2020);
  expect(wrapper.emitted('confirm')[0][0].getMonth()).toEqual(10);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0].getFullYear()).toEqual(2025);
  expect(wrapper.emitted('confirm')[1][0].getMonth()).toEqual(0);

  triggerDrag(wrapper.findAll('.van-picker-column').at(1), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[2][0].getFullYear()).toEqual(2025);
  expect(wrapper.emitted('confirm')[2][0].getMonth()).toEqual(10);
});

test('month-day type', () => {
  const date = new Date(2020, 10, 1, 0, 0);

  const wrapper = mount(DatePicker, {
    propsData: {
      type: 'month-day',
      value: date,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0].getMonth()).toEqual(10);
  expect(wrapper.emitted('confirm')[0][0].getDate()).toEqual(1);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -300);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0].getMonth()).toEqual(11);
  expect(wrapper.emitted('confirm')[1][0].getDate()).toEqual(1);

  triggerDrag(wrapper.findAll('.van-picker-column').at(1), 0, -300);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[2][0].getMonth()).toEqual(11);
  expect(wrapper.emitted('confirm')[2][0].getDate()).toEqual(31);
});

test('datehour type', async () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2025, 10, 1),
      value: new Date(2020, 10, 1, 0, 0),
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0].getHours()).toEqual(0);

  triggerDrag(wrapper.findAll('.van-picker-column').at(3), 0, -300);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0].getHours()).toEqual(23);
});

test('cancel event', () => {
  const wrapper = mount(DatePicker);

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('cancel')).toBeTruthy();
});

test('max-date prop', () => {
  const maxDate = new Date(2010, 5, 0, 0, 0);
  const wrapper = mount(DatePicker, {
    propsData: {
      value: new Date(2020, 10, 30, 30, 30),
      maxDate,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(maxDate);
});

test('min-date prop', () => {
  const minDate = new Date(2030, 0, 0, 0, 0);
  const wrapper = mount(DatePicker, {
    propsData: {
      value: new Date(2020, 0, 0, 0, 0),
      minDate,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(minDate);
});

test('dynamic set value', () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      value: new Date(2019, 1, 1),
    },
  });

  wrapper.setProps({ value: new Date(2019, 1, 1) });
  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.setProps({ value: new Date(2025, 1, 1) });
  wrapper.find('.van-picker__confirm').trigger('click');

  expect(wrapper.emitted('confirm')[0][0].getFullYear()).toEqual(2019);
  expect(wrapper.emitted('confirm')[1][0].getFullYear()).toEqual(2025);
});

test('use min-date with filter', async () => {
  const minDate = new Date(2030, 0, 0, 0, 3);
  const maxDate = new Date(2040, 0, 0, 0, 0);

  const wrapper = mount(DatePicker, {
    propsData: {
      minDate,
      maxDate,
      value: new Date(2020, 0, 0, 0, 0),
      filter(type, values) {
        if (type === 'minute') {
          return values.filter((value) => value % 30 === 0);
        }

        return values;
      },
    },
  });

  await later();

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(new Date(2030, 0, 0, 0, 30));
});

test('v-model', async () => {
  const minDate = new Date(2030, 0, 0, 0, 3);

  const wrapper = mount({
    template: `
      <van-datetime-picker
          v-model="date"
          :min-date="minDate"
      ></van-datetime-picker>
    `,
    data() {
      return {
        date: null,
        minDate: new Date(2030, 0, 0, 0, 3),
      };
    },
  });

  await later();

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.vm.date).toEqual(minDate);
});

test('value has an inital value', () => {
  const defaultValue = new Date(2020, 0, 0, 0, 0);
  const wrapper = mount(DatePicker, {
    propsData: {
      value: defaultValue,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(defaultValue);
});

test('dynamic set min-date then emit correct value', async () => {
  const defaultValue = new Date(2020, 10, 2, 10, 30);
  const wrapper = mount({
    template: `
    <van-datetime-picker
      v-model="date"
      :min-date="minDate"
      @confirm="value => this.$emit('confirm', value)"
    />
    `,
    data() {
      return {
        date: defaultValue,
        minDate: new Date(2010, 0, 1, 10, 30),
      };
    },
    mounted() {
      this.minDate = defaultValue;
    },
  });

  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(defaultValue);
});

test('dynamic set max-date then emit correct value', async () => {
  const date = new Date(2020, 10, 2, 10, 30);
  const minDate = new Date(0);
  const wrapper = mount({
    template: `
      <van-datetime-picker
        v-model="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="value => this.$emit('confirm', value)"
      />
    `,

    data() {
      return {
        date,
        minDate,
        maxDate: new Date(2030, 0, 1, 10, 30),
      };
    },

    methods: {
      onChangeMaxDate(date) {
        this.maxDate = date;
      },
    },
  });

  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(date);

  await later();
  wrapper.vm.onChangeMaxDate(new Date(2029, 10, 10, 10, 10));
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0]).toEqual(date);

  await later();
  wrapper.vm.onChangeMaxDate(new Date(2020, 10, 10, 10, 10));
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[2][0]).toEqual(date);

  await later();
  wrapper.vm.onChangeMaxDate(new Date(2019, 10, 10, 10, 10));
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[3][0]).toEqual(
    new Date(2019, 10, 10, 10, 10)
  );

  await later();
  wrapper.vm.onChangeMaxDate(new Date(2040, 10, 10, 10, 10));
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[4][0]).toEqual(
    new Date(2019, 10, 10, 10, 10)
  );
});

test('should value correctly when using filter and select over min date', async () => {
  const minDate = new Date(2010, 0, 1, 0, 21);
  const maxDate = new Date(2020, 0, 1, 20, 42);

  const wrapper = mount({
    template: `
      <van-datetime-picker
        v-model="value"
        :min-date="minDate"
        :max-date="maxDate"
        :filter="filter"
        @confirm="value => this.$emit('confirm', value)"
      />
    `,

    data() {
      return {
        value: new Date(minDate),
        minDate,
        maxDate,
      };
    },

    methods: {
      filter(type, values) {
        if (type === 'minute') {
          return values.filter((value) => value % 10 === 0);
        }

        return values;
      },
    },
  });

  const confirm = wrapper.find('.van-picker__confirm');
  await later();
  confirm.trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(new Date(2010, 0, 1, 0, 30));

  await later();
  triggerDrag(wrapper.findAll('.van-picker-column').at(3), 0, -300);
  wrapper.findAll('.van-picker-column ul').at(3).trigger('transitionend');
  await later();
  triggerDrag(wrapper.findAll('.van-picker-column').at(4), 0, 300);
  wrapper.findAll('.van-picker-column ul').at(3).trigger('transitionend');
  await later();
  confirm.trigger('click');
  expect(wrapper.emitted('confirm')[1][0]).toEqual(new Date(2010, 0, 1, 23, 0));

  await later();
  triggerDrag(wrapper.findAll('.van-picker-column').at(3), 0, 300);
  wrapper.findAll('.van-picker-column ul').at(3).trigger('transitionend');
  await later();
  confirm.trigger('click');
  expect(wrapper.emitted('confirm')[2][0]).toEqual(new Date(2010, 0, 1, 0, 30));

  await later();
  wrapper.setData({ value: maxDate });
  confirm.trigger('click');
  expect(wrapper.emitted('confirm')[3][0]).toEqual(
    new Date(2020, 0, 1, 20, 40)
  );

  await later();
  triggerDrag(wrapper.findAll('.van-picker-column').at(3), 0, 300);
  wrapper.findAll('.van-picker-column ul').at(3).trigger('transitionend');
  await later();
  triggerDrag(wrapper.findAll('.van-picker-column').at(4), 0, -300);
  wrapper.findAll('.van-picker-column ul').at(3).trigger('transitionend');
  await later();
  confirm.trigger('click');
  expect(wrapper.emitted('confirm')[4][0]).toEqual(new Date(2020, 0, 1, 0, 50));

  await later();
  triggerDrag(wrapper.findAll('.van-picker-column').at(3), 0, -300);
  wrapper.findAll('.van-picker-column ul').at(3).trigger('transitionend');
  await later();
  confirm.trigger('click');
  expect(wrapper.emitted('confirm')[5][0]).toEqual(
    new Date(2020, 0, 1, 20, 40)
  );
});
