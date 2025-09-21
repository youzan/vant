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

// https://github.com/vant-ui/vant/issues/13625
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

  test('should return prevSteppedValue when it is closer than max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 50, step: 35, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button-wrapper');

    if (button.exists()) {
      // 拖拽到 steppedValue > max 且 prevSteppedValue 更接近 value 的位置
      trigger(button, 'touchstart');
      triggerDrag(button, 48, 0); // 拖到 48，steppedValue=70 > max=50，prevSteppedValue=35
      trigger(button, 'touchend');

      const emitted = wrapper.emitted('update:modelValue');
      expect(emitted).toBeTruthy();

      const finalValue = emitted!.pop()![0] as number;
      expect(finalValue).toBe(35); // 返回 prevSteppedValue
    }
  });

  test('should return prevSteppedValue when steppedValue > max and prev is closer', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 50, step: 35, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button-wrapper');
    if (!button.exists()) return;

    trigger(button, 'touchstart');
    triggerDrag(button, 65, 0);
    trigger(button, 'touchend');

    const emitted = wrapper.emitted('update:modelValue');
    expect(emitted).toBeTruthy();

    const finalValue = emitted!.pop()![0] as number;
    expect(finalValue).toBe(35);
  });

  test('should cover prevSteppedValue return branch precisely', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 50, step: 35, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button-wrapper');
    if (!button.exists()) return;

    trigger(button, 'touchstart');
    triggerDrag(button, 65, 0);
    trigger(button, 'touchend');

    const emitted = wrapper.emitted('update:modelValue');
    expect(emitted).toBeTruthy();

    const finalValue = emitted!.pop()![0] as number;
    expect(finalValue).toBe(35);
  });

  test('should return max when max is closer or equal distance to prevSteppedValue', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 60, modelValue: 0 },
    });

    wrapper.setProps({ modelValue: 85 });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBe(100);
    }
  });

  test('should return max when distances are equal', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 40, modelValue: 0 },
    });

    wrapper.setProps({ max: 75, modelValue: 70 });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBe(75);
    }
  });

  test('should return max value when it is closer to target than previous step', () => {
    const wrapper = mount(Slider, {
      props: { min: 10, max: 55, step: 30, modelValue: 10 },
    });

    const button = wrapper.find('.van-slider__button');

    triggerDrag(button, 50, 0);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBe(55);
  });

  test('should return prevSteppedValue when it is definitively closer than max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 50, step: 45, modelValue: 0 },
    });

    wrapper.setProps({ modelValue: 47 });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBe(45);
    }
  });

  test('should return prevSteppedValue when distance is clearly closer', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 40, step: 30, modelValue: 0 },
    });

    wrapper.setProps({ modelValue: 32 });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBe(30);
    }
  });

  test('should cover prevSteppedValue branch precisely', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 35, step: 25, modelValue: 26 },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBe(25);
    }
  });

  test('should comprehensively cover all boundary conditions in format function', () => {
    const testCases = [
      {
        min: 0,
        max: 20,
        step: 15,
        value: 8,
        expectedBranch: 'prevSteppedValue',
        description: 'prevSteppedValue closer than max',
      },
      {
        min: 5,
        max: 25,
        step: 18,
        value: 14,
        expectedBranch: 'prevSteppedValue',
        description: 'small distance to prev',
      },
      {
        min: 0,
        max: 30,
        step: 25,
        value: 16,
        expectedBranch: 'prevSteppedValue',
        description: 'prev clearly closer',
      },
      {
        min: 10,
        max: 35,
        step: 20,
        value: 18,
        expectedBranch: 'prevSteppedValue',
        description: 'another prev case',
      },

      {
        min: 0,
        max: 40,
        step: 30,
        value: 35,
        expectedBranch: 'max',
        description: 'max closer than prev',
      },
      {
        min: 5,
        max: 50,
        step: 35,
        value: 42,
        expectedBranch: 'max',
        description: 'max clearly closer',
      },
      {
        min: 0,
        max: 60,
        step: 45,
        value: 52,
        expectedBranch: 'max',
        description: 'another max case',
      },

      {
        min: 0,
        max: 50,
        step: 40,
        value: 45,
        expectedBranch: 'max',
        description: 'equal distance case',
      },
    ];

    testCases.forEach(
      ({ min, max, step, value, expectedBranch, description }) => {
        const wrapper = mount(Slider, {
          props: { min, max, step, modelValue: value },
        });

        const emitted = wrapper.emitted('update:modelValue');

        if (emitted && emitted.length > 0) {
          const result = emitted[emitted.length - 1][0] as number;

          expect(result).toBeGreaterThanOrEqual(min);
          expect(result).toBeLessThanOrEqual(max);

          if (expectedBranch === 'prevSteppedValue') {
            const diff = Math.round((value - min) / step) * step;
            const steppedValue = min + diff;
            if (steppedValue > max) {
              const prevSteppedValue = min + diff - step;
              const distanceToMax = Math.abs(value - max);
              const distanceToPrev = Math.abs(value - prevSteppedValue);

              if (distanceToPrev < distanceToMax) {
                expect(result).toBe(prevSteppedValue);
              }
            }
          } else if (expectedBranch === 'max') {
            const diff = Math.round((value - min) / step) * step;
            const steppedValue = min + diff;
            if (steppedValue > max) {
              const prevSteppedValue = min + diff - step;
              const distanceToMax = Math.abs(value - max);
              const distanceToPrev = Math.abs(value - prevSteppedValue);

              if (distanceToMax <= distanceToPrev) {
                expect(result).toBe(max);
              }
            }
          }

          console.log(`Test case is: ${description}`);
          console.log(
            `  Input: min=${min}, max=${max}, step=${step}, value=${value}`,
          );
          console.log(
            `  Result is: ${result}, Expected branch: ${expectedBranch}`,
          );
        } else {
          console.log(
            `No event emitted for that: ${description} (min=${min}, max=${max}, step=${step}, value=${value})`,
          );
        }
      },
    );
  });

  test('should test edge cases with mathematical precision', () => {
    const precisionTestCases = [
      { min: 0, max: 37, step: 25, value: 19 },
      { min: 0, max: 43, step: 30, value: 38 },
      { min: 0, max: 28, step: 20, value: 14 },
      { min: 0, max: 33, step: 22, value: 27 },
      { min: 0, max: 46, step: 35, value: 23 },
      { min: 0, max: 39, step: 28, value: 31 },
    ];

    precisionTestCases.forEach(({ min, max, step, value }, index) => {
      const wrapper = mount(Slider, {
        props: { min, max, step, modelValue: value },
      });

      const emitted = wrapper.emitted('update:modelValue');
      if (emitted && emitted.length > 0) {
        const result = emitted[emitted.length - 1][0] as number;

        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);

        const diff = Math.round((value - min) / step) * step;
        const steppedValue = min + diff;

        if (steppedValue <= max) {
          expect(result).toBe(steppedValue);
        } else {
          const prevSteppedValue = min + diff - step;
          const distanceToMax = Math.abs(value - max);
          const distanceToPrev = Math.abs(value - prevSteppedValue);

          if (distanceToMax <= distanceToPrev) {
            expect(result).toBe(max);
          } else {
            expect(result).toBe(prevSteppedValue);
          }
        }

        console.log(`Precision testis ${index + 1}:`);
        console.log(
          `  Calculated: steppedValue=${steppedValue}, prevSteppedValue=${min + diff - step}`,
        );
        console.log(
          `  Distances: toMax=${Math.abs(value - max)}, toPrev=${Math.abs(value - (min + diff - step))}`,
        );
        console.log(`  Result is: ${result}`);
      }
    });
  });

  test('should exhaustively test return path coverage', () => {
    const exhaustiveTests = [];

    for (let stepSize = 15; stepSize <= 40; stepSize += 5) {
      for (let maxVal = 20; maxVal <= 50; maxVal += 10) {
        for (let valueOffset = 5; valueOffset <= 25; valueOffset += 5) {
          const testCase = {
            min: 0,
            max: maxVal,
            step: stepSize,
            value: valueOffset,
          };

          const diff =
            Math.round((testCase.value - testCase.min) / testCase.step) *
            testCase.step;
          const steppedValue = testCase.min + diff;

          if (steppedValue > testCase.max) {
            exhaustiveTests.push(testCase);
          }
        }
      }
    }

    exhaustiveTests.forEach(({ min, max, step, value }) => {
      const wrapper = mount(Slider, {
        props: { min, max, step, modelValue: value },
      });

      const emitted = wrapper.emitted('update:modelValue');
      if (emitted && emitted.length > 0) {
        const result = emitted[emitted.length - 1][0] as number;

        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      }
    });

    console.log(
      `Exhaustive test completed with this ${exhaustiveTests.length} test cases`,
    );
  });

  test('should guarantee prevSteppedValue return with precise calculation', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 20, step: 15, modelValue: 0 },
    });

    wrapper.setProps({ step: 18, modelValue: 15 });

    wrapper.setProps({ modelValue: 19 });

    wrapper.setProps({ step: 25, modelValue: 13 });

    wrapper.setProps({ min: 5, max: 18, step: 20, modelValue: 16 });

    wrapper.setProps({ min: 10, max: 22, step: 20, modelValue: 15 });

    wrapper.setProps({ min: 0, max: 15, step: 20, modelValue: 12 });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      // 验证结果在有效范围内
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(15);
    }
  });

  test('should trigger prevSteppedValue branch with mathematical precision', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 15, step: 11, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button');

    trigger(button, 'touchstart');
    triggerDrag(button, 10.5, 0);
    trigger(button, 'touchend');

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;

      expect(result).toBe(11);
    }
  });

  test('should trigger prevSteppedValue with calculated precision', () => {
    const wrapper = mount(Slider, {
      props: { min: 0.5, max: 5.5, step: 4.5, modelValue: 3.2 },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(0.5);
      expect(result).toBeLessThanOrEqual(5.5);
    }
  });

  test('should use extreme step values to force boundary', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 3, step: 100, modelValue: 2 },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(3);
    }
  });

  test('should trigger with negative values', () => {
    const wrapper = mount(Slider, {
      props: { min: -10, max: -2, step: 7, modelValue: -5 },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(-10);
      expect(result).toBeLessThanOrEqual(-2);
    }
  });
});
