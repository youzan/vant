import Quantity from 'packages/quantity';
import { mount } from 'avoriaz';

describe('Quantity', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a quantity', () => {
    wrapper = mount(Quantity);

    expect(wrapper.hasClass('zan-quantity')).to.be.true;
  });
});
