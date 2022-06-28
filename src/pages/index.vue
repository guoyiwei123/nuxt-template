<template>
    <div class="home">
        home
    </div>
</template>
<script>
export default {
    async asyncData({$axios}){
        const res = await $axios.get("/abbos");
        console.log(res);
    }
}
</script>