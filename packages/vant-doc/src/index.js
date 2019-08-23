import Vue from 'vue';
import VanDoc from './VanDoc';
import Nav from './component/Nav';
import Block from './component/Block';
import Header from './component/Header';
import Content from './component/Content';
import Container from './component/Container';
import Simulator from './component/Simulator';
import DemoBlock from './component/DemoBlock';
import DemoSection from './component/DemoSection';

const components = [
  Nav,
  Header,
  VanDoc,
  Block,
  Content,
  Container,
  Simulator,
  DemoBlock,
  DemoSection
];

export default function install() {
  components.forEach(Component => {
    Vue.component(Component.name, Component);
  });
}

export {
  Nav,
  Header,
  VanDoc,
  Block,
  Content,
  Container,
  Simulator,
  DemoBlock,
  DemoSection
};
