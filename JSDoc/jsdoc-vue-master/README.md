# jsdoc-vue
[![Build Status](https://travis-ci.org/QingWei-Li/jsdoc-vue.svg?branch=master)](https://travis-ci.org/QingWei-Li/jsdoc-vue)
[![npm](https://img.shields.io/npm/v/jsdoc-vue.svg)](https://www.npmjs.com/package/jsdoc-vue)

> A jsdoc plugin that parses *.vue files.

利用 jsdoc 自动生成 .vue 文件的文档。
### 修改点
1. 使用了`jsdoc`字典，可以使用`jsdoc`自带的标签来进行编写
2. 生成文档采用了[minami](https://github.com/Nijikokun/minami)模板
3. 升级了 vue-template-complier 和 jsdoc 模块

## 安装
```
git clone git@github.com:Konata9/jsdoc-vue.git

npm install 
```

## 使用方法
jsdoc 参数可以参照官方文档 [Command-line arguments to JSDoc](http://usejsdoc.org/about-commandline.html)

**如果没有在全局安装 jsdoc 请手动指定 jsdoc 所在的目录**
```
jsdoc -c ./conf.js -r

or

./node_modules/jsdoc -c ./config.js -r
```
**全局的配置可以参考[`config.js`](./conf.js)文件**
更多jsdoc配置文件的语法请参照官网[Configuring JSDoc with a configuration file](http://usejsdoc.org/about-configuring-jsdoc.html)

## 使用模板
[minami](https://github.com/Nijikokun/minami)

## 生成文档样式
请下载项目后，查看`example/doc/index.html`文件

## License
WTFPL
