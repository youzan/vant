import { nextTick, KeepAlive } from 'vue';
import {
  CountDown,
  type CountDownInstance,
  type CountDownCurrentTime,
} from '..';
import { mount, later } from '../../../test';

test('should emit finish event when finished', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 1,
    },
  });

  expect(wrapper.emitted('finish')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted('finish')).toBeTruthy();
});

test('should emit finish event when finished and millisecond is true', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 1,
      millisecond: true,
    },
  });

  expect(wrapper.emitted('finish')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted('finish')).toBeTruthy();
});

test('should re-render after some time', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 1000,
      format: 'SSS',
    },
  });

  const prevSnapShot = wrapper.html();
  await later(50);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot).not.toEqual(laterSnapShot);
});

test('should re-render after some time when millisecond is false', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 100,
      format: 'SSS',
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  await later(50);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot).not.toEqual(laterSnapShot);
});

test('should not start counting when auto-start prop is false', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 100,
      format: 'SSS',
      autoStart: false,
    },
  });

  await later(50);
  expect(wrapper.html()).toMatchSnapshot();
});

test('should start counting after calling the start method', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 100,
      format: 'SSS',
      autoStart: false,
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  const instance = wrapper.vm as CountDownInstance;

  instance.start();
  await later(50);

  const laterSnapShot = wrapper.html();
  expect(prevSnapShot).not.toEqual(laterSnapShot);
});

test('should pause counting after calling the pause method', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 100,
      format: 'SSS',
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  const instance = wrapper.vm as CountDownInstance;

  instance.pause();
  await later(50);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot).toEqual(laterSnapShot);
});

test('should reset time after calling the reset method', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 100,
      format: 'SSS',
      autoStart: false,
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  const instance = wrapper.vm as CountDownInstance;

  instance.start();
  await later(50);
  instance.reset();
  await nextTick();
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot).toEqual(laterSnapShot);
});

test('should format complete time correctly', () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 30 * 60 * 60 * 1000 - 1,
      autoStart: false,
      format: 'DD-HH-mm-ss-SSS',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format incomplete time correctly', () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 30 * 60 * 60 * 1000 - 1,
      autoStart: false,
      format: 'HH-mm-ss-SSS',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format SS milliseconds correctly', () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 1500,
      autoStart: false,
      format: 'ss-SS',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format S milliseconds correctly', () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 1500,
      autoStart: false,
      format: 'ss-S',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should pause counting when deactivated', async () => {
  const wrapper = mount({
    render() {
      return (
        <KeepAlive>
          {this.render ? <CountDown ref="countDown" time="10000" /> : null}
        </KeepAlive>
      );
    },
    data() {
      return {
        render: true,
      };
    },
  });

  const prevSnapShot = wrapper.html();
  await wrapper.setData({ render: false });
  await later(50);

  await wrapper.setData({ render: true });
  const laterSnapShot = wrapper.html();
  expect(prevSnapShot).toEqual(laterSnapShot);
});

test('should emit change event when counting', async () => {
  const wrapper = mount(CountDown, {
    props: {
      time: 1,
    },
  });

  expect(wrapper.emitted('change')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted<CountDownCurrentTime>('change')![0]).toEqual([
    {
      days: 0,
      hours: 0,
      milliseconds: 0,
      minutes: 0,
      seconds: 0,
      total: 0,
    },
  ]);
});
