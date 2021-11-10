<template>
    <div>
        <NuxtLink to="/test">test</NuxtLink>
    </div>
</template>

<script>
export default {
	async asyncData({store}) {
        const res = await store.dispatch("test/getNews", {a: 1});
        console.log(res);
        return {}
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
};
</script>
