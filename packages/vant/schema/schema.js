const componentList = require('./componentList');
const fs = require('fs');
let mergeList = []
for (const key in componentList) {
  let componetPath = `../src${componentList[key].path}`
  fs.access(componetPath, err => {
    if (err) {
      console.log(componetPath, err)
      return
    }

    fs.readFile(componetPath, 'utf8', (err, fileStr) => {
      if (err) {
        console.log(componetPath, err)
        return
      }
console.log('test',key[0].toUpperCase()+ key.substr(1))
      const _componentInfos = fmtComponentJson(
        componentInfos(fileStr, key, componentList[key])
      )

      console.log(_componentInfos)
      mergeList.push(_componentInfos)

      fs.writeFile(
        `./json/${key}.json`,
        JSON.stringify(_componentInfos, undefined, 2),
        err => {
          if (err) {
            console.log('写入出错了')
          }
        }
      )

      fs.writeFile(
        `./list.json`,
        JSON.stringify(mergeList, undefined, 2),
        err => {
          if (err) {
            console.log('写入出错了')
          }
        }
      )

    //   // todo : test codes
    //   const componentInfo = componentInfos(fileStr, key, componentList[key])

    //   if (!componentInfo.key) {
    //     console.log('no key:', componetPath)
    //   }

    //   if (!Object.keys(componentInfo.props).length) {
    //     console.log('no props:', componetPath)
    //   }

    //   if (!Object.keys(componentInfo.events).length) {
    //     console.log('no events:', componetPath)
    //   }
    })
  })
}

