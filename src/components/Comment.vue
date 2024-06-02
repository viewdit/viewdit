<template>
    <div>
        <div class="my-2">
            <RouterLink v-if="props.author" :to="`/u/${props.author}`">{{ props.author }}</RouterLink>
            <span v-else>[deleted]</span>
            <span v-if="isPoster" class="text-primary mx-1 pointer" data-toggle="tooltip" data-placement="top" title="This user is the Original Poster">OP</span>
            <span> &#x2022; {{ getElapsedDescription(date) }}</span>
            <p>{{ props.body }}</p>
            <AppVoteChip @vote="(up: boolean) => vote(up)"
                :score="props.score || 0"
                :vote="props.vote"
            />
            <button v-if="user" class="btn btn-primary mx-2" @click="$emit('reply', props.id)">Reply</button>
            <button v-if="user && author === userData.id" class="btn btn-secondary mx-2" @click="$emit('edit', props.id, props.body)">Edit</button>
            <button v-if="user && author === userData.id" class="btn btn-danger mx-2" @click="$emit('delete', props.id)">Delete</button>
        </div>
        <hr v-if="props.comments && props.comments.length > 0" />
        <div v-if="props.comments && props.comments.length > 0" class="ms-4">
            <Comment v-for="c in props.comments"
                @reply="(id: string) => $emit('reply', id)"
                @edit="(id: string, body: string) => $emit('edit', id, body)"
                @delete="(id: string) => $emit('delete', id)"
                :id="c.id"
                :author="c.author || null"
                :is-poster="c.isPoster"
                :date="c.date"
                :body="c.body"
                :comments="c.comments || []"
                :score="c.score || 0"
                :vote="user ? c.vote : null"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Comment from './Comment.vue'
import AppVoteChip from './AppVoteChip.vue'

import { getElapsedDescription } from '../helpers/datetime'
import { commentsRef } from '../firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { update } from 'firebase/database'
import { userData } from '../stores/userData'
import { useCurrentUser } from 'vuefire'
import { getUserVote, setUserVote } from '../helpers/user'

export interface CommentProps {
    id: string
    author: string | null
    isPoster: boolean
    date: Date
    body: string,
    comments?: CommentProps[],
    score: number,
    vote: boolean | null
}

const props = defineProps<CommentProps>()
const user = useCurrentUser()

const vote = async (upvote: boolean) => {
    if (!user.value?.uid || !userData.id)
        return;

    const comment = doc(commentsRef, props.id);
    const snap = await getDoc(comment)

    if (!snap.exists()) {
        console.error('Cannot vote - comment no longer exists')
        return
    }

    const snapData = snap.data()!  // snap data must exist

    const {score, ups, downs} = setUserVote(upvote, snapData.up || [], snapData.down || [], snapData.score || 0, userData.id)

    try {
        updateDoc(comment, {
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