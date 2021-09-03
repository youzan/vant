declare module '*.vue' {
  // eslint-disable-next-line
  import { DefineComponent } from 'vue';
  const Component: DefineComponent;
  export default Component;
}
