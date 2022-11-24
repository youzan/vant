// Utils
import { createNamespace, isObject, isDef } from '../utils';
import { route, routeProps } from '../utils/router';

// Mixins
import { ChildrenMixin } from '../mixins/relation';

// Components
import Iconv from '../iconv';
import Info from '../info';
import Text from '../text';
import encodeUrl from '../utils/encodeUrl';

const [createComponent, bem] = createNamespace('tabbar-item');

export default createComponent({
  mixins: [ChildrenMixin('vanTabbar')],

  props: {
    ...routeProps,
    dot: Boolean,
    icon: String,
    text: String,
    name: [Number, String],
    // @deprecated
    info: [Number, String],
    badge: [Number, String],
    showbaget: {
      type: Boolean,
      default: false
    },
    badgemax: {
      type: Number,
    },
    iconPrefix: String,
    href: String,
    target: { type: String, default: '_self' },
    to: [String, Object],
    replace: { type: Boolean, default: false },
    append: { type: Boolean, default: false },
    decoration: { type: Boolean, default: true },
    download: { type: Boolean, default: false },
    destination: String,
  },

  data() {
    return {
      nameMatched: false,
    };
  },

  computed: {
    active() {
      const routeMode = this.parent.route;

      if (routeMode && '$route' in this) {
        const { to, destination, $route } = this;
        // const config = isObject(to) ? to : { path: to };
        const config = isObject(destination) ? destination : { path: this.newdest(destination) };

        return !!$route.matched.find((r) => {
          // vue-router 3.x $route.matched[0].path is empty in / and its children paths
          const path = r.path === '' ? '/' : r.path;
          if (config.path === '/') return false;
          const pathMatched = config.path === path;
          const nameMatched = isDef(config.name) && config.name === r.name;
          return pathMatched || nameMatched;
        });
      }

      return this.nameMatched;
    },
  },

  methods: {
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
    newdest(destination) {
      return encodeUrl(destination ? '/' + destination.split('/').slice(1).join('/') : destination);
    },
    onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      // route(this.$router, this);
      const props = this._props;
      const parent = this.$parent;
      function currentHref() {
        if (props.href !== undefined)
          return encodeUrl(props.href);
        if (parent?.$router && props.to !== undefined)
          return encodeUrl(parent?.$router.resolve(props.to, parent?.$route, props.append).href);
        return undefined;
      }

      const hrefR = currentHref();
      // if (!hrefR) {
      //   return
      // }

      function ifCanGoWithHref(destination) {
        if (destination) {
          return destination?.split('/')?.length > 2;
        }
      }

      if (hrefR === undefined || ifCanGoWithHref(props.destination)) {
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
        const cancel = false;
        // this.$emit(that, 'before-navigate',  {
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

        // this.$emit(that, 'navigate',  { to: currentTo, replace: props.replace, append: props.append });
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
    },

    genIcon(active) {
      const slot = this.slots('icon', { active });

      if (slot) {
        return slot;
      }

      if (this.icon) {
        return <Iconv name={this.icon} notext classPrefix={this.iconPrefix}>
        </Iconv>;
      }
    },
    designerControl() {
      this.parent.onChange(this.name || this.index);
    }
  },

  render() {
    const realbaget = this.badge ?? this.info;
    const comBaget = typeof (realbaget) === 'string' ? realbaget : (this.badgemax && realbaget > this.badgemax ? `${this.badgemax}+` : realbaget);
    const { active } = this;
    const color = this.parent[active ? 'activeColor' : 'inactiveColor'];

    if (process.env.NODE_ENV === 'development' && this.info) {
      console.warn(
        '[Vant] TabbarItem: "info" prop is deprecated, use "badge" prop instead.'
      );
    }

    return (
      <div class={bem({ active })} style={{ color }} onClick={this.onClick}>
        <div class={bem('icon')}>
          {this.genIcon(active)}
          {(this.showbaget && comBaget) ? <Info dot={this.dot} info={comBaget} /> : null}
        </div>
        <div vusion-slot-name="default">
          {this.ifDesigner() && !this.slots('default') ? <van-empty-col></van-empty-col> : null}
          <div class={bem('text')} vusion-slot-name-edit="text">{this.slots('default', { active }) || this.text}</div>
        </div>
      </div>
    );
  },
});
