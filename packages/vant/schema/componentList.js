const components = [
  {
    title: 'Button 按钮',
    description: '按钮用于触发一个操作，如提交表单。',
    // 暂时不用
    path: '/button/Button.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'checkbox',
      children: true,
      props: {
        /**
         * 先添加全量props
         * 暂时不支持的先通过注释隐藏
         */
        propName: {
          /**
           * 默认 propName
           */
          title: '',
          /**
           * 仅枚举值时需要添加,默认空数组
           * 默认值是数组第一个
           *
           */
          enum: ['default', 'primary', 'success', 'warning', 'danger'],
          /**
           * 默认 string
           *
           */
          type: 'string',
          /**
           *  是否可选,默认true
           */
          option: true,
          /**
           * 根据 enum 或者 type 生成
           * textinput / switch / color / 下拉框 / date / function 等
           */
          valueType: '',
          /**
           * 属性默认值  enum: enum[0] / string: '' / number: 0 / boolean: false
           *
           */
          default: ''
        }
      },
      events: {
        eventName: (event) => {}
      },
      /**
       * 仅 vue 组件库
       */
      slots: {
        slotName: {}
      }
    }
  }
];

const componentList = {
  badge: {
    title: 'Badge 徽标',
    description: '在右上角展示徽标数字或小红点。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'badge',
      children: true,
      props: {
        content: {
          default: '0'
        },
        color: {
          default: '#ee0a24'
        },
        dot: {
          type: 'boolean',
          default: false
        },
        max: { type: 'number' },
        offset: {
          type: 'number'
        },
        'show-zero': { type: 'boolean', default: true },
        position: {
          enum: ['top-right', 'top-left', 'bottom-left', 'bottom-right']
        }
      },
      events: {},
      slots: {
        default: {},
        content: {}
      }
    }
  },
  button: {
    title: 'Button 按钮',
    description: '按钮用于触发一个操作，如提交表单。',
    path: '/button/Button.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'button',
      children: true,
      props: {
        type: {
          enum: ['default', 'primary', 'success', 'warning', 'danger']
        },
        size: {
          enum: ['normal', 'large', 'small', 'mini']
        },
        text: {
          default: '按钮'
        },
        color: {
          type: 'color'
        },
        icon: {},
        'icon-prefix': {},
        'icon-position': {
          enum: ['left', 'right']
        },
        // "tag":{

        // },
        // 'native-type':{

        // },
        block: {
          type: 'boolean'
        },
        plain: {
          type: 'boolean'
        },
        square: {
          type: 'boolean'
        },
        round: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        hairline: {
          type: 'boolean'
        },
        loading: {
          type: 'boolean'
        },
        'loading-text': {},
        // 'loading-type':{

        // },
        'loading-size': {
          type: 'number'
        },
        url: {},
        to: {},
        replace: {
          type: 'boolean'
        }
      },
      events: {
        touchstart: (event) => {},
        click: (event) => {}
      },
      slots: {
        default: {},
        icon: {},
        loading: {}
      }
      // map: component,
    }
  },
  cell: {
    title: 'Cell 单元格',
    description: '单元格为列表中的单个展示项。',
    path: '/cell/Cell.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'cell',
      children: true,
      props: {
        title: {
          default: '单元格'
        },
        value: {
          default: '内容'
        },
        label: {},
        size: {},
        icon: {},
        'icon-prefix': {},
        tag: {},
        url: {},
        to: {},
        border: {
          type: 'boolean',
          default: true
        },
        replace: { type: 'boolean' },
        clickable: { type: 'boolean' },
        'is-link': { type: 'boolean' },
        required: { type: 'boolean' },
        center: { type: 'boolean' },
        'arrow-direction': {
          enum: ['right', 'left', 'up', 'down']
        },
        'title-style': {},
        'title-class': {},
        'value-class': {},
        'label-class': {}
      },
      events: {
        click: (event) => {}
      },
      slots: {
        title: {},
        value: {},
        label: {},
        icon: {},
        'right-icon': {},
        extra: {}
      }
    }
  },
  CellGroup: {
    title: 'Cell 单元组',
    description: '单元格为列表中的单个展示项。',
    path: '/cell/Cell.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'CellGroup',
      children: true,
      props: {
        title: {},
        insert: { type: 'boolean' },
        border: {
          type: 'boolean',
          default: true
        }
      },
      events: {
        click: (event) => {}
      },
      slots: {
        title: {},
        default: {}
      }
    }
  },
  image: {
    title: 'Image 图片',
    description: '增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。',
    path: '/image/Image.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'Image',
      children: true,
      props: {
        src: {},
        fit: {
          enum: ['fit', 'contain', 'cover', 'none', 'scale-down']
        },
        position: {},
        alt: {},
        width: {
          type: 'number'
        },
        height: { type: 'number' },
        radius: { type: 'number', default: 0 },
        round: { type: 'boolean' },
        block: { type: 'boolean' },
        'lazy-load': { type: 'boolean' },
        'show-error': { type: 'boolean', default: true },
        'show-loading': { type: 'boolean', default: true },
        'error-icon': {},
        'loading-icon': {},
        'icon-size': { type: 'number' },
        'icon-prefix': {}
      },
      events: {
        click: (event) => {},
        load: () => {},
        error: () => {}
      },
      slots: {
        loading: {},
        default: {},
        error: {}
      }
    }
  },
  row: {
    title: 'Row 布局',
    description: 'Layout 提供了 van-row 和 van-col 两个组件来进行行列布局。',
    path: '/image/Image.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'row',
      children: true,
      props: {
        gutter: { type: 'number' },
        tag: {
          default: 'div'
        },
        justify: {
          enum: ['start', 'end', 'center', 'space-around', 'space-between']
        },
        align: {
          enum: ['top', 'center', 'bottom']
        },
        wrap: {
          type: 'boolean',
          default: true
        }
      },
      events: {
        click: (event) => {}
      },
      slots: {}
    }
  },
  col: {
    title: 'Col 布局',
    description: 'Layout 提供了 van-row 和 van-col 两个组件来进行行列布局。',
    path: '/image/Image.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'col',
      children: true,
      props: {
        span: { type: 'number' },
        offset: { type: 'number' },
        tag: { default: 'div' }
      },
      events: {
        click: (event) => {}
      },
      slots: {}
    }
  },
  popup: {
    title: 'Popup 弹出层',
    description: '弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。',
    path: '/popup/Popup.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'popup',
      children: true,
      props: {
        // 'v-Model:show': {type: 'boolean'},
        overlay: {
          default: true
        },
        position: {
          enum: ['top', 'bottom', 'right', 'left']
        },
        'overlay-class': {},
        'overlay-style': { type: 'object' },
        'show-zero': { type: 'boolean' },
        duration: { type: 'number', default: 0.3 },
        'z-index': { type: 'number', default: 2048 },
        round: { type: 'boolean' },
        'lock-scroll': { type: 'boolean', default: true },
        'lazy-render': { type: 'boolean', default: true },
        'close-on-popstate': { type: 'boolean' },
        'close-on-click-overlay': { type: 'boolean', default: true },
        closeable: { type: 'boolean' },
        'close-icon': { type: 'string' },
        'close-icon-position': { type: 'string' },
        transition: { type: 'string' },
        'transition-appear': { type: 'boolean' },
        teleport: { type: 'string' },
        'safe-area-inset-top': { type: 'boolean' },
        'safe-area-inset-bottom': { type: 'boolean' }
      },
      events: {
        click: (event) => {},
        'click-overlay': (event) => {},
        'click-close-icon': (event) => {},
        open: () => {},
        close: () => {},
        opened: () => {},
        closed: () => {}
      },
      slots: {
        default: {},
        content: {}
      }
    }
  },
  toast: {
    title: 'Toast 轻提示',
    description: '在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。',
    path: '/toast/Toast.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'toast',
      children: true,
      props: {
        // 'v-model:show': { type: 'boolean' },
      },
      events: {
        click: (event) => {}
      },
      slots: {}
    }
  },
  icon: {
    title: 'Icon 图标',
    description: '在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。',
    path: '/toast/Toast.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'icon',
      children: true,
      props: {
        name: {},
        dot: {
          type: 'boolean'
        },
        info: {},
        color: {
          type: 'color'
        },
        size: {},
        'custom-style': {},
        'class-prefix': {}
      },
      events: {
        'bind:click': (event) => {}
      },
      slots: {}
    }
  },
  cascader: {
    title: 'Cascader 级联选择',
    description: '级联选择框，用于多层级数据的选择，典型场景为省市区选择。',
    path: '/date-picker/Cascader.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'checkbox',
      children: true,
      props: {
        title: {
          type: 'string'
        },
        value: {
          type: 'string'
        },
        options: {},
        placeholder: {
          type: 'string',
          default: '请选择'
        },
        'active-color': {
          type: 'string'
        },
        swipeable: {
          type: 'boolean'
        },
        closeable: {
          type: 'boolean',
          default: true
        },
        'show-header': {
          type: 'boolean',
          default: true
        },
        'close-icon': {
          default: 'cross'
        }
        // 'field-names': {
        // 		type: 'CascaderFieldNames'
        // }
      },
      events: {
        change: (checked) => {},
        finish: (event) => {},
        close: () => {},
        'click-tab': (event) => {}
      },
      slots: {
        title: {},
        optionicon: {},
        'options-top': {},
        'options-bottom': {}
      }
    }
  },
  checkbox: {
    title: 'Checkbox 复选框',
    description: '在一组备选项中进行多选。',
    path: '/checkbox/Checkbox.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'checkbox',
      children: true,
      props: {
        // 'v-model': {
        //     type: 'boolean'
        // },
        name: {
          // type: 'any'
        },
        shape: {
          enum: ['round', 'square']
        },
        disabled: {
          type: 'boolean'
        },
        'label-disabled': {
          type: 'boolean'
        },
        'label-position': {
          enum: ['right', 'left']
        },
        'icon-size': {
          type: 'number'
        },
        'checked-color': {
          type: 'string'
        },
        'bind-group': {
          type: 'boolean',
          default: true
        }
      },
      events: {
        change: (checked) => {},
        click: (event) => {}
      },
      slots: {
        default: {},
        icon: {}
      }
    }
  },
  checkboxGroup: {
    title: 'CheckboxGroup 复选框',
    description: '复选框容器',
    path: '/checkbox-group/CheckboxGroup.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'checkboxGroup',
      children: true,
      props: {
        // 'v-model': {
        //     type: 'boolean'
        // },
        disabled: {
          type: 'boolean'
        },
        max: {
          type: 'number'
        },
        direction: {
          enum: ['vertical', 'horizontal']
        },
        'icon-size': {
          type: 'number'
        },
        'checked-color': {
          type: 'string'
        }
      },
      events: {
        change: (names) => {}
      },
      slots: {}
    }
  },
  radio: {
    title: 'Radio 单选框',
    description: '在一组备选项中进行多选。',
    path: '/radio/radio.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'radio',
      children: true,
      props: {
        name: {
          // type: 'any'
        },
        shape: {
          enum: ['round', 'square']
        },
        disabled: {
          type: 'boolean'
        },
        'label-disabled': {
          type: 'boolean'
        },
        'label-position': {
          enum: ['right', 'left']
        },
        'icon-size': {
          type: 'number'
        },
        'checked-color': {
          type: 'string',
          default: '#1989fa'
        }
      },
      events: {
        click: (event) => {}
      },
      slots: {
        default: {},
        icon: {}
      }
    }
  },
  radioGroup: {
    title: 'RadioGroup 单选组',
    description: '复选框容器',
    path: '/radioGroup/radioGroup.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'radioGroup',
      children: true,
      props: {
        // 'v-model': {
        //     type: 'boolean'
        // },
        disabled: {
          type: 'boolean'
        },
        direction: {
          enum: ['vertical', 'horizontal']
        },
        'icon-size': {
          type: 'number'
        },
        'checked-color': {
          type: 'string',
          default: '#1989fa'
        }
      },
      events: {
        change: (names) => {}
      },
      slots: {}
    }
  },
  datePicker: {
    title: 'DatePicker 日期选择',
    description: '日期选择器，用于选择年、月、日，通常与弹出层组件配合使用。',
    path: '/date-picker/DatePicker.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'datePicker',
      children: true,
      props: {
        // 'v-model': {
        //     type: 'boolean'
        // },
        'columns-type': {
          //选项类型，由 year、month 和 day 组成的数组	string[]	['year', 'month', 'day']
        },
        'min-date': {
          type: 'date'
        },
        'min-date': {
          type: 'date'
        },
        title: {
          default: 'title'
        },
        'confirm-button-text': {
          default: '确认'
        },
        'cancel-button-text': {
          default: '取消'
        },
        'show-toolbar': {
          type: 'boolean',
          default: true
        },
        loading: {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        filter: {
          type: 'function'
        },
        formatter: {
          type: 'function'
        },
        'option-height': {
          type: 'number',
          default: 44
        },
        'visible-option-num': {
          type: 'number',
          default: 6
        }
      },
      events: {
        change: () => {},
        confirm: () => {},
        cancel: () => {}
      },
      slots: {}
    }
  },
  field: {
    title: 'Field 输入框',
    description: '用户可以在文本框内输入或编辑文字。',
    path: '/field/Field.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'field',
      children: true,
      props: {
        // 'v-model': {
        //     type: 'string'
        // },
        label: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        id: {
          type: 'string'
        },
        type: {
          type: 'FieldType'
        },
        size: {
          type: 'string'
        },
        maxlength: {
          type: 'number'
        },
        placeholder: {
          default: '请输入'
        },
        border: {
          type: 'boolean',
          default: true
        },
        disabled: {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        colon: {
          type: 'boolean'
        },
        required: {
          type: 'boolean'
        },
        center: {
          type: 'boolean'
        },
        clearable: {
          type: 'boolean'
        },
        'clear-icon': {
          type: 'string'
        },
        clickable: {
          type: 'boolean'
        },
        'is-link': {
          type: 'boolean'
        },
        autofocus: {
          type: 'boolean'
        },
        'show-word-limit': {
          type: 'boolean'
        },
        error: {
          type: 'boolean'
        },
        'error-message': {
          type: 'string'
        },
        'arrow-direction': {
          type: 'string'
        },
        'label-class': {
          type: 'string'
        },
        'label-width': {
          type: 'number'
        },
        'left-icon': {
          type: 'string'
        },
        'right-icon': {
          type: 'string'
        },
        'icon-prefix': {
          type: 'string'
        },
        autocomplete: {
          type: 'string'
        },
        enterkeyhint: {
          type: 'string'
        }
      },
      events: {
        'update:model-value': (value) => {},
        focus: (event) => {},
        blur: (event) => {},
        clear: (event) => {},
        click: (event) => {},
        'click-input': (event) => {},
        'click-left-icon': (event) => {},
        'click-right-icon': (event) => {},
        'start-validate': () => {},
        'end-validate': () => {}
      },
      slots: {}
    }
  },
  form: {
    title: 'Form 表单',
    description: '用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 Field 输入框 组件搭配使用。',
    path: '/form/Form.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'form',
      children: true,
      props: {
        'label-width': {
          type: 'number'
        },
        'label-align': {
          enum: ['left', 'center', 'right', 'top']
        },
        'input-align': {
          enum: ['left', 'center', 'right']
        },
        'error-message-align': {
          enum: ['left', 'center', 'right']
        },
        'validate-trigger': {
          enum: ['onBlur', 'onChange', 'onSubmit']
        },
        colon: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        'validate-first': {
          type: 'boolean'
        },
        'scroll-to-error': {
          type: 'boolean'
        },
        'show-error': {
          type: 'boolean'
        },
        'show-error-message': {
          type: 'boolean',
          default: true
        },
        'submit-on-enter': {
          type: 'boolean',
          default: true
        }
      },
      events: {
        submit: (values) => {},
        failed: () => {}
      },
      slots: {}
    }
  },
  picker: {
    title: 'Picker 选择器',
    description: '提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 弹出层 组件配合使用',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'picker',
      children: true,
      props: {
        columns: {
          type: 'array'
        },
        'show-toolbar': {
          type: 'boolean'
        },
        'toolbar-position': {
          enum: ['top', 'bottom']
        },
        title: { default: 'title' },
        loading: {
          type: 'boolean'
        },
        'value-key': {},
        'item-height': {
          type: 'number',
          default: 44
        },
        'confirm-button-text': {
          default: '确认'
        },
        'cancel-button-text': {
          default: '取消'
        },
        'visible-item-count': {
          type: 'number',
          default: 6
        },
        'default-index': {
          type: 'number',
          default: 0
        }
      },
      events: {
        confirm: () => {},
        cancel: () => {},
        change: () => {}
      },
      slots: {}
    }
  },
  rate: {
    title: 'Rate 评分',
    description: '用于对事物进行评级操作。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'rate',
      children: true,
      props: {
        name: {},
        value: {
          type: 'number'
        },
        count: {
          type: 'number',
          default: 5
        },
        size: { type: 'number' },
        gutter: {
          type: 'number'
        },
        color: { type: 'color' },
        'void-color': {
          type: 'color'
        },
        icon: {},
        'void-icon': {},
        'allow-half': {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        'disabled-color': {
          type: 'color'
        },
        touchable: {
          type: 'boolean',
          default: true
        }
      },
      events: {
        change: () => {}
      },
      slots: {}
    }
  },
  slider: {
    title: 'Slider 滑块',
    description: '滑动输入条，用于在给定的范围内选择一个值。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'slider',
      children: true,
      props: {
        value: {
          type: 'number'
        },
        disabled: { type: 'boolean' },
        max: { type: 'number', default: 100 },
        min: { type: 'number', default: 0 },
        step: { type: 'number', default: 1 },
        'bar-height': {
          type: 'number'
        },
        'active-color': { type: 'color' },
        'inactive-color': {
          type: 'color'
        },
        'use-slot-button': {
          type: 'boolean'
        },
        range: { type: 'boolean' },
        vertical: { type: 'boolean' }
      },
      events: {
        drag: () => {},
        change: () => {},
        'drag-start': () => {},
        'drag-end': () => {}
      },
      slots: {}
    }
  },
  stepper: {
    title: 'Stepper 步进器',
    description: '步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'stepper',
      children: true,
      props: {
        name: {},
        value: { type: 'number' },
        min: { type: 'number' },
        max: { type: 'number' },
        step: { type: 'number' },
        integer: {
          type: 'boolean'
        },
        disabled: { type: 'boolean' },
        'disable-input': { type: 'boolean' },
        'async-change': {
          type: 'boolean'
        },
        'input-width': {
          type: 'number'
        },
        'button-size': {},
        'show-plus': {
          type: 'boolean',
          default: true
        },
        'show-minus': {
          type: 'boolean',
          default: true
        },
        'decimal-length': {
          type: 'number'
        },
        theme: {},
        'disable-plus': {
          type: 'boolean'
        },
        'disable-minus': {
          type: 'boolean'
        },
        'long-press': {
          type: 'boolean',
          default: true
        },
        'always-embed': {
          type: 'boolean'
        }
      },
      events: {
        'bind:change': () => {},
        'bind:overlimit': () => {},
        'bind:plus': () => {},
        'bind:minus': () => {},
        'bind:focus': () => {},
        'bind:blur': () => {}
      },
      slots: {}
    }
  },
  noticeBar: {
    title: 'NoticeBar 通知栏',
    description: '用于循环播放展示一组消息通知。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'noticeBar',
      children: true,
      props: {
        mode: {
          enum: ['string', 'closeable', 'link']
        },
        text: {
          default: '用于循环播放展示一组消息通知。'
        },
        color: {
          type: 'color'
        },
        background: {
          type: 'color'
        },
        'left-icon': {},
        delay: {
          type: 'number',
          default: 1
        },
        speed: {
          type: 'number',
          default: 60
        },
        scrollable: {
          type: 'boolean'
        },
        wrapable: {
          type: 'boolean'
        },
        'open-type': {
          default: 'navigate'
        }
      },
      events: {
        'bind:click': () => {},
        'bind:close': () => {}
      },
      slots: {
        'left-icon': {},
        'right-icon': {}
      }
    }
  },
  swipeCell: {
    title: 'SwipeCell 滑动单元格',
    description: '可以左右滑动来展示操作按钮的单元格组件。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'swipeCell',
      children: true,
      props: {
        name: {},
        'left-width': { type: 'number' },
        'right-width': { type: 'number' },
        'async-close': { type: 'boolean' },
        disabled: {
          type: 'boolean'
        }
      },
      events: {
        'bind:click': () => {},
        'bind:close': () => {},
        'bind:open': () => {}
      },
      slots: {
        left: {},
        right: {}
      }
    }
  },
  circle: {
    title: 'Circle 环形进度条',
    description: '圆环形的进度条组件，支持进度渐变动画。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'circle',
      children: true,
      props: {
        value: {
          type: 'number',
          default: 0
        },
        type: {},
        size: {
          type: 'number',
          default: 100
        },
        color: {
          type: 'color'
        },
        'layer-color': {
          type: 'color'
        },
        fill: {},
        speed: {
          type: 'number',
          default: 50
        },
        text: {},
        'stroke-width': {
          type: 'number',
          default: 4
        },
        clockwise: {
          type: 'boolean'
        }
      },
      events: {},
      slots: {}
    }
  },
  countDown: {
    title: 'CountDown 倒计时',
    description: '用于实时展示倒计时数值，支持毫秒精度。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'countDown',
      children: true,
      props: {
        time: {
          type: 'number',
          default: 1000 * 60
        },
        format: {},
        'auto-start': { type: 'boolean', default: true },
        millisecond: { type: 'boolean' },
        'use-slot': { type: 'boolean' }
      },
      events: {
        'bind:finish': () => {},
        'bind:change': () => {}
      },
      slots: {}
    }
  },
  progress: {
    title: 'Progress 进度条',
    description: '用于展示操作的当前进度。',
    path: '/badge/Badge.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'progress',
      children: true,
      props: {
        inactive: {
          type: 'boolean'
        },
        percentage: {
          type: 'number',
          default: 0
        },
        'stroke-width': {
          type: 'number',
          default: 4
        },
        'show-pivot': {
          type: 'boolean',
          default: true
        },
        color: {
          type: 'color'
        },
        'text-color': {
          type: 'color'
        },
        'track-color': {
          type: 'color'
        },
        'pivot-text': {},
        'pivot-color': {
          type: 'color'
        }
      },
      events: {},
      slots: {}
    }
  }
};

module.exports = componentList;
