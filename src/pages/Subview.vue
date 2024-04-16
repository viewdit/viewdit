<template>
    <Loading v-if="loading"></Loading>
    <AppTile v-else>
        <div v-if="subview">
            <div class="d-flex justify-content-between">
                <div>
                    <h1 class="m-2 d-inline">{{ subviewId }}</h1>
                    <span>by <RouterLink :to="'/u/' + subview.author">{{ subview.author }}</RouterLink></span>
                    <select class="form-select">
                        <option>Best</option>
                        <option>New</option>
                        <option>Top</option>
                    </select>
                </div>
                <div v-if="user" class="d-flex">
                    <div class="vr mx-4"></div>
                    <button class="btn btn-primary" @click="postModal?.show()">Create Post</button>
                </div>
            </div>
        </div>
        <div v-else>
            <h1>No Subview found</h1>
            <p>No subview goes by that name.</p>
        </div>
    </AppTile>
    <AppModal id="postModal" title="Create Post">
        <form @submit.prevent="">
            <label for="postName">Post Title<input v-model="postName" class="form-control" id="postName" name="postName" placeholder="Post Title"></label>
            <small v-if="postNameError" class="form-text text-muted">{{ postNameError }}</small>
            <label for="postBody">Post Body<input v-model="postBody" class="form-control" id="postBody" name="postBody" placeholder="Content"></label>
            <small v-if="postBodyError" class="form-text text-muted">{{ postBodyError }}</small>
            <button class="btn btn-primary mx-2" type="submit" @click="createPost">Continue</button>
        </form>
    </AppModal>
    <AppTile v-if="!loading && !posts.length">
        <h1>No Posts</h1>
        <p>No posts found.</p>
    </AppTile>
    <PostTile v-else v-for="p in posts"
            :post-id="p.id"
            :title="`${p.title}`"
            :date="new Date(p.created.seconds * 1000)"
            :author="`${p.author}`"
            :body="`${p.content}`"
    />
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Loading from '../components/Loading.vue';
import AppTile from '../components/AppTile.vue';
import AppModal from '../components/AppModal.vue'
import PostTile from '../components/PostTile.vue'
import { useCollection, useCurrentUser, useDocument } from 'vuefire';
import { postsRef, subviewsRef } from '../firebase';
import { FieldValue, Timestamp, doc, limit, query, setDoc, where } from 'firebase/firestore';
import { userData } from '../stores/userData';
import { Modal } from 'bootstrap';

const user = useCurrentUser()
const router = useRouter()
const loading = ref<boolean>(true)
const route = useRoute()

const postModal = computed(() => user.value ? new Modal('#postModal') : null)

const postName = ref<string>()
const postNameError = ref<string>()

const postBody = ref<string>()
const postBodyError = ref<string>()

const subviewId = computed(() => route.params.subview && typeof route.params.subview === 'string'
    ? route.params.subview
    : null)

const {
    data: subview,
    promise
} = useDocument(subviewId.value
        ? doc(subviewsRef, subviewId.value)
        : null)

promise.value.then(() => loading.value = false)

const {
    data: posts,
    promise: postPromise
} = useCollection(subviewId.value
        ? query(postsRef, where('subview', '==', subviewId.value))
        : null)

const createPost = async () => {
    if (!user.value || !userData.id || !subviewId.value) return

    if (!postName.value) postNameError.value = 'Post name required.'
    try {
        await setDoc(doc(postsRef), {
            author: userData.id,
            created: Timestamp.fromDate(new Date()),
            title: postName.value,
            subview: subviewId.value,
            content: postBody.value
        })

        postModal.value?.hide()
        //router.push({path: `/v/${postName.value}`})
    }
    catch {
        postNameError.value = 'Post name already exists.'
    }
}

</script>