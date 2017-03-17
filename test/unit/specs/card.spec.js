import Card from 'packages/card';
import { mount } from 'avoriaz';

describe('Card', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create', () => {
    wrapper = mount(Card, {
      propsData: {
        thumb: 'thumb'
      }
    });

    expect(wrapper.hasClass('zan-card')).to.be.true;
  });
});
