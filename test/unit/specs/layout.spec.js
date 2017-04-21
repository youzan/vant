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

    expect(wrapper.hasClass('zan-row')).to.be.true;
    expect(wrapper.computed().style).to.be.empty;
  });

  it('create a simple column', () => {
    wrapper = mount(Col, {
      span: 8,
      offset: 8
    });

    expect(wrapper.hasClass('zan-col')).to.be.true;
    expect(wrapper.hasClass('zan-col-8')).to.be.true;
    expect(wrapper.hasClass('zan-col-offset-8')).to.be.true;
    expect(wrapper.computed().style).to.be.empty;
    expect(wrapper.computed().gutter).to.equal(0);
  });

  it('create a gutter row', () => {
    wrapper = mount(RowTestComponent);
    const column = wrapper.find(Col)[0];

    expect(wrapper.hasStyle('margin-left', '-5px')).to.be.true;
    expect(wrapper.hasStyle('margin-right', '-5px')).to.be.true;
    expect(wrapper.computed().style).to.eql({ marginLeft: '-5px', marginRight: '-5px' });
    expect(column.hasStyle('padding-left', '5px')).to.be.true;
    expect(column.hasStyle('padding-right', '5px')).to.be.true;
    expect(wrapper.computed().gutter).to.equal(10);
    expect(wrapper.computed().style).to.eql({ paddingLeft: '5px', paddingRight: '5px' });
  });
});
