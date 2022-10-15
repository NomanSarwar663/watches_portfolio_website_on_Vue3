<script>
import Logo from "../assets/GShockLogo.vue";
export default {
  name: "AppHeader",
  components: { Logo },
};
</script>

<template>
  <div class="bg-black px-14 py-4 text-white">
    <div class="flex items-center">
      <div class="w-56 h-full">
        <Logo />
      </div>
      <div class="grow mx-4 px-4">
        <nav class="px-4 text-xs">
          <ul class="flex justify-between font-medium">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>COLLECTION</li>
            <li>BRAND</li>
          </ul>
        </nav>
      </div>
      <div class="px-4">
        <input
          class="
            bg-transparent
            focus:outline-none
            px-3
            py-1
            text-xs
            border-transparent
            focus:border-transparent
          "
          type="text"
          placeholder="search..."
        />
      </div>
    </div>
  </div>
</template>