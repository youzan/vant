import { mount } from '../../../test';
import { defineComponent, KeepAlive, nextTick } from 'vue';
import TextEllipsis, { type TextEllipsisInstance } from '..';

const originGetComputedStyle = window.getComputedStyle;

const lineHeight = 20;

const content =
  'Vant is a lightweight, customizable mobile component library that was open sourced in 2017. Currently Vant officially provides Vue 2 version, Vue 3 version and WeChat applet version, and the community team maintains React version and Alipay applet version.';

beforeAll(() => {
  window.getComputedStyle = (el) => {
    const style = originGetComputedStyle(el);
    style.lineHeight = `${lineHeight}px`;
    return style;
  };
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    get() {
      if (this.innerText.includes('...')) {
        const row = Math.ceil(
          (this.innerText.replace(/\.\.\./g, '中').length / content.length) * 4,
        );
        return lineHeight * row;
      }
      return lineHeight * 4;
    },
  });
});

afterAll(() => {
  window.getComputedStyle = originGetComputedStyle;
});

test('should render action slot correctly', async () => {
  const wrapper = mount(TextEllipsis, {
    attachTo: document.body,
    props: {
      content,
    },
    slots: {
      action: ({ expanded }) => (expanded ? 'Expand' : 'Collapse'),
    },
  });

  await nextTick();

  expect(wrapper.html()).toMatchSnapshot();

  (wrapper.vm as TextEllipsisInstance).toggle();
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();

  (wrapper.vm as TextEllipsisInstance).toggle();
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render content correctly', async () => {
  const wrapper = mount(TextEllipsis, {
    attachTo: document.body,
    props: {
      content,
    },
  });

  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('Expand and Collapse should be work', async () => {
  const wrapper = mount(TextEllipsis, {
    attachTo: document.body,
    props: {
      content,
      expandText: 'expand',
      collapseText: 'collapse',
    },
  });

  await nextTick();
  expect(wrapper.text()).toMatch('...');
  await wrapper.find('.van-text-ellipsis__action').trigger('click');
  expect(wrapper.text()).not.toMatch('...');
});

test('should emit click event after Expand/Collapse is clicked', async () => {
  const wrapper = mount(TextEllipsis, {
    attachTo: document.body,
    props: {
      content,
      expandText: 'expand',
      collapseText: 'collapse',
    },
  });

  await nextTick();
  await wrapper.find('.van-text-ellipsis__action').trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});

test('text not exceeded', async () => {
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    value: lineHeight,
  });

  const shortContent = 'Vant is a component library';
  const wrapper = mount(TextEllipsis, {
    attachTo: document.body,
    props: {
      content: shortContent,
      expandText: 'expand',
      collapseText: 'collapse',
    },
  });

  await nextTick();
  expect(wrapper.text()).not.toMatch('...');
});

// https://github.com/vant-ui/vant/issues/12445
test('should recalculate the ellipsis state when the component is activated', async () => {
  vi.useFakeTimers();

  const Comp = defineComponent({
    data() {
      return {
        show: false,
      };
    },
    beforeMount() {
      setTimeout(() => {
        this.show = true;
      }, 1000);
    },
    render() {
      return this.show ? <TextEllipsis content={content} /> : null;
    },
  });

  const wrapper = mount(
    {
      data() {
        return {
          render: true,
        };
      },
      render() {
        return <KeepAlive>{this.render ? <Comp /> : null}</KeepAlive>;
      },
    },
    { attachTo: document.body },
  );

  wrapper.setData({ render: false });
  await vi.advanceTimersByTimeAsync(1000);
  await wrapper.setData({ render: true });
  expect(wrapper.text()).toMatch(content);

  vi.useRealTimers();
});
