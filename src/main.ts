import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth, VueFireAppCheck } from 'vuefire'
import { firebaseApp } from './firebase'
import { router } from './routes'

import './design/style.scss'
import * as bootstrap from 'bootstrap'
import { ReCaptchaV3Provider } from 'firebase/app-check'

const app = createApp(App) 

app.use(router)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
        VueFireAppCheck({
            provider: new ReCaptchaV3Provider(import.meta.env.VITE_FIREBASE_RECAPTCHA_SECRET),
            debug: process.env.NODE_ENV !== 'production',
            isTokenAutoRefreshEnabled: true
        })
    ]
})

app.mount('#app')