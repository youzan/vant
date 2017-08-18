/**
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, mini, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {slot} - 显示文本
 *
 * @example
 * <van-button size="large" type="primary">按钮</van-button>
 */

import VanLoading from '../../loading';

const ALLOWED_SIZE = ['mini', 'small', 'normal', 'large'];
const ALLOWED_TYPE = ['default', 'danger', 'primary'];

export default {
  name: 'van-button',

  components: {
    'van-loading': VanLoading
  },

  props: {
    disabled: Boolean,
    loading: Boolean,
    block: Boolean,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    nativeType: String,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ALLOWED_TYPE.indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ALLOWED_SIZE.indexOf(value) > -1;
      }
    }
  },

  methods: {
    handleClick(e) {
      if (this.loading || this.disabled) return;
      this.$emit('click', e);
    }
  },

  render(h) {
    const { type, nativeType, size, disabled, loading, block, bottomAction } = this;
    const Tag = this.tag;

    return (
      <Tag
        type={nativeType}
        disabled={disabled}
        class={[
          'van-button',
          'van-button--' + type,
          'van-button--' + size,
          {
            'van-button--disabled': disabled,
            'van-button--loading': loading,
            'van-button--block': block,
            'van-button--bottom-action': bottomAction
          }
        ]}
        onClick={this.handleClick}
      >
        {
          loading
            ? <van-loading
                class="van-button__icon-loading"
                type="circle"
                color={type === 'default' ? 'black' : 'white'}>
              </van-loading>
            : null
        }
        <span class="van-button__text">{this.$slots.default}</span>
      </Tag>
    );
  }
};
