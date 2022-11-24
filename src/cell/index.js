// Utils
import { createNamespace, isDef, isDefB, isObject } from '../utils';
import encodeUrl from '../utils/encodeUrl';
import { emit } from '../utils/functional';
import { routeProps, functionalRoute } from '../utils/router';
import { cellProps } from './shared';
import { ChildrenMixin } from '../mixins/relation';

// Components
import Iconv from '../iconv';


import VanEmptyCol from '../emptycol/index';


const [createComponent, bem] = createNamespace('cell');


export default createComponent({
  mixins: [ChildrenMixin('vanDropdownMenuItem')],
  inheritAttrs: false,
  components: {
    VanEmptyCol,
    Iconv
  },
  props: {
    ...cellProps,
    infield: {
      type: Boolean,
      default: false,
    },
    novalue: {
      type: Boolean,
      default: false,
    },
    ...routeProps,
    rtitle: {
      type: String,
      default: '',
    },
    notitle: {
      type: Boolean,
      default: false,
    },
    notitleblock: {
      type: Boolean,
      default: false,
    },
    singleslot: {
      type: Boolean,
      default: false,
    },
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
    routeMode() {
      return !!this.parent?.parent?.route;
    },
    activeDropdownItem() {
      const inVanDropdownItem = this.vanDropdownMenuItem;
      if (!inVanDropdownItem) return false;
      const routeMode = this.routeMode;
      if (routeMode && '$route' in this) {
        const { to, destination, $route } = this;
        // const config = isObject(to) ? to : { path: to };
        const config = isObject(destination) ? destination : { path: this.newdest(destination) };

        return !!$route?.matched.find((r) => {
          // vue-router 3.x $route.matched[0].path is empty in / and its children paths
          const path = r.path === '' ? '/' : r.path;
          if (config.path === '/') return false;
          const pathMatched = config.path === path;
          const nameMatched = isDef(config.name) && config.name === r.name;
          return pathMatched || nameMatched;
        });
      }

      return false;
    }
  },

  methods: {
    newdest(destination) {
      return destination ? '/' + destination.split('/').slice(1).join('/') : destination;
    },
  },

  render() {
    const { slots } = this;
    // const slots = this.$slots;
    const props = this._props;
    const parent = this.$parent;
    const that = this;
    const { icon, size, title, label, value, isLink, infield, novalue, rtitle, notitle, notitleblock, singleslot } = this._props;
    const showTitle = true || slots('title') || isDefB(title);
    const ifDesigner = (parent.$env && parent.$env.VUE_APP_DESIGNER);
    function Labelb() {
      const showLabel = slots('lable') || isDef(label);

      if (showLabel) {
        return (
          <div class={[bem('label'), props.labelClass]} vusion-slot-name="label" vusion-slot-name-edit="label">
            {slots('lable') ? slots('lable') : label}
          </div>
        );
      }
    }

    function Title() {
      const ifDesigner = (parent.$env && parent.$env.VUE_APP_DESIGNER);
      if (showTitle) {
        if (!ifDesigner && (!isDef(title) || title === '') && !slots('title')) return null;
        if (notitleblock && !title) return null;
        if (notitle) {
          if ((!isDef(title) || title === '') && !slots('title')) return null;
          return (
            <div class={[bem('title'), props.titleClass]} style={props.titleStyle} vusion-slot-name="title" vusion-slot-name-edit="title">
              {slots('title') ? slots('title') : title}
            </div>
          );
        }
        if (ifDesigner && singleslot) return null;
        return (
          <div class={[bem('title'), props.titleClass]} style={props.titleStyle} vusion-scope-id={that.$vnode.context.$options._scopeId} vusion-slot-name="title" vusion-slot-name-edit="title">
            {slots('title') ? slots('title') : title}
            {(ifDesigner && (!isDef(title) || title === '') && !slots('title')) ? <van-empty-col></van-empty-col> : null}
          </div>
        );
      }
    }

    function Value() {
      const showValue = true || slots() || (isDef(rtitle) && value !== '');
      //@ts-ignore
      const ifDesigner = (parent.$env && parent.$env.VUE_APP_DESIGNER);
      if (!ifDesigner && (!isDef(rtitle) || rtitle === '') && !slots()) return null;
      if (novalue) return null;
      if (ifDesigner) {
        return (
          <div class={[bem('value', { alone: singleslot }), props.valueClass]} vusion-slot-name="default" vusion-scope-id={that.$vnode.context.$options._scopeId}>
            {slots() ? slots() : (isDef(rtitle) && rtitle !== '' ? <span>{rtitle}</span> : null)}
            {((!isDef(rtitle) || rtitle === '') && !slots()) ? <van-empty-col></van-empty-col> : null}
          </div>
        );
      } else {
        if (showValue) {
          return (
            <div class={[bem('value', { alone: singleslot }), props.valueClass]}>
              {slots() ? slots() : <span>{rtitle}</span>}
            </div>
          );
        }
      }
    }

    function LeftIcon() {
      if (slots('icon')) {
        return slots('icon');
      }

      if (icon) {
        return (
          <van-iconv
            class={bem('left-icon')}
            name={icon}
            classPrefix={props.iconPrefix}
            notext
          />
        );
      }
    }

    function RightIcon() {
      const rightIconSlot = slots('right-icon');
      if (rightIconSlot) {
        return rightIconSlot;
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
      else if (parent?.$router && props.to !== undefined)
        return parent?.$router.resolve(props.to, parent?.$route, props.append).href;
      else
        return undefined;
    }

    function onClick(event) {
      if (that.vanDropdownMenuItem) {
        if ((that.value ?? that.index) !== that.vanDropdownMenuItem.value) {
          that.vanDropdownMenuItem.value = that.value ?? that.index;
          that.vanDropdownMenuItem.$emit('input', that.value);
          that.vanDropdownMenuItem.$emit('update:valueprop', that.value);
        }
        that.vanDropdownMenuItem.shutself && (that.vanDropdownMenuItem.showPopup = false);
      }


      // emit(that, 'click', event);
      const hrefR = currentHref();
      // if (!hrefR && !that.$listeners.click) {
      //   // event.preventDefault();
      //   return
      // }
      that.$listeners?.click?.(event);
      // @ts-ignore：没办法
      // if (props.target !== '_self')
      //   return;

      if (hrefR === undefined) {
        let to;
        if (props.destination) {
          if (props.destination.startsWith('http')) {
            location.href = encodeUrl(props.destination);
            return;
          }
          to = props.destination;
        }


        const currentTo = to || props.to;
        if (currentTo === undefined)
          return;
        let cancel = false;
        // emit(that, 'before-navigate', {
        //   to: currentTo,
        //   replace: props.replace,
        //   append: props.append,
        //   preventDefault: () => (cancel = true),
        // });
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

        // emit(that, 'navigate', { to: currentTo, replace: props.replace, append: props.append });
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
    const nocontentforlink = !ifDesigner && ((!isDef(rtitle) || rtitle === '') && !slots()) && ((!isDef(title) || title === '') && !slots('title'));

    if (nocontentforlink) {
      classes['nocontentforlink'] = nocontentforlink;
    }

    let classesnew = bem(classes);
    const inVanDropdownItem = that.vanDropdownMenuItem;
    if (inVanDropdownItem) {
      if (that.routeMode) {
        if (that.activeDropdownItem) {
          classesnew += ' ' + that.vanDropdownMenuItem.bem('option', { active: true });
        } else {
          classesnew += ' ' + that.vanDropdownMenuItem.bem('option', { active: false });
        }
      } else if (isDef(that.vanDropdownMenuItem.value)) {
        if (that.vanDropdownMenuItem.value === (that.value ?? that.index)) {
          classesnew += ' ' + that.vanDropdownMenuItem.bem('option', { active: true });
        } else {
          classesnew += ' ' + that.vanDropdownMenuItem.bem('option', { active: false });
        }
      }
    }

    const ado = {
      ...this.$attrs,
      [infield ? 'is-sub' : 'noallow']: ''
    }

    const canActivateItem = () => {
      if (that.routeMode) {
        // console.log(that.activeDropdownItem, 99999);
        return that.activeDropdownItem;
      }
      return (inVanDropdownItem && (that.vanDropdownMenuItem?.value === (that.value ?? that.index)));
    }

    return (
      <div
        {...{ attrs: { ...ado } }}
        class={classesnew}
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
        {canActivateItem() ? <Iconv class={that.vanDropdownMenuItem.bem('icon')} color={that.vanDropdownMenuItem.parent.activeColor} name="success" /> : null}
      </div>
    );
  },
});
