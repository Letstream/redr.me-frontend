<template>
    <h5 class="logo-sub">Manage your Link</h5>
    <small>You can save this page's link to edit your shorterned URL at any time</small>
    <hr />
    <b-table-simple>
        <b-thead head-variant="dark">
            <b-tr>
                <b-th>Created On</b-th>
                <b-th>URL</b-th>
                <b-th>Target URL</b-th>
                <b-th>Hits</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-if="loading">
                <b-td v-for="(v, i) in 4" :key="i"><font-awesom-icon :icon="spinnerIcon" spin /></b-td>
            </b-tr>
            <b-tr v-else>
                <b-td>{{ link.created_on.split("T")[0] }}</b-td>
                <b-td>{{ link.public_url }}</b-td>
                <b-td>{{ link.target_url }}</b-td>
                <b-td>{{ link.hits }}</b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>

    <b-form @submit.prevent="save" v-if="!loading">
        <b-row class="text-left">
            <b-col cols="12" md="12" class="text-center">
                <b-form-group
                    label="Enter new Target URL"
                    description="Enter proper URL including http:// or https://"
                >
                    <b-input-group>
                        <template #append>
                            <b-button type="submit" :disabled="submit_disabled" class="btn-primary">
                                Update
                            </b-button>
                        </template>
                        <b-form-input
                            id="url"
                            v-model="update_data.target_url"
                            placeholder="Enter URL to Shorten"
                            required
                            min="0"
                            size="lg"
                            autofocus
                            type="url"
                        ></b-form-input>
                    </b-input-group>
                </b-form-group>
            </b-col>
        </b-row>
    </b-form>
</template>


<script>
export default {
    data() {
        return {
            link: null,
            update_data: {
                target_url: null
            },
            token: this.$route.params.token,

            loading: true,
            submit_disabled: false
        }
    },
    mounted() {
        this.load_data()
        setTimeout(() => this.$store.hidePreloader(), 500)
    },
    methods: {
        load_data() {
            this.loading = true

            this.$http({
                method: 'GET',
                url: `${this.$apiendpoints.token_link}${this.token}/`
            }).then(
                (res) => {
                    this.loading = false
                    this.link = res
                    this.update_data.target_url = this.link.target_url
                },
                (err) => {
                    this.$router.push("/")
                }
            )
        },
        save() {

            let payload = {
                target_url: this.link.target_url
            }

            this.submit_disabled = true

            this.$http({
                method: 'PATCH',
                url: `${this.$apiendpoints.token_link}${this.token}/`,
                data: {target_url: this.update_data.target_url}
            }).then(
                (res) => {
                    this.submit_disabled = false
                    this.$helpers.showToast('Target URL updated successfully!', {})
                    this.link.target_url = this.update_data.target_url
                },
                (err) => {
                    let response = err.response
                    if(response.status == 400) {
                        this.api_errors = response.data.error
                    } else {
                        this.$helpers.showToast('An Unknown Error Occurred. Please Try Again!', {
                            type: 'error'
                        })
                    }
                    this.submit_disabled = false
                }
            )
        }    
    }
}
</script>