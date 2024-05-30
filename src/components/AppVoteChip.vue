<template>
    <span :class="`p-2 rounded-pill my-2 me-2 ${backColor}`">
        <button :class="`bg-transparent border-0 px-2 ${upColor}`" @click="() => $emit('vote', true)">🡅</button>
        <span :class="vote === null ? `text-dark-subtle` : `text-white`">{{ getNumberSummary(score) }}</span>
        <button :class="`bg-transparent border-0 px-2 ${downColor}`" @click="() => $emit('vote', false)">🡇</button>
    </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { getNumberSummary } from '../helpers/metrics'

const props = defineProps<{
    score: number,
    vote: boolean | null
}>();

const backColor = computed(() => props.vote === true
                        ? 'bg-primary'
                        : props.vote === false
                            ? 'bg-danger'
                            : 'bg-dark-subtle')

const upColor = computed(() => props.vote === null ? 'text-success' : 'text-white')
const downColor = computed(() => props.vote === null ? 'text-danger' : 'text-white')


</script>