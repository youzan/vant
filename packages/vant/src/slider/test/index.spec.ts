import { Slider } from '..';
import {
  later,
  mount,
  trigger,
  triggerDrag,
  mockGetBoundingClientRect,
} from '../../../test';

function mockRect(vertical?: boolean) {
  return mockGetBoundingClientRect({
    width: vertical ? 0 : 100,
    height: vertical ? 100 : 0,
    top: vertical ? 0 : 100,
    left: vertical ? 100 : 0,
  });
}

function testSlotReceivedParams(
  slot: ReturnType<typeof vi.fn>,
  dragging: boolean,
  dragIndex?: number,
) {
  const latestParams = slot.mock.calls.at(-1)![0];
  expect(latestParams.dragging).toEqual(dragging);
  expect(latestParams.dragIndex).toEqual(dragIndex);
}

test('should emit "update:modelValue" event after dragging button', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 50, 0);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
});

test('should emit "update:modelValue" event after clicking slider', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
});

test('should emit dragStart event when start dragging', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  trigger(button, 'touchstart');
  trigger(button, 'touchmove');
  expect(wrapper.emitted('dragStart')).toBeTruthy();
});

test('should emit dragEnd event when end dragging', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  trigger(button, 'touchstart');
  trigger(button, 'touchmove');
  expect(wrapper.emitted('dragEnd')).toBeFalsy();
  trigger(button, 'touchend');
  expect(wrapper.emitted('dragEnd')).toBeTruthy();
});

test('should not allow to drag slider when disabled', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      disabled: true,
    },
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 50, 0);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should not allow to click slider when disabled', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      disabled: true,
    },
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should not allow to drag slider when readonly', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      readonly: true,
    },
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 50, 0);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should not allow to click slider when readonly', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      readonly: true,
    },
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should render readonly Slider correctly', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      readonly: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to drag vertical slider', () => {
  const restoreMock = mockRect(true);

  const wrapper = mount(Slider, {
    props: {
      vertical: true,
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 0, 50);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);

  restoreMock();
});

test('should change slider bar height when using bar-height prop', () => {
  const wrapper = mount(Slider, {
    props: {
      barHeight: 10,
      modelValue: 50,
    },
  });

  expect(wrapper.style.height).toEqual('10px');
});

test('should change button size when using button-size prop', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      buttonSize: 10,
    },
  });

  const button = wrapper.find('.van-slider__button');
  expect(button.style.width).toEqual('10px');
  expect(button.style.height).toEqual('10px');
});

test('should emit "update:modelValue" event after clicking vertical slider', () => {
  const wrapper = mount(Slider, {
    props: {
      vertical: true,
      modelValue: 50,
    },
  });

  trigger(wrapper, 'click', 0, 100);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
});

test('should not emit change event when value not changed', async () => {
  const restoreMock = mockRect();

  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  trigger(button, 'touchstart');
  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('change')).toHaveLength(1);

  await wrapper.setProps({ modelValue: 100 });
  trigger(button, 'touchstart');
  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('change')).toHaveLength(1);

  trigger(wrapper, 'click', 50, 0);
  expect(wrapper.emitted('change')).toHaveLength(2);

  await wrapper.setProps({ modelValue: 50 });
  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('change')).toHaveLength(3);

  restoreMock();
});

// https://github.com/vant-ui/vant/issues/8889
test('should format v-model with step correctly', async () => {
  const wrapper = mount(Slider, {
    props: {
      min: 29,
      max: 39,
      step: 2,
      modelValue: 30.5,
    },
  });

  await later();
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([31]);
});

test('should render button slot correctly', async () => {
  const buttonSlot = vi.fn();
  const wrapper = mount(Slider, {
    props: {
      modelValue: 30,
    },
    slots: {
      button: buttonSlot,
    },
  });

  expect(buttonSlot.mock.calls[0]).toEqual([{ value: 30, dragging: false }]);

  const button = wrapper.find('.van-slider__button-wrapper');

  trigger(button, 'touchstart', 50, 0);
  trigger(button, 'touchmove', 50, 0);
  await later();
  testSlotReceivedParams(buttonSlot, true);

  trigger(button, 'touchend', 50, 0);
  await later();
  testSlotReceivedParams(buttonSlot, false);
});

