<template>
    <footer>
        <div class="footer fixed-bottom bg-body-tertiary text-center p-2">
            &copy; Vuedit 2024-{{ getCurrentYear() }}
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { getCurrentYear } from '../helpers/datetime'
</script>