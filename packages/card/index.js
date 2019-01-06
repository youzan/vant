import { use, isDef } from '../utils';
import Tag from '../tag';

const [sfc, bem] = use('card');

export default sfc({
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
      default: '¥'
    }
  },

  render(h) {
    const { thumb, $slots: slots } = this;

    const Thumb = (slots.thumb || thumb) && (
      <a href={this.thumbLink} class={bem('thumb')}>
        {slots.thumb ||
          (this.lazyLoad ? (
            <img class={bem('img')} v-lazy={thumb} />
          ) : (
            <img class={bem('img')} src={thumb} />
          ))}
        {this.tag && (
          <Tag mark type="danger" class={bem('tag')}>
            {this.tag}
          </Tag>
        )}
      </a>
    );

    const Title = slots.title || (this.title && <div class={bem('title')}>{this.title}</div>);

    const Desc =
      slots.desc || (this.desc && <div class={[bem('desc'), 'van-ellipsis']}>{this.desc}</div>);

    const Price = (slots.price || isDef(this.price)) && (
      <div class={bem('price')}>{slots.price || `${this.currency} ${this.price}`}</div>
    );

    const OriginPrice = isDef(this.originPrice) && (
      <div class={bem('origin-price')}>{`${this.currency} ${this.originPrice}`}</div>
    );

    const Num = (slots.num || isDef(this.num)) && (
      <div class={bem('num')}>{slots.num || `x ${this.num}`}</div>
    );

    const Footer = slots.footer && <div class={bem('footer')}>{slots.footer}</div>;

    return (
      <div class={bem()}>
        <div class={bem('header')}>
          {Thumb}
          <div class={bem('content')}>
            {Title}
            {Desc}
            {slots.tags}
            <div class="van-card__bottom">
              {Price}
              {OriginPrice}
              {Num}
            </div>
          </div>
        </div>
        {Footer}
      </div>
    );
  }
});
