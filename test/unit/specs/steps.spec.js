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

    expect(wrapper.hasClass('zan-steps')).to.be.true;
    expect(wrapper.data().steps.length).to.equal(0);
  });

  it('create a steps with step', () => {
    wrapper = mount(StepsTestComponent);

    const finishStep = wrapper.find('.zan-step')[0];
    expect(finishStep.hasClass('zan-step--finish')).to.be.true;

    const proccessStep = wrapper.find('.zan-step')[1];
    expect(proccessStep.hasClass('zan-step--process')).to.be.true;
  });
});
