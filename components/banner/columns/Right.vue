<script>
export default {
    methods: {
        handleSaleBannerClick() {
            console.log('sale banner click')
        }
    }
}
</script>

<template>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img @click="handleSaleBannerClick" src="~/assets/img/sale_banner_small.png" width="auto" alt="sale_banner">
    </div>
</template>