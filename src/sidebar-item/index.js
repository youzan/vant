import { createNamespace, isDef } from '../utils';
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
  },
  data() {
    return {
      curvalue: this.value || 0,
    }
  },
  computed: {
    select() {
      if (isDef(this.value)) {
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
    onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.curvalue = this.value ?? this.index;
      this.parent.$emit('input', this.value ?? this.index);
      this.parent.$emit('update:value', this.value ?? this.index);
      this.parent.setIndex(this.index);

      // route(this.$router, this);
      const props = this._props;
      const parent = this.$parent;
      function currentHref() {
        if (props.href !== undefined)
            return props.href;
        if (props.destination !== undefined && props.destination !== "")
            return props.destination;
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
        this.$emit(that, 'before-navigate',  {
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

        this.$emit(that, 'navigate',  { to: currentTo, replace: props.replace, append: props.append });
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
  },

  render() {
    if (process.env.NODE_ENV === 'development' && this.info) {
      console.warn(
        '[Vant] SidebarItem: "info" prop is deprecated, use "badge" prop instead.'
      );
    }
    const realbaget = this.badge ?? this.info;
    const comBaget = typeof (realbaget) === 'string' ? realbaget : (this.badgemax && realbaget>this.badgemax ? this.badgemax : realbaget);
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
