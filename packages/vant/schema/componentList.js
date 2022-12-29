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
        content: {},
        color: {},
        dot: {
          type: 'boolean'
        },
        max: { type: 'number' },
        offset: {
          type: 'number'
        },
        'show-zero': { type: 'boolean' },
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
        text: {},
        color: {
          // type: 'color'
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
        title: {},
        value: {},
        label: {},
        size: {},
        icon: {},
        'icon-prefix': {},
        tag: {},
        url: {},
        to: {},
        border: {
          type: 'boolean'
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
    title: 'Cell 单元格组',
    description: '单元格组',
    path: '/cell/CellGroup.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'CellGroup',
      children: true,
      props: {
        title: {},
        insert: { type: 'boolean' },
        border: {
          type: 'boolean'
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
        radius: { type: 'number' },
        round: { type: 'boolean' },
        block: { type: 'boolean' },
        'lazy-load': { type: 'boolean' },
        'show-error': { type: 'boolean' },
        'show-loading': { type: 'boolean' },
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
    title: 'Layout 布局',
    description: 'Layout 提供了 van-row 和 van-col 两个组件来进行行列布局。',
    path: '/row/Row.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'row',
      children: true,
      props: {
        gutter: { type: 'number' },
        tag: {},
        justify: {
          enum: ['start', 'end', 'center', 'space-around', 'space-between']
        },
        align: {
          enum: ['top', 'center', 'bottom']
        },
        wrap: {
          type: 'boolean'
        }
      },
      events: {
        click: (event) => {}
      },
      slots: {}
    }
  },
  col: {
    title: 'Layout 布局',
    description: 'Layout 提供了 van-row 和 van-col 两个组件来进行行列布局。',
    path: '/col/Col.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
      key: 'col',
      children: true,
      props: {
        span: { type: 'number' },
        offset: { type: 'number' },
        tag: {}
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
        overlay: {},
        position: {
          enum: ['top', 'bottom', 'right', 'left']
        },
        'overlay-class': {},
        'overlay-style': { type: 'object' },
        'show-zero': { type: 'boolean' },
        duration: { type: 'number' },
        'z-index': { type: 'number' },
        round: { type: 'boolean' },
        'lock-scroll': { type: 'boolean' },
        'lazy-render': { type: 'boolean' },
        'close-on-popstate': { type: 'boolean' },
        'close-on-click-overlay': { type: 'boolean' },
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
      props: {},
      events: {
        click: (event) => {}
      },
      slots: {}
    }
  },

  // // 表单组件
  // calendar: {
  //     title: 'Calendar 日历',
  //     description: '日历组件用于选择日期或日期区间。',
  //     path: '/calendar/Calendar.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
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
          type: 'string'
        },
        'active-color': {
          type: 'string'
        },
        swipeable: {
          type: 'boolean'
        },
        closeable: {
          type: 'boolean'
        },
        'show-header': {
          type: 'boolean'
        },
        'close-icon': {
          type: 'boolean'
        },
        'field-names': {
          type: 'CascaderFieldNames'
        }
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
          type: 'boolean'
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
    title: 'radio 单选框',
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
          type: 'string'
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
    title: 'radioGroup 单选框',
    description: '单选框容器',
    path: '/radioGroup/radioGroup.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'radioGroup',
      children: true,
      props: {
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
          type: 'string'
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
        'columns-type': {
          type: 'string'
        },
        'min-date': {
          type: 'string'
        },
        'max-date': {
          type: 'number'
        },
        title: {
          type: 'string'
        },
        'confirm-button-text': {
          type: 'string'
        },
        'confirm-button-text': {
          type: 'string'
        },
        'cancel-button-text': {
          type: 'string'
        },
        'show-toolbar': {
          type: 'boolean'
        },
        loading: {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        loading: {
          type: 'boolean'
        },
        'option-height': {
          type: 'string'
        },
        'visible-option-num': {
          type: 'string'
        },
        'swipe-duration': {
          type: 'string'
        }
      },
      events: {
        confirm: (names) => {},
        cancel: (names) => {},
        change: (names) => {}
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
          type: 'number'
        },
        border: {
          type: 'boolean'
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
          type: 'string'
        },
        'input-align': {
          type: 'string'
        },
        'error-message-align': {
          type: 'string'
        },
        'validate-trigger': {
          type: 'string'
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
          type: 'boolean'
        },
        'submit-on-enter': {
          type: 'boolean'
        }
      },
      events: {
        submit: (values) => {},
        failed: () => {}
      },
      slots: {}
    }
  },
  numberKeyboard: {
    title: 'NumberKeyboard 数字键盘',
    description: '虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。',
    path: '/number-keyboard/NumberKeyboard.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'numberKeyboard',
      children: true,
      props: {
        show: {
          type: 'boolean'
        },
        title: {
          type: 'string'
        },
        theme: {
          type: 'string'
        },
        maxlength: {
          type: 'number'
        },
        transition: {
          type: 'boolean'
        },
        'z-index': {
          type: 'number'
        },
        'extra-key': {
          type: 'string'
        },
        'close-button-text': {
          type: 'string'
        },
        'close-button-loading': {
          type: 'boolean'
        },
        'show-delete-key': {
          type: 'boolean'
        },
        'blur-on-close': {
          type: 'boolean'
        },
        'hide-on-click-outside': {
          type: 'boolean'
        },
        teleport: {
          type: 'string'
        },
        'safe-area-inset-bottom': {
          type: 'boolean'
        },
        'random-key-order': {
          type: 'boolean'
        }
      },
      events: {
        input: () => {},
        delete: () => {},
        close: () => {},
        blur: () => {},
        show: () => {},
        hide: () => {}
      },
      slots: {}
    }
  },
  passwordInput: {
    title: 'PasswordInput 密码输入框',
    description: '带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。',
    path: '/password-input/PasswordInput.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        value: {
          type: 'string'
        },
        info: {
          type: 'string'
        },
        'error-info': {
          type: 'string'
        },
        length: {
          type: 'number'
        },
        gutter: {
          type: 'number'
        },
        mask: {
          type: 'boolean'
        },
        focused: {
          type: 'boolean'
        }
      },
      events: {
        focus: () => {}
      },
      slots: {}
    }
  },
  picker: {
    title: 'Picker 选择器',
    description: '提供多个选项集合供用户选择，支持单列选择、多列选择和级联选择，通常与弹出层组件配合使用。',
    path: '/picker/Picker.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        columns: {
          type: 'PickerOption[]'
        },
        'columns-field-names': {
          type: 'object'
        },
        title: {
          type: 'string'
        },
        'confirm-button-text': {
          type: 'string'
        },
        'cancel-button-text': {
          type: 'string'
        },
        'toolbar-position': {
          type: 'string'
        },
        loading: {
          type: 'boolean'
        },
        'show-toolbar': {
          type: 'boolean'
        },
        'allow-html': {
          type: 'boolean'
        },
        'option-height': {
          type: 'number'
        },
        'visible-option-num': {
          type: 'number'
        },
        'swipe-duration': {
          type: 'number'
        }
      },
      events: {
        confirm: () => {},
        cancel: () => {},
        change: () => {},
        'click-option': () => {}
      },
      slots: {}
    }
  },
  pickerGroup: {
    title: 'PickerGroup 选择器组',
    description: '用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。',
    path: '/picker-group/PickerGroup.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        title: {
          type: 'string'
        },
        'confirm-button-text': {
          type: 'string'
        },
        'cancel-button-text': {
          type: 'string'
        }
      },
      events: {
        toolbar: () => {},
        title: () => {},
        confirm: () => {},
        cancel: () => {}
      },
      slots: {}
    }
  },
  radio: {
    title: 'Radio 单选框',
    description: '在一组备选项中进行单选。',
    path: '/radio/Radio.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        name: {
          type: 'any'
        },
        shape: {
          type: 'string'
        },
        disabled: {
          type: 'boolean'
        },
        'label-disabled': {
          type: 'boolean'
        },
        'label-position': {
          type: 'string'
        },
        'icon-size': {
          type: 'number'
        },
        'checked-color': {
          type: 'string'
        }
      },
      events: {
        click: () => {}
      },
      slots: {}
    }
  },
  rate: {
    title: 'Rate 评分',
    description: '用于对事物进行评级操作。',
    path: '/rate/Rate.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        count: {
          type: 'number'
        },
        size: {
          type: 'number'
        },
        gutter: {
          type: 'number'
        },
        color: {
          type: 'string'
        },
        'void-color': {
          type: 'string'
        },
        'disabled-color': {
          type: 'string'
        },
        icon: {
          type: 'string'
        },
        'void-icon': {
          type: 'string'
        },
        'icon-prefix': {
          type: 'string'
        },
        'allow-half': {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        touchable: {
          type: 'boolean'
        }
      },
      events: {
        change: () => {}
      },
      slots: {}
    }
  },
  search: {
    title: 'Search 搜索',
    description: '用于搜索场景的输入框组件。',
    path: '/search/Search.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        label: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        shape: {
          type: 'string'
        },
        id: {
          type: 'string'
        },
        background: {
          type: 'string'
        },
        maxlength: {
          type: 'number'
        },
        placeholder: {
          type: 'string'
        },
        clearable: {
          type: 'boolean'
        },
        'clear-icon': {
          type: 'string'
        },
        'clear-trigger': {
          type: 'string'
        },
        autofocus: {
          type: 'boolean'
        },
        'show-action': {
          type: 'boolean'
        },
        'action-text': {
          type: 'string'
        },
        disabled: {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        error: {
          type: 'boolean'
        },
        'error-message': {
          type: 'string'
        },
        'input-align': {
          type: 'string'
        },
        'left-icon': {
          type: 'string'
        },
        'right-icon': {
          type: 'string'
        },
        autocomplete: {
          type: 'string'
        }
      },
      events: {
        search: () => {},
        'update:model-value': () => {},
        focus: () => {},
        blur: () => {},
        'click-input': () => {},
        clear: () => {},
        cancel: () => {}
      },
      slots: {}
    }
  },
  slider: {
    title: 'Slider 滑块',
    description: '滑动输入条，用于在给定的范围内选择一个值。',
    path: '/slider/Slider.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        max: {
          type: 'number'
        },
        min: {
          type: 'number'
        },
        step: {
          type: 'number'
        },
        'bar-height': {
          type: 'number'
        },
        'button-size': {
          type: 'number'
        },
        'active-color': {
          type: 'string'
        },
        'inactive-color': {
          type: 'string'
        },
        range: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        vertical: {
          type: 'boolean'
        }
      },
      events: {
        'update:model-value': () => {},
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
    path: '/stepper/Stepper.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'stepper',
      children: true,
      props: {
        max: {
          type: 'string'
        },
        min: {
          type: 'string'
        },
        'auto-fixed': {
          type: 'boolean'
        },
        'default-value': {
          type: 'string'
        },
        step: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        'input-width': {
          type: 'string'
        },
        'button-size': {
          type: 'string'
        },
        'decimal-length': {
          type: 'string'
        },
        theme: {
          type: 'string'
        },
        placeholder: {
          type: 'string'
        },
        integer: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        'disable-plus': {
          type: 'boolean'
        },
        'disable-input': {
          type: 'boolean'
        },
        'before-change': {
          type: 'boolean'
        },
        'show-plus': {
          type: 'boolean'
        },
        'show-minus': {
          type: 'boolean'
        },
        'show-input': {
          type: 'boolean'
        },
        'long-press': {
          type: 'boolean'
        },
        'allow-empty': {
          type: 'boolean'
        }
      },
      events: {
        change: () => {},
        overlimit: () => {},
        focus: () => {},
        blur: () => {}
      },
      slots: {}
    }
  },
  // switch: {
  //     title: 'Switch 开关',
  //     description: '用于在打开和关闭状态之间进行切换。',
  //     path: '/switch/Switch.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  timePicker: {
    title: 'TimePicker 时间选择',
    description: '时间选择器，通常与弹出层组件配合使用。',
    path: '/time-picker/TimePicker.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        'columns-type': {
          type: 'string'
        },
        'min-hour': {
          type: 'number'
        },
        'max-hour': {
          type: 'number'
        },
        'min-minute': {
          type: 'number'
        },
        'max-minute': {
          type: 'number'
        },
        'min-second': {
          type: 'number'
        },
        'max-second': {
          type: 'number'
        },
        title: {
          type: 'string'
        },
        'confirm-button-text': {
          type: 'string'
        },
        'cancel-button-text': {
          type: 'string'
        },
        'show-toolbar': {
          type: 'boolean'
        },
        loading: {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        'option-height': {
          type: 'number'
        },
        'visible-option-num': {
          type: 'number'
        },
        'swipe-duration': {
          type: 'number'
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
  uploader: {
    title: 'Uploader 文件上传',
    description:
      '用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。',
    path: '/uploader/Uploader.tsx',
    groupKey: 'Form Components',
    groupName: '表单组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        accept: {
          type: 'string'
        },
        name: {
          type: 'number'
        },
        'preview-size': {
          type: 'number'
        },
        'preview-image': {
          type: 'number'
        },
        'preview-full-image': {
          type: 'number'
        },
        'preview-options': {
          type: 'object'
        },
        multiple: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        deletable: {
          type: 'boolean'
        },
        'show-upload': {
          type: 'boolean'
        },
        'lazy-load': {
          type: 'boolean'
        },
        capture: {
          type: 'string'
        },
        'max-size': {
          type: 'number'
        },
        'max-count': {
          type: 'number'
        },
        'result-type': {
          type: 'string'
        },
        'upload-text': {
          type: 'string'
        },
        'image-fit': {
          type: 'string'
        },
        'upload-icon': {
          type: 'string'
        }
      },
      events: {
        oversize: () => {},
        'click-upload': () => {},
        'click-preview': () => {},
        'close-preview': () => {},
        delete: () => {}
      },
      slots: {}
    }
  },
  // 反馈组件
  actionSheet: {
    title: 'ActionSheet 动作面板',
    description: '底部弹起的模态面板，包含与当前情境相关的多个选项。',
    path: '/action-sheet/ActionSheet.tsx',
    groupKey: 'Action Components',
    groupName: '反馈组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        title: {
          type: 'string'
        },
        'cancel-text': {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        closeable: {
          type: 'boolean'
        },
        'close-icon': {
          type: 'string'
        },
        duration: {
          type: 'number'
        },
        'z-index': {
          type: 'number'
        },
        round: {
          type: 'boolean'
        },
        overlay: {
          type: 'boolean'
        },
        'overlay-class': {
          type: 'string'
        },
        'overlay-style': {
          type: 'string'
        },
        'lock-scroll': {
          type: 'boolean'
        },
        'lazy-render': {
          type: 'boolean'
        },
        'close-on-popstate': {
          type: 'boolean'
        },
        'close-on-click-action': {
          type: 'boolean'
        },
        'close-on-click-overlay': {
          type: 'boolean'
        },
        'safe-area-inset-bottom': {
          type: 'boolean'
        },
        teleport: {
          type: 'string'
        }
      },
      events: {
        select: () => {},
        cancel: () => {},
        open: () => {},
        close: () => {},
        opened: () => {},
        closed: () => {}
      },
      slots: {}
    }
  },
  //   dialog: {
  //       title: 'Dialog 弹出框',
  //       description: '弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。',
  //       path: '/dialog/Dialog.tsx',
  //       groupKey: 'Action Components',
  //       groupName: '反馈组件',
  //       schema: {
  // 				key: 'passwordInput',
  // 				children: true,
  // 				props: {
  // 					'title': {
  // 						type: 'string'
  // 					},
  // 					'cancel-text': {
  // 						type: 'string'
  // 					},
  // 					'description': {
  // 						type: 'string'
  // 					},
  // 					'closeable': {
  // 						type: 'boolean'
  // 					},
  // 					'close-icon': {
  // 						type: 'string'
  // 					},
  // 					'duration': {
  // 						type: 'number'
  // 					},
  // 					'z-index': {
  // 						type: 'number'
  // 					},
  // 					'round': {
  // 						type: 'boolean'
  // 					},
  // 					'overlay': {
  // 						type: 'boolean'
  // 					},
  // 					'overlay-class': {
  // 						type: 'string'
  // 					},
  // 					'overlay-style': {
  // 						type: 'string'
  // 					},
  // 					'lock-scroll': {
  // 						type: 'boolean'
  // 					},
  // 					'lazy-render': {
  // 						type: 'boolean'
  // 					},
  // 					'close-on-popstate': {
  // 						type: 'boolean'
  // 					},
  // 					'close-on-click-action': {
  // 						type: 'boolean'
  // 					},
  // 					'close-on-click-overlay': {
  // 						type: 'boolean'
  // 					},
  // 					'safe-area-inset-bottom': {
  // 						type: 'boolean'
  // 					},
  // 					'teleport': {
  // 						type: 'string'
  // 					}
  // 				},
  // 				events: {
  // 					'confirm': () => {},
  // 					'cancel': () => {},
  // 					'open': () => {},
  // 					'close': () => {},
  // 					'opened': () => {},
  // 					'closed': () => {}
  // 				},
  // 				slots: {}
  // 			}
  //   },
  // dropdownMenu: {
  //     title: 'DropdownMenu 下拉菜单',
  //     description: '向下弹出的菜单列表。',
  //     path: '/dropdown-menu/DropdownMenu.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  loading: {
    title: 'Loading 加载',
    description: '加载图标，用于表示加载中的过渡状态。',
    path: '/loading/Loading.tsx',
    groupKey: 'Action Components',
    groupName: '反馈组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        color: {
          type: 'string'
        },
        type: {
          type: 'string'
        },
        size: {
          type: 'number'
        },
        'text-size': {
          type: 'number'
        },
        'text-color': {
          type: 'string'
        },
        vertical: {
          type: 'boolean'
        }
      },
      events: {},
      slots: {}
    }
  },
  // notify: {
  //     title: 'Notify 消息提示',
  //     description: '在页面顶部展示消息提示，支持组件调用和函数调用两种方式。',
  //     path: '/notify/Notify.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  //   overlay: {
  //       title: 'Overlay 遮罩层',
  //       description: '创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。',
  //       path: '/overlay/Overlay.tsx',
  //       groupKey: 'Action Components',
  //       groupName: '反馈组件',
  //       schema: {
  // 				key: 'passwordInput',
  // 				children: true,
  // 				props: {
  // 					'show': {
  // 						type: 'boolean'
  // 					},
  // 					'z-index': {
  // 						type: 'number'
  // 					},
  // 					'duration': {
  // 						type: 'number'
  // 					},
  // 					'class-name': {
  // 						type: 'string'
  // 					},
  // 					'custom-style': {
  // 						type: 'boolean'
  // 					},
  // 					'lock-scroll': {
  // 						type: 'boolean'
  // 					},
  // 					'lazy-render': {
  // 						type: 'boolean'
  // 					},
  // 					'z-index': {
  // 						type: 'number'
  // 					},
  // 					'round': {
  // 						type: 'boolean'
  // 					},
  // 					'overlay': {
  // 						type: 'boolean'
  // 					},
  // 					'overlay-class': {
  // 						type: 'string'
  // 					},
  // 					'overlay-style': {
  // 						type: 'string'
  // 					},
  // 					'lock-scroll': {
  // 						type: 'boolean'
  // 					},
  // 					'lazy-render': {
  // 						type: 'boolean'
  // 					}
  // 				},
  // 				events: {},
  // 				slots: {}
  // 			}
  //   },
  pullRefresh: {
    title: 'PullRefresh 下拉刷新',
    description: '用于提供下拉刷新的交互操作。',
    path: '/pull-refresh/PullRefresh.tsx',
    groupKey: 'Action Components',
    groupName: '反馈组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        'pulling-text': {
          type: 'string'
        },
        'loosing-text': {
          type: 'string'
        },
        'loading-text': {
          type: 'string'
        },
        'success-text': {
          type: 'string'
        },
        'success-duration': {
          type: 'number'
        },
        'animation-duration': {
          type: 'number'
        },
        'head-height': {
          type: 'number'
        },
        disabled: {
          type: 'boolean'
        }
      },
      events: {
        refresh: () => {},
        change: () => {}
      },
      slots: {}
    }
  },
  shareSheet: {
    title: 'ShareSheet 分享面板',
    description: '底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。',
    path: '/shareSheet/ShareSheet.tsx',
    groupKey: 'Action Components',
    groupName: '反馈组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        title: {
          type: 'string'
        },
        'cancel-text': {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        duration: {
          type: 'number'
        },
        'z-index': {
          type: 'number'
        },
        round: {
          type: 'boolean'
        },
        overlay: {
          type: 'boolean'
        },
        'overlay-class': {
          type: 'string'
        },
        'lock-scroll': {
          type: 'boolean'
        },
        'lazy-render': {
          type: 'boolean'
        },
        'close-on-popstate': {
          type: 'boolean'
        },
        'close-on-click-overlay': {
          type: 'boolean'
        },
        'safe-area-inset-bottom': {
          type: 'boolean'
        },
        teleport: {
          type: 'string'
        }
      },
      events: {
        select: () => {},
        open: () => {},
        close: () => {},
        opened: () => {},
        closed: () => {},
        'click-overlay': () => {}
      },
      slots: {}
    }
  },
  swipeCell: {
    title: 'swipeCell 滑动单元格',
    description: '可以左右滑动来展示操作按钮的单元格组件。',
    path: '/swipe-cell/SwipeCell.tsx',
    groupKey: 'Action Components',
    groupName: '反馈组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        name: {
          type: 'number'
        },
        'left-width': {
          type: 'number'
        },
        'right-width': {
          type: 'number'
        },
        disabled: {
          type: 'boolean'
        },
        'stop-propagation': {
          type: 'boolean'
        }
      },
      events: {
        click: () => {},
        close: () => {},
        open: () => {}
      },
      slots: {}
    }
  },
  // 展示组件
  circle: {
    title: 'Circle 环形进度条',
    description: '圆环形的进度条组件，支持进度渐变动画。',
    path: '/circle/Circle.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        rate: {
          type: 'number'
        },
        size: {
          type: 'number'
        },
        color: {
          type: 'string'
        },
        'layer-color': {
          type: 'string'
        },
        fill: {
          type: 'string'
        },
        speed: {
          type: 'number'
        },
        text: {
          type: 'string'
        },
        'stroke-width': {
          type: 'number'
        },
        'stroke-linecap': {
          type: 'string'
        },
        clockwise: {
          type: 'boolean'
        }
      },
      events: {},
      slots: {}
    }
  },
  // collapse: {
  //     title: 'Collapse 折叠面板',
  //     description: '将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。',
  //     path: '/collapse/Collapse.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  countDown: {
    title: 'CountDown 倒计时',
    description: '将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。',
    path: '/count-down/CountDown.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        time: {
          type: 'number'
        },
        format: {
          type: 'string'
        },
        'auto-start': {
          type: 'boolean'
        },
        millisecond: {
          type: 'boolean'
        }
      },
      events: {
        finish: () => {},
        change: () => {}
      },
      slots: {}
    }
  },
  divider: {
    title: 'Divider 分割线',
    description: '用于将内容分隔为多个区域。',
    path: '/divider/Divider.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        dashed: {
          type: 'boolean'
        },
        hairline: {
          type: 'boolean'
        },
        'content-position': {
          type: 'string'
        }
      },
      events: {},
      slots: {}
    }
  },
  empty: {
    title: 'Empty 空状态',
    description: '空状态时的占位提示。',
    path: '/empty/Empty.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        image: {
          type: 'string'
        },
        'image-size': {
          type: 'number'
        },
        description: {
          type: 'string'
        }
      },
      events: {},
      slots: {}
    }
  },
  // imagePreview: {
  //     title: 'ImagePreview 图片预览',
  //     description: '图片放大预览，支持组件调用和函数调用两种方式。',
  //     path: '/image-preview/ImagePreview.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  lazyload: {
    title: 'Lazyload 懒加载',
    description: '当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。',
    path: '/lazyload/Lazyload.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        loading: {
          type: 'string'
        },
        error: {
          type: 'string'
        },
        preload: {
          type: 'string'
        },
        attempt: {
          type: 'number'
        },
        listenEvents: {
          type: 'string'
        },
        lazyComponent: {
          type: 'boolean'
        }
      },
      events: {},
      slots: {}
    }
  },
  list: {
    title: 'List 列表',
    description: '瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。',
    path: '/list/List.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        finished: {
          type: 'boolean'
        },
        offset: {
          type: 'number'
        },
        'loading-text': {
          type: 'string'
        },
        'finished-text': {
          type: 'string'
        },
        'error-text': {
          type: 'string'
        },
        'immediate-check': {
          type: 'string'
        },
        disabled: {
          type: 'boolean'
        },
        direction: {
          type: 'string'
        }
      },
      events: {
        load: () => {}
      },
      slots: {}
    }
  },
  noticeBar: {
    title: 'NoticeBar 通知栏',
    description: '用于循环播放展示一组消息通知。',
    path: '/notice-bar/NoticeBar.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        mode: {
          type: 'string'
        },
        text: {
          type: 'string'
        },
        color: {
          type: 'string'
        },
        background: {
          type: 'string'
        },
        'left-icon': {
          type: 'string'
        },
        delay: {
          type: 'number'
        },
        speed: {
          type: 'number'
        },
        scrollable: {
          type: 'boolean'
        },
        wrapable: {
          type: 'boolean'
        }
      },
      events: {
        click: () => {},
        replay: () => {},
        close: () => {}
      },
      slots: {}
    }
  },
  // popover: {
  //     title: 'Popover 气泡弹出框',
  //     description: '弹出式的气泡菜单。',
  //     path: '/popover/Popover.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  progress: {
    title: 'Progress 进度条',
    description: '弹出式的气泡菜单。',
    path: '/progress/Progress.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        percentage: {
          type: 'number'
        },
        'stroke-width': {
          type: 'number'
        },
        color: {
          type: 'string'
        },
        'track-color': {
          type: 'string'
        },
        'pivot-text': {
          type: 'string'
        },
        'pivot-color': {
          type: 'string'
        },
        'text-color': {
          type: 'string'
        },
        inactive: {
          type: 'boolean'
        },
        'show-pivot': {
          type: 'boolean'
        }
      },
      events: {},
      slots: {}
    }
  },
  // skeleton: {
  //     title: 'Skeleton 骨架屏',
  //     description: '弹出式的气泡菜单。',
  //     path: '/skeleton/Skeleton.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  steps: {
    title: 'Steps 步骤条组',
    description: '步骤条组',
    path: '/steps/Steps.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        active: {
          type: 'string'
        },
        direction: {
          type: 'string'
        },
        'active-icon': {
          type: 'string'
        },
        'inactive-icon': {
          type: 'string'
        },
        'inactive-icon': {
          type: 'string'
        },
        'finish-icon': {
          type: 'string'
        },
        'active-color': {
          type: 'string'
        },
        'inactive-color': {
          type: 'string'
        }
      },
      events: {
        'click-step': () => {}
      },
      slots: {}
    }
  },
  step: {
    title: 'Step 步骤条',
    description: '用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。',
    path: '/step/Step.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {},
      events: {},
      slots: {}
    }
  },
  sticky: {
    title: 'Sticky 粘性布局',
    description:
      'Sticky 组件与 CSS 中 position: sticky 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。',
    path: '/sticky/Sticky.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        position: {
          type: 'string'
        },
        'offset-top': {
          type: 'string'
        },
        'offset-bottom': {
          type: 'string'
        },
        'z-index': {
          type: 'number'
        }
      },
      events: {
        change: () => {},
        scroll: () => {}
      },
      slots: {}
    }
  },
  swipeItem: {
    title: 'swipeItem 子组件',
    description: 'swipeItem 子组件',
    path: '/swipe-item/SwipeItem.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'swipeItem',
      children: true,
      props: {},
      events: {
        click: () => {}
      },
      slots: {}
    }
  },
  tag: {
    title: 'Tag 标签',
    description: '用于标记关键词和概括主要内容。',
    path: '/tag/Tag.tsx',
    groupKey: 'Display Components',
    groupName: '展示组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        type: {
          type: 'string'
        },
        size: {
          type: 'string'
        },
        color: {
          type: 'string'
        },
        show: {
          type: 'boolean'
        },
        plain: {
          type: 'boolean'
        },
        round: {
          type: 'boolean'
        },
        mark: {
          type: 'boolean'
        },
        'text-color': {
          type: 'string'
        },
        closeable: {
          type: 'boolean'
        }
      },
      events: {
        click: () => {},
        close: () => {}
      },
      slots: {}
    }
  },

  // // 导航组件
  // actionBar: {
  //     title: 'ActionBar 动作栏',
  //     description: '用于为页面相关操作提供便捷交互。',
  //     path: '/action-bar/ActionBar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  // grid: {
  //     title: 'Grid 宫格',
  //     description: '宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。',
  //     path: '/grid/Grid.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  // indexBar: {
  //     title: 'IndexBar 索引栏',
  //     description: '用于列表的索引分类显示和快速定位。',
  //     path: '/index-bar/IndexBar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  navBar: {
    title: 'NavBar 导航栏',
    description: '为页面提供导航功能，常用于页面顶部。',
    path: '/nav-bar/NavBar.tsx',
    groupKey: 'Navigation Components',
    groupName: '导航组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        title: {
          type: 'string'
        },
        'left-text': {
          type: 'string'
        },
        'right-text': {
          type: 'string'
        },
        'left-arrow': {
          type: 'boolean'
        },
        border: {
          type: 'boolean'
        },
        fixed: {
          type: 'boolean'
        },
        placeholder: {
          type: 'boolean'
        },
        'z-index': {
          type: 'number'
        },
        'safe-area-inset-top': {
          type: 'boolean'
        },
        clickable: {
          type: 'boolean'
        }
      },
      events: {
        'click-left': () => {},
        'click-right': () => {}
      },
      slots: {}
    }
  },
  pagination: {
    title: 'Pagination 分页',
    description: '数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。',
    path: '/pagination/Pagination.tsx',
    groupKey: 'Navigation Components',
    groupName: '导航组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        mode: {
          type: 'string'
        },
        'prev-text': {
          type: 'string'
        },
        'next-text': {
          type: 'string'
        },
        'page-count': {
          type: 'number'
        },
        'total-items': {
          type: 'number'
        },
        'items-per-page': {
          type: 'number'
        },
        'show-page-size': {
          type: 'number'
        },
        'force-ellipses': {
          type: 'boolean'
        }
      },
      events: {
        change: () => {}
      },
      slots: {}
    }
  },
  // sidebar: {
  //     title: 'Sidebar 侧边导航',
  //     description: '垂直展示的导航栏，用于在不同的内容区域之间进行切换。',
  //     path: '/sidebar/Sidebar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  // tab: {
  //     title: 'Tab 标签页',
  //     description: '选项卡组件，用于在不同的内容区域之间进行切换。',
  //     path: '/tab/Tab.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  // tabbar: {
  //     title: 'Tabbar 标签栏',
  //     description: '底部导航栏，用于在不同页面之间进行切换。',
  //     path: '/tabbar/Tabbar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  //     schema: {
  // 			key: 'passwordInput',
  // 			children: true,
  // 			props: {
  // 				'v-model': {
  // 					type: 'boolean'
  // 				},
  // 				'pulling-text': {
  // 					type: 'string'
  // 				},
  // 				'loosing-text': {
  // 					type: 'string'
  // 				},
  // 				'loading-text': {
  // 					type: 'string'
  // 				},
  // 				'success-text': {
  // 					type: 'string'
  // 				},
  // 				'success-duration': {
  // 					type: 'number'
  // 				},
  // 				'animation-duration': {
  // 					type: 'number'
  // 				},
  // 				'head-height': {
  // 					type: 'number'
  // 				},
  // 				'disabled': {
  // 					type: 'boolean'
  // 				}
  // 			},
  // 			events: {
  // 				'refresh': () => {},
  // 				'change': () => {}
  // 			},
  // 			slots: {}
  // 		}
  // },
  //   treeSelect: {
  //       title: 'TreeSelect 分类选择',
  //       description: '用于从一组相关联的数据集合中进行选择。',
  //       path: '/tree-select/TreeSelect.tsx',
  //       groupKey: 'Navigation Components',
  //       groupName: '导航组件',
  //       schema: {
  // 				key: 'passwordInput',
  // 				children: true,
  // 				props: {
  // 					'height': {
  // 						type: 'number'
  // 					},
  // 					'main-active-index': {
  // 						type: 'number'
  // 					},
  // 					'active-id': {
  // 						type: 'number'
  // 					},
  // 					'max': {
  // 						type: 'number'
  // 					},
  // 					'selected-icon': {
  // 						type: 'string'
  // 					}
  // 				},
  // 				events: {
  // 					'click-nav': () => {},
  // 					'click-item': () => {}
  // 				},
  // 				slots: {}
  // 			}
  //   },
  backTop: {
    title: 'BackTop 回到顶部',
    description: '用于从一组相关联的数据集合中进行选择。',
    path: '/back-top/BackTop.tsx',
    groupKey: 'Navigation Components',
    groupName: '导航组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        target: {
          type: 'string'
        },
        right: {
          type: 'string'
        },
        bottom: {
          type: 'string'
        },
        offset: {
          type: 'string'
        },
        teleport: {
          type: 'string'
        }
      },
      events: {},
      slots: {}
    }
  },

  // // 业务组件
  // addressEdit: {
  //     title: 'AddressEdit 地址编辑',
  //     description: '地址编辑组件，用于新建、更新、删除地址信息。',
  //     path: '/address-edit/AddressEdit.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
  // addressList: {
  //     title: 'AddressList 地址列表',
  //     description: '展示地址信息列表。',
  //     path: '/address-list/AddressList.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
  area: {
    title: 'Area 省市区选择',
    description: '省市区三级联动选择，通常与弹出层组件配合使用。',
    path: '/area/Area.tsx',
    groupKey: 'Business Components',
    groupName: '业务组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        title: {
          type: 'string'
        },
        'confirm-button-text': {
          type: 'string'
        },
        'cancel-button-text': {
          type: 'string'
        },
        'area-list': {
          type: 'string'
        },
        'columns-placeholder': {
          type: 'string'
        },
        loading: {
          type: 'boolean'
        },
        readonly: {
          type: 'boolean'
        },
        'option-height': {
          type: 'string'
        },
        'columns-num': {
          type: 'string'
        },
        'visible-option-num': {
          type: 'string'
        },
        'swipe-duration': {
          type: 'string'
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
  card: {
    title: 'Card 卡片',
    description: '商品卡片，用于展示商品的图片、价格等信息。',
    path: '/card/Card.tsx',
    groupKey: 'Business Components',
    groupName: '业务组件',
    schema: {
      key: 'passwordInput',
      children: true,
      props: {
        thumb: {
          type: 'string'
        },
        title: {
          type: 'string'
        },
        desc: {
          type: 'string'
        },
        tag: {
          type: 'string'
        },
        num: {
          type: 'number'
        },
        price: {
          type: 'number'
        },
        'origin-price': {
          type: 'number'
        },
        centered: {
          type: 'string'
        },
        currency: {
          type: 'string'
        },
        'thumb-link': {
          type: 'string'
        },
        'lazy-load': {
          type: 'boolean'
        }
      },
      events: {
        click: () => {},
        'click-thumb': () => {}
      },
      slots: {}
    }
  }
  // contactCard: {
  //     title: 'ContactCard 联系人卡片',
  //     description: '以卡片的形式展示联系人信息。',
  //     path: '/contact-card/ContactCard.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
  // contactEdit: {
  //     title: 'ContactEdit 联系人编辑',
  //     description: '以卡片的形式展示联系人信息。',
  //     path: '/contact-edit/ContactEdit.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
  // contactList: {
  //     title: 'ContactList 联系人列表',
  //     description: '以卡片的形式展示联系人信息。',
  //     path: '/contactL-list/ContactList.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
  // coupon: {
  //     title: 'Coupon 优惠券选择器',
  //     description: '用于优惠券的兑换和选择。',
  //     path: '/coupon/Coupon.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
  // submitBar: {
  //     title: 'SubmitBar 提交订单栏',
  //     description: '用于展示订单金额与提交订单。',
  //     path: '/submit-bar/SubmitBar.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
};

module.exports = componentList;
