const {getAPIHost} = require("../utils");
const {get} = require("../utils/request")
const newsBaseAPI = getAPIHost("news");
module.exports = {
    testService: async () => {
        const res = await get(`${newsBaseAPI}?getsite&id=6`);
        return res;
    }
}