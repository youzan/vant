### Before submitting a pull request, please make sure the following is done:

### 提交 PR 前请确保完成以下内容:

1. Fork [the repository](https://github.com/youzan/vant) and create your branch from `dev`.
2. Follow the [contributing guide](./CONTRIBUTING.md) to setup your develop environment.
2. If you've added code that should be tested, add tests!
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (`npm test`).
5. Make sure your code lints (`npm run lint`).
6. Describe your pull request.

### 请认真写 PR 的标题，会用于生成 change log。

#### 标题规则
[bug fix / breaking change / new feature] 组件名字：修改内容描述

说明：
* 前面方括号用来区分 Issue / PR 的 类型：bug fix - 改 bug；breaking change: 不兼容的改动；new feature：新功能
* 修改内容尽可能言简意赅，总结 PR 的改动或者描述 Issue
* 描述请用中文
* 组件名字请用英文，首字母大写

示例：
* [bug fix] Button: 修改颜色
* [breaking change] Loading: 删除  `static` 属性
* [new feature] Form: 增加 `FormSelection` 支持
* [new feature] 新增 Abc 组件

### Please remove the above lines when you submit this pull request, also please fill in the changes you've made in this pull request.

### 提交 PR 前 请把以上内容删除，并填写以下内容。

Fixes #xx(issue number here), remove this line if no related issue.

Changes you made in this pull request:

- some change
- another change
