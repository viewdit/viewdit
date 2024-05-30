<template>
        <AppTile>
            <div class="row" v-if="!subviewUrl && subview">
                <RouterLink :to="`/v/${subview}`" class="d-inline-block">{{ `v/${props.subview}` }}</RouterLink>
            </div>
            <div class="row">
                <span><RouterLink :to="`/u/${author}`">{{ author }}</RouterLink> &#x2022; {{ getElapsedDescription(date) }}</span>
            </div>
            <div v-if="!route.params.post" class="row">
                <RouterLink :to="`/v/${subview}/${postId}`">
                    <h2>{{ title }}</h2>
                    <div class="fw-normal content" v-html="content"></div>
                </RouterLink>
            </div>
            <div v-else>
                <h2>{{ title }}</h2>
                <div class="fw-normal content" v-html="content"></div>
            </div>
            <AppVoteChip @vote="(up: boolean) => vote(up)"
                :score="props.score || 0"
                :vote="props.vote"
            />
            <slot></slot>
        </AppTile>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { getElapsedDescription } from '../helpers/datetime'

import AppTile from './AppTile.vue'
import { Ref, computed, ref } from 'vue';
import AppVoteChip from './AppVoteChip.vue';
import { useCurrentUser } from 'vuefire';
import { postsRef } from '../firebase';
import { userData } from '../stores/userData';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { setUserVote } from '../helpers/user';
import DomPurify from 'dompurify';
import { marked } from 'marked';

const props = defineProps<{
    subview: string,
    postId: string,
    title: string,
    date: Date,
    body: string,
    author: string,
    score: number,
    vote: boolean | null
}>()

const route = useRoute()
const user = useCurrentUser()

const markdownToHtml = (markdown: string | null) => {
    if (!markdown) return ''

    return DomPurify.sanitize(marked.parse(markdown))
}

const content = computed(() => markdownToHtml(props.body))

const subviewUrl = computed(() => route.params.subview && typeof route.params.subview === 'string'
        ? route.params.subview
        : null)

const vote = async (upvote: boolean) => {
    if (!user.value?.uid || !userData.id)
        return;

    const post = doc(postsRef, props.postId)
    const snap = await getDoc(post)

    if (!snap.exists()) {
        console.error('Cannot vote - post no longer exists')
        return
    }

    const snapData = snap.data()!  // snap data must exist

    const {score, ups, downs} = setUserVote(upvote, snapData.up || [], snapData.down || [], snapData.score || 0, userData.id)

    try {
        updateDoc(post, {
            score: score,
            up: ups,
            down: downs
        })
    }
    catch (e) {
        console.error(e)
    }
}

</script>