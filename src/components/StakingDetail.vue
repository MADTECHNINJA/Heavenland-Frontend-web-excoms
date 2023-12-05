<template>
  <div class="div3 flex flex-col items-center w-full">
    <HorizontalSelect hint="Specify the staking duration." :valid="valid && stakeAmount > 0" v-model="stakeDuration" :items="[30, 60, 90, 120, 150, 180]" />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { onMounted, ref } from "vue"

const route = useRoute()
const router = useRouter()
const isStakeButtonLoading = ref(false)

onMounted(() => {
  if (route.params.id)
    // match with api
    router.push({ path: "/staking" })
})

const createRecord = async () => {
  isStakeButtonLoading.value = true

  const notification = NotificationManager.getInstance().create({
    title: NotificationTitles.STAKE_CREATE,
    message: {
      component: NotificationMessageWithHto,
      data: {
        amountPrefix: "Amount:",
        amount: formatNumberToDecimal(stakeAmount.value),
      },
    },
    variant: Variant.LOADING,
  })

  try {
    const txSig = await userInfoStore.requestStake(props.tokenId, stakeAmount.value, stakeDuration.value, props.stakeRecords.length == 0)

    notification.link = {
      name: "View",
      href: getTxSolscanUrl(txSig),
    }
    notification.additionalInfo = "Confirming..."

    await Metaplex.getInstance().confirmTransaction(txSig)

    notification.setSuccess("Transaction successfully confirmed")

    stakeAmount.value = null
    stakeDuration.value = undefined

    isStakeButtonLoading.value = false

    await useRefreshStakes()
  } catch (e) {
    logger.error(e)

    notification.setError(e.code === 4001 ? "User rejected the transaction" : "Transaction confirmation failed")

    isStakeButtonLoading.value = false
  }
}
</script>

<style></style>
