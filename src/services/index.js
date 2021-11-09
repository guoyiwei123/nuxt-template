import Koa from "koa";
import Router from "koa-router";
import routes from "./router";
const app = new Koa();
const router = new Router({});
app.use(router.routes());
routes.forEach(route => {
    const {path, handler} = route;
    router.all(path, handler);
})
module.exports = app.callback();