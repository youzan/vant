import 'vue';

// TODO
// should be removed after Vue supported component events typing
// see: https://github.com/vuejs/vue-next/issues/1553
//      https://github.com/vuejs/vue-next/issues/3029
declare module 'vue' {
  interface ComponentCustomProps {
    onClick?: (event: MouseEvent) => void;
  }
}
