import { use } from '../utils';

const [sfc, bem] = use('goods-action');

export default sfc(
  {
    render(h, context) {
      return (
        <div class={bem()} {...context.data}>
          {context.children}
        </div>
      );
    }
  },
  true
);
