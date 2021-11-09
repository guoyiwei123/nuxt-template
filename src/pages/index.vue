<template>
  <Tutorial/>
</template>

<script>
import {testService} from "@models/test";
export default {
    async asyncData({req, res}){
        const result = await testService();
        console.log(result);
        console.log(process.env.NUXT_NODE_ENV);
        return {};
    }
}


</script>
