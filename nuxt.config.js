const serveStatic = require("serve-static");
const { resolve } = require("path");
const basePath = "/extend";
const port = 3000;
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
            { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }
        ]
    },
    // 是否自动引入组件
    components: true,
    // 环境
    dev: process.env.NUXT_NODE_ENV == 'local',
    // 关闭开发者提示
    telemetry: false,
    // 设置别名
    alias: {
        "@components": resolve(__dirname, "./src/components"),
        "@utils": resolve(__dirname, "./src/utils"),
        "@store": resolve(__dirname, "./src/store"),
        "@config": resolve(__dirname, "./src/config"),
    },
    // 打包配置
    build: {
        // 启动css提取
        extractCSS: true,
    },
    // 打包之后的目录
    buildDir: "dist",
    // 服务器配置
    server: {
        port
    },
    // 应用源码目录
    srcDir: "src",
    // 路由配置
    router: {
        // 基础配置
        base: basePath,
        // 自定义路由配置
        routes: []
    },
    // 服务器端渲染中间件
    serverMiddleware: [
        { path: '/static', handler: serveStatic(__dirname + '/static') }
    ],
    // css配置
    css: [
        resolve(__dirname, "./styles/index.scss")
    ],
    // 运行时配置
    publicRuntimeConfig: {
        static: `${basePath}/static`
    },
    // 路由跳转加载样式
    loading: {
        color: "blue"
    },
    // 模块
    modules: [
        "@nuxtjs/axios"
    ],
    plugins: [
        '~/plugins/axios'
    ],
    axios: {
        proxy: true, // Can be also an object with default options
        prefix: basePath,
    },
    proxy: {
        [`${basePath}/api/test/`]: {target: "http://abbos.api.tongbu.com/web/responsive", pathRewrite: {"^.*?/api/test": ""}}
    }
}