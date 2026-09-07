import { nextTick, KeepAlive } from 'vue';
import { Timer, type TimerInstance, type TimerCurrentTime } from '..';
import { mount, later } from '../../../test';

test('should emit finish event when max-time reached', async () => {
  const wrapper = mount(Timer, {
    props: {
      time: 0,
      maxTime: 1,
    },
  });

  expect(wrapper.emitted('finish')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted('finish')).toBeTruthy();
});

test('should emit finish event when max-time reached and millisecond is true', async () => {
  const wrapper = mount(Timer, {
    props: {
      time: 0,
      maxTime: 1,
      millisecond: true,
    },
  });

  expect(wrapper.emitted('finish')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted('finish')).toBeTruthy();
});

test('should re-render after some time', async () => {
  const wrapper = mount(Timer, {
    props: {
      time: 0,
      format: 'SSS',
    },
  });

  const prevSnapShot = wrapper.html();
  await later(1050);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot).not.toEqual(laterSnapShot);
});

test('should re-render after some time when millisecond is true', async () => {
  const wrapper = mount(Timer, {
    props: {
      time: 0,
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
  const wrapper = mount(Timer, {
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
  const wrapper = mount(Timer, {
    props: {
      time: 0,
      format: 'SSS',
      autoStart: false,
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  const instance = wrapper.vm as TimerInstance;

  instance.start();
  await later(50);

  const laterSnapShot = wrapper.html();
  expect(prevSnapShot).not.toEqual(laterSnapShot);
});

test('should pause counting after calling the pause method', async () => {
  const wrapper = mount(Timer, {
    props: {
      time: 0,
      format: 'SSS',
      millisecond: true,
    },
  });

  const instance = wrapper.vm as TimerInstance;
  await later(50);
  instance.pause();
  const prevSnapShot = wrapper.html();
  await later(50);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot).toEqual(laterSnapShot);
});

test('should reset time after calling the reset method', async () => {
  const wrapper = mount(Timer, {
    props: {
      time: 100,
      format: 'SSS',
      autoStart: false,
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  const instance = wrapper.vm as TimerInstance;

  instance.start();
  await later(50);
  instance.reset();
  await nextTick();
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot).toEqual(laterSnapShot);
});

test('should format complete time correctly', () => {
  const wrapper = mount(Timer, {
    props: {
      time: 30 * 60 * 60 * 1000 - 1,
      autoStart: false,
      format: 'DD-HH-mm-ss-SSS',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format incomplete time correctly', () => {
  const wrapper = mount(Timer, {
    props: {
      time: 30 * 60 * 60 * 1000 - 1,
      autoStart: false,
      format: 'HH-mm-ss-SSS',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format SS milliseconds correctly', () => {
  const wrapper = mount(Timer, {
    props: {
      time: 1500,
      autoStart: false,
      format: 'ss-SS',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should format S milliseconds correctly', () => {
  const wrapper = mount(Timer, {
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
          {this.render ? <Timer ref="timer" time="0" /> : null}
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
  await later(1050);

  await wrapper.setData({ render: true });
  const laterSnapShot = wrapper.html();
  expect(prevSnapShot).toEqual(laterSnapShot);
});

test('should emit change event when counting', async () => {
  const wrapper = mount(Timer, {
    props: {
      time: 0,
      maxTime: 1,
    },
  });

  expect(wrapper.emitted('change')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted<TimerCurrentTime>('change')![0][0].total).toBe(1);
});
