<template>
  <div class="app-icon duration-300" :style="style">
    <svg v-if="name === 'arrow'" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.5L10 12.5L15 7.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'wallet'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.07822 7.86373L21.5866 9.68813V22.4033L4.99218 20.0501C3.51286 19.8403 2.41339 18.574 2.41339 17.0798V8.07352C2.41339 6.70448 3.34022 5.5091 4.66612 5.16808L18.5519 1.59668V5.74749" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.5866 13.6767L16.6496 13.1208C15.2025 12.9579 13.9356 14.0902 13.9356 15.5464V15.5464C13.9356 16.7849 14.863 17.827 16.0931 17.9708L21.5866 18.6131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'market'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.55017 21V9.52261H5.70463V21H10.1083V3.78354H14.3842V21H18.6568V16.3007H22.4499V21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'home'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8499 15.8257V13.1822H8.8776V21.9383H2.5V10.9383L12 2.93832L21.5 10.9383V21.9383H14.8499" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'insights'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.0791 11.4178V17.9575C3.0791 20.1666 4.86996 21.9575 7.0791 21.9575H17.9208C20.1299 21.9575 21.9208 20.1666 21.9208 17.9575V3.04251C21.9208 2.49023 21.4731 2.04251 20.9208 2.04251H8.16143C7.60914 2.04251 7.16143 2.49023 7.16143 3.04251V17.8438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.9288 6.44464H16.9542" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.9288 10.1526H12.9888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg class="color" v-if="name === 'profile'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.9999" cy="6.8278" r="4.66468"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.846 21.7749V19.8766C20.846 17.6674 19.0552 15.8766 16.846 15.8766H7.15381C4.94467 15.8766 3.15381 17.6674 3.15381 19.8766V21.7749H12.6034" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'search-icon'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_177_141)">
        <path d="M16.298 16.2981C13.2977 19.2985 8.43306 19.2985 5.43266 16.2981C2.43227 13.2977 2.43227 8.43308 5.43266 5.43269C8.43306 2.4323 13.2977 2.4323 16.298 5.43269C19.2984 8.43308 19.2984 13.2977 16.298 16.2981ZM16.298 16.2981L19.6935 19.6935" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_177_141">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    <svg v-if="name === 'input-menu'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2546 6.21497H3.75464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.2546 12.215L9.25464 12.215" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.2546 17.785L13.2546 17.785" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'vector'" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00326 1.84181L1.15747 9.00001M1.15747 9.00001L8.00326 16.1582M1.15747 9.00001H18.8424" stroke="#191C32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'menu'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#191C32"/>
      <circle cx="4.4751" cy="12" r="2" fill="#191C32"/>
      <circle cx="19.5249" cy="12" r="2" fill="#191C32"/>
    </svg>
    <svg v-if="name === 'clock'" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.50002 5.32317V9.00002H12.0447M15.4373 9.00002C15.4373 12.8314 12.3314 15.9373 8.50002 15.9373C4.66867 15.9373 1.56274 12.8314 1.56274 9.00002C1.56274 5.16867 4.66867 2.06274 8.50002 2.06274C12.3314 2.06274 15.4373 5.16867 15.4373 9.00002Z" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'user'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15.9999" cy="13.4522" r="2.46586" stroke="#F7931A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.2191 21.1516V20.7491C11.2191 19.6446 12.1145 18.7491 13.2191 18.7491H18.781C19.8856 18.7491 20.781 19.6446 20.781 20.7491V21.1516" stroke="#F7931A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'mail'"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12H22V21H10V12ZM10 12L16 17L19 15" stroke="#5FC88F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'lock'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11.3179" y="15.0986" width="9.56336" height="6.58655" rx="1" stroke="#9F9DF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.1477 17.8763V18.886" stroke="#9F9DF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.7678 14.69V12.3149C13.7678 11.2103 14.6633 10.3149 15.7678 10.3149H17.2006C18.3051 10.3149 19.2006 11.2103 19.2006 12.3149V12.4303" stroke="#9F9DF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<style>
.app-icon svg {
  width: 100%;
  height: 100%;
  stroke:currentColor;
}
</style>

<script>

export default {
  name: "AppIcon",
  components: {},
  data() {
    return {
    }
  },
  props:{
    name: {
      String
    },
    width: {
      Number
    },
    height: {
      Number
    },
  },
  computed: {
    style() {
      return {
        width:this.width + 'px',
        height:this.height + 'px'
      }
    }
  }
}
</script>

<style scoped>

</style>