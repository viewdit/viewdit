<template>
    <AppTile>
        <RouterLink v-if="subview" :to="`/v/${subview}`" class="d-block">{{ `/v/${props.subview}` }}</RouterLink>
        <RouterLink :to="`/u/${author}`">{{ author }}</RouterLink> &#x2022; {{ getElapsedDescription(date) }}
        <h2><RouterLink :to="`/post/${postId}`">{{ title }}</RouterLink></h2>
        <p>{{ body }}</p>
    </AppTile>
</template>

<script lang="ts" setup>
import { getElapsedDescription } from '../helpers/datetime';

import AppTile from './AppTile.vue';

const props = defineProps<{
    subview?: string,
    postId: string,
    title: string,
    date: Date,
    body: string,
    author: string
}>()



</script>