export const state = () => ({
    // udid
    udid: "",
    // 设备型号
    deviceModel: ""
})
export const mutations = {
    // 设置设备信息
    setDeviceInfo: (state, {udid, deviceModel}) => {
        state.udid = udid;
        state.deviceModel = deviceModel;
    }
}
