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
                   * todo : color类型后续添加
                   */
                  type: 'string',
                  /**
                   *  是否必须,默认false
                   */
                  option: false,
                  /**
                   * 根据 enum 或者 type 生成
                   * textinput / switch / color / 下拉框 等
                   */
                  valueType: ''
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
  // autoCenter: {
  //     title: '自动居中',
  //     description: '文本自动居中对齐。',
  //     path: '/auto-center/auto-center.tsx',
  //     groupKey: 'layout',
  //     groupName: '布局'
  // },
  // avatar: {
  //     title: '头像',
  //     description: '用来代表用户或事物。',
  //     path: '/avatar/avatar.tsx',
  //     groupKey: 'dataDisplay',
  //     groupName: '信息展示',
  //     isHidden: '1'
  // },
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
            color: {

            },
            dot: {
              type: 'boolean'
            },
            max:{type:'number'},
            offset:{
              type:'number'
            },
            'show-zero':{  type:'boolean'},
            position :{
              enum:['top-right','top-left', 'bottom-left', 'bottom-right']
            },

        },
        events: {

        },
        slots: {
            default: {},
            content:{}
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
  CellGroup : {
    title: 'Cell 单元格',
    description: '单元格为列表中的单个展示项。',
    path: '/cell/Cell.tsx',
    groupKey: 'Basic Components',
    groupName: '基础组件',
    schema: {
        key: 'CellGroup',
        children: true,
        props: {
            title: {},
            insert: {type: 'boolean'},
            border: {
                type: 'boolean'
            },
        },
        events: {
            click: (event) => {}
        },
        slots: {
            title: {},
            default: {},
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
              enum:['fit','contain','cover','none','scale-down']
            },
            position: {

            },
            alt:{},
            width:{
              type:'number'
            },
            height:{  type:'number'},
            radius:{  type:'number'},
            round:{type: 'boolean'},
            block:{type: 'boolean'},
            'lazy-load':{type: 'boolean'},
            'show-error':{type: 'boolean'},
            'show-loading':{type: 'boolean'},
            'error-icon':{},
            'loading-icon':{},
            'icon-size':{type: 'number'},
            'icon-prefix':{}
        },
        events: {
            click: (event) => {},
            load: ()=>{},
            error:()=>{}
        },
        slots: {
            loading: {},
            default: {},
            error:{}
        }
    }
  },
  // // Layout: {
  // //     title: 'Layout 布局',
  // //     description: 'Layout 提供了 van-row 和 van-col 两个组件来进行行列布局。',
  // //     path: '/image/Image.tsx',
  // //     groupKey: 'Basic Components',
  // //     groupName: '基础组件',
  // // },
  // popup: {
  //     title: 'Popup 弹出层',
  //     description: '弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。',
  //     path: '/popup/Popup.tsx',
  //     groupKey: 'Basic Components',
  //     groupName: '基础组件',
  // },
  // toast: {
  //     title: 'Toast 轻提示',
  //     description: '在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。',
  //     path: '/toast/Toast.tsx',
  //     groupKey: 'Basic Components',
  //     groupName: '基础组件',
  // },

  // // 表单组件
  // calendar: {
  //     title: 'Calendar 日历',
  //     description: '日历组件用于选择日期或日期区间。',
  //     path: '/calendar/Calendar.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
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
              'v-model': {
                  type: 'boolean'
              },
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
              'v-model': {
                  type: 'boolean'
              },
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
  }
  // datePicker: {
  //     title: 'DatePicker 日期选择',
  //     description: '日期选择器，用于选择年、月、日，通常与弹出层组件配合使用。',
  //     path: '/date-picker/DatePicker.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // field: {
  //     title: 'Field 输入框',
  //     description: '用户可以在文本框内输入或编辑文字。',
  //     path: '/field/Field.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // form: {
  //     title: 'Form 表单',
  //     description: '用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 Field 输入框 组件搭配使用。',
  //     path: '/form/Form.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // numberKeyboard: {
  //     title: 'NumberKeyboard 数字键盘',
  //     description: '虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。',
  //     path: '/number-keyboard/NumberKeyboard.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // passwordInput: {
  //     title: 'PasswordInput 密码输入框',
  //     description: '带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。',
  //     path: '/password-input/PasswordInput.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // picker: {
  //     title: 'Picker 选择器',
  //     description: '提供多个选项集合供用户选择，支持单列选择、多列选择和级联选择，通常与弹出层组件配合使用。',
  //     path: '/picker/Picker.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // pickerGroup: {
  //     title: 'PickerGroup 选择器组',
  //     description: '用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。',
  //     path: '/picker-group/PickerGroup.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // radio: {
  //     title: 'Radio 单选框',
  //     description: '在一组备选项中进行单选。',
  //     path: '/radio/Radio.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // rate: {
  //     title: 'Rate 评分',
  //     description: '用于对事物进行评级操作。',
  //     path: '/rate/Rate.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // search: {
  //     title: 'Search 搜索',
  //     description: '用于搜索场景的输入框组件。',
  //     path: '/search/Search.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // slider: {
  //     title: 'Slider 滑块',
  //     description: '滑动输入条，用于在给定的范围内选择一个值。',
  //     path: '/slider/Slider.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // stepper: {
  //     title: 'Stepper 步进器',
  //     description: '步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。',
  //     path: '/stepper/Stepper.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // switch: {
  //     title: 'Switch 开关',
  //     description: '用于在打开和关闭状态之间进行切换。',
  //     path: '/switch/Switch.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // timePicker: {
  //     title: 'TimePicker 时间选择',
  //     description: '时间选择器，通常与弹出层组件配合使用。',
  //     path: '/time-picker/TimePicker.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // uploader: {
  //     title: 'Uploader 文件上传',
  //     description: '用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。',
  //     path: '/uploader/Uploader.tsx',
  //     groupKey: 'Form Components',
  //     groupName: '表单组件',
  // },
  // // 反馈组件
  // actionSheet: {
  //     title: 'ActionSheet 动作面板',
  //     description: '底部弹起的模态面板，包含与当前情境相关的多个选项。',
  //     path: '/action-sheet/ActionSheet.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // dialog: {
  //     title: 'Dialog 弹出框',
  //     description: '弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。',
  //     path: '/dialog/Dialog.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // dropdownMenu: {
  //     title: 'DropdownMenu 下拉菜单',
  //     description: '向下弹出的菜单列表。',
  //     path: '/dropdown-menu/DropdownMenu.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // loading: {
  //     title: 'Loading 加载',
  //     description: '加载图标，用于表示加载中的过渡状态。',
  //     path: '/loading/Loading.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // notify: {
  //     title: 'Notify 消息提示',
  //     description: '在页面顶部展示消息提示，支持组件调用和函数调用两种方式。',
  //     path: '/notify/Notify.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // overlay: {
  //     title: 'Overlay 遮罩层',
  //     description: '创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。',
  //     path: '/overlay/Overlay.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // pullRefresh: {
  //     title: 'PullRefresh 下拉刷新',
  //     description: '用于提供下拉刷新的交互操作。',
  //     path: '/pull-refresh/PullRefresh.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // shareSheet: {
  //     title: 'ShareSheet 分享面板',
  //     description: '底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。',
  //     path: '/shareSheet/ShareSheet.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // swipeCell: {
  //     title: 'swipeCell 滑动单元格',
  //     description: '可以左右滑动来展示操作按钮的单元格组件。',
  //     path: '/swipe-cell/SwipeCell.tsx',
  //     groupKey: 'Action Components',
  //     groupName: '反馈组件',
  // },
  // // 展示组件
  // circle: {
  //     title: 'Circle 环形进度条',
  //     description: '圆环形的进度条组件，支持进度渐变动画。',
  //     path: '/circle/Circle.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // collapse: {
  //     title: 'Collapse 折叠面板',
  //     description: '将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。',
  //     path: '/collapse/Collapse.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // countDown: {
  //     title: 'CountDown 倒计时',
  //     description: '将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。',
  //     path: '/count-down/CountDown.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // divider: {
  //     title: 'Divider 分割线',
  //     description: '用于将内容分隔为多个区域。',
  //     path: '/divider/Divider.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // empty: {
  //     title: 'Empty 空状态',
  //     description: '空状态时的占位提示。',
  //     path: '/empty/Empty.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // imagePreview: {
  //     title: 'ImagePreview 图片预览',
  //     description: '图片放大预览，支持组件调用和函数调用两种方式。',
  //     path: '/image-preview/ImagePreview.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // lazyload: {
  //     title: 'Lazyload 懒加载',
  //     description: '当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。',
  //     path: '/lazyload/Lazyload.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // list: {
  //     title: 'List 列表',
  //     description: '瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。',
  //     path: '/list/List.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // noticeBar: {
  //     title: 'NoticeBar 通知栏',
  //     description: '用于循环播放展示一组消息通知。',
  //     path: '/notice-bar/NoticeBar.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // popover: {
  //     title: 'Popover 气泡弹出框',
  //     description: '弹出式的气泡菜单。',
  //     path: '/popover/Popover.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // progress: {
  //     title: 'Progress 进度条',
  //     description: '弹出式的气泡菜单。',
  //     path: '/progress/Progress.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // skeleton: {
  //     title: 'Skeleton 骨架屏',
  //     description: '弹出式的气泡菜单。',
  //     path: '/skeleton/Skeleton.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // steps: {
  //     title: 'Steps 步骤条',
  //     description: '用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。',
  //     path: '/steps/Steps.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // sticky: {
  //     title: 'Sticky 粘性布局',
  //     description: 'Sticky 组件与 CSS 中 position: sticky 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。',
  //     path: '/sticky/Sticky.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // swipe: {
  //     title: 'Swipe 轮播',
  //     description: '用于循环播放一组图片或内容。',
  //     path: '/swipe/Swipe.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },
  // tag: {
  //     title: 'Tag 标签',
  //     description: '用于标记关键词和概括主要内容。',
  //     path: '/tag/Tag.tsx',
  //     groupKey: 'Display Components',
  //     groupName: '展示组件',
  // },

  // // 导航组件
  // actionBar: {
  //     title: 'ActionBar 动作栏',
  //     description: '用于为页面相关操作提供便捷交互。',
  //     path: '/action-bar/ActionBar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // grid: {
  //     title: 'Grid 宫格',
  //     description: '宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。',
  //     path: '/grid/Grid.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // indexBar: {
  //     title: 'IndexBar 索引栏',
  //     description: '用于列表的索引分类显示和快速定位。',
  //     path: '/index-bar/IndexBar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // navBar: {
  //     title: 'NavBar 导航栏',
  //     description: '为页面提供导航功能，常用于页面顶部。',
  //     path: '/nav-bar/NavBar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // pagination: {
  //     title: 'Pagination 分页',
  //     description: '数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。',
  //     path: '/pagination/Pagination.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // sidebar: {
  //     title: 'Sidebar 侧边导航',
  //     description: '垂直展示的导航栏，用于在不同的内容区域之间进行切换。',
  //     path: '/sidebar/Sidebar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // tab: {
  //     title: 'Tab 标签页',
  //     description: '选项卡组件，用于在不同的内容区域之间进行切换。',
  //     path: '/tab/Tab.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // tabbar: {
  //     title: 'Tabbar 标签栏',
  //     description: '底部导航栏，用于在不同页面之间进行切换。',
  //     path: '/tabbar/Tabbar.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // treeSelect: {
  //     title: 'TreeSelect 分类选择',
  //     description: '用于从一组相关联的数据集合中进行选择。',
  //     path: '/tree-select/TreeSelect.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },
  // backTop: {
  //     title: 'BackTop 回到顶部',
  //     description: '用于从一组相关联的数据集合中进行选择。',
  //     path: '/back-top/BackTop.tsx',
  //     groupKey: 'Navigation Components',
  //     groupName: '导航组件',
  // },

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
  // area: {
  //     title: 'Area 省市区选择',
  //     description: '省市区三级联动选择，通常与弹出层组件配合使用。',
  //     path: '/area/Area.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
  // card: {
  //     title: 'Card 卡片',
  //     description: '商品卡片，用于展示商品的图片、价格等信息。',
  //     path: '/card/Card.tsx',
  //     groupKey: 'Business Components',
  //     groupName: '业务组件',
  // },
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
