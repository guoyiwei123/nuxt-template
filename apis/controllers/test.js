const {testService} = require("../models/test")
module.exports = {
    news: async (ctx) => {
        const res = await testService();
        ctx.body = res;
    }
}