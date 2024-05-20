<template>
    <div class="row">
        <form class="row col-md-11" @submit.prevent="">
            <div class="input-group col-md-2 w-25">
                <select class="form-select">
                    <option>New</option>
                    <option>Top</option>
                </select>
            </div>
            <div class="input-group col-md-5 w-25">
                <input class="form-control" type="text" placeholder="Search by post..." name="search">
                <div class="input-group-append">
                    <button class="bg-primary input-group-text" type="submit">⌕</button>
                </div>
            </div>
            <div class="col-md-5">
                <div class="input-group">
                    <label>Page <input class="form-control form-control-sm small d-inline" type="number" value="1" min="1" max="99"> of 1</label>
                </div>
            </div>
        </form>
        <div v-if="user" class="col-md-1">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCurrentUser } from 'vuefire';

const props = defineProps<{
    page: number
}>()

const user = useCurrentUser()
</script>