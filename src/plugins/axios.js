export default function ({ $axios, $config}) {
    $axios.defaults.timeout = 15000;
    $axios.onError(error => {
        console.log(error);
    })
    $axios.onResponse(response => {
        const {apis} = $config;
        const {config, data} = response;
        // 获取路由
        const route = config.url.replace(/^\/|(\?.*)/g, "");
        // 获取api
        const api = apis[route];
        // 截取参数
        const search = config.url.split("?")[1];
        // 拼接完整api
        console.log(`${api}${search?`?${search}`: ""}`)
        return data;
    })
}