<template>
  <div id="app">
    <div class="parent md:grid block min-w-screen min-h-screen h-auto bg-black">
      <div class="div z-50">
        <nav-bar />
      </div>
      <div class="div2 bg-black hidden md:flex items-center z-50">
        <nav-bar :scroll="computedHeight" vertical></nav-bar>
      </div>
      <router-view> </router-view>
    </div>

    <section class="border-t-main py-8 bg-black border-t-2 w-full">
      <div class="md:block flex flex-col items-center justify-center md:pt-0 md:pb-0">
        <img class="h-10 md:pl-5" alt="Side" src="./assets/logo.png" />
        <p class="text-xs md:text-medium md:ml-16">© All right reserved 2022</p>
      </div>

      <div class="md:hidden mt-4 flex w-2/3 mx-auto justify-between items-center">
        <span class="ml-2">Contact us</span>

        <div class="flex">
          <Nav-bar-Item logo>
            <button class="w-8 mr-4" :class="vertical ? 'mt-6' : 'md:mt-2'">
              <a href="https://twitter.com/ExcomSociety">
                <img class="navbar-item__icon" alt="Side" src="./assets/twitter.png" />
              </a>
            </button>
          </Nav-bar-Item>
          <NavBarItem footer :logo="true">
            <button class="w-8" :class="vertical ? 'mt-2' : 'md:mt-2'">
              <a href="https://discord.gg/HQX6pSnpsN">
                <img class="navbar-item__icon" alt="Side" src="./assets/discord.png" />
              </a>
            </button>
          </NavBarItem>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue"
import NavBar from "./components/NavBar.vue"
import NavBarItem from "./components/NavBarItem.vue"

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})

const computedHeight = ref(0)
const handleScroll = () => {
  computedHeight.value = window.scrollY || window.scrollTop
}
</script>

<style></style>
