<template>
    <div id="preloader" :class="{'hide': !$store.preloader_visible}">
        <div class="preloader-text">
            <h3 class="logo mb-1"><TextLogo /></h3>
            Loading...
        </div>
    </div>
</template>

<script>
import TextLogo from './TextLogo.vue'

export default {
    components: {
        TextLogo
    }
}
</script>

<style lang="scss">
    #preloader {

        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 999;

        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        transition: 1s all;

        &.hide {
            top: -120vh;
            animation: autohide 2s linear;
        }
        @keyframes autohide {
            from {display: flex;}
            to {display: none;}
        }
    }
</style>