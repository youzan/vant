import { nextTick } from 'vue';
import { later, mount } from '../../../test';
import DatePicker from '..';
import type {
  PickerOption,
  PickerCancelEventParams,
  PickerConfirmEventParams,
} from '../../picker';

test('should emit confirm event correctly', async () => {
  const minDate = new Date(2030, 0, 1);

  const wrapper = mount(DatePicker, {
    props: {
      minDate,
    },
  });

  await later();
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]).toEqual(
    {
      selectedOptions: [
        { text: '2030', value: '2030' },
        { text: '01', value: '01' },
        { text: '01', value: '01' },
      ],
      selectedValues: ['2030', '01', '01'],
      selectedIndexes: [0, 0, 0],
    },
  );
});

test('should emit cancel event correctly', async () => {
  const minDate = new Date(2030, 0, 1);
  const wrapper = mount(DatePicker, {
    props: {
      minDate,
    },
  });

  await later();
  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted<[PickerCancelEventParams]>('cancel')![0][0]).toEqual({
    selectedOptions: [
      { text: '2030', value: '2030' },
      { text: '01', value: '01' },
      { text: '01', value: '01' },
    ],
    selectedValues: ['2030', '01', '01'],
    selectedIndexes: [0, 0, 0],
  });
});

test('should allow to dynamically set value', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['2020', '01', '01'],
      minDate: new Date(2019, 0, 1),
    },
  });

  await wrapper.setProps({ modelValue: ['2020', '02', '02'] });
  await wrapper.find('.van-picker__confirm').trigger('click');
  await wrapper.setProps({ modelValue: ['2020', '03', '03'] });
  await wrapper.find('.van-picker__confirm').trigger('click');

  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]
      .selectedValues,
  ).toEqual(['2020', '02', '02']);
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![1][0]
      .selectedValues,
  ).toEqual(['2020', '03', '03']);
});

test('should render with max-date correctly', async () => {
  const maxDate = new Date(2010, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['2020', '10', '10'],
      minDate,
      maxDate,
      'onUpdate:modelValue': (newVal: string[]) => {
        nextTick(() => {
          wrapper.setProps({
            modelValue: newVal,
          });
        });
      },
    },
  });

  await later();
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]
      .selectedValues,
  ).toEqual(['2010', '01', '10']);
});

test('should render with min-date correctly', async () => {
  const maxDate = new Date(2010, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['1990', '10', '10'],
      minDate,
      maxDate,
      'onUpdate:modelValue': (newVal: string[]) => {
        nextTick(() => {
          wrapper.setProps({
            modelValue: newVal,
          });
        });
      },
    },
  });

  await later();
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]
      .selectedValues,
  ).toEqual(['2000', '10', '10']);
});

test('should render title slot correctly', () => {
  const wrapper = mount(DatePicker, {
    slots: {
      title: () => 'Custom title',
    },
  });

  expect(wrapper.find('.van-picker__toolbar').html()).toMatchSnapshot();
});

function filter(type: string, options: PickerOption[]): PickerOption[] {
  return options.filter((option) => Number(option.value) % 10 === 0);
}

test('should filter options when using filter prop', () => {
  const maxDate = new Date(2010, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      filter,
      maxDate,
      minDate,
      modelValue: ['2005', '01', '01'],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format options correctly when using formatter prop', async () => {
  const formatter = (type: string, option: PickerOption): PickerOption => {
    option.text = `${option.text} ${type}`;
    return option;
  };
  const maxDate = new Date(2010, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      filter,
      formatter,
      maxDate,
      minDate,
      modelValue: ['2005', '01', '01'],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should update value correctly when dynamically change min-date', async () => {
  const maxDate = new Date(2050, 1, 1);
  const minDate = new Date(2000, 1, 1);
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['2005', '10', '10'],
      minDate,
      maxDate,
      'onUpdate:modelValue': (newVal: string[]) => {
        nextTick(() => {
          wrapper.setProps({
            modelValue: newVal,
          });
        });
      },
    },
  });

  await later();
  await wrapper.setProps({
    minDate: new Date(2020, 11, 20),
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]
      .selectedValues,
  ).toEqual(['2020', '12', '20']);
});

test('should be displayed correctly when modelValue updated by external sources', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['2023', '12'],
      columnsType: ['year', 'month'],
      minDate: new Date(2023, 5, 1),
      maxDate: new Date(2024, 5, 1),
    },
  });

  await wrapper.setProps({ modelValue: ['2024', '01'] });
  const selectedItems = wrapper.findAll('.van-picker-column__item--selected');
  expect(selectedItems[0].text()).toEqual('2024');
  expect(selectedItems[1].text()).toEqual('01');

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]
      .selectedValues,
  ).toEqual(['2024', '01']);
});

test('should sort options correctly when using sort prop', async () => {
  const sort = (type: string, options: any[]) => {
    if (type === 'year') {
      return options.reverse();
    }
    return options;
  };

  const wrapper = mount(DatePicker, {
    props: {
      modelValue: ['2023', '01', '01'],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 0, 1),
      sort,
    },
  });

  await later();

  // Check if years are sorted in descending order
  const yearColumn = wrapper.find('.van-picker-column');
  const yearItems = yearColumn.findAll('.van-picker-column__item');
  expect(yearItems[0].text()).toEqual('2025');
  expect(yearItems[1].text()).toEqual('2024');
  expect(yearItems[2].text()).toEqual('2023');
  expect(yearItems[3].text()).toEqual('2022');
  expect(yearItems[4].text()).toEqual('2021');
  expect(yearItems[5].text()).toEqual('2020');

  // Check if the selected value is correct
  const selectedItems = wrapper.findAll('.van-picker-column__item--selected');
  expect(selectedItems[0].text()).toEqual('2023');

  // Confirm the value
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]
      .selectedValues,
  ).toEqual(['2023', '01', '01']);
});
