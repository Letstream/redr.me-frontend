<template>
    <b-row class="mt-4" id="header">
        <b-col cols="12">
            <router-link :to="{name: 'home'}">
                <h1 class="logo">
                    <TextLogo />
                </h1>
            </router-link>
        </b-col>
        <b-col cols="12">
            <h5 class="logo-sub">Shorten URLs Anonymously!</h5>
        </b-col>
    </b-row>    
</template>

<script>
import TextLogo from "./TextLogo.vue"

export default {
    components: {
        TextLogo
    }
}
</script>

<style lang="scss">
    #header {
        .logo {
            height: 60px;
        }
        .logo-sub {
            font-weight: 500;
        }
    }
</style>