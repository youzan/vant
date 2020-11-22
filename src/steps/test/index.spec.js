import { mount } from '@vue/test-utils';
import Step from '../../step';
import Steps from '..';

test('should render icon slot correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Steps active={0}>
          <Step v-slots={{ 'active-icon': () => `Custim Active Icon` }}>B</Step>
          <Step v-slots={{ 'inactive-icon': () => `Custim Inactive Icon` }}>
            A
          </Step>
        </Steps>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit click-step event when step is clicked', () => {
  const onClickStep = jest.fn();
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
  expect(wrapper.html()).toMatchSnapshot();
});
