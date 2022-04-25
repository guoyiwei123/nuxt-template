export const getAppList = function(){
    return this.$axios.get("/abbos?GetPopularApp");
}