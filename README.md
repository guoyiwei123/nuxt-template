# www.pandahelp.vip官网

## 命令说明

### 安装

```
$ npm i
```

### 本地开发

```
$ npm start
```

### 打包

```
$ npm run build
```

### 本地启动服务(必须先打包再启动)

```
$ npm run serve
```

## 项目目录说明
```
-   dist 打包目录
-   src 应用源码目录
        -   components  组件
        -   config 配置文件目录
        -   models 服务数据相关目录(包含请求服务端方法)
        -   pages 页面
        -   store 状态树
        -   utils 工具方法目录
-   static 静态资源目录
-   nuxt.config.js nuxt 配置文件
-   server.js 启动入口文件
```
## 注意事项
### 环境变量 `NUXT_NODE_ENV`
由于在执行过程中,nuxt会把NODE_ENV强制赋予`production`,导致接口配置无法区分正式和测试环境，这里新建使用自定义字段`NUXT_NODE_ENV`
环境区分以下三种:
-   `local`, 本地环境，本地开发时使用，会执行打包逻辑
-   `test`, 测试环境，服务会走测试环境接口，不会执行打包逻辑
-   `prod`, 正式环境，服务会走正式环境接口，不会执行打包逻辑