<template>
    <Loading v-if="loading"></Loading>
    <AppTile v-else>
        <div v-if="userInfo">
            <div class="row">
                <h1>{{ username }}</h1>
                <RouterLink :to="route.path" style="text-decoration: none; color: inherit;" >{{ route.path }}</RouterLink>
            </div>
        </div>
        <div v-else>
            <h1>User not found</h1>
            <span>No user goes by this name.</span>
        </div>
    </AppTile>
</template>

<script lang="ts" setup>
import { useCurrentUser, useDocument } from 'vuefire';
import { usersRef } from '../firebase';
import { doc } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';

import Loading from '../components/Loading.vue';
import AppTile from '../components/AppTile.vue';

const loading = ref<boolean>(true)

const route = useRoute()

const user = useCurrentUser()

const canEdit = computed(() => user.value?.uid === userInfo.value?.uid)

const username = computed(() => route.params.id && typeof route.params.id === 'string'
    ? route.params.id
    : null)

const {
    data: userInfo,
    error,
    pending,
    promise
} = useDocument(username.value 
        ? doc(usersRef, username.value)
        : null)

promise.value.then(() => loading.value = false)
</script>