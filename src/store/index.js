import { defineStore } from 'pinia'

import state from "./state"
import actions from "./actions"

export default defineStore('core', {
    state: () => state,
    actions
})
