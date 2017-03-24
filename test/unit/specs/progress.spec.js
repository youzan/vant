import Progress from 'packages/progress';
import { mount } from 'avoriaz';

describe('Progress', () => {
  let wrapper;
  let bar;
  let pivot;
  const initProgressBar = function(propsData) {
    wrapper = mount(Progress, {
      propsData: propsData
    });
    bar = wrapper.find('.zan-progress__bar__finished-portion')[0];
    pivot = wrapper.find('.zan-progress__bar__pivot')[0];
  };

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create active 3% progress bar', () => {
    initProgressBar({ percentage: 3 });

    expect(wrapper.hasClass('zan-progress')).to.be.true;
    expect(bar.is('span')).to.be.true;
    expect(bar.hasStyle('width', '3%'));

    expect(pivot.is('span')).to.be.true;
    expect(pivot.hasStyle('left', '0%'));
    expect(pivot.hasStyle('marginLeft', '0'));
    expect(pivot.text()).to.equal('3%');
  });

  it('create active 35% progress bar', () => {
    initProgressBar({ percentage: 35 });

    expect(wrapper.hasClass('zan-progress')).to.be.true;
    expect(bar.is('span')).to.be.true;
    expect(bar.hasStyle('width', '35%'));

    expect(pivot.is('span')).to.be.true;
    expect(pivot.hasStyle('left', '35%'));
    expect(pivot.hasStyle('marginLeft', '-14px'));
    expect(pivot.text()).to.equal('35%');
  });

  it('create active 98% progress bar', () => {
    initProgressBar({ percentage: 98 });

    expect(wrapper.hasClass('zan-progress')).to.be.true;
    expect(bar.is('span')).to.be.true;
    expect(bar.hasStyle('width', '98%'));

    expect(pivot.is('span')).to.be.true;
    expect(pivot.hasStyle('left', '100%'));
    expect(pivot.hasStyle('marginLeft', '-28px'));
    expect(pivot.text()).to.equal('98%');
  });

  it('create inactive 35% progress bar', () => {
    initProgressBar({ percentage: 35, inactive: true });

    expect(pivot.hasStyle('backgroundColor', '#cacaca'));
  });

  it('create progress bar with custom text', () => {
    initProgressBar({ percentage: 35, pivotText: 'pivotText' });

    expect(pivot.text()).to.equal('pivotText');
  });

  it('create progress bar with custom color', () => {
    initProgressBar({ percentage: 35, color: 'red' });

    expect(pivot.hasStyle('backgroundColor', 'red'));
  });

  it('create progress bar with text color', () => {
    initProgressBar({ percentage: 35, textColor: 'red' });

    expect(pivot.hasStyle('color', 'red'));
  });
});
