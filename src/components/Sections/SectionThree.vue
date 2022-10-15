<script>
import LineupCard from "../Cards/LineupCard.vue";
export default {
  name: "SectionThree",
  data() {
    return {
      lineupItems: [
        {
          id: 1,
          imageSrc:
            "https://gshock.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GM/gmb/gm-b2100bd-1a/assets/GM-B2100BD-1A.png.transform/product-panel/image.png",
        },
        {
          id: 2,
          imageSrc:
            "https://gshock.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GM/gmb/gm-b2100d-1a/assets/GM-B2100D-1A.png.transform/product-panel/image.png",
        },
        {
          id: 3,
          imageSrc:
            "https://gshock.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GM/gmb/gm-b2100gd-5a/assets/GM-B2100GD-5A.png.transform/product-panel/image.png",
        },
      ],
    };
  },
  components: { LineupCard },
};
</script>
    
<template>
  <div class="bg-lightgray-200">
    <div class="px-2 text-center pt-16 p-4 pb-12">
      <h2 class="text-3xl font-bold">Lineup</h2>
    </div>

    <div class="pb-20">
      <div class="flex flex-row mx-16 h-full mt-8 gap-4">
        <LineupCard
          v-for="item in lineupItems"
          :key="item.id"
          :imageUrl="item.imageSrc"
        />
      </div>
    </div>
  </div>
</template>