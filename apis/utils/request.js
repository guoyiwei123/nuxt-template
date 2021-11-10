const axios = require("axios");
axios.defaults.timeout = 15000;
// http request 拦截器
axios.interceptors.request.use(config => config, err => Promise.reject(err));
// http response 拦截器
axios.interceptors.response.use(response => response, err => Promise.reject(err));
module.exports = {
    // get请求
    get: async (url, params={}) => {
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
    },
    // post请求
    post: async (url, body={}, headers = {}) => {
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
}