import TabbarExample from '../components/tabbar';
import { mount } from 'avoriaz';

describe('Progress', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('Tabbar with four items', (done) => {
    wrapper = mount(TabbarExample);

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.van-tabbar-item').length).to.equal(4);

      wrapper.find('.van-tabbar-item')[3].element.click();
      expect(wrapper.vm.active).to.equal(3);
      expect(wrapper.vm.changeRecord).to.equal(3);
      done();
    });
  });
});
