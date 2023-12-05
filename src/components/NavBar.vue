<template>
  <div id="navbar" :class="vertical" class="fixed mt-[60px] 3xl:mt-5 md:mt-2 md:relative flex flex-col items-center uppercase">
    <div class="top-0 fixed md:relative bg-black md:bg-transparent flex items-center w-full justify-between navbar-block">
      <ul v-if="!vertical" class="flex items-center navbar-nav justify-items-start">
        <nav-bar-item :logo="true">
          <a class="flex items-center" to="/">
            <img class="h-[35px] md:hidden xl:block lg:h-[40px] 3xl:h-[80px] lg:pl-8" alt="logo" src="../assets/logo.png" />
            <img class="md:block h-[35px] md:h-full hidden lg:hidden" alt="logo" src="../assets/faq/excom.png" />
          </a>
        </nav-bar-item>
      </ul>

      <ul :class="[vertical ? 'fixed top-[30px]  flex-col  ' : 'flex-row']" class="items-center hidden justify-items-end md:flex">
        <nav-bar-list :active="active" :scroll="scroll" :vertical="vertical"></nav-bar-list>
      </ul>

      <ul
        class="hidden md:flex items-center"
        :class="[
          vertical ? ' border-main  flex-col fixed bottom-5 2xl:bottom-5' : '  justify-end flex-row mr-5',
          vertical && (scroll <= 70 || !scroll) && 'opacity-60',
        ]"
      >
        <a
          target="_blank"
          v-if="!vertical"
          href="https://app.excoims.io"
          class="bottom-4 lg:bottom-0 fixed lg:relative z-[2000] right-0 bg-main hover:brightness-125 text-black py-2 font-bold uppercase px-4 mx-2"
          >Launch app</a
        >
        <nav-bar-item :logo="true">
          <button class="w-8" :class="vertical ? 'hidden' : 'md:mt-2'">
            <a href="https://twitter.com/ExcomSociety">
              <img class="navbar-item__icon" alt="Side" src="../assets/twitter.png" />
            </a>
          </button>
        </nav-bar-item>
        <nav-bar-item :logo="true">
          <button class="w-8" :class="vertical ? 'hidden' : 'md:mt-2'">
            <a href="https://discord.gg/HQX6pSnpsN">
              <img class="navbar-item__icon" alt="Side" src="../assets/discord.png" />
            </a>
          </button>
        </nav-bar-item>
      </ul>

      <button @click="active = !active" :class="active ? 'is-active' : null" class="md:hidden hamburger hamburger--emphatic" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div class="w-screen navbar-menu" :class="active ? 'navbar-menu__active' : 'navbar-menu__inactive'">
      <ul :class="active ? 'navbar-menu-list__active' : ' -z-10 navbar-menu-list__inactive'" class="flex-col mb-6 items-center justify-items-end md:hidden">
        <nav-bar-list :active="active" @close="active = false"></nav-bar-list>
      </ul>
    </div>
  </div>
</template>

<script setup>
import NavBarItem from "./NavBarItem.vue"
import NavBarList from "./NavBarList.vue"
import { ref } from "vue"

const props = defineProps({
  vertical: {
    type: Boolean,
  },
  scroll: Number,
})

const active = ref(false)
</script>

<style>
#navbar {
  top: 0;
  width: 100vw;
  z-index: 100;
}

.navbar-menu__active {
  opacity: 1;
  max-height: 700px;
  transition: max-height 0.5s, opacity 0s;
}

.navbar-menu__inactive {
  transition: max-height 0.5s;
  max-height: 0;
  background: black;
  opacity: 1;
}

.navbar-menu-list__active {
  transition: opacity 2s;
  visibility: visible;
  opacity: 1;
}

.navbar-menu-list__inactive {
  visibility: hidden;
  z-index: -1;
  opacity: 0;
  transition: delay 0s opacity 0s !important;
  list-style: none;
}

.a-active {
  color: #a7f3d0;
}

.navbar-item__img {
  height: 40px;
}

.my-svg {
  background-color: red;
  fill: red;
}

.navbar-menu__active {
  background: black;
  z-index: 50;
  position: fixed;
}
</style>
