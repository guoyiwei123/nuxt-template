<template>
    <div>
        <NuxtLink to="/test">test</NuxtLink>
        <button @click="getData"> get data </button>
    </div>
</template>

<script>
export default {
	async asyncData({store}) {
        const res = await store.dispatch("test/getNews", {a: 1});
        return {
            testData: res
        }
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
            this.$store.dispatch("test/getNews", {a: 1}).then(res => {
                console.log(res);
            });
        }
    },
};
</script>
