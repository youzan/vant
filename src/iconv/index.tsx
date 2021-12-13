// Utils
import { createNamespace, addUnit, isDefB } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Info from '../info';
import Text from '../text'

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type IconProps = {
  text?: string;
  dot?: boolean;
  tag: keyof HTMLElementTagNameMap | string;
  name?: string;
  size?: string | number;
  info?: string | number;
  badge?: string | number;
  color?: string;
  classPrefix: string;
  href?: String,
  target?: { type: String, default: '_self' },
  to?: [String, Object],
  replace?: { type: Boolean, default: false },
  append?: { type: Boolean, default: false },
  decoration?: { type: Boolean, default: true },
  download?: { type: Boolean, default: false },
  destination?: String,
};

export type IconEvents = {
  onClick?(event: Event): void;
};

const [createComponent, bem] = createNamespace('iconv');

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

// compatible with legacy usage, should be removed in next major version
const LEGACY_MAP: Record<string, string> = {
  medel: 'medal',
  'medel-o': 'medal-o',
  'calender-o': 'calendar-o',
};

function correctName(name?: string) {
  return (name && LEGACY_MAP[name]) || name;
}

function Iconv(
  h: CreateElement,
  props: IconProps,
  slots: DefaultSlots,
  ctx: RenderContext<IconProps>
) {
  const name = correctName(props.name);
  const imageIcon = isImage(name);

  if (process.env.NODE_ENV === 'development' && props.info) {
    console.warn(
      '[Vant] Icon: "info" prop is deprecated, use "badge" prop instead.'
    );
  }

  function currentHref() {
    if (props.href !== undefined)
        return props.href;
    if (props.destination !== undefined && props.destination !== "")
        return props.destination;
    else if (ctx.parent?.$router && props.to !== undefined)
    // @ts-ignore：没办法
        return ctx.parent?.$router.resolve(props.to, ctx.parent?.$route, props.append).href;
    else
        return undefined;
  }

  function onClick(event: Event) {
      emit(ctx, 'click', event);
      const hrefR = currentHref();
      console.log(hrefR, ctx.props)
      // @ts-ignore：没办法
      // if (props.target !== '_self')
      //   return;

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
      if (cancel)
          return;
      const $router = ctx.parent?.$router;
      const $route = ctx.parent?.$route;
      const { location } = $router.resolve(
        // @ts-ignore：没办法
          currentTo,
          $route,
          props.append,
      );
      props.replace ? $router.replace(location) : $router.push(location);
      }  else {
        function downloadClick() {
          const a = document.createElement("a");
          a.setAttribute("href", hrefR as string);
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            document.body.removeChild(a);
          }, 500);
        }
        downloadClick();
      }

  }


  return (
    <props.tag
      class={[
        props.classPrefix,
        imageIcon ? '' : `${props.classPrefix}-${name}`,
      ]}
      style={{
        color: props.color,
        fontSize: addUnit(props.size),
      }}
      {...inherit(ctx, true)}
      onClick={onClick}
    >
      {slots.default && slots.default()}
      {imageIcon && <img class={bem('image')} src={name} />}
      <Info dot={props.dot} info={props.badge ?? props.info} />
      {isDefB(props.text) ? <Text text={props.text}/> : null}
    </props.tag>
  );
}

Iconv.props = {
  text: {
    type: String,
    default: '图标'
  },
  dot: Boolean,
  name: String,
  size: [Number, String],
  // @deprecated
  // should be removed in next major version
  info: [Number, String],
  badge: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i',
  },
  classPrefix: {
    type: String,
    default: bem(),
  },
  href: String,
  target: { type: String, default: '_self' },
  to: [String, Object],
  replace: { type: Boolean, default: false },
  append: { type: Boolean, default: false },
  decoration: { type: Boolean, default: true },
  download: { type: Boolean, default: false },
  destination: String,
};

export default createComponent<IconProps, IconEvents>(Iconv);
