import Vue from 'vue';
import { mount } from 'avoriaz';
import Pagination from 'packages/pagination';

describe('Pagination', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a multi Pagination', done => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'multi',
        totalItems: 120,
        itemsPerPage: 10,
        showPageSize: 5,
        value: 2
      }
    });
    expect(wrapper.hasClass('van-pagination')).to.be.true;
    expect(wrapper.find('.van-pagination__item').length).to.equal(7);
    expect(
      wrapper.find('.van-pagination__item')[0].hasClass('van-pagination__prev')
    ).to.be.true;
    expect(wrapper.vm.value).to.equal(2);

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    wrapper.find('.van-pagination__next')[0].trigger('click');
    Vue.nextTick(() => {
      expect(eventStub.calledWith('input'));
      expect(eventStub.calledWith('change'));
      expect(wrapper.vm.value).to.equal(2);

      wrapper.vm.value = 12;
      wrapper.update();
      Vue.nextTick(() => {
        expect(
          wrapper
            .find('.van-pagination__next')[0]
            .hasClass('van-pagination--disabled')
        ).to.be.true;
        done();
      });
    });
  });

  it('create a multi forceEllipses Pagination', done => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'multi',
        totalItems: 120,
        itemsPerPage: 10,
        showPageSize: 5,
        forceEllipses: true,
        value: 1
      }
    });

    const ellipsesLink = wrapper.find('.van-pagination__page')[5];
    expect(ellipsesLink.text().trim()).to.equal('...');

    wrapper.vm.value = 7;
    wrapper.update();
    Vue.nextTick(() => {
      const ellipsesLink = wrapper.find('.van-pagination__page')[0];
      expect(ellipsesLink.text().trim()).to.equal('...');

      wrapper.vm.value = 12;
      Vue.nextTick(() => {
        const pages = wrapper.find('.van-pagination__page');
        const ellipsesLink = pages[pages.length - 1];
        expect(ellipsesLink.text().trim()).to.equal('12');
        done();
      });
    });
  });

  it('create a simple Pagination', () => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'simple',
        totalItems: 120,
        itemsPerPage: 10,
        value: 1
      }
    });
    expect(wrapper.hasClass('van-pagination')).to.be.true;
    expect(wrapper.find('.van-pagination__item').length).to.equal(2);
    expect(
      wrapper.find('.van-pagination__item')[0].hasClass('van-pagination__prev')
    ).to.be.true;
  });

  it('create a empty Pagination', done => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'multi',
        totalItems: 120,
        itemsPerPage: 10,
        showPageSize: 5,
        nextText: '下一页',
        previousText: '上一页',
        value: 2
      }
    });

    expect(wrapper.find('.van-pagination__prev')[0].text().trim()).to.equal('上一页');
    expect(wrapper.find('.van-pagination__next')[0].text().trim()).to.equal('下一页');

    wrapper.vm.value = { currentPage: 18 };
    wrapper.update();
    Vue.nextTick(() => {
      expect(wrapper.find('.van-pagination__page').length).to.equal(0);
      done();
    });
  });

  it('create a multi forceEllipses Pagination && max show page size', () => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'multi',
        totalItems: 120,
        itemsPerPage: 10,
        showPageSize: 12,
        forceEllipses: true,
        value: 1
      }
    });

    const ellipsesLink = wrapper.find('.van-pagination__page')[11];
    expect(ellipsesLink.text().trim()).to.equal('12');
  });
});
