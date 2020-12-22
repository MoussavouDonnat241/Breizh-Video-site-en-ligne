
<template>
        <router-view />
</template>

<script>
    export default {
        name: "App",
        watch: {
            $route(to) {
                document.title = to.meta.title || "BreizhVideo";
            },
        immediate: true,
        },
    };
</script>

<style scoped>
    body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        flex-grow: 0.5;
        flex-direction: column;
    }
    #app {
        font-family: Roboto, 'Ubuntu';
        color: darkorange;
        height: 100%;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
</style>
