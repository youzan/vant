import { Col } from '..';
import { Row } from '../../row';
import { mount } from '../../../test';
import { nextTick } from 'vue';

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

test('should render vertical space when gutter is an array and provide the second parameter', async () => {
  const wrapper = mount({
    render: () => (
      <Row gutter={[0, 20]}>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
    ),
  });

  const fields = wrapper.findAll('.van-col');
  await nextTick();
  expect(fields[0].style.marginBottom).toEqual('20px');
  expect(fields[1].style.marginBottom).toEqual('20px');
  expect(fields[2].style.marginBottom).toBeFalsy();
  expect(fields[3].style.marginBottom).toBeFalsy();
});

test('should not render vertical space when gutter is an array and provide the second parameter as negative number', async () => {
  const wrapper = mount({
    render: () => (
      <Row gutter={[16, -16]}>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
    ),
  });

  const fields = wrapper.findAll('.van-col');
  await nextTick();
  fields.forEach((field) => {
    expect(field.style.marginBottom).toBeFalsy();
  });
});

test('should not render space when gutter is an empty array', async () => {
  const wrapper = mount({
    render: () => (
      <Row gutter={[]}>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
    ),
  });

  const field = wrapper.findAll('.van-col')[0];
  await nextTick();
  expect(field.style.paddingRight).toBeFalsy();
  expect(field.style.marginBottom).toBeFalsy();
});

test('should not render vertical space when gutter is an array and provide the second parameter as invalid number', async () => {
  const wrapper = mount({
    render: () => (
      <Row gutter={[0, 'invalid']}>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
    ),
  });

  const field = wrapper.findAll('.van-col')[0];
  await nextTick();
  expect(field.style.marginBottom).toBeFalsy();
});