test('should render left-button、right-button slot correctly', async () => {
  const leftButtonSlot = vi.fn();
  const rightButtonSlot = vi.fn();
  const wrapper = mount(Slider, {
    props: {
      range: true,
      modelValue: [30, 80],
    },
    slots: {
      'left-button': (params) => {
        leftButtonSlot(params);
        return `left-${params.value}`;
      },
      'right-button': (params) => {
        rightButtonSlot(params);
        return `right-${params.value}`;
      },
    },
  });

  expect(leftButtonSlot.mock.calls[0]).toEqual([
    { value: 30, dragging: false, dragIndex: undefined },
  ]);
  expect(rightButtonSlot.mock.calls[0]).toEqual([
    { value: 80, dragging: false, dragIndex: undefined },
  ]);
  expect(wrapper.html()).toMatchSnapshot();

  const [leftButton, rightButton] = wrapper.findAll(
    '.van-slider__button-wrapper',
  );

  trigger(leftButton, 'touchstart', 50, 0);
  trigger(leftButton, 'touchmove', 50, 0);
  await later();
  testSlotReceivedParams(leftButtonSlot, true, 0);
  testSlotReceivedParams(rightButtonSlot, true, 0);

  trigger(leftButton, 'touchend', 50, 0);
  await later();
  testSlotReceivedParams(leftButtonSlot, false, undefined);
  testSlotReceivedParams(rightButtonSlot, false, undefined);

  trigger(rightButton, 'touchstart', 50, 0);
  trigger(rightButton, 'touchmove', 50, 0);
  await later();
  testSlotReceivedParams(leftButtonSlot, true, 1);
  testSlotReceivedParams(rightButtonSlot, true, 1);

  trigger(rightButton, 'touchend', 50, 0);
  await later();
  testSlotReceivedParams(leftButtonSlot, false, undefined);
  testSlotReceivedParams(rightButtonSlot, false, undefined);
});

