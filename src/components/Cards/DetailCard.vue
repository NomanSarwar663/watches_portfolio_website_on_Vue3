<script>
export default {
  name: "DetailCard",
  props: {
    title: String,
    desc: String,
    imageSrc: String,
  },
};
</script>

<template>
  <div class="text-left p-4">
    <img class="w-full h-auto" :src="imageSrc" :alt="title" />
    <h2 class="font-bold text-xl py-4">
      {{ title }}
    </h2>
    <p class="font-normal text-sm leading-relaxed">
      {{ desc }}
    </p>
  </div>
</template>