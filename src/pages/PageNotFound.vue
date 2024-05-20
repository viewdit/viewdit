<template>
    <AppTile class="d-flex align-center justify-center flex-column">
        <div>
            <h1>404</h1>
            <p>Sorry this page does not exist. <RouterLink :to="'/'">Oh no! Anyway...</RouterLink></p>
        </div>
    </AppTile>
</template>

<script lang="ts" setup>
import AppTile from '../components/AppTile.vue';
</script>