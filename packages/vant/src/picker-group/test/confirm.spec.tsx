import { ref } from 'vue';
import { mount, triggerDrag } from '../../../test';
import { TimePicker } from '../../time-picker';
import { DatePicker } from '../../date-picker';
import { PickerGroup } from '..';

test('should update v-model before confirming a scrolling time picker', async () => {
  const value = ref(['12', '00']);
  const onConfirm = rs.fn(() => value.value.slice());
  const wrapper = mount({
    render() {
      return (
        <PickerGroup tabs={['Time']} onConfirm={onConfirm}>
          <TimePicker v-model={value.value} minHour={12} maxHour={13} />
        </PickerGroup>
      );
    },
  });

  await triggerDrag(wrapper.find('.van-picker-column'), 0, -30);
  expect(value.value).toEqual(['12', '00']);
  await wrapper.find('.van-picker__confirm').trigger('click');

  expect(onConfirm).toHaveReturnedWith(['13', '00']);
  expect(onConfirm).toHaveBeenCalledTimes(1);
  expect(wrapper.findComponent(TimePicker).emitted('confirm')).toHaveLength(1);
  wrapper.unmount();
});

test('should confirm the valid date after stopping a month scroll', async () => {
  const value = ref(['2024', '01', '31']);
  const onConfirm = rs.fn();
  const wrapper = mount({
    render() {
      return (
        <PickerGroup tabs={['Date']} onConfirm={onConfirm}>
          <DatePicker
            v-model={value.value}
            minDate={new Date(2024, 0, 1)}
            maxDate={new Date(2024, 1, 29)}
          />
        </PickerGroup>
      );
    },
  });

  await triggerDrag(wrapper.findAll('.van-picker-column')[1], 0, -30);
  expect(value.value).toEqual(['2024', '01', '31']);
  await wrapper.find('.van-picker__confirm').trigger('click');

  expect(value.value).toEqual(['2024', '02', '29']);
  expect(onConfirm).toHaveBeenCalledWith([
    {
      selectedValues: ['2024', '02', '29'],
      selectedIndexes: [0, 1, 28],
      selectedOptions: [
        { text: '2024', value: '2024' },
        { text: '02', value: '02' },
        { text: '29', value: '29' },
      ],
    },
  ]);
  expect(onConfirm).toHaveBeenCalledTimes(1);
  expect(wrapper.findComponent(DatePicker).emitted('confirm')).toHaveLength(1);
  wrapper.unmount();
});
