import CountDown from '..';
import { mount, later } from '../../../test';

test('macro task finish event', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1,
    },
  });

  expect(wrapper.emitted('finish')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted('finish')).toBeTruthy();
});

test('micro task finish event', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1,
      millisecond: true,
    },
  });

  expect(wrapper.emitted('finish')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted('finish')).toBeTruthy();
});

test('macro task re-render', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1000,
      format: 'SSS',
    },
  });

  const prevSnapShot = wrapper.html();
  await later(50);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot !== laterSnapShot).toBeTruthy();
});

test('micro task re-render', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  await later(50);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot !== laterSnapShot).toBeTruthy();
});

test('disable auto-start prop', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      autoStart: false,
    },
  });

  await later(50);
  expect(wrapper).toMatchSnapshot();
});

test('start method', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      autoStart: false,
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();

  wrapper.vm.start();
  wrapper.vm.start();

  await later(50);

  const laterShapShot = wrapper.html();

  expect(prevSnapShot !== laterShapShot).toBeTruthy();
});

test('pause method', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  wrapper.vm.pause();
  await later(50);
  const laterShapShot = wrapper.html();

  expect(prevSnapShot === laterShapShot).toBeTruthy();
});

test('reset method', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      millisecond: true,
    },
  });

  const prevSnapShot = wrapper.html();
  await later(50);
  wrapper.vm.reset();
  const laterShapShot = wrapper.html();

  expect(prevSnapShot === laterShapShot).toBeTruthy();
});

test('complete format prop', () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 30 * 60 * 60 * 1000 - 1,
      autoStart: false,
      format: 'DD-HH-mm-ss-SSS',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('milliseconds format SS', () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1500,
      autoStart: false,
      format: 'ss-SS',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('milliseconds format S', () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1500,
      autoStart: false,
      format: 'ss-S',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('incomplate format prop', () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 30 * 60 * 60 * 1000 - 1,
      autoStart: false,
      format: 'HH-mm-ss-SSS',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('pause when unmounted', () => {
  const wrapper = mount(CountDown);
  expect(wrapper.vm.counting).toBeTruthy();
  wrapper.destroy();
  expect(wrapper.vm.counting).toBeFalsy();
});

test('pause when deactivated', async () => {
  const wrapper = mount({
    template: `
      <keep-alive>
        <van-count-down v-if="render" ref="countDown" time="100" />
      </keep-alive>
    `,
    data() {
      return {
        render: true,
      };
    },
    methods: {
      getCountDown() {
        return this.$refs.countDown;
      },
    },
  });

  const countDown = wrapper.vm.getCountDown();
  expect(countDown.counting).toBeTruthy();

  wrapper.setData({ render: false });
  expect(countDown.counting).toBeFalsy();
  wrapper.setData({ render: true });
  expect(countDown.counting).toBeTruthy();

  countDown.pause();
  wrapper.setData({ render: false });
  wrapper.setData({ render: true });
  expect(countDown.counting).toBeFalsy();
});

test('change event', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1,
    },
  });

  expect(wrapper.emitted('change')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted('change')[0][0]).toEqual({
    days: 0,
    hours: 0,
    milliseconds: 0,
    minutes: 0,
    seconds: 0,
  });
});
