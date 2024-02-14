<script setup>
import { ref , onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();


onMounted(()=> {
    setTimeout(() => {
        router.push('/');
    }, 2000);
});


computed
</script>

<template>
    <section class="pt-10 bg-gray-50 dark:bg-gray-900 pb-20">
        <div class="py-8 px-3 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
            <img class="mx-auto mb-43" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="404 Not Found">
                <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-primary-600">404 Not Found</h1>
                <p class="mb-8 font-medium text-gray-500 sm:text-2xl dark:text-gray-400">Redirect to Home Page</p>
            </div> 
        </div>
    </section>
</template>
<style scoped></style>
