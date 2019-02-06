import { use } from '../utils';

const [sfc, bem] = use('goods-action');

export default sfc({
  functional: true,

  render(h, context) {
    return (
      <div class={bem()} {...context.data}>
        {context.children}
      </div>
    );
  }
});
