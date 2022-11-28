<template>
  <div class="min-h-screen bg-base">
    <div class="container mx-auto">
      <div class="row"> <!-- here -->
        <div class="flex flex-col gap-6">
          <div class="font-semibold text-3xl">Home</div>
          <div class="bg-[#9F9DF3] flex flex-col items-start gap-4 rounded-3xl relative p-5 shadow-panel">
            <img class="absolute right-0 w-16 h-16 top-0 -mt-4 -mr-4" src="../assets/img/eth-home.png">
            <img class="w-14 h-14 absolute right-0 bottom-0 -mb-6 mr-[110px]" src="../assets/img/bitcoin.png" >
            <img class="w-[138px] h-[138px] absolute right-0" src="../assets/img/robot.png">
            <div class="font-semibold text-lg text-white">Try our AI for avoid<br>huge Loss</div>
            <div class="button-base">
              Try Now
            </div>
          </div>
        </div>   <!-- home -->
        <div class="flex flex-col gap-5">
          <div class="font-medium text-xl mt-10">Price Alerts</div>
          <div class="bg-panel rounded-3xl p-4 gap-4 flex flex-col">
            <div class="font-medium flex gap-3 items-center">
              <img class="w-10 h-10" src="../assets/icons/bitcoin.png">
              <div class="text-sm">BTCUSDT just went abode 30123.232</div>
              <div><AppIcon class="text-[#F7931A]" name="arrow" width="20" height="20"/></div>
            </div>
            <div class="flex font-medium justify-around border-t hr-panel pt-4">
              <div class="hover:text-violet-500 text-panel cursor-pointer">Buy</div>
              <div class="hover:text-violet-500 text-panel cursor-pointer">Sell</div>
              <div class="hover:text-violet-500 text-panel cursor-pointer">More</div>
            </div>
          </div>
          <div class="flex relative flex-col bg-panel p-4 z-10 rounded-3xl shadow-panel">
            <div class="font-medium flex gap-3 items-center">
              <img class="w-10 h-10" src="../assets/icons/bytecoin.png">
              <div class="font-medium text-sm">BCNUSDT just went above 30123.232</div>
              <div><AppIcon width="20" height="20" class="text-[#CED0DE]" name="arrow"/></div>
              <div class="absolute bg-white -z-10 opacity-80 w-[90%] h-full rounded-3xl top-[20px] mx-auto"></div>
              <div class="absolute bg-white -z-10  opacity-40 w-[70%] h-full rounded-3xl top-[40px] right-0 left-0 mx-auto"></div>
            </div>
          </div>
        </div>   <!-- Price Alerts -->
        <div class="p-6 bg-panel mt-20 rounded-3xl">
          <div class="font-medium text-xl mb-5">Trending</div>
          <div class="flex flex-col gap-4">
            <div class="flex justify-between">
              <div class="flex gap-5 items-center">
                <img class="w-10 h-10" src="../assets/icons/bitcoin.png">
                <div class="flex flex-col">
                  <div class="font-semibold text-lg">Bitcoin</div>
                  <div class="text-slate-400 text-sm">BTC</div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-lg font-medium">$32,128.80</div>
                <div class="flex items-center">
                  <div class="relative transform rotate-180">
                    <div><AppIcon width="14" height="14" class="text-[#5FC88F]" name="arrow"/></div>
                  </div>
                  <div>2.5%</div>
                </div>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex gap-5 items-center">
                <img class="w-10 h-10" src="../assets/icons/NEO.png">
                <div class="flex flex-col">
                  <div class="font-semibold text-lg">NEO</div>
                  <div class="text-slate-400 text-sm">NEO</div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-lg font-medium">$13,221.55</div>
                <div class="flex items-center">
                  <div class="relative transform rotate-180">
                    <AppIcon width="14" height="14" class="text-[#5FC88F]" name="arrow"/>
                  </div>
                  <div>2.5%</div>
                </div>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex gap-5 items-center">
                <img class="w-10 h-10" src="../assets/icons/achain.png">
                <div class="flex flex-col">
                  <div class="font-semibold text-lg">Achain</div>
                  <div class="text-slate-400 text-sm">ACT</div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-lg font-medium">$28,312.80</div>
                <div class="flex items-center">
                  <div>
                    <AppIcon class="text-[#FF6464] w-3.5 h-3.5" name="arrow"/>
                  </div>
                  <div>2.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- Trending -->
      </div>
      <NavigationMenu class="sticky"/>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "./NavigationMenu.vue";
import AppIcon from "./AppIcon.vue";
export default {
  name: "HomePage",
  components: {AppIcon,NavigationMenu}

}
</script>

<style scoped>
 div {

 }
</style>