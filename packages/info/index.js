import { use, isDef } from '../utils';

const [sfc, bem] = use('info');

export default sfc({
  functional: true,

  props: {
    info: [String, Number]
  },

  render(h, { props, data }) {
    return (
      isDef(props.info) && (
        <div class={bem()} {...data}>
          {props.info}
        </div>
      )
    );
  }
});
