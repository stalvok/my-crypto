<template>
  <div class="min-h-screen tablet:min-h-[812px] bg-base">
    <div class="container relative mx-auto">
      <div class="row relative">
        <div class="relative mt-3 flex justify-center w-[320px] mx-auto">
          <img src="../assets/img/login-figure.png">
          <img class="z-10 -top-[28px] right-[56px] absolute drop-shadow-2xl" src="../assets/img/robot.png">
          <img class="absolute -top-[12px]" src="../assets/img/login-light.png">
        </div>
        <div class="flex flex-col mt-6 gap-8">
          <div class="font-semibold self-center text-3xl">Register</div>
          <div class="flex flex-col gap-4 text-panel">
            <div class="relative bg-white p-3 rounded-3xl bg-panel">
              <AppIcon name="user" class="absolute bg-[#FFEBE4] rounded-full bottom-1.5 w-8 h-8"/>
              <input class="ml-10" placeholder="Username" type="text">
            </div>
            <div class="relative bg-white p-3 rounded-3xl bg-panel">
              <AppIcon name="mail" class="absolute bg-[#DEF5E9] rounded-full bottom-1.5 w-8 h-8"/>
              <input class="ml-10" placeholder="Email" type="text">
            </div>
            <div class="relative bg-white p-3 rounded-3xl bg-panel">
              <AppIcon name="lock" class="absolute bg-[#EBECFF] rounded-full bottom-1.5 w-8 h-8"/>
              <input class="ml-10" placeholder="Password" type="text">
            </div>
          </div>
        </div>
        <div class="flex relative z-10 flex-col gap-[50px] mt-6 bottom-0">
          <div class="text-white bg-black font-semibold text-center py-4 rounded-3xl">
            Register
          </div>
          <div class="flex justify-center items-center gap-8">
            <div class="bg-white p-3 rounded-full">
              <img class="h-6 w-6" src="../assets/icons/facebook.png">
            </div>
            <div class="bg-white p-3 rounded-full">
              <img class="h-6 w-6" src="../assets/icons/google.png">
            </div>
            <div class="bg-white p-3 rounded-full">
              <img class="h-6 w-6" src="../assets/icons/apple.png">
            </div>
          </div>
        </div>
        <img class="absolute bottom-0 right-0" src="../assets/img/blur-login.png">
      </div>
    </div>
  </div>
  <NavigationMenu class="sticky"/>
</template>

<script>

import AppIcon from "./AppIcon.vue";
import NavigationMenu from "./NavigationMenu.vue";

export default {
  name: "LoginPage",
  components: {AppIcon,NavigationMenu},
  data() {
    return {

    }
  }
}
</script>

<style scoped>

div {

}
input {
  outline:none;
}

</style>