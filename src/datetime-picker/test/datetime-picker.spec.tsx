import { DatetimePicker } from '..';
import { mount, later } from '../../../test';
import { reactive } from 'vue';
import { useExpose } from '../../composables/use-expose';

test('confirm & cancel event', () => {
  const onConfirm = jest.fn();
  const onCancel = jest.fn();

  const wrapper = mount(DatetimePicker, {
    props: {
      onConfirm,
      onCancel,
    },
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(onConfirm).toHaveBeenCalledTimes(1);

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(onCancel).toHaveBeenCalledTimes(1);
});

test('time type', () => {
  const wrapper = mount(DatetimePicker, {
    props: {
      type: 'time',
      minHour: 22,
      minMinute: 58,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('getPicker method', () => {
  const wrapper = mount(DatetimePicker);

  expect(wrapper.vm.getPicker()).toBeTruthy();
});

test('should render title slot correctly', () => {
  const wrapper = mount(DatetimePicker, {
    props: {
      showToolbar: true,
    },
    slots: {
      title: () => 'Custom title',
    },
  });

  expect(wrapper.find('.van-picker__toolbar').html()).toMatchSnapshot();
});

test('should emit value correctly when dynamic change min-date', async () => {
  const defaultValue = new Date(2020, 10, 2, 10, 30);
  const wrapper = mount({
    emits: ['confirm'],
    setup(_, { emit }) {
      const state = reactive({
        date: defaultValue,
        minDate: new Date(2010, 0, 1, 10, 30),
      });

      const onChange = () => {
        state.minDate = state.date;
      };

      useExpose({
        onChange,
      });

      return () => (
        <DatetimePicker
          v-model={state.date}
          minDate={state.minDate}
          onConfirm={(value: Date) => emit('confirm', value)}
        />
      );
    },
  });

  await later();
  (wrapper.vm as Record<string, any>).onChange();
  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(defaultValue);
});
