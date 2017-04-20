<p>
<a href="https://github.com/youzan/"><img alt="有赞logo" width="36px" src="https://img.yzcdn.cn/public_files/2017/02/09/e84aa8cbbf7852688c86218c1f3bbf17.png" alt="youzan">
</p></a>
<p align="center">
    <img alt="项目logo" src="https://img.yzcdn.cn/upload_files/2017/04/20/FlkVrSlOr-SGK9qQqtilN6-IFZyT.png">
</p>
<p align="center">A Vue.js 2.0 Mobile UI at YouZan</p>
 
## 一、安装

```shell
npm i -S vant
```
 
## 二、使用
 
 
### 1. 导入所有组件
 
```javascript
import Vue from 'vue';
import vant from 'vant';
// 你也可以使用自己的主题
import 'vant/lib/vant-css/index.css';

Vue.use(vant);
```
 
### 2. 按需导入组件

```javascript
import Vue from 'vue';
import { Button, Cell } from 'vant';
import 'vant/lib/vant-css/button.css';
import 'vant/lib/vant-css/cell.css';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
```

## 三、开发

### 1. 新建一个组件

```shell
make init componentName
```

### 2. 示例预览

在`docs/nav.config.json`文件里合适的地方写入组件声明，根据组件类型（JS组件，CSS组件，Form等）进行区分 在`docs/examples-docs`目录里新建同名的md文件，如`waterfall.md`，在项目的根目录下执行以下命令，启动server：

```shell
make dev
```

浏览器访问[http://localhost:8080](http://localhost:8080)就可以看到所有组件的示例了。
 
## 四、开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
