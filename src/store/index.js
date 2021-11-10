// 保存信息有效时长
const SAVE_INFO_TIME = 30 * 3600 * 24 * 1000;
// 获取ip
const getIP = (ctx) => {
    let ip
        //cdn-src-ip，用户本地ip
        if (ctx.request.headers['cdn-src-ip'] != undefined) {
            ip = ctx.request.headers['cdn-src-ip']
        //x-forwarded-for=true时，ctx.request.ips返回一个ip数组，默认取第一个ip（即client-ip），客户端ip
        //x-forwarded-for=false时，ctx.request.ips返回空数组
        } else if (ctx.request.ips.length != 0) {
            ip = ctx.request.ips[0]
        //cdn-src-ip不存在时，x-real-ip为用户本地ip
        //cdn-src-ip存在时，x-real-ip为服务器代理ip
        } else if (ctx.request.headers['x-real-ip'] != undefined) {
            ip = ctx.request.headers['x-real-ip']
        //proxy-ip，docker代理ip
        } else if (ctx.req.connection.remoteAddress != undefined) {
            ip = ctx.req.connection.remoteAddress
        //proxy-ip，docker代理ip
        } else if (ctx.req.socket.remoteAddress != undefined) {
            ip = ctx.req.socket.remoteAddress
        } else {
            ip = ''
        }
        return ip;
}
export const state = (() => ({
    // ip
    ip: ""
}))
export const mutations = {
    // 设置系统信息
    setServerInfo: (state, {ip}) => {
        state.ip = ip;
    }
}
export const actions = {
    // 服务端渲染前执行
    nuxtServerInit({ commit }, { req }) {
        const { ctx } = req;
        // 获取udid
        const udid = ctx.query["udid"] || ctx.cookies.get("udid") || "";
        const deviceModel = ctx.query["PRODUCT_NAME"] || ctx.cookies.get("device-model") || "";
        // 获取ip
        const ip = getIP(ctx);
        // 判断链接上是否有udid，有则更新udid
        if(ctx.query.udid){
            // 将udid及设备信息保存到cookie中
            const date = new Date(Date.now() + SAVE_INFO_TIME);
            ctx.cookies.set("udid", udid, { expires: date });
            ctx.cookies.set("device-model", deviceModel, {expires: date});
        }
        // 更新系统信息
        commit("setServerInfo", {
            ip
        });
        // 更新设备信息
        commit("device/setDeviceInfo", {
            udid,
            deviceModel
        });
    }
}