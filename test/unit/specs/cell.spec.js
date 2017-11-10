import CellGroup from 'packages/cell-group';
import Cell from 'packages/cell';
import { mount } from 'avoriaz';

describe('CellGroup', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a cell-group', () => {
    wrapper = mount(CellGroup, {
      propsData: {}
    });

    expect(wrapper.hasClass('van-cell-group')).to.be.true;
  });
});

describe('Cell', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create', () => {
    wrapper = mount(Cell);

    expect(wrapper.hasClass('van-cell')).to.be.true;
  });

  it('create a required cell', () => {
    wrapper = mount(Cell, {
      propsData: {
        required: true
      }
    });

    expect(wrapper.hasClass('van-cell')).to.be.true;
    expect(wrapper.hasClass('van-cell--required')).to.be.true;
  });

  it('emit a click event', () => {
    wrapper = mount(Cell);

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    wrapper.trigger('click');

    expect(eventStub.calledOnce).to.be.true;
    expect(eventStub.calledWith('click')).to.be.true;
  });

  it('cell with url', () => {
    wrapper = mount(Cell, {
      propsData: {
        url: '#test',
        replace: false
      }
    });

    wrapper.trigger('click');

    expect(window.location.hash).to.equal('#test');
    window.location.hash = '';

    const length = window.history.length;
    wrapper.vm.replace = true;
    wrapper.trigger('click');
    expect(window.location.hash).to.equal('#test');
    expect(window.history.length).to.equal(length);
    window.location.hash = '';
  });

  it('cell with to', done => {
    wrapper = mount(Cell, {
      propsData: {
        to: '/test',
        replace: false
      }
    });
    wrapper.vm.$router = {
      push(path) {
        wrapper.vm.replace = true;
        wrapper.trigger('click');
      },
      replace(path) {
        expect(path).to.equal('/test');
        done();
      }
    };

    wrapper.trigger('click');
  });
});
