<script setup>
import { onMounted } from 'vue'
onMounted(() => {
    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal'
        },
    }).render('#paypal-button-container');
});

</script>

<template>
    <section class="pt-20 bg-white dark:bg-gray-900 pb-96 h-100">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-left">
                <!-- <h1 class="mb-4 text-xl lg:text-2xl font-extrabold text-primary-600 dark:text-primary-500" >網頁維護中...</h1> -->
                <p class="mb-3 text-xl lg:text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                    您可以透過以下方式支持我持續寫專案</p>
                <p class="mb-10 text-xl lg:text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                    你們每一分小小的金額對我都是大大的支持</p>

                <div class="container sm:flex">
                    <img class="mx-0 mb-43 w-atuo h-72 rounded-lg m-3 mr-4"
                        src="https://vueproject.s3.us-west-2.amazonaws.com/%E8%A1%97%E5%8F%A3.JPG" alt="wallet">

                        <div id="paypal-button-container"
                        class="w-52 mx-0 mb-2  w-atuo h-72 rounded-lg m-3">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
