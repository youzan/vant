// Utils
import { createNamespace, isDef } from '../utils';
import { emit } from '../utils/functional';
import { routeProps, functionalRoute } from '../utils/router';
import { cellProps } from './shared';

// Components
import Icon from '../icon';


import VanEmptyCol from '../emptycol/index';


const [createComponent, bem] = createNamespace('cell');


export default createComponent({
  inheritAttrs: false,
  components: {
    VanEmptyCol,
    Icon
  },
  props: {
    ...cellProps,
    ...routeProps,
  },

  data() {
    return {
    };
  },

  watch: {
  },
  created() {
  },
  mounted() {
  },

  beforeDestroy() {
  },

  computed: {
  },

  methods: {
  },

  render() {
    const { slots } = this;
    // const slots = this.$slots;
    const props = this._props;
    const parent = this.$parent;
    const that = this;
    const { icon, size, title, label, value, isLink } = this._props;
    const showTitle = slots('title') || isDef(title);

    function Labelb() {
      const showLabel = slots('lable') || isDef(label);

      if (showLabel) {
        return (
          <div class={[bem('label'), props.labelClass]} vusion-slot-name="label">
            {slots('lable') ? slots('lable') : label}
          </div>
        );
      }
    }

    function Title() {
      if (showTitle) {
        return (
          <div class={[bem('title'), props.titleClass]} style={props.titleStyle} vusion-slot-name="title">
            {slots('title') ? slots('title') : title}
            {/* {Labelb()} */}
          </div>
        );
      }
    }

    function Value() {
      const showValue = slots() || isDef(value);
      //@ts-ignore
      const ifDesigner = (parent.$env && parent.$env.VUE_APP_DESIGNER);

      // if (showValue) {
        return (
          <div class={[bem('value', { alone: !showTitle }), props.valueClass]} vusion-slot-name="default">
            {slots() ? slots()  : (isDef(value) ? <span>{value}</span>  : null)}
            {(ifDesigner && !isDef(value) && !slots()) ? <van-empty-col></van-empty-col> : null}
          </div>
        );
      // }
    }

    function LeftIcon() {
      if (slots('icon')) {
        return slots('icon');
      }

      if (icon) {
        return (
          <van-icon
            class={bem('left-icon')}
            name={icon}
            classPrefix={props.iconPrefix}
          />
        );
      }
    }

    function RightIcon() {
      const rightIconSlot = slots['right-icon'];

      if (rightIconSlot) {
        return rightIconSlot();
      }

      if (isLink) {
        const { arrowDirection } = props;

        return (
          <van-icon
            class={bem('right-icon')}
            name={(arrowDirection && arrowDirection !== 'right') ? `arrow-${arrowDirection}` : 'arrow'}
          />
        );
      }
    }

    function currentHref() {
      if (props.href !== undefined)
          return props.href;
      if (props.destination !== undefined)
          return props.destination;
      else if (parent?.$router && props.to !== undefined)
          return parent?.$router.resolve(props.to, parent?.$route, props.append).href;
      else
          return undefined;
    }

    function onClick(event) {
      // emit(that, 'click', event);
      console.log(that, event);
      that.$listeners?.click?.(event);
      const hrefR = currentHref();
      if (!hrefR && !that.$listeners.click) {
        event.preventDefault();
      }
      // @ts-ignore：没办法
      if (props.target !== '_self')
        return;

      if (hrefR === undefined) {
        let to;
        if (props.destination) {
            // 只处理/a/b形式的链接
            const origin = window.location.origin;
            const path = window.location.href.replace(origin, '').split('/');
            const destination = props.destination.replace(origin, '').split('/');
            if (path[1] === destination[1]) {
                to = '/' + destination.slice(2).join('/');
            } else {
                return;
            }
        }


        const currentTo = to || props.to;
        if (currentTo === undefined)
            return;
        let cancel = false;
        emit(that, 'before-navigate',  {
          to: currentTo,
          replace: props.replace,
          append: props.append,
          preventDefault: () => (cancel = true),
        });
        if (cancel)
            return;
        const $router = parent?.$router;
        const $route = parent?.$route;
        const { location } = $router.resolve(
            currentTo,
            $route,
            props.append,
        );
        props.replace ? $router.replace(location) : $router.push(location);

        emit(that, 'navigate',  { to: currentTo, replace: props.replace, append: props.append });
      } else {
        function downloadClick() {
          const a = document.createElement("a");
          a.setAttribute("href", hrefR);
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            document.body.removeChild(a);
          }, 500);
        }
        downloadClick();
      }

        // functionalRoute(ctx);
    }

    const clickable = props.clickable ?? isLink;
    const classes = {
      clickable,
      center: props.center,
      required: props.required,
      borderless: !props.border,
    };

    if (size) {
      classes[size] = size;
    }


    return (
      <div
        class={bem(classes)}
        role={clickable ? 'button' : null}
        tabindex={clickable ? 0 : null}
        onClick={onClick}
        vusion-cut={that.vusionCut}
        vusion-move={that.vusionMove}
        vusion-node-path={that.vusionNodePath}
        vusion-node-tag={that.vusionNodeTag}
      >
        {LeftIcon()}
        {Title()}
        {Value()}
        {RightIcon()}
        {slots('extra')}
      </div>
    );
  },
});
