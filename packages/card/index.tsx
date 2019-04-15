import { use, isDef } from '../utils';
import { inherit } from '../utils/functional';
import Tag from '../tag';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/use/sfc';

export type CardProps = {
  tag?: string;
  num?: number | string;
  desc?: string;
  thumb?: string;
  title?: string;
  price?: number | string;
  currency: string;
  centered?: boolean;
  lazyLoad?: boolean;
  thumbLink?: string;
  originPrice?: number | string;
};

export type CardSlots = DefaultSlots & {
  num?: ScopedSlot;
  tag?: ScopedSlot;
  tags?: ScopedSlot;
  desc?: ScopedSlot;
  title?: ScopedSlot;
  thumb?: ScopedSlot;
  price?: ScopedSlot;
  footer?: ScopedSlot;
  'origin-price'?: ScopedSlot;
};

export type CardEvents = {
  onClick?(event: Event): void;
};

const [sfc, bem] = use('card');

function Card(
  h: CreateElement,
  props: CardProps,
  slots: CardSlots,
  ctx: RenderContext<CardProps>
) {
  const { thumb } = props;

  const showThumb = slots.thumb || thumb;
  const showTag = slots.tag || props.tag;
  const showNum = slots.num || isDef(props.num);
  const showPrice = slots.price || isDef(props.price);
  const showOriginPrice = slots['origin-price'] || isDef(props.originPrice);
  const showBottom = showNum || showPrice || showOriginPrice;

  const Thumb = showThumb && (
    <a href={props.thumbLink} class={bem('thumb')}>
      {slots.thumb ? (
        slots.thumb()
      ) : props.lazyLoad ? (
        <img class={bem('img')} vLazy={thumb} />
      ) : (
        <img class={bem('img')} src={thumb} />
      )}
      {showTag && (
        <div class={bem('tag')}>
          {slots.tag ? (
            slots.tag()
          ) : (
            <Tag mark type="danger">
              {props.tag}
            </Tag>
          )}
        </div>
      )}
    </a>
  );

  const Title = slots.title
    ? slots.title()
    : props.title && <div class={bem('title')}>{props.title}</div>;

  const Desc = slots.desc
    ? slots.desc()
    : props.desc && <div class={[bem('desc'), 'van-ellipsis']}>{props.desc}</div>;

  const Price = showPrice && (
    <div class={bem('price')}>
      {slots.price ? slots.price() : `${props.currency} ${props.price}`}
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
    <div class={bem('num')}>{slots.num ? slots.num() : `x ${props.num}`}</div>
  );

  const Footer = slots.footer && <div class={bem('footer')}>{slots.footer()}</div>;

  return (
    <div class={bem()} {...inherit(ctx, true)}>
      <div class={bem('header')}>
        {Thumb}
        <div class={bem('content', { centered: props.centered })}>
          {Title}
          {Desc}
          {slots.tags && slots.tags()}
          {showBottom && (
            <div class="van-card__bottom">
              {Price}
              {OriginPrice}
              {Num}
            </div>
          )}
        </div>
      </div>
      {Footer}
    </div>
  );
}

Card.props = {
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
    default: '¥'
  }
};

export default sfc<CardProps, CardEvents>(Card);
