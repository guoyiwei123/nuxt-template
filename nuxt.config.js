const { resolve } = require("path");
const baseAPIs = require("./src/config/api");
// 基础路径
const basePath = "";
// 接口路径
const baseAPIPath = "/api";
// 端口号
const port = 3000;
const env = process.env.NODE_ENV != "production"?"test": "prod";
const proxy = {};
Object.keys(baseAPIs).forEach(key => {
    const url = baseAPIs[key][env];
    proxy[`${baseAPIPath}/${key}`] = {
        target: url, 
        pathRewrite: { 
            [`^${baseAPIPath}/${key}`]: ""
        }
    }
})
module.exports = {
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    // 环境
    dev: process.env.NODE_ENV == "local",
    // 关闭开发者提示
    telemetry: false,
    // 设置别名
    alias: {
        "@components": resolve(__dirname, "./src/components"),
        "@utils": resolve(__dirname, "./src/utils"),
        "@store": resolve(__dirname, "./src/store"),
        "@config": resolve(__dirname, "./src/config"),
        "@styles": resolve(__dirname, "./src/assets/styles")
    },
    // 打包配置
    build: {
        // 开启缓存
        cache: true,
        // 开启多线程打包
        parallel: true,
        devtools: process.env.NODE_ENV != "production"
    },
    // 应用源码目录
    srcDir: "src",
    // 打包之后的目录
    buildDir: "dist",
    // 自定义目录
    dir: {
        static: resolve(__dirname, "./public")
    },
    // 服务器配置
    server: {
        port
    },
    // 路由配置
    router: {
        // 基础配置
        base: basePath,
        // 自定义路由配置
        routes: []
    },
    css: [
        "~/assets/scss/commons/reset.scss",
        "~/assets/scss/commons/base.scss",
        "~/assets/scss/commons/px2rem.scss",
    ],
    // 路由跳转加载样式
    loading: {
        color: "blue"
    },
    // 模块
    modules: [
        "@nuxtjs/axios"
    ],
    plugins: [
        "~/plugins/axios",
        "~/plugins/request"
    ],
    axios: {
        proxy: true, // Can be also an object with default options,
        prefix: baseAPIPath
    },
    proxy
}