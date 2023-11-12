import { Col } from '..';
import { Row } from '../../row';
import { mount } from '../../../test';

test('should render Col correctly', () => {
  const wrapper = mount(Col, {
    props: {
      span: 8,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render gutter correctly', () => {
  const wrapper = mount({
    render: () => (
      <Row gutter="24">
        <Col span="24">24</Col>

        <Col span="12">12</Col>
        <Col span="12">12</Col>

        <Col span="8">8</Col>
        <Col span="8">8</Col>
        <Col span="8">8</Col>

        <Col span="6">6</Col>
        <Col span="6">6</Col>
        <Col span="6">6</Col>
        <Col span="6">6</Col>

        <Col span="7">7</Col>
        <Col span="6">6</Col>
        <Col span="5">5</Col>
        <Col span="4">4</Col>
        <Col span="3">3</Col>
        <Col span="2">2</Col>
      </Row>
    ),
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render vertical space when gutter is an array and provide the second parameter', () => {
  const wrapper = mount({
    render: () => (
      <Row gutter={[16, 16]}>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
    ),
  });

  expect(wrapper.find('.van-row').style.rowGap).toEqual('16px');
});

test('should not render vertical space when gutter is an array and provide the second parameter as negative number', () => {
  const wrapper = mount({
    render: () => (
      <Row gutter={[16, -16]}>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
    ),
  });

  expect(wrapper.find('.van-row').style.rowGap).toBeFalsy();
});

test('should not render space when gutter is an empty array', () => {
  const wrapper = mount({
    render: () => (
      <Row gutter={[]}>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
    ),
  });

  const colList = wrapper.findAll('.van-col');
  expect(colList[0].style.paddingRight).toBeFalsy();
  expect(colList[1].style.paddingLeft).toBeFalsy();
});
