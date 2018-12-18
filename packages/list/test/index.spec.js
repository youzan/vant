import List from '..';
import { mount, later } from '../../../test/utils';

function mockOffsetParent(el) {
  Object.defineProperty(el, 'offsetParent', {
    get() {
      return {};
    }
  });
}

test('load event', async () => {
  const wrapper = mount(List);

  wrapper.vm.$on('input', value => {
    wrapper.vm.loading = value;
  });

  mockOffsetParent(wrapper.vm.$el);

  await later();
  expect(wrapper.emitted('load')).toBeTruthy();
  expect(wrapper.emitted('input')).toBeTruthy();

  wrapper.vm.loading = false;

  await later();
  expect(wrapper.emitted('input')[1]).toBeTruthy();
  wrapper.destroy();
});

test('finished', async () => {
  const wrapper = mount(List, {
    propsData: {
      finished: true
    }
  });

  mockOffsetParent(wrapper.vm.$el);

  await later();
  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('input')).toBeFalsy();
  wrapper.vm.finished = false;

  await later();
  expect(wrapper.emitted('load')).toBeTruthy();
  expect(wrapper.emitted('input')).toBeTruthy();
});

test('immediate check false', async () => {
  const wrapper = mount(List, {
    propsData: {
      immediateCheck: false
    }
  });

  await later();
  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('keey-alive live cycle', () => {
  const wrapper = mount(
    {
      template: `
      <keep-alive>
        <list v-if="show" />
      </keep-alive>
    `,
      props: ['show'],
      components: { List }
    },
    {
      propsData: {
        show: true
      }
    }
  );

  expect(wrapper.vm.$el).toBeTruthy();
  wrapper.vm.show = false;
  expect(wrapper.vm.el).toBeFalsy();
});
