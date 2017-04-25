import { hasClass, addClass, removeClass } from 'src/utils/dom';

describe('Utils Dom', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = document.createElement('div');
    wrapper.classList.add('test-class');
    document.body.appendChild(wrapper);
  });

  afterEach(() => {
    document.body.removeChild(wrapper);
  });

  it('hasClass', () => {
    expect(hasClass(wrapper, 'test-class')).to.be.true;
    expect(hasClass()).to.be.false;
  });

  it('addClass and removeClass', () => {
    expect(hasClass(wrapper, 'test-class')).to.be.true;

    addClass(wrapper, ' other-class');
    expect(hasClass(wrapper, 'other-class')).to.be.true;
    expect(addClass()).to.equal(undefined);

    removeClass(wrapper, ' other-class');
    expect(hasClass(wrapper, 'other-class')).to.be.false;
    expect(removeClass()).to.equal(undefined);
  });
});
