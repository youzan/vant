import TimePicker from '../TimePicker';
import { mount, later, triggerDrag } from '../../../test';
import { ref, reactive } from 'vue';
import { useExpose } from '../../composables/use-expose';

function filter(type: string, options: string[]): string[] {
  const mod = type === 'minute' ? 10 : 5;
  return options.filter((option) => Number(option) % mod === 0);
}

function formatter(type: string, value: string): string {
  return `${value} ${type}`;
}

test('format initial value', () => {
  const wrapper = mount(TimePicker, {
    props: {
      minHour: 22,
      minMinute: 58,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('max-hour & max-minute', () => {
  const wrapper = mount(TimePicker, {
    props: {
      modelValue: '23:59',
      maxHour: 2,
      maxMinute: 2,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('filter prop', () => {
  const wrapper = mount(TimePicker, {
    props: {
      filter,
      modelValue: '12:00',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('formatter prop', async () => {
  const wrapper = mount(TimePicker, {
    props: {
      filter,
      formatter,
      modelValue: '12:00',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  await later();

  expect((wrapper.vm as Record<string, any>).getPicker().getValues()).toEqual([
    '20 hour',
    '00 minute',
  ]);
});

test('confirm event', () => {
  const wrapper = mount(TimePicker, {
    props: {
      modelValue: '12:00',
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[string]>('confirm')![0][0]).toEqual('23:00');
});

test('cancel event', () => {
  const wrapper = mount(TimePicker);

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('cancel')).toBeTruthy();
});

test('dynamic set value', async () => {
  const wrapper = mount(TimePicker);

  await wrapper.setProps({ modelValue: '00:00' });
  wrapper.find('.van-picker__confirm').trigger('click');
  await wrapper.setProps({ modelValue: '22:30' });
  wrapper.find('.van-picker__confirm').trigger('click');

  expect(wrapper.emitted<[string]>('confirm')![0][0]).toEqual('00:00');
  expect(wrapper.emitted<[string]>('confirm')![1][0]).toEqual('22:30');
});

test('change min-minute and emit correct value', async () => {
  const wrapper = mount(TimePicker, {
    props: {
      modelValue: '12:00',
      minMinute: 0,
    },
  });

  await later();
  await wrapper.setProps({ minMinute: 30 });
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[string]>('confirm')![0][0]).toEqual('12:30');
});

test('set max-hour & max-minute smaller than current then emit correct value', async () => {
  const wrapper = mount(TimePicker, {
    props: {
      modelValue: '23:59',
    },
  });

  await later();
  await wrapper.setProps({
    maxHour: 2,
    maxMinute: 2,
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[string]>('confirm')![0][0]).toEqual('00:00');
});

test('set min-minute dynamically', async () => {
  const wrapper = mount({
    emits: ['change'],
    setup(_, { emit }) {
      const currentTime = ref('12:30');
      return () => (
        <TimePicker
          v-model={currentTime.value}
          minMinute={Number(currentTime.value.split(':')[0]) > 12 ? 0 : 30}
          minHour={12}
          maxHour={13}
          onChange={(value) => emit('change', value)}
        />
      );
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  await later();
  expect(wrapper.emitted<[string]>('change')![0][0]).toEqual('13:00');
});

test('should emit value correctly when dynamic change min-hour', async () => {
  const wrapper = mount({
    emits: ['confirm'],
    setup(_, { emit }) {
      const state = reactive({
        time: '10:30',
        minHour: 1,
      });

      const onChange = () => {
        state.minHour = 11;
      };

      useExpose({
        onChange,
      });

      return () => (
        <TimePicker
          v-model={state.time}
          minHour={state.minHour}
          onConfirm={(value: Date) => emit('confirm', value)}
        />
      );
    },
  });

  await later();
  (wrapper.vm as Record<string, any>).onChange();
  await later();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[Date]>('confirm')![0][0]).toEqual('11:30');
});
