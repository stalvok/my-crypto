<template>
  <div class="min-h-screen bg-base">
    <div class="container mx-auto">
      <div class="row">
        <div class="flex flex-col mt-2 gap-7">
          <div class="text-3xl font-semibold">Market</div>
          <div class="flex items-center relative">
            <AppIcon class="w-6 h-6 absolute left-[16px]" name="search-icon"/>
            <input class="rounded-3xl w-full px-14 py-4" type="text" placeholder="Search">
            <AppIcon class="w-6 h-6 absolute right-[16px]" name="input-menu"/>
          </div>
        </div> <!-- Market -->
        <div class="flex gap-4 mt-4 justify-between">
            <div class="rounded-3xl bg-panelMarket gap-3 p-5 flex flex-col items-center justify-around">
              <img class="w-8 h-8" src="../assets/icons/watchlists.png">
              <div class="font-semibold text-xs ">WatchList</div>
            </div>
            <div class="rounded-3xl bg-panelMarket gap-3 p-5 flex flex-col items-center justify-around">
              <img class="w-8 h-8" src="../assets/icons/trending.png">
              <div class="font-semibold text-xs">Trending</div>
            </div>
            <div class="rounded-3xl bg-panelMarket gap-3 p-5 flex flex-col items-center justify-around">
              <img class="w-8 h-8" src="../assets/icons/good-value.png">
              <div class="font-semibold text-xs">Best value</div>
            </div>
          </div>
        <div class="flex flex-col gap-3 mt-7">
          <router-link to="/coin-detail"><div class="flex justify-between py-2.5">
            <img class="w-12 self-center h-12" src="../assets/icons/vechain.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg">Vechain</div>
              <div class="flex items-center">
                <div class="w-4 h-4 rotate-180"><AppIcon name="arrow" class="text-[#5FC88F]"/></div>
                <div class="text-panel text-sm">2.1%</div>
              </div>
            </div>
            <img class="w-[60px] h-[30px]" src="../assets/icons/panel-chart.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg pl-4">$14,112.86</div>
              <div class="text-xs text-panel">MCap $893.43 Bn</div>
            </div>
          </div></router-link>
          <div class="flex justify-between py-2.5">
            <img class="w-12 self-center h-12" src="../assets/icons/bitcoin.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg">Bitcoin</div>
              <div class="flex items-center">
                <div class="w-4 h-4 rotate-180"><AppIcon name="arrow" class="text-[#5FC88F]"/></div>
                <div class="text-panel text-sm">2.5%</div>
              </div>
            </div>
            <img class="w-[60px] h-[30px]" src="../assets/icons/panel-chart2.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg pl-4">$32,128.80</div>
              <div class="text-xs text-panel">MCap $893.43 Bn</div>
            </div>
          </div>
          <div class="flex justify-between py-2.5">
            <img class="w-12 self-center h-12" src="../assets/icons/achain.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg">Achain</div>
              <div class="flex items-center">
                <div class="w-4 h-4 rotate-180"><AppIcon name="arrow" class="text-[#5FC88F]"/></div>
                <div class="text-panel text-sm">2.1%</div>
              </div>
            </div>
            <img class="w-[60px] h-[30px]" src="../assets/icons/panel-chart.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg pl-4">$28,312.22</div>
              <div class="text-xs text-panel">MCap $893.43 Bn</div>
            </div>
          </div>
          <div class="flex justify-between py-2.5">
            <img class="w-12 self-center h-12" src="../assets/icons/bytecoin.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg">Bytecoin</div>
              <div class="flex items-center">
                <div class="w-4 h-4 rotate-180"><AppIcon name="arrow" class="text-[#5FC88F]"/></div>
                <div class="text-panel text-sm">2.2%</div>
              </div>
            </div>
            <img class="w-[60px] h-[30px]" src="../assets/icons/panel-chart.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg pl-4">$15,313.81</div>
              <div class="text-xs text-panel">MCap $893.43 Bn</div>
            </div>
          </div>
          <div class="flex justify-between py-2.5">
            <img class="w-12 self-center h-12" src="../assets/icons/vechain.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg">Vitae</div>
              <div class="flex items-center">
                <div class="w-4 h-4 rotate-180"><AppIcon name="arrow" class="text-[#5FC88F]"/></div>
                <div class="text-panel text-sm">2.1%</div>
              </div>
            </div>
            <img class="w-[60px] h-[30px]" src="../assets/icons/panel-chart2.png">
            <div class="flex flex-col font-semibold">
              <div class="text-lg pl-4">$14,112.86</div>
              <div class="text-xs text-panel">MCap $893.43 Bn</div>
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
  name: "MarketPage",
  components: {AppIcon,NavigationMenu}

}
</script>



<style scoped>

 div {

}
</style>