import ActionSheet from 'packages/actionsheet';
import { mount } from 'avoriaz';

describe('ActionSheet', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create', () => {
    wrapper = mount(ActionSheet, {
      propsData: {}
    });

    expect(wrapper.hasClass('zan-actionsheet')).to.be.true;
  });
});
