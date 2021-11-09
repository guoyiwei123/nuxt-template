const serveStatic = require("serve-static");
const {resolve} = require("path");
module.exports = {
    head: {
        title: 'www.pandahelp.vip-ssr',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    // 是否自动引入组件
    components: true,
    // 环境
    dev: process.env.NUXT_NODE_ENV == 'local',
    // 关闭开发者提示
    telemetry: false,
    // 打包配置
    build: {
        // webpack扩展配置
        extend(config){
            config.resolve.alias = {
                ...config.resolve.alias,
                "@components": resolve(__dirname, "./src/components"),
                "@utils": resolve(__dirname, "./src/utils"),
                "@store": resolve(__dirname, "./src/store"),
                "@config": resolve(__dirname, "./src/config"),
                "@models": resolve(__dirname, "./src/models")
            }
        }
    },
    // 打包之后的目录
    buildDir: "dist",
    // 服务器配置
    server: {
        port: 3000
    },
    // 应用源码目录
    srcDir: "src",
    // 路由基础配置
    router: {
        base: "/"
    },
    // 服务器端渲染中间件
    serverMiddleware: [
        { path: '/api', handler: '~/services/index.js' },
        { path: '/static', handler: serveStatic(__dirname + '/static') }
    ],
    // 运行时配置
    publicRuntimeConfig: {},
}