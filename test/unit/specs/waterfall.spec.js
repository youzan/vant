import Waterfall from '../components/waterfall';
import { mount } from 'avoriaz';

describe('Waterfall', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create', (done) => {
    const waterfallLowerSpy = sinon.spy();
    wrapper = mount(Waterfall, {
      attachToDocument: true,
      propsData: {
        disabled: false,
        list: [],
        onWaterfallLower: waterfallLowerSpy
      }
    });

    setTimeout(() => {
      expect(waterfallLowerSpy.called).to.be.true;
      done();
    }, 500);
  });

  it('test waterfall lower function', (done) => {
    const waterfallLowerSpy = sinon.spy(function() {
      wrapper.vm.list = wrapper.vm.list.concat([{ id: 1 }, { id: 2 }, { id: 3 }]);
      wrapper.vm.disabled = true;
    });
    wrapper = mount(Waterfall, {
      attachToDocument: true,
      propsData: {
        disabled: false,
        list: [{ id: 10 }],
        onWaterfallLower: waterfallLowerSpy
      }
    });

    setTimeout(() => {
      const item = wrapper.find('.waterfall-item');
      expect(waterfallLowerSpy.calledOnce).to.be.true;
      expect(item.length).to.equal(4);
      expect(item[item.length - 1].text()).to.equal('3');
      done();
    }, 500);
  });

  it('test waterfall upper function', (done) => {
    const waterfallUpperSpy = sinon.spy(function() {
      wrapper.vm.list.unshift({ id: 1 }, { id: 2 }, { id: 3 });
      wrapper.vm.disabled = true;
    });
    wrapper = mount(Waterfall, {
      attachToDocument: true,
      propsData: {
        disabled: false,
        list: [{ id: 10 }],
        onWaterfallUpper: waterfallUpperSpy
      }
    });

    setTimeout(() => {
      const item = wrapper.find('.waterfall-item');
      expect(waterfallUpperSpy.calledOnce).to.be.true;
      expect(item.length).to.equal(4);
      expect(item[0].text()).to.equal('1');
      done();
    }, 500);
  });
});
