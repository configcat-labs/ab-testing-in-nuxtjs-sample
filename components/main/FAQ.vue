<script>
import QuestionIcon from '../icons/QuestionIcon.vue';
  export default {
    props: {
        question: String,
        answer: String,
    },
    components: { QuestionIcon }
}
</script>

<template>
  <div>
    <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
        <QuestionIcon />
        {{ question }}
    </h3>
    <p class="text-gray-500">
      {{ answer }}
    </p>
  </div>

</template>