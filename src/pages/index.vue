<template>
    <div>
        <NuxtLink to="/test">test</NuxtLink>
        <button @click="getData"> get data </button>
    </div>
</template>

<script>
export default {
	async asyncData({store, app}) {
        // await app.$axios.get("/abbos?GetPopularApp").then(res => {
        //     console.log(res);
        // })
        await app.$models.app.getAppList().then(res => {
            console.log(res);
        });
        return {};
	},
	head() {
		return {
			title: "1111",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "home page",
				},
				{
					hid: "keywords",
					name: "keywords",
					content: "keywords",
				},
			],
		};
	},
    mounted() {
        console.log(this.testData);
    },
    methods: {
        getData(){
            this.$models.app.getAppList().then(res => {
                console.log(res);
            });
        }
    },
};
</script>
<style lang="scss" scoped>
    @import "~/assets/scss/index.scss";
</style>
