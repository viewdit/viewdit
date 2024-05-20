<template>
    <AppTopNav />
    <div class="container-lg h-100 pb-4">
        <RouterView />
    </div>

</template>

<script setup lang="ts">
import AppTopNav from './components/AppTopNav.vue'
import AppFooter from './components/AppFooter.vue'
</script>