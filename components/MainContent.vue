<script>
import FAQs from './main/FAQs.vue';
import TrendingProducts from './main/TrendingProducts.vue';

export default {
  components: {
    FAQs,
    TrendingProducts
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    }
  }

}
</script>

<template>
  <div>
    <TrendingProducts :products="products" />
    <FAQs />
  </div>
</template>