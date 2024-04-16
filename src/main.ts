import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import { router } from './routes'

import './design/style.scss'
import * as bootstrap from 'bootstrap'

const app = createApp(App) 

app.use(router)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ]
})

app.mount('#app')