function componentInfos(fileStr, key, component) {
  let propsIndex = 0
  let defaultPropsIndex = 0

  const tempInfos = {
    key: key,
    children: true,
    props: {},
    events: {},
    map: component,
  }

  fileStr.split(/[\n\r\t]/g).forEach((lineStr, index) => {
    if (!lineStr) {
      return
    }

    // key
    if (lineStr.includes('= createNamespace(')) {
      const content = lineStr.match(/\'(.+?)\'/g)[0];
      const keyArr = content.substr(1,content.length-2).split('-');
      var _key = [];

      keyArr.forEach((item,index) => {
        if(index>0){
          item = item[0].toUpperCase()+ item.substr(1);
        }
        _key.push(item);
      })

      tempInfos.key = _key.join('');
      return
    }

    // props start
    if (
      lineStr.includes(`type Props`) ||
      lineStr.includes(`export const ${tempInfos.key}Props`) ||
      lineStr.includes(`export interface ${tempInfos.key}Props`)
    ) {
      propsIndex = index
    }

    if (propsIndex && propsIndex == index && lineStr.includes(`};`)) {
      // props 一行情况
      lineStr = lineStr.match(/[^{}]+(?=})/g)[0]
    }

    // props end
    // if (
    //   propsIndex &&
    //   index > propsIndex &&
    //   (lineStr.includes(`export `) || lineStr.includes(`const `))
    // ) {
    //   propsIndex = 0
    //   tempInfos.children = Object.keys(tempInfos.props).includes('children')
    // }

    // props map
    if (propsIndex && index >= propsIndex) {

      const [key, ...values] = lineStr.split(':')
      const value = values.join(':').replace(/,/g, "").trim()
      if (value) {
        const _key = key.replace(/[\s\?]/g, '')
        // console.log('属性：',index, lineStr,_key,values.join(':').replace(/,/g, "").trim())
        if (value.includes('=>')) {
          // function
          tempInfos.events[_key] = {
            value,
            title: _key,
            description: _key,
            type: 'object',  // key.includes('?'),
            properties: {
              name: {
                description: '函数名',
                title: '函数名',
                type: 'string'
              }
            }
          }
        } else {
          let _valueType = ''
          let _propEnum = []
          let _propType = []

          // todo: 1、暂时不考虑混合类型 2、color 3、textarea
          if (value.includes('number')) {
            _valueType = 'digit'
            _propEnum = []
            _propType = ['number']
          } else if (value.includes('Boolean')) {
            _valueType = 'switch'
            _propEnum = []
            _propType = ['boolean']
          } else if (value.includes('Date')) {
            _valueType = 'Date'
            _propEnum = []
            _propType = ['Date']
          } else if (
            value.includes('|') &&
            (value.includes("'") || value.includes('"'))
          ) {
            _valueType = 'select'
            _propEnum = value
              .split('|')
              // 过滤非 string 数据
              .filter(item => item.includes("'") || item.includes('"'))
              .map(item => item.replace(/[\s\'\"]/g, ''))
            _propType = ['string']
          } else {
            _valueType = 'text'
            _propEnum = []
            _propType = value.split('|')
          }

        
          // default
          tempInfos.props[_key] = {
            enum: _propEnum,
            type: _propType,
            title: _key,
            option: key.includes('?'),
            valueType: _valueType,
          }
          // console.log('tempInfos:',tempInfos)
        }
      }
    }

    // default props start
    if (lineStr.includes(`const defaultProps`)) {
      defaultPropsIndex = index
    }

    // props end
    if (
      defaultPropsIndex &&
      index > defaultPropsIndex &&
      (lineStr.includes(`export `) || lineStr.includes(`const `))
    ) {
      defaultPropsIndex = 0
    }

    // props map
    if (defaultPropsIndex && index >= defaultPropsIndex) {
      const [key, ...values] = lineStr.split(':')
      const value = values.join(':').trim()

      if (value) {
        const _key = key.replace(/[\s\?]/g, '')
        let _value = value.replace(/[\,\'\"]/g, '')

        if (tempInfos.props[_key]) {
          if (tempInfos.props[_key].valueType === 'switch') {
            _value = eval(_value.toLowerCase())
          }
          tempInfos.props[_key].default = _value
        }
      }
    }
  })

  return tempInfos
}

function fmtComponentJson(componentInfo) {
  // console.log(componentInfo)
  let properties = {
    'name': {
      'title': componentInfo.map.title,
      'description': '组件名称',
    },
    'tagName': {
      'title': componentInfo.key[0].toUpperCase()+ componentInfo.key.substr(1),// 'van-'+componentInfo.key.replace(/([A-Z])/g,"-$1").toLowerCase(),
      'description': '组件标签',
    },
    'advanceProps': {
      'title': '高级属性',
      'description': '高级属性',
      'type': 'object',
      'properties': {
        'condition': {
          'title': '是否渲染',
          'description': '是否渲染',
          'type': 'string',
          'valueType': 'switch',
          'default': true,
        },
      },
    },
    // ...(componentInfo.children && {
    //   'children': {
    //     'type': componentInfo.props['children'].type[0],
    //     'title': '子组件',
    //     'description':
    //       '嵌套进的子组件的json object(此处例子,只有hasChild为true时才存在)',
    //   },
    // }),
    'hasChild': {
      'type': 'boolean',
      'const': componentInfo.children,
      'title': '支持调用子组件',
      'description': 'true:支持;false:不支持',
    },
    ...(componentInfo.map.requiredParent && {
      'requiredParent': {
        'title': componentInfo.map.requiredParent,
        'option': !!componentInfo.map.depend,
        'description':
          '需要的父组件',
      },
    }),
    'props': {
      'type': 'object',
      'title': '组件属性',
      'description': '组件属性',
      'required': Object.keys(componentInfo.props).filter(
        key => !componentInfo.props[key].option
      ),
      'properties': componentInfo.props,
    },
    ...(Object.keys(componentInfo.events).length && {
      'events': {
        'type': 'object',
        'title': '交互行为',
        'description': '组件动作事件',
        'required': Object.keys(componentInfo.events).filter(
          key => !componentInfo.events[key].option
        ),
        'properties': componentInfo.events,
      },
    }),
    'pkgId': {
      'title': 'vant',
      'description': '组件库包名称',
    },
    'version': {
      'title': '4.0.2',
      'description': '组件库包版本',
    },
    'protoProps': {
      'type': 'object',
      'title': '原生属性',
      'required': [],
      'properties': {
        'id': {
          'type': 'string',
          'title': '唯一id',
          'valueType': 'text',
          'description': '元素唯一标识',
        },
        'ref': {
          'type': 'string',
          'title': 'ref',
          'valueType': 'text',
          'description':
            '组件ref名称，可在this.[ref名称]来获取组件实例this对象',
        },
        'style': {
          'type': 'object',
          'title': '内联样式',
          'valueType': 'object',
          'description': '组件内联样式(JSON格式)',
        },
        'className': {
          'type': 'string',
          'title': '样式名',
          'valueType': 'textarea',
          'description': '组件样式名',
        },
      },
      'description': '原生属性',
    },
    'lastModifyTime': {
      'type': 'string',
      'title': '最后一次修改时间',
      'description': '2022-12-13',
    },
  }

  // todo
  return {
    tagName: (componentInfo.map.useName || componentInfo.key)[0].toUpperCase()+ (componentInfo.map.useName || componentInfo.key).substr(1),  // 'van-' + (componentInfo.map.useName || componentInfo.key).replace(/([A-Z])/g,"-$1").toLowerCase(),
    pkgId: 'vant',
    type: 'object',
    properties: properties,
    lastModifyTime: '2022-12-13',
    version: '4.0.2',
    // required: Object.keys(componentInfo.props).filter(
    //   key => !componentInfo.props[key].option
    // ),
    required: [null],
    description: componentInfo.map.description,
    groupKey: componentInfo.map.groupKey,
    groupName: componentInfo.map.groupName,
    isHidden: 0,
    framework: 'vue',
  }
}
