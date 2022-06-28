const {resolve} = require('path');
const baseAPIs = require('./src/config/api');
// 基础路径
const basePath = '';
// 接口路径
const baseAPIPath = '/api';
// 端口号
const port = 3000;
// 环境
const env = process.env.NODE_ENV;
// 判断是否为正式环境
const prodEnv = env === 'production';
// 接口代理配置
const proxy = {};
const apis = {};
Object.keys(baseAPIs).forEach(key => {
    const url = baseAPIs[key][env];
    apis[key] = url;
    proxy[`${baseAPIPath}/${key}`] = {
        target: url,
        pathRewrite: {
            [`^${baseAPIPath}/${key}`]: ''
        }
    }
})
module.exports = {
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
            {hid: 'description', name: 'description', content: ''},
            {hid: 'keywords', name: 'keywords', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    // 关闭开发者提示
    telemetry: false,
    // 设置别名
    alias: {
        '~components': resolve(__dirname, './src/components'),
        '~utils': resolve(__dirname, './src/utils'),
        '~store': resolve(__dirname, './src/store'),
        '~config': resolve(__dirname, './src/config'),
        '~assets': resolve(__dirname, './src/assets')
    },
    // 打包配置
    build: {
        extractCSS: prodEnv,
        cache: !prodEnv,
        // 开启多线程打包
        parallel: true,
        devtools: prodEnv,
        postcss: {
            plugins: {
                'autoprefixer': {}
            }
        }
    },
    // 应用源码目录
    srcDir: 'src',
    // 打包之后的目录
    buildDir: 'dist',
    // 自定义目录
    dir: {
        static: resolve(__dirname, './public')
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
    // 路由跳转加载样式
    loading: {
        color: 'blue'
    },
    buildModules: [
        '@nuxt/postcss8'
    ],
    // 模块
    modules: [
        '@nuxtjs/axios'
    ],
    plugins: [
        '~/plugins/axios'
    ],
    publicRuntimeConfig: {
        apis
    },
    privateRuntimeConfig: {
        apis
    },
    axios: {
        proxy: true,
        prefix: baseAPIPath
    },
    proxy
}