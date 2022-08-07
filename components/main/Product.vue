<script>
import RightChevron from '../icons/RightChevron.vue';

export default {
    props: {
        product: Object,
    },
    components: { RightChevron }
}
</script>

<template>
  <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
    <div class="flex justify-between items-center mb-5 text-gray-500">
        <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
            <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
            {{ product.category }}
        </span>
        <span class="text-sm">{{ product.added }}</span>
    </div>
    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">{{ product.name }}</a></h2>
    <p class="mb-5 font-light text-gray-500">{{ product.longDescription }}</p>
    <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
            <img class="w-7 h-7 rounded-full" :src="product.avatar" alt="Jese Leos avatar" />
            <span class="font-medium">
                {{ product.postedBy }}
            </span>
        </div>
        <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:underline">
            Read more
            <RightChevron />
        </a>
    </div>
  </article>
</template>