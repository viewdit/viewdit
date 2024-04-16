<template>
    <Loading v-if="loading"></Loading>
    <AppTile v-else-if="post">
        <RouterLink v-if="post.subview" :to="`/v/${post.subview}`" class="d-block">{{ `/v/${post.subview}` }}</RouterLink>
        <RouterLink :to="`/u/${post.author}`">{{ post.author }}</RouterLink> &#x2022; {{ getElapsedDescription(post.created.seconds * 1000) }}
        <h2>{{ post.title }}</h2>
        <p v-if="post.content">{{ post.content }}</p>
    </AppTile>
    <AppTile v-else>
        <h1>Post not found</h1>
    </AppTile>
    <AppTile v-if="!loading">
        <Comment v-if="comments.length" v-for="c in comments"
            :key="c.id"
            :author="c.author"
            :date="c.created"
            :body="c.content"
            :comments="[]"
        />
        <div v-else>
            <p>Be the first to comment</p>
        </div>
    </AppTile>
</template>

<script lang="ts" setup>
import AppTile from '../components/AppTile.vue';
import PostTile from '../components/PostTile.vue'
import AppBufferedList from '../components/AppBufferedList.vue';
import Comment from '../components/Comment.vue'
import Loading from '../components/Loading.vue';

import { commentsRef, postsRef } from '../firebase';
import { useRoute } from 'vue-router';
import { doc, query, where } from 'firebase/firestore';
import { useCollection, useDocument } from 'vuefire';
import { computed, ref } from 'vue';
import { getElapsedDescription } from '../helpers/datetime';

const route = useRoute()

const loading = ref<boolean>(true)

const postId = computed(() => route.params.post && typeof route.params.post === 'string'
                ? route.params.post
                : null
            )

const {
    data: post,
    promise
} = useDocument(postId.value
            ? doc(postsRef, postId.value)
            : null
)

promise.value.then(() => loading.value = false)

const {
    data: comments,
    promise: commentPromise
} = useCollection(postId.value
            ? query(commentsRef, where('post', '==', postId.value))
            : null
)
</script>