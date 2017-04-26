import Toast from 'packages/toast';

describe('Toast', () => {
  afterEach(() => {
    const el = document.querySelector('.van-toast-wrapper');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    Toast.clear();
  });

  it('create a empty toast', () => {
    const toast = Toast();
    
    expect(document.querySelector('.van-toast-wrapper')).to.exist;
  });

  it('create a toast', (done) => {
    const toast = Toast('toast');

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('text');
    setTimeout(() => {
      expect(typeof toast.timer).to.equal('number');
      done();
    }, 500);
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
    }, 500);
  });
});
