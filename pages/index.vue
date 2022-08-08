<script>
import Navbar from '~/components/Navbar.vue';
import Banner from '~/components/banner/Banner.vue';
import MainContent from '~/components/MainContent.vue';
import Footer from '~/components/Footer.vue';

// Datadog
import { datadogRum } from '@datadog/browser-rum';

export default {
    name: "IndexPage",
    components: { Navbar, Banner, MainContent, Footer },
    mounted() {
      datadogRum.init({
        applicationId: '02bdafc1-54cc-4920-9bd7-6aaf2cc12838',
        clientToken: 'pubff8eac0433067fba3352f841cc62e92e',
        site: 'datadoghq.com',
        service: 'acmes-shoppinzone',
        sampleRate: 100,
        premiumSampleRate: 100,
        trackInteractions: true,
        defaultPrivacyLevel: 'mask-user-input'
      });

      datadogRum.startSessionReplayRecording();
    }
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

