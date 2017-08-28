import NoticeBar from 'packages/notice-bar';
import { mount } from 'avoriaz';

describe('NoticeBar', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a notice-bar', () => {
    wrapper = mount(NoticeBar, {
      propsData: {},
      attachToDocument: true
    });

    expect(wrapper.hasClass('van-notice-bar')).to.be.true;
  });

  it('mode closeable', () => {
    wrapper = mount(NoticeBar, {
      propsData: {
        mode: 'closeable'
      },
      attachToDocument: true
    });

    const icon = wrapper.find('.van-icon-close');
    expect(icon.length).to.equal(1);

    icon[0].trigger('click');
    expect(wrapper.hasStyle('display', 'none'));
  });

  it('mode link', () => {
    wrapper = mount(NoticeBar, {
      propsData: {
        mode: 'link'
      },
      attachToDocument: true
    });

    expect(wrapper.find('.van-icon-arrow').length).to.equal(1);
  });

  it('notice-bar transitionend', (done) => {
    wrapper = mount(NoticeBar, {
      propsData: {
        text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
        speed: 10000,
        delay: 0
      },
      attachToDocument: true
    });

    const content = wrapper.find('.van-notice-bar__content')[0];

    setTimeout(() => {
      expect(content.hasStyle('transition-delay', '0s')).to.be.true;
      done();
    }, 1500);
  });
});
