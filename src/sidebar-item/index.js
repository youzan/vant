import { createNamespace, isObject, isDef } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';
import Info from '../info';

const [createComponent, bem] = createNamespace('sidebar-item');

export default createComponent({
  mixins: [ChildrenMixin('vanSidebar')],

  props: {
    ...routeProps,
    showbaget: {
      type: Boolean,
      default: true
    },
    badgemax: {
      type: Number,
    },
    dot: Boolean,
    // @deprecated
    info: [Number, String],
    badge: [Number, String],
    title: String,
    disabled: Boolean,
    value: [Number, String],
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
      curvalue: this.value || 0,
    }
  },
  computed: {
    select() {
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
      } else if (isDef(this.value)) {
        return this.curvalue === this.parent.curvalue;
      }
      return this.index === +this.parent.curvalue;
    },
  },
  watch: {
    value(val) {
      this.curvalue = val;
    }
  },
  methods: {
    newdest(destination) {
      return destination ? '/' + destination.split('/').slice(2).join('/') : destination;
    },
    onClick() {
      if (this.disabled) {
        return;
      }

      this.parent.curvalue = this.value ?? this.index;
      this.parent.$emit('input', this.value ?? this.index);
      this.parent.$emit('update:value', this.value ?? this.index);

      this.parent.setIndex(this.index);
      this.$emit('click', this.index);


      // route(this.$router, this);
      const props = this._props;
      const parent = this.$parent;
      function currentHref() {
        if (props.href !== undefined)
          return props.href;
        else if (parent?.$router && props.to !== undefined)
          return parent?.$router.resolve(props.to, parent?.$route, props.append).href;
        else
          return undefined;
      }

      const hrefR = currentHref();
      if (!hrefR) {
        return
      }

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
        this.$emit(that, 'before-navigate', {
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

        this.$emit(that, 'navigate', { to: currentTo, replace: props.replace, append: props.append });
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
    judgeshow(attr) {
      if (typeof this[attr] === 'boolean') return this[attr] === true;
      if (typeof this[attr] === 'string') return this[attr] === '{{ true }}';
    },
  },

  render() {
    if (process.env.NODE_ENV === 'development' && this.info) {
      console.warn(
        '[Vant] SidebarItem: "info" prop is deprecated, use "badge" prop instead.'
      );
    }
    const realbaget = this.badge ?? this.info;
    const comBaget = typeof (realbaget) === 'string' ? realbaget : (this.badgemax && realbaget > this.badgemax ? `${this.badgemax}+` : realbaget);
    return (
      <a
        class={bem({ select: this.select, disabled: this.disabled })}
        onClick={this.onClick}
      >
        <div class={bem('text')}>
          {this.slots('title') ?? this.title}
          <Info
            dot={this.dot}
            info={this.showbaget && comBaget}
            class={bem('info')}
          />
        </div>
      </a>
    );
  },
});
