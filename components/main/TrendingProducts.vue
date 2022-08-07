<script>
import Product from './Product.vue';
export default {
    props: {
        products: Array,
    },
    components: { Product }
}
</script>

<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Trending Products</h2>
            <p class="font-light text-gray-500 sm:text-xl">Here's what have been trending in our stores over the past two weeks.</p>
        </div> 
        <div class="grid gap-8 lg:grid-cols-2">
         <div v-for="product in products" :key="product.id">
            <Product :product="product" />
         </div>   
                   
        </div>  
    </div>
  </section>
</template>