<script>
import { createNamespace } from '../utils';
import { SlotsMixin } from '../mixins/slots';
import VanEmptyCol from '../emptycol';
import encodeUrl from '../utils/encodeUrl';
const [, bem] = createNamespace('cardu');
export default {
    name: 'van-cardu',
    components: {
    },
    mixins: [SlotsMixin],
    props: {
        sr: { type: String, default: 'r' },
        shadow: { type: Boolean, default: true },
        border: { type: Boolean, default: true },
        split: { type: Boolean, default: false },
        coverSlot: { type: Boolean, default: false },
        noTitle: { type: Boolean, default: false },
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        decoration: { type: Boolean, default: true },
        download: { type: Boolean, default: false },
        destination: String,
    },
    methods: {
      onClick(event) {
          const props = this._props;
          const parent = this.$parent;
          function currentHref() {
            if (props.href !== undefined)
                return encodeUrl(props.href);
            if (props.destination !== undefined && props.destination !== "")
                return encodeUrl(props.destination);
            else if (parent?.$router && props.to !== undefined)
                return encodeUrl(parent?.$router.resolve(props.to, parent?.$route, props.append).href);
            else
                return undefined;
          }
          const hrefR = currentHref();
          if (!hrefR && !this.$listeners.click) {
            return
          }
          this.$listeners?.click?.(event);
          if (hrefR === undefined) {
          let to;
          if (props.destination) {
              // 只处理/a/b形式的链接
              const origin = window.location.origin;
              const path = window.location.href.replace(origin, '').split('/');
              const destination = props.destination.replace(origin, '').split('/');
              if (path[1] === destination[1]) {
                  to = encodeUrl('/' + destination.slice(2).join('/'));
              } else {
                  return;
              }
          }


          const currentTo = to || props.to;
          if (currentTo === undefined)
              return;
          let cancel = false;
          // emit(that, 'before-navigate',  {
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
        }
    },
    render() {
      const { sr, split, border, shadow, coverSlot, noTitle} = this;
      const ifDesigner = this.$env && this.$env.VUE_APP_DESIGNER;
      return (
        <div class={bem('wrap', {border, shadow: shadow, sr: sr === 'r', image: coverSlot})} onClick={this.onClick}>
          <div class="van-cardu-cover" vusion-slot-name="cover">
            {this.slots('cover')}
            {(ifDesigner && coverSlot && !this.slots('cover')) ? <VanEmptyCol /> : null}
          </div>
          <div class={bem('head')} vusion-slot-name="head">
            {this.slots('head')}
            {(ifDesigner && !noTitle &&!this.slots('head')) ? <VanEmptyCol /> : null}
          </div>
          { split ? <van-divider></van-divider> : null }
          <div class={bem('content')} vusion-slot-name="default">
            {this.slots()}
            {(ifDesigner && !this.slots()) ? <VanEmptyCol /> : null}
          </div>
        </div>
      );
    }
};
</script>

<style lang="less">
@import './cardu.less';
</style>

