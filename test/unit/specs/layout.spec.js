import { mount } from 'avoriaz';
import Col from 'packages/col';
import Row from 'packages/row';
import RowTestComponent from '../components/row';

describe('Layout', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a simple row', () => {
    wrapper = mount(Row);

    expect(wrapper.hasClass('van-row')).to.be.true;
    expect(wrapper.computed().style()).to.be.empty;
  });

  it('create a simple column', () => {
    wrapper = mount(Col, {
      propsData: {
        span: 8,
        offset: 8
      }
    });
    expect(wrapper.hasClass('van-col')).to.be.true;
    expect(wrapper.hasClass('van-col-8')).to.be.true;
    expect(wrapper.hasClass('van-col-offset-8')).to.be.true;
    expect(wrapper.computed().gutter()).to.equal(0);
  });

  it('create a gutter row', () => {
    wrapper = mount(RowTestComponent);
    const row = wrapper.find(Row)[0];
    const column = wrapper.find(Col)[0];
    expect(row.hasStyle('margin-left', '-5px')).to.be.true;
    expect(row.hasStyle('margin-right', '-5px')).to.be.true;
    expect(column.hasStyle('padding-left', '5px')).to.be.true;
    expect(column.hasStyle('padding-right', '5px')).to.be.true;
  });
});
