<template>
    <b-container>
        <Preloader />

        <!-- Header -->
        <b-row>
            <b-col>
                <Header />
            </b-col>
        </b-row>

        <!-- Content -->
        <b-row>
            <b-col cols="12" :md="$route.meta.full_width ? 12 : 8" class="mx-auto">
                <b-row class="overflow-hidden mt-4">
                    <b-col cols="12" md="12" class="px-4 py-2">
                        <router-view />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Footer />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Preloader from "./components/Preloader.vue"

export default {
    components: {
        Header,
        Footer,
        Preloader
    }    
}
</script>