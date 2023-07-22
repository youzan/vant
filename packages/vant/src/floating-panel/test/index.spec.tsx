import { later, mount, triggerDrag } from '../../../test';
import FloatingPanel from '..';

test('should minHeight 100 and maxHeight 0.6 innerHeight when anchors props do not', async () => {
  const wrapper = mount({
    render() {
      return <FloatingPanel>Content</FloatingPanel>;
    },
  });

  expect(wrapper.html()).toMatchSnapshot();

  expect((wrapper.element as HTMLDivElement).style.height).toBe(
    `${Math.round(window.innerHeight * 0.6)}px`,
  );

  expect((wrapper.element as HTMLDivElement).style.transform).toContain(
    '-100px',
  );
});

test('should drag adsorption effect when anchors props is [100, 200, 400]', async () => {
  const wrapper = mount({
    render() {
      return <FloatingPanel anchors={[100, 200, 400]}>内容</FloatingPanel>;
    },
  });

  expect(wrapper.html()).toMatchSnapshot();

  expect((wrapper.element as HTMLDivElement).style.height).toBe('400px');

  // drag 10
  await triggerDrag(wrapper.find('.van-floating-panel__header'), 0, 10);
  await later();
  expect((wrapper.element as HTMLDivElement).style.transform).toContain(
    '-100px',
  );

  expect((wrapper.element as HTMLDivElement).style.transform).toContain(
    '-100px',
  );

  // drag -49
  await triggerDrag(wrapper.find('.van-floating-panel__header'), 0, -49);
  await later();
  expect((wrapper.element as HTMLDivElement).style.transform).toContain(
    '-100px',
  );

  await triggerDrag(wrapper.find('.van-floating-panel__header'), 0, -199);
  await later();
  expect((wrapper.element as HTMLDivElement).style.transform).toContain(
    '-200px',
  );

  // drag -300
  await triggerDrag(wrapper.find('.van-floating-panel__header'), 0, -200);
  await later();
  expect((wrapper.element as HTMLDivElement).style.transform).toContain(
    '-400px',
  );

  // drag -500
  await triggerDrag(wrapper.find('.van-floating-panel__header'), 0, -500);
  await later();
  expect((wrapper.element as HTMLDivElement).style.transform).toContain(
    '-400px',
  );
});

test('should emit height-change when height change in anchors', async () => {
  const wrapper = mount({
    render() {
      return (
        <FloatingPanel
          anchors={[100, 200, 400]}
          onHeightChange={(h) => this.$emit('change', h)}
        >
          Content
        </FloatingPanel>
      );
    },
  });

  await triggerDrag(wrapper.find('.van-floating-panel__header'), 0, -199);
  await later();

  expect((wrapper.element as HTMLDivElement).style.transform).toContain(
    '-200px',
  );

  expect(wrapper.emitted('change')?.[0][0]).toEqual({ height: 200 });
});

test('should only drag header when allowDraggingContent is false', async () => {
  const wrapper = mount({
    render() {
      return (
        <FloatingPanel
          anchors={[100, 200, 400]}
          onHeightChange={(h) => this.$emit('change', h)}
          contentDraggable={false}
        >
          Content
        </FloatingPanel>
      );
    },
  });

  await triggerDrag(wrapper.find('.van-floating-panel__content'), 0, -199);
  await later();
  expect(wrapper.emitted('change')).toBeFalsy();

  await triggerDrag(wrapper.find('.van-floating-panel__header'), 0, -199);
  await later();
  expect(wrapper.emitted('change')).toBeTruthy();
});
