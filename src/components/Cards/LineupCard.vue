<script>
export default {
  name: "LineUpCard",

  props: {
    imageUrl: String,
  },
};
</script>
        
<template>
  <div class="w-max hover:ring-1 hover:ring-black hover:ring-offset">
    <div class="bg-lightgray-100 p-8">
      <img :src="imageUrl" alt="GSHOCK" class="max-h-56" />
    </div>
    <div class="p-1 flex flex-col pl-4">
      <span class="font-normal">G-SHOCK</span>
      <span class="font-bold h-12">GM-B2100BD-1A</span>
    </div>
  </div>
</template>