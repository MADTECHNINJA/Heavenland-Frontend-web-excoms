<template>
  <div>
    <li
      :class="[logo ? 'px-0' : 'px-4', footer ? 'mx-0' : 'mx-4']"
      class="flex text-main items-center py-4 cursor-pointer font-bold lg:transition duration-1000 ease-in-out transform md:py-1 md:block navbar-item md:px-0 navbar-nav justify-items-start hover:translate-y-1 hover:scale-110"
    >
      <slot></slot>
    </li>
  </div>
</template>

<script setup>
const prop = defineProps({
  logo: Boolean,
  footer: Boolean,
})
</script>

<style></style>
