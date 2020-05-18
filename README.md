# 前端开发基础框架

## 项目命令

### yarn

``` bash
# 安装依赖
yarn install

# 开发编译和热重载
yarn serve

# 生产编译和压缩
yarn build

# 运行所有测试
yarn test

# 检查和修复代码
yarn lint

# 运行端对端测试
yarn test:e2e

# 运行单元测试
yarn test:unit
```

### npm

``` bash
# 安装依赖
npm install

# 开发编译和热重载
npm run serve

# 生产编译和压缩
npm run build

# 运行所有测试
npm run test

# 检查和修复代码
npm run lint

# 运行端对端测试
npm run test:e2e

# 运行单元测试
npm run test:unit

# 运行打包分析， 打包完成后会自动打开分析页面
npm run build --report
```
## 插件推荐

* [触摸手势事件库](https://github.com/vuejs/vue-touch)
* [终端设备检测](https://github.com/matthewhudson/current-device)
* [日期处理插件](https://github.com/date-fns/date-fns)
* [数字滚动插件](https://github.com/JefferyHus/v-odometer)
* [滑动轮播插件](https://github.com/surmon-china/vue-awesome-swiper)

## 开发技巧

* @ 是 /src 目录的一个别名
* URL转换规则：
  * 如果 URL 是一个绝对路径 (例如 /images/foo.png)，它将会被保留不变。
  * 如果 URL 以 . 开头，它会作为一个相对模块请求被解释且基于你的文件系统中的目录结构进行解析。
  * 如果 URL 以 ~ 开头，其后的任何内容都会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源：
    ``` html
    <img src="~some-npm-package/foo.png">
    ```
  * 如果 URL 以`@`开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 `<projectRoot>/src` 的别名`@`。**(仅作用于模版中)**

## 项目配置

查看[配置参考文档](https://cli.vuejs.org/zh/config/)
