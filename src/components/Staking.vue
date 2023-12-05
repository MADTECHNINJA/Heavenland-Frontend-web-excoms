<template>
  <div class="div3 flex flex-col items-center w-full">
    <section id="about">
      <h1 class="text-center">Staking</h1>
      <p class="px-5 md:px-0 mx-auto md:w-2/3 md:text-center xl:w-1/2 mt-5 md:mt-8">
        From the dust of a burning world, society and the NFT market where pure faith was the only thing that remained left, Excom Society was born. Their
        purpose was as simple as web3 itself. To bring faith and powerful tool for everyone admiring Solana NFT space to grasp their opportunity to shine in
        virtual space, be part of the changing world and powerful DAO which will decide how big Excom Society will grow. The Excoms will not be alone in this
        fight but successfully onboarded the Heavenland Team into the Advisory board to successfully achieve all the goals.
      </p>

      <HorizontalSelect hint="Specify the staking duration." :valid="valid && stakeAmount > 0" v-model="stakeDuration" :items="[30, 60, 90, 120, 150, 180]" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import HorizontalSelect from "./HorizontalSelect.vue"
const stakeAmount = ref(null)
const stakeDuration = ref(undefined)
</script>

<style></style>
