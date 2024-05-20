<template>
    <Loading v-if="loading"></Loading>
    <AppTile v-else>
        <PostSearch>
            <button class="btn btn-primary flex-grow-1" @click="subviewModal?.show()">Create Subview</button>
        </PostSearch>
    </AppTile>
    <AppModal v-if="user" id="subviewModal" title="Create Subview">
        <form @submit.prevent="createSubview" novalidate>
            <div class="form-group">
                <label for="subviewName">Subview name</label>
                <input v-model="subviewName" class="form-control" id="subviewName" name="subviewName" placeholder="Subview name">
                <small v-if="subviewError" class="form-text text-danger">{{ subviewError }}</small>
            </div>
            <button class="btn btn-primary mt-2" type="submit">Continue</button>
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
            :date="timestampToDate(p.created) || new Date()"
            :author="`${p.author}`"
            :body="`${p.content}`"
            :score="p.score || 0"
            :vote="user && userData.id ? getUserVote(p.up || [], p.down || [], userData.id) : null"
    />
</template>userData.id

<script lang="ts" setup>
import { useCollection, useCurrentUser } from 'vuefire';
import AppTile from '../components/AppTile.vue'
import AppModal from '../components/AppModal.vue'
import PostTile from '../components/PostTile.vue'
import Loading from '../components/Loading.vue'
import PostSearch from '../components/PostSearch.vue'

import { doc, getDoc, setDoc, where } from 'firebase/firestore';
import { Modal } from 'bootstrap';
import { computed, onMounted, ref } from 'vue';
import { Subview, postsRef, subviewsRef } from '../firebase';

import { getUserVote } from '../helpers/user';
import { userData } from '../stores/userData';
import { router } from '../routes';
import { dateToTimestamp, timestampToDate } from '../helpers/datetime';

const user = useCurrentUser()

const subviewModal = computed(() => user.value ? new Modal('#subviewModal') : null)

const subviewName = ref<string>()
const subviewError = ref<string>()

const loading = ref<boolean>(true)

const createSubview = async () => {
    if (!user.value || !userData.id) return

    if (!subviewName.value || subviewName.value.trim().length === 0) {
        subviewError.value = 'Subview name required.'
        return
    }
    
    try {
        const existing = await getDoc(doc(subviewsRef, subviewName.value))

        if (existing.exists()) {
            subviewError.value = 'Subview name already exists. Choose another name.'
            return
        }
        
        await setDoc(doc(subviewsRef, subviewName.value), {
            author: userData.id,
            created: dateToTimestamp(new Date())!,
            subscriptions: [userData.id],
            members: 1
        })

        subviewModal.value?.hide()
        router.push({path: `/v/${subviewName.value}`})
    }
    catch (e) {
        console.error(e)
        subviewError.value = 'Something went wrong. Please try again later.'
    }
}

const {
        data: posts,
        promise: postPromise
    } = useCollection(postsRef)

postPromise.value.then(() => loading.value = false)

</script>