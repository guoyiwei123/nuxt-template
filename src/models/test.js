import {getAPIHost} from "../utils";
import {get} from "../utils/request";

const newsBaseAPI = getAPIHost("news");
export const testService = async () => {
    const res = await get(`${newsBaseAPI}?getsite&id=6`);
    return res;
}