import Toast from 'packages/toast';

describe('Toast', () => {
  afterEach(() => {
    Toast.clear(true);
  });

  it('create a empty toast', () => {
    Toast();
    expect(document.querySelector('.van-toast-wrapper')).to.exist;
  });

  it('create a toast', () => {
    const toast = Toast('toast');

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('text');
    expect(toast.displayStyle).to.equal('text');
    expect(typeof toast.timer).to.equal('number');
  });

  it('create a loading toast', () => {
    const toast = Toast.loading();

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    expect(toast.type).to.equal('loading');
  });

  it('create a options loading toast', () => {
    const toast = Toast.loading({
      message: 'toast'
    });

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('loading');
  });

  it('create a success toast', () => {
    const toast = Toast.success('success');

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    expect(toast.displayStyle).to.equal('default');
    expect(toast.type).to.equal('success');
  });

  it('create a options success toast', () => {
    const toast = Toast.success({
      message: 'toast'
    });

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('success');
  });

  it('create a fail toast', () => {
    const toast = Toast.fail('fail');

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    expect(toast.displayStyle).to.equal('default');
    expect(toast.type).to.equal('fail');
  });

  it('create a options fail toast', () => {
    const toast = Toast.fail({
      message: 'toast'
    });

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('fail');
  });

  it('create a forbidClick toast', (done) => {
    Toast({
      message: 'test',
      forbidClick: true
    });

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    setTimeout(() => {
      expect(document.querySelector('.van-toast__overlay')).to.exist;
      done();
    }, 50);
  });

  it('toast disappeared after duration', (done) => {
    const toast = Toast({
      message: 'toast',
      duration: 10
    });

    setTimeout(() => {
      expect(toast.$el.style.display === 'none').to.be.true;
      Toast.clear();
      done();
    }, 500);
  });

  it('toast duration 0', () => {
    Toast.allowMultiple();
    const toast = Toast({
      message: 'toast',
      duration: 0
    });
    expect(toast.timer).to.equal(undefined);
    Toast.allowMultiple(false);
  });

  it('multiple toast', () => {
    Toast.allowMultiple();
    Toast.clear(true);
    const toast1 = Toast.success('1');
    const toast2 = Toast.success('2');
    Toast.clear();
    expect(toast1.visible).to.be.false;
    expect(toast2.visible).to.be.true;
    Toast.clear();
    Toast.clear();
    expect(toast2.visible).to.be.false;
    Toast.allowMultiple(false);
  });

  it('set default options', () => {
    Toast.setDefaultOptions({ duration: 1000 });
    const toast1 = Toast(1);
    expect(toast1.duration).to.equal(1000);

    Toast.resetDefaultOptions();
    const toast2 = Toast(1);
    expect(toast2.duration).to.equal(3000);
  });
});
