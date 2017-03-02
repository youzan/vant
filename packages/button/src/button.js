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
 * <zan-button size="large" type="primary">按钮</zan-button>
 */

const allowedSize = ['mini', 'small', 'normal', 'large'];
const allowedType = ['default', 'danger', 'primary'];

export default {
  name: 'zan-button',

  props: {
    disabled: Boolean,
    loading: Boolean,
    block: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    nativeType: String,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return allowedType.indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return allowedSize.indexOf(value) > -1;
      }
    }
  },

  methods: {
    handleClick() {
      this.$emit('click');
    }
  },

  render(h) {
    let { type, nativeType, size, disabled, loading, block } = this;
    let Tag = this.tag;

    return (
      <Tag
        type={nativeType}
        disabled={disabled}
        class={[
          'zan-button',
          'zan-button--' + type,
          'zan-button--' + size,
          {
            'z-button--disabled': disabled,
            'z-button--loading': loading,
            'z-button--block': block
          }
        ]}
        onClick={this.handleClick}
      >
        {
          loading ? <i class="zan-icon-loading"></i> : null
        }
        <span class="zan-button-text">{this.$slots.default}</span>
      </Tag>
    );
  }
};
