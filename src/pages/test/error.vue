<template>
    <div>error test page</div>
</template>
<script>
export default {
    async asyncData({$axios}){
        await $axios.get("http://abc.com/abc?a=1");
        console.log("next");
    }
}
</script>