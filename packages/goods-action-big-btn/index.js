import { use } from '../utils';
import Button from '../button';
import { emit, inherit, unifySlots } from '../utils/functional';
import { functionalRoute, routeProps } from '../mixins/router';

const [sfc, bem] = use('goods-action-big-btn');

export default sfc({
  functional: true,

  props: {
    ...routeProps,
    text: String,
    primary: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  render(h, context) {
    const { props } = context;
    const slots = unifySlots(context);

    const onClick = event => {
      emit(context, 'click', event);
      functionalRoute(context);
    };

    return (
      <Button
        square
        class={bem()}
        size="large"
        loading={props.loading}
        disabled={props.disabled}
        type={props.primary ? 'danger' : 'warning'}
        onClick={onClick}
        {...inherit(context)}
      >
        {slots.default ? slots.default() : props.text}
      </Button>
    );
  }
});
