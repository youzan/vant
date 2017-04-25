import Toast from 'packages/toast';

describe('Toast', () => {
  afterEach(() => {
    const el = document.querySelector('.van-toast-wrapper');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    Toast.clear();
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });

  it('create a toast', () => {
    Toast('我是提示文案，建议不超过十五字~');

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
  });

  it('create a loading toast', () => {
    Toast.loading();

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
  });

  it('create a success toast', () => {
    Toast.success('success');

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
  });

  it('create a fali toast', () => {
    Toast.fail('fail');

    expect(document.querySelector('.van-toast-wrapper')).to.exist;
  });
});
