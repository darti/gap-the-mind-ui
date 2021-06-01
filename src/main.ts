import { createApp } from "vue"
import App from "./App.vue"
import { store, key } from "./store"

import "virtual:windi.css"

import "./index.css"
import "./theme.css"

const app = createApp(App)

app.use(store, key)

app.mount("#app")
