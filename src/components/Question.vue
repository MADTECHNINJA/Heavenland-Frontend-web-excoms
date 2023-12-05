<template>
  <div>
    <div @click="open = !open" class="flex relative py-3 cursor-pointer justify-between border-b border-pink border-1">
      <p class="text-white flex items-center">
        <img v-if="!question.urls" class="ml-3 mr-2" src="../assets/faq/flash.png" />
        <img v-else class="h-5 m-2" src="../assets/faq/excom.png" />
        {{ question.question }}
      </p>
      <button><i class="fa-solid" :class="open ? 'fa-angle-up' : 'fa-angle-down'"></i></button>
    </div>
    <div class="relative" :class="open ? 'question__active' : 'question__inactive'">
      <transition
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div :class="open ? 'question__active' : 'question__inactive'" class="pb-3 mt-2 ml-9">
          <div v-if="question?.urls">
            Join <a class="text-pink underline" :href="question.urls[0]"> Discord</a> and <a class="text-pink underline" :href="question.urls[1]"> Twitter</a>.
          </div>
          <div v-else>
            <span>{{ question.content }}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps({
  question: Object,
})

const open = ref(false)
</script>

<style scoped>
.question__active {
  opacity: 1;
  max-height: 600px;
  transition: max-height 0.75s, opacity 1s;
}

.question__inactive {
  transition: max-height 0.5s, opacity 0.5s;
  max-height: 0px;
  opacity: 0;
}
</style>
