<template>
    
</template>

<script lang="ts" generic="T extends { key: string }" setup>
import { CollectionReference, QueryCompositeFilterConstraint } from 'firebase/firestore';

const props = defineProps<{
    batch: number,
    collection: CollectionReference<T>,
    query: QueryCompositeFilterConstraint
}>()

const items: T[] = []

const getNextBatch = () => {
    
}

</script>