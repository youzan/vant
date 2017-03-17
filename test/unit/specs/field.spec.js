import Field from 'packages/field';
import { mount } from 'avoriaz';

describe('Field', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create', () => {
    wrapper = mount(Field, {
      propsData: {}
    });

    expect(wrapper.hasClass('zan-field')).to.be.true;
  });
});
