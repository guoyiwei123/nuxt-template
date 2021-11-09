import {testService} from "../../models/test";
export const test = async (ctx) => {
    const res = await testService();
    ctx.body = res;
}