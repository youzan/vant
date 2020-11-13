import List from '..';
import { mount, later, mockGetBoundingClientRect } from '../../../test';

test('load event', async () => {
  const wrapper = mount(List);

  wrapper.vm.$on('input', (value) => {
    wrapper.vm.loading = value;
  });

  await later();
  expect(wrapper.emitted('load')).toBeTruthy();
  expect(wrapper.emitted('input')).toBeTruthy();

  wrapper.vm.loading = false;

  await later();
  expect(wrapper.emitted('input')[1]).toBeTruthy();
  wrapper.destroy();
});

test('error loaded, click error-text and reload', async () => {
  const wrapper = mount(List, {
    props: {
      errorText: 'Request failed. Click to reload...',
      error: true,
    },
  });

  await later();

  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('input')).toBeFalsy();

  // simulate the behavior of clicking error-text
  wrapper.vm.$on('update:error', (val) => {
    wrapper.setProps({
      error: val,
    });
  });

  wrapper.find('.van-list__error-text').trigger('click');

  await later();

  expect(wrapper.vm.$props.error).toBeFalsy();
  expect(wrapper.emitted('load')).toBeTruthy();
  expect(wrapper.emitted('input')).toBeTruthy();

  wrapper.destroy();
});

test('finished', async () => {
  const wrapper = mount(List, {
    props: {
      finished: true,
      finishedText: 'Finished',
    },
  });

  await later();
  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('input')).toBeFalsy();
  expect(wrapper.contains('.van-list__finished-text')).toBeTruthy();
  wrapper.vm.finished = false;

  await later();
  expect(wrapper.emitted('load')).toBeTruthy();
  expect(wrapper.emitted('input')).toBeTruthy();
  expect(wrapper.contains('.van-list__finished-text')).toBeFalsy();
});

test('finished slot', async () => {
  const wrapper = mount(List, {
    props: {
      finished: true,
    },
    slots: {
      finished: () => 'Custom Finished',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('error slot', async () => {
  const wrapper = mount(List, {
    props: {
      error: true,
    },
    slots: {
      error: () => 'Custom Error',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('immediate check false', async () => {
  const wrapper = mount(List, {
    props: {
      immediateCheck: false,
    },
  });

  await later();
  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('check the case that scroller is not window', async () => {
  const restoreMock = mockGetBoundingClientRect({
    top: 0,
    bottom: 200,
  });

  const wrapper = mount({
    template: `
      <div style="overflow-y: scroll;">
        <list ref="list"/>
      </div>
    `,
    components: { List },
  });

  const listRef = wrapper.find({
    ref: 'list',
  });

  await later();
  expect(listRef.emitted('load')).toBeTruthy();
  expect(listRef.emitted('input')).toBeTruthy();

  restoreMock();
});

test('check the direction props', () => {
  const wrapper = mount(List, {
    slots: {
      default: '<div class="list-item">list item</div>',
    },
    props: {
      direction: 'up',
    },
  });

  let children = wrapper.findAll('.van-list > div');
  expect(children.at(0).is('.van-list__placeholder')).toBeTruthy();
  expect(children.at(1).is('.list-item')).toBeTruthy();

  // change the direction's value
  wrapper.setProps({
    direction: 'down',
  });

  children = wrapper.findAll('.van-list > div');
  expect(children.at(0).is('.list-item')).toBeTruthy();
  expect(children.at(1).is('.van-list__placeholder')).toBeTruthy();
});
