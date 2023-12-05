<template>
  <!-- active && 'navbar-menu-list__inactive' -->

  <NavBarItem
    :class="[vertical && 'rotate my-8 xl:my-10 3xl:my-16 -mx-7 ', !active && 'invisible md:visible']"
    v-for="(item, index) in state.menu"
    :key="index"
  >
    <router-link :to="{ path: item.path, hash: item.section }">
      <a :href="item.title" :class="[vertical && (scroll <= 70 || !scroll) && 'opacity-60', !active && 'invisible md:visible']" @click="$emit('close')">{{
        item.title
      }}</a>
    </router-link>
  </NavBarItem>

  <div class="flex md:hidden justify-between items-center mb-2 border-main mx-4 border-t-2">
    <span class="pt-2 pl-4">Contact us</span>
    <div class="flex -mr-4">
      <nav-bar-item :logo="true">
        <button @click="$emit('close')" class="w-8" :class="vertical ? 'mt-6' : ' md:mt-2 mt-1.5'">
          <a target="_blank" href="https://twitter.com/ExcomSociety">
            <img class="navbar-item__icon 3xl:w-12 3xl:h-12" alt="Side" src="../assets/twitter.png" />
          </a>
        </button>
      </nav-bar-item>
      <nav-bar-item :logo="true">
        <button @click="$emit('close')" class="w-8" :class="vertical ? 'mt-2' : ' md:mt-2 mt-1.5'">
          <a target="_blank" href="https://discord.gg/HQX6pSnpsN">
            <img class="navbar-item__icon 3xl:w-12 3xl:h-" alt="Side" src="../assets/discord.png" />
          </a>
        </button>
      </nav-bar-item>
    </div>
  </div>
  <a
    target="_blank"
    v-if="!vertical"
    href="https://app.excoims.io"
    class="z-[2000] ml-8 right-0 md:hidden bg-main hover:brightness-125 text-black py-2 font-bold uppercase px-4 mx-2"
    >Launch app</a
  >
</template>

<script setup>
import { onMounted, reactive } from "vue"
import NavBarItem from "./NavBarItem.vue"

const $t = string => {
  return string
}
onMounted(() => {
  if (props.vertical) {
    state.menu.reverse()
  }
})

const props = defineProps({
  vertical: Boolean,
  scroll: Number,
  active: Boolean,
})

const state = reactive({
  menu: [
    {
      title: "Home",
      section: "#home",
      path: "/",
    },
    {
      title: "About",
      section: "#about",
      path: "/",
    },

    /*  {
      title: "Staking",
      section: "#staking",
      path: "/",
    }, */

    {
      title: "Utility",
      section: "#utility",
      path: "/",
    },
    {
      title: "Roadmap",
      section: "#roadmap",
      path: "/",
    },

    {
      title: "Partners",
      section: "#partners",
      path: "/",
    },
    {
      title: "Docs",
      section: "#docs",
      path: "/",
      href: "#docs",
    },
    {
      title: "Faq",
      section: "#faq",
      path: "/",
    },
  ],
})
</script>

<style>
.navbar-menu-list__inactive {
  visibility: hidden;
  z-index: -1;
  opacity: 0;
  transition: delay 0s opacity 0s visibility 0s !important;
  list-style: none;
}
</style>
