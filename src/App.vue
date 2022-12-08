<template>
  <div class="w-full flex justify-center items-center h-screen">
    <div class="tablet:max-w-[375px] max-w-[480px] flex-1 relative h-full tablet:max-h-[812px] tablet:phone overflow-y-scroll">
      <div class="tablet:test "></div>
      <router-view/>
    </div>
  </div>

</template>


<script>
 import HomePage from "./components/HomePage.vue"
 export default {
   components: {HomePage},
   data() {
     return {

     }
   }
 }
</script>

<style scoped>

div::-webkit-scrollbar {
  width: 1px;
}
div {

}
</style>