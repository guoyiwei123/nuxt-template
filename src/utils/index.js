import {createHash} from "crypto";
import {baseAPIHost} from "../config/url";
// 获取接口域名配置
export const getAPIHost = (key) => {
    const apis = baseAPIHost[key];
    if(apis){
        const apiEnv = process.env.NUXT_NODE_ENV != "production"?"test": "prod";
        return apis[apiEnv];
    }
    return null;
}

// 获取用户真实ip
export const getRealIP = (req) => {
    return req.headers["cdn-src-ip"] 
        || (req.headers["x-forwarded-for"]?req.headers["x-forwarded-for"][0]: "")
        || req.headers["x-real-ip"]
        || req.socket.remoteAddress;
}

// md5加密
export const md5 = (value) => {
    const hash = createHash("md5");
    hash.update(value);
    return hash.digest("hex");
}