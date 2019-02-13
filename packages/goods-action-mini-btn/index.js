import { use } from '../utils';
import Icon from '../icon';
import { emit, inherit, unifySlots } from '../utils/functional';
import { functionalRoute, routeProps } from '../mixins/router';

const [sfc, bem] = use('goods-action-mini-btn');

export default sfc({
  functional: true,

  props: {
    ...routeProps,
    text: String,
    icon: String,
    info: [String, Number],
    iconClass: String
  },

  render(h, context) {
    const { props } = context;
    const slots = unifySlots(context);

    const onClick = event => {
      emit(context, 'click', event);
      functionalRoute(context);
    };

    return (
      <div
        class={[bem(), 'van-hairline']}
        onClick={onClick}
        {...inherit(context)}
      >
        <Icon
          class={[bem('icon'), props.iconClass]}
          info={props.info}
          name={props.icon}
        />
        {slots.default ? slots.default() : props.text}
      </div>
    );
  }
});