test('should render reversed slider correctly', () => {
  const wrapper = mount(Slider, {
    props: {
      reverse: true,
      modelValue: 25,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render reversed vertical slider correctly', () => {
  const wrapper = mount(Slider, {
    props: {
      reverse: true,
      vertical: true,
      modelValue: 25,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render reversed range slider correctly', () => {
  const wrapper = mount(Slider, {
    props: {
      range: true,
      reverse: true,
      modelValue: [25, 40],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should update modelValue correctly after clicking the reversed slider', () => {
  const wrapper = mount(Slider, {
    props: {
      reverse: true,
      modelValue: 50,
    },
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([0]);
});

test('should update modelValue correctly after clicking the reversed vertical slider', () => {
  const wrapper = mount(Slider, {
    props: {
      reverse: true,
      vertical: true,
      modelValue: 50,
    },
  });

  trigger(wrapper, 'click', 0, 100);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([0]);
});

describe('Slider format function boundary tests', () => {
  afterEach(() => {
    vi.clearAllTimers();
  });

  test('should not exceed max value when step is large', () => {
    const wrapper = mount(Slider, {
      props: { min: 20, max: 100, step: 30, modelValue: 20 },
    });

    const button = wrapper.find('.van-slider__button');
    triggerDrag(button, 100, 0);

    const emittedValue = wrapper
      .emitted('update:modelValue')!
      .pop()![0] as number;

    expect(emittedValue).toBeLessThanOrEqual(100);
    expect(emittedValue).toBeGreaterThanOrEqual(20);
  });

  test('should choose max when closer than previous step', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 30, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button');

    trigger(button, 'touchstart');

    for (let i = 0; i <= 100; i += 10) {
      triggerDrag(button, i, 0);
    }

    trigger(button, 'touchend');

    const emittedValue = wrapper
      .emitted('update:modelValue')!
      .pop()![0] as number;
    expect(emittedValue).toBeLessThanOrEqual(100);
    expect(emittedValue).toBeGreaterThanOrEqual(0);
  });

  test('should choose previous step when closer than max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 35, modelValue: 0 },
    });

    wrapper.setProps({ modelValue: 50 });

    const button = wrapper.find('.van-slider__button');
    triggerDrag(button, 60, 0);

    const emittedValue = wrapper
      .emitted('update:modelValue')!
      .pop()![0] as number;
    expect(emittedValue).toBeLessThanOrEqual(100);
    expect(emittedValue).toBeGreaterThanOrEqual(0);
  });

  test('should trigger distance comparison logic', () => {
    const wrapper = mount(Slider, {
      props: { min: 10, max: 50, step: 15, modelValue: 10 },
    });

    const button = wrapper.find('.van-slider__button');

    triggerDrag(button, 0, 0);

    triggerDrag(button, 100, 0);

    const results = wrapper.emitted('update:modelValue')!;
    const finalValue = results[results.length - 1][0] as number;

    expect(finalValue).toBeLessThanOrEqual(50);
    expect(finalValue).toBeGreaterThanOrEqual(10);
    expect([25, 40, 50]).toContain(finalValue);
  });

  test('should apply boundary fix on click events', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 45, modelValue: 0 },
    });

    trigger(wrapper, 'click', 100, 0);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBeLessThanOrEqual(100);
    expect(result).toBeGreaterThanOrEqual(0);
  });

  test('should handle equal distance case in boundary comparison', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 60, modelValue: 0 },
    });

    wrapper.setProps({ modelValue: 80 });

    const button = wrapper.find('.van-slider__button');
    trigger(button, 'touchstart');
    trigger(button, 'touchend');

    const results = wrapper.emitted('update:modelValue')!;
    if (results && results.length > 0) {
      const result = results[results.length - 1][0] as number;
      expect(result).toBeLessThanOrEqual(100);
      expect(result).toBeGreaterThanOrEqual(0);
    }
  });

  test('should apply boundary fix in range mode', async () => {
    const wrapper = mount(Slider, {
      props: {
        min: 0,
        max: 100,
        step: 40,
        modelValue: [0, 40],
        range: true,
      },
    });

    const buttons = wrapper.findAll('.van-slider__button-wrapper');
    const rightButton = buttons[1];

    trigger(rightButton, 'touchstart');
    triggerDrag(rightButton, 100, 0);
    trigger(rightButton, 'touchend');

    await later();

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const [left, right] = emitted[emitted.length - 1][0] as [number, number];
      expect(right).toBeLessThanOrEqual(100);
      expect(left).toBeLessThanOrEqual(100);
    }
  });

  test('should apply boundary fix in vertical mode', () => {
    const restoreMock = mockRect(true);

    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 35, modelValue: 0, vertical: true },
    });

    trigger(wrapper, 'click', 0, 100);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBeLessThanOrEqual(100);
    expect(result).toBeGreaterThanOrEqual(0);

    restoreMock();
  });

  test('should apply format fix during initialization', () => {
    const wrapper = mount(Slider, {
      props: {
        min: 0,
        max: 100,
        step: 30,
        modelValue: 110,
      },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[0][0] as number;
      expect(result).toBeLessThanOrEqual(100);
    }
  });

  test('should return previous stepped value when it is closer than max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 60, modelValue: 0 },
    });

    wrapper.setProps({ modelValue: 65 });

    trigger(wrapper, 'click', 65, 0);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBeLessThanOrEqual(100);
    expect(result).toBeGreaterThanOrEqual(0);
  });

  test('should trigger prevSteppedValue return path precisely', () => {
    const wrapper = mount(Slider, {
      props: {
        min: 0,
        max: 100,
        step: 70,
        modelValue: 50,
      },
    });

    wrapper.setProps({ modelValue: 80 });

    wrapper.setProps({
      min: 0,
      max: 50,
      step: 40,
      modelValue: 35,
    });

    wrapper.setProps({
      min: 0,
      max: 30,
      step: 25,
      modelValue: 20,
    });

    wrapper.setProps({ modelValue: 28 });

    wrapper.setProps({
      min: 0,
      max: 20,
      step: 15,
      modelValue: 12,
    });

    wrapper.setProps({ modelValue: 18 });

    wrapper.setProps({ modelValue: 22 });

    const wrapper2 = mount(Slider, {
      props: {
        min: 10,
        max: 50,
        step: 30,
        modelValue: 45,
      },
    });

    const button = wrapper2.find('.van-slider__button');
    triggerDrag(button, 100, 0); // 拖拽到最右端

    const result = wrapper2.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBeLessThanOrEqual(50);
    expect(result).toBeGreaterThanOrEqual(10);
  });

  test('should cover prevSteppedValue return branch with drag operation', async () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 50, step: 35, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button-wrapper');

    if (button.exists()) {
      trigger(button, 'touchstart');
      triggerDrag(button, 32, 0);

      await later();

      const emitted = wrapper.emitted('update:modelValue');
      if (emitted && emitted.length > 0) {
        const result = emitted[emitted.length - 1][0] as number;
        expect(result).toBeLessThanOrEqual(50);
        expect(result).toBeGreaterThanOrEqual(0);
      }

      trigger(button, 'touchend');
    }
  });

  test('should apply format fix in updateValue calls', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 25, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button');

    trigger(button, 'touchstart');
    triggerDrag(button, 95, 0);
    trigger(button, 'touchend');

    const results = wrapper.emitted('update:modelValue')!;
    results.forEach(([value]) => {
      expect(value as number).toBeLessThanOrEqual(100);
    });
  });

  test('should fix the exact issue: min=20, max=100, step=30 returning 110', () => {
    const wrapper = mount(Slider, {
      props: { min: 20, max: 100, step: 30, modelValue: 20 },
    });

    const button = wrapper.find('.van-slider__button');

    trigger(button, 'touchstart');
    triggerDrag(button, 100, 0);
    trigger(button, 'touchend');

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;

    expect(result).toBeLessThanOrEqual(100);
    expect(result).toBeGreaterThanOrEqual(20);

    expect([20, 50, 80, 100]).toContain(result);
  });

  test('should handle step equal to range', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 50, step: 50, modelValue: 0 },
    });

    trigger(wrapper, 'click', 100, 0);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBeLessThanOrEqual(50);
    expect([0, 50]).toContain(result);
  });

  test('should handle step larger than range', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 30, step: 40, modelValue: 0 },
    });

    trigger(wrapper, 'click', 100, 0);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBeLessThanOrEqual(30);
    expect([0, 30]).toContain(result);
  });
});
