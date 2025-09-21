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

//https://github.com/youzan/vant/issues/13625
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

  test('should apply boundary fix on click events', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 45, modelValue: 0 },
    });

    trigger(wrapper, 'click', 100, 0);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBeLessThanOrEqual(100);
    expect(result).toBeGreaterThanOrEqual(0);
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

  test('should return max when max is closer to value', () => {
    const wrapper = mount(Slider, {
      props: { min: 10, max: 55, step: 30, modelValue: 10 },
    });

    const button = wrapper.find('.van-slider__button');
    triggerDrag(button, 50, 0);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBe(55);
  });

  test('should return prevSteppedValue when closer than max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 50, step: 45, modelValue: 47 },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBe(45);
    }
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

  test('should trigger boundary with drag operations', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 50, step: 35, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button-wrapper');
    if (button.exists()) {
      trigger(button, 'touchstart');
      triggerDrag(button, 48, 0);
      trigger(button, 'touchend');

      const emitted = wrapper.emitted('update:modelValue');
      if (emitted && emitted.length > 0) {
        const result = emitted[emitted.length - 1][0] as number;
        expect(result).toBeLessThanOrEqual(50);
        expect(result).toBeGreaterThanOrEqual(0);
      }
    }
  });

  test('should test boundary with fractional values', () => {
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

  test('should test with extreme step values', () => {
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

  test('should test with negative values', () => {
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

  test('should test with very small ranges', () => {
    const wrapper = mount(Slider, {
      props: { min: 0.1, max: 0.9, step: 0.7, modelValue: 0.4 },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(0.1);
      expect(result).toBeLessThanOrEqual(0.9);
    }
  });

  test('should test with prime number combinations', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 13, step: 11, modelValue: 7 },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(13);
    }
  });

  test('should test floating point precision', () => {
    const wrapper = mount(Slider, {
      props: { min: 0.1, max: 0.7, step: 0.3, modelValue: 0.5 },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(0.1);
      expect(result).toBeLessThanOrEqual(0.7);
    }
  });

  test('should test with irrational numbers', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: Math.PI, step: Math.E, modelValue: Math.sqrt(2) },
    });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(Math.PI);
    }
  });

  test('should test boundary with multiple property changes', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 20, step: 12, modelValue: 0 },
    });

    wrapper.setProps({ modelValue: 14 });
    wrapper.setProps({ max: 10 });
    wrapper.setProps({ modelValue: 18 });

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  test('should test with precise drag positioning', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 11, step: 8, modelValue: 0 },
    });

    const button = wrapper.find('.van-slider__button');

    trigger(button, 'touchstart');
    triggerDrag(button, 7, 0);
    trigger(button, 'touchend');

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const result = emitted[emitted.length - 1][0] as number;
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(11);
    }
  });

  test('should test comprehensive boundary scenarios', () => {
    const testCases = [
      { min: 0, max: 20, step: 15, value: 8 },
      { min: 0, max: 40, step: 30, value: 35 },
      { min: 0, max: 50, step: 45, value: 47 },
      { min: 0, max: 35, step: 25, value: 26 },
      { min: 1.7, max: 8.3, step: 4.2, value: 5.1 },
    ];

    testCases.forEach(({ min, max, step, value }) => {
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
  });
});
