import { Circle } from '..';
import { mount, later } from '../../../test';

// TODO
// test('should update to final rate immediately if speed is 0', async () => {
//   const wrapper = mount(Circle, {
//     props: {
//       rate: 50,
//       currentRate: 0,
//     },
//   });

//   await later();
//   expect(wrapper.emitted('update:currentRate')).toBeTruthy();
// });

test('should emit "update:currentRate" event during animation', async () => {
  const wrapper = mount(Circle, {
    props: {
      rate: 50,
      speed: 100,
    },
  });

  expect(wrapper.emitted('update:currentRate')).toBeFalsy();
  await later(50);
  expect(wrapper.emitted('update:currentRate')).toBeTruthy();
});

test('should change circle size when using size prop', () => {
  const wrapper = mount(Circle, {
    props: {
      size: 100,
    },
  });

  expect(wrapper.style.width).toEqual('100px');
  expect(wrapper.style.height).toEqual('100px');
});

test('should change stroke linecap when using stroke-linecap prop', () => {
  const wrapper = mount(Circle, {
    props: {
      strokeLinecap: 'square',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
