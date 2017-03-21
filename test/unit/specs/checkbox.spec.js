import Checkbox from 'packages/checkbox';
import { mount } from 'avoriaz';

describe('Checkbox', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create', () => {
    wrapper = mount(Checkbox, {
      propsData: {}
    });

    expect(wrapper.hasClass('zan-checkbox')).to.be.true;
  });
});
