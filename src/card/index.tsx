// Utils
import { createNamespace, isDef } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Tag from '../tag';
import Image from '../image';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

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
  bottom?: ScopedSlot;
  footer?: ScopedSlot;
  'origin-price'?: ScopedSlot;
  'price-top'?: ScopedSlot;
};

export type CardEvents = {
  onClick?(event: Event): void;
};

const [createComponent, bem] = createNamespace('card');

function Card(
  h: CreateElement,
  props: CardProps,
  slots: CardSlots,
  ctx: RenderContext<CardProps>
) {
  const { thumb } = props;

  const showNum = slots.num || isDef(props.num);
  const showPrice = slots.price || isDef(props.price);
  const showOriginPrice = slots['origin-price'] || isDef(props.originPrice);
  const showBottom = showNum || showPrice || showOriginPrice || slots.bottom;

  function onThumbClick(event: MouseEvent) {
    emit(ctx, 'click-thumb', event);
  }

  function ThumbTag() {
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
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return (
        <a href={props.thumbLink} class={bem('thumb')} onClick={onThumbClick}>
          {slots.thumb ? (
            slots.thumb()
          ) : (
            <Image
              src={thumb}
              width="100%"
              height="100%"
              fit="cover"
              lazy-load={props.lazyLoad}
            />
          )}
          {ThumbTag()}
        </a>
      );
    }
  }

  function Title() {
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
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc();
    }

    if (props.desc) {
      return <div class={[bem('desc'), 'van-ellipsis']}>{props.desc}</div>;
    }
  }

  function PriceContent() {
    const priceArr = props.price!.toString().split('.');
    return (
      <div>
        <span class={bem('price-currency')}>{props.currency}</span>
        <span class={bem('price-integer')}>{priceArr[0]}</span>.
        <span class={bem('price-decimal')}>{priceArr[1]}</span>
      </div>
    );
  }

  function Price() {
    if (showPrice) {
      return (
        <div class={bem('price')}>
          {slots.price ? slots.price() : PriceContent()}
        </div>
      );
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      const slot = slots['origin-price'];
      return (
        <div class={bem('origin-price')}>
          {slot ? slot() : `${props.currency} ${props.originPrice}`}
        </div>
      );
    }
  }

  function Num() {
    if (showNum) {
      return (
        <div class={bem('num')}>
          {slots.num ? slots.num() : `x${props.num}`}
        </div>
      );
    }
  }

  function Footer() {
    if (slots.footer) {
      return <div class={bem('footer')}>{slots.footer()}</div>;
    }
  }

  return (
    <div class={bem()} {...inherit(ctx, true)}>
      <div class={bem('header')}>
        {Thumb()}
        <div class={bem('content', { centered: props.centered })}>
          <div>
            {Title()}
            {Desc()}
            {slots.tags?.()}
          </div>
          {showBottom && (
            <div class="van-card__bottom">
              {slots['price-top']?.()}
              {Price()}
              {OriginPrice()}
              {Num()}
              {slots.bottom?.()}
            </div>
          )}
        </div>
      </div>
      {Footer()}
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
    default: '¥',
  },
};

export default createComponent<CardProps, CardEvents>(Card);
