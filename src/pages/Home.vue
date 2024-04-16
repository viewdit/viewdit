<template>
    <Loading v-if="loading"></Loading>
    <AppTile v-else>
        <div class="d-flex justify-content-between">
            <div>
                <select class="form-select">
                    <option>Best</option>
                    <option>New</option>
                    <option>Top</option>
                </select>
            </div>
            <div v-if="user" class="d-flex">
                <div class="vr mx-4"></div>
                <button class="btn btn-primary" @click="subviewModal?.show()">Create Subview</button>
            </div>
        </div>
    </AppTile>
    <AppModal v-if="user" id="subviewModal" title="Create Subview">
        <form @submit.prevent="createSubview" novalidate>
            <label for="subviewName">Subview name<input v-model="subviewName" class="form-control" id="subviewName" name="subviewName" placeholder="Subview name"></label>
            <small v-if="subviewError" class="form-text text-muted">{{ subviewError }}</small>
            <button class="btn btn-primary mx-2" type="submit">Continue</button>
        </form>
    </AppModal>
    <AppTile v-if="!loading && !posts.length">
        <h1>No Posts</h1>
        <p>No posts found.</p>
    </AppTile>
    <PostTile v-else-if="!loading" v-for="p in posts"
            :postId="p.id"
            :subview="`${p.subview}`"
            :title="`${p.title}`"
            :date="new Date(p.created.seconds * 1000)"
            :author="`${p.author}`"
            :body="`${p.content}`"
    />
</template>

<script lang="ts" setup>
import { useCollection, useCurrentUser } from 'vuefire';
import AppTile from '../components/AppTile.vue'
import AppModal from '../components/AppModal.vue'
import PostTile from '../components/PostTile.vue'
import AppBufferedList from '../components/AppBufferedList.vue'
import Loading from '../components/Loading.vue'
import { doc, setDoc, where } from 'firebase/firestore';
import { Modal } from 'bootstrap';
import { computed, onMounted, ref } from 'vue';
import { postsRef, subviewsRef } from '../firebase';

import { userData } from '../stores/userData';
import { router } from '../routes';

const user = useCurrentUser()

const subviewModal = computed(() => user.value ? new Modal('#subviewModal') : null)

const subviewName = ref<string>()
const subviewError = ref<string>()

const loading = ref<boolean>(true)

const createSubview = async () => {
    if (!user.value || !userData.id) return

    if (!subviewName.value) {
        subviewError.value = 'Subview name required.'
        return
    }
    
    try {
        await setDoc(doc(subviewsRef, subviewName.value), {
            author: userData.id,
            created: new Date()
        })

        subviewModal.value?.hide()
        router.push({path: `/v/${subviewName.value}`})
    }
    catch {
        subviewError.value = 'Subview name already exists.'
    }
}

const {
        data: posts,
        promise: postPromise
    } = useCollection(postsRef)

postPromise.value.then(() => loading.value = false)

</script>