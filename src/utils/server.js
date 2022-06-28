/**
 * 获取客户端ip
 * @param req {Object} 请求对象
 * **/
export const getClientIP = (req) => {
    /**
     * 优先级: 反向代理ip -> 连接远程ip -> socket ip
     * **/
    return req.headers['x-real-ip']
        || (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(",")[0])
        || req.connection.remoteAddress
        || req.socket.remoteAddress
        || req.connection.socket.remoteAddress;
}