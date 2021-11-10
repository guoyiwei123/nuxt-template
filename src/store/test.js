import {get} from "@utils/request";
export const actions = {
    getNews({rootState}, data){
        const url = "/api/test/news";
        return get(url);
    }
}