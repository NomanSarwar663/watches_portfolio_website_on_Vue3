<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      catalogueData: [
        "https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GR/GRB/GR-B200-1A9/assets/GR-B200-1A9_Seq1.png.transform/main-visual-pc/image.png",
        "https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GR/GRB/GR-B200-1A9/assets/GR-B200-1A9_Seq2.jpg.transform/main-visual-pc/image.jpg",
        "https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GR/GRB/GR-B200-1A9/assets/GR-B200-1A9_Seq3.jpg.transform/main-visual-pc/image.jpg",
      ],
      watchOptions: [
        "https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GR/GRB/gr-b200-1b/assets/GR-B200-1B.png.transform/color-variation/image.png",
        "https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GR/GRB/GR-B200-1A9/assets/GR-B200-1A9_Seq1.png.transform/color-variation/image.png",
        "https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GR/GRB/GR-B200-1A/assets/GR-B200-1A_Seq01.png.transform/color-variation/image.png",
      ],
    };
  },
};
</script>

<template>
  <div class="m-24">
    <div class="w-full flex flex-row gap-16">
      <div class="w-2/3 grid grid-cols-2 gap-12">
        <div class="w-full h-full" v-for="image in catalogueData" :key="image">
          <img :src="image" :alt="image" class="" style="height: 28rem" />
        </div>
      </div>
      <div class="w-1/3 mt-16 ml-8">
        <p class="font-normal text-xl">MASTER OF G - AIR</p>
        <p class="font-normal text-xl mt-2">GRAVITYMASTER</p>
        <h2 class="font-bold text-5xl">GR-B200-1A9</h2>
        <div class="flex flex-row flex-wrap gap-4 mt-20">
          <div
            v-for="image in watchOptions"
            :key="image"
            class="
              bg-lightgray-100
              flex
              justify-center
              items-center
              w-20
              h-20
              rounded-md
            "
          >
            <img class="w-16 h-16" :src="image" :alt="image" />
          </div>
        </div>
        <div class="w-full mt-16 flex flex-col gap-4">
          <button class="w-full border border-gray hover:border hover:border-black py-3">Favourite</button>
          <button class="w-full border border-gray hover:border hover:border-black py-3">Store Locator</button>
        </div>
      </div>
    </div>
  </div>
</template>