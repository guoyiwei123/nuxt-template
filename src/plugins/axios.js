export default function ({ $axios, $config, error: nuxtError}) {
    // 获取真实接口API
    const getRealAPIUrl = (url) => {
        const {apis} = $config;
        // 获取路由
        const routes = url.match(/^\/([\w|_|-]+)/);
        const route = routes && routes[1] || '';
        // 获取api
        const api = apis[route] || "";
        return `${api}${url.replace(`/${route}`, '')}`;
    }
    $axios.defaults.timeout = 15000;
    $axios.onError(error => {
        const {url, method, params, data} = error.config;
        let message = "";
        message += `接口url: ${ getRealAPIUrl(url)}\n`;
        message += `请求方式: ${method}\n`;
        message += `请求参数: ${data || JSON.stringify(params || {})}\n`;
        message += `响应码: ${error?.response?.status || ""}\n`;
        message += `错误信息: ${error.message}`;
        nuxtError({
            statusCode: 500,
            message
        });
        return Promise.resolve(false);
    })
    $axios.onResponse(response => {
        const {data} = response;
        return data;
    })
}