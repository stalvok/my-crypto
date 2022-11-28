<template>
  <div class="flex w-full justify-between py-7 px-11 bg-white rounded-t-3xl absolute bottom-0">
    <router-link to="/"><AppIcon class="text-gray-400 hover:text-black" width="24" height="24" name="home"/></router-link>
    <router-link to="/market"><AppIcon class="text-gray-400 hover:text-black"  width="24" height="24" name="market"/></router-link>
    <router-link to="/wallet"><AppIcon class="text-gray-400 hover:text-black" width="24" height="24" name="wallet"/></router-link>
    <router-link to="/insights"><AppIcon  class="text-gray-400 hover:text-black" width="24" height="24" name="insights"/></router-link>
    <AppIcon class="text-gray-400 hover:text-black" width="24" height="24" name="profile"/>
  </div>
</template>

<script>
import AppIcon from "./AppIcon.vue";

export default {
  name: "NavigationMenu",
  components: {AppIcon},
  data() {
    return {
      isActive: false,
      color: ''
    }
  },
}
</script>

<style scoped>

</style>