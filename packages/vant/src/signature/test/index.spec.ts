import 'vitest-canvas-mock';
import { Signature } from '..';
import { mount, trigger } from '../../../test';

test('renders a canvas element when canvas is supported', async () => {
  const wrapper = mount(Signature);
  expect(wrapper.find('canvas').exists()).toBe(true);
});

it('should emit "start" event when touch starts', async () => {
  const wrapper = mount(Signature);
  const canvas = wrapper.find('canvas');

  await canvas.trigger('touchstart');

  expect(wrapper.emitted('start')).toBeTruthy();
});

test('should emit "signing" event when touch is moving', async () => {
  const wrapper = mount(Signature);
  const canvas = wrapper.find('canvas');

  await canvas.trigger('touchstart');
  await canvas.trigger('touchmove', {
    touches: [{ clientX: 10, clientY: 20 }],
  });

  expect(wrapper.emitted('signing')).toBeTruthy();
  expect(
    wrapper.emitted<TouchEvent[]>('signing')![0][0].touches[0],
  ).toMatchObject({
    clientX: 10,
    clientY: 20,
  });
});

test('should emit `end` event when touchend is triggered', async () => {
  const wrapper = mount(Signature);
  await wrapper.vm.$nextTick();

  const canvas = wrapper.find('canvas');
  await canvas.trigger('touchend');
  expect(wrapper.emitted('end')).toBeTruthy();
});

test('submit() should output a valid canvas', async () => {
  const wrapper = mount(Signature);

  await wrapper.vm.$nextTick();

  wrapper.vm.$emit('submit', { canvas: null, image: '' });

  const emitted = wrapper.emitted();
  expect(emitted.submit).toBeTruthy();
  const [data] = emitted.submit[0] as [
    { canvas: HTMLCanvasElement | null; image: string },
  ];

  expect(data.canvas).toBeNull();
  expect(data.image).toBe('');
});

test('should render tips correctly', async () => {
  const createElement = document.createElement.bind(document);

  const spy = vi.spyOn(document, 'createElement');
  spy.mockImplementation((tagName, options) => {
    if (tagName === 'canvas') {
      return {} as HTMLCanvasElement;
    }
    return createElement(tagName, options);
  });

  const wrapper = mount(Signature, {
    props: {
      tips: 'Canvas is not supported',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  spy.mockRestore();
});

test('should allow to custom button text', async () => {
  const wrapper = mount(Signature, {
    props: {
      confirmButtonText: 'Foo',
      clearButtonText: 'Bar',
    },
  });

  expect(wrapper.find('.van-signature__footer').html()).toMatchSnapshot();
});

test('expose resize method', async () => {
  const wrapper = mount(Signature);
  expect(wrapper.vm.resize).toBeTypeOf('function');
  expect(wrapper.vm.resize()).toBeUndefined();
});

test('should call resize when window width changes', async () => {
  const wrapper = mount(Signature);
  const canvas = wrapper.find('canvas');
  const ctx = canvas.element.getContext('2d')!;
  const spy = vi.spyOn(ctx, 'getImageData');

  Object.defineProperty(window, 'innerWidth', { value: 400 });
  await trigger(window, 'resize');
  expect(spy).toBeCalled();
});
