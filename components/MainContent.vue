<script>
import Testimonials from './main/Testimonials.vue';
import TrendingProducts from './main/TrendingProducts.vue';

  export default {
    components: {
    Testimonials,
    TrendingProducts
}
  }
</script>

<template>
  <div>
    <TrendingProducts />
    <Testimonials />
  </div>
</template>