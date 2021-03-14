## 关于桌面端组件

Vant Cli 也支持预览桌面端组件，你可以在组件的 `demo` 目录下新建一个 `.vue` 文件，并在组件的 `README` 中按如下格式声明要预览的组件：

```html
<demo-code>./demo/MyDemo.vue</demo-code>
```

`demo-code` 标签中间的文本为 `README` 到 `demo` 文件的相对路径。

```
button
├─ demo             # 组件示例
│   └─ MyDemo.vue   # 要预览的 demo 文件
├─ index.js         # 组件入口
├─ index.less       # 组件样式
└─ README.md        # 组件文档
```

![image](https://user-images.githubusercontent.com/5093611/111076378-0e981a00-8527-11eb-8e3f-31f0be7e4021.png)

`demo-code` 标签支持以下属性：

| 名称      | 类型    | 描述                                    |
| --------- | ------- | --------------------------------------- |
| compact   | boolean | 紧凑模式                                |
| transform | boolean | 防止预览区内 fixed 定位的元素飞出预览区 |
| inline    | boolean | 只显示组件本身，不显示预览区边框和代码  |


### `compact`

```html
<demo-code compact>./demo/MyDemo.vue</demo-code>
```
![image](https://user-images.githubusercontent.com/5093611/111076728-77cc5d00-8528-11eb-85f1-e7217344ab14.png)

### `transform`

```html
<demo-code transform>./demo/MyDemo.vue</demo-code>
```
![image](https://user-images.githubusercontent.com/5093611/111076799-d5f94000-8528-11eb-973f-c9d69f91d2a7.png)

### `inline`

```html
<demo-code inline>./demo/MyDemo.vue</demo-code>
```
![image](https://user-images.githubusercontent.com/5093611/111076845-15c02780-8529-11eb-9cfb-76c9b25dc2a2.png)

### 去除手机模拟器

对于 PC 端的组件，如果不需要右侧的手机模拟器，可以在 `vant.config.js` 文件中设置 `site.hideSimulator` 为 `true`，这样在所有页面都会隐藏手机模拟器，也可以只针对具体页面设置。

```js
module.exports = {
  site: {
    defaultLang: 'zh-CN',
    hideSimulator: true, // 所有页面都不显示
    locales: {
      'zh-CN': {
        title: 'Vant',
        description: '轻量、可靠的移动端 Vue 组件库',
        hideSimulator: true, // 中文下所有页面都不显示
        nav: [
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
                hideSimulator: true, // 只针对某个页面不显示
              },
            ],
          },
        ],
      },
    },
  },
};

```