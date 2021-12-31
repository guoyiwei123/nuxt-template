// import {get} from "@utils/request";
export const actions = {
    getNews({rootState}, data){
        return this.$axios.get("/api/test/?SearchWordRecommend");
        // const url = "";
        // return get(url);
    }
}