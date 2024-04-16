<template>
    <div>
        <span><RouterLink :to="`/u/${props.author}`">{{ props.author }}</RouterLink> &#x2022; {{ getElapsedDescription(date) }}</span>
        <p>{{ props.body }}</p>
        <div v-if="props.comments && props.comments.length > 0">
            <Comment
                v-for="c in props.comments"
                :key="c.key"
                :author="c.author"
                :date="c.date"
                :body="c.body"
                :comments="c.comments || []"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Comment from './Comment.vue'

import { getElapsedDescription } from '../helpers/datetime'

export interface CommentProps {
    key: string
    author: string
    date: Date
    body: string
    comments?: CommentProps[]
}

const props = defineProps<CommentProps>()

</script>