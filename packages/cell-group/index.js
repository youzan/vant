import { use } from '../utils';

const [sfc, bem] = use('cell-group');

export default sfc(
  {
    props: {
      border: {
        type: Boolean,
        default: true
      }
    },

    render(h, context) {
      return (
        <div
          class={[bem(), { 'van-hairline--top-bottom': context.props.border }]}
          {...context.data}
        >
          {context.children}
        </div>
      );
    }
  },
  true
);
