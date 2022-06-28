import {getClientIP} from "~utils/server";
export const state = (() => ({
    // ip
    ip: ""
}))
export const mutations = {
    // 设置ip信息
    setIp: (state, { ip }) => {
        state.ip = ip;
    }
}
export const actions = {
    // 服务端渲染前执行
    nuxtServerInit({ commit }, { req }) {
        const ip = getClientIP(req)
        ip && commit("setIp", {ip});
    }
}