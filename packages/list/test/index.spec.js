import List from '..';
import { mount } from '@vue/test-utils';

test('load event', done => {
  const wrapper = mount(List);

  wrapper.vm.$on('input', value => {
    wrapper.vm.loading = value;
  });

  setTimeout(() => {
    expect(wrapper.emitted('load')).toBeTruthy();
    expect(wrapper.emitted('input')).toBeTruthy();

    wrapper.vm.loading = false;

    setTimeout(() => {
      expect(wrapper.emitted('input')[1]).toBeTruthy();
      wrapper.vm.$destroy();
      done();
    });
  });
});

test('finished', done => {
  const wrapper = mount(List, {
    propsData: {
      finished: true
    }
  });

  setTimeout(() => {
    expect(wrapper.emitted('load')).toBeFalsy();
    expect(wrapper.emitted('input')).toBeFalsy();
    wrapper.vm.finished = false;

    setTimeout(() => {
      expect(wrapper.emitted('load')).toBeTruthy();
      expect(wrapper.emitted('input')).toBeTruthy();
      done();
    });
  });
});

test('immediate check false', done => {
  const wrapper = mount(List, {
    propsData: {
      immediateCheck: false
    }
  });

  setTimeout(() => {
    expect(wrapper.emitted('load')).toBeFalsy();
    expect(wrapper.emitted('input')).toBeFalsy();
    done();
  });
});

test('keey-alive live cycle', () => {
  const wrapper = mount({
    template: `
      <keep-alive>
        <list v-if="show" />
      </keep-alive>
    `,
    props: ['show'],
    components: { List }
  }, {
    propsData: {
      show: true
    }
  });

  expect(wrapper.vm.$el).toBeTruthy();
  wrapper.vm.show = false;
  expect(wrapper.vm.el).toBeFalsy();
});
