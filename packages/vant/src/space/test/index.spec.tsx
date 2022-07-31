import { mount } from '../../../test';
import { Space } from '..';
import { Button } from '../../button';

test('should render space', async () => {
  const wrapper = mount({
    render() {
      return (
        <Space>
          <Button>按钮</Button>
          <Button>按钮</Button>
          <Button>按钮</Button>
        </Space>
      );
    },
  });
  const items = wrapper.findAll('.van-space-item');
  expect(items[0].style.marginRight).toBe('8px');
  expect(items[1].style.marginRight).toBe('8px');
  expect(items[2].style.marginRight).toBe('');
});

test('should render vertical', async () => {
  const wrapper = mount({
    render() {
      return (
        <Space direction="vertical" fill>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
        </Space>
      );
    },
  });
  const space = wrapper.find('.van-space');
  const items = wrapper.findAll('.van-space-item');
  expect(space.classes()).toContain('van-space--vertical');
  expect(items[0].style.marginBottom).toBe('8px');
  expect(items[1].style.marginBottom).toBe('8px');
  expect(items[2].style.marginBottom).toBe('');
});

test('should render size 20px', async () => {
  const wrapper = mount({
    render() {
      return (
        <Space size="20px">
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
        </Space>
      );
    },
  });
  const items = wrapper.findAll('.van-space-item');
  expect(items[0].style.marginRight).toBe('20px');
  expect(items[1].style.marginRight).toBe('20px');
  expect(items[2].style.marginRight).toBe('');
});

test('should render align start', async () => {
  const wrapper = mount({
    render() {
      return (
        <Space align="start">
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
        </Space>
      );
    },
  });
  const space = wrapper.find('.van-space');
  expect(space.classes()).toContain('van-space--align-start');
});

test('should render wrap', async () => {
  const wrapper = mount({
    render() {
      return (
        <Space wrap>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
          <Button type="primary" block>
            按钮
          </Button>
        </Space>
      );
    },
  });
  const space = wrapper.find('.van-space');
  expect(space.classes()).toContain('van-space--wrap');
});
