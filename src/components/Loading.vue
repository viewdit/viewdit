<template>
    <div class="p-4 d-flex justify-content-center">
        <img width="100em" 
            height="100em"
            src="../assets/logo.svg"
            class="loading"
        />
    </div>
</template>

<style scoped>
.loading {
    animation-name: loading;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
}

@keyframes loading {
    100% {
        transform: rotate(360deg);
    }
}
</style>