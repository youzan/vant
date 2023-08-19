import { mount } from '../../../test';
import { Step } from '../../step';
import { Steps } from '..';

test('should render icon slot correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Steps active={0}>
          <Step v-slots={{ 'active-icon': () => `Custom Active Icon` }}>B</Step>
          <Step v-slots={{ 'inactive-icon': () => `Custom Inactive Icon` }}>
            A
          </Step>
        </Steps>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit clickStep event when step is clicked', () => {
  const onClickStep = vi.fn();
  const wrapper = mount({
    setup() {
      return () => (
        <Steps active={1} onClickStep={onClickStep}>
          <Step>A</Step>
          <Step>B</Step>
          <Step>C</Step>
        </Steps>
      );
    },
  });

  wrapper.find('.van-step').trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(0);

  wrapper.find('.van-step__title').trigger('click');
  expect(onClickStep).toHaveBeenCalledWith(0);

  wrapper.findAll('.van-step__circle-container')[2].trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(2);
  expect(onClickStep).toHaveBeenLastCalledWith(2);
});

test('should change inactive color when using inactive-color prop', () => {
  const wrapper = mount({
    render() {
      return (
        <Steps active={0} inactiveColor="red">
          <Step>A</Step>
          <Step>B</Step>
        </Steps>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should change inactive icon when using inactive-icon prop', () => {
  const wrapper = mount({
    render() {
      return (
        <Steps active={0} inactiveIcon="foo">
          <Step>A</Step>
          <Step>B</Step>
        </Steps>
      );
    },
  });

  const steps = wrapper.findAll('.van-step');
  expect(steps[1].find('.van-icon-foo').exists()).toBeTruthy();
  expect(steps[1].html()).toMatchSnapshot();
});

test('should change finish icon when using finish-icon prop', () => {
  const wrapper = mount({
    render() {
      return (
        <Steps active={1} finishIcon="foo">
          <Step>A</Step>
          <Step>B</Step>
        </Steps>
      );
    },
  });

  const firstStep = wrapper.find('.van-step');
  expect(firstStep.find('.van-icon-foo').exists()).toBeTruthy();
  expect(firstStep.html()).toMatchSnapshot();
});

test('should render finish icon slot correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Steps active={1}>
          <Step v-slots={{ 'finish-icon': () => `Custom Finish Icon` }}>A</Step>
          <Step>B</Step>
        </Steps>
      );
    },
  });

  const firstStep = wrapper.find('.van-step');
  expect(firstStep.html()).toMatchSnapshot();
});

test('should render icon-prefix correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Steps active={1} iconPrefix="custom-icon">
          <Step>A</Step>
          <Step>B</Step>
        </Steps>
      );
    },
  });

  const steps = wrapper.findAll('.van-step');
  expect(steps[1].html()).toMatchSnapshot();
});
