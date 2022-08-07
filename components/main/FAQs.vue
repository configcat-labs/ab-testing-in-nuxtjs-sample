<script>
import FAQ from './FAQ.vue'
export default {
    data() {
        return {
            faqs: [
                {
                    question: "What are you selling?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum ornare imperdiet.",
                },
                {
                    question: "How might I get in touch with you?",
                    answer: "Sed fermentum tellus non eros euismod, ut rhoncus urna convallis. Vestibulum placerat pulvinar diam, nec sagittis diam iaculis vitae."
                },
                {
                    question: "Is your site secure?",
                    answer: "Nulla id metus imperdiet, ullamcorper ante sit amet, dignissim eros. Aenean vel pretium quam, a aliquet enim.",
                },
                {
                    question: "Do you charge deals?",
                    answer: "Nulla a leo risus. Pellentesque placerat dolor vitae turpis porta ultricies. Curabitur laoreet leo at pharetra tristique.",
                },
                {
                    question: "What time will the products be dispatched?",
                    answer: "Vestibulum at felis at est convallis fringilla. Mauris non maximus augue. Nam imperdiet orci vitae neque vulputate sagittis.",
                },
                {
                    question: "Where do your items come from?",
                    answer: "Maecenas pretium, arcu vel commodo tincidunt, risus nulla facilisis ipsum, a dignissim felis nisi eleifend nisl.",
                },
                {
                    question: "Do you have merchandise exchanges?",
                    answer: "Phasellus mollis elit a enim porttitor semper. Donec vitae accumsan felis. Integer ullamcorper nisl fringilla urna auctor maximus.",
                },
                {
                    question: "Would I be able to facilitate my delivery?",
                    answer: "Fusce id metus eget odio pellentesque luctus. Cras accumsan magna massa, ut volutpat mi feugiat sed.",
                },
                {
                    question: "Do you have gift vouchers?",
                    answer: "Praesent molestie suscipit molestie. Quisque at felis rutrum, vestibulum mauris eu, condimentum felis. Donec quis metus sed tellus fermentum cursus.",
                }
            ]
        };
    },
    components: { FAQ }
}
</script>

<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">Frequently Asked Questions</h2>
        <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
            <div v-for="(faq, index) in faqs" :key="index">
                <FAQ :question="faq.question" :answer="faq.answer" />
            </div>
        </div>
    </div>
  </section>
</template>