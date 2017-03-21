import CellGroup from 'packages/cell-group';
import { mount } from 'avoriaz';

describe('CellGroup', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create', () => {
    wrapper = mount(CellGroup, {
      propsData: {}
    });

    expect(wrapper.hasClass('zan-cell-group')).to.be.true;
  });
});
