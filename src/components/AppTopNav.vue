<template>
    <div class="navbar navbar-expand-sm bg-body-tertiary p-4">
        <div class="col-sm-10 align-middle">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <RouterLink :to="'/'" class="d-flex align-center" >
                        <img width="60px" height="60px" src="../assets/logo.svg"></img>
                        <h1 class="px-3 my-2 d-inline" style="font-size:40px">vuedit</h1>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="col-sm-2">
            <RouterLink v-if="user && userInfo?.id" class="m-0 mx-4" :to="`/u/${userInfo.id}`">{{ userInfo.id }}</RouterLink>
            <button class="btn btn-primary" v-if="!user" @click="() => googleSignIn(auth)">Continue with Google</button>
            <button class="btn btn-primary" v-else @click="() => googleSignOut(auth)">Sign out</button>
            <button class="btn m-2" @click="toggleTheme">Theme</button>
        </div>
    </div>
    <AppModal id="usernameModal" title="Choose Username">
        <form @submit.prevent="registerUserInfo" novalidate>
            <label for="username">Username <input v-model="username" class="form-control" id="username" name="username" placeholder="Username"></label>
            <small v-if="usernameError" class="form-text text-muted">{{ usernameError }}</small>
            <button class="btn btn-primary mx-2" type="submit">Continue</button>
        </form>
    </AppModal>
</template>

<script lang="ts" setup>
import { generateUsername } from '../helpers/username'
import { Ref, computed, onMounted, ref } from 'vue'
import { useFirebaseAuth, useCurrentUser, useDocument, useCollection } from 'vuefire'
import { googleSignIn, googleSignOut, usersRef, converter, User, db } from '../firebase'

import AppModal from './AppModal.vue'
import { CollectionReference, FieldValue, query, doc, setDoc, where, limit } from 'firebase/firestore'
import { Modal } from 'bootstrap'
import { onAuthStateChanged } from 'firebase/auth'

import { userData } from '../stores/userData'

const user = useCurrentUser()
const auth = useFirebaseAuth()!  // nullable if on server-side

const usernameModal = computed(() => user.value ? new Modal('#usernameModal') : null)

const username = ref<string>(generateUsername())
const usernameError = ref<string>()

const {
    data: userQuery,
    pending: userPending,
    promise
} = useCollection(() => user.value
    ? query(usersRef, where('uid', '==', user.value.uid), limit(1))
    : null
)

const userInfo = computed(() => {
    if (userQuery.value.length > 0) {
        const user = userQuery.value[0]!

        userData.id = user.id
        userData.uid = user.uid
        return user
    }

    if (!userPending.value)
        usernameModal.value?.show()
    return null
})

const registerUserInfo = async () => {
    if (!user.value?.uid) return

    if (!username.value) {
        usernameError.value = 'Username required.'
        return
    }

    try {
        await setDoc(doc(usersRef, username.value), {
            uid: user.value.uid
        })
        usernameModal.value?.hide()
    }
    catch (error) {
        console.error(error)
        usernameError.value = 'Username exists'
    }
}

const dark = ref<boolean>(false)

const toggleTheme = () => {
    const root = document.querySelector('html')!
    dark.value = !dark.value
    root.setAttribute('data-bs-theme', dark.value ? 'dark' : '')
}

</script>