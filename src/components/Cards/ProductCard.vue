<script>
export default {
  name: "ProductCard",
  props: {
    imageSrc: String,
    title: String,
    desc: String,
  },
};
</script>

<template>
  <div
    class="bg-lightgray-200 text-center p-6 flex flex-col justify-center w-full md:w-96"
  >
    <div class="h-72 w-full flex flex-row justify-center">
      <img class="h-full w-auto" :src="imageSrc" alt="MR-G" />
    </div>
    <div class="mt-8">
      <p class="font-bold text-3xl uppercase">{{ title }}</p>
      <p class="text-sm font-normal mt-4 normal-case">
        {{ desc }}
      </p>
      <p class="text-sm font-normal mt-2">G-SHOCK</p>
    </div>
  </div>
</template>