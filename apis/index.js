const Koa = require("koa");
const Router = require("koa-router");
const {resolve} = require("path");
const {getBreadthFileList} = require("./utils");
const app = new Koa();
const router = new Router({});
// 控制器路径
const ctrlPath = resolve(__dirname, "./controllers");
// 广度遍历控制层路径
getBreadthFileList(ctrlPath).forEach(item => {
    const path = item.replace(/\.[^.]*$/, '');
    const ctrlRoute = require(path);
    const routePath = path.replace(ctrlPath, "")
        .replace("\\", "/")
        .replace(/\/index$/, "")
        .replace(/index\//, "");
    Object.keys(ctrlRoute).forEach(key => {
        const route = `${routePath}${key === "index"?"": `/${key}`}`;
        router.all(route, ctrlRoute[key]);
    })
})
app.use(router.routes());
module.exports = app.callback();