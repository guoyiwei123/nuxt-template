const Koa = require('koa');
const { Nuxt } = require("nuxt");
const config = require("./nuxt.config");
async function start() {
    // 实例化koa对象
    const app = new Koa();
    // 实例化nuxt对象
    const nuxt = new Nuxt(config);
    await nuxt.ready();
    app.use((ctx) => {
        ctx.status = 200;
        ctx.respond = false;
        ctx.req.ctx = ctx
        nuxt.render(ctx.req, ctx.res);
    });
    // 绑定端口号
    app.listen(config.server.port);
}
start();