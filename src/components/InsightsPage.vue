<template>
  <div class="min-h-screen bg-base">
    <div class="container mx-auto">
      <div class="row">
        <div class="flex justify-between items-center">
          <div class="font-bold text-3xl">Insights</div>
          <div class="p-3 rounded-full bg-white"><AppIcon class="w-6 h-6 " name="menu"/></div>
        </div>
        <div class="flex mt-7 gap-2 flex-col">
          <div class="flex justify-between font-medium text-sm">
            <div class="flex gap-2 items-center">
              <img class="h-10 w-10" src="../assets/icons/achain.png" >
              <div>
                Achain news
              </div>
            </div>
            <div class="text-[#767DFF] flex items-center">
               <div>See All</div>
            </div>
          </div>
          <div class="h-[190px] bg-[#FF9BB3] w-full rounded-3xl relative overflow-hidden">
            <img class="absolute right-0" src="../assets/img/robot.png">
            <img class="absolute bottom-0" src="../assets/img/news-eth.png">
            <img class="absolute top-0 ml-10" src="../assets/img/bitcoin.png">
          </div>
        </div>
        <div class="flex flex-col mt-5 font-medium text-sm gap-2">
          <div>Participate in the Corra Finance Airdrop on  CoinMarketCap</div>
          <div class="flex items-center gap-2 text-panel">
            <AppIcon name="clock" class="w-5 h-5"/>
            <div>3 days ago</div>
          </div>
        </div>
        <div class="flex flex-col gap-4 mt-10">
          <div class="flex justify-between font-medium text-sm">
            <div class="flex gap-2 items-center">
              <img class="h-10 w-10" src="../assets/icons/bitcoin.png" >
              <div>
                Bitcoin news
              </div>
            </div>
            <div class="text-[#767DFF] flex items-center">
              <div>See All</div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex gap-5">
              <img class="w-[110px] h-[110px]" src="../assets/img/illustration-bitcoin.png">
              <div class="flex flex-col font-medium gap-3 text-sm">
                <div>
                  Participate in the Corra Finance Airdrop on CoinMarketCap
                </div>
                <div class="flex text-panel items-center gap-2">
                  <AppIcon name="clock" class="w-5 h-5"/>
                  <div>3 days ago</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex gap-5">
              <img class="w-[110px] h-[110px]" src="../assets/img/illustration-eth.png">
              <div class="flex flex-col font-medium gap-3 text-sm">
                <div>
                  Participate in the Corra Finance Airdrop on CoinMarketCap
                </div>
                <div class="flex text-panel items-center gap-2">
                  <AppIcon name="clock" class="w-5 h-5"/>
                  <div>3 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NavigationMenu/>
</template>

<script>

import AppIcon from "./AppIcon.vue";
import NavigationMenu from "./NavigationMenu.vue";

export default {
  name: "InsightsPage.vue",
  components: {AppIcon,NavigationMenu},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
</style>