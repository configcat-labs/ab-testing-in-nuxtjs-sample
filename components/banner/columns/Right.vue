<script>
// Import amplitude configuration
import { ampli } from '../../../src/ampli';

export default {
    mounted() {
        // Initialize amplitude with the production environment as stated on the integration page.
        ampli.load({ environment: 'production' });
    },
    methods: {
        handleSaleBannerClick() {
            // Log the event to amplitude when the banner is clicked
            ampli.storeVisitClick();
        }
    }
}
</script>

<template>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img @click="handleSaleBannerClick" src="~/assets/img/sale_banner_small.png" width="auto" alt="sale_banner">
    </div>
</template>