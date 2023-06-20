<template>
    <div>
        <b-row>
            <b-col cols="12">
                <h1>Open API</h1>
                <hr />
            </b-col>
            <b-col cols="12">
                Redr.me comes with Publicly Usable API with and can be used with no limits.
                <hr />
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card bg-variant="dark" text-variant="white">
                    <b-card-text>
                        <b-row>
                            <b-col xs="12" sm="3" class="text-left">
                                <strong class="text-success">URL</strong>
                            </b-col>
                            <b-col xs="12" sm="9" class="text-left">
                                <code>POST {{ $apiendpoints.link }}</code>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col xs="12" sm="3" class="text-left">
                                <strong class="text-warning">Body</strong>
                            </b-col>
                            <b-col xs="12" sm="9" class="text-left">
                                <code>
                                    {<br/>
                                    &nbsp;&nbsp;"target_url": "https://google.com"<br/>
                                    }
                                </code>
                            </b-col>
                        </b-row>
                        <hr />
                        <b-row>
                            <b-col xs="12" sm="3" class="text-left">
                                <strong class="text-warning">Response</strong>
                            </b-col>
                            <b-col xs="12" sm="9" class="text-left">
                                <code>
                                    {<br/>
                                    &nbsp;&nbsp;"code": "tu5sbe", <br/>
                                    &nbsp;&nbsp;"created_on": "2023-03-20T14:16:21.795494+05:30", <br/>
                                    &nbsp;&nbsp;"hits": 0, <br/>
                                    &nbsp;&nbsp;"modified_on": "2023-03-20T14:16:21.795518+05:30", <br/>
                                    &nbsp;&nbsp;"target_url": "https://google.com", <br/>
                                    &nbsp;&nbsp;"token": "21899dec-1446-4434-a694-52495074d5de", <br/>
                                    &nbsp;&nbsp;"user_email": null <br/>
                                }</code>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>    
</template>

<script>
export default {
    mounted() {
        setTimeout(() => this.$store.hidePreloader(), 500)
    },
}
</script>