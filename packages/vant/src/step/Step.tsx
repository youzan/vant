import { computed, defineComponent } from 'vue';

// Utils
import { BORDER, createNamespace } from '../utils';
import { STEPS_KEY } from '../steps/Steps';

// Composables
import { useParent } from '@vant/use';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('step');

export default defineComponent({
  name,

  setup(props, { slots }) {
    const { parent, index } = useParent(STEPS_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <Step> must be a child component of <Steps>.');
      }
      return;
    }

    const parentProps = parent.props;

    const getStatus = () => {
      const active = +parentProps.active;
      if (index.value < active) {
        return 'finish';
      }
      return index.value === active ? 'process' : 'waiting';
    };

    const isActive = () => getStatus() === 'process';

    const lineStyle = computed(() => ({
      background:
        getStatus() === 'finish'
          ? parentProps.activeColor
          : parentProps.inactiveColor,
    }));

    const titleStyle = computed(() => {
      if (isActive()) {
        return { color: parentProps.activeColor };
      }
      if (!getStatus()) {
        return { color: parentProps.inactiveColor };
      }
    });

    const onClickStep = () => parent.onClickStep(index.value);

    const renderCircle = () => {
      const { iconPrefix, finishIcon, activeIcon, activeColor, inactiveIcon } =
        parentProps;

      if (isActive()) {
        if (slots['active-icon']) {
          return slots['active-icon']();
        }

        return (
          <Icon
            class={bem('icon', 'active')}
            name={activeIcon}
            color={activeColor}
            classPrefix={iconPrefix}
          />
        );
      }

      if (getStatus() === 'finish' && (finishIcon || slots['finish-icon'])) {
        if (slots['finish-icon']) {
          return slots['finish-icon']();
        }

        return (
          <Icon
            class={bem('icon', 'finish')}
            name={finishIcon}
            color={activeColor}
            classPrefix={iconPrefix}
          />
        );
      }

      if (slots['inactive-icon']) {
        return slots['inactive-icon']();
      }

      if (inactiveIcon) {
        return (
          <Icon
            class={bem('icon')}
            name={inactiveIcon}
            classPrefix={iconPrefix}
          />
        );
      }

      return <i class={bem('circle')} style={lineStyle.value} />;
    };

    return () => {
      const status = getStatus();

      return (
        <div
          class={[BORDER, bem([parentProps.direction, { [status]: status }])]}
        >
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
