const Ajv = require('ajv').default;
const yaml = require('js-yaml');
const schema = require('./schema');
const path = require('path');
const fs = require('fs-extra');
const ajv = new Ajv({ next: true });
const nextVocabulary = require('ajv/dist/vocabularies/next').default;
// add support for dependentRequired, dependentSchemas, maxContains and minContains

// const nextVocabulary = require("ajv/dist/vocabularies/next").default
ajv.addVocabulary(nextVocabulary);
const validate = ajv.compile(schema);
const lodash = require('lodash');
const components = require('./config');
const args = require('yargs').argv;
const root = path.join(__dirname, '../../src/components');

components.every((component) => {
    if (component.show) {
        const targetFile = path.join(root, component.name + '.vue', 'api.yaml');
        const context = yaml.load(fs.readFileSync(targetFile).toString());
        // 子组件使用父组件的 icon、labels 属性
        if (context.length > 1) {
            context.forEach((item, index) => {
                if (index > 0) {
                    item.icon = item.icon || context[0].icon;
                    item.labels = item.labels || context[0].labels;
                }
            });
        }

        // 属性默认值为数字的时候，类型标记为 number
        context.forEach((contextItem, index) => {
            if (Object.prototype.toString.call(contextItem.attrs) === '[object Array]') {
                contextItem.attrs.forEach(attr => {
                    if (typeof attr.default == 'number') {
                        // 如果属性的默认值是 number，那么类型标记为 number
                        attr.type = 'number';
                    } 
                })
            }
        });
        
        const valid = validate(context);
        if (context.length > 1) {
            context.forEach((item, index) => {
                if (index > 0) {
                    delete item.icon;
                    delete item.labels;
                }
            });
        }

        if (!valid) {
            console.log(targetFile, '\n', validate.errors);
            /**
             * yarn node scripts/lcap/validator.js --HELP=true
             * 1. 开启辅助定位 key 的功能，自动找出必填的 key
             */
            if (args.HELP === 'true') {
                validate.errors.forEach((errorObject) => {
                    /* 辅助寻找必填的缺失的 key */

                    const currentPath = errorObject.dataPath.split('/');
                    const keyTitle = errorObject.params.missingProperty;
                    // 去掉第一个 ''
                    currentPath.shift();

                    if (errorObject.keyword === 'required') {
                        lodash.set(context, `${currentPath.join('.')}.${keyTitle}`, '');
                    }

                    if (errorObject.keyword === 'oneOf') {
                        const passingSchemas = errorObject.params.passingSchemas;
                        // 用于提示需要填充一种结构
                        lodash.set(context, `${currentPath.join('.')}.oneOf`, yaml.safeDump(passingSchemas));
                    }

                    // 对类型的辅助修正
                    if (errorObject.keyword === 'type') {
                        // 用于提示需要填充一种结构
                        lodash.set(context, `${currentPath.join('.')}`, '/** newType **/');
                    }

                    // 依赖属性，比如有 options，需要设置 default
                    if (errorObject.keyword === 'dependentRequired') {
                        lodash.set(context, `${currentPath.join('.')}.${keyTitle}`, '');
                    }

                    fs.writeFileSync(targetFile, yaml.safeDump(context));
                });
            }
           
            return false;
        }

        // 验证通过，直接删除子元素的 icon 和 label
        fs.writeFileSync(targetFile, yaml.safeDump(context));
    }
    return true;
});
