// import { DatetimePicker } from '../../datetime-picker';
// import { mount, later } from '../../../test';
// import { reactive } from 'vue';
// import { useExpose } from '../../composables/use-expose';

// test('should emit confirm event after clicking the confirm button', () => {
//   const onConfirm = jest.fn();
//   const wrapper = mount(DatetimePicker, {
//     props: {
//       onConfirm,
//     },
//   });
//   wrapper.find('.van-picker__confirm').trigger('click');
//   expect(onConfirm).toHaveBeenCalledTimes(1);
// });

// test('should emit cancel event after clicking the confirm button', () => {
//   const onCancel = jest.fn();
//   const wrapper = mount(DatetimePicker, {
//     props: {
//       onCancel,
//     },
//   });
//   wrapper.find('.van-picker__cancel').trigger('click');
//   expect(onCancel).toHaveBeenCalledTimes(1);
// });

// test('should allow to call getPicker method', () => {
//   const wrapper = mount(DatetimePicker);

//   expect(wrapper.vm.getPicker()).toBeTruthy();
// });

// test('should render title slot correctly', () => {
//   const wrapper = mount(DatetimePicker, {
//     props: {
//       showToolbar: true,
//     },
//     slots: {
//       title: () => 'Custom title',
//     },
//   });

//   expect(wrapper.find('.van-picker__toolbar').html()).toMatchSnapshot();
// });

// test('should emit value correctly when dynamic change min-date', async () => {
//   const defaultValue = new Date(2020, 10, 2, 10, 30);
//   const wrapper = mount({
//     emits: ['confirm'],
//     setup(_, { emit }) {
//       const state = reactive({
//         date: defaultValue,
//         minDate: new Date(2010, 0, 1, 10, 30),
//       });

//       const onChange = () => {
//         state.minDate = state.date;
//       };

//       useExpose({
//         onChange,
//       });

//       return () => (
//         <DatetimePicker
//           v-model={state.date}
//           minDate={state.minDate}
//           onConfirm={(value: Date) => emit('confirm', value)}
//         />
//       );
//     },
//   });

//   await later();
//   (wrapper.vm as Record<string, any>).onChange();
//   await later();
//   wrapper.find('.van-picker__confirm').trigger('click');
//   expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual(defaultValue);
// });

// test('should update value correctly after calling setColumnIndex method', async () => {
//   const onConfirm = jest.fn();
//   const defaultDate = new Date(2020, 0, 1);
//   const wrapper = mount(DatetimePicker, {
//     props: {
//       type: 'date',
//       minDate: defaultDate,
//       maxDate: new Date(2020, 0, 30),
//       modelValue: defaultDate,
//       onConfirm,
//     },
//   });

//   wrapper.vm.getPicker().setColumnIndex(2, 14);
//   await wrapper.find('.van-picker__confirm').trigger('click');
//   expect(onConfirm.mock.calls[0]).toEqual([new Date(2020, 0, 15)]);
// });

// test('should update value correctly after calling setColumnValue method', async () => {
//   const onConfirm = jest.fn();
//   const defaultDate = new Date(2020, 0, 1);
//   const wrapper = mount(DatetimePicker, {
//     props: {
//       type: 'date',
//       minDate: defaultDate,
//       maxDate: new Date(2020, 0, 30),
//       modelValue: defaultDate,
//       onConfirm,
//     },
//   });

//   wrapper.vm.getPicker().setColumnValue(2, '15');
//   await wrapper.find('.van-picker__confirm').trigger('click');
//   expect(onConfirm.mock.calls[0]).toEqual([new Date(2020, 0, 15)]);
// });
