import axios from "axios";
axios.defaults.timeout = 15000;
// http request 拦截器
axios.interceptors.request.use(config => config, err => Promise.reject(err));
// http response 拦截器
axios.interceptors.response.use(response => response, err => Promise.reject(err));
// 配置基础接口
axios.defaults.baseURL = process.client?"": process.env.baseUrl;
// get请求
export const get = async (url, params={}) => {
    const paramsList = [];
    Object.keys(params).forEach(key => {
        if (key != "debugService") {
            paramsList.push(`${key}=${params[key]}`);
        }
    })
    const paramsStr = paramsList.join("&");
    if (params.debugService == 1) {
        return `${url}?${paramsStr}`;
    }
    const res = await axios.get(`${url}?${paramsStr}`).then(res => res.data);
    return res;
}
// post请求
export const post = async (url, body={}, headers = {}) => {
    if (body.debugService == 1) {
        Reflect.deleteProperty(body, "debugService");
        return {
            url: url,
            body: body
        };
    }
    Reflect.deleteProperty(body, "debugService");
    const res = await axios.post(url, body, {
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    }).then(res => res.data)
    return res;
}