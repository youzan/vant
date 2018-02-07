import { mount } from 'avoriaz';
import Circle from 'packages/circle';

describe('Circle', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a circle', () => {
    wrapper = mount(Circle, {
      propsData: {
        text: 'test'
      }
    });

    expect(wrapper.hasClass('van-circle')).to.be.true;
    expect(wrapper.find('.van-circle__text')[0].text()).to.equal('test');
  });

  it('circle rate', done => {
    let currentRate = 0;
    wrapper = mount(Circle, {
      propsData: {
        rate: 0,
        value: 0,
        clockwise: false
      }
    });
    wrapper.vm.$on('input', rate => {
      currentRate = rate;
    });
    wrapper.vm.rate = 50;

    setTimeout(() => {
      expect(currentRate).to.equal(50);
      done();
    }, 100);
  });

  it('circle animation', done => {
    let currentRate = 0;
    wrapper = mount(Circle, {
      propsData: {
        rate: 0,
        value: 0,
        speed: 500,
        clockwise: false
      }
    });
    wrapper.vm.$on('input', rate => {
      currentRate = rate;
    });
    wrapper.vm.rate = 50;

    setTimeout(() => {
      expect(currentRate === 50).to.be.false;
      setTimeout(() => {
        expect(currentRate === 50).to.be.true;
        done();
      }, 200);
    }, 50);
  });
});

