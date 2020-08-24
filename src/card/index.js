// Utils
import { createNamespace, isDef } from '../utils';

// Components
import Tag from '../tag';
import Image from '../image';

const [createComponent, bem] = createNamespace('card');

export default createComponent({
  props: {
    tag: String,
    desc: String,
    thumb: String,
    title: String,
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    num: [Number, String],
    price: [Number, String],
    originPrice: [Number, String],
    currency: {
      type: String,
      default: '¥',
    },
  },

  emits: ['click-thumb'],

  setup(props, { slots, emit }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return (
          <div class={[bem('title'), 'van-multi-ellipsis--l2']}>
            {props.title}
          </div>
        );
      }
    };

    const renderThumbTag = () => {
      if (slots.tag || props.tag) {
        return (
          <div class={bem('tag')}>
            {slots.tag ? (
              slots.tag()
            ) : (
              <Tag mark type="danger">
                {props.tag}
              </Tag>
            )}
          </div>
        );
      }
    };

    const renderThumbImage = () => {
      if (slots.thumb) {
        return slots.thumb();
      }

      return (
        <Image
          src={props.thumb}
          width="100%"
          height="100%"
          fit="cover"
          lazyLoad={props.lazyLoad}
        />
      );
    };

    const renderThumb = () => {
      if (slots.thumb || props.thumb) {
        return (
          <a
            href={props.thumbLink}
            class={bem('thumb')}
            onClick={(event) => {
              emit('click-thumb', event);
            }}
          >
            {renderThumbImage()}
            {renderThumbTag()}
          </a>
        );
      }
    };

    const renderDesc = () => {
      if (slots.desc) {
        return slots.desc();
      }

      if (props.desc) {
        return <div class={[bem('desc'), 'van-ellipsis']}>{props.desc}</div>;
      }
    };

    const renderPriceText = () => {
      const priceArr = props.price.toString().split('.');
      return (
        <div>
          <span class={bem('price-currency')}>{props.currency}</span>
          <span class={bem('price-integer')}>{priceArr[0]}</span>.
          <span class={bem('price-decimal')}>{priceArr[1]}</span>
        </div>
      );
    };

    return () => {
      const showNum = slots.num || isDef(props.num);
      const showPrice = slots.price || isDef(props.price);
      const showOriginPrice = slots['origin-price'] || isDef(props.originPrice);
      const showBottom =
        showNum || showPrice || showOriginPrice || slots.bottom;

      const Price = showPrice && (
        <div class={bem('price')}>
          {slots.price ? slots.price() : renderPriceText()}
        </div>
      );

      const OriginPrice = showOriginPrice && (
        <div class={bem('origin-price')}>
          {slots['origin-price']
            ? slots['origin-price']()
            : `${props.currency} ${props.originPrice}`}
        </div>
      );

      const Num = showNum && (
        <div class={bem('num')}>
          {slots.num ? slots.num() : `x${props.num}`}
        </div>
      );

      const Footer = slots.footer && (
        <div class={bem('footer')}>{slots.footer()}</div>
      );

      const Bottom = showBottom && (
        <div class={bem('bottom')}>
          {slots['price-top']?.()}
          {Price}
          {OriginPrice}
          {Num}
          {slots.bottom?.()}
        </div>
      );

      return (
        <div class={bem()}>
          <div class={bem('header')}>
            {renderThumb()}
            <div class={bem('content', { centered: props.centered })}>
              <div>
                {renderTitle()}
                {renderDesc()}
                {slots.tags?.()}
              </div>
              {Bottom}
            </div>
          </div>
          {Footer}
        </div>
      );
    };
  },
});
