export const actions = {
    getNews({rootState}, data){
        return this.$axios.get("/api/test/?SearchWordRecommend");
    }
}