<script>
import GShockLogo from "@/assets/GShockLogo.vue";
export default {
  name: "AppFooter",
  components: { GShockLogo },
};
</script>

<template>
  <div class="bg-black text-white">
    <div class="mx-24 pb-4">
      <div class="px-24 pt-8 flex">
        <div class="w-1/4 mr-8 mt-4">
          <GShockLogo />
          <p class="text-xs text-lightgray-300 font-normal mt-4">
            Retains the dust- and <br />
            mud-resistant structure of the MUDMASTER series
          </p>
        </div>
        <div class="w-1/4 mr-8">
          <p class="text-base font-medium">Products</p>
          <ul class="text-sm font-normal mt-8 leading-loose text-lightgray-300">
            <router-link to="/products"><li>Products</li></router-link>
            <li>Women</li>
            <li>New Products</li>
          </ul>
        </div>
        <div class="w-1/4 mr-8">
          <p class="text-base font-medium">Products</p>
          <ul class="text-sm font-normal mt-8 leading-loose text-lightgray-300">
            <li>Products</li>
            <li>Women</li>
            <li>New Products</li>
          </ul>
        </div>
        <div class="w-1/4 mr-8">
          <p class="text-base font-medium">Products</p>
          <ul class="text-sm font-normal mt-8 leading-loose text-lightgray-300">
            <li>Products</li>
            <li>Women</li>
            <li>New Products</li>
          </ul>
        </div>
      </div>
      <div class="mt-12">
        <div class="flex items-center">
          <a href="https://www.facebook.com/CASIOGSHOCK/">
            <img
              class="w-8 h-auto mr-2"
              src="https://gshock.casio.com/content/dam/casio/global/common/logo/fb_icon_w.png"
              alt="facebook icon"
            />
          </a>
          <a href="https://www.youtube.com/user/CasioGshockOfficial">
            <img
              class="w-8 h-auto"
              src="https://gshock.casio.com/content/dam/casio/global/common/logo/youtube_icon_w.png"
              alt="youtube icon"
            />
          </a>
        </div>
        <div class="text-xs font-thin mt-2">
          <p>Global</p>
          <p>© 2022 CASIO COMPUTER CO., LTD</p>
        </div>
      </div>
    </div>
  </div>
</template>