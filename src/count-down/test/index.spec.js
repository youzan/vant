import CountDown from '..';
import { mount, later } from '../../../test/utils';

test('macro task finish event', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1
    }
  });

  expect(wrapper.emitted('finish')).toBeFalsy();
  await later(20);
  expect(wrapper.emitted('finish')).toBeTruthy();
});

test('micro task finish event', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1,
      millisecond: true
    }
  });

  expect(wrapper.emitted('finish')).toBeFalsy();
  await later(20);
  expect(wrapper.emitted('finish')).toBeTruthy();
});

test('macro task re-render', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 1000,
      format: 'SSS'
    }
  });

  const prevSnapShot = wrapper.html();
  await later(20);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot !== laterSnapShot).toBeTruthy();
});

test('micro task re-render', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      millisecond: true
    }
  });

  const prevSnapShot = wrapper.html();
  await later(20);
  const laterSnapShot = wrapper.html();

  expect(prevSnapShot !== laterSnapShot).toBeTruthy();
});

test('disable auto-start prop', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      autoStart: false
    }
  });

  await later(20);
  expect(wrapper).toMatchSnapshot();
});

test('start method', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      autoStart: false,
      millisecond: true
    }
  });

  const prevSnapShot = wrapper.html();

  wrapper.vm.start();
  wrapper.vm.start();

  await later(20);

  const laterShapShot = wrapper.html();

  expect(prevSnapShot !== laterShapShot).toBeTruthy();
});

test('pause method', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      millisecond: true
    }
  });

  const prevSnapShot = wrapper.html();
  wrapper.vm.pause();
  await later(20);
  const laterShapShot = wrapper.html();

  expect(prevSnapShot === laterShapShot).toBeTruthy();
});

test('reset method', async () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 100,
      format: 'SSS',
      millisecond: true
    }
  });

  const prevSnapShot = wrapper.html();
  await later(20);
  wrapper.vm.reset();
  const laterShapShot = wrapper.html();

  expect(prevSnapShot === laterShapShot).toBeTruthy();
});

test('complete format prop', () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 30 * 60 * 60 * 1000 - 1,
      autoStart: false,
      format: 'DD-HH-mm-ss-SSS'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('incomplate format prop', () => {
  const wrapper = mount(CountDown, {
    propsData: {
      time: 30 * 60 * 60 * 1000 - 1,
      autoStart: false,
      format: 'HH-mm-ss-SSS'
    }
  });

  expect(wrapper).toMatchSnapshot();
});
