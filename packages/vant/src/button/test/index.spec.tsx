import { mount } from '../../../test';
import { Button, ButtonGroup } from '..';

test('should emit click event', () => {
  const wrapper = mount(Button);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});

test('should not emit click event when disabled', () => {
  const wrapper = mount(Button, {
    props: {
      disabled: true,
    },
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});

test('should not emit click event when loading', () => {
  const wrapper = mount(Button, {
    props: {
      loading: true,
    },
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});

test('should hide border when color is gradient', () => {
  const wrapper = mount(Button, {
    props: {
      color: 'linear-gradient(#000, #fff)',
    },
  });

  expect(wrapper.style.border).toEqual('0px');
});

test('should change icon class prefix when using icon-prefix prop', () => {
  const wrapper = mount(Button, {
    props: {
      icon: 'success',
      iconPrefix: 'my-icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render loading slot correctly', () => {
  const wrapper = mount(Button, {
    props: {
      loading: true,
    },
    slots: {
      loading: () => 'Custom Loading',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render loading of a specific size when using loading-size prop', () => {
  const wrapper = mount(Button, {
    props: {
      loading: true,
      loadingSize: '10px',
    },
  });

  const loading = wrapper.find('.van-loading__spinner');
  expect(loading.style.width).toEqual('10px');
  expect(loading.style.height).toEqual('10px');
});

test('should render icon in the right side when setting icon-position to right', () => {
  const wrapper = mount(Button, {
    props: {
      icon: 'plus',
      iconPosition: 'right',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon slot correctly', () => {
  const wrapper = mount(Button, {
    slots: {
      default: () => 'Text',
      icon: () => 'Custom Icon',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render button group correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <ButtonGroup>
          <Button type="primary">Button 1</Button>
          <Button type="primary">Button 2</Button>
          <Button type="primary">Button 3</Button>
        </ButtonGroup>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render button group with different types', () => {
  const wrapper = mount({
    render() {
      return (
        <ButtonGroup>
          <Button type="primary">Primary</Button>
          <Button type="success">Success</Button>
          <Button type="danger">Danger</Button>
        </ButtonGroup>
      );
    },
  });
  expect(wrapper.find('.van-button-group').exists()).toBe(true);
  expect(wrapper.findAll('.van-button').length).toBe(3);
});

test('should apply correct class to button group', () => {
  const wrapper = mount(ButtonGroup);
  expect(wrapper.classes()).toContain('van-button-group');
});

test('should inherit type from button group', () => {
  const wrapper = mount({
    render() {
      return (
        <ButtonGroup type="primary">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      );
    },
  });
  const buttons = wrapper.findAll('.van-button');
  expect(buttons[0].classes()).toContain('van-button--primary');
  expect(buttons[1].classes()).toContain('van-button--primary');
});

test('should inherit size from button group', () => {
  const wrapper = mount({
    render() {
      return (
        <ButtonGroup size="small">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      );
    },
  });
  const buttons = wrapper.findAll('.van-button');
  expect(buttons[0].classes()).toContain('van-button--small');
  expect(buttons[1].classes()).toContain('van-button--small');
});

test('should inherit round from button group', () => {
  const wrapper = mount({
    render() {
      return (
        <ButtonGroup round>
          <Button type="primary">Button 1</Button>
          <Button type="primary">Button 2</Button>
        </ButtonGroup>
      );
    },
  });
  const buttons = wrapper.findAll('.van-button');
  expect(buttons[0].classes()).toContain('van-button--round');
  expect(buttons[1].classes()).toContain('van-button--round');
});

test('button props should override group props', () => {
  const wrapper = mount({
    render() {
      return (
        <ButtonGroup type="primary" size="small">
          <Button type="danger" size="mini">
            Button 1
          </Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      );
    },
  });
  const buttons = wrapper.findAll('.van-button');
  // First button overrides group props
  expect(buttons[0].classes()).toContain('van-button--danger');
  expect(buttons[0].classes()).toContain('van-button--mini');
  // Second button inherits from group
  expect(buttons[1].classes()).toContain('van-button--primary');
  expect(buttons[1].classes()).toContain('van-button--small');
});
