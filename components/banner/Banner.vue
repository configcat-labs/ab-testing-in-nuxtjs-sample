<script>
import Left from './columns/Left.vue'
import Right from './columns/Right.vue'

export default {
  components: {
    Left, Right
  }
}
</script>

<template>
  <section class="bg-white">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <!-- Left -->
      <Left />
        <!-- Right -->
      <Right />
    </div>
  </section>
</template>