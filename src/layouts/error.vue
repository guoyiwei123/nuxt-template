<template>
    <div>error</div>
</template>
<script>
export default {
    props: ["error"],
    layout: 'error',
    mounted() {
        console.log(this.error);
    }
}
</script>