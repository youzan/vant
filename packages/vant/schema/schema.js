const componentList = require('./componentList');
const fs = require('fs');
let mergeList = [];
for (const key in componentList) {
    console.log('test', key[0].toUpperCase() + key.substr(1));
    const _componentInfos = fmtComponentJson(componentList[key], key);

    console.log(_componentInfos);
    mergeList.push(_componentInfos);

    fs.writeFile(`./json/${key}.json`, JSON.stringify(_componentInfos, undefined, 2), (err) => {
        if (err) {
            console.log('写入出错了');
        }
    });

    fs.writeFile(`./list.json`, JSON.stringify(mergeList, undefined, 2), (err) => {
        if (err) {
            console.log('写入出错了');
        }
    });
}

function fmtComponentJson(componentInfo, key) {
    // console.log(componentInfo)
    let properties = {
        name: {
            title: componentInfo.title,
            description: '组件名称'
        },
        tagName: {
            title: key[0].toUpperCase() + key.substr(1), // 'van-'+componentInfo.key.replace(/([A-Z])/g,"-$1").toLowerCase(),
            description: '组件标签'
        },
        advanceProps: {
            title: '高级属性',
            description: '高级属性',
            type: 'object',
            properties: {
                condition: {
                    title: '是否渲染',
                    description: '是否渲染',
                    type: 'string',
                    valueType: 'switch',
                    default: true
                }
            }
        },
        // ...(componentInfo.children && {
        //   'children': {
        //     'type': componentInfo.props['children'].type[0],
        //     'title': '子组件',
        //     'description':
        //       '嵌套进的子组件的json object(此处例子,只有hasChild为true时才存在)',
        //   },
        // }),
        hasChild: {
            type: 'boolean',
            const: componentInfo.schema.children,
            title: '支持调用子组件',
            description: 'true:支持;false:不支持'
        },
        ...(componentInfo.requiredParent && {
            requiredParent: {
                title: componentInfo.requiredParent,
                option: !!componentInfo.depend,
                description: '需要的父组件'
            }
        }),
        props: {
            type: 'object',
            title: '组件属性',
            description: '组件属性',
            required: Object.keys(componentInfo.schema.props).filter((key) => componentInfo.schema.props[key].option),
            properties: componentProps(componentInfo.schema.props)
        },
        ...(Object.keys(componentInfo.schema.events).length && {
            events: {
                type: 'object',
                title: '交互行为',
                description: '组件动作事件',
                required: [],
                properties: componentEvents(componentInfo.schema.events)
            }
        }),
        pkgId: {
            title: 'vant',
            description: '组件库包名称'
        },
        version: {
            title: '4.0.2',
            description: '组件库包版本'
        },
        protoProps: {
            type: 'object',
            title: '原生属性',
            required: [],
            properties: {
                id: {
                    type: 'string',
                    title: '唯一id',
                    valueType: 'text',
                    description: '元素唯一标识'
                },
                ref: {
                    type: 'string',
                    title: 'ref',
                    valueType: 'text',
                    description: '组件ref名称，可在this.[ref名称]来获取组件实例this对象'
                },
                style: {
                    type: 'object',
                    title: '内联样式',
                    valueType: 'object',
                    description: '组件内联样式(JSON格式)'
                },
                className: {
                    type: 'string',
                    title: '样式名',
                    valueType: 'textarea',
                    description: '组件样式名'
                }
            },
            description: '原生属性'
        },
        lastModifyTime: {
            type: 'string',
            title: '最后一次修改时间',
            description: '2022-12-13'
        }
    };

    // todo
    return {
        tagName: (componentInfo.useName || key)[0].toUpperCase() + (componentInfo.useName || key).substr(1), // 'van-' + (componentInfo.map.useName || componentInfo.key).replace(/([A-Z])/g,"-$1").toLowerCase(),
        pkgId: 'vant',
        type: 'object',
        properties: properties,
        lastModifyTime: '2022-12-13',
        version: '4.0.2',
        // required: Object.keys(componentInfo.props).filter(
        //   key => !componentInfo.props[key].option
        // ),
        required: [null],
        description: componentInfo.description,
        groupKey: componentInfo.groupKey,
        groupName: componentInfo.groupName,
        isHidden: 0,
        framework: 'vue'
    };
}

function componentProps(componentMapProps) {
    let props = {};
    console.log('...', componentMapProps);
    for (const key in componentMapProps) {
        if (componentMapProps[key].hasOwnProperty('enum')) {
            propItem = {
                enum: componentMapProps[key].enum,
                type: ['string'],
                title: key,
                option: componentMapProps[key].option || true,
                valueType: 'select',
                default: componentMapProps[key].enum[0]
            };
        } else if (componentMapProps[key].type === 'boolean') {
            propItem = {
                enum: [],
                type: ['boolean'],
                title: key,
                option: componentMapProps[key].option||true,
                valueType: 'switch',
                default: componentMapProps[key].default || 'false'
            };
        } else {
            propItem = {
                enum: [],
                type: ['string'],
                title: key,
                option: componentMapProps[key].option||true,
                valueType: 'text',
                default: componentMapProps[key].default || ''
            };
        }
        props[key] = propItem;
    }

    return props;
}

function componentEvents(componentMapEvents) {
    let props = {};

    for (const key in componentMapEvents) {
        eventItem = {
            value: componentMapEvents[key],
            title: key,
            description: key,
            type: 'object',
            properties: {
                name: {
                    description: '函数名',
                    title: '函数名',
                    type: 'string'
                }
            }
        };

        props[key] = eventItem;
    }

    return props;
}
