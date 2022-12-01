<template>
  <div class="min-h-screen tablet:min-h-[812px] bg-base">
    <div class="container relative mx-auto">
      <div class="row">
        <div class="flex justify-between items-center z-10 relative">
          <div @click="$router.back()" class="p-3 cursor-pointer bg-white rounded-full"><AppIcon class="w-4 h-4 text-[#191C32]" name="vector"/></div>
          <div class="text-sm font-semibold">Etherium (ETH)</div>
          <div class="p-3 bg-white rounded-full"><AppIcon name="menu" class="w-4 h-4"/></div>
        </div><!--Etherium (ETH) -->
        <div class="flex flex-col mt-5 items-center font-semibold z-10 relative">
          <div class="text-3xl">32.128.80</div>
          <div class="flex items-center">
            <div class="relative transform rotate-180">
             <AppIcon width="14" height="14" class="text-[#5FC88F]" name="arrow"/>
            </div>
            <div class="text-panel text-sm">2.5%</div>
          </div>
        </div> <!-- Price -->
        <div class="flex text-sm mt-5 font-semibold bg-[#EBEFF1] rounded-full p-1">
          <div class="py-3.5 px-5 active:bg-white active:shadow-panel active:text-black rounded-3xl text-panel">24H</div>
          <div class="py-3.5 px-5 active:bg-white active:text-black rounded-3xl text-panel">1W</div>
          <div class="py-3.5 px-5 active:bg-white active:text-black rounded-3xl text-panel">1Y</div>
          <div class="py-3.5 px-5 active:bg-white active:text-black rounded-3xl text-panel">All</div>
          <div class="py-3.5 px-5 active:bg-white active:text-black rounded-3xl text-panel">Point</div>
        </div> <!-- WeekDays -->
        <div class="mt-5 z-10 relative">
          <img class="w-[325px] h-[224px]" src="../assets/img/coin-chart.png">
        </div>
        <div class="flex whitespace-nowrap text-center font-bold mt-5 gap-4 z-10 relative">
          <div class="bg-white rounded-full py-4 shadow-button text-[#767DFF] px-10">Set Alert</div>
          <div class="bg-black rounded-full py-4 shadow-button text-white px-10">Buy Now</div>
        </div>
        <div class="flex gap-4 flex-col p-6 bg-panel mt-6 rounded-[40px] z-10 relative">
          <div class="font-semibold text-xl">Market Statistic</div>
          <div class="flex flex-col gap-4">
            <div class="flex justify-between text-sm">
              <div class="text-panel font-semibold">Market capitalization</div>
              <div class="font-bold">$231,233</div>
            </div>
            <div class="flex justify-between text-sm">
              <div class="text-panel font-semibold">Circulating Suply</div>
              <div class="font-bold">$14.211 ETH</div>
            </div>
          </div>
        </div>
        <img class="absolute bg-[#FFC2C6] blur-[92px] opacity-60 bottom-1/3 w-[190px] h-[190px]" src="../assets/img/blur-datails-coin.png">
        <img class="absolute bg-[#FFE3C9] blur-[52px] opacity-60 right-0 -top-[60px] w-[200px] h-[200px]" src="../assets/img/blur-datails-coin2.png">
      </div>
      <NavigationMenu class="sticky"/>
    </div>
  </div>
</template>

<script>

import AppIcon from "./AppIcon.vue";
import NavigationMenu from "./NavigationMenu.vue";

export default {
  name: "CoinDetail",
  components: {AppIcon,NavigationMenu},
  data() {
    return {

    }
  },
}
</script>

<style scoped>
div {

}
</style>

