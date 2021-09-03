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
