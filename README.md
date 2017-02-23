## 下载项目
```bash
git@gitlab.qima-inc.com:fe/oxygen.git
cd oxygen
```

## 安装组件依赖库
```bash
ynpm i
```

## 新建组件（以waterfall为例）
新建一个Vue组件，比如  waterfall
```bash
make init waterfall
```
就可以在 packages目录 里面看到waterfall初始化的组件代码了。记得更新package.json和README.md里的组件描述信息

## 示例预览（以waterfall为例）
在 docs/nav.config.json 文件里合适的地方写入组件声明，根据组件类型（JS组件，CSS组件，Form等）进行区分
在 docs/examples 目录里新建 同名的md文件，如 waterfall.md
在项目的根目录下执行以下命令，启动server
```
make dev
```
浏览器访问 http://localhost:8080/#/ 就可以看到所有组件的示例了









