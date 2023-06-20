<template>
    <b-row>
        <b-col cols="12">
            100% <span class="text-primary font-bold">Anonymous</span> | 
            Open <router-link :to="{name: 'docs'}" class="text-primary font-bold">API <font-awesome-icon :icon="externalIcon" /></router-link> | 
            Powered by <a href="//www.theletstream.com/">Letstream<sup>&reg;</sup></a>
            | <a href="https://github.com/letstream/redr.me" target="_blank" class="">
                Fork On
                <font-awesome-icon :icon="githubIcon" class="btn-icon-lg text-dark" />
            </a>
        </b-col>
    </b-row>
    <b-row>
        <b-col cols="12">
            {{ urls }} URLs Shortened | {{ hits }} total redirects
        </b-col>
    </b-row>
</template>

<script>
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons'

export default {
    data() {
        return {
            urls: 0,
            hits: 0
        }
    },
    computed: {
        githubIcon: () => faGithub,
        externalIcon: () => faExternalLinkSquare
    },
    mounted() {
        this.load_stats()
    },
    methods: {
        load_stats() {
            this.$http({
                method: 'GET',
                url: this.$apiendpoints.stats
            }).then(
                (res) => {
                    this.urls = res.total_urls
                    this.hits = res.total_redirects
                },
                (err) => {
                    // Fail Silently
                    this.urls = "N/A"
                    this.hits = "N/A"
                }
            )
        }
    }
}
</script>
