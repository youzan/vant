import Loading from 'packages/loading';
import { mount } from 'avoriaz';

describe('Loading', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create default', () => {
    wrapper = mount(Loading);

    expect(wrapper.hasClass('van-loading')).to.be.true;
  });

  it('create gradient-circle black', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'gradient-circle',
        color: 'black'
      }
    });
    const spinner = wrapper.find('.van-loading__spinner')[0];

    expect(spinner.hasClass('van-loading__spinner--gradient-circle')).to.be.true;
    expect(spinner.hasClass('van-loading__spinner--black')).to.be.true;
  });

  it('create gradient-circle white', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'gradient-circle',
        color: 'white'
      }
    });
    const spinner = wrapper.find('.van-loading__spinner')[0];

    expect(spinner.hasClass('van-loading__spinner--gradient-circle')).to.be.true;
    expect(spinner.hasClass('van-loading__spinner--white')).to.be.true;
  });

  it('create circle black', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'circle',
        color: 'black'
      }
    });
    const spinner = wrapper.find('.van-loading__spinner')[0];

    expect(spinner.hasClass('van-loading__spinner--circle')).to.be.true;
    expect(spinner.hasClass('van-loading__spinner--black')).to.be.true;
  });

  it('create circle white', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'circle',
        color: 'white'
      }
    });
    const spinner = wrapper.find('.van-loading__spinner')[0];

    expect(spinner.hasClass('van-loading__spinner--circle')).to.be.true;
    expect(spinner.hasClass('van-loading__spinner--white')).to.be.true;
  });
});
