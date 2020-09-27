import { computed } from 'vue';
import { createNamespace } from '../utils';
import { BORDER } from '../utils/constant';
import { STEPS_KEY } from '../steps';
import { useParent } from '@vant/use';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('step');

export default createComponent({
  setup(props, { slots }) {
    const { parent, index } = useParent(STEPS_KEY);

    const getStatus = () => {
      const active = +parent.props.active;
      if (index.value < active) {
        return 'finish';
      }
      if (index.value === active) {
        return 'process';
      }
    };

    const isActive = () => getStatus() === 'process';

    const lineStyle = computed(() => {
      const { activeColor, inactiveColor } = parent.props;

      if (getStatus() === 'finish') {
        return { background: activeColor };
      }

      return { background: inactiveColor };
    });

    const titleStyle = computed(() => {
      const { activeColor, inactiveColor } = parent.props;

      if (isActive()) {
        return { color: activeColor };
      }

      if (!getStatus()) {
        return { color: inactiveColor };
      }
    });

    const onClickStep = () => {
      parent.emit('click-step', index.value);
    };

    const renderCircle = () => {
      const { activeIcon, activeColor, inactiveIcon } = parent.props;

      if (isActive()) {
        if (slots['active-icon']) {
          return slots['active-icon']();
        }

        return (
          <Icon
            class={bem('icon', 'active')}
            name={activeIcon}
            color={activeColor}
          />
        );
      }

      if (slots['inactive-icon']) {
        return slots['inactive-icon']();
      }

      if (inactiveIcon) {
        return <Icon class={bem('icon')} name={inactiveIcon} />;
      }

      return <i class={bem('circle')} style={lineStyle.value} />;
    };

    return () => {
      const { direction } = parent.props;
      const status = getStatus();

      return (
        <div class={[BORDER, bem([direction, { [status]: status }])]}>
          <div
            class={bem('title', { active: isActive() })}
            style={titleStyle.value}
            onClick={onClickStep}
          >
            {slots.default?.()}
          </div>
          <div class={bem('circle-container')} onClick={onClickStep}>
            {renderCircle()}
          </div>
          <div class={bem('line')} style={lineStyle.value} />
        </div>
      );
    };
  },
});
