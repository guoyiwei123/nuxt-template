const {resolve} = require("path");
const {readdirSync, lstatSync} = require("fs");
const {baseAPIHost} = require("../config");
const isDir = (path) => {
    return lstatSync(path).isDirectory();
}
module.exports = {
    // 获取接口域名配置
    getAPIHost: (key) => {
        const apis = baseAPIHost[key];
        if(apis){
            const apiEnv = process.env.NUXT_NODE_ENV != "production"?"test": "prod";
            return apis[apiEnv];
        }
        return null;
    },
    // 广度遍历
    getBreadthFileList: (dirPath) => {
        // 文件目录
        const fileList = [];
        // 待遍历的目录
        const dirList = [dirPath];
        // 判断待遍历的目录是否为空
        while(dirList.length){
            const dirPath = dirList.shift();
            readdirSync(dirPath).forEach(item => {
                const filePath = resolve(dirPath, item);
                // 判断是否为目录
                isDir(filePath)?dirList.push(filePath): fileList.push(filePath);
            })
        }
        return fileList;
    }
}