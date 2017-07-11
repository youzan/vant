import Steps from 'packages/steps';
import { mount } from 'avoriaz';
import StepsTestComponent from '../components/steps';

describe('Steps', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a steps', () => {
    wrapper = mount(Steps);

    expect(wrapper.hasClass('van-steps')).to.be.true;
    expect(wrapper.data().steps.length).to.equal(0);
  });

  it('create a steps with step', () => {
    wrapper = mount(StepsTestComponent);

    const finishStep = wrapper.find('.van-step')[0];
    expect(finishStep.hasClass('van-step--finish')).to.be.true;
    expect(finishStep.hasClass('van-step--horizontal')).to.be.true;

    const proccessStep = wrapper.find('.van-step')[1];
    expect(proccessStep.hasClass('van-step--process')).to.be.true;
  });

  it('create a vertical step', () => {
    wrapper = mount(Steps, {
      propsData: {
        direction: 'vertical'
      }
    });

    expect(wrapper.hasClass('van-steps')).to.be.true;
    expect(wrapper.hasClass('van-steps--vertical')).to.be.true;
    expect(wrapper.data().steps.length).to.equal(0);
  });
});
