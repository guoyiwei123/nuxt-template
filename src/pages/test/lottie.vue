<template>
    <div>
        <div id="lottie" ref="container">
        </div>
        <script src="/js/lottie.js"></script>
    </div>
</template>
<script>
export default {
    head(){
        return {
            link: [
                {rel: 'stylesheet', href: '/css/lottie.css'}
            ]
        }
    },
    mounted() {
        lottie.loadAnimation({
            container: this.$refs['container'],
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            path: '/box_static_display.json'
        });
    }
}
</script>
<style>

</style>