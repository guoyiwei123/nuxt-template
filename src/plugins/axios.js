export default function ({ $axios, $config, error}) {
    // 获取真实接口API
    const getRealAPIUrl = (url) => {
        const {apis} = $config;
        // 获取路由
        const routes = url.match(/^\/([\w|_|-]+)/);
        const route = routes && routes[1] || '';
        // 获取api
        const api = apis[route];
        return `${api}${url.replace(`/${route}`, '')}`;
    }
    $axios.defaults.timeout = 15000;
    $axios.onError(err => {
        const {url, method, params, data} = err.config;
        console.log("真实接口api: ", getRealAPIUrl(url));
        console.log("请求方式:", method);
        console.log("参数: ", data || JSON.stringify(params || {}));
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