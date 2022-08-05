<script>
import Navbar from '~/components/Navbar.vue';
import Banner from '~/components/banner/Banner.vue';
import MainContent from '~/components/MainContent.vue';
import Footer from '~/components/Footer.vue';
export default {
    name: "IndexPage",
    components: { Navbar, Banner, MainContent, Footer }
}
</script>

<template>
  <div>
    <Navbar />
    <Banner />
    <MainContent />
    <Footer />
  </div>
</template>

