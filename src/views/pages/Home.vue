<template>
    <div>
        <b-form @submit.prevent="save">
            <b-row class="text-left">

                <!-- URL -->
                <b-col cols="12" md="12" class="text-center">
                    <b-form-group
                        label="Enter URL to Shorten"
                        description="Enter proper URL including http:// or https://"
                    >
                        <b-input-group>
                            <template #append>
                                <b-button type="submit" :disabled="submit_disabled" class="btn-primary">
                                    Shorten It!
                                </b-button>
                            </template>
                            <b-form-input
                                id="url"
                                v-model="link.target_url"
                                placeholder="Enter URL to Shorten"
                                required
                                min="0"
                                size="lg"
                                autofocus
                                type="url"
                                aria-describedby="target-url-feedback"
                            ></b-form-input>
                        </b-input-group>
                        <small class="d-block text-danger mt-1" v-if="api_errors.target_url">
                            <strong>Error:</strong> {{ api_errors.target_url.join(", ") }}
                        </small>
                    </b-form-group>
                </b-col>

                <!-- Shortened URL -->
                <b-col cols="12" md="12" class="mt-3" v-if="link.public_url">
                    <b-form-group
                        label="Short URL"
                        label-for="url"
                    >
                        <b-input-group
                        >
                            <template #append>
                                <b-button type="button" @click.prevent="copy(link.public_url)" class="btn-primary">
                                    <font-awesome-icon :icon="copyIcon" class="btn-icon" />
                                </b-button>
                                <b-button type="button" class="btn-secondary">
                                    <a :href="link.public_url" target="_blank" class="h-100 text-white">
                                        <font-awesome-icon :icon="externalIcon" class="btn-icon" />
                                    </a>
                                </b-button>
                                <b-button type="button" class="btn-secondary">
                                    <router-link :to="{name: 'manage-link', params: {token: link.token}}" class="h-100 text-white">
                                        <font-awesome-icon :icon="editIcon" class="btn-icon" />
                                    </router-link>
                                </b-button>
                            </template>
                            <b-form-input
                                id="public-url"
                                v-model="link.public_url"
                                size="lg"
                                readonly
                            ></b-form-input>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>

import { faPaste } from "@fortawesome/free-regular-svg-icons"
import { faExternalLink, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

export default {
    data() {
        return  {
            link: {
                target_url: "https://",
                public_url: null,
                token: null
            },


            submit_disabled: false,
            api_errors: {}
        }
    },
    computed: {
        copyIcon: () => faPaste,
        externalIcon: () => faExternalLink,
        editIcon: () => faPenToSquare
    },
    mounted() {
        setTimeout(() => this.$store.hidePreloader(), 500)
    },
    methods: {
        save() {

            let payload = {
                target_url: this.link.target_url
            }

            this.submit_disabled = true

            this.$http({
                method: 'POST',
                url: this.$apiendpoints.link,
                data: payload
            }).then(
                (res) => {
                    this.submit_disabled = false
                    this.link.public_url = res.public_url
                    this.link.token = res.token
                    this.reset_state()
                },
                (err) => {
                    let response = err.response
                    if(response.status == 400) {
                        this.api_errors = response.data
                    } else {
                        this.$helpers.showToast('An Unknown Error Occurred. Please Try Again!', {
                            type: 'error'
                        })
                    }
                    this.submit_disabled = false
                }
            )
        },
        reset_state() {
            this.link.target_url = "https://"
            this.api_errors = {}
            this.submit_disabled = false
        },
        copy(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.$helpers.showToast('URL Copied Succesfully!', {})
            }, () => {
                this.$helpers.showToast('An error occurred while copying text to clipboard!', {
                    type: 'error'
                })
            })
        }
    }
}
</script>