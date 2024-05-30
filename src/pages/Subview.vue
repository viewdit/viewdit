<template>
    <AppTile>
        <div v-if="subview">
            <RouterLink :to="'/v/' + subviewId"><h1 class="d-inline">{{ subviewId }}</h1></RouterLink>
            <span class="mx-2">by <RouterLink :to="'/u/' + subview.author">{{ subview.author }}</RouterLink> &#x2022; {{ formatUnit(subview.members || 0, 'member')}}</span>
            <button v-if="user && !joined" class="btn btn-primary mx-2" @click="() => joinSubview()">Join</button>
            <button v-if="user && joined" class="btn btn-secondary mx-2" @click="() => joinSubview(false)">Leave</button>
            <PostSearch v-if="!route.params.post" class="pt-2"
                :pages="getNumPages(posts)"
                @search="(term: string, sort: SortOptions, filter: FilterOptions) => updateSearch(term, sort, filter)"
                @setPage="(page: number) => updatePage(page)"
            >
                <button class="btn btn-primary w-100" @click="postModal?.show()">Create Post</button>
            </PostSearch>
        </div>
        <div v-else-if="!loading">
            <h1>No Subview found</h1>
            <p>No subview goes by that name.</p>
        </div>
    </AppTile>
    <AppModal id="postModal" title="Create Post">
        <form @submit.prevent="createPost">
            <div class="form-group">
                <label for="postName">Post Title</label>
                <input v-model="postName" id="postName" class="form-control" name="postName" placeholder="Post Title">
                <small v-if="postNameError" class="form-text text-danger">{{ postNameError }}</small>
            </div>
            <div class="form-group">
                <label for="postBody">Post Body</label>
                <textarea v-model="postBody" id="postBody" class="form-control" name="postBody" placeholder="What are your thoughts?"></textarea>
                <small v-if="postBodyError" class="form-text text-danger">{{ postBodyError }}</small>
            </div>
            <button class="btn btn-primary my-2" type="submit">Continue</button>
        </form>
    </AppModal>
    <RouterView v-if="route.params.post" />
    <Loading v-else-if="loading"></Loading>
    <AppTile v-else-if="!loading && !posts.length">
        <h1>No Posts</h1>
        <p>No posts found.</p>
    </AppTile>
    <PostTile v-else v-for="p in pagedPosts"
            :post-id="p.id"
            :subview="p.subview"
            :title="`${p.title}`"
            :date="timestampToDate(p.created) || new Date()"
            :author="`${p.author}`"
            :body="`${p.content}`"
            :score="p.score || 0"
            :vote="userData.id ? getUserVote(p.up || [], p.down || [], userData.id) : null"
    />
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getUserVote } from '../helpers/user';
import { formatUnit } from '../helpers/metrics';
import Loading from '../components/Loading.vue';
import AppTile from '../components/AppTile.vue';
import AppModal from '../components/AppModal.vue'
import PostTile from '../components/PostTile.vue'
import PostSearch, { FilterOptions, SortOptions } from '../components/PostSearch.vue'

import { useCollection, useCurrentUser, useDocument } from 'vuefire';
import { postsRef, subviewsRef, usersRef } from '../firebase';
import { FieldValue, Timestamp, doc, getDoc, limit, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { userData } from '../stores/userData';
import { Modal } from 'bootstrap';
import { timestampToDate } from '../helpers/datetime';
import { getNumPages, getPage, getPostQueryConstraints } from '../helpers/query'
import { QueryConstraint } from 'firebase/firestore';

const user = useCurrentUser()
const router = useRouter()
const loading = ref<boolean>(true)
const route = useRoute()

const postModal = computed(() => user.value ? new Modal('#postModal') : null)

const postName = ref<string>()
const postNameError = ref<string>()

const postBody = ref<string>('')
const postBodyError = ref<string>()

const subviewId = computed(() => route.params.subview && typeof route.params.subview === 'string'
    ? route.params.subview
    : null)

const {
    data: subview,
    promise
} = useDocument(subviewId.value ? doc(subviewsRef, subviewId.value) : null)

promise.value.then(() => {loading.value = false; console.log('done')} )
const constraints = ref<QueryConstraint[]>(getPostQueryConstraints('', 'New', 'Post title only', subviewId.value))

const {
    data: posts,
    promise: postPromise
} = useCollection(computed(() => query(postsRef, ...constraints.value)))

const updateSearch = (term: string, sort: SortOptions, filter: FilterOptions) => {
    constraints.value = getPostQueryConstraints(term, sort, filter, subviewId.value)
    postPromise.value.then(() => console.log('done'))
    setTimeout(() => console.log(loading.value), 50)
}

const createPost = async () => {
    if (!user.value || !userData.id || !subviewId.value) return

    if (!postName.value || postName.value.trim().length === 0) {
        postNameError.value = 'Post name required.'
        return
    }

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
    catch (e) {
        console.error(e)
        postNameError.value = 'Post name already exists.'
    }
}

const joined = computed(() => userData.id && subview.value?.subscriptions?.indexOf(userData.id) > -1)

const joinSubview = async (join: boolean = true) => {
    if (!user || !subviewId || !userData.id)
        return

    const subview = doc(subviewsRef, subviewId.value || '')
    const snap = await getDoc(subview)

    if (!snap.exists()) {
        console.error('Cannot join - subview no longer exists')
        return;
    }

    const snapData = snap.data()

    const newSubs = snapData.subscriptions || [];

    if (join)
        newSubs.push(userData.id!)
    else
        newSubs.splice(newSubs.indexOf(userData.id!), 1)

    try {
        updateDoc(subview, {
            members: (snapData.members || 0) + (join ? 1 : -1),
            subscriptions: newSubs
        })
    }
    catch (e) {
        console.error(e)

    }
}

const page = ref<number>(1)

const updatePage = (p: number) => {
    page.value = p
}

const pagedPosts = computed(() => posts.value ? getPage(posts.value, page.value) : [])

</script>