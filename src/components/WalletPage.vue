<template>
  <div class="min-h-screen tablet:min-h-[812px] bg-base">
    <div class="container mx-auto">
      <div class="row">
        <div class="flex flex-col gap-3 relative z-10">
          <div class="font-semibold text-xl">Total Wallet page</div>
          <div class="font-bold text-3xl">$29,100.50</div>
        </div>
        <div class="flex text-panel relative z-10 justify-between mt-6 bg-[#EBEFF1] text-sm font-semibold rounded-[32px]">
          <div class="active:text-black cursor-pointer duration-300 py-3 px-[48px] active:bg-white active:font-bold rounded-[32px]">Portfolio</div>
          <div class="active:text-black cursor-pointer duration-300 py-3 px-[48px] active:bg-white active:font-bold rounded-[32px]">History</div>
        </div>
        <div class="flex flex-col gap-4 mt-6 relative z-10">
          <div class="font-semibold text-panel text-lg">12 June 2021</div>
          <div class="flex flex-col gap-3">
            <div class="flex justify-between py-2">
              <div class="flex gap-5 items-center">
                <img class="w-10 h-10" src="../assets/icons/bitcoin.png">
                <div class="flex flex-col">
                  <div class="font-semibold text-lg">Bitcoin</div>
                  <div class="text-slate-400 text-sm">11:34 AM</div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-lg gap-1 flex content-baseline font-medium">
                  <div class="text-green-500 leading-6">+</div>
                  <div>BTC 0.0056</div>
                </div>
                <div class="flex items-center">
                  <div class="relative transform rotate-180">
                    <div><AppIcon width="14" height="14" class="text-[#5FC88F]" name="arrow"/></div>
                  </div>
                  <div class="font-medium flex">
                    <div class="leading-6 text-red-500">-</div>
                    <div>$950.50</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between py-2">
              <div class="flex gap-5 items-center">
                <img class="w-10 bg-white p-2 rounded-full h-10" src="../assets/icons/withdraw.png">
                <div class="flex flex-col">
                  <div class="font-semibold text-lg">Withdraw</div>
                  <div class="text-slate-400 text-sm">10:12 AM</div>
                </div>
              </div>
              <div class="flex flex-col justify-center items-end">
                <div class="text-lg flex items-center gap-1 font-medium">
                  <div class="text-red-500">-</div>
                  <div>$2,700.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 mt-6">
          <div class="font-semibold text-panel text-lg">19 June 2021</div>
          <div class="flex flex-col gap-3">
            <div class="flex justify-between py-2">
              <div class="flex gap-5 items-center">
                <img class="w-10 h-10" src="../assets/icons/achain.png">
                <div class="flex flex-col">
                  <div class="font-semibold text-lg">Achain</div>
                  <div class="text-slate-400 text-sm">12:30 AM</div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-lg gap-1 flex content-baseline font-medium">
                  <div class="text-green-500 leading-6">+</div>
                  <div>ACH 1,3000</div>
                </div>
                <div class="flex items-center">
                  <div class="relative transform rotate-180">
                    <div><AppIcon width="14" height="14" class="text-[#5FC88F]" name="arrow"/></div>
                  </div>
                  <div class="font-medium flex">
                    <div class="leading-6 text-red-500">-</div>
                    <div>$1,2230.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between py-2">
              <div class="flex gap-5 items-center">
                <img class="w-10 bg-white p-2 rounded-full h-10" src="../assets/icons/deposit.png">
                <div class="flex flex-col">
                  <div class="font-semibold text-lg">Deposit</div>
                  <div class="text-slate-400 text-sm">08:30 AM</div>
                </div>
              </div>
              <div class="flex flex-col justify-center items-end">
                <div class="text-lg flex items-center gap-1 font-medium">
                  <div class="text-green-400">+</div>
                  <div>$250.00</div>
                </div>
              </div>
            </div>
            <div class="flex justify-between py-2">
              <div class="flex gap-5 items-center">
                <img class="w-10 h-10" src="../assets/icons/bitcoin.png">
                <div class="flex flex-col">
                  <div class="font-semibold text-lg">Bytecoin</div>
                  <div class="text-slate-400 text-sm">07:13 AM</div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-lg gap-1 flex content-baseline font-medium">
                  <div class="text-green-500 leading-6">+</div>
                  <div>BCN 2.5400</div>
                </div>
                <div class="flex items-center">
                  <div class="relative transform rotate-180">
                    <div><AppIcon width="14" height="14" class="text-[#5FC88F]" name="arrow"/></div>
                  </div>
                  <div class="font-medium flex">
                    <div class="leading-6 text-red-500">-</div>
                    <div>$340.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="absolute blur-[97px] bg-[#F3E9FF] w-[200px] h-[200px]  right-0 top-0" src="../assets/img/blur-market.png">
      </div>
    </div>
  </div>
  <NavigationMenu/>
</template>

<script>

import NavigationMenu from "./NavigationMenu.vue";

export default {
  name: "WalletPage",
  components: {NavigationMenu},
  data() {
    return {
    }
  }
}
</script>

<style scoped>
 div {
;
 }
</style>