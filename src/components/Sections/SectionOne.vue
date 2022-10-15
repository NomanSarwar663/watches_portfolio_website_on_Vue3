<script>
export default {
  name: "SectionOne",
  data() {
    return {
      sectionOneHero:
        "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/type/full-metal/gm-b2100/_jcr_content/root/responsivegrid/container_1689197747/image.casiocoreimg.jpeg/1658972467906/hero-pc.jpeg",
    };
  },
};
</script>

<template>
  <div>
    <img :src="this.sectionOneHero" class="h-full w-full" />
  </div>
</template>