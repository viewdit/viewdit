<template>
    <form class="row mt-2" @submit.prevent="() => search()">
        <div class="col-md-5 col-sm-12 my-2">
            <div class="input-group">
                <input class="form-control" v-model="searchTerm" type="text" placeholder="Post starts with..." name="search">
                <div class="input-group-append">
                    <button class="btn btn-primary input-group-text h-100 rounded-left">
                        <img style="height:25px" src="../assets/search.png" alt="Search button">
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-2 col-sm-12 my-2">
            <button class="btn btn-primary w-100 lh-2" type="button" @click="() => optionsModal?.show()">Options...</button>
        </div>
        <div class="col-md-3 col-sm-12 my-2">
            <div class="w-100">
                <button class="btn btn-primary" type="button" @click="setPage(page - 1)"><</button>
                <span class="text-center mx-2">{{ page }} of {{ props.pages }}</span>
                <button class="btn btn-primary" type="button" @click="setPage(page + 1)">></button>
            </div>
        </div>
        <div v-if="user" class="col-md-2 col-sm-12 my-2">
            <slot></slot>
        </div>
        <AppModal id="search-options" title="Search Options">
            <div class="form-group">
                <label for="advanced-sort">Sort by</label>
                <select class="form-select" name="advanced-sort" v-model="searchSort">
                    <option v-for="s in sortOptions">{{ s }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="advanced-filter">Search by</label>
                <select class="form-select" name="advanced-filter" v-model="searchFilter">
                    <option v-for="f in filterOptions">{{ f }}</option>
                </select>
            </div>
            <button class="btn btn-primary mt-2" @click="advancedSearch">Search</button>
        </AppModal>
    </form>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, defineEmits, watch } from 'vue';
import AppModal from './AppModal.vue'

import { useCurrentUser } from 'vuefire'
import Modal from 'bootstrap/js/dist/modal';
import { DocumentSnapshot } from 'firebase/firestore';
import { Post } from '../firebase';
import { getPostQueryConstraints } from '../helpers/query';

const props = defineProps<{
    pages: number
}>()

const emit = defineEmits(['search', 'setPage'])

const sortOptions = ['New', 'Top', 'Bottom'] as const
export type SortOptions = typeof sortOptions[number]

const filterOptions = ['Post title only', 'Post body only'] as const
export type FilterOptions = typeof filterOptions[number]

const user = useCurrentUser()

let optionsModal: Modal | null = null
onMounted(() => optionsModal = new Modal('#search-options'))

const searchTerm = ref<string>()
const searchSort = ref<SortOptions>('New')
const searchFilter = ref<FilterOptions>('Post title only')

const page = ref<number>(props.pages ? 1 : 0)

const advancedSearch = () => {
    optionsModal?.hide()
    search()
}

const search = () => {
    emit('search', searchTerm.value, searchSort.value, searchFilter.value)
}

watch(() => props.pages, (newValue: number, _: number) => {
    setPage(newValue > 0 ? 1 : 0)
})

const setPage = (p: number) => {
    if (p < (props.pages ? 1 : 0) || p > props.pages) return;

    page.value = p
    emit('setPage', p)
}

</script>