<template>
    <AppTile>
        <PostSearch
            :pages="getNumPages(posts)"
            @search="(term: string, sort: SortOptions, filter: FilterOptions) => updateSearch(term, sort, filter)"
            @setPage="(page: number) => updatePage(page)"
        >
            <button class="btn btn-primary w-100" @click="subviewModal?.show()">Create Subview</button>
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
    <Loading v-if="loading"></Loading>
    <AppTile v-else-if="!loading && !posts.length">
        <h1>No Posts</h1>
        <p>No posts found.</p>
    </AppTile>
    <PostTile v-else-if="posts && posts.length" v-for="p in pagedPosts"
            :postId="p.id"
            :subview="`${p.subview}`"
            :title="`${p.title}`"
            :date="timestampToDate(p.created) || new Date()"
            :author="`${p.author}`"
            :body="`${p.content}`"
            :score="p.score || 0"
            :vote="user && userData.id ? getUserVote(p.up || [], p.down || [], userData.id) : null"
    />
    <Error v-if="postQueryError" />
</template>userData.id

<script lang="ts" setup>
import { useCollection, useCurrentUser } from 'vuefire';
import AppTile from '../components/AppTile.vue'
import AppModal from '../components/AppModal.vue'
import PostTile from '../components/PostTile.vue'
import Loading from '../components/Loading.vue'
import PostSearch from '../components/PostSearch.vue'
import Error from '../components/Error.vue'

import { DocumentSnapshot, doc, getDoc, query, setDoc, where } from 'firebase/firestore';
import { Modal } from 'bootstrap';
import { computed, onMounted, ref } from 'vue';
import { Post, postsRef, subviewsRef } from '../firebase';

import { getUserVote } from '../helpers/user';
import { userData } from '../stores/userData';
import { getNumPages, getPage, getPostQueryConstraints } from '../helpers/query'
import { dateToTimestamp, timestampToDate } from '../helpers/datetime';
import { SortOptions, FilterOptions } from '../components/PostSearch.vue';
import { QueryConstraint } from 'firebase/firestore';
import { router } from '../routes';

const user = useCurrentUser()

const subviewModal = computed(() => user.value ? new Modal('#subviewModal') : null)

const subviewName = ref<string>()
const subviewError = ref<string>()

const loading = ref<boolean>(true)

const constraints = ref<QueryConstraint[]>(getPostQueryConstraints('', 'New', 'Post title only', null))

const updateSearch = (term: string, sort: SortOptions, filter: FilterOptions) => {
    loading.value = true
    constraints.value = getPostQueryConstraints(term, sort, filter, null)
    postPromise.value.then(() => {loading.value = false; console.log('test')})
}

const {
    data: posts,
    promise: postPromise,
    error: postQueryError
} = useCollection(computed(() => query(postsRef, ...constraints.value)))

postPromise.value.then(() => loading.value = false)

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

const page = ref<number>(1)

const updatePage = (p: number) => page.value = p

const pagedPosts = computed(() => posts.value ? getPage(posts.value, page.value) : [])

</script>